# Marco teórico, constructo y plan de validación

Versión 0.1 · 2026-11-10 · Estado: **propuesta para confirmar** (las decisiones metodológicas están marcadas con ⚖️ al final).

Fuentes: *Libro Guía – Diplomado Simulación Clínica UC* (capítulos citados como «Libro cap. X»), `PROYECTO_SIMULADOR_ENDOSCOPIA.md` y Hohlstein et al. 2026 (ENDONIX, DOI 10.1007/s00464-025-12396-8). Todo lo que no proviene de esas fuentes está marcado **[por verificar]** y no debe citarse hasta resolver PMID/DOI (research-agent).

---

## 1. Qué problema educativo resuelve (el "para qué")

- **Brecha**: el aprendizaje de endoscopia flexible se hace casi todo en pacientes reales. El grupo UC muestra que la intubación esofágica no supera 80 % de éxito hasta las 30-40 endoscopías y que el plateau estable aparece a las **90-100**; liberar a un residente a las 50 lo deja sin supervisión justo cuando aún falla en pacientes difíciles (Libro cap. 9, Riquelme).
- **Qué aporta la simulación**: acortar la curva clínica entrenando antes en banco (Libro cap. II.9: «el alumno llega al paciente con habilidades previas»), con práctica deliberada: objetivo definido + repetición + feedback experto + refinamiento (cap. II.5).
- **Principio de elección racional** (cap. 8): usar el simulador **más simple que logre el objetivo**; subir de nivel solo cuando el anterior no basta. Esto justifica el bajo costo como requisito pedagógico, no solo económico, y obliga a declarar *qué competencia exacta* entrena este dispositivo y cuál no.
- **Honestidad sobre el alcance** (cap. 1, fidelidad = realismo de la experiencia, no del hardware): el dispositivo es un *part-task trainer* de habilidad psicomotora. No entrena decisión clínica, sedación, reconocimiento de patología ni comunicación.

## 2. Competencia objetivo y nivel de logro

**Competencia entrenada (constructo)**: *manejo psicomotor básico del endoscopio flexible: control coordinado de la punta (dos ruedas, mano izquierda) con avance, retirada y giro del tubo (mano derecha), guiado por imagen de video.*

| Dimensión | Definición operativa propuesta | ¿Medible en v0.1 de hardware? |
|---|---|---|
| D1 Control de punta | Llevar y sostener un blanco en el centro del campo | Sí (video; ruedas con sensor) |
| D2 Orientación | Mantener/recuperar orientación de la imagen | Parcial (video) |
| D3 Coordinación bimanual | Combinar ruedas + avance/giro del tubo | **No hasta sensar el tubo** (hoy solo observación) |
| D4 Eficiencia de movimiento | Menos recorrido angular de ruedas y menos correcciones para el mismo logro (análogo a ICSAD, cap. 9 y 5) | Sí para ruedas |
| D5 Consistencia | Menor dispersión entre ensayos | Sí |

**Nivel de logro objetivo**: *competente/journeyman* en el entorno simulado = puede ejecutar la secuencia estándar sin ayudas ni supervisión «en el paciente tipo» (cap. 3); **no** se aspira a experto ni a proficiency clínica (cap. 3 y 9: lo que la simulación no replica es variabilidad real, estrés, carga cognitiva). Se evaluará *proficiency en simulador* solo como umbral interno (cut-off, §6).

**Marcos de referencia** (del libro): pirámide de Miller (sabe → sabe cómo → **muestra cómo** → hace): el simulador evalúa «muestra cómo». Kirkpatrick: este proyecto opera en **nivel 2** (aprendizaje/habilidad); el nivel 3 (transferencia a paciente) es una **fase posterior** (cap. II.10). Kolb + práctica deliberada + feedback (FAIR+D, cap. II.6) guían el diseño de la progresión.

## 3. Objetivos de aprendizaje por etapa (para el juego, cap. 4.3 del proyecto)

Redactados como «al finalizar la etapa, el alumno será capaz de…», cada uno con criterio observable.

