# Incorporación de `PROYECTO_INTEGRAL.md` (v1.0 consolidada) al trabajo hecho

2026-11-10. El documento integral estaba en la carpeta y no lo había incorporado en la integración anterior (`03`). Aquí se compara con lo ya definido y se decide qué prevalece. **Regla:** el integral v1.0 es el marco rector del *qué* (preguntas, curso, evaluación, cronograma); `01`–`05`, `hardware/` y `busqueda_bibliografica/` son el *cómo* y la evidencia; cuando chocan, se indica abajo.

## 1. Lo que el integral aporta y yo no tenía

| Elemento del integral | Cómo se incorpora |
|---|---|
| **Dos preguntas confirmadas**: (A) ¿la evaluación distingue expertos de no expertos? (B) ¿los no expertos alcanzan, tras el curso, el estándar experto? | Mi doc 01 cubría A (fases V2) y solo parcialmente B (V3 curva). **Se adopta A y B como las dos preguntas rectoras.** B exige curso, estándar previo, tarea nueva y retención |
| **Curso primero, dispositivo después** y nombre "Curso de fundamentos de manipulación bimanual del endoscopio flexible" | Se adopta. El hardware v0.1 queda como banco de pruebas de sensado, no como producto |
| **Objetivos O1–O6** observables con ejercicio, medición y requisito físico | Se adoptan; se enlazan con mis dimensiones D1–D5 (doc 01 §2): O2→D1, O3/O4→D3, O5→D2, O6→D5 |
| **Estudio B** (basal, curso, final, tarea nueva, retención 2–4 sem; grupo comparador; margen de equivalencia definido a priori; no excluir a quienes no alcanzan el criterio; calificadores independientes de los entrenadores) | Se adopta íntegro como diseño de la pregunta B (fase V3 ampliada) |
| **Curso piloto** (1 sesión basal + 6 de práctica + 1 final + retención; ~6,5–8,75 h por alumno) | Se adopta como hipótesis de dosis, no como garantía |
| **Muestra piloto** 5–8 expertos y 8–12 no expertos (solo usabilidad/fallos) | Se adopta; el confirmatorio se calcula después con apoyo estadístico |
| **Cronograma** 16–26 semanas hasta prototipo integrado; 22–34 hasta cerrar piloto; 265–445 h-persona | Se adopta como referencia **condicionada** a 15–20 h/semana de una persona técnica; recalcular con tu disponibilidad real |
| **Riesgos 1–14** (transferencia negativa, torque/holgura, conocer el juego, detección ≠ destreza, gobernanza/ética, etc.) | Se adoptan como lista de riesgos vigente |
| **Evidencia E1–E8** | Verificada en PubMed (ver `busqueda_bibliografica/05_matriz_evidencia.md`): PMID/DOI/cifras coinciden; matices en `05` §3 |
| **Mayor problema declarado: clasificación de participantes y errores críticos NO cerrados** | Mi D11 (grupos por n.º de procedimientos) cierra solo la clasificación **por experiencia**; los **errores críticos** siguen abiertos (ver §3) |

## 2. Dónde se contradicen el integral y mis definiciones

| Tema | Integral v1.0 | Mi definición | Decisión propuesta |
|---|---|---|---|
| Orden de instrumentación | "Primero video y observación, después sensores de ruedas" (§14) | Hardware con sensores de ruedas primero (pedido del usuario) | Se mantiene la **ruta en paralelo** del doc 03 §3.2. Además el integral pide definir desde la etapa 2 qué se mide aunque los sensores se instalen en la 6: se cumple (doc 01 §6) |
| Criterio de grupos | Grupos expertos/no expertos sin cortes numéricos | 0 / 50–<200 / ≥200 (D11) | D11 se mantiene; el integral dejaba esto abierto |
| Tiempo de entrenamiento y estándar | Estándar experto "previamente establecido" y margen de equivalencia a priori | Cut-off por grupos contrastantes/borderline (doc 01) | **Se combinan**: el estándar se fija a priori con panel y datos de expertos (grupos contrastantes) y se valida en muestra independiente, como pide el integral §7 |
| Mango | Carcasa desmontable en dos mitades | Cuerpo + tapa (v0.1) | Sin cambio (doc 03 §3.1) |
| Video | "No guardar video por defecto" | Video solo en sesiones de estudio para evaluadores ciegos | Sin cambio (doc 03 §3.5); el integral §18.13 ya pide consentimiento y revisión institucional |
| Evidencia sobre dificultad | No hay una maniobra única "más difícil" | Constructo = destreza psicomotora básica | Compatibles: el constructo no afirma una única maniobra |

## 3. Pendientes que el integral deja abiertos (y que siguen abiertos)

1. **Errores críticos** (qué cuenta como error crítico en estas tareas) y clasificación final de participantes: requiere panel de docentes.
2. **Estándar experto** concreto y **margen de equivalencia** del estudio B.
3. **Precio, compras y presupuesto**: sin cifras.
4. **Medidas de los equipos de la clínica** (ficha en `mediciones-clinica.md`).
5. **Ética institucional** antes de reclutar.

## 4. Estructura de archivos

El integral propone una estructura "futura" (§19). La vigente es la de `docs/03` §5 más `busqueda_bibliografica/`. El archivo del usuario `PROYECTO_INTEGRAL_` se renombra a **`PROYECTO_INTEGRAL.md`** (sin cambiar su contenido) para que GitHub lo muestre como Markdown.
