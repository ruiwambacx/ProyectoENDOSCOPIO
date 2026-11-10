# Proyecto integrado: reconciliación del documento maestro con lo definido después

Versión 0.1 · 2026-11-10. Objetivo: juntar `PROYECTO_SIMULADOR_ENDOSCOPIA.md` (v0.1, 10-nov) con lo que se definió en `01` (constructo), `02` (evidencia) y `hardware/`, **recuperar lo que se estaba dejando de lado** y **decidir con cuál versión nos quedamos** cuando hay choque.

## 1. Decisiones confirmadas por ti (hasta hoy)

| ID | Decisión | Fuente |
|---|---|---|
| D01–D05 | Cámara real primero; gamificación por etapas; explorar cuerpo común gastro/colon; revisar tubos en la clínica; presupuesto gradual y bajo costo | Doc maestro |
| D10 | Constructo = destreza psicomotora básica del endoscopio flexible (ruedas + tubo guiados por imagen); **no** decisión clínica | 10-nov |
| D11 | Grupos de experiencia: novato 0 · intermedio 50–<200 · experimentado ≥200 (conteo separado alta/baja) | 10-nov, doc 02 |
| D12 | Criterio externo candidato: **GAGES-UE/GAGES-C** (leer texto completo antes de cerrar) | 10-nov |
| D13 | **Métricas crudas**, sin puntaje compuesto hasta después del piloto | 10-nov |
| D14 | Proyecto a largo plazo; sin plazos de postulación | 10-nov |

Siguen como *propuestas* del doc maestro (D06–D09): tendones sin motores al inicio, blancos físicos detectables, sensores por etapas, modalidad virtual futura (no compromiso del MVP).

## 2. Lo que estaba quedando fuera (y dónde lo recuperamos)

| # | Elemento del doc maestro | Estado en lo hecho | Qué hacemos |
|---|---|---|---|
| 1 | **Medir equipos de la clínica** (§6) | No hecho; **todas las dimensiones del 3D son provisorias** | Ficha lista en [mediciones-clinica.md](mediciones-clinica.md), enlazada a los parámetros del modelo. Es la tarea con mayor impacto en el hardware |
| 2 | **Cámara y video** (§3.3, Fase B) | Nada | Mantener como fase propia; es **la mayor incertidumbre técnica** (enfoque cercano, latencia). Prueba barata antes de más mecánica (ver §3.2) |
| 3 | **Punta articulada de 1 y 2 ejes, tubo, tendones** (§3.2, Fase C) | Solo carretes y entradas de tendón en el mango | Banco de punta de un eje **antes** de seguir refinando el mango (ver §3.2) |
| 4 | **Fricción ajustable, tensores, lastres, botones, acople de tubo reemplazable** (§3.1) | No incluidos en v0.1 (declarado) | Lista para v0.2 (tabla §3.1) |
| 5 | **Escenario físico y blancos** (§3.4, §4.1) | Nada | Fase E–F; definir primer recorrido abstracto que obligue a usar ambas manos |
| 6 | **Presupuesto con costo de desarrollo vs. por unidad** (§7) | BOM sin precios | Plantillas CSV: [presupuesto.csv](presupuesto.csv) y [../hardware/lista-componentes.csv](../hardware/lista-componentes.csv). Sin compras autorizadas |
| 7 | **SUS y NASA-TLX** (§9) | No incorporados | Incluir como medidas secundarias en el estudio de grupos conocidos, declarando la escala (ENDONIX usó suma 0–600) |
| 8 | **Privacidad del video** (§10: no guardar video por defecto) | **Choque con nuestro plan** (ver §3.5) | Resuelto abajo |
| 9 | **Esquema de datos de sesión** (§10) | No | Fase de software (al final): ejercicio, versión, calibración, ID seudónimo, eventos con tiempo |
| 10 | **Registro de decisiones y estructura de carpetas** (§10, §11) | Parcial | Este documento continúa el registro; carpetas en §5 |
| 11 | **Modalidad virtual futura (D09)** | Sensores ya la permiten | No priorizar; no cuesta nada mantenerla abierta |

## 3. Choques entre lo del doc maestro y lo que yo había definido: cómo los sopeso