| Etapa | Objetivo | Criterio observable (parametrizable) |
|---|---|---|
| 0 | Reconocer el sistema y verificar orientación de imagen | Check técnico completado |
| 1 | Centrar un blanco con las ruedas sin mover el tubo | Centro dentro de zona central ≥ 1 s |
| 2 | Alternar blancos en ambos ejes de la punta | Secuencia correcta, N aciertos consecutivos |
| 3 | Combinar ruedas con avance/retirada a distintas profundidades | Blancos en ≥ 3 planos |
| 4 | Mantener orientación durante giros del tubo | Blancos que exigen rotación |
| 5 | Navegar un recorrido con blancos parcialmente ocultos | Secuencia completa; errores registrados |
| 6 | Repetir el recorrido con menos ayudas | Precisión y consistencia en repeticiones |

Los umbrales numéricos (zona 10 %, permanencia 1 s) son **parámetros de prototipo**, no estándares; se fijan con piloto + panel de docentes (§7, fase 2).

## 4. Constructo y por qué «distingue expertos de novatos»

Construcción lógica (cap. II.8 y II.9): un instrumento tiene **validez de constructo** si mide lo que dice medir; la prueba empírica clásica es que *expertos puntúen mejor que novatos* y que el entrenamiento *cierre esa brecha*. En el libro, el ejemplo UC (ICSAD) mostró recorrido de manos mediano de 40 m (novatos) → 22 m (intermedios) → 20 m (expertos), correlacionado con la escala global (cap. 5), y en laparoscopía la diferencia remanente entre entrenados y expertos fue la **dispersión**, no el puntaje medio (cap. 9).

**Hipótesis de constructo (a contrastar, direcciones predichas):**

- H1. Los expertos completan los blancos con **menor recorrido angular total de ruedas** que los novatos.
- H2. Los expertos tienen **menor error de centrado** y **mayor tiempo estable**.
- H3. Los expertos muestran **menos reversiones/sobrepasos** y movimientos más suaves.
- H4. Los expertos tienen **menor dispersión intra-sujeto** entre ensayos (consistencia).
- H5. Con práctica, la curva de los novatos desciende hacia la de los expertos y alcanza plateau; el puntaje inicial no solo refleja destreza manual general (ver amenazas).
- H6. Las métricas del dispositivo **correlacionan** con una escala global (OSATS-tipo o equivalente endoscópico) puntuada a ciegas sobre video.

**Alerta crítica desde ENDONIX**: no hubo diferencia significativa entre principiantes y experimentados, y solo 34-37 % valoró favorable el realismo (docs. del proyecto §2.1). Un instrumento puede ser «válido pero descalibrado» (analogía del termómetro, cap. II.8): **si las tareas no tienen techo de dificultad, los expertos topan y no se separan**. Por eso las etapas 5-6 deben tener holgura para discriminar, y la consistencia (H4) se trata como métrica primaria candidata, no solo el promedio.

**Definición de grupos (⚖️ propuesta, a consensuar)**, por número de endoscopías propias, no por autodeclaración difusa: *novatos* 0; *intermedios* 50–<200; *experimentados* ≥200 (sobre el plateau ≈190–200 de endoscopia alta y 250–300 de colonoscopia; ver [doc 02](02-evidencia-escalas-y-cortes.md) §2, que corrige el corte provisorio 20–100). Los puntos de corte son **propuestos**; el criterio objetivo (conteo registrado + verificación por jefe de unidad) es una mejora sobre ENDONIX.

## 5. Evidencia de validez: qué recolectar y con qué análisis

Organizado según las fuentes de evidencia de un marco moderno de validez (Messick/Kane) **[por verificar cita]**, mapeadas a lo que el libro ya llama validez de constructo / concurrente / predictiva / confiabilidad.

