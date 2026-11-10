# Ficha de mediciones en la clínica

Observación no invasiva, sin desmontar equipos (doc maestro §6). Una columna por modelo. La última columna indica qué parámetro de `hardware/cad/handle.js` actualiza cada medida. Llevar regla/calibre, transportador, cinta métrica y celular (fotos con escala visible).

| # | Medida | Cómo | Gastroscopio (modelo: ____) | Colonoscopio (modelo: ____) | Parámetro del modelo 3D |
|---|---|---|---|---|---|
| 1 | Fabricante, modelo, n.º de serie | Etiqueta / manual | | | — |
| 2 | Diámetro exterior del tubo de inserción (mm) | Calibre en 3 puntos | | | `tubeOD` |
| 3 | Longitud útil del tubo (cm) | Manual / cinta | | | longitud de prueba |
| 4 | Diámetro de la rueda grande U/D (mm) | Calibre | | | `rUD` |
| 5 | Diámetro de la rueda menor R/L (mm) | Calibre | | | `rRL` |
| 6 | Ancho de cada rueda y separación entre ellas (mm) | Calibre | | | anchos de disco de agarre |
| 7 | **Recorrido de cada rueda hasta el tope (grados o vueltas)** | Transportador / marca de referencia + video | | | `stopSector` (hoy ±145°) |
| 8 | **Angulación máxima de la punta** (arriba/abajo/izq./der., grados) | Foto/video con transportador | | | recorrido de tendón |
| 9 | Resistencia al giro de la rueda (sensación + freno) | Observación; si hay dinamómetro, medir | | | fricción v0.2 |
| 10 | Presencia de frenos/palancas de bloqueo | Foto | | | — |
| 11 | Dimensiones del mango (largo × ancho × fondo, mm) | Calibre/regla | | | `headR`, `gripX/Y` |
| 12 | Posición de la mano izquierda y del pulgar sobre las ruedas | Foto + demostración por docente | | | ventana frontal |
| 13 | Posición de botones/válvulas (aire, agua, aspiración) | Foto con escala | | | reserva de botones |
| 14 | Masa del equipo y balance (g; punto de apoyo) | Balanza si es viable | | | lastres |
| 15 | Rigidez/torsión percibida del tubo | Comparación supervisada (escala 1–5) | | | elección de tubo |
| 16 | Respuesta rueda→punta (cuánto gira la rueda por grado de punta) | Video simultáneo rueda + punta | | | relación de tendón (`spoolDrumR`) |
| 17 | Gestos que deben transferirse (entrevista breve a docentes) | 3 preguntas abiertas | | | tareas del escenario |

**Prioridad**: 7, 8, 16 (definen carretes, recorrido de tendón y tope), luego 2, 4, 5, 11. Con esas siete medidas se puede pasar el mango a v0.2 con dimensiones reales.
