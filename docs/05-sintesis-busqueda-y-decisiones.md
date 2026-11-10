# Síntesis de la búsqueda Q1–Q4 y qué cambia en las decisiones

2026-11-10 · Detalle: `busqueda_bibliografica/05_matriz_evidencia.md` (53 papers; solo 6 con texto completo; frases y calidad por verificar formalmente). Esta síntesis es **provisoria** hasta leer los PDFs prioritarios.

## 1. Efecto sobre decisiones ya confirmadas

| Decisión | Resultado de la búsqueda | Estado propuesto |
|---|---|---|
| **D11** grupos 0 / 50–<200 / ≥200 | Coincide con Walsh (50) y Koch (200) y con la competencia clínica (EGD 187–200 Ward; global 225–249 Siau; colonoscopia 233–300 Ward/Sedlack). Ningún estudio justifica empíricamente su corte de simulador | **Se mantiene**, declarando que es una convención con precedente, no un umbral validado. Evaluar sensibilidad con ≥250 y con ≥1000 |
| **D12** GAGES como criterio externo | GAGES tiene ICC alto en su estudio original (0,96–0,97), pero **en simulador se halló IRR 0,53–0,59 (n=9)**, no hay test–retest ni umbral, y Siau 2019 dice que carece de datos de confiabilidad. DOPS tiene la validación más amplia en EGD; ACE y GiECAT en colonoscopia. No hay estudio de GAGES sobre video de simulador | **Se mantiene como candidato, no como decisión cerrada.** Plan: estudio piloto de confiabilidad con entrenamiento de evaluadores; evaluar DOPS-JAG (EGD) / ACE como alternativas o complemento |
| **D13** métricas crudas | Consistente: las métricas de movimiento tienen resultados mixtos (trayectoria total no discriminó en Johnson 2021) y ninguna publica ICC | **Se mantiene.** Medir y reportar ICC propio de cada métrica |

## 2. Hallazgos que cambian el diseño del estudio

1. **Efecto techo recurrente** (Koch, ENDONIX, Cepek): los simuladores separan a los novatos de todos los demás pero no a intermedios/expertos. El estudio debe **incluir tareas difíciles y métricas de consistencia**, y declarar de antemano que separar intermedio de experto es un objetivo secundario.
2. **ENDONIX**: citar el texto completo (no hay diferencia entre principiantes y experimentados); el abstract dice otra cosa.
3. **Vacíos que son oportunidad (a declarar como hipótesis, no como novedad demostrada):** simulador físico de bajo costo para gastroscopia con validación de constructo; métricas de ruedas/angulación y bimanualidad (P13: sin evidencia verificada en PubMed).
4. **Confiabilidad de evaluadores**: el entrenamiento de evaluadores importa (Gupta 2012: sin entrenamiento no discriminan en video; Siau 2019: pocos aprendices con suficientes evaluaciones para G≥0,70). Presupuestar entrenamiento y número de evaluadores.

## 3. Correcciones a lo que escribí antes

- El plateau de **90–100** (dato de la exposición de Riquelme en el libro) **no tiene publicación identificada**; citarlo solo como comunicación del libro hasta obtener la referencia (pedirla al docente).
- Ward 2016 (EGD) se cita como **Gut 2017;66:1022-33** en Vancouver.
- Los valores **40/22/20 m (ICSAD)** son del libro (anestesia espinal) y **no se verificaron**; en el texto completo de Corvetto 2017 ICSAD no separó intermedios de expertos. Se retiran como cifra citable.
- El documento integral cita SPRINT como piloto; es un **caso-control no aleatorizado**.

## 4. Pendientes de búsqueda (siguiente pasada)

1. Obtener PDFs de los prioritarios sin PMC (GAGES, GiECAT, ACE, Khan 2021, Ward 2014/2016, Wang 2025, Grover 2015) y leerlos completos.
2. Verificación **mecánica** de frases textuales (guardar textos extraídos).
3. Cribar cadenas que quedaron sin revisar; verificar los candidatos de P13 (Barr 2023, Spaun 2010).
4. Pasada específica sobre GAGES (definición de grupos, test–retest, uso en video) y ACE-EGD.
5. Q5–Q8 (diseños de mango/tendones y licencias, gamificación, transferencia, puntos de corte y muestra).
6. Pedir la referencia UC (P17).

---

# Ampliación: Q5–Q8 (2026-11-10)

