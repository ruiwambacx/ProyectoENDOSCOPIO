# Simulador de endoscopia de bajo costo

Documento de continuidad para trabajar en VS Code

Fecha: 10 de noviembre de 2026 · Versión: 0.1 · Estado: definición y factibilidad; todavía sin prototipo construido.

## 1. Propósito y decisiones del proyecto

Desarrollar un simulador físico de habilidades endoscópicas básicas, con cuerpo de control imprimible en 3D, manipulación con ambas manos y cámara real. Un programa mostrará el video y propondrá objetivos progresivos dentro de escenarios físicos de entrenamiento.

Decisiones expresadas por el usuario:

- Explorar un mismo cuerpo de control para gastroscopia y colonoscopia.
- Evaluar los equipos de la clínica antes de decidir si el tubo de inserción, llamado aquí también “manguera”, puede ser común o necesita variantes.
- Priorizar inicialmente una cámara física y agregar objetivos mediante software.
- Incorporar gamificación y progresión por etapas.
- Mantener el bajo costo como criterio permanente, aceptando gastos de experimentación durante el desarrollo.
- Definir el presupuesto gradualmente; no existe aún un monto máximo ni autorización de compras.

Interpretación de diseño: además de servir a ambos tipos de endoscopia, conviene que el mango permita incorporar en el futuro una modalidad totalmente virtual. Esta segunda compatibilidad es una propuesta, no un requisito confirmado.

El alcance es entrenamiento en modelos de banco, sin uso en personas ni animales. El prototipo no acreditará por sí solo competencia clínica.

## 2. Lectura crítica de ENDONIX

