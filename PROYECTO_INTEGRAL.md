# Proyecto integral de simulación endoscópica de bajo costo

Documento consolidado para continuar el desarrollo en VS Code

**Versión:** 1.0 consolidada  
**Fecha:** 10 de noviembre de 2026  
**Estado:** investigación y diseño; no se ha construido ni validado un prototipo.

Este documento reúne lo elaborado en la conversación: evidencia, fundamentos educativos, objetivos propuestos, evaluación, análisis de antecedentes, arquitectura física, gamificación, mediciones, presupuesto y cronograma. Integra y sustituye para continuidad las dos notas anteriores, conservándolas como archivos independientes.

Se omite el desarrollo de la última definición operativa pendiente sobre clasificación de participantes y errores críticos. No es necesario resolverla para usar este documento como base de trabajo. Las propuestas de evaluación se conservan sin presentar esos criterios como cerrados.

**Orden rector:** evidencia y necesidades -> objetivos y evaluación -> cuerpo de control y tubo bimanual -> cámara y punta móvil -> entorno físico -> software y sensores -> evaluación del aprendizaje y retención.

**Distinción de estados:** las preferencias del usuario se identifican como decisiones; las soluciones de ingeniería y parámetros de ejercicios son propuestas; los hallazgos publicados se acompañan de fuentes. No hay precios cotizados ni eficacia demostrada del dispositivo propuesto.

## Contenido

1. Propósito, alcance y decisiones del proyecto
2. Fuentes y método de revisión
3. Dificultades de la manipulación endoscópica
4. Evidencia comparada y curvas de aprendizaje
5. Aportes del diplomado de simulación clínica
6. Marco teórico y objetivos del curso
7. Evaluación de discriminación, aprendizaje y transferencia
8. Curso piloto y duración del entrenamiento
9. Análisis crítico de ENDONIX
10. Diferenciación del proyecto frente a antecedentes
11. Arquitectura del dispositivo y diseño mecánico
12. Información técnica que recoger en la clínica
13. Gamificación sobre video real
14. Mediciones y límites de los sensores
15. Presupuesto incremental
16. Etapas, dependencias y estimaciones de tiempo
17. Validación técnica y educativa del prototipo
18. Riesgos, recursos y aspectos complementarios
19. Organización de archivos en VS Code
20. Registro de decisiones
21. Referencias y alcance de las fuentes
22. Contexto para continuar el trabajo

## 1. Propósito, alcance y decisiones del proyecto

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

Diseñar primero un curso y una evaluación de habilidades de manipulación endoscópica, y construir después el dispositivo necesario para enseñarlas. El cuerpo de control y un tubo manipulable por la otra mano son requisitos centrales. La cámara física, la punta móvil, el entorno y el software se integrarán por etapas.

Preguntas confirmadas por el usuario:

1. ¿El proceso de evaluación distingue a expertos de no expertos?
2. ¿Los no expertos alcanzan, después del curso, el estándar de desempeño de expertos?

La primera pregunta evalúa evidencia de validez de las puntuaciones; la segunda evalúa aprendizaje y logro de un estándar. Alcanzar desempeño experto en tareas delimitadas no equivale a convertirse en experto en gastroscopia o colonoscopia completas. El nombre inicial propuesto es **Curso de fundamentos de manipulación bimanual del endoscopio flexible**.

Se mantiene un mango potencialmente común para gastroscopia y colonoscopia. La equivalencia funcional debe contrastarse con los equipos de la clínica. No hay presupuesto cerrado, compras autorizadas ni compromiso con una tecnología de sensores.

## 2. Fuentes y método de revisión

Revisión dirigida de fuentes primarias y una posición de sociedad científica, realizada el 10 de noviembre de 2026. Se buscaron dificultades motoras, evaluación por componentes, curvas de aprendizaje y resultados de entrenamiento simulado. Consultas principales: “gastroscopy learning curve DOPS”, “colonoscopy learning curve ACE JETS”, “tip control torque training”, “simulation curriculum randomized trial”.

No es una revisión sistemática exhaustiva ni un metaanálisis. Los estudios tienen diferentes poblaciones, procedimientos, instrumentos y desenlaces. No se promedian sus números de casos ni se convierten procedimientos clínicos en horas de simulador.

Fuentes con lectura de texto completo: ESGE/ESGENA, Riek, Siau DOPS, SPRINT y Grover. Ward, Sedlack y Wang se interpretan según los resúmenes originales consultados; Wang se considera evidencia contextual limitada. ENDONIX fue analizado previamente desde el PDF del usuario.

El archivo del diplomado es una síntesis aportada por el usuario, útil para diseño educativo. No se considera automáticamente una guía institucional oficial ni evidencia primaria de eficacia de este curso.

## 3. Dificultades de la manipulación endoscópica

