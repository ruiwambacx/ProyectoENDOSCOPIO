# Matriz de evidencia consolidada (Q1–Q8 + verificación de fuentes del documento integral)

Fecha de búsqueda: 2026-11-10 · Bases: PubMed (conector MCP) y Consensus (solo para descubrir candidatos; todo se verificó en PubMed) · 103 fuentes con ficha en `05_papers/fichas/` (96 PubMed + 7 no PubMed) · texto fuente en `05_papers/texto/` · índice `05_papers/indice.md` · referencias `05_referencias.md` · **lista de descarga `DESCARGAS.md`**.

**Advertencias de método (leer primero)**
1. **Lectura:** solo una minoría de las 103 fuentes se leyó a texto completo (PMC; ver total en `05_papers/indice.md`). El resto es **solo abstract**; no se trata como lectura completa. Los prioritarios sin PMC (GAGES, GiECAT, ACE, Khan 2021, Ward 2014/2016, Wang 2025, Grover 2015) requieren que consigas el PDF.
2. **Verificación de frases textuales:** las 100 frases de las 53 fichas de Q1–Q4/E fueron verificadas mecánicamente contra el texto guardado (83 contra el abstract, 17 contra texto completo PMC; ver `05_papers/verificacion_frases.md`). Las fichas de Q5–Q8 fueron verificadas por script por sus agentes contra `texto/<ID>.txt`; **las líneas "Responde también a" añadidas a fichas preexistentes no se re-verificaron**.
3. **Calidad:** los juicios MERSQI / COSMIN / Newcastle-Ottawa / RoB 2 y los niveles Oxford son **estimaciones preliminares desde el abstract**, no puntuaciones formales.
4. **Cribado parcial:** las búsquedas devuelven solo PMIDs; varias cadenas (>450 registros en Q3, cadenas amplias de Q1, Q2, Q6, Q7, Q8) se cribaron solo en parte, a menudo vía Consensus y luego verificación en PubMed. **No es una revisión exhaustiva.** La cadena de Q1 es ruidosa porque PubMed expande "ACE"/"DOPS" a términos farmacológicos.
5. **Incidente:** una carrera entre agentes sobrescribió dos fichas (19802776, 22726473); se repararon con las líneas "Responde a" correspondientes, pero **el contenido original de esas dos fichas pudo perderse**: revisarlas antes de citar.

## Síntesis por pregunta

### Q1 — Instrumentos (P1–P6)
- **EGD**: solo GAGES-UE, ACE-EGD (Miller 2019, PMID 31121154) y **DOPS JAG de gastroscopia** (Siau 2019, PMID 30911922: 10.086 DOPS, 987 aprendices, 275 centros; AUROC 0,964; competencia global 225–249 procedimientos). Solo DOPS tiene validación nacional amplia.
- **Colonoscopia**: según Khan 2021 (13 herramientas) las de evidencia más fuerte son **ACE (13/15), DOPS (15/15) y GiECAT (14/15)**; el abstract no coloca a GAGES en ese grupo.
- **GAGES** (Vassiliou 2010): acuerdo inter-evaluador 0,96 (UE) / 0,97 (C); α 0,89 / 0,95; novato vs experimentado p<0,001. **Contra**: en simulador, Ismail 2024 (n=9, un centro) halló IRR 0,59 (EGD) y 0,53 (colonoscopia) con IC amplios; Siau 2019 dice que GAGES-UE "carece de datos de confiabilidad". No hay test–retest ni umbral para GAGES. **No se pudo ver cómo definió novato/experimentado** (abstract no lo dice; sin PMC).
- **P5**: no se halló ningún estudio de GAGES/OSATS/GRS sobre **video de simuladores** con evaluadores ciegos. Lo más cercano: Mu 2024 (GAGES-C ciego sobre video, modelo porcino, sin ICC) y Habaz 2020/21 (GAGES-UE como criterio externo de una caja física de bajo costo, p<0,001, n=165).
- **Contra adicional**: evaluadores sin entrenamiento no discriminan en video (Gupta 2012); el puntaje de un simulador no separó expertos de intermedios (Jaensch 2023, p=0,40).

### Q2 — Simuladores (P7–P10)
- Simuladores físicos/low-cost validados: casi todos en **colonoscopia** y con grupos pequeños (n≈8–42), sin intermedios: ROSCO (King 2016, US$62,77), Plooy 2012, Sedlack 2006 (r=0,764 tiempo simulado vs paciente), BEST (Habaz). **No se halló validación de constructo de un simulador físico de bajo costo para gastroscopia.**
- VR (GI Mentor II): separa **novatos de todos los demás** (tiempo a ciego 29:57 vs 4:19–5:45 min) pero **no** intermedios/experimentados/expertos (Koch 2007, n=105).
- **ENDONIX** (Hohlstein 2025/2026, n=310): SUS 75; tiempo novatos 85,4 s / principiantes 55,0 s / experimentados 47,4 s. ⚠️ **Discrepancia**: el abstract dice que los experimentados fueron más rápidos que principiantes, pero los Resultados del texto completo dicen que **no hay diferencia entre principiantes y experimentados**: citar el texto completo, no el abstract. Los equipos fueron prestados por Olympus; no declara costo.
- Cochrane 2025 (Sabrie, 20 ECA, 500 participantes): VR vs ningún entrenamiento mejora finalización independiente (RR 1,62; certeza moderada); vs entrenamiento convencional RR 0,45 (certeza baja). Solo 4/20 ensayos con bajo riesgo de sesgo.
- Contra: Cepek 2022 (portátil de bajo costo; n=4+4; sin diferencia experto–novato en tiempo); Mikoto (solo 67 % de expertos cumple todos los criterios).

### Q3 — Métricas cinemáticas (P11–P13)
- Discriminan novatos de otros grupos: **tiempo, pérdida de visión del lumen, número de movimientos, longitud de trayectoria** (Koch 2007; Verdaasdonk 2007 SIMENDO; Leijte 2019: distancia 21,7/15,6/8,1 m y tiempo 1224/607/339 s en laparoscopia; revisión sistemática Mason 2013: tiempo, trayectoria y número de movimientos).
- Sensor mejor descrito: ICSAD (electromagnético, 20 Hz); correlación con escala global ρ −0,46 (Corvetto 2017) y 0,53 (Datta 2002). **Ningún estudio reporta ICC de las métricas ni tamaños de efecto** (solo p).
- **Contra**: Johnson 2021: trayectoria total y pulsaciones de botones **no** discriminan; Corvetto: ICSAD no separa intermedio de experto (texto completo; el abstract dice lo contrario); Haycock: solo 22/40 métricas discriminan; Pérez-Escamirosa: 9/13; Cepek: tiempo no discriminó.
- **P13 (uso de ruedas/angulación, bimanualidad): sin evidencia verificada en PubMed.** Es un gap real y una **ventaja potencial de novedad** para las métricas del dispositivo. Pistas vistas solo vía Consensus, **sin PMID verificado**: Barr 2023, Spaun 2010, Wang 2018 (congreso), Cuaj 2024 (congreso).
- ⚠️ **Los valores del libro guía** sobre Corvetto (novatos 40 m, intermedios 22 m, expertos 20 m) **no pudieron verificarse** (las tablas no están en el texto recuperado) y son de **anestesia espinal**, no endoscopia: no citarlos hasta revisar la tabla del PDF.

### Q4 — Cortes de experiencia y curvas (P14–P17)
- **EGD**: Ward 2016 (PMID 26976733; 1255 aprendices, 243.555 EGD): 95 % de finalización a **187** (media móvil), >90 % de aprendices a **200** (LC-CUSUM). Miller 2019 (ACE-EGD): intubación D2 ~100, resto 150–250. Siau 2019: competencia global **225–249**. Lee 2012 (Corea, n=4): meseta ~95.
- **Colonoscopia**: Sedlack 2015/2016 **250** (>90 % a 300); Ward 2014: 90 % CIR a **233**, solo 41 % competente a 200 (LC-CUSUM); Siau 2020 250–299; Wintzer-Wehekind 2025: solo 21 % con CIR >90 % a 204.
- **Grupos de experiencia en validaciones**: Walsh <50 / 50–500 / >1000; Koch 0 / <200 / 200–1000 / >1000; Siau 2020 SPRINT novato <25, intermedio ≥25, experto >1000. Ninguno justifica empíricamente su corte. **Nuestro 0 / 50–<200 / ≥200 coincide con Walsh en 50 y Koch en 200** y con la competencia clínica ~190–250, pero **un corte de competencia clínica no es lo mismo que una agrupación de experiencia para validar un simulador**.
- **Contra**: Forbes 2016 y Ekkelenkamp 2016: el número de procedimientos es un marcador insuficiente; Koch no separa experimentados de expertos (4:19 vs 4:56); Tang 2017: 1 de 3 fellows alcanzó competencia por CUSUM.
- **P17 (publicación UC sobre DOPS 33→4 ítems y plateau 90–100): NO encontrada** (búsquedas por autor, afiliación, tema y en español, PubMed y Consensus). Único hallazgo UC cercano: Varas 2012 (PMID 22733192), que trata transferencia laparoscópica, no es la publicación buscada. Posibles causas: tesis, libro o revista no indexada. **Acción: pedirle la referencia exacta al docente/libro.** Mientras tanto, citar el dato 90–100 solo como "comunicación del libro guía".

### Q5 — Diseños de mango, tendones y puntas de bajo costo (P18–P21)
- **No se halló ningún repositorio abierto de mango y ruedas de endoscopio flexible.** Existen mangos impresos publicados (Endonix, HelicoFlex, Heisterberg 2025) y un simulador de colonoscopia de US$62,77 (ROSCO, King 2016), pero ninguno publica CAD del mango. Punta continua impresa de Scott 2024 (arXiv): 4 mm × 20 mm, AUD 252,28.
- **Fricción tendón-funda domina la histéresis**: Kato 2015 (error 2,89 y 3,87 mm); Zhang 2023 (histéresis con curvaturas de 180° y 360°; mejora 25,5 % y 43,9 % sobre Bouc-Wen); Shen 2026 (error de punta de 36,11 a 9,42 mm). **No hay cifras de fuerza de tendón ni de vida útil** en las fuentes incluidas.
- **Sensado de ruedas**: encoders ópticos (Dargar 2013) y sensado absoluto+incremental (patente KeyMed GB2409326A, expirada). Johnson 2021 sensa la punta con Leap Motion (~US$100), no las ruedas. **No hay literatura sobre AS5600/Hall/potenciómetro** en este contexto: nuestra elección de AS5600 queda sin respaldo bibliográfico propio y debe validarse en banco.
- **Licencias (P21)**: OpenTrainer (laparoscopia) CC BY-SA 4.0 (leído en su LICENSE); MacroMicroSurgicalRobot y Friction-TDCR-Tension **sin licencia declarada → no reutilizables sin permiso**; ROSCO, Endonix y HelicoFlex sin licencia verificada.
- **Limitación**: no se consultaron IEEE Xplore, Scopus, Printables, Thingiverse ni OSHWA; la API de GitHub alcanzó su límite (8 de 14 búsquedas). Faltan por leer los textos completos de Kato, Dragone y Culmone 2020. **No es un inventario exhaustivo.**

### Q6 — Gamificación, retroalimentación automatizada y práctica distribuida (P22–P24)
- **Gamificación (P22)**: evidencia mixta, de bajo nivel y casi toda fuera de endoscopia digestiva. A favor: leaderboard de velocidad ↑ uso voluntario (44 % vs 4 %) y velocidad (194 vs 233 s) pero cohorte histórica; barras de progreso +1,5 puntos (+2,5 en retención a 2,5 meses, n=24). Nulo/adverso: Vernier 2026 (n=60) sin beneficio; el feedback gamificado solo negativo (Karim 2025) desalentó la práctica. **Riesgos de validez**: rankings por velocidad premian la métrica y no la calidad; experiencia con videojuegos (+1,4 puntos) y sexo (37,6 vs 19,7 en Vilmann) añaden varianza irrelevante. **No hay ECA con resultados de gamificación en endoscopia** (solo el protocolo de Scaffidi 2019).
- **Feedback automatizado vs tutor (P23)**: Vilmann 2018 (colonoscopia): puntaje de progresión +14,4 puntos (IC95 % 1,2–27,6) vs sin feedback, con más tiempo de práctica; Su 2025 (broncoscopia): tutor superior (p=0,026) y la guía VR no superó al control; Snyder 2010: retención similar a 4,5 meses (n=13). Sin evidencia de feedback por IA/video en endoscopia flexible.
- **Práctica distribuida (P24)**: Jørgensen 2024 (RS): 15 de 19 estudios favorecen lo distribuido y ninguno lo masivo; recomienda una sesión al día de ≤2 h. Spruit 2014: 3×75 min semanales > masivo (65 % vs 21 % proficiencia; ventaja a 2 semanas y 1 año). Tang 2023: sin diferencia entre intervalos de 1–2 y 6–8 días. **El piloto propuesto (6 sesiones de 45–60 min, retención a 2–4 semanas) cae dentro del rango respaldado**, pero la evidencia viene de laparoscopia, broncoscopia y microcirugía, no de endoscopia digestiva flexible.
- Candidatos sin PMID verificado (no incluidos): Mikoto (Olabintan 2025, Vamadevan 2026, Yamaguchi 2026), LearnEndo.

### Q7 — Transferencia al paciente y retención (P25–P27)
- **La simulación mejora el desempeño temprano frente a no entrenar** (Cochrane 2025: independencia RR 1,62, IC95 % 1,15–2,26, certeza moderada; Singh 2014: conducta clínica ES 0,49, tiempo ES 0,75) **pero no reemplaza el entrenamiento en pacientes** (RR 0,45, certeza baja). Cohen 2006: ventaja en los primeros 80–100 casos, con 160 casos a 90 % de competencia en ambos grupos (**razón de acortamiento ≈1**). Qiao 2014 (colonoscopia): sin beneficio (RR 1,10; IC95 % 0,88–1,37). Ferlitsch 2010 (EGD): 239 vs 310 s al duodeno en las primeras 10 EGD.
- **P26: no se halló ningún ECA de transferencia a paciente real con simulador físico de bajo costo en EGD o colonoscopia**; casi toda la evidencia en pacientes es VR. Mascagni 2022 (BEST vs VR) solo en FES y ex vivo (+25,16 vs +25,58; p=0,89). Kulcheski 2026 (sintético de US$90) muestra transferencia a cirugía real, pero en **endoscopia espinal**.
- **P27**: único dato de retención en colonoscopia: Snyder 2010 (mediana 10 vs 10 a 4,5 meses, n=13, mismo simulador VR). Transferencia cercana: Riek 2017, De Win 2013 (sutura laparoscópica, 1 y 6 meses), Cassidy 2022 (animal vivo).
- Cribado parcial: pueden existir ECA no capturados. No se localizó la Cochrane 2012/2018 con PMID propio; no hay versión endoscópica de Boza/UC.

### Q8 — Cut-offs, tamaño muestral, confiabilidad y marcos (P28–P31)
- **Standard setting (P28)**: el método más usado en simulación quirúrgica es la media/mediana de experimentados (65/162 estudios, 40 %; evidencia baja–moderada, Pietersen 2021). Precedente directo en endoscopia flexible: FES (Vassiliou 2013, n=160, grupos contrastantes + ROC; sensibilidad 0,81, 1-especificidad 0,21). Con n pequeño los falsos positivos/negativos observados son inestables (Jørgensen 2018: FP observado 9,1 % vs teórico 2,7 %); **reportar también los teóricos**. Borderline exige n grande; Angoff es una familia de variantes. Para el estándar tras el curso, Yudkowsky 2015 recomienda criterios conjuntivos de seguridad.
- **Tamaño muestral (P29)**: media de práctica de 37 sujetos/estudio, unicéntrico (Van Nortwick 2010; 83 estudios). En endoscopia simulada: n=24 (8/8/8, Jaensch), 35 (15/10/10, Nielsen), 160 (FES). **No hay fórmula validada de tamaño muestral para validación de constructo en la literatura recuperada**; el cálculo propio queda para stats-agent. Jaensch: experto vs intermedio p=0,40 con n=8 por grupo.
- **Confiabilidad (P30)**: reportar forma del ICC (modelo, tipo, definición) con IC95 % y umbrales 0,5/0,75/0,9 (Koo & Li 2016); usar G-study/D-study para decidir evaluadores y ensayos (Bloch & Norman 2012). Cifras halladas: 6 casos para fiabilidad >0,7 y 10 para >0,8 (Sun 2026, broncoscopia flexible); test–retest ICC 0,85 con n=11 (FES). **No hay G-study con evaluadores humanos de GAGES/OSATS en endoscopia.**
- **Marcos y reporte (P31)**: Messick (5 fuentes) y Kane (4 inferencias; "implicaciones" es la clave para el corte); 8 pasos de Cook & Hatala 2016; solo 6,6 % de 498 estudios quirúrgicos usó Messick (Borgersen 2018). Reporte: CONSORT y STROBE más las extensiones de simulación de Cheng 2016 (11 y 10 ítems; hay una versión duplicada en PMC: citar una sola).
- Candidatos sin PMID verificado: Hofstee/borderline regression (Dwyer 2016, Tappan 2025, Allahyari 2026), GRRAS (Kottner 2011); los *Standards for Educational and Psychological Testing* (AERA/APA/NCME) van como [no PubMed, sin PMID].

### Verificación de las fuentes E1–E8 del documento integral
Las 8 fuentes y Ward 2016 **existen y los PMID/DOI/revista/año coinciden**; ninguna cifra citada por el documento integral fue contradicha por PubMed (detalle en la tabla de la sección E, abajo). Matices a corregir en el documento integral:
- **E7 (SPRINT, Siau 2020)** es un **estudio de casos y controles no aleatorizado** (15 casos / 24 controles), no un ECA.
- **E3**: el texto completo dice "225–250" para la competencia global y "75–124" para pre-procedimiento (el abstract dice 100–124).
- **E8 (Grover)**: el abstract no da el n analizado ("33 analizados" no se pudo comprobar).
- **Ward 2016** (EGD): PubMed la cita como Gut 2017;66(6):1022-33 (epub 2016); citar 2017 en Vancouver.
- **E2 (Riek)**: los "novatos" son estudiantes de medicina de 1.º–2.º año; los expertos promedian 7173 colonoscopias.
- E1 (ESGE/ESGENA 2024): PMID 38040025; el abstract no trae umbrales numéricos.