Detalle y límites en `busqueda_bibliografica/05_matriz_evidencia.md`. Ahora hay 103 fuentes con ficha; la lista de descarga para ingesta manual está en `busqueda_bibliografica/DESCARGAS.md` (y `descargas.csv`).

## Qué cambia en el diseño

| Tema | Hallazgo | Decisión propuesta |
|---|---|---|
| **Sensor de ruedas (AS5600)** | La literatura recuperada solo describe encoders ópticos (Dargar 2013) y sensado absoluto+incremental (patente expirada). **Nada sobre AS5600/Hall/potenciómetro** | Mantener AS5600 como propuesta técnica **sin respaldo bibliográfico propio**; validar en banco (ruido, histéresis) antes de depender de él |
| **Tendones y punta** | La **fricción tendón-funda domina la histéresis**, y empeora con curvaturas amplias (Kato 2015; Zhang 2023; Shen 2026). Sin cifras de fuerza ni vida útil | Mantener los ensayos con tubo recto y curvado del doc maestro; añadir medición de histéresis como métrica del banco de punta |
| **Diseños abiertos** | Ningún repositorio abierto de mango/ruedas de endoscopio flexible. OpenTrainer (laparoscopia) es CC BY-SA 4.0; otros repos **sin licencia → no reutilizar sin permiso** | Diseño propio; si se publica, elegir licencia explícita (p. ej. CERN-OHL / CC BY-SA). No copiar diseños sin licencia |
| **Gamificación** | Evidencia mixta y de bajo nivel; riesgos: rankings por velocidad premian la métrica; experiencia con videojuegos y sexo añaden varianza; feedback solo negativo desalienta | Refuerza el modo evaluación sin ranking ni premios; **registrar horas de videojuego como covariable**; evitar puntaje de velocidad; feedback con aspectos positivos y correctivos |
| **Dosis del curso piloto** | Práctica distribuida favorecida (15/19 estudios; ≤2 h/sesión); Spruit 3×75 min/semana; Tang sin diferencia entre intervalos de 1–2 y 6–8 días | El piloto (6 sesiones de 45–60 min, retención a 2–4 semanas) **está dentro del rango respaldado**; la evidencia no viene de endoscopia digestiva |
| **Transferencia** | VR mejora desempeño temprano vs no entrenar (Cochrane 2025 RR 1,62) pero **no reemplaza** entrenamiento en pacientes (RR 0,45); razón de acortamiento ≈1 en Cohen 2006; **ningún ECA de transferencia con simulador físico de bajo costo en EGD/colonoscopia** | No afirmar transferencia. Es un vacío y una pregunta futura (fase V5), no un claim |
| **Estándar / cut-off** | El método más usado es media/mediana de experimentados (40 %); grupos contrastantes + ROC tiene precedente en endoscopia (FES, n=160); con n pequeño las tasas observadas de FP/FN son inestables | Fijar el estándar con **grupos contrastantes a priori**, reportar FP/FN observados **y teóricos**, validar en muestra independiente, usar criterios conjuntivos de seguridad (Yudkowsky 2015) y no elegir el corte tras ver resultados |
| **Tamaño muestral** | Media de práctica ≈37 sujetos; en endoscopia simulada n=24–160; **no hay fórmula validada para validación de constructo** | Cálculo propio con stats-agent, basado en precisión (ancho de IC del ICC) y diferencia mínima relevante; no copiar "n típico" |
| **Confiabilidad** | Reportar ICC con modelo, tipo y definición + IC95 %; G-study/D-study para decidir nº de evaluadores y ensayos; **no hay G-study de GAGES/OSATS en endoscopia** | Incluir un G-study en el estudio piloto; presupuestar entrenamiento de evaluadores (conecta con Gupta 2012) |
| **Marcos y reporte** | Messick/Kane; 8 pasos de Cook & Hatala; STROBE/CONSORT + extensiones de simulación de Cheng 2016 | Adoptarlos como esqueleto del protocolo y del manuscrito |

## Pendientes de búsqueda tras Q5–Q8
1. Leer los PDFs de `DESCARGAS.md` (prioridad: sección A y B).
2. Completar Q5 con IEEE Xplore, Scopus, Printables/Thingiverse/OSHWA (no se consultaron; GitHub limitó la API).
3. Verificar candidatos sin PMID: Mikoto/LearnEndo, Hofstee/borderline regression, GRRAS, Cochrane 2012/2018.
4. Resolver con PDF las dudas abiertas (definición de grupos en GAGES; test–retest; resultado de la ECA de gamificación en endoscopia de Scaffidi).