No se encontró evidencia suficiente para declarar una única maniobra como “la más difícil” para todas las personas y ambos procedimientos. La prioridad inicial se infiere combinando relevancia clínica, posibilidad de entrenamiento y medición; debe contrastarse con docentes y alumnos locales.

| Problema | Relevancia | Prioridad propuesta | Consecuencia para el proyecto |
|---|---|---|---|
| Transformar ruedas y torque en movimiento esperado en pantalla | Base visuomotora común | Muy alta | Entrenar por componentes y después combinarlos [E2] |
| Coordinar angulación con avance y retirada | Base bimanual común | Muy alta | Mango y tubo desde el primer prototipo funcional |
| Mantener orientación y recuperar visión útil | Navegación e inspección | Alta | Medir estabilidad y respuesta ante pérdida de objetivo |
| Control fino en espacios estrechos y cambios de dirección | Intubación y exploración alta | Alta, módulo posterior | Geometrías que exijan alineación, no solo alcanzar un punto [E1] |
| Manejar configuración del tubo y bucles | Especialmente relevante para colonoscopia | Alta clínicamente, fuera del MVP básico | Requiere un modelo deformable específico; un tubo rígido no lo representa [E1] |
| Explorar de forma sistemática y reconocer hallazgos | Competencia diagnóstica | Importante, distinta del control motor | No confundir recoger blancos con detectar lesiones |
| Elegir qué corregir y cuándo detenerse | Resolución de problemas | Integrar gradualmente | Evaluación docente y explicación de decisiones |

**Hipótesis educativa central:** automatizar relaciones básicas entre controles, tubo e imagen puede liberar atención para navegación y decisiones más complejas. La cámara debe mostrar los efectos de los gestos físicos; el juego debe reforzar esos gestos y no permitir atajos que eludan la coordinación.

La gastroscopia y la colonoscopia comparten fundamentos, pero no deben tratarse como una sola curva. Para módulos específicos se considerarán alineación y cambios de dirección en endoscopia alta; para colonoscopia, orientación durante avance y retirada, y más adelante configuración del tubo. La retroflexión se incluirá solo cuando mecanismo, escenario y objetivos permitan representarla de forma creíble.

## 4. Evidencia comparada y curvas de aprendizaje

| Fuente | Diseño y población | Hallazgo pertinente | Interpretación y límite |
|---|---|---|---|
| E1. ESGE/ESGENA, 2024 | Posición sobre formación básica | Incluye control de punta y torque, intubación, reducción de bucles, inspección y competencias no técnicas; sugiere simulación temprana | Marco de competencias, no ranking experimental de dificultad |
| E2. Riek et al., 2017 | Comparación de 13 expertos y 16 novatos; otro grupo de 16 novatos entrenado | Seis sesiones de 45 minutos; mejora en tiempo y variabilidad, con prueba sobre trayecto nuevo | Evidencia preliminar de una habilidad parcial; sin control no entrenado ni demostración de transferencia clínica |
| E3. Siau et al., 2019/2020 | 10.086 DOPS, 987 alumnos, 275 centros | Competencia técnica agregada a 150-174 procedimientos; global a 225-249 | Hitos de cohorte según DOPS, no requisito universal ni equivalencia con sesiones de juego |
| E4. Ward et al., 2014 | 297 alumnos, 36.730 colonoscopias | Intubación cecal del 90% en la curva agregada a 233 procedimientos; solo 41% competente a 200 por LC-CUSUM | Completar hasta ciego no resume calidad global; gran variación individual |
| E5. Sedlack y Coyle, 2016 | 93 fellows, 10 centros, 1.061 evaluaciones ACE | Hitos cognitivos y motores en promedio a 250 procedimientos; más del 90% los superó a 300 | Criterios propios de esa cohorte; no trasladar umbrales clínicos al prototipo |
| E6. Wang et al., 2025 | Retrospectivo, seis cirujanos, formación secuencial | Medianas de 624 gastroscopias y 470 colonoscopias; 31 semanas para cada modalidad | Muestra pequeña, experiencia previa y definición distinta de dominio; no demuestra que gastroscopia sea intrínsecamente más difícil |
| E7. SPRINT, Siau et al., 2020 | Piloto prospectivo con 15 alumnos del curso y 24 controles para curvas | Tras inducción de dos días no hubo diferencia significativa en intubación D2 sin ayuda a largo plazo | Confianza o certificación más temprana no prueban una mejora de cada componente técnico |
| E8. Grover et al., 2015 | Ensayo aleatorizado, 33 novatos analizados | Currículo estructurado y feedback mejoró desempeño en las dos primeras colonoscopias clínicas frente a práctica autorregulada | Intervención combinada: 6 h de teoría más 8 h supervisadas frente a 8 h de práctica; no aísla efecto del feedback |

