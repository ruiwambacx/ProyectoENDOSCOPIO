// Genera hardware/visor/visor.html: visor 3D autocontenido (sin internet, sin instalar nada).
// Uso: node handle.js && node build-viewer.js
const fs = require('fs'), path = require('path');
const r = p => fs.readFileSync(path.join(__dirname, p));
const b64 = n => r('../stl/aligned/' + n).toString('base64');
const three = r('node_modules/three/build/three.min.js').toString();
const stl = r('node_modules/three/examples/js/loaders/STLLoader.js').toString();
const orbit = r('node_modules/three/examples/js/controls/OrbitControls.js').toString();

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Visor cuerpo de control v0.1</title>
<style>
 :root{--bg:#f4f5f7;--fg:#1c2330;--card:#fff;--line:#d7dbe2;--acc:#0b6bcb}
 @media (prefers-color-scheme:dark){:root{--bg:#141922;--fg:#e8ecf3;--card:#1e2530;--line:#343d4c;--acc:#5aa9ff}}
 html,body{margin:0;height:100%;background:var(--bg);color:var(--fg);font:14px/1.4 system-ui,Segoe UI,sans-serif}
 #wrap{display:flex;height:100%;flex-wrap:wrap}
 #view{flex:1 1 560px;min-height:420px;position:relative}
 #view canvas{display:block;width:100%;height:100%}
 #panel{flex:0 0 340px;max-width:100%;box-sizing:border-box;padding:16px;background:var(--card);border-left:1px solid var(--line);overflow:auto}
 h1{font-size:17px;margin:0 0 4px} p.sub{margin:0 0 14px;color:#7a8597;font-size:12px}
 .ctl{margin:14px 0}.ctl label{display:flex;justify-content:space-between;font-weight:600}
 input[type=range]{width:100%;accent-color:var(--acc)}
 .read{font-variant-numeric:tabular-nums;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:8px 10px;margin-top:6px;font-size:13px}
 .read b{color:var(--acc)} .stop{color:#c0392b;font-weight:600;min-height:1.2em;font-size:12px}
 button{background:var(--acc);color:#fff;border:0;border-radius:8px;padding:7px 12px;cursor:pointer;margin:4px 6px 0 0}
 button.alt{background:transparent;color:var(--acc);border:1px solid var(--acc)}
 .note{font-size:12px;color:#7a8597;margin-top:14px}
 @media (max-width:760px){#panel{flex-basis:100%;border-left:0;border-top:1px solid var(--line)}}
</style></head><body><div id="wrap">
<div id="view"></div>
<div id="panel">
 <h1>Cuerpo de control v0.1</h1>
 <p class="sub">Arrastra para girar · rueda del mouse = zoom · clic derecho = mover</p>
 <div class="ctl"><label>Rueda U/D (grande) <span id="aUD">0°</span></label>
  <input id="sUD" type="range" min="-145" max="145" step="1" value="0">
  <div class="read">Lectura simulada del sensor: <b id="rUD">2048</b> / 4095 <span id="pUD"></span></div></div>
 <div class="ctl"><label>Rueda R/L (menor) <span id="aRL">0°</span></label>
  <input id="sRL" type="range" min="-145" max="145" step="1" value="0">
  <div class="read">Lectura simulada del sensor: <b id="rRL">2048</b> / 4095 <span id="pRL"></span></div></div>
 <div class="stop" id="stop"></div>
 <div><button id="bCover">Ocultar tapa</button><button id="bGhost" class="alt">Cuerpo transparente</button><button id="bSweep" class="alt">Demo de giro</button><button id="bReset" class="alt">Reiniciar</button></div>
 <p class="note">Qué muestra: el giro de cada rueda y la lectura que daría el sensor AS5600 (ADC de 12 bits: 2048 = rueda en neutro, calibrado al montar). El recorrido está limitado a ±145° por el tope mecánico del diseño. Es una vista del modelo geométrico: <b>no simula fricción, tendones ni la punta</b>. Dimensiones provisorias, sin imprimir ni probar.</p>
</div></div>
<script>${three}</script><script>${stl}</script><script>${orbit}</script>
<script>
const DATA={body:"${b64('body.stl')}",cover:"${b64('cover.stl')}",ud:"${b64('wheel_UD.stl')}",rl:"${b64('wheel_RL.stl')}"};
const host=document.getElementById('view');
const scene=new THREE.Scene();
const cam=new THREE.PerspectiveCamera(40,1,1,2000);
cam.position.set(260,40,230);
const ren=new THREE.WebGLRenderer({antialias:true,alpha:true});
ren.setPixelRatio(Math.min(devicePixelRatio,2));
host.appendChild(ren.domElement);
const ctrl=new THREE.OrbitControls(cam,ren.domElement);
ctrl.target.set(0,-35,0);ctrl.update();
scene.add(new THREE.HemisphereLight(0xffffff,0x667088,0.9));
const dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(200,300,250);scene.add(dl);
const dl2=new THREE.DirectionalLight(0xffffff,0.35);dl2.position.set(-200,-100,-200);scene.add(dl2);
function mesh(b64,color,opts){
  const bin=atob(b64),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
  const g=new THREE.STLLoader().parse(u.buffer);g.computeVertexNormals();
  const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial(Object.assign({color,roughness:.55,metalness:.05},opts||{})));
  scene.add(m);return m;
}
const body=mesh(DATA.body,0x8d99ae),cover=mesh(DATA.cover,0xa7b3c9);
const ud=mesh(DATA.ud,0xe07a5f),rl=mesh(DATA.rl,0x3d85c6);
function resize(){const w=host.clientWidth,h=host.clientHeight;ren.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix()}
addEventListener('resize',resize);resize();
const $=id=>document.getElementById(id);
const LIM=145;
function adc(deg){return Math.round(2048+deg/360*4095)}
function upd(){
  const a=+$('sUD').value,b=+$('sRL').value;
  ud.rotation.z=a*Math.PI/180;rl.rotation.z=-b*Math.PI/180;
  $('aUD').textContent=a+'°';$('aRL').textContent=b+'°';
  $('rUD').textContent=adc(a);$('rRL').textContent=adc(b);
  $('pUD').textContent='('+Math.round(adc(a)/4095*100)+' %)';$('pRL').textContent='('+Math.round(adc(-b)/4095*100)+' %)';
  const ends=[];if(Math.abs(a)>=LIM)ends.push('U/D');if(Math.abs(b)>=LIM)ends.push('R/L');
  $('stop').textContent=ends.length?'⚠ Tope mecánico alcanzado: '+ends.join(' y '):'';
}
$('sUD').oninput=upd;$('sRL').oninput=upd;upd();
$('bCover').onclick=e=>{cover.visible=!cover.visible;e.target.textContent=cover.visible?'Ocultar tapa':'Mostrar tapa'};
let ghost=false;$('bGhost').onclick=()=>{ghost=!ghost;[body,cover].forEach(m=>{m.material.transparent=ghost;m.material.opacity=ghost?0.25:1;m.material.depthWrite=!ghost})};
let sweep=null;$('bSweep').onclick=()=>{sweep=sweep?null:performance.now()};
$('bReset').onclick=()=>{sweep=null;$('sUD').value=0;$('sRL').value=0;upd()};
(function loop(t){
  if(sweep){const s=(t-sweep)/1000;$('sUD').value=Math.round(LIM*Math.sin(s*1.2));$('sRL').value=Math.round(LIM*Math.sin(s*0.8+1));upd()}
  ctrl.update();ren.render(scene,cam);requestAnimationFrame(loop)})(0);
</script></body></html>`;
fs.writeFileSync(path.join(__dirname, '..', 'visor', 'visor.html'), html);
console.log('visor.html', (html.length / 1e6).toFixed(2), 'MB');