## Cobertura
- 103 fuentes (96 PubMed + 7 no PubMed): 49 prioritarias; años 1995–2026, con mayoría 2007–2025.
- **Bien cubierto:** instrumentos para colonoscopia, curvas de aprendizaje EGD/colonoscopia, simuladores VR y físicos de colonoscopia, métricas de movimiento (laparoscopia sobre todo).
- **Mal cubierto / vacíos:** validez de constructo de simuladores físicos **de gastroscopia**; GAGES aplicado a video de simulador; confiabilidad test–retest de GAGES; métricas de ruedas/angulación; el estudio UC (P17); recomendaciones de volumen mínimo ASGE/ESGE/JAG leídas de forma directa; transferencia con simuladores físicos de bajo costo (no era el foco de Q1–Q4).
- **Instrumentos más usados:** DOPS, ACE, GiECAT, GAGES, OSATS (en simuladores de otras especialidades).
- **Recomendación:** búsqueda **no completa**. Siguiente pasada: (1) verificar mecánicamente las frases textuales; (2) obtener PDFs de los prioritarios sin PMC; (3) cribar las cadenas que quedaron sin revisar; (4) leer los PDFs de la lista `DESCARGAS.md`; (5) completar Q5 con IEEE Xplore/Scopus/Printables/OSHWA; (6) pasada específica sobre GAGES (definición de grupos, test–retest) y sobre ACE-EGD.

---

# Anexo — Matriz detallada Q1

# Matriz parcial Q1 — Instrumentos de evaluación (P1–P6)

Fecha de búsqueda: 2026-11-10. Fuente principal: PubMed (conector MCP; metadata PMID/DOI verificados con get_article_metadata). Complemento: Consensus (1 búsqueda; no aportó papers nuevos fuera de los ya en PubMed salvo Gupta/Jaensch/Barton, todos reverificados luego en PubMed).

## 1. Queries usadas

| # | Cadena (resumida) | Base | Fecha | N.º resultados |
|---|---|---|---|---|
| 1 | ("endoscopy" OR colonoscopy OR gastroscopy OR "upper endoscopy") AND ("assessment tool" OR "rating scale" OR "direct observation of procedural skills" OR GAGES OR GiECAT OR ACE OR DOPS) AND (validity OR reliability OR validation) | PubMed | 2026-11-10 | 259 (se revisaron los 30 primeros PMIDs; muy ruidosa por "ACE" y "DOPS" = droxidopa) |
| 2 | (DOPS OR "direct observation of procedural skills") AND (gastroscopy OR "upper gastrointestinal endoscopy" OR oesophagogastroduodenoscopy) AND (validity OR reliability) | PubMed | 2026-11-10 | 15 |
| 3 | (GAGES OR "Global Assessment of Gastrointestinal Endoscopic Skills") AND (simulator OR video OR OSATS OR blinded) | PubMed | 2026-11-10 | 108 (15 revisados) |
| 4 | "Global Assessment of Gastrointestinal Endoscopic Skills" | PubMed | 2026-11-10 | 47 (20 revisados) |
| 5 | "direct observation of procedural skills"[tiab] AND (endoscopy[tiab] OR colonoscopy[tiab] OR gastroscopy[tiab]) | PubMed | 2026-11-10 | 26 (20 revisados) |
| 6 | GAGES[tiab] AND (endoscopy[tiab] OR colonoscopy[tiab]) AND (simulator[tiab] OR video[tiab] OR validity[tiab]) | PubMed | 2026-11-10 | 12 |
| 7 | (endoscopy OR colonoscopy) AND (assessment tool OR rating scale OR GAGES OR DOPS) AND (ceiling effect OR "poor discrimination" OR "did not discriminate" OR "inter-rater reliability" OR limitations OR "rater bias") AND simulator, desde 2012 | PubMed | 2026-11-10 | 204 (15 PMIDs listados; sin utilidad por ruido, no se revisaron) |
| 8 | (colonoscopy OR endoscopy) AND (video OR videotaped OR recorded) AND ("global rating scale" OR "assessment tool") AND (inter-rater OR reliability) AND (simulator OR simulation) | PubMed | 2026-11-10 | 40 (12 PMIDs listados; no se revisaron) |
| 9 | Búsquedas por título para fijar PMID: Barton 2012 (1), Jaensch 2023 (2: artículo + corrección), Gupta DOPyS (3) | PubMed | 2026-11-10 | 1 / 2 / 3 |
| 10 | "limitations of endoscopy assessment tools GAGES DOPS reliability discrimination intermediate experts" | Consensus | 2026-11-10 | 8 |

Notas: PubMed expande "ACE" y "DOPS" a términos no relacionados; las cadenas 7 y 8 devolvieron IDs sin filtrar por título (no se leyeron). Un rate limit de Consensus (reintentado con éxito).

## 2. Tabla de evidencia

| Pregunta | Paper (autor, año) | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad / diseño | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P1, P2, P3 | Vassiliou 2010 (GAGES) **PRIORITARIO** | 20112113 / 10.1007/s00464-010-0882-8 | PubMed | Desarrollo y validación de GAGES-UE y GAGES-C: IRR 0.96/0.97, alfa 0.89/0.95, novato vs experimentado p<0.001 | "For the 139 completed evaluations (60 NOV, 79 EXP), IRR (A vs. O) was 0.96 for GAGES-UE and 0.97 for GAGES-C." | Validación multicéntrica observacional; evaluadores no ciegos; sin test-retest ni umbral | abstract | Instrumento criterio externo D12 |
| P1, P3 | Walsh 2015 (GiECAT) **PRIORITARIO** | 25753836 / 10.1016/j.gie.2014.11.030 | PubMed | GiECAT colonoscopia: IRR ICC 0.85; test-retest 0.91; diferencia novato/intermedio/experimentado | "Test-retest reliability was excellent (total: ICC=0.91; GRS: ICC=0.93; CL: ICC=0.80)." | Validación prospectiva multicéntrica; no cegado | abstract | Instrumento; fiabilidad |
| P1 | Walsh 2013 (GiECAT Delphi) | 24321390 / 10.1016/j.gie.2013.10.035 | PubMed | Validez de contenido: 7 ítems globales + 19 checklist | "Seven global ratings and 19 checklist items reached consensus as good indicators of the competence of clinicians performing colonoscopy." | Delphi (nivel 5) | abstract | Instrumento (contenido) |
| P3, P16 | Sedlack 2015 (ACE) **PRIORITARIO** | 26077455 / 10.1016/j.gie.2015.04.041 | PubMed | Umbral ACE 3.5, CIR 90%, <15 min; 250 procedimientos | "On average, it takes 250 procedures to achieve competence in colonoscopy." | Cohorte prospectiva multicéntrica (93 fellows, 1061 colonoscopias) | abstract | Umbrales de competencia |
| P1, P6 | Khan 2021 (RS) **PRIORITARIO** | 33440438 / 10.1055/a-1352-7293 | PubMed | ACE, DOPS y GiECAT con mayor evidencia de validez (13, 15, 14 de 15) | "The ACE, DOPS, and GiECAT have strong validity evidence compared with other assessments." | RS 27 estudios, 13 herramientas; MERSQI 9.5-11.5 | abstract | Panorama de instrumentos |
| P3, P4 | Siau 2019 (DOPS gastroscopia) **PRIORITARIO** | 30911922 / 10.1007/s00464-019-06737-7 | PubMed + PMC6946748 | DOPS JAG EGD: G>=0.70 con 3 evaluadores x 3 DOPS; umbral 3.9; AUROC 0.964; competencia global 225-249 procedimientos | "The combination of three assessments from three assessors was sufficient to achieve the reliability threshold of 0.70." | Cohorte nacional (10 086 DOPS, 987 aprendices) | texto completo (PMC) | Instrumento EGD (P4); curva EGD |
| P3 | Siau 2020 (DOPS colonoscopia) | 31738285 / 10.14309/ajg.0000000000000426 | PubMed | G>0.70 con 3 evaluadores x 2 DOPS; umbral 90% ítems; rho 0.404 con CIR | "Demonstrating competency in 90% of assessed items provided optimal sensitivity (90.2%) and specificity (87.2%) for benchmarking overall DOPS competence." | Cohorte nacional (10 749 DOPS) | abstract | Umbrales |
| P3, P4 | Barton 2012 (DOPS en colonoscopistas independientes) | 22227035 / 10.1016/j.gie.2011.09.053 | PubMed + Consensus | G=0.81; correlación con evaluación global | "The assessment had high relative reliability: G = 0.81." | Estudio de validación en práctica real | abstract | Instrumento |
| P1, P13 | Sarker 2008 | 18585680 / 10.1016/j.amjsurg.2007.10.024 | PubMed | Herramienta que separa habilidades genéricas (rueda de control) y específicas; alfa .83/.80 | "Generic technical skills are subtasks (eg, movements of the control wheel) that allow the endoscopist to complete a main task (specific technical skills), for example, reaching the cecum." | Validación pequeña (21 endoscopistas; 135 procedimientos) | abstract | Instrumentos alternativos; P13 |
| P1, P6 | Boyle 2012 | 22093083 / 10.1111/j.1463-1318.2011.02883.x | PubMed | Formulario discrimina novato/intermedio/experto; la escala global discrimina mejor que el checklist | "When separate elements were taken into account, the global assessment section was a better discriminator of skill level than the checklist." | Validación prospectiva, n=81 procedimientos | abstract | Apoyo a escala global |
| P5, P6 | Ismail 2024 (GAGES vs DOPS vs ACE en simulador) **PRIORITARIO** | 38312535 / 10.2147/AMEP.S427076 | PubMed + PMC10838491 | Comparación en simulador RV: IRR GAGES 0.59 (EGD) y 0.53 (colonoscopia) con intervalos hasta -0.90; alfa GAGES 0.87/0.85 | "Inter-rater reliability (IRR) scores were 0.79 (0.43-0.92) for ACE, 0.75 (-0.13-0.82) for DOPS, and 0.59 (-0.90-0.84) for GAGES." | Mixto, n=9, un centro; evidencia débil por muestra | texto completo (PMC) | Evidencia contraria; P5 |
| P5, P6 | Gupta 2012 (DOPyS en video) | 22154412 / 10.1016/j.gie.2011.09.028 | PubMed + Consensus | Escala observacional sobre video con evaluadores ciegos: solo evaluadores entrenados discriminan expertos de intermedios | "For the assessors with no previous experience of the DOPyS, no such difference could be seen (P = .71 and P = .15)." | Validez de constructo con video, 8 endoscopistas, 4 evaluadores | abstract | Contra: dependencia del entrenamiento |
| P6, P8 | Jaensch 2023 (puntaje en simulador RV) | 37563741 / 10.1186/s41077-023-00260-5 | PubMed + Consensus | Discrimina novatos de intermedios y expertos, pero no experto vs intermedio (p=0.40) | "Although expert endoscopists had a higher score, the difference was not statistically significant (p=0.40)." | Validación, n=24 (8 por grupo) | abstract | Evidencia contraria (techo/discriminación) |
| P5 | Mu 2024 (GAGES-C, video porcino ciego) | 39153329 / 10.1016/j.jsurg.2024.07.020 | PubMed | GAGES-C aplicado ciegamente a video de colonoscopia porcina; sin ICC reportado | "Both the baseline test and the post-test were blindly assessed by 2 experienced assistant director physicians based on the GAGES-C scoring system." | ECA n=40 | abstract | P5 (cercano, no es simulador) |
| P5, P7 | Habaz 2020 (BEST box vs GAGES-UE) | 33196877 / 10.1007/s00464-020-08152-9 | PubMed | GAGES-UE usado como criterio externo de un simulador físico de bajo costo | "The developed BEST box scoring system correlates with the experience level of the test taker as well as with the GAGES-UE scoring system." | Desarrollo + validación prospectiva (n=165) | abstract | Antecedente directo de D12 |

## 3. Evidencia CONTRARIA o críticas (P6)

- **Ismail 2024 (38312535, texto completo leído):** en simulador, GAGES obtuvo el IRR más bajo de los tres (0.59 EGD; 0.53 colonoscopia) con intervalos de -0.90 a 0.84; DOPS 0.75/0.78; ACE 0.79/0.72. Contradice las cifras originales de Vassiliou (0.96/0.97). Limitación: n=9, un centro. Evaluadores sintieron GAGES "relativamente subjetivo" y válido solo si interesa la destreza procedimental.
- **Siau 2019 (30911922, texto completo):** afirma que GAGES-UE "is limited by the lack of reliability data and the capacity to measure non-technical skills" y que ACE-EGD "currently lacks validity data". Discrepa del abstract de Vassiliou (ICC 0.96), probablemente por considerar la fiabilidad solo en el sentido de G-teoría; a aclarar al citar.
- **Khan 2021 (33440438):** entre 13 herramientas, ACE, DOPS y GiECAT (13, 15 y 14/15) tienen la evidencia más sólida; el abstract no coloca a GAGES en ese grupo (puntaje no recuperable sin texto completo).
- **Jaensch 2023 (37563741):** el puntaje de simulador no distinguió expertos de intermedios (p=0.40) y clasificó mal (3 expertos y 3 intermedios reprobaron).
- **Gupta 2012 (22154412):** evaluadores sin entrenamiento no distinguieron expertos de intermedios en video (P=.71 y .15) — advierte sobre la necesidad de entrenar a los evaluadores.
- **Siau 2019:** sólo 12.1% de los aprendices cumplía las condiciones (>=3 evaluadores x >=3 DOPS) para alcanzar G>=0.70; el 43% de la varianza era de caso a caso (carga de evaluación).

## 4. Preguntas SIN evidencia o con evidencia parcial (gaps)

- **P2:** no se obtuvo cómo Vassiliou definió "novato" y "experimentado" por n.º de procedimientos (el abstract no lo dice y el artículo no tiene texto completo en PMC). Pendiente: revisar el artículo o su suplemento.
- **P3:** GAGES: sin test-retest ni umbral de competencia en el abstract; GiECAT: sin umbral de competencia (solo discriminación); ACE: sin ICC en el abstract (ACE-EGD sin validación según Siau); DOPS: test-retest no reportado (se usa G).
- **P5:** no se encontró ningún estudio que aplique GAGES/OSATS/GRS sobre VIDEO de simuladores endoscópicos con evaluadores ciegos. Lo más cercano: Mu 2024 (video porcino, GAGES-C, ciego, sin ICC) y Gupta 2012 (video clínico de polipectomía). Se puede declarar como brecha (posible aporte novedoso).
- **P6:** no se halló estudio específico sobre "baja discriminación entre intermedios y expertos" para escalas de observador (solo para puntajes de simulador, Jaensch); no se halló análisis específico de carga de evaluación para GAGES.
- Búsquedas 7 y 8 no fueron depuradas por título; podrían contener estudios relevantes no revisados.

## 5. Síntesis por pregunta

- **P1:** Existen al menos 13 herramientas de observación directa para colonoscopia (Khan 2021); ACE, DOPS y GiECAT con las evidencias más completas (13/15/14). Para EGD solo hay GAGES-UE, ACE-EGD y DOPS JAG gastroscopia; únicamente DOPS tiene validación nacional amplia (Siau 2019, 10 086 DOPS). Sarker 2008 y Boyle 2012 son alternativas con menor evidencia.
- **P2:** GAGES (n=139 evaluaciones; 60 novatos, 79 experimentados): IRR 0.96 (UE) y 0.97 (C), alfa 0.89 y 0.95, novato vs experimentado 14.4 vs 18.5 (UE) y 11.8 vs 18.8 (C), p<0.001. Falta la definición operativa por n.º de procedimientos y test-retest; sin validación independiente por grupos intermedios.
- **P3:** GiECAT: IRR 0.85 y test-retest 0.91 (ICC). DOPS: G=0.81 (Barton) y G>=0.70 con 3 evaluadores x 2-3 DOPS (Siau); umbral 3.9 (sens. 91.9%, esp. 88.1%). ACE: umbral 3.5, CIR 90%, <15 min; 250 procedimientos. GAGES sin umbral.
- **P4:** DOPS JAG gastroscopia validado: estructura de 3 factores, AUROC 0.964, competencia global 225-249 procedimientos (Siau 2019). Existe versión pediátrica (Siau 2018, PMID 30216204; no incluida). ACE-EGD y GAGES-UE tienen menos evidencia según Siau.
- **P5:** No hay evidencia directa con video de simuladores y ciegos. GAGES-UE se usó como criterio externo de la BEST box (Habaz 2020: correlación p<0.001) y GAGES-C en video porcino ciego (Mu 2024); en simulador RV, el IRR de GAGES fue 0.59/0.53 (Ismail 2024, n=9).
- **P6:** Evidencia contraria moderada-débil: IRR bajo de GAGES en simulador (Ismail), dependencia del entrenamiento del evaluador (Gupta), falta de discriminación experto vs intermedio en métricas de simulador (Jaensch), alta variabilidad caso a caso y necesidad de >=3 evaluadores (Siau). Todos con muestras pequeñas salvo Siau.

## 6. Honestidad sobre el nivel de lectura

- Lectura completa (texto en PMC): Siau 2019 (30911922) e Ismail 2024 (38312535).
- Todos los demás: solo abstract de PubMed (sin PMC). Las fichas lo indican como "solo abstract".
- Las frases textuales fueron copiadas de la salida del conector (abstract/texto) y verificadas por comparación directa en esta sesión; no se guardaron los abstracts en archivo, por lo que no se ejecutó una búsqueda automática de cadenas.
- Papers considerados y NO incluidos por límite de espacio: 29614526 (Siau 2018, cambio de escala DOPS), 30216204 (Siau 2018, DOPS gastroscopia pediátrica), 24590220 (GiECAT Kids, Delphi), 35146554 (Cassidy 2022, GAGES en ECA con RV), 32719238 (Azzam 2020, SESAS vs DOPS kappa 0.90), 30604259 (Habaz 2019, BEST box primeros 100), 31895706 (comentario editorial; no empírico), 36374304 (revisión DOPS quirúrgico general).


---

# Anexo — Matriz detallada Q2

# Matriz parcial Q2 — Simuladores de endoscopia flexible validados (P7–P10)
Fecha de búsqueda: 2026-11-10 · Fuentes: PubMed (conector MCP) + Consensus (complemento; todo PMID/DOI verificado en PubMed). Nivel de lectura honesto: completa solo para Hohlstein 2025 y Koch 2007; el resto, solo abstract.