### 3.1 Forma del mango: «dos mitades» (doc maestro) vs. «cuerpo + tapa» (mi v0.1)

| Criterio | Dos mitades simétricas | Cuerpo + tapa (actual) |
|---|---|---|
| Fidelidad al doc maestro §3.1 | Alta | Media |
| Imán y sensor deben quedar en el eje de cada rueda | Exige el eje libre; se resuelve igual con anillos | Ya resuelto y verificado (0 mm³ de interferencia) |
| Impresión | Dos piezas parecidas, cavidades hacia arriba | Una pieza profunda (156×76×54) + tapa plana, sin soportes previstos |
| Acceso a mantenimiento | Abrir ambas mitades | Abrir solo la tapa (cámara de ruedas) |
| Riesgo | Más piezas a alinear | Pieza grande: más costo de reimprimir si falla |

**Recomendación: quedarnos con cuerpo + tapa para v0.1** (está resuelto y verificado) y **revisitar tras las medidas de la clínica**. Es un mecanismo de prueba, no la carcasa final (el doc maestro lo pide así).

### 3.2 Orden de trabajo: «mecánica primero, mango al final» (doc maestro) vs. «mango con sensores primero» (lo que pediste y entregué)

El doc maestro pide: imagen (B) → punta de 1 eje en banco (C) → mango (D), y «no imprimir carcasa definitiva antes de probar el mecanismo». Tu prioridad era un entregable 3D del cuerpo con sensores. **No hay contradicción si el mango se trata como banco de pruebas de sensado**, pero sí un riesgo: avanzar solo en el mango deja sin atacar lo más incierto (cámara, tendones/punta).

**Recomendación (ruta en paralelo, bajo costo):**
1. *Imprimir solo una rueda + tapa* y probar giro, tope y lectura del sensor (cupón de prueba; ya descrito en hardware/README §9).
2. *Probar una cámara candidata* contra un blanco impreso (enfoque cercano, latencia). Es barato y define el diámetro de punta.
3. *Banco de punta de un eje con tendón* (sin carcasa).
4. Recién con (1)-(3) + medidas de la clínica, congelar dimensiones del mango v0.2.

### 3.3 Qué medimos: «precisión y estabilidad por video» (doc maestro) vs. «cinemática y consistencia por sensores» (mi doc 01)

Ambas son necesarias y **miden cosas distintas**. Con D13 (crudas) se conservan todas por separado, en cuatro familias:

| Familia | Ejemplos (crudas) | Fuente | Pregunta que responde |
|---|---|---|---|
| Resultado de tarea | Objetivos cumplidos, orden, tiempo | Video/software | ¿Logró la tarea? |
| Calidad del control | Error de centrado, tiempo estable | Video | ¿Con qué precisión? |
| Cinemática | Recorrido angular de ruedas, reversiones, suavidad | Sensores | ¿Con qué eficiencia? |
| Consistencia | Dispersión entre ensayos | Agregada | ¿Es reproducible? |

Para **validez de constructo** (separar expertos de novatos), la evidencia de otros simuladores sugiere que **recorrido/cinemática y consistencia** discriminan mejor que el tiempo (doc 02 §2). El video aporta resultado y precisión. **Nos quedamos con las cuatro familias; la candidata a métrica primaria del estudio de grupos conocidos es cinemática + consistencia**, a fijar antes de ver datos.

### 3.4 Gamificación vs. validez

Premios y niveles pueden introducir varianza irrelevante (aprender el juego en vez de la destreza). **Decisión propuesta:** el juego tiene *modo práctica* (ayudas, recompensas) y *modo evaluación* (configuración fija, sin ayudas), como ya dice el doc maestro §4.4; **todo el estudio de validez usa solo el modo evaluación.** La puntuación compuesta se difiere (D13).

### 3.5 Video: «no guardar por defecto» vs. «evaluar con GAGES sobre video a ciegas»

Para puntuar GAGES con evaluadores ciegos y medir acuerdo inter-evaluador hay que **grabar** a los participantes. Se concilia así: sin video en uso cotidiano; **video solo en sesiones de estudio**, con propósito declarado, consentimiento informado, sin rostro (cámara apuntando a manos/pantalla), ID seudónimo y almacenamiento acotado. Al involucrar participantes humanos, **corresponde pasar por comité de ética** antes del estudio (a confirmar en tu institución: no es un paso que pueda saltarse).

