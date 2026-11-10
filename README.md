# Simulador de endoscopia de bajo costo

Proyecto a largo plazo: curso de fundamentos de manipulación bimanual del endoscopio flexible y el simulador físico (cuerpo de control impreso en 3D, ruedas sensadas, cámara real) que lo hace posible.

**Estado:** investigación y diseño. Prototipo de cuerpo de control v0.1 generado y verificado geométricamente, **sin imprimir ni probar**. No se afirma validez clínica, menor costo ni transferencia: están por demostrar.

## Dónde mirar
| Qué | Dónde |
|---|---|
| Marco rector (curso, preguntas, evaluación, cronograma) | [PROYECTO_INTEGRAL.md](PROYECTO_INTEGRAL.md) |
| Documento maestro inicial | [PROYECTO_SIMULADOR_ENDOSCOPIA.md](PROYECTO_SIMULADOR_ENDOSCOPIA.md) |
| Marco teórico, constructo y validación | [docs/01](docs/01-marco-teorico-constructo.md) |
| Evidencia: escalas y cortes de experiencia | [docs/02](docs/02-evidencia-escalas-y-cortes.md) |
| Integración y decisiones | [docs/03](docs/03-proyecto-integrado.md), [docs/06](docs/06-incorporacion-proyecto-integral.md) |
| Plan de búsqueda y síntesis | [docs/04](docs/04-plan-busqueda-bibliografica.md), [docs/05](docs/05-sintesis-busqueda-y-decisiones.md) |
| Búsqueda bibliográfica Q1–Q8 (103 fichas, matriz, referencias) | [busqueda_bibliografica/](busqueda_bibliografica/05_matriz_evidencia.md) |
| Lista de descarga de papers (ingesta manual) | [busqueda_bibliografica/DESCARGAS.md](busqueda_bibliografica/DESCARGAS.md) |
| Bitácora de avances | [docs/bitacora/](docs/bitacora/2026-11-10.md) |
| Ficha de mediciones en la clínica | [docs/mediciones-clinica.md](docs/mediciones-clinica.md) |
| Hardware: modelo paramétrico, STL, visor 3D | [hardware/](hardware/README.md) |
| Cómo ver el prototipo sin programar | [hardware/COMO_VER_EN_ONSHAPE.md](hardware/COMO_VER_EN_ONSHAPE.md) |

## Ver el prototipo
Abrir `hardware/visor/visor.html` en el navegador (doble clic; sin instalación). Para regenerar las piezas: `cd hardware/cad && npm install && node handle.js && node build-viewer.js`.

## Material no incluido
El Libro Guía del diplomado y el artículo ENDONIX (Hohlstein et al., Surg Endosc 2026, DOI 10.1007/s00464-025-12396-8) son material de terceros y no se distribuyen aquí.

## Advertencias
Dimensiones del 3D provisorias hasta medir los equipos de la clínica. Las fichas bibliográficas se basan mayormente en *abstracts*; verificar texto completo antes de citar cifras. Cualquier estudio con participantes requiere aprobación ética institucional.