## 1. Cadenas de búsqueda (PubMed, 2026-11-10)
| # | Cadena | Resultados |
|---|---|---|
| 1 | Hohlstein plug-and-play virtual endoscopy simulator | 1 (PMID 41345533) |
| 2 | (endoscopy OR gastroscopy OR colonoscopy OR "flexible endoscopy") AND (simulator OR "simulation model" OR "low-cost" OR "3D printed" OR "virtual reality") AND ("construct validity" OR "face validity" OR "content validity" OR novice OR expert OR "systematic review") | 2110 (se revisaron los 25 primeros; casi todos fuera de alcance) |
| 3 | (low-cost OR "3D printed" OR "ex vivo" OR "physical model" OR "hybrid") AND (gastroscopy OR colonoscopy OR "upper endoscopy" OR EGD) AND (simulator OR model) AND validity | 58 (se listaron 20; sin metadata, no cribados en detalle) |
| 4 | (simulation OR simulator) AND (endoscopy OR colonoscopy OR gastroscopy) AND ("systematic review" OR "meta-analysis") | 276 (20 listados; no cribados uno a uno) |
| 5 | simulation-based training colonoscopy Cochrane systematic review | 3 (PMID 40919710, 30117156, 22696375) |
| 6 | (simulator OR simulation)[Title] AND (endoscopy…)[Title] AND (systematic review OR meta-analysis)[Title] | 277 (12 listados, no cribados) |
| 7 | (construct validity) AND (upper gastrointestinal endoscopy OR gastroscopy OR esophagogastroduodenoscopy) AND (simulator) | 49 (12 listados; 4 con metadata, irrelevantes) |
| 8 | low-cost endoscopy simulator 3D printed validation novice expert | 2 (irrelevantes: laparoscopia pediátrica) |
| 9 | Búsquedas dirigidas por título/autor: Plooy; ROSCO; Mascagni; Mikoto | 1; 1; 1; 2 |
| 10 | virtual reality simulator upper gastrointestinal endoscopy construct validity novices experts GI Mentor EGD | 0 |
| 11 | simulator esophagogastroduodenoscopy validity experience levels | 30 (8 listados; 5 con metadata; BEST box PMID 33196877 y cadáver PMID 36443563 incluidos) |
| C1 | Consensus: low-cost or physical flexible endoscopy simulator gastroscopy colonoscopy construct validity novices experts (page_size 15) | 15 (candidatos; luego verificados en PubMed) |

Nota: PubMed MCP devuelve PMIDs sin título, por lo que el cribado de las listas amplias (cadenas 2–4, 6–7) fue parcial. Las búsquedas amplias NO fueron exhaustivas; son un levantamiento de posicionamiento.

## 2. Tabla de evidencia
| Pregunta | Paper (autor, año) | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad / diseño | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P7, P9 | Hohlstein 2025 (Surg Endosc 2026;40:1629) PRIORITARIO | 41345533 / 10.1007/s00464-025-12396-8 | PubMed | Endonix: VR plug-and-play con mango 3D; validez cara/contenido/constructo/criterio | "No significant difference was found between beginners and experienced endoscopists" | Validación transversal, n=310; Oxford 4; moderada | Texto completo (PMC12881084) | Intro/Discusión (posicionamiento) |
| P8, P14 | Koch 2008 PRIORITARIO | 17516114 / 10.1007/s00464-007-9394-6 | PubMed | GI Mentor II discrimina novatos vs resto, no entre intermedios/experimentados/expertos | "In the cases used the simulator could not discriminate between intermediate, experienced and expert endoscopists." | Validación, n=105 en 4 grupos; Oxford 4; moderada | Texto completo (PMC2169271) | Discusión (techo de discriminación) |
| P8 | Haycock 2009 | 19802776 / 10.1055/s-0029-1215193 | PubMed | Simulador Olympus: 22 parámetros discriminan; intermedio <1000 | "The simulator discriminated participants by experience level for 22 different parameters." | n=34; Oxford 4; baja-moderada | Abstract | Discusión |
| P7 | Sedlack 2007 PRIORITARIO | 17100968 / 10.1111/j.1572-0241.2006.00942.x | PubMed | Modelo bovino ex vivo; correlación con tiempos en pacientes | "individual cecal intubation times on the simulation model had a very high correlation to their respective patient-based times (r = 0.764)" | n=39; Oxford 4; moderada | Abstract | Discusión (criterio externo) |
| P7 | Plooy 2012 PRIORITARIO | 22726473 / 10.1016/j.gie.2012.03.246 | PubMed | Modelo físico Kyoto Kagaku: constructo (experimentados vs novatos) | "experienced colonoscopists had significantly higher completion to cecum rates and shorter times to cecum for each of the 4 cases (all P < .005)" | n=39; Oxford 4; moderada | Abstract | Intro/Discusión |
| P7 | King 2016 (ROSCO) PRIORITARIO | 26905575 / 10.1007/s00464-016-4824-y | PubMed | Simulador físico open-source de bajo costo (US$62.77) con constructo | "Our simulator requires no advanced expertise, costs $62.77 US, and weighs 8.5 pounds." | n no verificado; Oxford 4; baja-moderada | Abstract | Intro/Discusión (análogo de bajo costo) |
| P7, P10 | Mascagni 2022 | 35258487 / 10.1097/XCS.0000000000000157 | PubMed | ECA: caja BEST de bajo costo no inferior a VR para FESms | "VRS and BT trainees showed comparable FESms improvements (25.16 ± 14.29 vs 25.58 ± 11.75 FESms points, respectively; p = 0.89)" | ECA n=77; Oxford 2 | Abstract | Discusión |
| P7 | Habaz 2021 (BEST box) | 33196877 / 10.1007/s00464-020-08152-9 | PubMed | Puntaje BEST correlaciona con GAGES-UE y discrimina | "correlated with GAGES-UE (p < 0.001)" | n=165; Oxford 4; moderada-alta | Abstract | Métodos (criterio externo) |
| P7, P14 | Vamadevan 2026 (Mikoto) | 41606141 / 10.1007/s00464-026-12593-z | PubMed | Fantoma háptico con métricas automáticas, confiabilidad y puntos de corte | "None of the novices passed, while 36% of intermediates and 67% of experts met all non-compensatory pass criteria." | n=42; Oxford 4; moderada-alta | Abstract | Discusión |
| P7 | Olabintan 2025 (Mikoto) | 41969773 / 10.1016/j.igie.2025.08.007 | PubMed | Mikoto: constructo y correlación con KPIs NED | "Significant differences were observed in median NED KPIs and MSS across all experience levels" | n=20 (5/grupo); Oxford 4; baja-moderada | Abstract | Discusión |
| P7 | Rohr 2023 | 36443563 / 10.1007/s00464-022-09763-0 | PubMed | Cadáver reperfundido: constructo | "The median time to reach RSJ (59, 272 and 686 s for skilled, intermediates and novices group, respectively)" | Piloto n=24; Oxford 4; baja | Abstract | Discusión |
| P7 | Llorente-Ortega 2023 | 36731822 / 10.1016/j.acuroe.2023.01.004 | PubMed | Simulador de baja fidelidad (cistoscopia flexible) con OSATS | "For all evaluated aspects of construct validity, there was a significant difference (p<0.05) between the group of experts and the group of non-experts." | n=24; Oxford 4; baja-moderada | Abstract | Discusión |
| P8 | Bittner 2010 (ERCP) | 19922914 / 10.1016/j.gie.2009.08.033 | PubMed | GI Mentor II ERCP: constructo solo con datos combinados | "Only when performance data from cases A and B were combined did the GI Mentor II differentiate novices and experts…" | n pequeño; Oxford 4; baja | Abstract | Discusión (límite) |
| P10 | Sabrie 2025 (Cochrane) PRIORITARIO | 40919710 / 10.1002/14651858.CD008237.pub4 | PubMed | SR/MA de VR en endoscopia GI: efectividad y transferencia a pacientes | "We found insufficient evidence to advise for or against the use of VR simulation-based training as a replacement for early conventional endoscopy training." | SR/MA, 20 ECA, 500 participantes; Oxford 1; certeza moderada a muy baja | Abstract (PMC12416132 no leído) | Intro/Discusión |
| P7 (contraria) | Cepek 2022 | 35546282 / 10.1089/end.2022.0180 | PubMed | Simulador portátil de bajo costo; sin constructo | "there were no significant differences between experts and novices in time to completion" | Piloto n=8+8; Oxford 4; baja | Abstract | Discusión (contrario) |

Superadas (no incluidas con ficha): Cochrane 2018, PMID 30117156 / DOI 10.1002/14651858.CD008237.pub3; Cochrane 2012, PMID 22696375 / DOI 10.1002/14651858.CD008237.pub2.

## 3. Evidencia contraria / matizadora
- Endonix: el abstract afirma que los experimentados fueron más rápidos que novatos o principiantes, pero el texto completo reporta que NO hubo diferencia entre principiantes y experimentados; validez de contenido solo "suficiente" (realismo 57.3% novatos, 34.9% principiantes, 37.2% experimentados) (Hohlstein 2025).
- GI Mentor II: no discrimina intermedios (<200) vs experimentados vs expertos (Koch 2008); en ERCP solo con datos combinados (Bittner 2010).
- Simulador portátil de bajo costo sin diferencias experto-novato (Cepek 2022, n=4+4).
- Cochrane 2025: VR frente a entrenamiento convencional puede dar menos procedimientos independientes (RR 0.45; certeza baja); evidencia insuficiente para reemplazo; solo 4/20 ensayos con bajo riesgo de sesgo.
- Mikoto: solo 36% de intermedios y 67% de expertos cumplen todos los criterios (Vamadevan 2026): los puntos de corte exigentes también excluyen a muchos experimentados.

## 4. Gaps
- P7: validez de constructo de simuladores FÍSICOS de bajo costo para EGD (gastroscopia): no se halló ninguno en PubMed con esta búsqueda; el grueso es colonoscopia. Falta evidencia de simuladores con cámara real + mango 3D con ruedas sensadas.
- P8: no se localizó validación de constructo de VR específica para EGD con n adecuado (cadena 10 = 0 resultados; cadena 7 no cribada en detalle). Pendiente: Accutouch/EndoSim en EGD y la revisión de validez (p. ej. revisiones sobre entrenamiento y evaluación en endoscopia GI) no se identificaron.
- P9: solo un artículo sobre Endonix (Hohlstein); sin otros plug-and-play identificados.
- P10: no se halló un metaanálisis que combine simuladores físicos y VR ni uno centrado en validez; la revisión de alcance de costo/validez (Zhao 2025) es solo resumen de congreso (J Can Assoc Gastroenterol), sin PMID verificado, por lo que no se incluyó.
- Transferencia a pacientes: solo vía Cochrane (VR); sin evidencia de transferencia para simuladores físicos de bajo costo.
- Cribado de las listas amplias (cadenas 2–4, 6–7) incompleto por limitaciones del conector (PMIDs sin título).

## 5. Síntesis por pregunta
- P7: Los simuladores físicos/híbridos validados en colonoscopia discriminan principalmente novatos de experimentados (Plooy 2012: P<.005 en 4 casos; King 2016: ROSCO US$62.77 con constructo; Sedlack 2007: r=0.764 vs tiempos en pacientes). Los estudios son pequeños (n=8 a 42) y rara vez evalúan intermedios; la caja BEST se correlaciona con GAGES-UE (Habaz 2021, n=165).
- P8: GI Mentor II discrimina novatos de todos los demás (tiempo al ciego 29:57 vs 4:19–5:45) pero no intermedios de experimentados/expertos (Koch 2008; n=105); Haycock 2009 halló 22 parámetros discriminantes con intermedios <1000.
- P9: Endonix (Hohlstein 2025; n=310): SUS 75, tiempo novatos 85.4 s vs 55.0 s vs 47.4 s, sin diferencia principiantes vs experimentados; correlación con nº de EGD r −0.39 a −0.42; realismo bajo en no novatos. No hay otros estudios identificados.
- P10: Cochrane 2025 (20 ECA, 500 participantes): VR vs ningún entrenamiento mejora la finalización independiente (RR 1.62; certeza moderada), pero hay evidencia insuficiente para reemplazar el entrenamiento convencional.
- Posicionamiento: un simulador físico de bajo costo con constructo demostrado en experimentados vs novatos y con métricas crudas sería coherente con la literatura; la ventaja a demostrar es discriminar también a intermedios, donde VR falla (Koch 2008; Hohlstein 2025).

## 6. Tabla comparativa de simuladores
| Simulador | Tipo | Costo declarado | Tarea | Grupos y n | Métrica | Resultado de constructo | Limitaciones |
|---|---|---|---|---|---|---|---|
| Endonix (Hohlstein 2025) | VR + mango 3D plug-and-play | No declarado (equipos prestados) | Trace the Line; ESD marking | 114 novatos / 49 principiantes / 147 experimentados | Tiempo, SUS, NASA-TLX | Novatos > principiantes y experimentados; sin diferencia principiantes vs experimentados | Autoasignación; realismo bajo; sin curva de aprendizaje |
| GI Mentor II (Koch 2008) | VR háptico | No declarado | Colonoscopia VR (casos 1 y 3) | 35 / 15 / 20 / 35 (0, <200, 200–1000, >1000) | Tiempo al ciego, pérdida de lumen | Discrimina novatos vs resto; no entre intermedios/experimentados/expertos | Háptica dudosa; techo ~200 |
| Olympus (Haycock 2009) | VR háptico | No declarado | 3 casos colonoscopia | 10 / 13 / 11 | 40 métricas | 22 parámetros discriminan | n pequeño; intermedio <1000 |
| Kyoto Kagaku (Plooy 2012) | Físico comercial | No declarado | 4 casos colonoscopia | 18 novatos / 21 experimentados | Completitud, tiempo, fuerza | Experimentados mejores (P<.005) | Solo 2 grupos; 2 casos no evaluados |
| Modelo bovino (Sedlack 2007) | Ex vivo | No declarado | Colonoscopia completa | 13 / 13 / 13 | Tiempo cecal | Staff 226 s < fellows 340 s < novatos 1027 s | Logística biológica; n pequeño |
| ROSCO (King 2016) | Físico bajo costo | US$62.77 | 5 tareas FES + intubación cecal | Novatos vs expertos (n no verificado) | Tiempos | Expertos mejores (p<0.05) | Encuestas propias; n pequeño |
| BEST box (Habaz 2021; Mascagni 2022) | Caja física bajo costo | No declarado en abstract | 6 tareas FES-like | 20 expertos / 45 aprendices (+100 retrospectivo) | Puntaje compuesto (30–110) vs GAGES-UE | Expertos 92 vs aprendices 61 (p<0.001) | Puntaje compuesto; tareas no de navegación completa |
| Mikoto (Vamadevan 2026; Olabintan 2025) | Híbrido físico-computarizado | No declarado | 3 colonoscopias | 42 (0 / 1–999 / >1000); 20 (5/grupo) | Tiempo al ciego, índice de elongación, MSS | Discrimina niveles (p<0.001; P=.046) | Comerciales; muestras pequeñas |
| Cadáver reperfundido (Rohr 2023) | Biológico | No declarado | Colonoscopia hasta RSJ/colon descendente | 8 / 5 / 11 | Tiempo, tasa de llegada | Tiempos menores en expertos (p<.01) | Acceso/costo |
| Portátil bajo costo (Cepek 2022) | VR + controlador Bluetooth | "low-cost" sin cifra | 10 tareas básicas | 4 expertos / 4 novatos | Tiempo | Sin diferencia expertos vs novatos | n=8; urología |
| Cistoscopia baja fidelidad (Llorente-Ortega 2023) | Físico bajo costo | No declarado | 2 tareas + OSATS | 5 expertos / 19 no expertos | Tiempo, OSATS | Diferencia p<0.05 | Urología |


---

# Anexo — Matriz detallada Q3

# Matriz parcial Q3 — Métricas cinemáticas (P11–P13)
Fecha de búsqueda: 2026-11-10. Fuentes: PubMed (MCP) y Consensus (complemento solo para descubrir candidatos; todos los incluidos se verificaron en PubMed con PMID/DOI).

## Queries usadas
| # | Base | Cadena | Resultados |
|---|---|---|---|
| 1 | PubMed | (endoscopy OR colonoscopy OR gastroscopy OR laparoscopy) AND simulat* AND ("path length" OR "motion analysis" OR smoothness OR kinematic OR "movement metrics" OR "hand motion" OR "economy of movement") AND (novice OR expert OR "construct validity") | 250 (se revisaron 25 PMIDs; los títulos no se cribaron uno a uno) |
| 2 | PubMed | (colonoscopy OR endoscopy OR gastroscopy) AND (electromagnetic tracking OR "motion analysis" OR "path length" OR "hand motion") AND (novice OR expert) | 236 (25 PMIDs revisados) |
| 3 | PubMed | Corvetto spinal anesthesia simulator hand motion ICSAD | 1 (PMID 28962548) |
| 4 | PubMed | Imperial College Surgical Assessment Device hand movements Datta Darzi | 4 |
| 5 | PubMed | flexible ureteroscopy simulation motion tracking kinematic novice expert construct validity | 0 |
| 6 | PubMed | búsquedas por título exacto (Mason 2013, SIMENDO, Plooy, Haycock, Johnson) | 1 c/u |
| 7 | Consensus | motion analysis path length novice expert colonoscopy simulator construct validity | 15 |
| 8 | Consensus | flexible endoscope control wheel use bimanual coordination novice versus expert endoscopist motion tracking | 10 |
Nota: la búsqueda Consensus de ICSAD/Datta falló por rate limit y se reemplazó por la búsqueda 4 en PubMed. Las búsquedas 1-2 devolvieron solo PMIDs; no se cribaron los >450 registros por título/abstract (limitación: cribado no exhaustivo).