La tabla 4 de E3 muestra puntuaciones iniciales bajas en angulación, intubación y acceso a D2; resolución de problemas y progreso maduran más tarde. Esto orienta a evaluar componentes y no solo velocidad. Las cifras son descripciones del estudio, no metas para nuestro curso.

Conclusión operativa: construir una curva por habilidad y por participante. Una meseta puede significar dominio, límite del instrumento o estancamiento; nunca equivale automáticamente a competencia. Una diferencia no significativa entre grupos tampoco demuestra equivalencia.

## 5. Aportes del diplomado de simulación clínica

Fuente local: `<carpeta Descargas>\Libro Guía - Diplomado Simulación Clínica UC.docx`. Se revisaron especialmente los capítulos II.2, II.4-II.10 y III.1, además del índice y las referencias pertinentes. Se citan capítulos; no se asignan páginas porque no se verificó paginación mediante renderizado.

| Aporte del resumen | Aplicación al curso |
|---|---|
| Necesidad antes que tecnología, capítulo II.2 | Identificar errores de alumnos concretos antes de cerrar CAD o sensores |
| Tres pilares, capítulo II.4 | Presupuestar dispositivo, currículo y docentes, no solo piezas |
| Práctica deliberada, II.5 y II.7 | Meta breve, intento, observación, feedback y nuevo intento |
| Alineación y evaluación, II.6-II.9 | Vincular cada objetivo a ejercicio y evidencia observable |
| Transferencia, II.10 | Probar tareas y equipos distintos de los practicados |
| Diseño y prueba previa, III.1 | Guion, instrucciones, criterios de logro y ensayo técnico antes de alumnos |

Usaremos los seis pasos de Kern en la formulación corregida que el propio resumen identifica: problema general, necesidades del grupo e institución, objetivos, estrategias, implementación y evaluación/retroalimentación.

El documento contiene simplificaciones y correcciones internas. No trasladaremos literalmente la regla de “10.000 horas”, razones de transferencia de otras especialidades, ni equivalencias entre una meseta y confiabilidad. Tampoco adoptaremos una duración fija de debriefing de escenarios de crisis para cada ejercicio motor. Para este proyecto proponemos feedback breve durante la práctica y reflexión final focalizada.

## 6. Marco teórico y objetivos del curso

Marco: entrenamiento por competencias, práctica deliberada, progresión desde componentes hacia tareas integradas y evaluación separada de adquisición, retención y transferencia. La fidelidad se selecciona según la función que se enseña. El tiempo de entrenamiento puede variar; el estándar debe definirse antes de la evaluación confirmatoria.

**Objetivo general:** realizar tareas de orientación, control de punta y navegación bimanual en un entorno físico estandarizado, con precisión y estabilidad que alcancen un estándar experto previamente establecido para esas tareas.

| ID | Objetivo observable al finalizar | Ejercicio | Medición | Requisito físico |
|---|---|---|---|---|
| O1 | Preparar y sostener el instrumento con acceso estable a los controles | Preparación y demostración | Lista de cotejo y observación de ergonomía | Mango representativo y tubo |
| O2 | Centrar y mantener objetivos usando ambos planos de angulación | Blancos en distintas posiciones | Error de centrado, permanencia y correcciones | Ruedas independientes y punta de dos ejes |
| O3 | Combinar ruedas y rotación del tubo conservando la orientación | Blancos que cambian de orientación | Observación y señales de ruedas/rotación | Transmisión de torque funcional |
| O4 | Coordinar avance y retirada con angulación para alcanzar blancos a distintas profundidades | Recorrido de varios planos | Logros, tiempo, desplazamiento y correcciones | Tubo con recorrido físico suficiente |
| O5 | Reconocer pérdida de orientación y recuperar una vista útil antes de continuar | Perturbación controlada del recorrido | Conducta observada y tiempo de recuperación | Escenario que permita reorientación |
| O6 | Reproducir el desempeño en una tarea no entrenada y después de un intervalo | Recorrido alternativo y retención | Misma rúbrica con escenarios equivalentes | Configuraciones reservadas para evaluación |

Estos objetivos son de diseño. Los límites de error, tiempos y puntuaciones aprobatorias se fijarán tras estudiar precisión del sistema, desempeño experto y juicio docente. Los valores de 1 segundo y 10% de imagen de la versión 0.1 son parámetros de depuración, no estándares educativos validados.

No se certificará mediante este curso diagnóstico, tratamiento, sedación, intubación clínica independiente ni reducción de bucles si el escenario no los reproduce. Se podrá agregar después un módulo específico, con objetivos y evaluación propios.

## 7. Evaluación de discriminación, aprendizaje y transferencia

### Estudio A: ¿discrimina expertos y no expertos?

