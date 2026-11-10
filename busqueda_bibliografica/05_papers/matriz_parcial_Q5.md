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