| Fuente de evidencia | Pregunta | Cómo | Análisis (R) |
|---|---|---|---|
| **Contenido** | ¿Las tareas cubren la competencia que se enseña? | Panel de ≥3-5 endoscopistas/docentes (Delphi breve); matriz tareas ↔ gestos de la clínica (docs. proyecto §6) | Acuerdo (CVI, Kappa/ICC de relevancia) |
| **Proceso de respuesta** | ¿El alumno hace lo que creemos (usa ambas manos, no «hace trampa»)? | Observación directa + video externo en pilotos | Descriptivo / registro de errores |
| **Estructura interna / confiabilidad** | ¿Es consistente? | Test-retest tras plateau (cap. II.9); acuerdo inter-evaluador de la escala global | ICC, Bland-Altman, α de Cronbach si hay ítems; **estabilidad sobre el cut-off** |
| **Relación con otras variables – constructo** | ¿Separa niveles de experiencia? | Estudio de grupos conocidos (novato/intermedio/experto), misma tarea, mismas instrucciones | Mann-Whitney/Kruskal, tamaño de efecto, ROC/AUC |
| **Relación – concurrente** | ¿Correlaciona con un criterio establecido? | Escala global (OSATS-tipo) puntuada a ciegas sobre video + métricas del dispositivo | Spearman, ICC, modelos mixtos |
| **Consecuencias / cut-off** | ¿Dónde está el umbral de «competente»? | Contrastes de grupos o método borderline con panel (pregunta abierta del cap. II.9) | ROC, Youden, sensibilidad/especificidad del corte |
| **Sensibilidad al aprendizaje** | ¿La curva refleja desarrollo? | Longitudinal con novatos: sesiones repetidas hasta plateau | Curvas de aprendizaje (modelos no lineales/mixtos), CUSUM |
| **Predictiva / transferencia** (futuro) | ¿Se traduce en menor curva real? | Diseño de transferencia con control (cap. II.10); mismo instrumento en simulador y paciente | Razón de acortamiento; RCT o cuasi-experimento |

**Principio de coherencia (tres círculos, cap. 9)**: idealmente el *mismo* instrumento de observación se usa en simulador, ECOE y paciente real. Para esto el equipo adoptará una **escala global de observación** común (candidato: **GAGES-UE/GAGES-C**, ver [doc 02](02-evidencia-escalas-y-cortes.md) §1; leer texto completo antes de confirmar) como criterio externo, además de las métricas del dispositivo.

**Lección del caso «válido pero no confiable / confiable pero no válido»** (cap. II.8): un puntaje de juego muy consistente puede no medir destreza (p. ej., premiar velocidad). Por eso: **conservar las métricas crudas**, la puntuación compuesta solo tras el piloto (docs. proyecto §4.4).

## 6. Métricas ↔ constructo ↔ instrumentación

| Métrica | Dimensión | Fuente en v0.1 | Limitación declarada |
|---|---|---|---|
| Recorrido angular acumulado por rueda | D4 | Sensor AS5600 de cada rueda | Ángulo de rueda ≠ ángulo real de la punta (holgura/fricción) |
| Reversiones, sobrepasos, suavidad (jerk) | D1, D4 | Series temporales de ruedas | Depende de la tasa de muestreo y ruido ADC |
| Uso simultáneo de ambas ruedas | D3 parcial | Ruedas | No incluye mano derecha |
| Error de centrado, tiempo estable, objetivos | D1, D2 | Video + detección (fase posterior) | 2D; en píxeles, no mm |
| Dispersión entre ensayos | D5 | Cualquiera, agregada por sujeto | Requiere ≥ N ensayos |
| Avance/retirada y giro del tubo | D3 | **No disponible aún** (entradas reservadas) | Hasta añadir rodillos sensores, bimanual solo por observación |

## 7. Plan por fases (cada una con criterio de salida)

| Fase | Pregunta | Diseño | Salida |
|---|---|---|---|
| 0. Técnica | ¿El dispositivo mide de forma estable? | Banco: repetibilidad de sensores, histéresis, deriva | Error y ruido de señal caracterizados |
| 1. Contenido | ¿Las tareas son relevantes? | Panel + observación en clínica | Matriz de tareas aprobada |
| 2. Discriminación (constructo) | ¿Separa novatos / intermedios / expertos? | Transversal, grupos conocidos (STROBE; guías de reporte de simulación **[por verificar]**) | AUC, tamaños de efecto, hipótesis H1-H4 |
| 3. Curva de aprendizaje | ¿Mejora con práctica y alcanza plateau? | Novatos, sesiones repetidas | Curva + cut-off + test-retest |
| 4. Concurrente y confiabilidad | ¿Coincide con evaluación experta? | Video ciego, 2 evaluadores | ICC, correlación |
| 5. Transferencia | ¿Acorta la curva real? | Controlado, mismo instrumento en paciente | Razón de acortamiento (cap. II.10) |