## Tabla Pregunta | Paper | PMID/DOI | Fuente | Respuesta | Frase | Calidad | Verificado en | Destino
| Pregunta | Paper | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad/diseño | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P11 | Koch 2007 | 17516114 / 10.1007/s00464-007-9394-6 | PubMed | Tiempo a ciego y pérdida de lumen discriminan novatos (29:57 vs 4:19-5:45 min) | "Novices lost view of the lumen significantly more often compared to the other groups" | Validación, n=105, moderada | Abstract | Marco teórico/métricas |
| P11, P12 | Verdaasdonk 2007 (SIMENDO) | 17653815 / 10.1007/s00464-006-9177-5 | PubMed | Tiempo y longitud de trayectoria discriminan; colisiones solo vs novatos | "Group A (expert) outperformed all the other groups (B, C, and D) in terms of total median task time (p < 0.05), groups C and D in terms of path length" | Validación, n=61 | Abstract | Métricas |
| P11, P12 | Leijte 2019 (eoSim) | 30671668 / 10.1007/s00464-018-06652-3 | PubMed | Distancia 8,1/15,6/21,7 m y tiempo 339/607/1224 s | "...distance (means 8.1, 15.6 and 21.7 m, respectively, p < 0.001)" | Validación, n=104, laparoscopia | Abstract | Métricas (referencia) |
| P11 | Korzeniowski 2016 (NOViSE) | 27671036 / 10.1177/1553350616669896 | PubMed | Trayectoria endoscópica más corta en expertos | "Experts were faster and used a shorter endoscopic path length than novices in all but one task." | Validación, n=14 | Abstract | Métricas |
| P11 | Pérez-Escamirosa 2022 (VIORS) | 36509946 / 10.1007/s00464-022-09797-4 | PubMed | 9 de 13 MAPs discriminan | "Statistically significant differences were found in nine MAPs, demonstrating their construct validity" | Validación, n=45, laparoscopia | Abstract | Métricas |
| P11 | Haycock 2009 | 19802776 / 10.1055/s-0029-1215193 | PubMed | 22/40 métricas del Olympus discriminan (bucles, rigidez variable) | "The simulator discriminated participants by experience level for 22 different parameters." | Validación, n=34 | Abstract | Métricas |
| P11 | Plooy 2012 | 22726473 / 10.1016/j.gie.2012.03.246 | PubMed | Tiempo a ciego y finalización discriminan; fuerza máxima solo en 2/4 casos | "experienced colonoscopists had significantly higher completion to cecum rates and shorter times to cecum for each of the 4 cases (all P < .005)" | Validación, n=39 | Abstract | Métricas |
| P11 | Mason 2013 | 23233011 / 10.1007/s00464-012-2631-7 | PubMed | Revisión: tiempo, longitud de trayectoria y nº de movimientos son los parámetros válidos | "Valid parameters are time taken, path length and number of hand movements." | SR, 13 estudios | Abstract | Marco teórico |
| P12 | Corvetto 2017 (ICSAD) | 28962548 / 10.1186/s12871-017-0422-3 | PubMed | ICSAD: Patriot electromagnético 20 Hz, 1 mm; TPL, movimientos, tiempo; r=-0,46 con GRS | "The 3-dimensional Cartesian coordinates of each sensor are recorded in real time at a resolution of 1 mm and a frequency of 20 Hz." | Validación, n=30 | Texto completo (sin tablas) | Métodos/sensor |
| P12 | Datta 2001 | 11708503 / 10.1016/s1072-7515(01)01041-9 | PubMed | ICSAD: movimientos y tiempo con gradiente por experiencia (p<0,001) | "...a motion analysis system that measures the number of hand movements made and time taken to complete a task." | Validación, n=51, cirugía abierta | Abstract | Sensor |
| P12 | Datta 2002 | 12135725 / 10.1016/s0002-9610(02)00891-7 | PubMed | Movimientos ICSAD vs OSATS GRS rho=0,53 | "There is a strong correlation between hand motion analysis using ICSAD and OSATS global rating assessments in this model." | Validación concurrente, n=50 | Abstract | Sensor/criterio externo |
| P11, P12 | Johnson 2021 | 34725623 / 10.7759/cureus.18379 | PubMed | Controlador de colonoscopio: tiempo y nº de movimientos discriminan; path length y botones no | "There was no difference in button presses or total path length traveled." | Validación, n=24 | Abstract | Contrario |
| P11 | Cepek 2022 | 35546282 / 10.1089/end.2022.0180 | PubMed | Simulador portátil: tiempo NO discriminó (n=8) | "there were no significant differences between experts and novices in time to completion" | Piloto, n=8 | Abstract | Contrario |

## Evidencia contraria / métricas que NO discriminan
- Cepek 2022 (35546282): el tiempo de finalización no difiere entre expertos y novatos (n=4 vs 4; subpotenciado).
- Johnson 2021 (34725623): longitud total de trayectoria y pulsaciones de botones no discriminan; sí tiempo y nº de movimientos.
- Corvetto 2017 (28962548): ICSAD no separa intermedios de expertos (ni novatos de intermedios en la fase de punción).
- Koch 2007 (17516114): no discrimina intermedios (<200) de experimentados/expertos (efecto techo).
- Haycock 2009 (19802776): solo 22 de 40 métricas discriminan.
- Pérez-Escamirosa 2022 (36509946): 4 de 13 MAPs no discriminan.
- Plooy 2012 (22726473): fuerza máxima discrimina solo en 2 de 4 casos.
- Candidatos vistos solo vía Consensus, SIN PMID verificado en PubMed y por tanto NO incluidos: Barr 2023 (seguimiento electromagnético en colonoscopia, 16 métricas; refiere que velocidad media, suavidad e ineficiencia de trayectoria no cambiaron tras entrenamiento) y Wang 2018 (resumen de congreso; trayectoria manual derecha 6,42 m novatos vs 2,91 m expertos). Verificar en PubMed antes de citar.

## Gaps
- Pocos estudios de movimiento de manos/cuerpo del endoscopio en EGD/colonoscopia; la mayoría son métricas internas de simuladores VR (tiempo, pérdida de lumen, bucles) o laparoscopia.
- P13 (uso de ruedas/angulación y manipulación bimanual): NO se encontró estudio en PubMed con PMID verificado. Solo un resumen de congreso (Cuaj 2024, ureteroscopia flexible, deflexión de palanca 5,7% novatos vs 10,8% expertos, p=0,001; ruta de trayectoria 2182 vs 1164 mm) sin PMID: no citable aquí. Spaun 2010 (aprendizaje bimanual con endoscopio flexible; novatos 202 s vs experto 89 s) visto solo en Consensus, sin PMID verificado. Gap real y oportunidad de novedad.
- Ningún estudio reporta ICC test-retest de las métricas cinemáticas en endoscopia flexible; los tamaños de efecto (d de Cohen) casi nunca se informan.
- Cribado de las búsquedas 1-2 no exhaustivo (solo PMIDs; >450 registros sin revisar por título).
- Los valores 40/22/20 m del libro guía (Corvetto) no verificables en el texto recuperado (tablas ausentes).

## Síntesis por pregunta
- P11: Tiempo (novatos ~30 min vs 4-5 min a ciego, Koch), pérdida de visión del lumen, nº de movimientos y longitud de trayectoria discriminan novato vs experimentado de forma consistente (eoSim 21,7 vs 8,1 m; SIMENDO p<0,05); casi ningún estudio separa intermedios de expertos con estas métricas.
- P12: Sensores usados: ICSAD (electromagnético Patriot, 20 Hz, 1 mm), ProMIS (óptico), seguimiento de instrumentos eoSim, métricas internas de VR. Confiabilidad (ICC) no reportada; efecto casi siempre solo como p; única correlación con criterio externo ICSAD-GRS rho=-0,46 (Corvetto) y 0,53 (Datta 2002).
- P13: Sin evidencia verificada sobre uso de ruedas o bimanualidad en endoscopia flexible (gap). El nº de movimientos y la trayectoria de ambas manos sí se miden con ICSAD, pero no hay desglose por ruedas.

## Tabla métrica | cómo se calcula | sensor | dirección | estudios | discrimina
| Métrica | Cómo se calcula | Sensor | Dirección del efecto | Estudios | Discrimina |
|---|---|---|---|---|---|
| Tiempo (a ciego/tarea) | Segundos de inicio a hito/fin | Software de simulador, cronómetro | Menor en expertos | Koch 17516114; Verdaasdonk 17653815; Leijte 30671668; Plooy 22726473; Johnson 34725623 | Sí (salvo Cepek 35546282: no, n=8; Koch: no separa intermedios de expertos) |
| Pérdida de visión del lumen | Nº de veces que se pierde el lumen | Software GI Mentor II | Menor en experimentados | Koch 17516114 | Sí (novato vs resto) |
| Longitud de trayectoria (path length) | Suma de distancias de la posición (manos, punta o instrumento) | Electromagnético (ICSAD), simulador VR, tracking de instrumento | Menor en expertos | Leijte 30671668; Verdaasdonk 17653815; Korzeniowski 27671036; Corvetto 28962548; Mason 23233011 | Mixto (Johnson 34725623: no; Corvetto: no separa intermedios de expertos) |
| Nº de movimientos | Conteo de movimientos segmentados por umbral de velocidad | ICSAD | Menor en expertos | Datta 11708503; Corvetto 28962548; Johnson 34725623 | Sí (Mason: válido) |
| Suavidad, velocidad, aceleración | Derivadas de la posición; suavidad = jerk | eoSim, ProMIS | Esperado: expertos más suaves | Leijte 30671668 (medidas; abstract no informa resultado) | Sin dato verificado |
| Colisiones/errores | Conteo de contactos | SIMENDO | Menor en expertos | Verdaasdonk 17653815 | Mixto (solo vs novatos, primeras repeticiones) |
| Fuerza máxima | Fuerza pico sobre el modelo | Sensor de fuerza del modelo | Menor en expertos | Plooy 22726473 | Mixto (2 de 4 casos) |
| Bucles (sigmoides) | Número y tamaño de bucles N, tiempo para resolver alfa | Software Olympus | Menores en expertos | Haycock 19802776 | Sí (p=0,01-0,02) |
| Uso de ruedas/angulación; manipulación bimanual | Deflexión de ruedas; coordinación entre manos | Encoders/potenciómetros (propuesto) | Sin evidencia verificada | Ninguno con PMID verificado | Sin dato |


---

# Anexo — Matriz detallada Q4

# Matriz parcial Q4 — Cortes de experiencia y curvas de aprendizaje (P14–P17)
Fecha de búsqueda: 2026-11-10. Fuentes: PubMed (conector MCP; PMID/DOI verificados con metadata) y Consensus (complemento, solo para descubrir; todo PMID/DOI se verificó luego en PubMed). Nivel de lectura: TODOS solo abstract (ninguna lectura completa; PMC existe para 30911922, 17516114 y 40069701, no se leyó).

## 1. Queries usadas
| # | Cadena | Resultados |
|---|---|---|
| 1 | (esophagogastroduodenoscopy OR "upper gastrointestinal endoscopy" OR colonoscopy) AND ("learning curve" OR competence OR proficiency) AND (trainee OR fellow OR resident) AND ("cumulative sum" OR "number of procedures") | 51 |
| 2 | (colonoscopy OR endoscopy) AND simulator AND (novice AND intermediate AND expert) AND (number of procedures OR previous procedures) AND construct validity | 20 |
| 3 | (Riquelme A OR Varas J OR Boza C)[Author] AND (endoscopy OR endoscopic) AND (learning curve OR assessment OR DOPS) | 38 (solo 20 listados; sin títulos, no triables) |
| 4 | (upper GI endoscopy OR EGD) AND (Chile OR Pontificia Universidad Catolica de Chile) AND (learning curve OR assessment OR training) | 96 (ruido; solo 20 listados) |
| 5 | (DOPS) AND (upper endoscopy/EGD) AND (esophageal intubation OR learning curve) | 8 (todos ERCP/EUS/simulación; 0 relevantes a P17) |
| 6 | Riquelme A[Author] AND (endoscopy OR endoscopic OR gastroscopy)[Title] | 6 (clínica H. pylori/varices/campañas; 0 relevantes) |
| 7 | (Varas J, Achurra P, Jarufe N, Martinez J)[Author] AND endoscop*/gastroscopy/EGD[Title] | 35 (solo 15 listados) |
| 8 | Varas J[Author] AND (upper endoscopy OR EGD OR upper GI endoscopy)[Title/Abstract] | 0 |
| 9 | Boza C[Author] AND (endoscopy OR endoscopic)[Title/Abstract] AND (training OR learning curve OR simulation) | 0 |
| 10 | (endoscopia digestiva alta OR upper endoscopy) AND (curva de aprendizaje OR learning curve) AND Chile[Affiliation] | 1 (irrelevante, urología) |
| 11 | Varas J[Author] AND Surg Endosc[Journal] AND (laparoscopic training OR simulation OR transfer) | 10 |
| 12 | Siau K[Author] AND (gastroscopy OR colonoscopy)[Title] AND DOPS[Title] | 5 |
| 13 | Búsquedas por título/autor para PMIDs (Miller 2019, Ekkelenkamp, Wintzer-Wehekind) | 1-3 c/u |
| C1 | Consensus: "upper GI endoscopy learning curve esophageal intubation DOPS reduced critical items Chile surgical residents" | 15 |
| C2 | Consensus: "Varas Boza Jarufe upper GI endoscopy training surgical residents UC Chile assessment learning curve" | 10 |

## 2. Matriz
| Pregunta | Paper (autor, año) | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad/diseño | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P15 | Ward 2016 | 26976733 / 10.1136/gutjnl-2015-310443 | PubMed | 187 EGD al 95% de finalización (moving avg); >90% a las 200 (LC-CUSUM) | "By moving average method, trainees attained a 95% completion rate at 187 procedures." | Cohorte nacional, n=1255; buena | Abstract (PubMed) | Introducción / Métodos (justificación de corte 200) |
| P16 | Sedlack 2015 | 26077455 / 10.1016/j.gie.2015.04.041 | PubMed | Colonoscopia: competencia a 250, >90% a 300 | "On average, it takes 250 procedures to achieve competence in colonoscopy." | Multicéntrico prospectivo; buena | Abstract | Introducción / Discusión |
| P15 | Miller 2019 | 31121154 / 10.1016/j.gie.2019.05.024 | PubMed | EGD ACE-E: D2 a 100, tiempo a 150, resto 200-250 | "...it takes GI fellows only 150 procedures to simply drive the scope adequately but 250 procedures to achieve minimum competence in the remaining cognitive and motor skills." | Multicéntrico; buena | Abstract | Introducción / Discusión |
| P15 | Siau 2019 (gastroscopia DOPS) | 30911922 / 10.1007/s00464-019-06737-7 | PubMed | Competencia global 225-249; técnico 150-174 | "global competency (225-249 procedures)" | Cohorte nacional n=987; buena | Abstract | Introducción |
| P16 | Siau 2020 (colonoscopia DOPS) | 31738285 / 10.14309/ajg.0000000000000426 | PubMed | "Procedure" a 250-299 | "\"procedure\" (250-299) domain" | Cohorte nacional n=1199; buena | Abstract | Introducción |
| P14 | Walsh 2015 GiECAT | 25753836 / 10.1016/j.gie.2014.11.030 | PubMed | Novato <50 / intermedio 50-500 / experimentado >1000 | "33 novice (<50 previous procedures), 18 intermediate (50-500 previous procedures), and 10 experienced (>1000 previous procedures) endoscopists" | Validación multicéntrica; buena | Abstract | Métodos (justificación de grupos) |
| P14 | Koch 2008 GI Mentor II | 17516114 / 10.1007/s00464-007-9394-6 | PubMed | Intermedio <200 / experimentado 200-1000 / experto >1000 | "intermediate experienced (<200 colonoscopies performed before), experienced (200-1,000 colonoscopies performed before), and experts (>1,000 colonoscopies performed before)" | Validación VR, n=105; moderada | Abstract | Métodos / Discusión |
| P15 | Lee 2012 Corea | 22677598 / 10.1016/j.jsurg.2012.03.002 | PubMed | CUSUM EGD en cirujanos: plateau 95 (81-111) | "...the mean value of the plateau was the 95th case." | n=4; baja | Abstract | Discusión |
| P14-16 | Forbes 2016 | 27345644 / 10.1016/j.bpg.2016.04.003 | PubMed | El n.º no basta como marcador (contraria) | "...rather than relying on this measure as the sole marker of trainee competency" | Revisión narrativa | Abstract | Discusión (limitaciones) |
| P14-16 | Ekkelenkamp 2016 | 25636697 / 10.1136/gutjnl-2014-307173 | PubMed | Umbrales varían; simuladores no discriminan competencia | "Ten studies explored the numbers needed to gain competence, but the proposed thresholds varied widely between them." | Revisión sistemática 94 estudios | Abstract | Introducción / Discusión |
| P16 | Marshall 1995 | 8536893 / 10.1016/s0016-5107(95)70123-0 | PubMed | 54% vs 86% de éxito cecal; mínimo de 100 puede ser bajo | "...minimum threshold number for technical competency in colonoscopy of 100 procedures, as suggested by the ASGE, may be low" | Cohorte pequeña, antigua; baja | Abstract | Discusión |
| P16 | Tang 2017 | 28648577 / 10.1016/j.gie.2017.06.011 | PubMed | Novatos: solo 1/3 alcanzó competencia por CUSUM | "...reached competency for only 1 fellow." | ECA n=3 fellows | Abstract | Discusión |
| P16 | Wintzer-Wehekind 2025 | 40069701 / 10.1186/s12909-025-06924-2 | PubMed | Solo 21% alcanzó CIR90 (204); LC competencia 225 en 8,6% | "LC competency was reached by 8.6% of residents after an average of 225 procedures" | Cohorte prospectiva, n=81 | Abstract | Discusión |
| P17 | Varas 2012 (candidato grupo UC, laparoscopia) | 22733192 / 10.1007/s00464-012-2391-4 | PubMed | NO es el estudio buscado; contexto de grupo UC | "Trainees significantly improved their advanced laparoscopic skills to a level compared with expert surgeons." | Pre-post, n=25 | Abstract | Solo contexto (no citar para P17) |

## 3. Evidencia contraria / matizadora
- Forbes 2016 (27345644) y Ekkelenkamp 2016 (25636697): el n.º de procedimientos es un marcador insuficiente; los umbrales publicados varían ampliamente; las curvas de aprendizaje individuales son más informativas. Los simuladores actuales no discriminan niveles de competencia en pacientes.
- Wintzer-Wehekind 2025 (40069701): solo 21% de residentes alcanzó CIR90 tras 204 colonoscopias; la variabilidad individual es alta.
- Tang 2017 (28648577): solo 1 de 3 fellows alcanzó competencia por CUSUM; Marshall 1995 (8536893): variación interindividual; mínimo ASGE de 100 posiblemente bajo.
- Koch 2008 (17516114): no separa experimentados de expertos (4:19 vs 4:56), pese a corte de 200/1000.
- Importante para D11: los cortes publicados de COMPETENCIA CLÍNICA (≥~200-250) no coinciden con el corte intermedio 50-<200 / experimentado ≥200 del proyecto, que es un criterio de agrupación de experiencia para validar un simulador, no un umbral de competencia clínica.