### 3.6 Fases A–G (doc maestro, técnicas) y 0–5 (mi doc 01, de validez)

Son dos vías distintas; las unifico en una sola ruta con puertas de salida:

| Vía técnica (doc maestro) | Vía de validez (doc 01) | Puerta |
|---|---|---|
| A. Referencias y medidas de clínica | V1. Contenido (panel de expertos) | Medidas hechas + matriz de tareas aprobada |
| B. Imagen (cámara + blanco) | V0. Caracterización técnica de sensores | Enfoque, latencia y ruido aceptables |
| C. Mecánica (punta 1→2 ejes) | — | Movimiento repetible sin atasco |
| D. Mango (cuerpo + tubo) | V0 (cont.) | Operación con ambas manos |
| E–F. Juego mínimo e integración (recorrido de varios planos) | — | Objetivos fiables; tarea exige ruedas + avance + giro |
| G. Piloto (usabilidad, ergonomía, SUS/NASA-TLX) | V2. Grupos conocidos (novato/intermedio/experimentado) | Fallos documentados; tareas con holgura para discriminar |
| — | V3 curva de aprendizaje · V4 concurrente/confiabilidad · V5 transferencia | Estudios posteriores |

Regla del doc maestro que mantenemos: **no avanzar de fase por apariencia; registrar resultados y fallos.**

## 4. Lo que de mi propuesta se mantiene, se ajusta o se descarta

| Mi propuesta | Veredicto | Motivo |
|---|---|---|
| Sensor AS5600 por rueda, MCU XIAO RP2040, 4 entradas analógicas | **Mantener, a validar en banco** | Barato y simple; riesgo de ruido del ADC declarado |
| Tope mecánico ±145° | **Mantener** | Cumple «topes mecánicos» del doc maestro y evita el salto del sensor |
| Cuerpo + tapa | **Mantener (v0.1)** | §3.1 |
| Sin fricción ajustable en v0.1 | **Ajustar → v0.2** | El doc maestro la pide; primero medir fricción natural y la del equipo real |
| Ruta «mango primero» | **Ajustar** | §3.2 (ruta en paralelo) |
| Corte de grupos 0/20–100/>200 | **Descartado** | Reemplazado por D11 (evidencia) |
| Escala «OSATS-tipo» genérica | **Descartada** | Reemplazada por GAGES (D12) |
| Estudio inicial = fase 2 (grupos conocidos) | **Mantener como recomendación** | Sin plazo; es la base de la validez |
| Compuesto de puntaje | **Descartado por ahora** | D13 |

### 3.1b Lista de mejoras v0.2 del mango (del doc maestro)

Fricción ajustable (tornillo/almohadilla) · tensores de tendón · guías/poleas · botones funcionales (reserva de espacio) · acople de tubo reemplazable con alivio de tensión · lastres internos para ajustar masa/centro de gravedad · módulo de sensado de avance y giro del tubo (entradas A2/A3 ya reservadas) · carcasa ergonómica tras medidas reales.

## 5. Estructura de carpetas vigente

```
PROYECTO ENDOSCOPIO/
  PROYECTO_SIMULADOR_ENDOSCOPIA.md   (documento maestro, intacto)
  docs/  01 marco teórico · 02 evidencia · 03 este doc · 04 plan de búsqueda · mediciones-clinica.md · presupuesto.csv
  hardware/  cad/ (modelo paramétrico) · stl/ · visor/visor.html · lista-componentes.csv · README.md · COMO_VER_EN_ONSHAPE.md
  software/  (vacío: al final, como pediste)
```

## 6. Pendientes que necesito de ti

1. ¿Aceptas la **ruta en paralelo** del §3.2 (cupón de una rueda, prueba de cámara, banco de punta) antes de congelar el mango?
2. ¿Aceptas que el estudio de validez use **solo modo evaluación** y video únicamente en sesiones de estudio con ética (§3.4–3.5)?
3. ¿Puedes acceder a medir los equipos de la clínica (ficha en mediciones-clinica.md)? Es lo que más reduce incertidumbre del hardware.
