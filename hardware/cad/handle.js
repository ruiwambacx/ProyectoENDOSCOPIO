// Cuerpo de control v0.1 — simulador de endoscopia de bajo costo
// Genera STL imprimibles. Uso:  node handle.js   (salida en ../stl)
// Todas las dimensiones son PARÁMETROS DE PROTOTIPO, no medidas de un equipo real (ver docs/03).
// Marco del mundo: eje de ruedas = X, mango hacia -Z, frente (dedos/pulgar) = +Y, origen = centro de ruedas.
const fs = require('fs');
const path = require('path');
const { primitives, booleans, transforms, extrusions, measurements } = require('@jscad/modeling');
const stl = require('@jscad/stl-serializer');
const { cuboid, cylinder, polygon } = primitives;
const { union, subtract } = booleans;
const { translate, rotateX, rotateY } = transforms;
const { extrudeLinear, extrudeRotate } = extrusions;
const D2R = Math.PI / 180;

// ---------------- PARÁMETROS ----------------
const P = {
  // cabeza
  headR: 38, cavR: 35, dOut: 30, dIn: 24,       // radio exterior/cavidad; semiancho exterior/interior (d = |x|)
  // grip
  gripX: 22, gripY0: -20, gripY1: 20, gripZ0: -98, wall: 3,
  // tubo (PROVISORIO: no hay tubo elegido)
  tubeOD: 12, tubeClear: 0.4, collarR: 15, collarZ0: -118,
  // sensor magnético (AS5600 en módulo; VERIFICAR dimensiones del módulo real)
  pcb: 25, pcbT: 1.6, chipT: 0.9, gap: 1.5, magD: 6.1, magH: 2.6,
  // ruedas
  journalR: 20, ringID: 20.4, ringOD: 23, journalH: 6, grooveDepth: 1.5, stopSector: 60,
  spoolFlangeR: 16, spoolDrumR: 13, rUD: 29, rRL: 25,
  // tornillos
  m3pilot: 2.4, m3clear: 3.4, bossR: 3.2,
};
// posiciones axiales derivadas (d = distancia al plano medio)
P.pocketFloor = P.dIn + 1.9;                              // fondo del bolsillo de PCB
P.chipTop = P.pocketFloor - P.pcbT - P.chipT;             // cara superior del chip
P.hubFace = P.chipTop - P.gap;                            // cara del imán = cara externa del cubo
P.hub = P.hubFace;                                        // alias
P.ringEndD = P.hubFace - P.journalH;                      // fin del anillo (lado interior)

// ---------------- HELPERS ----------------
const box = (x0, x1, y0, y1, z0, z1) =>
  cuboid({ size: [x1 - x0, y1 - y0, z1 - z0], center: [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2] });
function cyl(axis, r, a0, a1, p = 0, q = 0, seg = 56) {
  let c = cylinder({ radius: r, height: a1 - a0, segments: seg });
  const m = (a0 + a1) / 2;
  if (axis === 'x') return translate([m, p, q], rotateY(Math.PI / 2, c));
  if (axis === 'y') return translate([p, m, q], rotateX(-Math.PI / 2, c));
  return translate([p, q, m], c);
}
const bb = g => measurements.measureBoundingBox(g);
const vol = g => measurements.measureVolume(g);
function save(name, g) {
  const out = stl.serialize({ binary: true }, g);
  fs.writeFileSync(path.join(__dirname, '..', 'stl', name), Buffer.concat(out.map(b => Buffer.from(b))));
  const [mn, mx] = bb(g);
  console.log(name.padEnd(22), 'size mm:', mx.map((v, i) => (v - mn[i]).toFixed(1)).join(' x '), ' vol cm3:', (vol(g) / 1000).toFixed(1));
}
// marco local de rueda: z=0 cara del imán, z crece hacia el plano medio
function toSide(g, s) {
  return s < 0 ? translate([-P.hub, 0, 0], rotateY(Math.PI / 2, g)) : translate([P.hub, 0, 0], rotateY(-Math.PI / 2, g));
}
const LUG_ANG = -90; // el tope (lug) del anillo queda hacia atrás (-Y local = -Y mundo)