## 4. Gaps
- P17: NO se halló la publicación UC (DOPS reducido, curva de intubación esofágica). Búsquedas por autor (Riquelme, Varas, Boza, Jarufe, Achurra), afiliación y tema (esofágica/DOPS) no devolvieron un estudio coincidente; el único del grupo con transferencia (Varas 2012) es laparoscopia. Probablemente esté en un libro/tesis, revista no indexada (p. ej. en español) o con autores/títulos distintos. Pendiente: pedir al usuario referencia exacta del libro guía.
- No se obtuvo PMID verificado de: ESGE/ESGENA Position Statement 2023 (Antonelli; visto en Consensus), Han 2020 Acad Med (EGD y colonoscopia, CUSUM, 1385 EGD / 1293 colonoscopias), Wani 2018 (EUS/ERCP, fuera de alcance). No incluidos por la regla de PMID/DOI de PubMed; recomendables para una segunda pasada.
- ASGE/ESGE/JAG recomendaciones de volumen mínimo: solo indirectas (Ward: "JAG ... 200"; ESGE sin verificar).
- Sin texto completo de ningún paper; los cortes provienen de abstracts. Falta leer métodos de Ward y Miller (no están en PMC).
- Falta evidencia sobre cortes de experiencia en simuladores físicos de bajo costo (corresponde a Q2).

## 5. Síntesis por pregunta
- P14: Walsh 2015 usa <50 / 50-500 / >1000 y Koch 2008 <200 / 200-1000 / >1000; no hay corte único. El esquema del proyecto (0 / 50-<200 / ≥200) coincide con Walsh en 50 y con Koch en 200, pero sin respaldo empírico propio.
- P15 (EGD): Ward 187 (95% D2) y >200 (LC-CUSUM); Miller 100 para D2, 150 tiempos, 200-250 resto; Siau 225-249 global; Lee 95 (n=4, criterio local).
- P16 (colonoscopia): Sedlack 250 (>90% a 300); Siau 2020 250-299; Wintzer 204 para CIR90 en 21%; Marshall 1995 54%→86%.
- P17: no hallado; candidato descartado (Varas 2012, laparoscopia).
- Conclusión: competencia clínica ~200-250 procedimientos; el corte ≥200 del proyecto es consistente con eso.

## 6. Tabla de cortes por estudio
| Estudio | Procedimiento | Corte propuesto/observado | Criterio de resultado | n |
|---|---|---|---|---|
| Ward 2016 | EGD | 187 (moving avg); 200 (LC-CUSUM, >90% aprendices) | Finalización a D2 95% | 1255 aprendices, 243 555 EGD |
| Miller 2019 | EGD | 100 (D2), 150 (tiempos), 200-250 (resto) | ACE-E 3,5; D2 ≥95%; ≤4,75 min | 96 fellows, 1002 EGD |
| Siau 2019 | EGD | 225-249 global (150-174 técnico) | DOPS ≥3,9 | 987 aprendices, 10 086 DOPS |
| Lee 2012 | EGD | 95 (rango 81-111) | CUSUM de éxito (tiempo y puntos) | 4 aprendices |
| Sedlack 2015 | Colonoscopia | 250 (>90% a 300) | ACE 3,5; cecal 90%; <15 min | 93 fellows, 1061 procedimientos |
| Siau 2020 | Colonoscopia | 250-299 (dominio procedure) | DOPS 90% ítems | 1199 aprendices, 10 749 DOPS |
| Wintzer 2025 | Colonoscopia | 204 (CIR90, 21%); 225 (LC, 8,6%) | Cecal >90% LC-CUSUM | 81 residentes, 6259 |
| Marshall 1995 | Colonoscopia | 149 (1.er año) → 328 (2.º año); ASGE 100 posiblemente bajo | Ciego <30 min | 13 fellows |
| Tang 2017 | Colonoscopia | solo 1/3 alcanzó competencia | Intubación cecal independiente (CUSUM) | 3 fellows, 203 |
| Walsh 2015 | Colonoscopia (grupos) | novato <50 / interm. 50-500 / exp. >1000 | Discriminación GiECAT | 61 endoscopistas |
| Koch 2008 | Colonoscopia VR (grupos) | <200 / 200-1000 / >1000 | Tiempo al ciego, pérdida de lumen | 105 |


---

# Anexo — Matriz detallada Q5

# Matriz parcial Q5 — Mango, tendones y puntas articuladas de bajo costo / impresas en 3D (P18–P21)
Fecha de búsqueda y acceso: 2026-11-10. Fuentes: PubMed (MCP), Consensus (plan gratuito, sin DOI en resultados), alphaXiv, WebSearch/WebFetch, API pública de GitHub y Crossref (solo para resolver DOI de fuentes no PubMed; luego se comprobó que doi.org responde 302).
Convención: PubMed = PMID y DOI del conector. No PubMed = etiqueta "[no PubMed, sin PMID]" + URL/DOI + fecha de acceso.

## Queries usadas
| # | Base | Cadena | Resultados |
|---|---|---|---|
| 1 | PubMed | (endoscope OR colonoscope OR endoscopic) AND ("tendon-driven" OR "bending section" OR "3D printed" OR "3D-printed") AND (design OR prototype OR low-cost) | 268 (solo 20 PMIDs devueltos; no cribados) |
| 2 | PubMed | (endoscopy simulator) AND (encoder OR potentiometer OR "hall sensor" OR "motion tracking" OR "force feedback") | 171 (20 PMIDs; los 2 revisados no eran pertinentes: 42816304 urología CFD; 42742770 háptica robótica) |
| 3 | PubMed | (endoscope OR colonoscope) AND ("tendon-driven" OR "bending section" OR "continuum" OR "articulating tip") AND (low-cost OR "3D-printed" OR prototype) | 19 (15 PMIDs devueltos; se revisaron los 3 primeros) |
| 4 | PubMed | (flexible endoscopy OR colonoscopy OR gastroscopy) AND (low-cost OR 3D-printed OR homemade) AND (simulator OR training model) AND (handle OR sensor OR open-source) | 16 (15 PMIDs; solo 26905575 ya fichado en Q2) |
| 5 | PubMed | (endoscope OR colonoscope OR bronchoscope) AND (simulator OR training) AND (rotary encoder OR potentiometer OR "Hall effect" OR "magnetic sensor" OR "optical sensor") AND (angulation OR dial OR knob OR handle) | 0 |
| 6 | PubMed | búsquedas dirigidas (Culmone steerable 3D printed; Kato tendon-driven neuroendoscopy; control devices ergonomics; VTEST optical encoders) | 3 / 1 / 1 / 1 |
| 7 | Consensus | tendon-driven continuum robot friction hysteresis curved sheath endoscope | 10 |
| 8 | alphaXiv | tendon friction hysteresis ... curved sheath, low-cost open-source endoscope designs | 15 (2605.16870 SSTL, 2603.19124 TPU backbone, 2610.19798 plataforma de actuación; **no abiertos**, solo listados) |
| 9 | WebSearch (x4) | github 3D printed endoscope handle simulator...; open-source low-cost colonoscopy simulator STL license; Printables/Thingiverse steerable endoscope handle; endoscope simulator wheel angulation encoder potentiometer | ~10 resultados c/u |
| 10 | API GitHub (repos) | endoscope simulator 3d print; tendon driven continuum 3d printed; colonoscopy simulator; endoscope handle tendon; bronchoscope simulator, etc. | 8 de 14 consultas respondieron (resto rate-limit); hallazgos relevantes: OpenTrainer; repos no relevantes descartados |
Limitaciones: sin acceso a IEEE Xplore/Scopus/Printables/Thingiverse (no se pudieron consultar); GitHub sin autenticación; no se encontró ningún repositorio de mango/ruedas de endoscopio flexible.

## Tabla Pregunta | Fuente | ID/DOI/URL | Qué responde | Frase textual | Calidad | Verificado en | Sección destino
| Pregunta | Fuente | ID / DOI / URL | Qué responde | Frase textual | Calidad | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|
| P18 | Culmone 2020 (PubMed) | PMID 32407397 / 10.1371/journal.pone.0232952 | Mango + eje totalmente impresos (3 piezas, 10 GDL) | "A prototype called the HelicoFlex was built using only three 3D printed parts." | Prototipo; moderada | Abstract | Diseño mango v0.2 |
| P18 | Culmone 2022 (PubMed) | PMID 36194613 / 10.1371/journal.pone.0275535 | Cables paralelos preferidos por 10/12 usuarios | "10 out of 12 participants preferred the parallel configuration due to a more intuitive hand movement..." | ECA n=12; baja-moderada | Abstract | Diseño mango |
| P18, P20 | Heisterberg 2025 (PubMed) | PMID 40196841 / 10.3389/frobt.2025.1559574 | Carcasas PLA + Arduino Micro HID; joystick sustituye ruedas | "An Arduino Micro board (Arduino S. r.l., Monza, Italy) was used to read and process signals from the interface elements." | Usabilidad; baja-moderada | Texto completo PMC11973676 | Diseño mango / electrónica |
| P18 | King 2016 ROSCO (ficha Q2) | PMID 26905575 / 10.1007/s00464-016-4824-y | Simulador físico open source costo USD 62,77 | "Our simulator requires no advanced expertise, costs $62.77 US, and weighs 8.5 pounds." | Validación constructo; moderada | Abstract | Posicionamiento |
| P18, P20 | Hohlstein 2025 Endonix (ficha Q2) | PMID 41345533 / 10.1007/s00464-025-12396-8 | Mango endoscópico 3D impreso por USB; sensor y licencia no descritos | "The Endonix® virtual endoscopy simulator consists of a 3D-printed endoscope handle that can be plugged into a computer." | Validación n=310; moderada | Texto completo (ficha Q2) | Posicionamiento |
| P18, P19 | Scott 2024 | arXiv 2405.16084 [no PubMed, sin PMID] https://arxiv.org/abs/2405.16084 | Punta continua 4 mm x 20 mm, poleas FDM, costo AUD 252,28, CAD abierto | "The estimated total cost of the micro manipulator assembly is $252.28 AUD." | Prototipo; baja-moderada | Texto completo alphaXiv | Diseño punta |
| P19 | Kato 2015 (PubMed) | PMID 26476639 / 10.1007/s11548-015-1310-2 | Tendones = principal factor de histéresis; error 2,89 / 3,87 mm | "The tendons were the most predominant factor affecting the hysteresis operation of the robot." | Banco; moderada | Abstract | Diseño punta / banco |
| P19 | Zhang 2023 TMRB | DOI 10.1109/tmrb.2023.3249234 [no PubMed, sin PMID] | Histéresis tendón-funda con curvatura 180°/360°; -25,5 % y -43,9 % de error | "...on the two TSMs with different accumulated curvatures of 180° and 360°." | Banco; moderada | Abstract (Consensus) | Banco de fricción |
| P19 | Do 2015 MSSP | DOI 10.1016/j.ymssp.2015.01.001 [no PubMed, sin PMID] | Modelo de fricción dinámica y backlash para formas arbitrarias de funda | "The proposed models are configuration independent and able to capture the nonlinearities for arbitrary tendon-sheath shapes." | Moderada | Abstract (Consensus) | Banco de fricción |
| P19 | Shen 2026 RAL + repo | DOI 10.1109/lra.2026.3688094 [no PubMed, sin PMID]; https://github.com/Jia0Shen/Friction-TDCR-Tension | Error de punta 36,11 -> 9,42 mm con modelo Capstan-LCP | "...a reduction of tip position error from 36.11 mm in conventional sliding friction models to 9.42 mm for a 402-mm-long robot." | Moderada | Abstract (Consensus) | Banco de fricción |
| P19, P20 | Dragone 2023 (PubMed) | PMID 37763906 / 10.3390/mi14091743 | Punta 3D 5,5 mm, Bowden, sensado optoelectrónico | "A prototype of the manipulator with a length of 43 mm and a diameter of 5.5 mm has been realized via 3D printing." | Baja-moderada | Abstract | Diseño punta |
| P20 | Dargar 2013 (PubMed) | PMID 23400138 / sin DOI en PubMed | Encoders ópticos rotacionales para medir las ruedas | "We have developed an accurate and high resolution optical encoder based system to measure that dial manipulations..." | Baja | Abstract | Sensado de ruedas |
| P20 | Johnson 2021 (ficha Q3) | PMID 34725623 / 10.7759/cureus.18379 | Punta sensada ópticamente con Leap Motion (~USD 100), sin sensor de rueda | "The Leap Motion controller is designed to optically detect hand position to allow its use in motion-controlled software applications." | Validación n=24; moderada | Texto completo PMC8553393 | Sensado |
| P20, P21 | KeyMed GB2409326A [no PubMed, sin PMID] | https://patents.google.com/patent/GB2409326A/en (accedido 2026-11-10) | Detector absoluto de baja resolución + encoder incremental por cable; patente expirada | "the position of the or each angulation cable is sensed by a combination of a low resolution absolute position detector" | Patente; n/a | Extractos de la página | Sensado |
| P18, P21 | OpenTrainer [no PubMed, sin PMID] | https://github.com/BME-Open-Index/OpenTrainer | Modelo de repositorio abierto con BOM/CAD; CC BY-SA 4.0 (laparoscopia) | "OpenTrainer costs less than $150 in materials." | Repo con paper; n/a | README + LICENSE.txt | Licencias |
| P18, P21 | MacroMicroSurgicalRobot [no PubMed, sin PMID] | https://github.com/drliaowu/MacroMicroSurgicalRobot | STL de punta + PartsList.pdf; sin licencia declarada | "ROS package providing simultaneous teleoperation of a custom micro-manipulator and a Universal Robots UR5e robotic arm via a 3D Systems Touch haptic stylus." | Repo académico | README + API | Licencias |

## Tabla de diseños abiertos (P18, P21)
| Nombre | URL | Licencia (leída) | Qué incluye | Último commit | Reutilizable |
|---|---|---|---|---|---|
| OpenTrainer (laparoscopia DIY) | https://github.com/BME-Open-Index/OpenTrainer | CC BY-SA 4.0 (LICENSE.txt; "Except where otherwise noted", con excepciones de módulos de entrenamiento no leídas) | BOM, archivos de diseño, instrucciones de ensamblaje, videos (carpetas Appendix A-D); contenido de los CAD no abierto | 2026-07-28 | verificar (sí con atribución y ShareAlike, pero es otro dominio) |
| MacroMicroSurgicalRobot | https://github.com/drliaowu/MacroMicroSurgicalRobot | **no declarada** (API license = null; sin LICENSE) | 6 STL de la punta (meshes/), PartsList.pdf, código ROS | 2024-02-09 | no (sin licencia; pedir permiso al autor) |
| Friction-TDCR-Tension | https://github.com/Jia0Shen/Friction-TDCR-Tension | **no declarada** | Solo código MATLAB (sin CAD) | 2026-05-13 | no (sin licencia; solo código de modelado) |
| ROSCO (Rutgers Open Source Colonoscopy Simulator) | sin repositorio hallado (solo paper PMID 26905575) | no declarada en el abstract | Descripción del montaje con materiales comerciales | n/a | verificar (buscar suplemento del paper) |
| Endonix | sin repositorio hallado (PMID 41345533) | no declarada | Mango impreso 3D (diseño no publicado que se haya visto) | n/a | verificar |
| HelicoFlex (TU Delft) | sin repositorio hallado (PMID 32407397) | no verificada (suplementos del artículo PLoS no abiertos) | Mango y eje impresos | n/a | verificar |
| Hardware propio del proyecto | hardware/ (este proyecto) | por decidir | handle.js, STL, AS5600 | n/a | decidir licencia de salida (p. ej. CC BY-SA / CERN-OHL) |

## Evidencia contraria / matices
- Heisterberg 2025 abandona las ruedas por un joystick por razones de ergonomía: el diseño de ruedas no es el único defendido, aunque para un simulador de destreza psicomotora las ruedas son el constructo (inferencia propia, no declarada por los autores).
- Hohlstein 2025 (Q2) reporta realismo bajo en no novatos con mango impreso: un mango impreso no garantiza validez de contenido.
- Johnson 2021 sensa la punta y no las ruedas; sus diferencias se explican sobre todo por movimientos de la mano izquierda (dial): sugiere que sensar las ruedas es informativo, pero no es evidencia directa.

## Gaps
- No se encontró ningún repositorio (GitHub/Thingiverse/Printables/OSHWA) con mango y ruedas de endoscopio flexible; Printables, Thingiverse, OSHWA e IEEE Xplore NO pudieron consultarse (WebSearch no devolvió listados).
- No hay datos de vida útil (ciclos) de tendones/ruedas impresos en ninguna fuente incluida.
- Sin cifras de fuerza de tendón ni de fricción con tubo curvado en diámetro de endoscopio (9-12 mm) en el abstract de ninguna fuente; los textos completos de Kato 2015 (PMC4993112), Dragone 2023 (PMC10535800) y Culmone 2020 (PMC7224500) existen en PMC pero no se leyeron.
- Sin comparación publicada entre AS5600/potenciómetro/encoder óptico en ruedas de endoscopio; solo Dargar 2013 (óptico, sin cifras) y una patente (absoluto + incremental).
- Candidatos vistos, no fichados: Song 2023 (sobretubo continuo, histéresis < 1,5 %, carga 4,27 N; DOI 10.1109/tmrb.2023.3294527, resuelto en Crossref), Gao 2024 (histéresis dependiente de rigidez), alphaXiv 2605.16870 / 2603.19124 / 2610.19798; no se verificaron.

## Síntesis por pregunta
- **P18**: hay mangos impresos (Endonix, HelicoFlex, Heisterberg) y un simulador abierto de USD 62,77 (ROSCO), pero ninguno publica CAD de mango con ruedas de endoscopio flexible; la punta continua de 4 mm de Scott 2024 y la de 5,5 mm de Dragone 2023 cuestan ~AUD 252 / sin costo declarado.
- **P19**: la fricción tendón-funda domina la histéresis (Kato 2015: 2,89-3,87 mm de error; Zhang 2023: curvaturas de 180° y 360°, -25,5 %/-43,9 % de error; Shen 2026: 36,11 -> 9,42 mm). Vida útil: sin datos.
- **P20**: sensado de ruedas con encoder óptico (Dargar 2013) o absoluto+incremental (patente KeyMed); la punta puede sensarse ópticamente (Leap Motion, Johnson 2021). AS5600/Hall: sin literatura hallada.
- **P21**: licencias legibles: OpenTrainer CC BY-SA 4.0; los repos de punta continua no declaran licencia (no reutilizables sin permiso); la patente GB2409326A figura expirada.