Fuente principal: Hohlstein et al. *Feasibility, usability, and validity assessment of a novel plug-and-play virtual endoscopy simulator*. Surgical Endoscopy, 2026;40:1629-1640. Publicado en línea el 4 de diciembre de 2025. DOI: [10.1007/s00464-025-12396-8](https://doi.org/10.1007/s00464-025-12396-8).

Se revisó el PDF de 12 páginas proporcionado por el usuario, ubicado originalmente en `<carpeta Descargas>\endonix.pdf`, incluyendo la figura 1. Versión consultable: [artículo completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC12881084/). Las páginas indicadas a continuación son las del archivo PDF.

### 2.1 Qué describe realmente el artículo

| Aspecto | Hallazgo documentado | Localización |
|---|---|---|
| Control | Mango impreso en 3D con ruedas U/D y R/L funcionales | p. 2 |
| Mano derecha | Tubo conectado a un terminal, con rotación, avance y retirada | p. 2 y figura 1, p. 4 |
| Límite de recorrido | Al llegar al tope físico de avance o retirada, el movimiento virtual continúa | p. 2 |
| Otros mandos | Los demás botones del mango no son funcionales en la versión estudiada; incluye instrumento simulado | p. 2 |
| Entorno | Simulación virtual con estilo de videojuego, tiempo, puntuación y objetivos | pp. 2-3 |
| Evaluación | 310 conjuntos de datos: 114 novatos, 49 principiantes y 147 experimentados | pp. 4 y 6 |
| Usabilidad | Mediana SUS de 75/100 | p. 5 |
| Realismo | Valoración favorable en 37,2% de experimentados y 34,9% de principiantes | pp. 5 y 8 |
| Discriminación | Novatos más lentos; no hubo diferencia significativa entre principiantes y experimentados | p. 5 |
| Transferencia | El diseño exploratorio no permite concluir efecto sobre la curva de aprendizaje; requiere seguimiento longitudinal | p. 9 |

ENDONIX ya combina control bimanual y gamificación. Ninguno de estos elementos por separado constituye nuestra diferenciación. El estudio respalda factibilidad y usabilidad, pero no demuestra superioridad frente a nuestro futuro prototipo ni transferencia clínica de este último.

### 2.2 Precauciones al interpretar el estudio

- La muestra procede de dos congresos y la clasificación utiliza experiencia declarada; no equivale a una cohorte longitudinal de alumnos.
- La correlación con experiencia y las diferencias entre grupos no prueban aprendizaje causado por el dispositivo.
- El manuscrito utiliza las etiquetas de validez de apariencia y contenido de forma poco consistente entre métodos y resultados. Conviene citar las preguntas y porcentajes concretos, sin reproducir esa clasificación como conclusión independiente.
- NASA-TLX se presenta como suma no ponderada de 0 a 600. Si empleamos promedio de 0 a 100, debemos declarar la transformación antes de comparar resultados.
- El realismo percibido no identifica por sí solo la causa del problema: no puede atribuirse exclusivamente a gráficos, mango o mecánica.
- El artículo no proporciona planos completos de fabricación ni una lista reproducible de componentes y costos. No permite afirmar que nuestro equipo será más barato todavía.
- La comparación se limita a la versión estudiada. Ausencia de una función en el artículo no demuestra que ninguna versión comercial la tenga.

### 2.3 Diferenciación propuesta, todavía por comprobar

| Dimensión | ENDONIX descrito | Propuesta propia | Evidencia que habrá que obtener |
|---|---|---|---|
| Imagen | Entorno virtual | Video real de cámara en punta | Enfoque cercano, latencia y estabilidad |
| Interacción | Movimientos físicos traducidos a mundo virtual | Punta y tubo recorren un escenario material | Respuesta mecánica y repetibilidad |
| Objetivos | Blancos virtuales | Blancos físicos identificados y señalados en pantalla | Detección fiable y falsas activaciones |
| Escenarios | Módulos de software | Cartuchos físicos intercambiables y reglas digitales | Tiempo y costo de cambiar ejercicios |
| Recorrido | Continuación virtual al alcanzar un tope | Avance físico efectivo dentro del entrenador | Relación entre desplazamiento y progreso |
| Reparación | No detallada en el artículo | Piezas reemplazables y documentación de montaje | Tiempo de reparación y costo real |
| Adaptación local | No evaluada para nuestra clínica | Ergonomía contrastada con los equipos locales | Mediciones y revisión de usuarios |

La propuesta combina un entrenador físico con una capa digital de ejercicios y medición. Su posible ventaja educativa y económica es una hipótesis; no se afirma novedad mundial, patentabilidad ni superioridad demostrada.

## 3. Arquitectura propuesta

```text
Mano izquierda -> ruedas del mango -> poleas/tendones -> punta articulada
Mano derecha   -> avance, retirada y giro del tubo -> movimiento físico
Punta          -> cámara e iluminación -> video USB -> computadora
Escenario      -> blancos físicos -> detección en video -> objetivos y progreso
Sensores opcionales del mango/tubo -> registro sincronizado -> evaluación
```

La primera versión usará transmisión mecánica directa desde las ruedas a la punta. Esto evita introducir motores antes de comprobar la viabilidad del mecanismo. No garantiza una sensación idéntica a un endoscopio real.

### 3.1 Mango común y modular

- Carcasa desmontable en dos mitades, con acceso a tornillos, ejes y tensores.
- Dos ruedas independientes con geometría y separación basadas en mediciones.
- Poleas y tendones intercambiables, con ajuste de tensión y topes mecánicos.
- Fricción ajustable; no imponer retorno automático al centro sin medir el equipo de referencia.
- Reserva de espacio para sensores angulares y botones.
- Acople de tubo reemplazable con fijación repetible de cables, orientación y alivio de tensión.
- Posibilidad de ajustar masa y centro de gravedad mediante lastres internos.

No congelar dimensiones ni imprimir una carcasa definitiva antes de probar el mecanismo en banco. Un mango común será aceptable si permite gestos representativos en ambos procedimientos; no se presupone equivalencia entre modelos o fabricantes.

### 3.2 Tubo de inserción y punta

Evaluar diámetro exterior e interior, flexibilidad, resistencia al acodamiento, transmisión de torsión, fricción superficial y masa por longitud. Un tubo excesivamente blando puede retorcerse sin orientar la punta; uno rígido puede enseñar una respuesta poco representativa.

La punta necesita dos ejes de flexión. Se propone explorar un segmento articulado con cuatro tendones en dos pares antagonistas, guiados a lo largo del tubo. El diseño debe reservar espacio para la cámara y sus cables sin bloquear la flexión.

Ensayar primero un eje en un banco corto y luego dos ejes. Después repetir con la longitud de trabajo prevista y con el tubo curvado: una transmisión que funciona recta puede presentar fricción e histéresis al curvarse.

La articulación, el diámetro final y la longitud no están definidos. La construcción debe decidirse después de seleccionar una cámara candidata y medir equipos locales.

### 3.3 Cámara y video

Requisitos a comprobar antes de comprar varias unidades:

- Compatibilidad de captura con la computadora disponible; preferencia por USB/UVC si las pruebas la confirman.
- Diámetro del cabezal, longitud rígida y flexibilidad del cable.
- Enfoque a las distancias reales de los ejercicios, no solo resolución nominal.
- Campo de visión, distorsión y capacidad para distinguir identificadores.
- Exposición e iluminación suficientes sin reflejos que oculten blancos.
- Orientación consistente de la imagen y ausencia de espejo accidental.
- Latencia medida desde movimiento físico hasta imagen en pantalla.

No asumir que cualquier cámara vendida como “endoscópica” sirve para enfocar blancos muy cercanos. El video y los sensores pueden viajar por conexiones separadas; deberán sincronizarse si se calculan métricas conjuntas.

### 3.4 Escenario físico inicial

Construir un recinto sencillo con blancos reemplazables, posiciones reproducibles y acceso para mantenimiento. Primero utilizar una geometría abstracta; incorporar anatomía solo cuando aporte al objetivo docente.

La carcasa del escenario debe ocultar el trayecto al alumno durante el ejercicio. La visión externa no debe permitir resolver la tarea sin usar la pantalla. Un tutor puede disponer de acceso visual para diagnóstico del prototipo.

## 4. Gamificación sobre video real

### 4.1 Estrategia inicial de objetivos

Usar blancos físicos identificables colocados en el escenario. Explorar marcadores fiduciales o patrones de alto contraste; la familia y tamaño se elegirán mediante pruebas de distancia, iluminación y curvatura.

El programa superpondrá un contorno sobre el blanco detectado, indicará el objetivo activo y mostrará progreso. Dibujar un punto fijo en pantalla no equivale a localizar una estructura del escenario.

Para un primer ejercicio de centrado no se necesita reconstrucción 3D completa. Una detección en 2D puede confirmar identidad, centrado y permanencia. No demuestra contacto, distancia exacta, fuerza ni posición tridimensional de la punta.

### 4.2 Regla de logro inicial, parametrizable

Un objetivo se completa cuando:

1. Se reconoce el identificador esperado con calidad suficiente.
2. Su centro permanece dentro de una región central de la imagen.
3. Se cumple el tiempo de permanencia definido para el nivel.
4. Se cumplen requisitos de escala visible, si el ejercicio utiliza aproximación.
5. El programa registra el evento una sola vez y cambia al siguiente objetivo.

Como punto de partida experimental: zona de centrado equivalente al 10% de la dimensión menor de la imagen y permanencia de 1 segundo. Son parámetros de prototipo, no estándares de competencia. Deben ajustarse tras medir ruido de detección y desempeño.

Si se pierde la detección, pausar o reiniciar la permanencia según una tolerancia explícita; nunca completar el objetivo por ausencia de información. El área aparente solo permite aproximar distancia bajo condiciones controladas: también cambia con inclinación y distorsión.

### 4.3 Secuencia de ejercicios

| Etapa | Tarea | Habilidad principal | Condición de avance |
|---|---|---|---|
| 0 | Abrir video, comprobar orientación y reconocer un blanco | Familiarización | Prueba técnica correcta |
| 1 | Centrar blancos sin desplazar el tubo | Control de ruedas | Permanencia en cada blanco |
| 2 | Alternar blancos laterales y verticales | Coordinación de ambos ejes | Secuencia correcta |
| 3 | Centrar a diferentes profundidades | Ruedas más avance y retirada | Blancos de varios planos |
| 4 | Mantener orientación durante giros del tubo | Coordinación bimanual | Objetivos con necesidad de rotación |
| 5 | Recorrer un trayecto con blancos parcialmente ocultos | Navegación combinada | Secuencia completa y errores registrados |
| 6 | Repetir un recorrido equivalente con menos ayudas | Consolidación | Precisión y consistencia repetidas |

Diseñar los recorridos para que no puedan resolverse únicamente con las ruedas. Durante las primeras pruebas, observar directamente el uso de ambas manos; el video de la punta por sí solo no demuestra cómo se manipuló el tubo.

### 4.4 Recompensas y retroalimentación

- Dar prioridad a precisión y estabilidad; usar velocidad como criterio secundario.
- Mostrar objetivos completados, tiempo estable y errores concretos.
- Desbloquear dificultad después de cumplir criterios repetidos, aún por definir con docentes.
- Comparar al alumno con sus sesiones anteriores antes de introducir clasificación entre personas.
- Separar modo práctica con ayudas de modo evaluación con configuración fija.
- No premiar movimientos rápidos sin control ni penalizar pausas deliberadas de orientación.

La puntuación compuesta se definirá después del piloto. Conservar las métricas originales para evitar que un único número oculte estrategias deficientes.

## 5. Mediciones: qué se puede y qué no se puede afirmar

| Métrica | Instrumentación mínima | Límite |
|---|---|---|
| Objetivos y orden | Cámara y detección | Requiere identificadores fiables |
| Error de centrado | Coordenadas en imagen | Expresado en píxeles o proporción, no milímetros |
| Tiempo estable | Video con marcas temporales | Depende del ruido y la latencia |
| Giro de ruedas | Sensores angulares | No equivale a angulación real de punta con holgura |
| Avance y retirada | Sensor lineal o rodillo medidor | Debe comprobarse deslizamiento |
| Rotación del tubo | Sensor de giro independiente | No equivale necesariamente a giro distal |
| Contacto con paredes | Sensores o método adicional validado | No inferir automáticamente de una imagen borrosa |
| Fuerza aplicada | Sensor de fuerza | No disponible con cámara solamente |
| Coordinación bimanual | Observación y luego señales sincronizadas | No deducirla solo del tiempo final |

Instrumentación progresiva: primero video y observación, después sensores de ruedas, luego avance y rotación. El objetivo mecánico de entrenar ambas manos existe desde el inicio aunque su cuantificación completa llegue después.

## 6. Información que recoger en la clínica

Usar equipos disponibles para observación no invasiva, sin desmontarlos. Registrar datos por modelo de gastroscopio y colonoscopio.

| Variable | Gastroscopio | Colonoscopio | Método sugerido |
|---|---|---|---|
| Fabricante y modelo | Pendiente | Pendiente | Etiqueta y manual |
| Dimensiones del mango | Pendiente | Pendiente | Regla/calibre y fotos con escala |
| Diámetros y separación de ruedas | Pendiente | Pendiente | Medición |
| Recorrido, resistencia y frenos | Pendiente | Pendiente | Observación y medición acordada |
| Posición de botones y agarre | Pendiente | Pendiente | Fotos y demostración |
| Masa y balance | Pendiente | Pendiente | Datos disponibles/medición viable |
| Diámetro y longitud útil del tubo | Pendiente | Pendiente | Manual |
| Flexibilidad y torsión percibidas | Pendiente | Pendiente | Comparación supervisada |
| Respuesta rueda-punta | Pendiente | Pendiente | Video simultáneo con referencias |
| Gestos que deben transferirse | Pendiente | Pendiente | Entrevista breve a docentes |

Decisión posterior: mango común sin cambios, mango común con adaptadores o variantes de carcasa. Para el tubo: una versión básica o cartuchos diferenciados. No confundir compartir interfaz con reproducir toda la mecánica de ambos procedimientos.

## 7. Presupuesto incremental

No se fija un precio objetivo todavía. Separar gasto de desarrollo, costo de reproducción de una unidad y costo de mantenimiento. Un primer prototipo puede ser caro de desarrollar y barato de replicar, pero ambas cifras deben quedar visibles.

| Partida | Decisión actual | Estado económico |
|---|---|---|
| Computadora | Verificar equipo ya disponible | Sin costo asignado |
| Cámara e iluminación | Probar una candidata antes de comprar lotes | Pendiente de cotización |
| Impresión del banco mecánico | Priorizar mecanismo antes que carcasa estética | Pendiente |
| Ejes, tornillos, poleas y tendones | Comparar durabilidad y reposición | Pendiente |
| Tubo y guías internas | Ensayar muestras cortas antes de longitud definitiva | Pendiente |
| Escenario y blancos | Materiales simples y reemplazables | Pendiente |
| Sensores y microcontrolador | Incorporar según métricas necesarias | Fase posterior |
| Iteraciones y fallos | Registrar cada prueba y material descartado | Presupuesto por definir |

Para cada compra futura registrar proveedor, fecha, moneda, cantidad, envío/impuestos, compatibilidad, costo total y alternativa. No usar precios históricos del artículo como cotización actual.

Costo por unidad reproducible = piezas + impresión + ensamblaje + calibración + consumibles iniciales. Reportar por separado herramientas reutilizables, horas de desarrollo, pruebas fallidas y mantenimiento.

## 8. Fases y criterios para continuar

| Fase | Entregable | Criterio de salida |
|---|---|---|
| A. Referencias | Ficha de equipos y requisitos | Identificar diferencias que afectan mango y tubo |
| B. Imagen | Cámara con blanco en banco | Enfoque, iluminación y latencia aceptables para la tarea |
| C. Mecánica | Punta de uno y luego dos ejes | Movimiento repetible sin roturas ni atasco en recorrido previsto |
| D. Mango | Carcasa funcional y tubo | Operación con ambas manos y acceso cómodo a ruedas |
| E. Juego mínimo | Video, detección y una secuencia | Objetivos se completan de forma fiable y quedan registrados |
| F. Integración | Recorrido físico de varios planos | Tarea obliga a combinar angulación, inserción y giro |
| G. Piloto | Sesiones repetidas y revisión docente | Fallos documentados y decisiones de mejora priorizadas |

Probar imagen y mecánica antes de invertir en anatomía detallada, aplicación compleja o muchas unidades. No avanzar de fase solo por apariencia: registrar resultados y fallos.

## 9. Validación técnica y educativa

Pruebas técnicas propuestas:

1. Repetir ciclos de ruedas y observar pérdida de tensión, fricción e histéresis.
2. Comparar respuesta con tubo recto y curvado.
3. Medir retraso de video y fluctuación durante captura y detección simultáneas.
4. Ensayar blancos a varias distancias, inclinaciones y condiciones de luz.
5. Registrar objetivos válidos no reconocidos y falsas activaciones.
6. Verificar reconexión de cámara, reinicio de sesión y conservación de resultados.
7. Comprobar que cambiar un cartucho no altera inadvertidamente la calibración.

Piloto educativo: revisar ergonomía con endoscopistas, observar estrategias de novatos y repetir sesiones. Considerar SUS para usabilidad y NASA-TLX para carga de trabajo, declarando su escala. Mantener instrucciones y recorrido constantes al comparar resultados.

La demostración de transferencia requerirá una tarea independiente y evaluación posterior diseñada específicamente. Mejorar la puntuación del propio juego no basta. Un eventual estudio formal debe planificarse aparte; no se asume que el tamaño muestral de ENDONIX sea aplicable.

## 10. Organización sugerida en VS Code

Esta es una estructura futura; por ahora solo existe este documento.

```text
simulador-endoscopia/
  README.md
  docs/
    proyecto.md
    mediciones-clinica.md
    decisiones.md
    presupuesto.csv
  hardware/
    cad/
    dibujos/
    lista-componentes.csv
  software/
    captura/
    deteccion/
    ejercicios/
    interfaz/
  firmware/
  ejercicios/
  pruebas/
  datos/
    sesiones/
```

Propuesta de software para un primer banco: captura y detección local con Python y una biblioteca de visión; elegir versiones y dependencias al implementar y después de verificar compatibilidad. No se ha instalado ni programado todavía.

Cada ejercicio debería declarar: identificador, versión, escenario, secuencia de blancos, condiciones de logro, ayudas, tiempo límite si corresponde y métricas. Cada sesión debería registrar configuración, calibración, versión del hardware/software, identificador seudónimo y eventos con tiempo.

No guardar video por defecto si basta con eventos. Si se graba para estudiar errores, indicar su propósito y evitar identificar innecesariamente a los participantes.

## 11. Registro inicial de decisiones

| ID | Decisión | Estado |
|---|---|---|
| D01 | Cámara física como primera modalidad | Confirmada por usuario |
| D02 | Gamificación con objetivos y etapas | Confirmada por usuario |
| D03 | Explorar cuerpo común para gastroscopia y colonoscopia | Dirección confirmada; factibilidad pendiente |
| D04 | Revisar diferencias de tubos en la clínica | Confirmada por usuario |
| D05 | Presupuesto gradual con prioridad de bajo costo | Confirmada por usuario |
| D06 | Transmisión por tendones sin motores al inicio | Propuesta técnica |
| D07 | Blancos físicos detectables con superposición en video | Propuesta técnica |
| D08 | Sensores adicionales por etapas | Propuesta técnica |
| D09 | Mantener posibilidad de modalidad virtual futura | Propuesta, no compromiso del MVP |

## 12. Próximas tareas

- [ ] Identificar modelos de gastroscopio y colonoscopio usados en la clínica.
- [ ] Confirmar acceso a impresora, materiales y computadora de desarrollo.
- [ ] Recoger fotos con escala y medidas del mango.
- [ ] Definir el primer recorrido abstracto que obligue a usar ambas manos.
- [ ] Comparar cámaras por enfoque cercano y compatibilidad; después cotizar.
- [ ] Diseñar un banco de punta articulada de un eje, sin carcasa definitiva.
- [ ] Probar identificación de un blanco en video real.
- [ ] Crear presupuesto con costos de desarrollo separados del costo por unidad.
- [ ] Definir con un docente los criterios iniciales de precisión y estabilidad.

## 13. Contexto para continuar con un asistente en VS Code

> Continúa este proyecto usando este documento como contexto. El usuario prioriza un simulador físico de endoscopia de bajo costo, con cámara real, cuerpo de control imprimible en 3D potencialmente común para gastroscopia y colonoscopia, y entrenamiento con ambas manos. La equivalencia de los tubos debe contrastarse con equipos de la clínica. El presupuesto se construye gradualmente y aún no hay compras autorizadas. Propón etapas pequeñas y verificables. Distingue requisitos confirmados, hipótesis de diseño y datos medidos. ENDONIX ya incluye gamificación y control bimanual: nuestra diferenciación propuesta es cámara física, escenarios materiales intercambiables y objetivos detectados por software. No atribuyas al prototipo validez clínica, menor costo demostrado ni equivalencia mecánica que todavía no se han evaluado. La siguiente prioridad es reducir incertidumbres de cámara, transmisión mecánica y ergonomía antes de fabricar una versión definitiva.

## 14. Alcance de las fuentes

El análisis de ENDONIX procede del PDF entregado, no de una inspección del dispositivo comercial. Las demás secciones son propuestas de desarrollo y criterios de comprobación, no especificaciones verificadas ni cotizaciones. No se reprodujeron planos o software de ENDONIX. El artículo abierto no implica que el hardware o software del producto tengan la misma licencia.
