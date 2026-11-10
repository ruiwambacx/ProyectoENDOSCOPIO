# Plan de búsqueda bibliográfica: metas específicas

Versión 0.1 · 2026-11-10 · Sin fechas límite (proyecto a largo plazo): el orden está dado por **qué decisión habilita cada búsqueda**.

## 1. Meta general

Reunir la evidencia necesaria para (a) cerrar el criterio externo y el constructo, (b) elegir métricas que discriminen, (c) justificar los grupos de experiencia, (d) situar el simulador frente a lo existente y (e) tomar decisiones de diseño. Reglas heredadas: **PMID + DOI + enlace PubMed verificados para cada referencia; cero referencias sin verificar; leer texto completo antes de citar cifras.**

## 2. Preguntas, metas y criterio de término

Prioridad 1 = habilita una decisión inmediata del proyecto.

| ID | Prioridad | Pregunta de búsqueda | Meta específica (qué debe quedar hecho) | Decisión que habilita |
|---|---|---|---|---|
| **Q1** | 1 | ¿Qué instrumentos de observación directa evalúan habilidades de endoscopia flexible (alta y baja) y qué evidencia de validez tiene cada uno? | Matriz *instrumento × fuente de validez* (contenido, proceso, estructura interna, relación con otras variables, consecuencias) para **todas** las herramientas con ≥1 estudio de validación; confirmar si **GAGES** es aplicable a video de simulador y cómo se adapta | Cerrar D12 (criterio externo) |
| **Q2** | 1 | ¿Qué simuladores físicos o de bajo costo de endoscopia flexible tienen validación (apariencia/contenido/constructo)? | Tabla comparativa de **todos los simuladores hallados**: tipo, costo declarado, tarea, grupos y n, métricas, resultado de constructo, limitaciones. Incluir ENDONIX como referencia | Posicionar el prototipo; no afirmar «mejor» sin base |
| **Q3** | 1 | ¿Qué métricas cinemáticas o de movimiento (recorrido, suavidad, reversiones, tiempo estable) discriminan novatos de expertos en endoscopia/laparoscopia simulada? | Lista de métricas con *dirección y tamaño del efecto reportado*, tipo de sensor y tarea. Seleccionar el **conjunto crudo mínimo** y definir cómo se calcula cada una (fórmula) | Fijar métricas primarias antes del piloto (D13) |
| **Q4** | 1 | ¿Qué definiciones de «novato/intermedio/experto» y qué umbrales de curva de aprendizaje se usan en endoscopia alta y colonoscopia? | Tabla de cortes por estudio (n.º de procedimientos, criterio de resultado) con la fuente; contraste con el dato UC (90–100) y localización de su publicación | Confirmar D11 con referencias completas |
| **Q5** | 2 | ¿Qué diseños de mango, transmisión por tendones y puntas articuladas de bajo costo/impresas en 3D existen? | Inventario de diseños (artículos, patentes públicas, repositorios abiertos) con diámetro, fuerza, histéresis, durabilidad y licencia | Diseño de mango v0.2 y punta; **revisar licencias antes de reutilizar** |
| **Q6** | 2 | ¿Qué evidencia hay sobre gamificación y retroalimentación automatizada en simulación de endoscopia o procedimientos? | Resumen de efectos sobre aprendizaje y de riesgos para validez (varianza irrelevante) | Diseño del modo práctica vs. evaluación |
| **Q7** | 2 | ¿Qué evidencia de transferencia al paciente tienen los simuladores endoscópicos? | Lista de estudios con diseño, control y resultado; razón de acortamiento si existe | Alcance realista y redacción de limitaciones |
| **Q8** | 2 | ¿Cómo se determinan puntos de corte (cut-off) y tamaños muestrales en validación de simuladores? | Métodos usados (grupos contrastantes, borderline, ROC) y rangos de n | Cálculo muestral con stats-agent |

**Orden de ejecución:** Q1 → Q4 → Q3 → Q2 (todas P1, en ese orden porque Q1 y Q4 cierran decisiones ya aceptadas) → Q8 → Q5 → Q7 → Q6.

## 3. Estructura PCC/PICO por pregunta (para redactar las cadenas)