---

# Anexo — Matriz detallada Q6

# Matriz parcial Q6 — Gamificación, retroalimentación automatizada y diseño de práctica (P22-P24)
Fecha de búsqueda: 2026-11-10. Fuentes: PubMed (conector MCP; PMID/DOI verificados con metadata) y Consensus (solo descubrimiento; todo PMID/DOI verificado luego en PubMed). Lectura: solo abstract para todos, EXCEPTO Tang 2023 (37993677), leído completo vía PMC10776690. Ningún otro prioritario tiene PMC (Jørgensen, Spruit, Vilmann, Su, Vernier: sin PMC; Moulton PMC1856544 y Scaffidi PMC6443058 existen pero no se leyeron). Snyder 2010 (20698383) tiene ficha de otro agente; se le añadió solo "Responde también a".

## 1. Queries usadas
| # | Cadena | Fecha | Resultados |
|---|---|---|---|
| 1 | (gamification OR "game-based" OR "serious game" OR leaderboard OR "scoring feedback") AND (endoscopy OR colonoscopy OR laparoscopy OR "surgical simulation" OR "procedural skills") AND (learning OR retention OR transfer OR "skill acquisition") | 2026-11-10 | 108 (solo 25 PMIDs listados, sin títulos; no cribados uno a uno) |
| 2 | ("augmented feedback" OR "automated feedback" OR "artificial intelligence feedback" OR "computer-assisted feedback") AND (endoscopy OR "surgical skills" OR simulat*) | 2026-11-10 | 129 (solo 25 listados; no cribados uno a uno) |
| 3 | ("distributed practice" OR "spaced practice" OR "massed practice" OR "skill retention") AND (endoscopy OR laparoscopy OR "surgical simulation") | 2026-11-10 | 78 (solo 30 listados; no cribados uno a uno) |
| 4 | Scaffidi gamification simulation-based endoscopy training randomized | 2026-11-10 | 1 (30804029, protocolo) |
| 5 | Búsquedas por título/autor para obtener el PMID de candidatos hallados en Consensus (Vilmann, Snyder, Su, El-Beheiry, Vernier, Nøhr, Karim, Spruit, Jørgensen, Tang, Strandbygaard, Moulton) | 2026-11-10 | 1-2 c/u |
| C1 | Consensus: gamification leaderboard in endoscopy or laparoscopic simulation training effect on skill acquisition | 2026-11-10 | 10 |
| C2 | Consensus: automated simulator metrics feedback versus expert instructor feedback endoscopy colonoscopy simulation training | 2026-11-10 | 10 |
| C3 | Consensus: distributed versus massed practice endoscopy or laparoscopic simulation skill retention | 2026-11-10 | 9 |

Nota metodológica: search_articles devuelve solo PMIDs; el triaje por título/abstract se hizo con Consensus y luego se verificó cada PMID/DOI con get_article_metadata. Es una búsqueda orientadora, no exhaustiva.

## 2. Matriz
| Pregunta | Paper | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P24 | Jørgensen 2024 (PRIORITARIO) | 39586877 / 10.1007/s00464-024-11408-3 | PubMed | De 19 estudios que comparan distribuido vs masivo, 15 hallaron efecto positivo del distribuido y ninguno favoreció al masivo; de 13 que comparan esquemas distribuidos, 6 favorecieron alguno y 7 no hallaron diferencia | "Of the 19 studies which compared distributed and massed training, 15 found a positive effect of distributed training, and no studies found massed training to be superior." | MERSQI usado por los autores (valor global no consta en abstract) | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P24 | Spruit 2014 (PRIORITARIO) | 25318372 / 10.1007/s00464-014-3931-x | Consensus | Mejor desempeño del grupo espaciado al final, a las 2 semanas y al año; efecto mayor en tareas difíciles (sutura intracorpórea) | "One group received three 75-min training sessions on a single day (massed condition) and the other received one 75-min training session per week for three consecutive weeks (spaced condition)." | MERSQI estimado 11-12/18 (estimación; sin cifras de n en abstract) | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P24 | Tang 2023 (PRIORITARIO) | 37993677 / 10.1007/s00464-023-10522-y | PubMed | Tiempo a proficiencia 291 (DE 89) vs 299 (DE 89) min (p=0,81); en retención 94 (DE 53) vs 96 (DE 39) min (p=0,91) | "We found no difference whether practicing with shorter intervals or longer intervals between training sessions when examining time to proficiency or retention." | RoB 2 estimado: algunas preocupaciones (sin cegamiento de participantes/investigadores, declarado por los autores); poder 90% con diferencia mínima 90 min | Texto completo PMC | Métodos/Discusión (diseño del curso piloto) |
| P24 | Moulton 2006 | 16926566 / 10.1097/01.sla.0000234808.85789.6a | Consensus | Ambos grupos mejoraron de inmediato; el grupo distribuido fue significativamente mejor en la retención (tiempo, nº de movimientos de mano, puntaje global; todos p<0,05) y en la anastomosis en rata viva (todas las medidas de experto, p<0,05). | "Residents retain and transfer skills better if taught in a distributed manner." | MERSQI estimado 13-14/18; RoB 2: algunas preocupaciones (estimación) | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P22 | Vilmann 2018 (PRIORITARIO) | 30031803 / 10.1016/j.gie.2018.07.008 | Consensus | El grupo con feedback computarizado superó al control por 14,4 puntos (IC95% 1,2-27,6; p=0,033), practicó 25,8 min más (IC95% 11,6-39,9) y llegó al ciego 3,2 veces más durante la práctica | "The FG outperformed the CG in the final case, FG scoring 14.4 points (95% confidence interval [CI], 1.2-27.6) more than the CG; P = .033" | RoB 2 estimado: algunas preocupaciones (desequilibrio de sexo, ajustado) | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P23 | Vilmann 2018 (PRIORITARIO) | 30031803 / 10.1016/j.gie.2018.07.008 | Consensus | El grupo con feedback computarizado superó al control por 14,4 puntos (IC95% 1,2-27,6; p=0,033), practicó 25,8 min más (IC95% 11,6-39,9) y llegó al ciego 3,2 veces más durante la práctica | "The FG outperformed the CG in the final case, FG scoring 14.4 points (95% confidence interval [CI], 1.2-27.6) more than the CG; P = .033" | RoB 2 estimado: algunas preocupaciones (desequilibrio de sexo, ajustado) | Abstract (PubMed) | Discusión (feedback automatizado vs tutor) |
| P23 | Snyder 2010 | 20698383 / sin DOI en PubMed | Consensus | Retención (mediana 10) > línea base (5; p<0,0001) y sin diferencia con post-entrenamiento (10; p=0,19); sin diferencias entre modalidades independiente vs tutor | "colonoscopy skills are retained for several months, regardless of whether an independent or proctored approach is used" | MERSQI estimado 9-10/18; n=13, subanálisis, poder insuficiente | Abstract (PubMed) | Discusión (feedback automatizado vs tutor) |
| P24 | Snyder 2010 | 20698383 / sin DOI en PubMed | Consensus | Retención (mediana 10) > línea base (5; p<0,0001) y sin diferencia con post-entrenamiento (10; p=0,19); sin diferencias entre modalidades independiente vs tutor | "colonoscopy skills are retained for several months, regardless of whether an independent or proctored approach is used" | MERSQI estimado 9-10/18; n=13, subanálisis, poder insuficiente | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P23 | Su 2025 (PRIORITARIO) | 40494327 / 10.1159/000546827 | Consensus | Todos los grupos mejoraron en 12 sesiones y no cayeron a las 3 semanas (p>0,05) | "Tutor feedback is superior to VR guidance feedback and no feedback." | RoB 2 estimado: algunas preocupaciones (n=12 por brazo, efecto techo en SP del grupo tutor 18 ± 0) | Abstract (PubMed) | Discusión (feedback automatizado vs tutor) |
| P24 | Su 2025 (PRIORITARIO) | 40494327 / 10.1159/000546827 | Consensus | Todos los grupos mejoraron en 12 sesiones y no cayeron a las 3 semanas (p>0,05) | "Tutor feedback is superior to VR guidance feedback and no feedback." | RoB 2 estimado: algunas preocupaciones (n=12 por brazo, efecto techo en SP del grupo tutor 18 ± 0) | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P23 | Strandbygaard 2013 | 23295321 / 10.1097/SLA.0b013e31827eee6e | Consensus | Con feedback del instructor: menos tiempo (162 vs 342 min; p<0,005) y menos repeticiones (29 vs 65; p<0,005); el control logró mayor puntaje (57% vs 49%; p=0,004) | "The control group achieved a higher performance score than the intervention group (57% vs 49%; P = 0.004)." | RoB 2 estimado: bajo-algunas preocupaciones; MERSQI estimado 13-14/18 | Abstract (PubMed) | Discusión (feedback automatizado vs tutor) |
| P22 | El-Beheiry 2016 | 27572069 / 10.1007/s00464-016-5152-y | Consensus | Uso mediano 132 vs 89 min; 44% vs 4% siguió usando el simulador tras cumplir el curso (p=0,002); peg transfer más rápido (194 ± 66 vs 233 ± 53 s; p=0,03) | "The competition cohort overwhelmingly (76 %) stated that they were not motivated to deliberate practice by competition." | ROBINS-I estimado: serio (cohortes históricas, confusión por cohorte); MERSQI estimado 10/18 | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P22 | Vernier 2026 (PRIORITARIO) | 41936222 / 10.1016/j.jclinane.2026.112199 | Consensus | Sin diferencia en GRS (F(1,47)=2,3; p=0,14), pendiente de curva de aprendizaje (p=0,15), puntajes del simulador (p=0,51), errores (p=0,89) ni NASA-TLX ponderado (-3,5 vs -7,7; p=0,17) | "Gamification of an existing virtual reality simulator did not provide additional benefit compared to the original non-gamified simulator." | RoB 2 estimado: bajo-algunas preocupaciones; MERSQI estimado 14/18 | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P22 | Nøhr 2026 | 42715416 / 10.1097/SIH.0000000000000966 | Consensus | Barras de progreso: +1,5 puntos (p<0,002) | "Participants with gaming experience outperformed non-gamers overall (mean difference: 1.4 points; P < 0.002), particularly in early training." | RoB 2 estimado: algunas preocupaciones (n=24; resultados por subgrupo); MERSQI estimado 12/18 | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P24 | Nøhr 2026 | 42715416 / 10.1097/SIH.0000000000000966 | Consensus | Barras de progreso: +1,5 puntos (p<0,002) | "Participants with gaming experience outperformed non-gamers overall (mean difference: 1.4 points; P < 0.002), particularly in early training." | RoB 2 estimado: algunas preocupaciones (n=24; resultados por subgrupo); MERSQI estimado 12/18 | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |
| P22 | Karim 2025 | 40907430 / 10.1016/j.jss.2025.07.060 | PubMed | Solo 52% (25/48) usó el entrenador al menos una vez | "The 'Operation' trainer's automated negative-only feedback delivery mechanism discouraged laparoscopic skills practice among novices." | RoB 2 estimado: algunas preocupaciones (práctica voluntaria, 52% de uso); MERSQI estimado 11/18 | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P23 | Karim 2025 | 40907430 / 10.1016/j.jss.2025.07.060 | PubMed | Solo 52% (25/48) usó el entrenador al menos una vez | "The 'Operation' trainer's automated negative-only feedback delivery mechanism discouraged laparoscopic skills practice among novices." | RoB 2 estimado: algunas preocupaciones (práctica voluntaria, 52% de uso); MERSQI estimado 11/18 | Abstract (PubMed) | Discusión (feedback automatizado vs tutor) |
| P22 | Scaffidi 2019 | 30804029 / 10.1136/bmjopen-2018-024134 | Consensus | Protocolo: no informa efectos | "No studies have investigated the effects of a comprehensive gamification curriculum on the acquisition of endoscopic skills among novice endoscopists." | No aplica (protocolo) | Abstract (PubMed) | Discusión (modo práctica vs evaluación; riesgo de gamificación) |
| P24 | Scaffidi 2019 | 30804029 / 10.1136/bmjopen-2018-024134 | Consensus | Protocolo: no informa efectos | "No studies have investigated the effects of a comprehensive gamification curriculum on the acquisition of endoscopic skills among novice endoscopists." | No aplica (protocolo) | Abstract (PubMed) | Métodos/Discusión (diseño del curso piloto) |

## 3. Evidencia CONTRARIA / efectos adversos
- Vernier 2026 (41936222): simulador gamificado (leaderboards, hitos, feedback en tiempo real) sin diferencia en GRS (p=0,14), curvas (p=0,15) ni puntajes (p=0,51).
- Karim 2025 (40907430): feedback gamificado solo negativo desalentó la práctica; solo 52% usó el entrenador; sin asociación con mejora.
- El-Beheiry 2016 (27572069): ranking solo por velocidad; mejora la velocidad (la métrica premiada), 76% no se sintió motivado por la competencia; sin medidas de calidad ni transferencia -> riesgo de premiar velocidad.
- Nøhr 2026 (42715416) y Vilmann 2018 (30031803): la experiencia previa con videojuegos (+1,4 puntos, sobre todo al inicio) y el sexo (37,6 vs 19,7) se asocian al puntaje -> varianza irrelevante al constructo (riesgo de validez si los puntajes del simulador se usan para evaluar).
- Su 2025 (40494327): la guía automatizada VR no superó a no feedback (p=1,00); tutor superior (SP 18 vs 15,0; p=0,026).
- Strandbygaard 2013 (23295321): con feedback de instructor, menor puntaje (49% vs 57%; p=0,004) pese a menos tiempo.
- Tang 2023 (37993677): intervalo corto vs largo sin diferencia -> la ventaja de "más distribuido" no es universal.

## 4. Gaps
- No se encontró ECA con resultados de gamificación en endoscopia flexible (solo protocolo Scaffidi 2019; resultado no localizado). Consensus mostró simuladores con feedback automático en tiempo real (Mikoto: Olabintan 2025 iGIE, Vamadevan 2026 Surg Endosc, Yamaguchi 2026 J Gastroenterol Hepatol; LearnEndo, resumen Endoscopy 2025) NO verificados en PubMed/sin PMID -> no incluidos.
- Sin evidencia de feedback por IA/video en endoscopia flexible en esta búsqueda (lo más cercano: Su 2025, broncoscopia).
- Sin estudios de práctica distribuida vs masiva en endoscopia digestiva flexible; toda la evidencia es de laparoscopia, microcirugía u otras especialidades.
- Cribado de las 3 búsquedas principales limitado a los PMIDs listados (25-30 de 78-129).

## 5. Síntesis por pregunta
**P22 (gamificación).** Evidencia mixta, de bajo nivel y casi toda fuera de endoscopia digestiva. A favor: leaderboard de velocidad aumentó el uso voluntario (44% vs 4%) y la velocidad de peg transfer (194 vs 233 s; El-Beheiry, cohorte histórica); barras de progreso +1,5 puntos y +2,5 en retención a 2,5 meses en no-gamers (Nøhr, n=24). Nulo/adverso: sin beneficio (Vernier, n=60, p=0,14-0,89); feedback negativo gamificado desalentó práctica (Karim). Riesgos de validez: rankings por velocidad premian la métrica y no la calidad; la experiencia con videojuegos y el sexo introducen varianza irrelevante. Implicación: separar modo práctica (puede incluir feedback/juego) de modo evaluación (sin juego ni ranking por tiempo; métricas crudas).
**P23 (feedback automatizado vs tutor).** Computarizado en colonoscopia: +14,4 puntos (IC95% 1,2-27,6) vs sin feedback, con más tiempo de práctica (Vilmann, n=44). Tutor superior a la guía VR, y la guía VR no superó al control, en broncoscopia flexible (Su, n=36). Retención de colonoscopia VR a 4,5 meses similar con feedback automático solo vs con tutor (Snyder, n=13, poder bajo). Feedback de instructor reduce tiempo (162 vs 342 min) pero con menor puntaje (Strandbygaard, n=99). Conclusión: feedback automatizado simple parece útil como complemento; sin evidencia de IA/video en endoscopia en esta búsqueda.
**P24 (distribución, sesiones, retención).** Revisión sistemática de 28 estudios: 15/19 favorecen distribuido, ninguno el masivo; recomendación una sesión/día, máx. 2 h (Jørgensen). Spruit: 3 x 75 min semanales superó a masivo (proficiencia 65% vs 21%), con ventaja a 2 semanas y 1 año. Moulton: ventaja distribuida en retención a 1 mes y transferencia a rata viva. Tang: 1-2 vs 6-8 días sin diferencia (tiempo a proficiencia 291 vs 299 min; retención a 3-5 semanas 94 vs 96 min). Contraste con el piloto (6 sesiones de 45-60 min, retención 2-4 semanas): es un esquema distribuido dentro del rango respaldado (sesiones <2 h; retención comparable a Spruit/Tang/Su), pero la evidencia viene de laparoscopia/broncoscopia, no de endoscopia digestiva flexible, y la retención se mide mayormente como re-entrenamiento o en la misma tarea.


---

# Anexo — Matriz detallada Q7

# Matriz parcial Q7 — Transferencia al paciente y retención (EGD y colonoscopia)
Fecha de búsqueda: 2026-11-10 · Fuente: PubMed (conector MCP). Consensus no se usó.