- Dar familiarización equivalente para reducir la ventaja de conocer el prototipo.
- Medir tareas idénticas con orden balanceado y evaluación de video cegada al grupo cuando sea viable.
- Elegir una variable primaria y conservar dimensiones separadas: calidad motora, precisión, estabilidad y tiempo. Medir éxito de la tarea sin usar solo una puntuación de juego.
- Reportar diferencia, tamaño de efecto e intervalo de confianza. Examinar también variabilidad, fiabilidad entre evaluadores y repetibilidad.
- Si se deriva un punto de corte con expertos/novatos, comprobarlo en una muestra independiente o validación apropiada; no informar el rendimiento de derivación como validación definitiva.

Una discriminación positiva aporta evidencia para interpretar puntuaciones en esas condiciones. No acredita por sí sola validez completa ni capacidad de predecir desempeño clínico.

### Estudio B: ¿los no expertos alcanzan el estándar después del curso?

- Evaluación basal, curso, evaluación final, tarea nueva y retención.
- Si se busca atribuir el cambio al curso, añadir grupo de comparación con entrenamiento habitual o práctica equivalente. La asignación aleatoria es preferible cuando sea viable; ambos grupos mantienen formación clínica supervisada.
- Separar dos desenlaces: proporción que alcanza el estándar y cambio desde el nivel basal.
- Si se afirma equivalencia con expertos, definir antes un margen educativamente aceptable y realizar el análisis correspondiente. Una prueba convencional con p > 0,05 no establece equivalencia.
- Establecer un estándar mínimo razonado, no exigir superar al mejor experto ni elegir el corte después de mirar los resultados favorables.
- Registrar número de sesiones hasta el criterio, remediación, abandonos y participantes que no lo alcanzan. No excluirlos del informe de eficacia.
- Evitar que los docentes que entrenan sean los únicos que califican el examen final.

### Transferencia y retención

Primero evaluar transferencia cercana: tarea nueva y, si hay acceso, endoscopio real fuera de uso clínico en un modelo de banco apropiado. Esta comparación ayuda a detectar entrenamiento de gestos propios del prototipo que no funcionan con el instrumento de referencia.

Después, y como proyecto separado, evaluar desempeño clínico supervisado con instrumentos apropiados, control de dificultad de casos y aprobación institucional cuando corresponda. No convertir las puntuaciones del juego en una autorización para trabajar sin supervisión.

Propuesta de retención: evaluación a 2-4 semanas del final, registrando práctica intermedia. Es una decisión de protocolo, no un intervalo validado universal.

### Muestra y estadística

Para usabilidad y corrección de fallos puede comenzar una muestra de conveniencia pequeña, por ejemplo 5-8 expertos y 8-12 no expertos. Son rangos logísticos propuestos, no tamaños suficientes para demostrar equivalencia.

La muestra confirmatoria se calculará después de definir desenlace primario, variabilidad, margen relevante, estructura de medidas repetidas y pérdidas esperadas. Incluir apoyo estadístico antes de reclutar. Las repeticiones dentro de un alumno no son participantes independientes.

## 8. Curso piloto y duración del entrenamiento

Propuesta para estimar recursos, todavía no dosis definitiva:

- Una sesión inicial de familiarización y línea basal de 45-60 minutos.
- Seis sesiones de práctica de 45-60 minutos, idealmente dos por semana.
- Una sesión final de 45-60 minutos que incluya tarea reservada.
- Una evaluación de retención de 30-45 minutos a 2-4 semanas.

Total aproximado: 6,5-8,75 horas por alumno más preparación previa y remediación; 6-8 semanas de calendario al incluir retención. El número de sesiones es una hipótesis inicial informada por entrenamiento parcial publicado [E2], no garantía de dominio.

Cada sesión: objetivo explícito, demostración breve, bloques de práctica con descansos, feedback específico y reflexión sobre el siguiente ajuste. El alumno que no alcance el criterio recibe práctica adicional focalizada; no aprueba solo por completar seis sesiones.

La capacidad debe calcularse con tiempo individual real en el equipo. Ejemplo logístico: 10 alumnos x 8 sesiones x 45 minutos = 60 horas de estación, sin contar retención, montaje ni reparación. La práctica grupal no debe registrarse como si todos hubieran manipulado el instrumento todo el tiempo.

## 9. Análisis crítico de ENDONIX

