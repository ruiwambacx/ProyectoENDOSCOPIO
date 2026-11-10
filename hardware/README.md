# Cuerpo de control v0.1 — prototipo imprimible con sensado de ruedas

Estado: **geometría generada y verificada por script (interferencias, tope); NO impreso ni probado.** Todas las dimensiones son parámetros de prototipo, no medidas de un equipo de la clínica. Según el documento del proyecto (§3.1), no congelar medidas antes de probar el mecanismo en banco: esta versión es para **probar mecanismo y sensado**, no una carcasa definitiva.

## 1. Qué hay

```
hardware/
  cad/handle.js          <- modelo paramétrico (JSCAD). Cambiar parámetros P{} y correr: node handle.js
  stl/body_print.stl     <- cuerpo (cabeza + grip + collar de tubo + bahía MCU), orientado para imprimir
  stl/cover_print.stl    <- tapa derecha (anillo, bolsillo del sensor derecho)
  stl/wheel_UD_print.stl <- rueda U/D (Ø58, grande)  - izquierda
  stl/wheel_RL_print.stl <- rueda R/L (Ø50, menor)   - derecha
  stl/assembly_preview.stl <- ensamblado (solo para mirar en Onshape/visor; no imprimir)
```
Para regenerar: `cd hardware/cad && npm install && node handle.js`.

## 2. Diseño en una mirada

- **Dos ruedas coaxiales, independientes**, sin eje pasante: cada una gira apoyada en un **anillo-cojinete** impreso (holgura radial 0,4 mm) en su pared lateral. Esto deja el eje libre para que **el imán quede en el centro de la rueda, frente a su sensor**.
- **Sensado**: un **AS5600** (encoder magnético) por rueda, bajo un bolsillo de 25×25 mm en la pared; imán diametral 6 × 2,5 mm en el bolsillo central de la rueda; entrehierro de diseño **1,5 mm**.
- **Transmisión (D06 del proyecto)**: cada rueda lleva un **carrete de tendón** (tambor Ø26, garganta 3 mm, orificio de anclaje Ø1,8). Un tendón con ambos extremos sale hacia arriba/abajo, en dos guías por rueda.
- **Tope mecánico**: ranura de 300° en el muñón + taco en el anillo ⇒ **recorrido ≈ ±145°** (verificado por barrido: libre hasta ~140°, bloquea ~145°). Sirve además para que el sensor **nunca cruce su salto 360°→0°**.
- **Cuerpo + tapa** (no dos mitades simétricas): el cuerpo es profundo y se cierra con una tapa de 4 tornillos M3 (accesible para mantenimiento). Las ruedas entran por la cara abierta.
- **Ventana frontal** para pulgar/dedos sobre las ruedas.
- **Bahía de microcontrolador** (XIAO ~21×17,8) en el grip, con ranura USB‑C trasera, y **salida trasera Ø7** para el cable de cámara/umbilical.
- **Collar de tubo**: orificio Ø12,4 (provisorio), **4 asientos Ø2,6 para fundas PTFE** de tendón, tornillo de apriete M3 lateral, 2 puntos M3 reservados para un futuro **módulo sensor de avance/giro**.

## 3. Parámetros clave (editar en `handle.js`, objeto `P`)

| Parámetro | Valor | Nota |
|---|---|---|
| Cabeza Ø exterior / cavidad | 76 / 70 mm | Verificar contra equipos reales |
| Ancho exterior de cabeza | 60 mm | |
| Grip (X×Y) | 44 × 40 mm | |
| Altura total | 156 mm (con collar) | |
| Rueda U/D / R/L (Ø agarre) | 58 / 50 mm | |
| Muñón rueda / anillo | Ø40 / Ø40,8 | 0,4 mm radial; ajustar según impresora |
| Entrehierro imán–chip | 1,5 mm | Rango AS5600 típico 0,5–3 mm **[verificar en hoja de datos]** |
| Tubo exterior (provisorio) | Ø12 mm | No hay tubo elegido |
| Recorrido de rueda | ±145° | Recorrido de tendón por lado ≈ ±33 mm (r=13 mm) → **validar con punta real** |

## 4. Eléctrico (para detectar el movimiento)

**Propuesta**: MCU **Seeed XIAO RP2040** (ADC 12 bit, 3,3 V, USB‑C) + **AS5600** en modo salida analógica. Cualquier MCU de 3,3 V con ≥4 ADC sirve. *Todo lo de pines/modulos debe contrastarse con la hoja de datos y el módulo real antes de soldar.*

```
 Rueda U/D (izq) ── AS5600 #1 ──OUT──► A0 ┐
 Rueda R/L (der) ── AS5600 #2 ──OUT──► A1 ├─ XIAO RP2040 ──USB‑C──► PC (serial)
 [reservado] avance tubo  (AS5600 #3) ──► A2 │
 [reservado] giro tubo    (AS5600 #4) ──► A3 ┘
 Cámara endoscópica ──────────────── USB aparte ──► PC   (no pasa por el MCU)
```

| Señal | Conexión | Comentario |
|---|---|---|
| Alimentación sensores | 3V3 del XIAO → VCC/3V3 de cada AS5600 | Modo 3,3 V: en el AS5600 puentear VDD5V con VDD3V3 (según módulo) |
| Tierra | GND común | |
| Salida | OUT de cada AS5600 → A0…A3 | Modo analógico (0–100 % de VDD ↔ 0–360°) |
| DIR | A GND (o 3V3) en cada módulo | Fija el sentido de giro; la rueda derecha está espejada |
| Cable cover→MCU | **conector con ≥15 cm de holgura** (JST‑SH 4p o Dupont) | Para abrir la tapa sin desoldar |