## Cadenas de búsqueda (2026-11-10)
1. Base: (endoscopy OR colonoscopy OR gastroscopy OR esophagogastroduodenoscopy) AND (simulat* OR "virtual reality" OR "training model") AND (transfer OR "real patients" OR "clinical performance" OR "patient outcomes" OR retention) AND (randomized OR controlled OR "systematic review") — 343 resultados (solo se obtuvieron los 40 primeros por PMID).
2. simulation training colonoscopy OR endoscopy randomized controlled trial transfer to clinical performance real patients (hasta 2025) — 211 (traducción automática ruidosa).
3. (endoscopy OR colonoscopy) AND simulator AND (retention OR "skill retention" OR "follow-up") AND training — 246 (ruidosa).
4. Dirigida por [Title]: (colonoscopy/endoscopy/gastroscopy/endoscopic)[Title] AND (simulator/simulation/"virtual reality")[Title] AND (randomized/transfer/"systematic review"/meta-analysis/retention)[Title] — 60 resultados; 40 PMID devueltos.
5. (low-cost OR "box trainer" OR "physical model" OR "ex vivo" OR porcine OR "bench model") AND (colonoscopy OR endoscopy OR gastroscopy) AND (training OR simulator) AND (randomized OR "real patients" OR transfer) AND (retention OR clinical) — 293 (ruidosa; no cribada en profundidad).
6. Walsh + Cochrane/meta-analysis + endoscopy simulation patient — 72 (ruidosa).
7. Boza simulation endoscopy OR colonoscopy OR gastroscopy Pontificia Universidad Católica training transfer — 59.936 (inservible: la consulta se interpretó mal).
8. [Title] + Publication Type = RCT (endoscopy/colonoscopy/... AND model/simulator/simulation/training AND patients/"clinical performance"/retention/transfer/"learning curve") — 13 resultados.
Limitaciones: las consultas en lenguaje natural se tradujeron mal y el cribado fue parcial (se revisaron metadatos de ~23 de los PMID devueltos). Haycock 2010, Sedlack 2004, la Cochrane 2012/2018 por PMID propio y otros ECA clásicos no se localizaron en esta pasada: NO se citan. La Cochrane 2025 (40919710) es la actualización de 2012/2018; Khan 2019 (31071757) es la versión Endoscopy de la Cochrane 2018 según su abstract.

## Papers incluidos (verificados en PubMed; texto fuente en texto/<PMID>.txt)
| Pregunta | Paper | PMID/DOI | Fuente | Qué responde | Frase textual | Calidad | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P25 | Sabrie 2025 Cochrane (20 ECA, solo VR) | 40919710 / 10.1002/14651858.CD008237.pub4 | PubMed | VR > no entrenar en independencia; incierto vs entrenamiento en pacientes | "VR training likely provides participants with a benefit, as measured by independent procedure completion (RR 1.62, 95% CI 1.15 to 2.26; 6 trials, 815 procedures; moderate-certainty evidence)." | GRADE moderada a muy baja; 4/20 con bajo riesgo de sesgo | texto/40919710.txt | Discusión (límites de la evidencia) |
| P25 | Khan 2019 | 31071757 / 10.1055/a-0894-4400 | PubMed | Igual, versión previa (18 ECA) | "There is insufficient evidence that simulation training provides benefit over conventional training." | GRADE baja-moderada | texto/31071757.txt | Antecedentes |
| P25 | Singh 2014 RS+MA | 24509241 / 10.1016/j.cgh.2014.01.037 | PubMed | Conducta clínica ES 0,49; tiempo clínico ES 0,75; pacientes ES 0,45 | "process behaviors in clinical practice (ES, 0.49; n = 8)" | Alta | texto/24509241.txt | Antecedentes |
| P25 | Dawe 2014 RS transferencia | 24100339 / 10.1097/SLA.0000000000000245 | PubMed | 10 estudios de endoscopia; sigmoidoscopia mejor con pacientes que con simulación sola | "Not all parameters measured were improved." | Moderada | texto/24100339.txt | Antecedentes |
| P25 | Qiao 2014 RS | 24586609 / 10.1371/journal.pone.0089224 | PubMed | Gastroscopia RR 1,25; colonoscopia RR 1,10 (IC95% 0,88-1,37) | "Virtual endoscopy simulator training might be effective for gastroscopy, but so far no data is available to support this for colonoscopy." | Moderada | texto/24586609.txt | Antecedentes |
| P25 | Cohen 2006 ECA multicéntrico | 16923483 / 10.1016/j.gie.2005.11.062 | PubMed | Ventaja en primeros 80-100 casos; 160 casos a 90% de competencia en ambos | "The median number of cases needed to reach 90% competency was 160 in both groups." | RoB 2 algunas preocupaciones | texto/16923483.txt | Discusión (acortamiento) |
| P25 | Ferlitsch 2010 ECA EGD | 20972956 / 10.1055/s-0030-1255818 | PubMed | Tiempo a duodeno 239 vs 310 s en primeras 10 EGD; efecto clínico limitado | "It helps reduce the time needed to reach technical competency, but clinically the effect is limited." | RoB 2 algunas preocupaciones | texto/20972956.txt | Discusión (EGD) |
| P25 | Grover 2015 ECA | 26007221 / 10.1016/j.gie.2015.04.008 | PubMed | Currículo estructurado > autorregulado en 2 colonoscopias clínicas | "The SCC group performed superiorly during their first and second clinical colonoscopies." | RoB 2 algunas preocupaciones | texto/26007221.txt | Antecedentes |
| P25 | Grover 2017 ECA | 28366440 / 10.1016/j.gie.2017.03.1529 | PubMed | Currículo progresivo > estructurado en 2 colonoscopias clínicas | "The PLC group outperformed the SCC group during first and second clinical colonoscopies, measured by JAG DOPS (P < .001)." | RoB 2 algunas preocupaciones | texto/28366440.txt | Antecedentes |
| P25 | Siau 2020 SPRINT | 32218889 / 10.4253/wjge.v12.i3.98 | PubMed | Seguimiento 16 meses: sin diferencia en intubación D2; certificación más temprana | ver ficha | Casos y controles, piloto | texto/32218889.txt | Discusión |
| P25 | Cassidy 2022 ECA | 35146554 / 10.1007/s00464-021-08958-1 | PubMed | VR a porcino vivo (GAGES colon 10,4 a 16,4); sin control no entrenado | "A VR endoscopy curriculum translates to improved performance in upper and lower endoscopy in a live animal model." | RoB 2 algunas preocupaciones | texto/35146554.txt | Antecedentes |
| P26 | Mascagni 2022 (BEST vs VR) | 35258487 / 10.1097/XCS.0000000000000157 | PubMed | Caja de bajo costo equivalente a VR en FES y ex vivo a 1-2 semanas; no paciente | "Low-cost BTs like the BEST box compare well with high-tech VRSs and could help democratize endoscopy training." | RoB 2 bajo-algunas preocupaciones | texto/35258487.txt | Posicionamiento |
| P26/P27 | Riek 2017 dispositivo de punta | 28593418 / 10.1007/s00464-017-5617-7 | PubMed | Pre-post; generalización a superficies nuevas; sin paciente | "these improvements also generalized to novel training surfaces (P's < 0.01)" | Baja-moderada | texto/28593418.txt | Antecedentes (transferencia cercana) |
| P26 | Kulcheski 2026 (endoscopia espinal, USD 90) | 41810654 / 10.1590/0100-6991e-20260022-en | PubMed + PMC | ECA de transferencia a cirugía real con simulador sintético de bajo costo (no GI) | "The total cost for the simulator was US$90.0010." | RoB 2 algunas preocupaciones | texto/41810654.txt | Discusión (analogía) |
| P27 | Snyder 2010 | 20698383 / DOI no informado por PubMed | PubMed | Retención VR a 4,5 meses (n=13, mismo simulador) | "Error avoidance skills may not be retained as well as speed and efficiency skills." | Baja-moderada | texto/20698383.txt | Discusión |
| P27 | De Win 2013 | 23618450 / 10.1016/j.jsurg.2013.01.005 | PubMed | Retención 1 y 6 meses, tarea nueva (piel de pollo); laparoscopia | "After 6 months only a statistical difference (p = 0.04) between group OD and group TD was observed." | RoB 2 algunas preocupaciones | texto/23618450.txt | Metodología |
| P25/P27 | Varas 2012 (grupo UC) | 22733192 / 10.1007/s00464-012-2391-4 | PubMed | Transferencia laparoscópica a porcino vivo; no endoscopia flexible | ver ficha | Baja-moderada | texto/22733192.txt | Antecedentes UC |

## Evidencia CONTRARIA o limitante
- Cochrane 2025 (40919710): VR vs entrenamiento en pacientes puede dar menos finalizaciones independientes (RR 0,45; IC95% 0,27-0,74; certeza baja); puntaje compuesto vs no entrenar sin diferencia clara (MD 3,10; IC95% -0,16 a 6,36; 1 ensayo, 24 procedimientos).
- Qiao 2014 (24586609): sin beneficio demostrado en colonoscopia (RR 1,10; IC95% 0,88-1,37; I2=85%).
- Cohen 2006 (16923483): mediana de casos a 90% de competencia igual (160) en ambos grupos.
- Ferlitsch 2010 (20972956): efecto clínico limitado; a las 60 EGD sin diferencia técnica.
- Dawe 2014 (24100339): en sigmoidoscopia fue más efectivo el entrenamiento en pacientes que la simulación aislada.
- Siau 2020 (32218889): sin diferencia en intubación D2 sin asistencia ni en discomfort a largo plazo.

## Gaps
1. No se halló ECA de transferencia a paciente real con simulador FÍSICO de bajo costo en EGD/colonoscopia; la evidencia en pacientes es casi toda VR. Mascagni 2022 mide FES y ex vivo; Kulcheski 2026 es espinal.
2. Sin estudio de retención >= 2 semanas en endoscopia digestiva en pacientes; el único dato (Snyder 2010) es en el mismo simulador VR (4,5 meses, n=13).
3. No se halló en PubMed (esta pasada) versión endoscópica del grupo UC/Boza; solo Varas 2012 laparoscópico. No verificable: no se afirma que no exista.
4. Cribado parcial de las cadenas 1-3 y 5; pueden existir ECA no capturados (p. ej., simuladores físicos/ex vivo antiguos). No se citan referencias no verificadas.
5. Texto completo leído solo para 41810654 (PMC). 35146554 y 24586609 tienen PMC pero no se leyeron; el resto, solo abstract.

## Síntesis por pregunta
- P25: Las revisiones coinciden en que simular mejora el desempeño temprano real frente a no entrenar (Cochrane 2025: independencia RR 1,62; Singh 2014: conducta clínica ES 0,49, tiempo ES 0,75, pacientes ES 0,45). Los ECA muestran ventaja en los primeros 10-100 casos (Ferlitsch: 239 vs 310 s; Cohen: primeros 80-100 casos), pero la curva converge (90% de competencia a los 160 casos en ambos grupos). Frente a entrenamiento en pacientes no hay evidencia de reemplazo.
- P26: La caja de bajo costo solo se comparó con VR en desenlace intermedio (Mascagni: FES +25,16 vs +25,58 puntos; p=0,89). La transferencia a cirugía real con simulador sintético de USD 90 es espinal (Kulcheski). Transferencia al paciente con simulador físico de bajo costo en EGD/colonoscopia: no demostrada en lo hallado.
- P27: Retención: un único estudio en colonoscopia VR (Snyder: mediana 10 vs 10 a 4,5 meses, n=13, mismo simulador). Transferencia cercana usada: Riek 2017 (superficies nuevas con colonoscopio real), De Win 2013 (sutura en piel de pollo a 1 y 6 meses, laparoscopia), Cassidy 2022 (animal vivo).

## Estudios de transferencia
| Estudio | Simulador | Diseño | n | Desenlace real | Resultado | Razón de acortamiento |
|---|---|---|---|---|---|---|
| Cohen 2006 | VR GI Mentor, 10 h | ECA multicéntrico | 45 | Competencia en 200 colonoscopias reales | Mejor en primeros 80-100 casos | Mediana 160 casos a 90% en ambos grupos (razón 1) |
| Ferlitsch 2010 | VR (EGD) | ECA | 28 (14 hasta 60 EGD) | Tiempo a duodeno, técnica | 239 vs 310 s en las primeras 10 | No calculada; diferencia técnica desaparece a las 60 |
| Grover 2015 | VR + currículo | ECA | 33 | JAG DOPS en 2 colonoscopias | Currículo > autorregulado | No calculada |
| Grover 2017 | VR progresivo | ECA | 37 | JAG DOPS en 2 colonoscopias | PLC > SCC (P<0,001) | No calculada |
| Siau 2020 | Inducción con simulación | Casos y controles | 15 vs 24 | Intubación D2, certificación a 16 meses | Certificación 75% vs 36% | No calculada como razón |
| Cassidy 2022 | VR (FES) | ECA 2 currículos | 22 | GAGES en animal vivo | Colon 10,4 a 16,4 | No aplica |
| Kulcheski 2026 | Sintético USD 90 | ECA | 40 | Endoscopia espinal real supervisada | Tiempo -43,7%; GOALS 23 vs 8 | No aplica (no GI) |
| Varas 2012 | Banco laparoscópico | Cuasi-experimental | 25 vs 11 | Yeyunoyeyunostomía porcina | OSATS 21 vs 8 | No aplica |
Razón de acortamiento: solo Cohen 2006 permite inferirla (160 vs 160 casos); en el resto no es verificable.


---

# Anexo — Matriz detallada Q8

# Matriz parcial Q8 — Standard setting, tamaño muestral, confiabilidad y marcos de validez (P28–P31)
Fecha de búsqueda: 2026-11-10. Fuentes: PubMed (conector MCP; PMID/DOI verificados con get_article_metadata) y Consensus (solo descubrimiento; todo lo incluido se verificó luego en PubMed). Lectura: solo abstract, salvo 29556423 (texto completo PMC5845294). get_full_text_article se intentó solo en 29556423; los demás prioritarios con PMC (29450000, 41466255, 35692913) no se leyeron a texto completo. Texto fuente de verificación en `05_papers/texto/<PMID>.txt`.

## 1. Queries usadas
| # | Cadena | Resultados |
|---|---|---|
| 1 | ("standard setting" OR "cut score" OR "passing score" OR "contrasting groups" OR "borderline group" OR Angoff) AND (procedural OR "technical skills" OR simulation OR OSCE OR endoscopy) | 1631 (solo 25 IDs, sin títulos; no triable) |
| 2 | Idem con ("standard setting"/"cut score"/"passing score"/"contrasting groups"/"borderline group") AND ("technical skills" OR simulation OR endoscopy) AND (review OR guide OR method) | 245 (20 IDs recientes; sin títulos; no triable) |
| 3 | ("sample size" OR power) AND "construct validity" AND (simulator OR simulation) | 36 (20 IDs; sin títulos; no triable; se triaron por Consensus) |
| 4 | ("intraclass correlation" OR "generalizability theory" OR "G-study") AND ("technical skills" OR "global rating" OR OSATS OR endoscopy) AND (raters OR assessors) | 264 (20 IDs recientes; no triable) |
| 5 | (Messick OR Kane) AND validity AND (simulation OR "health professions education") | 199 (20 IDs recientes; no triable) |
| 6 | (endoscopy OR colonoscopy OR gastroscopy) AND simulator AND ("pass/fail" OR "passing score" OR "cut-off" OR "contrasting groups" OR "proficiency level" OR benchmark) AND validity (relevancia) | 119 (15 IDs listados) |
| 7-14 | Búsquedas por título/autor para verificar PMID de: Cook 2016, Cook 2015, Cheng 2016, Jørgensen 2018, Yudkowsky 2015, Bloch & Norman 2012, Pietersen 2021, Sridharan 2025, Vassiliou 2013, Nielsen 2022, Jaensch 2023, Van Nortwick 2010, Borgersen 2018, Koo & Li 2016, Sun 2026 | 1-3 c/u (Van Nortwick solo apareció con filtro de año 2010) |
| C1 | Consensus: standard setting methods pass/fail cut-off technical skills simulation contrasting groups borderline Angoff | 10 |
| C2 | Consensus: sample size justification construct validity studies surgical simulators novices experts systematic review | 12 |
| C3 | Consensus: endoscopy simulator pass/fail standard setting contrasting groups proficiency criteria validity evidence | 10 |

Nota: la búsqueda PubMed por cadenas amplias devuelve IDs sin títulos y ordenados por fecha; no son triables. Por eso los candidatos salieron de Consensus y de búsquedas por título, siempre verificados en PubMed.