// ---------------- RUEDA ----------------
function knurledDisc(R, h, teeth = 36, depth = 1.2) {
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * 2 * Math.PI, st = (2 * Math.PI) / teeth;
    [[0, R - depth], [0.25, R], [0.6, R], [0.85, R - depth]].forEach(([f, r]) =>
      pts.push([r * Math.cos(a0 + f * st), r * Math.sin(a0 + f * st)]));
  }
  return extrudeLinear({ height: h }, polygon({ points: pts }));
}
function wheel(Rgrip) {
  const zS = P.journalH;                                   // inicio del carrete
  let w = union(
    cyl('z', P.journalR, 0, zS),                           // muñón (gira dentro del anillo)
    cyl('z', P.spoolFlangeR, zS, zS + 1),                  // ceja 1
    cyl('z', P.spoolDrumR, zS + 1, zS + 4),                // tambor de tendón (garganta 3 mm)
    cyl('z', P.spoolFlangeR, zS + 4, zS + 5),              // ceja 2
    translate([0, 0, zS + 5], knurledDisc(Rgrip, P.hub - 0.6 - (zS + 5)))   // disco de agarre
  );
  // ranura de tope: arco de 360-stopSector grados, abierta hacia el lado del carrete (se inserta el tope por ahí)
  const arc = 360 - P.stopSector;
  const groove = extrudeRotate(
    { segments: 90, angle: arc * D2R, startAngle: (LUG_ANG - arc / 2) * D2R },
    polygon({ points: [[P.journalR - P.grooveDepth, 0.5], [P.journalR + 0.6, 0.5], [P.journalR + 0.6, zS + 0.1], [P.journalR - P.grooveDepth, zS + 0.1]] })
  );
  w = subtract(w, groove);
  w = subtract(w, cyl('z', P.magD / 2, -0.1, P.magH));                   // bolsillo del imán (diam. 6x2.5, ajuste a presión)
  w = subtract(w, cyl('y', 0.9, -14, 14, 5, zS + 2.5, 24));              // orificio de anclaje del tendón (tambor)
  return w;
}

// ---------------- ANILLO + BOLSILLO DE SENSOR (por lado) ----------------
function ringLocal() {
  const zEnd = P.journalH;                                 // el anillo termina donde empieza el carrete
  let r = subtract(cyl('z', P.ringOD, -2.3, zEnd), cyl('z', P.ringID, -2.5, zEnd + 0.1, 0, 0, 72));
  // tope: taco en el diámetro interior que corre dentro de la ranura del muñón
  r = union(r, box(-3, 3, -(P.journalR - P.grooveDepth + 0.3 + 2.4), -(P.journalR - P.grooveDepth + 0.3), 1.0, 4.0));
  return r;
}
function sensorCutLocal(s) {
  const dir = -s; // sentido local +x/-x que equivale a "hacia abajo" en el mundo
  const pk = box(-P.pcb / 2, P.pcb / 2, -P.pcb / 2, P.pcb / 2, -(P.pocketFloor - P.hub), -1.9);
  const x0 = dir > 0 ? 0 : -27, x1 = dir > 0 ? 27 : 0;
  const ch = box(x0, x1, -4, 4, -(P.pocketFloor - P.hub), -2.2);        // canal de cables bajo el anillo hacia la cavidad
  return union(pk, ch);
}