| ID | Población | Concepto / Intervención | Comparación / Contexto | Desenlace |
|---|---|---|---|---|
| Q1 | Aprendices y endoscopistas (alta/baja) | Herramientas de evaluación por observación directa | Entre herramientas | Validez, confiabilidad, utilidad |
| Q2 | Participantes de estudios de simuladores | Simuladores físicos/low-cost de endoscopia flexible | Novato vs. experto | Validez de apariencia/contenido/constructo |
| Q3 | Idem | Métricas de movimiento | Novato vs. experto | Capacidad discriminativa |
| Q4 | Residentes/fellows | Curva de aprendizaje, definición de experiencia | Por n.º de procedimientos | Umbral de competencia |

## 4. Cadenas de partida (PubMed; a refinar y registrar con fecha)

- **Q1:** `("endoscopy"[MeSH] OR colonoscopy OR gastroscopy OR "upper endoscopy") AND (assessment tool OR rating scale OR "direct observation of procedural skills" OR GAGES OR GiECAT OR "Assessment of Competency in Endoscopy") AND (validity OR reliability OR validation)`
- **Q2:** `(endoscopy OR gastroscopy OR colonoscopy OR "flexible endoscopy") AND (simulator OR "simulation model" OR "low-cost" OR "3D printed") AND ("construct validity" OR "face validity" OR "content validity" OR novice OR expert)`
- **Q3:** `(endoscopy OR laparoscopy) AND (simulat*) AND ("path length" OR "motion analysis" OR smoothness OR kinematic OR "movement metrics") AND (novice OR expert OR "construct validity")`
- **Q4:** `(esophagogastroduodenoscopy OR "upper gastrointestinal endoscopy" OR colonoscopy) AND ("learning curve" OR competence OR proficiency) AND (trainee OR fellow OR resident) AND (cumulative sum OR "number of procedures")`
- **Q5:** requiere bases de ingeniería (IEEE Xplore, Scopus) además de PubMed: `"tendon-driven" AND (endoscope OR "continuum robot") AND (low-cost OR "3D printed")`; revisar GitHub/repositorios abiertos.

Ya se probaron variantes de Q1–Q4 en PubMed (4 búsquedas, ~60 registros); los resultados útiles están en `02`. Falta: registro formal de la búsqueda (fecha, base, cadena, n de resultados), cribado y extracción.

## 5. Fuentes y método

- **Bases:** PubMed/MEDLINE, Embase, Scopus o Web of Science, Cochrane; IEEE Xplore para Q5. Búsqueda manual en revistas clave (Gastrointestinal Endoscopy, Endoscopy, Surgical Endoscopy, Simulation in Healthcare, Journal of Surgical Education) y *citation chasing* desde Vassiliou 2010, Walsh 2015, Sedlack 2015, Koch 2007, Ward 2016, Hohlstein 2026.
- **Diseño:** Q1, Q2, Q3 y Q4 como **revisión de alcance** (PRISMA-ScR) si se quiere publicar; Q5–Q8 como búsqueda dirigida. Registrar el protocolo (p. ej. OSF) antes de cribar.
- **Cribado:** dos fases (título/abstract → texto completo). Criterios: humanos o simuladores de endoscopia flexible; reporte de método y resultados; inglés/español. Excluir sin datos de validez o sin tarea de endoscopia.
- **Calidad:** MERSQI para estudios educativos (como usó Khan 2021), marco unificado de validez para instrumentos.
- **Extracción (ficha por estudio):** referencia con PMID/DOI/enlace, diseño, participantes y definición de grupos, tarea, instrumentos y métricas, resultados (efecto, IC, p), sensores/costos, limitaciones, y la **decisión del proyecto** que informa.
- **Entregables:** ficha por paper, matriz de evidencia (Excel), tabla de instrumentos (Q1), tabla de simuladores (Q2), lista de métricas con fórmula (Q3), tabla de cortes (Q4), y bibliografía Vancouver verificada.

## 6. Qué cuenta como «búsqueda adecuada» (criterios de calidad)

1. Cada pregunta tiene cadena registrada, fecha, base y n.º de resultados.
2. Todo estudio incluido tiene ficha completa y referencia verificada.
3. Las decisiones D11 y D12 quedan respaldadas por texto completo, no solo abstract.
4. Se documenta lo que **no** se encontró (p. ej., ausencia de revisión equivalente a Khan 2021 para endoscopia alta).
5. Las licencias de cualquier diseño abierto (Q5) quedan anotadas antes de reutilizarlo.