**Lectura**: ángulo = ADC / 4095 × 360°. Con ±145° de recorrido, el rango usado es ~10–90 % ⇒ no cruza el salto.
**Calibración al montar (importante)**: poner la rueda en neutro, girar el imán en su bolsillo hasta que el ADC lea ≈ 2048 ± 150, y fijarlo (cianoacrilato/epoxi). Así el salto queda en el sector bloqueado.
**Riesgo conocido**: el ADC del RP2040 tiene ruido (resolución efectiva menor a 12 bit). Si limita, alternativas: promediar/sobremuestrear, **I²C con multiplexor TCA9548A** (los AS5600 comparten dirección), o AS5600 en modo PWM. Medir antes de decidir (Fase 0 del marco teórico).

## 5. Lista de materiales (sin precios; no hay compras autorizadas)

| Cant. | Ítem | Estado |
|---|---|---|
| 2 (+2 reserva) | Módulo AS5600 | Verificar tamaño real (pocket 25×25) |
| 2 (+2) | Imán de neodimio diametral Ø6 × 2,5 mm | Debe ser **diametral** (polos a cada lado del diámetro) |
| 1 | Seeed XIAO RP2040 (o equivalente) | |
| 4 | Tornillo M3 × 14 (autorroscante en PLA/PETG) | Tapa |
| 1 | M3 × 8 (tornillo de apriete del tubo) | |
| 4 | Funda PTFE/Bowden Ø ext. ~2,4 mm | Dimensión a confirmar con el tendón |
| ~2 m | Tendón (hilo de acero trenzado o Dyneema) | Elegir tras ensayo |
| ~0,5 m | Cable 4 hilos 28–30 AWG + conectores | |
| 1 | Tubo de prueba Ø12 mm | Provisorio |

Cotizaciones: pendientes (registrar proveedor, fecha, moneda, envío, costo total).

## 6. Impresión y montaje

- **Material/ajustes sugeridos**: PETG o PLA, capa 0,2 mm, 3–4 perímetros, relleno 20–30 %. **Piezas orientadas** (cara externa sobre la cama; cavidades hacia arriba). *No se ha revisado en un laminador*: esperar posibles soportes en el collar (orificios horizontales) y la ranura USB‑C. Cabe en cama de 220 mm (156 × 76 × 54).
- **Orden de montaje**:
  1. Imprimir y limpiar. Probar rueda en anillo (debe girar sin raspar; lijar si hace falta).
  2. Pegar imanes en las ruedas (polaridad indiferente; diametral).
  3. Insertar PCB AS5600 en los bolsillos (cara del chip hacia la rueda) y pasar cables por el canal hacia la cavidad.
  4. Insertar rueda U/D en el cuerpo (alineando el taco del anillo con la entrada de la ranura), luego rueda R/L en la tapa.
  5. Cerrar con 4 tornillos, comprobar giro ±145° y que el tope actúe.
  6. Calibrar imán → ADC ≈ 2048 en neutro (§4).
  7. Conectar al MCU y leer por serie.

## 7. Ver el prototipo / Onshape
**Guía paso a paso sin programación: [COMO_VER_EN_ONSHAPE.md](COMO_VER_EN_ONSHAPE.md).** Visor de doble clic: `visor/visor.html` (ruedas con tope y lectura simulada del sensor). Para Onshape usar `stl/aligned/` (piezas en posición de ensamble, eje de ruedas = Z).

Detalle técnico:

- Onshape → *Create → Import* → seleccionar los `.stl` → quedan como **mallas** (no tienen árbol de operaciones ni cotas editables). Sirve para **inspeccionar, medir, hacer un assembly de revisión y comparar con la clínica**.
- Para **modelo paramétrico editable** en Onshape hay dos caminos: (a) rehacer con *Sketch + Extrude* usando la tabla de §3 y la sección 2 (la geometría es cilíndrica y muy regular); (b) pedirme una versión en **FeatureScript** (más trabajo, y no la puedo probar sin Onshape abierto). Mientras tanto, **la fuente paramétrica real es `handle.js`**.

## 8. Qué NO está (limitaciones declaradas)

- **Sin fricción ajustable ni retorno** (el proyecto pide fricción ajustable y no imponer retorno al centro): no incluido en v0.1; se prueba primero la fricción natural del cojinete impreso. v0.2: freno por tornillo en el anillo.
- **Sin guías/poleas de tendón** entre rueda y collar: tendones libres en aire; si rozan, añadir poleas guía.
- **Sin sensado de tubo** (avance/giro): solo espacio y entradas A2/A3 reservadas. Es fase posterior del proyecto.
- **Sin botones funcionales ni acabado ergonómico**: la forma es abstracta (cilindro + prisma) y no está contrastada con gastroscopio/colonoscopio.
- **Dimensiones de módulos electrónicos asumidas** (AS5600, XIAO): verificar antes de imprimir toda la serie; ajustar `P.pcb` y las cajas de la bahía.
- **No validado**: ni la holgura de impresión (0,4 mm), ni la estabilidad de lectura del sensor, ni el recorrido útil del tendón.

## 9. Primeras pruebas sugeridas (Fase 0/C del proyecto)

1. Imprimir **solo una rueda + tapa** (pieza más crítica) y verificar giro/tope/entrehierro.
2. Leer el ADC en reposo (ruido), girar ±145° y graficar (linealidad, histéresis al invertir sentido).
3. 100 ciclos de rueda: ¿se afloja el imán, se desgasta el cojinete?
4. Conectar tendón + tubo corto de un eje (siguiente entregable).