// ---------------- CUERPO (lado izquierdo, profundo) ----------------
const bossPos = [[0, 33.2], [-23.5, 23.5], [-23.5, -23.5], [24, -24]];   // (y,z) tornillos de tapa
function body() {
  const dOut = P.dOut, dIn = P.dIn;
  let b = union(
    cyl('x', P.headR, -dOut, dIn, 0, 0, 96),               // cabeza (abierta a la derecha en x=+24)
    box(-P.gripX, P.gripX, P.gripY0, P.gripY1, P.gripZ0, -5),
    cyl('z', P.collarR, P.collarZ0, P.gripZ0 + 2, 0, 0, 64) // collar de tubo
  );
  // cavidades
  const cav = union(
    cyl('x', P.cavR, -dIn, dIn + 0.2, 0, 0, 96),
    box(-P.gripX + P.wall, P.gripX - P.wall, P.gripY0 + P.wall, P.gripY1 - P.wall, P.gripZ0 + P.wall, -3)
  );
  b = subtract(b, cav);
  // ventana frontal para los dedos/pulgar
  b = subtract(b, box(-dIn, dIn + 0.2, 10, 60, -20, 60));
  // bosses de tornillo (M3 autorroscante, 10 mm de rosca)
  bossPos.forEach(([y, z]) => {
    b = union(b, cyl('x', P.bossR, 12, dIn, y, z, 32));
    b = subtract(b, cyl('x', P.m3pilot / 2, 14, dIn + 0.1, y, z, 24));
  });
  // anillo izquierdo + bolsillo de PCB/canal
  b = union(b, toSide(ringLocal(), -1));
  b = subtract(b, toSide(sensorCutLocal(-1), -1));
  // bahía del microcontrolador (XIAO ~21x17.8; VERIFICAR contra el módulo real)
  b = union(b, box(-P.gripX + P.wall - 0.5, -12, -17, 6, -62.5, -41));
  b = subtract(b, box(-17.2, -11.9, -16, 5.5, -61, -42.5));
  b = subtract(b, box(-17.7, -12.2, -21, -15, -57.3, -46.2));              // ranura USB-C en la pared trasera
  // salida de cable (cámara/umbilical) por la pared trasera
  b = subtract(b, cyl('y', 3.5, -22, -15, 8, -30, 32));
  // collar: orificio de tubo, 4 guías de funda de tendón (PTFE), tornillo de apriete, 2 puntos de fijación futura
  b = subtract(b, cyl('z', (P.tubeOD + P.tubeClear) / 2, P.collarZ0 - 1, P.gripZ0 + 4, 0, 0, 64));
  [[-9.4, -7], [-9.4, 7], [9.4, -7], [9.4, 7]].forEach(([x, y]) => { b = subtract(b, cyl('z', 1.3, P.collarZ0 - 1, P.gripZ0 + 4, x, y, 20)); });
  b = subtract(b, cyl('x', 1.3, -16, -4, 0, -108, 20));
  [-12, 12].forEach(y => { b = subtract(b, cyl('z', P.m3pilot / 2, P.collarZ0 - 1, P.collarZ0 + 11, 0, y, 20)); });
  return b;
}

// ---------------- TAPA (lado derecho) ----------------
function cover() {
  let c = cyl('x', P.headR, P.dIn, P.dOut, 0, 0, 96);
  c = union(c, toSide(ringLocal(), +1));
  c = subtract(c, toSide(sensorCutLocal(+1), +1));
  bossPos.forEach(([y, z]) => {
    c = subtract(c, cyl('x', P.m3clear / 2, P.dIn - 0.1, P.dOut + 0.1, y, z, 24));
    c = subtract(c, cyl('x', 3.1, P.dOut - 2.5, P.dOut + 0.1, y, z, 24));  // alojamiento de cabeza de tornillo
  });
  return c;
}

// ---------------- MONTAJE / SALIDAS ----------------
const wUD = toSide(wheel(P.rUD), -1);       // rueda U/D (grande) a la izquierda
const wRL = toSide(wheel(P.rRL), +1);       // rueda R/L (menor) a la derecha
const B = body(), C = cover();

function onBed(g, rot) {                    // rota y asienta sobre z=0
  const r = rot(g);
  return translate([0, 0, -bb(r)[0][2]], r);
}
save('body_print.stl',  onBed(B, g => rotateY(-Math.PI / 2, g)));
save('cover_print.stl', onBed(C, g => rotateY(Math.PI / 2, g)));
const wheelPrint = Rg => { const w = wheel(Rg); return onBed(w, g => rotateX(Math.PI, g)); };
save('wheel_UD_print.stl', wheelPrint(P.rUD));
save('wheel_RL_print.stl', wheelPrint(P.rRL));
save('assembly_preview.stl', union(B, C, wUD, wRL));
// Piezas en posición de ensamble, con el eje de las ruedas = Z (para mates en Onshape y para el visor).
// Rotación: x->z (rotateY -90) y luego mango hacia -Y (rotateZ -90). Frente (ventana) queda hacia +X.
const { rotateZ } = transforms;
const aligned = g => rotateZ(-Math.PI / 2, rotateY(-Math.PI / 2, g));
save('aligned/body.stl', aligned(B));
save('aligned/cover.stl', aligned(C));
save('aligned/wheel_UD.stl', aligned(wUD));
save('aligned/wheel_RL.stl', aligned(wRL));
console.log('hubFace d =', P.hub.toFixed(2), ' ringEnd d =', P.ringEndD.toFixed(2), ' chipTop d =', P.chipTop.toFixed(2));
