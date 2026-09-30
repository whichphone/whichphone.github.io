(()=>{
const $=s=>document.querySelector(s);
const IOS={'375x667@2':'iPhone SE (2nd/3rd gen) / iPhone 8','414x736@3':'iPhone 8 Plus','375x812@3':'iPhone X / XS / 11 Pro / 12 mini / 13 mini','414x896@2':'iPhone XR / iPhone 11','414x896@3':'iPhone XS Max / 11 Pro Max','390x844@3':'iPhone 12 / 12 Pro / 13 / 13 Pro / 14','428x926@3':'iPhone 12 Pro Max / 13 Pro Max / 14 Plus','393x852@3':'iPhone 14 Pro / 15 / 15 Pro / 16','430x932@3':'iPhone 14 Pro Max / 15 Plus / 15 Pro Max / 16 Plus','402x874@3':'iPhone 16 Pro / 17 series','440x956@3':'iPhone 16 Pro Max'};
const DB=[[/SM-S92\d/,'Samsung Galaxy S24 series','Snapdragon 8 Gen 3 or Exynos 2400','AMOLED, 120 Hz','Android 14+'],
[/SM-S91\d/,'Samsung Galaxy S23 series','Snapdragon 8 Gen 2','AMOLED, 120 Hz','Android 13+'],
[/SM-A54\d/,'Samsung Galaxy A54 5G','Exynos 1380','Super AMOLED, 120 Hz','Android 13+'],
[/Pixel 9/,'Google Pixel 9 series','Google Tensor G4','OLED, 120 Hz','Android 14+'],
[/Pixel 8/,'Google Pixel 8 series','Google Tensor G3','OLED, 120 Hz','Android 14+'],
[/Pixel 7/,'Google Pixel 7 series','Google Tensor G2','OLED, 90-120 Hz','Android 13+'],
[/CPH\d|OnePlus/i,'OnePlus / OPPO device','Varies by model','AMOLED','Android (OxygenOS / ColorOS)'],
[/Redmi|M2\d{3}|23\d{6}/i,'Xiaomi / Redmi / POCO device','Varies by model','AMOLED or LCD','Android (HyperOS / MIUI)']];
const brand=m=>/^SM-|Galaxy/i.test(m)?'Samsung':/Pixel/i.test(m)?'Google':/^CPH|OnePlus/i.test(m)?'OnePlus / OPPO':/Redmi|^M\d|^2\d{7}/i.test(m)?'Xiaomi':/^moto/i.test(m)?'Motorola':/^RMX/i.test(m)?'realme':'';
function gpu(){try{const g=document.createElement('canvas').getContext('webgl'),e=g.getExtension('WEBGL_debug_renderer_info');return e?g.getParameter(e.UNMASKED_RENDERER_WEBGL):''}catch(e){return''}}
async function detect(){
const ua=navigator.userAgent,d=navigator.userAgentData;let he={};
if(d&&d.getHighEntropyValues){try{he=await d.getHighEntropyValues(['model','platformVersion'])}catch(e){}}
const w=Math.min(screen.width,screen.height),h=Math.max(screen.width,screen.height),dpr=Math.round(window.devicePixelRatio*100)/100;
const ios=/iPhone/.test(ua),ipad=/iPad/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),and=/Android/.test(ua);
let name='Unknown device',note='',model='',br='',rows=[];
if(ios){br='Apple';name=IOS[`${w}x${h}@${dpr}`]||'Apple iPhone';note='Apple hides the exact model, so we match your screen to the closest iPhone group.';const v=ua.match(/OS (\d+[_\d]*)/);rows.push(['OS','iOS '+(v?v[1].replace(/_/g,'.'):'')])}
else if(ipad){br='Apple';name='Apple iPad';note='This is a tablet.'}
else if(and){model=(he.model||(ua.match(/Android[^;]*;\s*([^;)]+?)(?:\sBuild|\))/)||[])[1]||'').trim();br=brand(model);
const hit=DB.find(x=>x[0].test(model));name=hit?hit[1]:(model||'Android phone');
if(hit)rows.push(['Chipset',hit[2]],['Display type',hit[3]],['Software',hit[4]]);
note=model?'Model code: '+model:'Your browser did not share a model code.';
const v=ua.match(/Android ([\d.]+)/);rows.unshift(['OS','Android '+(v?v[1]:'')])}
else{name='Not a phone';note='This looks like a desktop or laptop. Open this page on your phone to detect it.'}
rows.unshift(['Device',name]);if(br)rows.splice(1,0,['Brand',br]);
rows.push(['Screen',`${w} x ${h} CSS px`],['Pixel ratio',dpr+'x'],['Resolution',`${Math.round(w*dpr)} x ${Math.round(h*dpr)} px`]);
if(navigator.hardwareConcurrency)rows.push(['CPU cores',navigator.hardwareConcurrency]);
if(navigator.deviceMemory)rows.push(['RAM (approx.)',navigator.deviceMemory+' GB+']);
const g=gpu();if(g)rows.push(['GPU',g]);
rows.push(['Touch points',navigator.maxTouchPoints||0],['Language',navigator.language]);
const c=navigator.connection;if(c&&c.effectiveType)rows.push(['Network',c.effectiveType.toUpperCase()]);
return{name,note,rows}}
function show({name,note,rows}){
$('#result-title').textContent=name;$('#result-note').textContent=note;
const g=$('#result-grid');g.textContent='';
rows.forEach(([k,v],i)=>{const c=document.createElement('div');c.className='cell';c.style.animationDelay=i*60+'ms';
const a=document.createElement('span'),b=document.createElement('b');a.textContent=k;b.textContent=v;c.append(a,b);g.append(c)});
$('#result').hidden=false}
const btn=$('#detect-btn'),scan=$('#scanner');
btn.onclick=async()=>{btn.disabled=true;btn.textContent='Scanning...';scan.classList.add('on');
const [r]=await Promise.all([detect(),new Promise(r=>setTimeout(r,1400))]);
scan.classList.remove('on');show(r);btn.disabled=false;btn.textContent='Scan again';
$('#result').scrollIntoView({behavior:'smooth',block:'nearest'})};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
})();