Fases 0-4 son factibles con un dispositivo de banco. La **fase 5 no es parte del alcance actual** y no se afirmará transferencia antes de hacerla (ENDONIX tampoco la demostró).

## 8. Amenazas a la validez (a diseñar para controlarlas)

- **Subrepresentación del constructo**: sin fuerza, tacto ni contacto con paredes; imagen 2D de blancos abstractos. Se declara en cada publicación.
- **Varianza irrelevante**: habilidad en videojuegos, destreza manual general, deriva del sensor, curva de aprendizaje *de la interfaz*. Mitigación: familiarización estándar (etapa 0), covariables (horas de videojuego), línea base.
- **Techo/piso**: ver alerta ENDONIX.
- **Sesgo de clasificación de grupos**: usar conteo objetivo de procedimientos.
- **Evaluador no ciego**: puntuar videos anonimizados (privacidad: sin identificación innecesaria, docs. proyecto §10).
- **Confusión práctica con el propio juego**: mejora del puntaje del juego ≠ transferencia (docs. proyecto §9).

## 9. Posicionamiento y valor para la línea de investigación

Contribución posible (hipótesis, no afirmación): *desarrollo y evidencia de validez de un simulador físico de endoscopia de bajo costo con métricas cinemáticas*, alineado con el principio de elección racional y con la línea IA + feedback + simulación. La novedad frente a ENDONIX (cámara real, escenarios físicos) está **por demostrar**; no se declarará menor costo hasta tener BOM cotizado (docs. proyecto §2.2).

---

## ⚖️ Decisiones que necesito de ti (cambian lo que haré después)

> **Confirmado por el usuario (2026-11-10):** puntos 1, 2 y 3 aceptados; punto 4 = **métricas crudas**. Integración con el documento maestro en [03](03-proyecto-integrado.md); plan de búsqueda en [04](04-plan-busqueda-bibliografica.md).
>
> Actualización 2026-11-10 (tras tus respuestas): los puntos 2 y 3 se trabajaron en [02-evidencia-escalas-y-cortes.md](02-evidencia-escalas-y-cortes.md); el punto 5 original (calendario de postulación) se **elimina**: es un proyecto a largo plazo.

1. **Competencia foco** (en palabras simples): ¿el simulador entrena *solo la destreza manual de manejar el endoscopio* (girar ruedas + mover el tubo guiándose por la imagen), y **no** decidir qué hacer clínicamente (diagnóstico, biopsias, sedación)? Si sí, ese es el constructo que mediremos.
2. **Grupos de experiencia**: *resuelto como propuesta con evidencia* (doc 02 §2): novato 0 · intermedio 50–<200 · experimentado ≥200. Falta confirmar y saber cuántos participantes de cada grupo son accesibles (sin cifras por ahora).
3. **Criterio externo**: *resuelto como propuesta*: **GAGES** (endoscopia alta y baja, creada para evaluar simuladores) como candidato principal; GiECAT/ACE para la fase clínica futura. Falta leer texto completo.
4. **Métricas crudas vs compuesto**: *crudas* = cada medida por separado (tiempo, recorrido de ruedas, error de centrado, nº de correcciones…). *Compuesto* = un único puntaje que las combina (como el puntaje de un videojuego). Recomiendo **crudas hasta el piloto**, porque un compuesto mal calibrado puede ocultar malas estrategias (p. ej. premiar rapidez). ¿Estás de acuerdo?
5. **Primer estudio**: pendiente de definir sin presión de calendario; mi recomendación metodológica es Fase 2 (grupos conocidos) antes que curva de aprendizaje o transferencia, porque es la base de validez de todo lo demás.