Fuente principal: Hohlstein et al. *Feasibility, usability, and validity assessment of a novel plug-and-play virtual endoscopy simulator*. Surgical Endoscopy, 2026;40:1629-1640. Publicado en línea el 4 de diciembre de 2025. DOI: [10.1007/s00464-025-12396-8](https://doi.org/10.1007/s00464-025-12396-8).

Se revisó el PDF de 12 páginas proporcionado por el usuario, ubicado originalmente en `<carpeta Descargas>\endonix.pdf`, incluyendo la figura 1. Versión consultable: [artículo completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC12881084/). Las páginas indicadas a continuación son las del archivo PDF.

### Qué describe realmente el artículo

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

### Precauciones al interpretar el estudio

- La muestra procede de dos congresos y la clasificación utiliza experiencia declarada; no equivale a una cohorte longitudinal de alumnos.
- La correlación con experiencia y las diferencias entre grupos no prueban aprendizaje causado por el dispositivo.
- El manuscrito utiliza las etiquetas de validez de apariencia y contenido de forma poco consistente entre métodos y resultados. Conviene citar las preguntas y porcentajes concretos, sin reproducir esa clasificación como conclusión independiente.
- NASA-TLX se presenta como suma no ponderada de 0 a 600. Si empleamos promedio de 0 a 100, debemos declarar la transformación antes de comparar resultados.
- El realismo percibido no identifica por sí solo la causa del problema: no puede atribuirse exclusivamente a gráficos, mango o mecánica.
- El artículo no proporciona planos completos de fabricación ni una lista reproducible de componentes y costos. No permite afirmar que nuestro equipo será más barato todavía.
- La comparación se limita a la versión estudiada. Ausencia de una función en el artículo no demuestra que ninguna versión comercial la tenga.

### Diferenciación propuesta, todavía por comprobar

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

## 10. Diferenciación del proyecto frente a antecedentes

ENDONIX ya incorpora gamificación y trabajo bimanual [E9]. Riek utiliza un instrumento real, superficies con blancos y reconocimiento de patrones [E2]. Por tanto, no se reivindica como novedosa la idea de video real con objetivos.

La contribución por investigar será un **instrumento físico de bajo costo, reproducible y reparable que permita entrenar con ambas manos sin necesitar un endoscopio clínico**, acompañado de un currículo y evaluación explícitos. Hay que demostrar que abaratarlo no elimina la fidelidad funcional necesaria. La comparación competitiva no sustituye esa comprobación. Esta interpretación actualizada tiene prioridad sobre cualquier diferenciación tentativa del análisis inicial de ENDONIX.

## 11. Arquitectura del dispositivo y diseño mecánico

```text
Mano izquierda -> ruedas del mango -> poleas/tendones -> punta articulada
Mano derecha   -> avance, retirada y giro del tubo -> movimiento físico
Punta          -> cámara e iluminación -> video USB -> computadora
Escenario      -> blancos físicos -> detección en video -> objetivos y progreso
Sensores opcionales del mango/tubo -> registro sincronizado -> evaluación
```

La primera versión usará transmisión mecánica directa desde las ruedas a la punta. Esto evita introducir motores antes de comprobar la viabilidad del mecanismo. No garantiza una sensación idéntica a un endoscopio real.

### Mango común y modular

- Carcasa desmontable en dos mitades, con acceso a tornillos, ejes y tensores.
- Dos ruedas independientes con geometría y separación basadas en mediciones.
- Poleas y tendones intercambiables, con ajuste de tensión y topes mecánicos.
- Fricción ajustable; no imponer retorno automático al centro sin medir el equipo de referencia.
- Reserva de espacio para sensores angulares y botones.
- Acople de tubo reemplazable con fijación repetible de cables, orientación y alivio de tensión.
- Posibilidad de ajustar masa y centro de gravedad mediante lastres internos.

No congelar dimensiones ni imprimir una carcasa definitiva antes de probar el mecanismo en banco. Un mango común será aceptable si permite gestos representativos en ambos procedimientos; no se presupone equivalencia entre modelos o fabricantes.

### Tubo de inserción y punta

Evaluar diámetro exterior e interior, flexibilidad, resistencia al acodamiento, transmisión de torsión, fricción superficial y masa por longitud. Un tubo excesivamente blando puede retorcerse sin orientar la punta; uno rígido puede enseñar una respuesta poco representativa.

La punta necesita dos ejes de flexión. Se propone explorar un segmento articulado con cuatro tendones en dos pares antagonistas, guiados a lo largo del tubo. El diseño debe reservar espacio para la cámara y sus cables sin bloquear la flexión.

Ensayar primero un eje en un banco corto y luego dos ejes. Después repetir con la longitud de trabajo prevista y con el tubo curvado: una transmisión que funciona recta puede presentar fricción e histéresis al curvarse.

La articulación, el diámetro final y la longitud no están definidos. La construcción debe decidirse después de seleccionar una cámara candidata y medir equipos locales.

### Cámara y video

Requisitos a comprobar antes de comprar varias unidades:

- Compatibilidad de captura con la computadora disponible; preferencia por USB/UVC si las pruebas la confirman.
- Diámetro del cabezal, longitud rígida y flexibilidad del cable.
- Enfoque a las distancias reales de los ejercicios, no solo resolución nominal.
- Campo de visión, distorsión y capacidad para distinguir identificadores.
- Exposición e iluminación suficientes sin reflejos que oculten blancos.
- Orientación consistente de la imagen y ausencia de espejo accidental.
- Latencia medida desde movimiento físico hasta imagen en pantalla.

No asumir que cualquier cámara vendida como “endoscópica” sirve para enfocar blancos muy cercanos. El video y los sensores pueden viajar por conexiones separadas; deberán sincronizarse si se calculan métricas conjuntas.

### Escenario físico inicial

Construir un recinto sencillo con blancos reemplazables, posiciones reproducibles y acceso para mantenimiento. Primero utilizar una geometría abstracta; incorporar anatomía solo cuando aporte al objetivo docente.

La carcasa del escenario debe ocultar el trayecto al alumno durante el ejercicio. La visión externa no debe permitir resolver la tarea sin usar la pantalla. Un tutor puede disponer de acceso visual para diagnóstico del prototipo.

## 12. Información técnica que recoger en la clínica

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

## 13. Gamificación sobre video real

### Estrategia inicial de objetivos

Usar blancos físicos identificables colocados en el escenario. Explorar marcadores fiduciales o patrones de alto contraste; la familia y tamaño se elegirán mediante pruebas de distancia, iluminación y curvatura.

El programa superpondrá un contorno sobre el blanco detectado, indicará el objetivo activo y mostrará progreso. Dibujar un punto fijo en pantalla no equivale a localizar una estructura del escenario.

Para un primer ejercicio de centrado no se necesita reconstrucción 3D completa. Una detección en 2D puede confirmar identidad, centrado y permanencia. No demuestra contacto, distancia exacta, fuerza ni posición tridimensional de la punta.

### Regla de logro inicial, parametrizable

Un objetivo se completa cuando:

1. Se reconoce el identificador esperado con calidad suficiente.
2. Su centro permanece dentro de una región central de la imagen.
3. Se cumple el tiempo de permanencia definido para el nivel.
4. Se cumplen requisitos de escala visible, si el ejercicio utiliza aproximación.
5. El programa registra el evento una sola vez y cambia al siguiente objetivo.

Como punto de partida experimental: zona de centrado equivalente al 10% de la dimensión menor de la imagen y permanencia de 1 segundo. Son parámetros de prototipo, no estándares de competencia. Deben ajustarse tras medir ruido de detección y desempeño.

Si se pierde la detección, pausar o reiniciar la permanencia según una tolerancia explícita; nunca completar el objetivo por ausencia de información. El área aparente solo permite aproximar distancia bajo condiciones controladas: también cambia con inclinación y distorsión.

### Secuencia de ejercicios

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

### Recompensas y retroalimentación

- Dar prioridad a precisión y estabilidad; usar velocidad como criterio secundario.
- Mostrar objetivos completados, tiempo estable y errores concretos.
- Desbloquear dificultad después de cumplir criterios repetidos, aún por definir con docentes.
- Comparar al alumno con sus sesiones anteriores antes de introducir clasificación entre personas.
- Separar modo práctica con ayudas de modo evaluación con configuración fija.
- No premiar movimientos rápidos sin control ni penalizar pausas deliberadas de orientación.

La puntuación compuesta se definirá después del piloto. Conservar las métricas originales para evitar que un único número oculte estrategias deficientes.

## 14. Mediciones y límites de los sensores

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

## 15. Presupuesto incremental

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

## 16. Etapas, dependencias y estimaciones de tiempo

Estimaciones de ingeniería y gestión, no derivadas de los números de procedimientos de los artículos. Supuestos: una persona técnica con 15-20 horas semanales, un responsable clínico-docente con 2-3 horas semanales, acceso periódico a expertos, impresora disponible y compras locales sin demoras largas. Horas indicadas son horas-persona totales aproximadas por etapa, no solo trabajo automatizable.

| Etapa | Entregable y criterio de salida | Duración | Esfuerzo estimado | Dependencia |
|---|---|---:|---:|---|
| 1. Evidencia y necesidades locales | Matriz crítica, perfiles de alumnos y errores prioritarios acordados | 2-3 semanas | 25-40 h | Acceso a docentes y modelos locales |
| 2. Currículo y evaluación | Objetivos, rúbrica, tareas y protocolo preliminar de estudios A/B | 2-3 semanas | 20-35 h | Etapa 1 |
| 3. Cuerpo de control y tubo | Prototipo ergonómico, bimanual y transmisión mecánica en banco | 4-6 semanas | 60-100 h | Requisitos de etapa 2 |
| 4. Cámara y punta móvil | Imagen útil y flexión de dos ejes repetible con tubo recto y curvado | 2-4 semanas | 30-55 h | Interfaz mecánica y cámara candidata |
| 5. Entorno físico | Tres tareas económicas, repetibles y sin atajos visuales externos | 1-2 semanas | 15-25 h | Geometría y alcance del instrumento |
| 6. Software y sensores | Video, objetivos, eventos y medición de movimientos seleccionados | 3-5 semanas | 50-85 h | Tareas y señales definidas |
| 7. Integración y prueba docente | Corrección de fallos, calibración y evaluación consistente | 2-3 semanas | 25-40 h | Sistema integrado |
| 8. Piloto educativo con retención | Datos preliminares de discriminación y aprendizaje; revisión del protocolo | 6-8 semanas | 40-65 h | Estabilidad técnica y condiciones institucionales |

Totales secuenciales de referencia: **16-26 semanas hasta un prototipo integrado listo para pilotar**; **22-34 semanas hasta cerrar el piloto**, aproximadamente 5-8 meses. Esfuerzo acumulado orientativo: **265-445 horas-persona**. Las cifras de calendario y esfuerzo no son equivalentes: incluyen esperas, sesiones espaciadas y coordinación.

Un estudio confirmatorio independiente de discriminación/equivalencia podría requerir **3-6 meses adicionales**, según muestra y reclutamiento. Evaluar transferencia clínica puede requerir **6-12 meses o más adicionales** y un protocolo separado. Son reservas de planificación, no compromisos.

Para reducir riesgo, hacer una prueba breve de cámara y una de detección durante las etapas mecánicas: el software completo sigue al entorno, pero no conviene descubrir al final que la cámara no enfoca los blancos. Definir desde la etapa 2 qué se necesita medir, aunque los sensores se instalen en la etapa 6.

La etapa 3 incorpora banco de transmisión y alojamiento de componentes; la etapa 4 termina la articulación y su integración óptica. Ambas requerirán iteración y pueden solaparse parcialmente; no se descontó ese solapamiento del total conservador.

Si solo se dispone de 5-8 horas técnicas semanales, o se trabaja sin apoyo mecánico/electrónico, debe recalcularse el calendario; no conservar estos plazos. El piloto también puede prolongarse por disponibilidad de expertos o necesidad de remediación.

## 17. Validación técnica y educativa del prototipo

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

## 18. Riesgos, recursos y aspectos complementarios

1. **Transferencia negativa.** Un mango cómodo pero con sentidos, fricción o retorno incorrectos puede reforzar gestos poco útiles. Comparar con el equipo clínico antes de entrenar una cohorte.
2. **Torque y holgura.** La mano puede girar el tubo sin que la punta rote de inmediato. Registrar esa relación en distintas curvaturas; no equiparar sensores proximales con posición distal.
3. **Bajo costo frente a mala calidad funcional.** Cartón o piezas simples pueden servir para el recinto. Desgaste, fricción variable o blancos deformados pueden alterar la dificultad y falsear la evaluación.
4. **Límite del MVP para colonoscopia.** Una manguera en un trayecto fijo no enseña reducción de bucles ni reproduce fuerzas sobre mesenterio. Agregar ese objetivo exigiría otro módulo.
5. **Entrenadores y evaluadores.** Incluir tiempo protegido, formación de tutores, rúbrica y calibración de evaluadores en presupuesto.
6. **Conocer el juego.** Separar escenarios de práctica y examen, variar trayectos de manera controlada y dar familiarización equivalente a expertos.
7. **Detección no es destreza.** Un marcador perdido por reflejos no es necesariamente un error del alumno. Separar fallos del sistema de errores de ejecución.
8. **Precisión antes que velocidad.** Registrar indicadores separados; un tiempo bajo con mala técnica no debe producir una mejor calificación global.
9. **Medición de manos.** La cámara distal no identifica por sí sola qué mano se movió. Comenzar con observación externa y sumar sensores según necesidad.
10. **Estandarización.** Versionar hardware, tensión de tendones, escenario y software; no modificar silenciosamente el dispositivo durante un estudio.
11. **Desgaste y costos ocultos.** Incluir calibración, repuestos, impresiones fallidas, montaje y horas docentes. Medir costo de reproducción y costo por alumno, además del prototipo.
12. **Retención y abandono.** Planificar seguimiento, registro de práctica clínica intermedia y tratamiento de datos faltantes.
13. **Gobernanza de investigación.** Antes de reclutar para un estudio formal, definir consentimiento, datos de video, responsable del proyecto y revisión institucional pertinente; no asumir que un piloto está exento.
14. **Objetivos que el dispositivo no cubre.** Comunicación, reconocimiento de lesiones, sedación e integración clínica requieren enseñanza complementaria, aunque no sean el foco motor inicial.

## 19. Organización de archivos en VS Code

Esta es una estructura futura. Por ahora existen documentos Markdown de planificación, sin código, CAD ni firmware del prototipo.

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

## 20. Registro de decisiones

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

## 21. Referencias y alcance de las fuentes

- **E1.** Antonelli et al. Training in basic gastrointestinal endoscopic procedures: ESGE/ESGENA Position Statement. Endoscopy. 2024;56:131-150. [Texto oficial](https://www.esge.com/assets/downloads/pdfs/guidelines/2023-a-2205-2613.pdf).
- **E2.** Riek et al. A novel training device for tip control in colonoscopy: preliminary validation and efficacy as a training tool. Surg Endosc. 2017;31:5364-5371. [Texto completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC5715030/).
- **E3.** Siau et al. Direct observation of procedural skills (DOPS) assessment in diagnostic gastroscopy: nationwide evidence of validity and competency development during training. Surg Endosc. 2020;34:105-114; publicación electrónica 2019. [Registro](https://pubmed.ncbi.nlm.nih.gov/30911922/) y [texto en repositorio universitario](https://eprints.whiterose.ac.uk/id/eprint/144292/3/Siau2019_Article_DirectObservationOfProceduralS.pdf).
- **E4.** Ward et al. An analysis of the learning curve to achieve competency at colonoscopy using the JETS database. Gut. 2014;63:1746-1754. [Resumen original](https://pubmed.ncbi.nlm.nih.gov/24470280/).
- **E5.** Sedlack y Coyle, ACE Research Group. Assessment of competency in endoscopy: establishing and validating generalizable competency benchmarks for colonoscopy. Gastrointest Endosc. 2016;83:516-523.e1. [Resumen original](https://pubmed.ncbi.nlm.nih.gov/26077455/).
- **E6.** Wang et al. Gastroscopy and colonoscopy learning curve analysis for surgeons. 2025. Artículo en chino; resumen en inglés consultado. [Registro y resumen](https://pubmed.ncbi.nlm.nih.gov/40850838/).
- **E7.** Siau et al. Impact of a simulation-based induction programme in gastroscopy on trainee outcomes and learning curves. World J Gastrointest Endosc. 2020;12:98-110. [Texto completo](https://www.wjgnet.com/1948-5190/full/v12/i3/98.htm).
- **E8.** Grover et al. Impact of a simulation training curriculum on technical and nontechnical skills in colonoscopy: a randomized trial. Gastrointest Endosc. 2015;82:1072-1079. [Texto del artículo](https://naspghan.org/files/documents/pdfs/training/curriculum-resources/procedures-curriculum/Grover_2015_Gastrointestinal_endoscopy_Impact_of_a_simulation_training_curriculum_on_technical_and_nontechnical_skills_in_colo.pdf).
- **E9.** Hohlstein et al. Feasibility, usability, and validity assessment of a novel plug-and-play virtual endoscopy simulator. Surg Endosc. 2026;40:1629-1640. [Texto completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC12881084/). PDF del usuario analizado en la iteración previa.
- **D1.** Resumen aportado: *Libro Guía - Diplomado Simulación Clínica UC*. Capítulos citados en la sección sobre aportes del diplomado. Fecha y autoría de la síntesis no verificados.

El análisis de ENDONIX procede del PDF entregado, no de una inspección del dispositivo comercial. Las demás secciones son propuestas de desarrollo y criterios de comprobación, no especificaciones verificadas ni cotizaciones. No se reprodujeron planos o software de ENDONIX. El artículo abierto no implica que el hardware o software del producto tengan la misma licencia.

## 22. Contexto para continuar el trabajo

> El proyecto desarrolla un curso de fundamentos de manipulación endoscópica y el dispositivo físico que lo hace posible. Primero se sustenta el diseño educativo; después se desarrolla la tecnología. Las preguntas centrales son discriminación experto/no experto y logro del estándar experto por los no expertos después del curso, limitado a habilidades explícitas. El hardware debe incluir un cuerpo de control imprimible en 3D, tubo para coordinación bimanual, cámara física y punta dirigible. Se explorará un cuerpo común para gastroscopia y colonoscopia contrastando equipos locales. El entorno puede ser económico y sencillo, pero su respuesta debe ser consistente. Software, gamificación y sensores deben servir a los objetivos, no definirlos. El presupuesto se ajusta por etapas. No atribuir validez clínica, equivalencia estadística, novedad ni menor costo demostrado sin evaluación. Las clasificaciones operativas de participantes y los errores críticos no están cerrados y no se desarrollan en esta consolidación. No hay compras autorizadas. Las cifras de calendario son estimaciones condicionadas a recursos; los umbrales de juego son parámetros iniciales de prueba, no criterios de aprobación validados.