## 2. Matriz
| Pregunta | Paper (autor, año) | PMID / DOI | Fuente | Qué responde | Frase textual | Calidad | Verificado en | Sección destino |
|---|---|---|---|---|---|---|---|---|
| P28 | Jørgensen 2018 (prioritario) | 29556423 / 10.1186/s41077-018-0064-7 | PubMed | Contrasting groups: corte = intersección de dos curvas normales; reportar FP/FN teóricos además de observados; borderline pide n grande | "In such cases, borderline-based methods are more feasible, but this method often requires big sample sizes before ‘enough’ trainees are judged as borderline." | Moderada-alta | Texto completo PMC | Métodos (estándar), Discusión |
| P28 | Pietersen 2021 (prioritario) | 34520423 / 10.1097/SLA.0000000000005209 | PubMed | 162 estudios de standard setting en simulación quirúrgica; 40% usa media/mediana de experimentados | "Most studies described how the standard setting was determined (N = 147, 91%) and most used the mean or median performance score of experienced surgeons (n = 65, 40%) for standard setting." | Alta | Abstract | Introducción, Discusión |
| P28 | Vassiliou 2013 (prioritario) | 24253562 / 10.1007/s00464-013-3298-4 | PubMed | FES: corte por contrasting groups + ROC, sens 0.81 / 1-esp 0.21, n=160 | "Passing scores were determined by a contrasting groups methodology and use of receiver operating characteristic curves." | Alta | Abstract | Métodos, Discusión |
| P28 | Yudkowsky 2015 | 26375263 / 10.1097/ACM.0000000000000887 | PubMed | En mastery learning redefinir el borderline; conjuntivos de seguridad | "Patient safety considerations support conjunctive standards for key knowledge and skill subdomains and for items that have an impact on clinical outcomes." | Alta | Abstract | Métodos (estándar B) |
| P28 | Sridharan 2025 | 41466255 / 10.1186/s12909-025-08300-6 | PubMed | Angoff es una familia de métodos; resultados dependen de la variante | "Therefore, selecting a specific Angoff variant must be a conscious decision aligned with the assessment's purpose and context." | Moderada | Abstract | Discusión (por qué no Angoff) |
| P28 | Nielsen 2022 | 35692913 / 10.1055/a-1814-9747 | PubMed | EGD en simulador, contrasting groups, corte todo-o-nada | "A pass/fail standard was established requiring identification of all landmarks and performance of the TSP in < 5 minutes." | Moderada | Abstract | Discusión (comparación) |
| P28, P29 | Jaensch 2023 | 37563741 / 10.1186/s41077-023-00260-5 | PubMed | Colonoscopia GI Mentor: n=8/8/8, cálculo de potencia, corte 17.1; experto vs intermedio no significativo | "Although expert endoscopists had a higher score, the difference was not statistically significant (p=0.40)." (ficha existente) | Moderada | Abstract | Métodos / Discusión |
| P28, P30 | Sun 2026 | 41963810 / 10.1186/s12871-026-03809-9 | PubMed | Broncoscopia flexible: Messick + G-theory (6 casos >0.7; 10 casos >0.8) + contrasting groups (34.4%) | "Generalizability theory analyses found that six cases were required for formative assessment (reliability > 0.7) and 10 cases were required for summative assessment (reliability > 0.8)." | Moderada | Abstract | Métodos (ensayos por sujeto) |
| P29 | Van Nortwick 2010 (prioritario) | 20015529 / 10.1016/j.surg.2009.10.068 | PubMed | Estudio típico: unicéntrico, media de 37 sujetos, 45% reporta confiabilidad | "Most studies (82%) were conducted in a single institution with a mean of 37 subjects recruited." | Moderada (antigua) | Abstract | Métodos (n), Discusión |
| P29, P31 | Borgersen 2018 | 29303808 / 10.1097/SLA.0000000000002652 | PubMed | 498 estudios/18,312 participantes; solo 6.6% usa Messick | "Only 6.6% of the studies used the recommended contemporary validity framework (Messick)." | Alta | Abstract | Introducción |
| P30 | Koo & Li 2016 | 27330520 / 10.1016/j.jcm.2016.02.012 | PubMed | Elegir y reportar la forma del ICC; umbrales por IC 95% | "Based on the 95% confident interval of the ICC estimate, values less than 0.5, between 0.5 and 0.75, between 0.75 and 0.9, and greater than 0.90 are indicative of poor, moderate, good, and excellent reliability, respectively." | Alta (práctica) | Abstract | Métodos (análisis) |
| P30 | Bloch & Norman 2012 | 23140303 / 10.3109/0142159X.2012.703791 | PubMed | G-theory y D-study para planear evaluadores/ensayos | "In G theory, various sources of error contributing to the inaccuracy of measurement are explored." | Alta | Abstract | Métodos (plan de confiabilidad) |
| P30 | Vassiliou 2013 | 24253562 | PubMed | Test-retest ICC 0.85 en n=11 | "Test-retest reliability was assessed in 11 participants, and the intraclass correlation was 0.85." | Alta | Abstract | Métodos |
| P31 | Cook & Hatala 2016 (prioritario) | 29450000 / 10.1186/s41077-016-0033-y | PubMed | Messick y Kane; ocho pasos de validación | "A framework proposed by Messick identifies potential evidence sources: content, response process, internal structure, relationships with other variables, and consequences." | Alta | Abstract | Métodos (marco), Discusión |
| P31 | Cook 2015 | 25989405 / 10.1111/medu.12678 | PubMed | Kane: cuatro inferencias; implicaciones = la más importante | "The Implications and associated decisions are the most important inferences in the validity argument." | Alta | Abstract | Métodos |
| P31 | Cheng 2016 (prioritario) | 27465839 / 10.1097/SIH.0000000000000150 | PubMed | Extensiones simulación de CONSORT (11) y STROBE (10) | "We have developed extensions for the CONSORT and STROBE Statements that can help improve the quality of reporting for SBR." | Alta | Abstract | Métodos (reporte) |

Duplicado: Cheng 2016 existe también como PMID 29449994 (Adv Simul, PMC5806464, DOI 10.1186/s41077-016-0025-y); citar una sola versión.

## 3. Evidencia contraria / limitaciones
- Contrasting groups depende de grupos bien separados y con n suficiente; con n pequeño los FP/FN observados son inestables (Jørgensen 2018: FP observado 9.1% vs teórico 2.7%; FN 0.0% vs 6.4% en un estudio de colonoscopia).
- Corte demasiado estricto: Nielsen 2022 EGD, ningún intermedio aprobó; Jaensch 2023, 3 expertos y 3 intermedios reprobaron y 1 novato aprobó; la diferencia experto vs intermedio no fue significativa (p=0.40), con n=8 por grupo.
- Pietersen 2021: considerable heterogeneidad y evidencia baja-moderada en standard setting de simulación; "experto" se define de forma inconsistente.
- Angoff: resultados dependientes de la variante (Sridharan 2025); además requiere jueces e ítems; poco aplicable a métricas crudas continuas.
- Van Nortwick 2010 y Borgersen 2018: la práctica dominante es unicéntrica, n pequeño, sin justificar n y sin marco moderno.

## 4. Gaps
- No se encontró (y no se verificó) ningún método formal de cálculo de tamaño muestral específico para estudios de validación de constructo con simuladores; la evidencia es descriptiva (rangos de n), no prescriptiva. Cálculo muestral propio debe hacerse con stats-agent (p. ej., contraste Kruskal/Mann-Whitney para tamaño de efecto esperado; ICC con intervalo de precisión).
- No se verificó cuántos evaluadores/ensayos requiere GAGES/OSATS en endoscopia (solo Sun 2026 en broncoscopia: 6-10 casos). Falta una G-study con evaluadores humanos en endoscopia.
- Hofstee y borderline regression: solo hay candidatos por Consensus sin PMID verificado en PubMed (Dwyer 2016 BMC Med Educ, Tappan 2025 Clin Teach, Allahyari 2026 J Vet Med Educ, Vamadevan 2026 Surg Endosc con contrasting groups y Mikoto). No se incluyeron en fichas.
- Montbrun (OSATS, contrasting groups vs borderline) y Goldenberg (revisión de estándares absolutos) se citan dentro de Jørgensen 2018 pero no se buscaron ni verificaron en PubMed.
- [no PubMed, sin PMID] Standards for Educational and Psychological Testing (AERA/APA/NCME): no es artículo indexado; su uso como base de validación se verifica en Jaensch 2023 (PMID 37563741: "The validation process was conducted based on the Standards for Educational and Psychological Testing"). Libros de Downing/Yudkowsky: no se incluyen; no hay PMID.
- GRRAS (reporte de estudios de confiabilidad/acuerdo, Kottner 2011): el artículo original no se verificó; solo apareció Gerke 2018 (PMID 30249982) que lo discute, no incluido.
- No se localizaron extensiones de reporte de simulación específicas para estudios de validación (más allá de CONSORT/STROBE-SBR).

## 5. Síntesis por pregunta
- **P28.** Métodos: grupos contrastantes (participante-céntrico; intersección de distribuciones; FP/FN), borderline group/regresión (requieren muchos participantes borderline), Angoff (jueces sobre ítems; familia de variantes) y ROC (sensibilidad/especificidad). En simulación quirúrgica el más frecuente es usar media/mediana de experimentados (65/162 = 40%; Pietersen 2021). En endoscopia flexible el precedente directo es FES (n=160; contrasting groups + ROC; sens 0.81, 1-esp 0.21; Vassiliou 2013); en EGD y colonoscopia simuladas se usó contrasting groups con n de 35 y 24 (Nielsen 2022; Jaensch 2023). Para un estándar de logro tras curso (estudio B) conviene un estándar de dominio con criterios conjuntivos de seguridad (Yudkowsky 2015).
- **P29.** El estudio típico de validación en simulación quirúrgica tiene una media de 37 sujetos y es unicéntrico (Van Nortwick 2010: 83 estudios; Borgersen 2018: 18,312/498 aprox. 37 por estudio, cálculo propio). En endoscopia flexible simulada: 24 (8/8/8; Jaensch 2023), 35 (15/10/10; Nielsen 2022), 30 (15/15; Sun 2026, broncoscopia) hasta 160 (FES). Solo Jaensch menciona "A power calculation was performed" (abstract); no hay fórmula verificada. Con n pequeño reportar FP/FN teóricos y observados (Jørgensen 2018).
- **P30.** Reportar forma completa del ICC (modelo, tipo, definición) con IC 95% y umbrales 0.5/0.75/0.9 (Koo & Li 2016); G-theory para separar varianza de sujeto, evaluador y ensayo y hacer D-study (Bloch & Norman 2012). Ejemplo de cifras: 6 casos para fiabilidad >0.7 y 10 casos para >0.8 (Sun 2026); test-retest ICC 0.85 con n=11 (Vassiliou 2013). Faltan cifras de nº de evaluadores en endoscopia.
- **P31.** Marco de elección: Messick (5 fuentes) y Kane (4 inferencias); ocho pasos de Cook & Hatala 2016; Kane: implicaciones es la inferencia más importante (Cook 2015). Solo 6.6% de 498 estudios quirúrgicos usó Messick (Borgersen 2018). Reporte: CONSORT/STROBE con extensiones de simulación (Cheng 2016: 11 y 10 ítems); AERA/APA/NCME [no PubMed, sin PMID] citado vía Jaensch 2023.

## 6. Decisiones del proyecto
| Decisión del proyecto | Método recomendado | Fuente |
|---|---|---|
| Cómo fijar el corte de competencia (estudio A) | Contrasting groups sobre métricas crudas, con ROC/Youden como análisis de sensibilidad; reportar FP/FN observados y teóricos | Jørgensen 2018 (29556423); Vassiliou 2013 (24253562) |
| Estándar de logro tras el curso (estudio B) | Estándar de dominio con criterios conjuntivos de seguridad (no solo promedio) y grupo de referencia definido por quienes pasan al siguiente nivel | Yudkowsky 2015 (26375263) |
| Por qué no usar solo media de experimentados | Es lo más frecuente (40%) pero heterogéneo y de evidencia baja-moderada: declarar definición de experto (≥200 procedimientos) y método | Pietersen 2021 (34520423) |
| Angoff / borderline | Solo para ítems de escala global (GAGES/OSATS) si se requiere; borderline exige n grande | Sridharan 2025 (41466255); Jørgensen 2018 |
| Tamaño muestral | Referencia: mediana de práctica ~24-37 por estudio; justificar con cálculo propio (stats-agent) y reconocer limitación; no hay fórmula validada en la literatura recuperada | Van Nortwick 2010 (20015529); Jaensch 2023 (37563741) |
| ICC del criterio externo (GAGES) | Declarar forma de ICC, IC 95% y umbrales; G-study/D-study para decidir nº de evaluadores y de ensayos | Koo & Li 2016 (27330520); Bloch & Norman 2012 (23140303); Sun 2026 (41963810) |
| Marco de validez | Messick (5 fuentes) con argumento Kane (implicaciones para el corte); ocho pasos | Cook & Hatala 2016 (29450000); Cook 2015 (25989405) |
| Guía de reporte | STROBE (estudio A) / CONSORT o STROBE (estudio B) con extensiones de simulación | Cheng 2016 (27465839) |


---

# Anexo — Verificación de fuentes del documento integral (E1–E8)

# Matriz parcial E — fuentes E1–E8 + Ward 2016 (verificadas en PubMed, ver fichas en 05_papers/fichas/)

## Tabla 1. Pregunta | Paper | PMID/DOI | Qué responde | Frase textual | Calidad | Verificado en

| Pregunta | Paper | PMID / DOI | Qué responde | Frase textual | Calidad | Verificado en |
|---|---|---|---|---|---|---|
| P14 (parcial), P1/P3 | Antonelli 2024 (E1) ESGE/ESGENA | 38040025 / 10.1055/a-2205-2613 | Recomienda evaluación multimodal con umbrales de procedimientos y KPIs; sin cifra en el abstract | "ESGE and ESGENA recommend incorporating a multimodal approach to evaluating competence in basic GI endoscopic procedures, including procedural thresholds and the measurement and documentation of established ESGE KPIs." | Consenso (Oxford 5) | PubMed abstract |
| P7, P11, P14 | Riek 2017 (E2) | 28593418 / 10.1007/s00464-017-5617-7 | Dispositivo de control de punta de colonoscopio: tiempo y variabilidad discriminan expertos (media 7173 colonoscopias) de novatos (estudiantes de medicina) y mejoran con 6 sesiones | "In the second study, another group of novices were subjected to a brief training program comprising six 45 min sessions" | Oxford 4; validación preliminar, n pequeño | PMC5715030 texto completo |
| P4, P3, P15, P14 | Siau 2020 (E3) DOPS gastroscopia | 30911922 / 10.1007/s00464-019-06737-7 | Validez/confiabilidad del DOPS; competencia técnica 150-174 y global 225-249 procedimientos (puntaje >= 3,9) | "In total, 10086 DOPS were submitted for 987 trainees." | Oxford 3; muestra nacional grande | PMC6946748 texto completo |
| P16, P14 | Ward 2014 (E4) JETS colonoscopia | 24470280 / 10.1136/gutjnl-2013-305973 | CIR 90 % a 233 procedimientos (media móvil); 41 % competente a 200 (LC-CUSUM) | "By LC-Cusum analysis, 41% of trainees were competent after 200 procedures." | Oxford 3; cohorte de registro | PubMed abstract |
| P16, P3, P14 | Sedlack & Coyle (E5) ACE | 26077455 / 10.1016/j.gie.2015.04.041 | Umbrales ACE >= 3,5, CIR 90 %, < 15 min; competencia media a 250 procedimientos | "On average, it takes 250 procedures to achieve competence in colonoscopy." | Oxford 3; multicéntrico, solo fellows GI EE. UU. | PubMed abstract |
| P15, P16, P14 | Wang 2025 (E6) cirujanos | 40850838 / 10.3760/cma.j.cn441530-20240831-00299 | Cirujanos: mediana 624 gastroscopias y 470 colonoscopias (CUSUM); 31 semanas | "The median time required for proficiency in gastroscopy was 31 weeks, with a median number of cases of 624." | Oxford 4; n = 6, retrospectivo, 1 centro | PubMed abstract |
| P7, P11, P12/P13, P14, P15 | Siau 2020 (E7) SPRINT / EndoSim | 32218889 / 10.4253/wjge.v12.i3.98 | Simulador VR: 64 % de métricas discriminan aprendices de expertos; novato < 25, intermedio >= 25, experto > 1000; certificación 75 % vs 36 % | "Of the 22 metrics relevant to the five modules, 5 (23%) were significantly different between novice and intermediate trainees and 14 (64%) between trainees and experts." | Oxford 3; piloto no aleatorizado, 15 casos | PMC7085944 texto completo |
| P10, P3 | Grover 2015 (E8) | 26007221 / 10.1016/j.gie.2015.04.008 | ECA: currículo estructurado con simulación VR mejora transferencia clínica en colonoscopia vs práctica autorregulada | "The SCC group performed superiorly during their first and second clinical colonoscopies." | Oxford 2; RoB 2 algunas preocupaciones, n = 33 | PubMed abstract (sin PMC) |
| P15, P14 | Ward 2016/2017 EDA | 26976733 / 10.1136/gutjnl-2015-310443 | 187 EDA para 95 % de finalización a D2 (media móvil); > 90 % a 200 por LC-CUSUM | "By moving average method, trainees attained a 95% completion rate at 187 procedures." | Oxford 3; 1255 aprendices, 243 555 EDA | PubMed abstract |

## Tabla 2. Verificación de cifras del documento integral

| Afirmación del doc | Fuente | Estado | Dato literal (PubMed) |
|---|---|---|---|
| Endoscopy 2024;56:131-150 | E1 | ✅ | "56(2):131-150", epub 2023-12-01 |
| Umbrales numéricos de procedimientos atribuidos a E1 | E1 | ❓ | El abstract no da cifras; requiere texto completo |
| 13 expertos y 16 novatos | E2 | ✅ | "13 experienced colonoscopists and 16 novices" |
| 16 novatos entrenados | E2 | ✅ | "another 16 novices were tested before and after a six-session training program" |
| 6 sesiones de 45 min | E2 | ✅ | "six 45 min sessions" (texto completo; abstract solo dice six-session) |
| (Matiz) novatos = estudiantes de medicina 1.º-2.º año | E2 | ⚠️ | "The novices were medical students in either their first or second year of study" |
| 10.086 DOPS | E3 | ✅ | "10086 DOPS were submitted for 987 trainees" |
| 987 alumnos | E3 | ✅ | idem |
| 275 centros | E3 | ✅ | "multicentre (N = 275)" |
| Competencia técnica a 150-174 | E3 | ✅ | "'technical' (150–174 procedures)" |
| Competencia global a 225-249 | E3 | ✅ | abstract "global competency (225–249 procedures)"; ⚠️ texto completo dice "225–250" |
| PMID 30911922 | E3 | ✅ | PMID 30911922, DOI 10.1007/s00464-019-06737-7, Surg Endosc 34(1):105-114 |
| 297 alumnos, 36.730 colonoscopias | E4 | ✅ | "297 trainees undertook 36 730 colonoscopies" |
| 90 % intubación cecal a 233 procedimientos | E4 | ✅ | "reached a CIR of 90% at 233 procedures" (media móvil) |
| 41 % competente a 200 por LC-CUSUM | E4 | ✅ | "41% of trainees were competent after 200 procedures" |
| PMID 26077455; Gastrointest Endosc 2016;83:516-523 | E5 | ✅ | 83(3):516-23.e1; epub 2015-06-13 (nota del doc correcta) |
| Cifras de ACE | E5 | ❓ (el brief no las da) | 250 procedimientos medios, > 90 % a 300; ACE >= 3,5; CIR 90 %; < 15 min |
| Seis cirujanos | E6 | ✅ | "Six gastrointestinal surgeons (sequentially) received training" |
| Mediana 624 gastroscopias | E6 | ✅ | "median number of cases of 624" |
| Mediana 470 colonoscopias | E6 | ✅ | "a median number of cases of 470" |
| PMID 40850838 | E6 | ✅ | Zhonghua Wei Chang Wai Ke Za Zhi 2025;28(8):916-921 (artículo en chino) |
| WJGE 2020;12:98-110 | E7 | ✅ | 12(3):98-110, DOI 10.4253/wjge.v12.i3.98, PMID 32218889 |
| (Matiz) diseño | E7 | ⚠️ | "prospective case-control study"; "Total 15 cases and 24 controls were included" |
| Gastrointest Endosc 2015;82:1072-1079 | E8 | ✅ | 82(6):1072-9; PMID 26007221 |
| 33 novatos analizados | E8 | ❓ | Abstract: "Thirty-three novice endoscopists were allocated"; n analizado no informado |
| Ward 2016 EDA: 187 procedimientos al 95 % | Ward EDA | ✅ | "attained a 95% completion rate at 187 procedures" |
| (Matiz) año de cita Ward EDA | Ward EDA | ⚠️ | Epub 2016-03-14; cita PubMed Gut 66(6):1022-1033 (2017) |
| Ward EDA vs E3 | Ward / E3 | ✅ compatibles | Ward 187 (finalización 95 %) y > 90 % a 200; Siau técnica 150-174, global 225-249 (criterio DOPS distinto) |
