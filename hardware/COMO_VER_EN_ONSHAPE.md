# Cómo ver el prototipo (sin programar)

## Lo primero: no se "pega" código en Onshape
El archivo `cad/handle.js` es un programa que **genera** las piezas; Onshape no lo ejecuta. Lo que ya se ejecutó por ti produjo los archivos `.stl` (los "planos 3D" de cada pieza). Tú solo necesitas esos archivos. Tienes **dos formas** de verlo:

---

## Opción A (la más fácil): visor de doble clic
1. Abre la carpeta `hardware/visor/`.
2. Haz doble clic en **`visor.html`** (se abre en Edge/Chrome; no necesita internet ni instalar nada).
3. Arrastra con el mouse para girar, rueda del mouse para acercar.
4. Mueve los **deslizadores** de las dos ruedas: verás girar cada rueda (con tope a ±145°) y el **valor que leería el sensor** (0–4095; 2048 = neutro).
5. Botones: *Ocultar tapa* (ver el interior), *Cuerpo transparente*, *Demo de giro*.

Qué NO hace: no simula fricción, tendones, ni la punta del endoscopio; es una vista del modelo geométrico.

---

## Opción B: abrir las piezas en Onshape (para medir, revisar y animar el giro)

Importante antes de empezar: los `.stl` son **mallas**; en Onshape se pueden ver, medir y mover, pero **no se editan con operaciones paramétricas** (no son un dibujo con cotas). Los nombres de los botones pueden variar levemente según la versión de Onshape; si algo no calza, envíame una captura de pantalla.

**Privacidad:** en el plan gratuito estándar de Onshape los documentos son públicos. Revisa si tu correo institucional da acceso al plan *Education* (documentos privados) antes de subir algo que no quieras mostrar.

### Paso 1. Subir los archivos
1. Entra a onshape.com, inicia sesión y pulsa **Create → Document**; ponle un nombre (p. ej. "Cuerpo de control v0.1").
2. Abajo a la izquierda hay un botón **"+"**; elige **Import** y selecciona los **4 archivos** de la carpeta `hardware/stl/aligned/`:
   `body.stl`, `cover.stl`, `wheel_UD.stl`, `wheel_RL.stl`.
3. Si te pregunta la **unidad**, elige **milímetros** (los STL no guardan unidades; si eliges otra, el modelo saldrá enorme o diminuto).
4. Cada archivo aparece como una pestaña o pieza en el documento.

> Por qué esta carpeta: las piezas de `aligned/` ya están **en su posición de ensamble**, con el eje de las ruedas en el eje Z y pasando por el origen. Eso permite armarlas sin medir nada.

### Paso 2. Armar el ensamble y hacer girar las ruedas
1. **"+" → Assembly**.
2. Con **Insert**, agrega las 4 piezas (la primera queda fija en el origen).
3. Herramienta **Mate** (conexión):
   - **Fastened** entre `body` y `cover`: selecciona el **origen** (punto 0,0,0) de cada pieza como conector. Quedan unidas en su posición correcta.
   - **Revolute** entre `body` y `wheel_UD`: de nuevo el **origen** de cada pieza. Eso hace que la rueda gire sobre el eje Z, que es su eje real. Repite con `wheel_RL`.
   - En cada Revolute marca **Limits** y pon mínimo **−145°** y máximo **+145°** (el tope del diseño).
4. **Arrastra una rueda** con el mouse: gira con su tope. Es la animación que Onshape permite.

### Si no te resulta
- Usa la Opción A (siempre funciona).
- Dime en qué paso te quedaste y qué ves en pantalla.

---

## ¿Y un modelo editable en Onshape?
Si más adelante quieres **cambiar medidas desde Onshape** (por ejemplo, con los datos de la clínica), hay dos caminos: que yo cambie un número en `handle.js` y regenere los archivos (lo más simple), o armar un modelo con dibujos y extrusiones en Onshape usando la tabla de parámetros de `hardware/README.md` (requiere aprender lo básico de Onshape). Yo te recomiendo lo primero: dices qué medida cambia y yo regenero los archivos y el visor.
