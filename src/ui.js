(function(){
var VERSION='1.3.1', BUILD='2026-10-20';
var D=864e5, S=Date.UTC(2026,9,29), END=Date.UTC(2027,4,31);
function U(y,m,d){return Date.UTC(y,m-1,d);}
var MONTHS=[[2026,11],[2026,12],[2027,1],[2027,2],[2027,3],[2027,4],[2027,5]];
var SHORT={'플레인 요거트':'요거트','호두 가루':'호두','새송이버섯':'새송이','느타리버섯':'느타리','표고버섯':'표고','양송이버섯':'양송이','아스파라거스':'아스파라','콜리플라워':'콜리플','숙주나물':'숙주','땅콩버터':'땅콩','가자미살':'가자미','대구살':'대구','동태살':'동태','새우살':'새우','대게살':'대게'};
var MEATS=['소고기','닭고기','돼지고기'], FISHES=['대구살','가자미살','동태살','새우살','대게살'], GRAINS=['쌀','오트밀','현미','수수','흑미'], FRUITS=['사과','바나나','배','블루베리','딸기','키위','아보카도','귤','망고'];
var STARS=['밀가루','달걀','땅콩버터','플레인 요거트','두부','참깨','메밀','호두 가루','대구살','새우살','대게살'];
var WD='일월화수목금토';
var MILE_DESC={'시작':'첫 이유식 햅쌀 쌀죽. 12:00 분유 전에 1~2숟가락부터','6배죽':'물 비율을 1:7.5로 줄이고 1~2mm 큐브로 바꿔요','5배죽':'1:6, 2~3mm 큐브 · 갈기 졸업','중기·2끼':'하루 2끼 · 1:5 · 6끼 슬라이딩 시작','핑거푸드':'찐 채소·두부 스틱을 손에 쥐여줘요','된죽':'1:4.5 된죽 · 5~7mm 큐브','후기·3끼':'아침 새 레시피 · 점심 오트밀포리지 · 저녁 직전 레시피','완료기':'간식 2회 · 1cm 큐브','첫 돌':'돌 이후 생선 주 100g까지 · 우유 전환은 소아과와 상의','만 6개월':'시금치·당근을 먹을 수 있는 시기예요','만 9개월':'영유아건강검진 3차(생후 9~12개월) 기간 시작 · 소아과 예약'};
var STAGES=[
 {no:'1',name:'초기 전반',s:U(2026,10,29),e:U(2026,11,12),meals:'하루 1회',amt:'20 → 60g',milk:'810~840ml',meat:'10g (11/4~)',ratio:'1 : 10',tex:'쌀알이 조금 남는 질감 있는 죽',cook:'3일마다 3끼분 · 채소 큐브 함께',
  pts:['첫 끼는 1~2숟가락. 모자란 양은 바로 이어 분유로 채워요.','이유식 먹고 바로 분유를 줘서 한 끼로 붙여요.','숟가락을 아기 손에 쥐여줘요.','새 재료는 3일 동안 두드러기·구토·설사를 지켜봐요.'],
  tl:[['08:00','분유 210ml'],['12:00','이유식 → 바로 분유 210→180ml'],['16:00','분유 210ml'],['19:30','분유 210ml → 밤잠']]},
 {no:'2',name:'초기 후반',s:U(2026,11,13),e:U(2026,12,9),meals:'하루 1회',amt:'60 → 100g',milk:'770~810ml',meat:'12~15g',ratio:'1:7.5 → 1:6 (11/25)',tex:'1~2mm → 2~3mm, 11/25 갈기 졸업',cook:'3일마다 3끼분 · 큐브 함께',
  pts:['★ 밀가루(11/19)·달걀(11/25)·땅콩버터(12/1)를 7개월 전에 시작해요.','11/25부터 추가 믹서 없이 알갱이를 그대로 줘요.','당근은 만 6개월이 지난 12/4부터예요.','12/7 조리분부터 6끼분으로 넉넉히 만들어요.'],
  tl:[['08:00','분유 210ml'],['12:00','이유식 → 바로 분유 180→140ml'],['16:00','분유 210ml'],['19:30','분유 210ml → 밤잠']]},
 {no:'3',name:'중기 7개월',s:U(2026,12,10),e:U(2027,1,11),meals:'하루 2회',amt:'90 → 120g',milk:'660~720ml',meat:'10g / 끼',ratio:'1 : 5',tex:'3~5mm 알갱이',cook:'3일마다 6끼분 · 큐브는 다 된 뒤',
  pts:['6끼 슬라이딩: 12시엔 새 레시피, 16시엔 직전 레시피.','소고기·닭고기를 번갈아 넣어요.','12/26 핑거푸드 시작, 12/28 첫 생선(대구).','물은 끼니마다 컵으로 몇 모금.'],
  tl:[['08:00','분유 210ml'],['12:00','새 레시피 + 분유 150→120ml'],['16:00','직전 레시피 + 분유 150→120ml'],['19:30','분유 210ml → 밤잠']]},
 {no:'4',name:'중기 8개월',s:U(2027,1,12),e:U(2027,2,4),meals:'하루 2회',amt:'120 → 150g',milk:'600~640ml',meat:'13g / 끼',ratio:'1 : 4.5',tex:'5~7mm 알갱이 된죽',cook:'3일마다 6끼분 · 큐브는 다 된 뒤',
  pts:['된죽이라 바닥에 눌어붙으면 다음엔 물 10% 늘려요.','현미·수수 같은 잡곡을 섞어요.','핑거푸드를 매일 주고 스스로 떠먹는 연습을 해요.','생선은 조리 전 무게로 한 주 50g 이하.'],
  tl:[['08:00','분유 200ml'],['12:00','새 레시피 + 분유 120→100ml'],['16:00','직전 레시피 + 분유 120→100ml'],['19:30','분유 200ml → 밤잠']]},
 {no:'5',name:'후기',s:U(2027,2,5),e:U(2027,4,11),meals:'하루 3끼',amt:'120 → 150g',milk:'약 570ml',meat:'15g / 끼',ratio:'1 : 4',tex:'7mm~1cm 알갱이 된죽',cook:'3일마다 6끼분 + 점심 오트밀포리지',
  pts:['아침 새 레시피, 점심 오트밀포리지+과일, 저녁 직전 레시피.','과일은 오트밀포리지에 돌아가며 얹어요.','3/13부터 돼지고기도 넣어요.','2/11부터 영유아건강검진 3차 기간이에요.'],
  tl:[['08:00','아침(새 레시피) → 분유 180ml'],['12:00','점심 오트밀포리지'],['16:00','분유 180ml'],['18:00','저녁(직전 레시피)'],['19:30','분유 210ml → 밤잠']]},
 {no:'6',name:'완료기',s:U(2027,4,12),e:U(2027,5,31),meals:'3끼 + 간식 2',amt:'150 → 180g',milk:'약 500ml',meat:'18g / 끼',ratio:'1 : 4',tex:'1cm 알갱이 된죽',cook:'3일마다 6끼분 + 오트밀포리지 20g',
  pts:['간식은 10:30, 15:00 두 번.','젖병보다 컵으로 분유를 마셔요.','5/11 첫 돌 이후 생선은 주 100g까지.','돌 이후 우유 전환은 소아과와 상의해요.'],
  tl:[['08:00','아침 → 분유 150ml'],['10:30','간식'],['12:00','오트밀포리지'],['15:00','간식 + 분유 150ml'],['18:00','저녁'],['19:30','컵 분유 200ml → 밤잠']]}];
var TIPS=[
 ['두유제조기는 칼날이 같이 돌아요. 이유식 모드는 곱게 갈려 미음이 되기 쉬우니 쌀알이 남는 죽 모드(건강죽 등)를 써요.','첫 배치 결과를 보고 다음 배치 모드를 정해요. 너무 거칠면 믹서를 3~5초씩만 더 돌려요.','이 시기 채소 큐브는 퓨레형이라 기계에 함께 넣어요.'],
 ['이번 단계부터 추가 믹서는 돌리지 않아요. 1~2mm 알갱이가 보이면 잘 된 거예요.','채소는 1~2mm 다짐 큐브로 바꿔요.'],
 ['갈기 졸업이에요. 2~3mm 알갱이를 그대로 줘요.','삼키기 힘들어하면 물을 조금 더 넣어 농도만 묽게 하고 입자는 유지해요.'],
 ['채소 큐브는 칼날에 갈리지 않도록 죽 모드가 끝난 뒤 넣고, 칼날이 돌지 않는 가열 모드로 3~5분 데워요.','3~5mm 알갱이를 혀로 으깨 먹는 연습 단계예요.'],
 ['된죽이라 바닥에 눌어붙기 쉬워요. 눌어붙었다면 다음 배치에 물을 10% 늘려요.','채소 큐브는 다 된 뒤 넣고 가열 모드로 데워요.','현미는 전날 밤 불려 두면 잘 퍼져요.'],
 ['7mm~1cm 큐브는 다 된 뒤 섞어 크기를 지켜요.','너무 되면 먹이기 직전 분유물 1~2큰술로 농도만 맞춰요.'],
 ['1cm 큐브는 다 된 뒤 섞어요. 찐 채소 몇 조각은 따로 남겨 핑거푸드로 줘요.','바닥에 눌어붙으면 다음 배치에 물을 10% 늘려요.']];
var REHEAT=['냉동한 죽은 먹기 전날 밤 냉장실로 옮겨 해동해요.','전자레인지로 김이 날 때까지 데우고, 한 번 저어 뜨거운 곳이 없게 한 뒤 체온 정도로 식혀요.','카놀라유·땅콩버터·참깨는 데운 뒤 먹이기 직전에 섞어요.','먹다 남긴 건 버리고, 맛 본 숟가락은 다시 넣지 않아요.','다짐육은 사 온 날 10g씩 얼음틀에 소분해 냉동하고 2주 안에 써요.'];
var PHS=[U(2026,10,29),U(2026,11,13),U(2026,11,25),U(2026,12,10),U(2027,1,12),U(2027,2,5),U(2027,4,12)];
function phIdx(t){var i=0;for(var k=0;k<PHS.length;k++)if(t>=PHS[k])i=k;return i;}

var LS={get:function(k){try{return localStorage.getItem(k);}catch(e){return null;}},set:function(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
var prof={name:'이재',sex:'girl',birth:'2026-05-11'};
try{var sp=JSON.parse(LS.get('yj.profile')||'null');if(sp&&sp.name&&/^\d{4}-\d{2}-\d{2}$/.test(sp.birth)){prof=sp;}}catch(e){}
var palette=LS.get('yj.palette')||'green';
var BIRTH,DOL,XMS;
function applyProfile(){
  var p=prof.birth.split('-').map(Number);BIRTH=U(p[0],p[1],p[2]);DOL=U(p[0]+1,p[1],p[2]);
  XMS={};XMS[BIRTH+199*D]='200일';XMS[BIRTH+299*D]='300일';
  for(var k=6;k<=11;k++){XMS[Date.UTC(p[0],p[1]-1+k,p[2])]='만 '+k+'개월';}
  XMS[DOL]='첫 돌';
  document.getElementById('brand').textContent=prof.name+' 이유식';
  document.title=prof.name+' 이유식';
  document.querySelectorAll('.nm').forEach(function(e){e.textContent=prof.name;});
  document.getElementById('meta').innerHTML='<b>D+'+dplus(TODAY)+'</b> · '+esc(dolShort(TODAY))+' · '+esc(ageLine(TODAY));
  document.getElementById('profLine').textContent=prof.name+' · '+(prof.sex==='boy'?'남아':'여아')+' · '+prof.birth.replace(/-/g,'.')+'생';
  mcache={};
}
function applyPalette(){if(palette==='green')document.documentElement.removeAttribute('data-palette');else document.documentElement.setAttribute('data-palette',palette);
  document.getElementById('themeLine').textContent={green:'그린',gray:'그레이',blue:'블루',pink:'핑크'}[palette]||'그린';}

function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function todayT(){var n=new Date();return Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());}
function clampT(t){return t<S?S:(t>END?END:t);}
function md(t){var d=new Date(t);return (d.getUTCMonth()+1)+'/'+d.getUTCDate();}
function mdw(t){var d=new Date(t);return md(t)+'('+WD[d.getUTCDay()]+')';}
function monthIdx(t){var d=new Date(t),y=d.getUTCFullYear(),m=d.getUTCMonth()+1;if(y===2026&&m===10)m=11;for(var i=0;i<MONTHS.length;i++)if(MONTHS[i][0]===y&&MONTHS[i][1]===m)return i;return t<S?0:MONTHS.length-1;}
function run(mi,sel,tab){var c=new Component();c.props={year:String(MONTHS[mi][0]),month:String(MONTHS[mi][1])};c.state={sel:sel,tab:tab};c.setState=function(){};return c.renderVals();}
var mcache={};
function cellsOf(mi){if(!mcache[mi])mcache[mi]=run(mi,null,null);return mcache[mi];}
function cellAt(t){if(t<S||t>END)return null;var o=cellsOf(monthIdx(t));for(var i=0;i<o.cells.length;i++)if(o.cells[i].t===t)return o.cells[i];return null;}
function dplus(t){return Math.round((t-BIRTH)/D)+1;}
function dolShort(t){var n=Math.round((DOL-t)/D);return n>0?'돌 D-'+n:(n===0?'첫 돌':'돌+'+(-n));}
function ageLine(t){var b=new Date(BIRTH),d=new Date(t),by=b.getUTCFullYear(),bm=b.getUTCMonth(),bd=b.getUTCDate();
  var m=(d.getUTCFullYear()-by)*12+(d.getUTCMonth()-bm)-(d.getUTCDate()<bd?1:0);if(m<0)return '출생 전';
  var a=Date.UTC(by,bm+m,bd);return m+'개월 '+Math.round((t-a)/D)+'일';}
function msOf(t,c){var a=[];if(c&&c.mile&&!(c.mileText==='첫 돌'||c.mileText==='만 6개월'))a.push(c.mileText);if(XMS[t]&&a.indexOf(XMS[t])<0)a.push(XMS[t]);return a;}
var TODAY=todayT();
var st={mi:monthIdx(clampT(TODAY)),sel:null,tab:null,view:'cal',stage:null,rt:null,sub:null,hi:'cal'};

/* 챙길 것 */
function buyName(n){if(MEATS.indexOf(n)>=0)return n+' 다짐육';if(FISHES.indexOf(n)>=0||GRAINS.indexOf(n)>=0||FRUITS.indexOf(n)>=0||STARS.indexOf(n)>=0)return n;return n+' 큐브';}
function recipeOf(t){return run(monthIdx(t),t,'rec');}
function thawList(t){var o=recipeOf(t);return o.rRows.filter(function(r){return /다짐육|큐브|조리 전 무게/.test(r.name);}).map(function(r){return r.name.replace(/ \(.*?\)/g,'').replace(' · NEW','').replace('★ ','')+' '+r.raw;}).join(' · ');}
function buildAlerts(){
  var A=[], T=TODAY, c0=cellAt(T);
  if(T<S){var n=Math.round((S-T)/D);
    A.push({k:'mile',ic:'D-'+n,b:'첫 이유식 '+mdw(S)+' · 햅쌀 쌀죽',s:'12:00 분유 전에 1~2숟가락부터. 모자란 양은 분유로 채워요.',t:S});
    A.push({k:'',ic:'준비',b:'시작 전에 준비할 것',s:'두유제조기(가열 모드 있는 것) · 주방 저울 · 햅쌀 · 이유식 숟가락 · 빨대컵 · 소분 용기',v:'recipe'});}
  var tm=T+D, ct=cellAt(tm);
  if(c0&&c0.cook){var r=recipeOf(T);A.push({k:'cook',ic:'오늘',b:'오늘 조리: '+r.rTitle.split(' · ')[0],s:r.rTitle.split(' · ')[2]+' · '+r.rSub.split(' · ')[0],v:'recipe',rt:T});}
  if(ct&&ct.cook){A.push({k:'cook',ic:'내일',b:'내일 조리: '+ct.sumText,s:'오늘 밤 냉장 해동 · '+(thawList(tm)||'해동할 큐브 없음'),v:'recipe',rt:tm});}
  if(T>=S){
    var b0=S+Math.floor((T-S)/(3*D))*3*D, cb=cellAt(b0);
    if(cb&&cb.label){var day=Math.round((T-b0)/D)+1;
      A.push({k:cb.isNewA?'star':'obs',ic:day+'/3',b:(cb.isNewA?'★ ':'')+cb.label+' 반응 관찰 '+day+'일차',s:day===1?'첫 끼는 2~3숟가락만. 먹고 2~3시간 두드러기·구토·설사를 봐요.':'입 주변·몸 두드러기, 구토, 설사, 기침이 없으면 양을 늘려요.',t:T});}
    var wk=[];for(var q=T-6*D;q<b0;q+=D){var cq=cellAt(q);if(cq&&cq.cook&&cq.label)wk.push(cq.label+'('+md(q)+')');}
    if(wk.length)A.push({k:'obs',ic:'주간',b:'이번 주 새로 먹은 재료',s:wk.join(' · ')+' — 늦게 나타나는 발진·설사가 없었는지 체크해요.'});
    if(c0&&c0.fish){var fo=run(monthIdx(T),T,'feed'),fl=fo.menu.filter(function(x){return /최근 7일/.test(x.t);})[0];A.push({k:'fish',ic:'생선',b:'오늘 생선 먹는 날',s:fl?fl.t.replace('생선: ',''):'',t:T});}
  }
  for(var s2=T+D;s2<=T+21*D&&s2<=END;s2+=D){var cs=cellAt(s2);if(cs&&cs.isNewA){A.push({k:'star',ic:'D-'+Math.round((s2-T)/D),b:'다음 ★ '+cs.label+' · '+mdw(s2),s:'평일 낮 끼니에 소량부터. 첫날은 소아과 진료 시간 안에 먹여요.',t:s2});break;}}
  var buys=[];for(var s3=Math.max(T,S-D)+D;s3<=T+7*D&&buys.length<2;s3+=D){var c3=cellAt(s3);if(c3&&c3.cook&&c3.label&&c3.label!=='쌀')buys.push(buyName(c3.label)+'('+md(s3)+')');}
  if(buys.length)A.push({k:'',ic:'장보기',b:'이번 주에 새로 필요한 재료',s:buys.join(' · ')});
  for(var s4=T;s4<=T+14*D&&s4<=END;s4+=D){var ms=msOf(s4,cellAt(s4)).filter(function(x){return x!=='시작'||T>=S;});
    if(ms.length){var d4=Math.round((s4-T)/D);A.push({k:'mile',ic:d4?'D-'+d4:'오늘',b:ms.join(' · ')+' · '+mdw(s4),s:ms.map(function(x){return MILE_DESC[x]||'';}).filter(Boolean).join(' · ')||('태어난 지 '+dplus(s4)+'일'),t:s4});break;}}
  return A;
}
function renderAlerts(){
  var A=buildAlerts(),el=document.getElementById('alerts');
  document.getElementById('alertDate').textContent=mdw(TODAY)+' 기준';
  el.innerHTML=A.map(function(a,i){var go=a.t||a.v;return '<button type="button" class="alert '+a.k+'" data-i="'+i+'"><span class="ic">'+esc(a.ic)+'</span><span class="tx"><b>'+esc(a.b)+'</b>'+(a.s?'<small>'+esc(a.s)+'</small>':'')+'</span><span class="go">'+(go?'›':'')+'</span></button>';}).join('')||'<p class="fine">오늘은 따로 챙길 일이 없어요.</p>';
  el.onclick=function(e){var b=e.target.closest('[data-i]');if(!b)return;var a=A[+b.dataset.i];if(a.v==='recipe'){if(a.rt)st.rt=a.rt;go('recipe');}else if(a.t)openDay(a.t,null,'cal');};
}
/* 달력 */
function renderCal(){
  var o=cellsOf(st.mi), y=MONTHS[st.mi][0], m=MONTHS[st.mi][1];
  document.getElementById('mTitle').innerHTML=esc(y+'년 '+(st.mi===0?'10–11월':m+'월'))+'<small>'+esc(o.phaseText)+'</small>';
  document.getElementById('mPrev').disabled=st.mi===0;
  document.getElementById('mNext').disabled=st.mi===MONTHS.length-1;
  var h='';
  o.cells.forEach(function(c){
    if(!c.show){h+='<div class="cell empty"></div>';return;}
    var ms=msOf(c.t,c);
    var cls='cell'+(c.sun?' sun':'')+(c.cook?' cook':'')+(c.t===TODAY?' today':'');
    var tag=c.label?'<span class="tag'+(c.isNewA?' star':'')+'">'+(c.isNewA?'★':'')+esc(SHORT[c.label]||c.label)+'</span>':(ms.length?'<span class="tag ms">'+esc(ms[0].replace('만 ',''))+'</span>':'');
    var dots=(c.fish?'<i class="f"></i>':'')+((c.label&&ms.length)||ms.length>1?'<i class="m"></i>':'');
    h+='<button type="button" class="'+cls+'" data-t="'+c.t+'" aria-label="'+esc(c.aria)+'"><span class="num'+(c.dayText.indexOf('/')>=0?' sm':'')+'">'+esc(c.dayText)+'</span>'+tag+'<span class="dots">'+dots+'</span></button>';
  });
  document.getElementById('grid').innerHTML=h;
}
/* 날짜 */
function renderDay(){
  var t=st.sel, o=run(monthIdx(t),t,st.tab), c=cellAt(t), el=document.getElementById('day');
  var parts=o.mSub.split(' · ');
  setSub(o.mTitle.replace(/^\d+년 /,''),'D+'+dplus(t)+' · '+ageLine(t)+' · '+dolShort(t));
  var chips='<span class="chip">'+esc(parts[1])+'</span>';
  if(c.cook)chips+='<span class="chip cook">조리하는 날</span>';
  if(c.isNewA)chips+='<span class="chip star">★ '+esc(c.label)+' 첫날</span>';else if(c.isNew)chips+='<span class="chip new">NEW '+esc(c.label)+'</span>';
  if(c.isObs)chips+='<span class="chip">'+esc(c.obsText)+'</span>';
  if(c.fish)chips+='<span class="chip fish">생선</span>';
  msOf(t,c).forEach(function(x){chips+='<span class="chip mile">'+esc(x)+'</span>';});
  var h='<div class="chips">'+chips+'</div>';
  if(o.isCook)h+='<div class="seg" role="group" aria-label="보기"><button type="button" class="feed" data-tab="feed" aria-pressed="'+o.showFeed+'">하루 일정</button><button type="button" class="rec" data-tab="rec" aria-pressed="'+o.showRec+'">조리 레시피</button></div>';
  h+='<div class="dbody">';
  if(o.showFeed){
    h+='<p class="sub">'+esc(parts.slice(2).join(' · '))+'</p><ol class="tl">';
    o.feedRows.forEach(function(r){var meal=/이유식|아침|점심|저녁|간식/.test(r.label);h+='<li class="'+(r.time?'':'cont ')+(meal?'meal':'')+'"><time>'+esc(r.time)+'</time><span class="lb">'+esc(r.label)+'</span><span class="amt">'+esc(r.amount)+'</span></li>';});
    h+='</ol><p class="total">'+esc(o.feedTotal)+'</p>';
    h+='<div><h3>오늘 메뉴</h3><ul>'+o.menu.map(function(x){return '<li>'+esc(x.t)+'</li>';}).join('')+'</ul></div>';
    h+='<div class="note"><ul>'+o.notes.map(function(x){return '<li>'+esc(x.t)+'</li>';}).join('')+'</ul></div>';
  }
  if(o.showRec)h+=recipeHTML(t,o,false);
  el.innerHTML=h+'</div>';
  document.getElementById('dPrev').disabled=t<=S;
  document.getElementById('dNext').disabled=t>=END;
}
/* 레시피 본문 (날짜 화면·조리법 탭 공용) */
function recipeHTML(t,o,full){
  var tp=o.rTitle.split(' · '), parts=o.mSub.split(' · '), pi=phIdx(t);
  var news=[],store=[];
  o.rStore.forEach(function(x){if(/^(NEW |★ |새 과일)/.test(x.t))news.push(x.t);else if(!/^먹기 전날 밤/.test(x.t))store.push(x.t);});
  var h='<div class="rblock"><p class="rtitle">'+esc(tp[0])+'</p><p class="sub">'+esc(tp[2]+' · '+o.rSub)+'</p></div>';
  h+='<div class="ratio"><div><small>단계</small><strong>'+esc(parts[1])+'</strong></div><div><small>비율 (무게)</small><strong>'+esc(parts[2].replace(/ \(.*\)/,'').replace('생쌀 ',''))+'</strong></div><div><small>입자</small><strong>'+esc(parts[3].replace('입자: ',''))+'</strong></div></div>';
  if(news.length)h+='<div class="note star"><ul>'+news.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  h+='<div class="rblock"><h3>재료 (저울로 무게 재기)</h3><ul class="ing">'+o.rRows.map(function(r){return '<li><div class="r1"><b>'+esc(r.name)+'</b><span>'+esc(r.raw)+'</span></div><div class="r2"><span class="when">'+esc(r.done)+'</span>'+esc(r.prep)+'</div></li>';}).join('')+'</ul></div>';
  h+='<div class="rblock"><h3>만드는 법</h3><ol class="steps">'+o.rSteps.map(function(x){return '<li><span>'+esc(x.t.replace(/^\d+\.\s*/,''))+'</span></li>';}).join('')+'</ol></div>';
  if(full)h+='<div class="rblock"><h3>입자감 지키기 · '+esc(parts[1])+'</h3><ul>'+TIPS[pi].map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  h+='<div class="rblock"><h3>보관 · 데우기</h3><div class="note"><ul>'+store.concat(full?REHEAT:REHEAT.slice(1,2)).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div></div>';
  return h;
}
/* 조리법 탭 */
function cookDays(){var a=[];for(var t=S;t<=END;t+=3*D)a.push(t);return a;}
function nextCook(){var a=cookDays(),T=clampT(TODAY);for(var i=0;i<a.length;i++)if(a[i]>=T)return a[i];return a[a.length-1];}
function renderRecipe(){
  if(st.rt==null)st.rt=nextCook();
  var t=st.rt, a=cookDays(), i=a.indexOf(t), o=recipeOf(t), n=Math.round((t-TODAY)/D);
  var lb=n===0?'오늘 조리':(n===1?'내일 조리':(n>0?(t===nextCook()?'다음 조리':'조리 예정')+' · D-'+n:'지난 조리'));
  document.getElementById('rLabel').textContent=lb;
  document.getElementById('rDate').textContent=mdw(t)+' · '+(i+1)+'번째 조리';
  document.getElementById('rPrev').disabled=i<=0;
  document.getElementById('rNext').disabled=i>=a.length-1;
  var h='<div class="card">'+recipeHTML(t,o,true)+'</div>';
  if(t>=U(2027,2,5)){
    var fo=run(monthIdx(t),t,'feed'),line=fo.menu.filter(function(x){return /오트밀포리지:/.test(x.t);})[0];
    if(line){var txt=line.t.split(': ').slice(1).join(': '),sp=txt.split(' (선택: '),steps=sp[0].split(' → ');
      h+='<div class="card"><h2>점심 오트밀포리지</h2><p class="sub">매일 점심에 바로 만들어요 · '+esc(md(t))+' 기준</p><ol class="steps">'+steps.map(function(x){return '<li><span>'+esc(x)+'</span></li>';}).join('')+'</ol>'+(sp[1]?'<p class="fine">선택: '+esc(sp[1].replace(/\)$/,''))+'</p>':'')+'<p class="fine">과일은 이미 먹어 본 것 중에 돌아가며 써요. 새 과일이 나오는 날은 1~2작은술부터.</p></div>';}
  }
  if(n>=0&&n<=1){h+='<p class="fine">'+(n===1?'오늘 밤':'어젯밤')+' 냉장 해동: '+esc(thawList(t)||'없음')+'</p>';}
  document.getElementById('recipeBody').innerHTML=h;
}
/* 로드맵 */
function curStage(){var T=TODAY;if(T<STAGES[0].s)return 0;for(var i=STAGES.length-1;i>=0;i--)if(T>=STAGES[i].s)return i;return 0;}
function stageNews(sg){var a=[];for(var t=S;t<=sg.e;t+=3*D){if(t<sg.s)continue;var c=cellAt(t);if(c&&c.label)a.push({n:c.label,star:c.isNewA,t:t});}return a;}
function renderRoadmap(){
  var cur=curStage(); if(st.stage==null)st.stage=cur;
  var sg=STAGES[st.stage], T=TODAY, len=Math.round((sg.e-sg.s)/D)+1, isCur=st.stage===cur;
  var badge, pr=0;
  if(T<sg.s){badge='<span class="badge off">'+(isCur?'곧 시작 · ':'')+'D-'+Math.round((sg.s-T)/D)+'</span>';}
  else if(T>sg.e){badge='<span class="badge off">지난 단계</span>';pr=100;}
  else{var dn=Math.round((T-sg.s)/D)+1;badge='<span class="badge">지금 단계 · '+dn+'/'+len+'일</span>';pr=Math.round(dn/len*100);}
  var news=stageNews(sg);
  var h=badge+'<div class="ttl"><h2>'+sg.no+'. '+esc(sg.name)+'</h2><span>'+md(sg.s)+' – '+md(sg.e)+'</span></div>';
  h+='<div class="prog" aria-hidden="true"><i style="width:'+pr+'%"></i></div>';
  h+='<div class="kv"><div><small>끼니</small><strong>'+esc(sg.meals)+'</strong></div><div><small>1회 양</small><strong>'+esc(sg.amt)+'</strong></div><div><small>분유 하루</small><strong>'+esc(sg.milk)+'</strong></div><div><small>고기</small><strong>'+esc(sg.meat)+'</strong></div><div><small>생쌀 : 물</small><strong>'+esc(sg.ratio)+'</strong></div><div><small>입자</small><strong>'+esc(sg.tex)+'</strong></div></div>';
  h+='<p class="sub">조리: '+esc(sg.cook)+'</p>';
  h+='<div><h3>이 단계 포인트</h3><ul>'+sg.pts.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  h+='<div><h3>하루 시간표</h3><ul class="mini-tl">'+sg.tl.map(function(x){return '<li><b>'+x[0]+'</b><span>'+esc(x[1])+'</span></li>';}).join('')+'</ul></div>';
  h+='<div><h3>새로 먹는 재료 '+news.length+'가지</h3><div class="ings">'+news.map(function(x){return '<span class="'+(x.star?'star':'')+'">'+(x.star?'★ ':'')+esc(x.n)+' '+md(x.t)+'</span>';}).join('')+'</div></div>';
  document.getElementById('stageCard').innerHTML=h;
  document.getElementById('stageList').innerHTML=STAGES.map(function(s,i){var cls='stage'+(i===cur&&T>=STAGES[0].s-14*D?' now':'')+(i===st.stage?' sel':'')+(T>s.e?' past':'');
    return '<li><button type="button" class="'+cls+'" data-i="'+i+'"><span class="no">'+s.no+'</span><span><b>'+esc(s.name)+(i===cur?' · 지금':'')+'</b><small>'+esc(s.meals+' · '+s.amt+' · '+s.ratio)+'</small></span><span class="pd">'+md(s.s)+'<br>– '+md(s.e)+'</span></button></li>';}).join('');
}
/* 더보기 */
function renderProfile(){document.getElementById('pName').value=prof.name;document.getElementById('pBirth').value=prof.birth;
  document.querySelectorAll('[data-sex]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.sex===prof.sex));});document.getElementById('pErr').hidden=true;}
var PAL=[['green','그린','#F4F7F6','#1F6F54','#E1F0EA'],['gray','그레이','#F5F6F7','#4A5361','#E6E9ED'],['blue','블루','#F3F7FC','#2E78A8','#E0EEF8'],['pink','핑크','#FCF5F8','#B9527C','#F8E4EC']];
function renderTheme(){document.getElementById('swatches').innerHTML=PAL.map(function(p){return '<button type="button" class="sw" data-pal="'+p[0]+'" aria-pressed="'+(palette===p[0])+'"><span class="pv" style="background:'+p[2]+'"><i style="background:'+p[3]+'"></i><i style="background:'+p[4]+'"></i><i style="background:#2557D6"></i></span><b>'+p[1]+'</b></button>';}).join('');}
function toast(m){var t=document.getElementById('toast');t.textContent=m;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(function(){t.hidden=true;},1800);}

/* 화면 전환 */
var MAIN=['cal','roadmap','recipe','more'], SUBS={day:1,profile:'아기 정보',theme:'테마',guide:'이유식 원칙',about:'앱 정보'}, pushed=false;
function setSub(t,s){document.getElementById('subTitle').textContent=t;document.getElementById('subSub').textContent=s||'';}
function show(v){
  ['cal','roadmap','recipe','more','day','profile','theme','guide','about'].forEach(function(k){document.getElementById('v-'+k).hidden=k!==v;});
  var sub=!!SUBS[v];document.getElementById('topbar').hidden=sub;document.getElementById('subbar').hidden=!sub;
  document.querySelectorAll('.tabbar button').forEach(function(b){if(b.dataset.view===st.hi)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  window.scrollTo(0,0);
}
function go(v){
  if(pushed){pushed=false;st.ignorePop=true;try{history.back();}catch(e){}}
  st.view=v;st.hi=v;
  if(v==='cal')renderCal();if(v==='roadmap')renderRoadmap();if(v==='recipe')renderRecipe();
  show(v);
}
function openSub(v,hi){
  st.view=v;if(hi)st.hi=hi;
  if(v==='day')renderDay();else setSub(SUBS[v],'');
  if(v==='profile')renderProfile();if(v==='theme')renderTheme();
  show(v);
  if(!pushed){try{history.pushState({sub:1},'');pushed=true;}catch(e){}}
}
function openDay(t,tab,hi){st.sel=clampT(t);st.tab=tab||null;openSub('day',hi||'cal');}
function closeSub(){var back=st.view==='day'?st.hi==='today'?'cal':st.hi:'more';if(st.view==='day'&&st.sel)st.mi=monthIdx(st.sel);st.view=back;st.hi=back;if(back==='cal')renderCal();show(back);}
window.addEventListener('popstate',function(){if(st.ignorePop){st.ignorePop=false;return;}if(SUBS[st.view]){pushed=false;closeSub();}});
document.getElementById('subBack').addEventListener('click',function(){if(pushed){pushed=false;st.ignorePop=true;try{history.back();}catch(e){}}closeSub();});
document.querySelector('.tabbar').addEventListener('click',function(e){var b=e.target.closest('[data-view]');if(!b)return;var v=b.dataset.view;
  if(v==='today'){if(pushed){pushed=false;st.ignorePop=true;try{history.back();}catch(err){}}openDay(TODAY,null,'today');return;}
  if(v==='recipe')st.rt=null;if(v==='roadmap')st.stage=null;if(v==='cal')st.mi=monthIdx(clampT(TODAY));go(v);});
document.getElementById('grid').addEventListener('click',function(e){var b=e.target.closest('[data-t]');if(b)openDay(+b.dataset.t,null,'cal');});
document.getElementById('day').addEventListener('click',function(e){var tb=e.target.closest('[data-tab]');if(tb){st.tab=tb.dataset.tab;renderDay();}});
function stepDay(k){var t=st.sel+k*D;if(t<S||t>END)return;st.sel=t;st.tab=null;renderDay();window.scrollTo(0,0);}
document.getElementById('dPrev').addEventListener('click',function(){stepDay(-1);});
document.getElementById('dNext').addEventListener('click',function(){stepDay(1);});
function moveMonth(k){var mi=st.mi+k;if(mi<0||mi>=MONTHS.length)return;st.mi=mi;renderCal();}
document.getElementById('mPrev').addEventListener('click',function(){moveMonth(-1);});
document.getElementById('mNext').addEventListener('click',function(){moveMonth(1);});
function stepRecipe(k){var a=cookDays(),i=a.indexOf(st.rt)+k;if(i<0||i>=a.length)return;st.rt=a[i];renderRecipe();window.scrollTo(0,0);}
document.getElementById('rPrev').addEventListener('click',function(){stepRecipe(-1);});
document.getElementById('rNext').addEventListener('click',function(){stepRecipe(1);});
document.getElementById('stageList').addEventListener('click',function(e){var b=e.target.closest('[data-i]');if(!b)return;st.stage=+b.dataset.i;renderRoadmap();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
document.getElementById('v-more').addEventListener('click',function(e){var b=e.target.closest('[data-sub]');if(b)openSub(b.dataset.sub,'more');});
document.getElementById('v-profile').addEventListener('click',function(e){var b=e.target.closest('[data-sex]');if(b)document.querySelectorAll('[data-sex]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});});
document.getElementById('profForm').addEventListener('submit',function(e){e.preventDefault();
  var n=document.getElementById('pName').value.trim(),bd=document.getElementById('pBirth').value,sx=(document.querySelector('[data-sex][aria-pressed="true"]')||{}).dataset,err=document.getElementById('pErr');
  if(!n){err.textContent='이름을 입력해 주세요.';err.hidden=false;return;}
  if(!/^\d{4}-\d{2}-\d{2}$/.test(bd)){err.textContent='생년월일을 선택해 주세요.';err.hidden=false;return;}
  prof={name:n,sex:(sx&&sx.sex)||'girl',birth:bd};LS.set('yj.profile',JSON.stringify(prof));applyProfile();renderAlerts();toast('저장했어요');renderProfile();});
document.getElementById('swatches').addEventListener('click',function(e){var b=e.target.closest('[data-pal]');if(!b)return;palette=b.dataset.pal;LS.set('yj.palette',palette);applyPalette();renderTheme();});
function swipe(el,fn){var sx=null,sy=null;el.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  el.addEventListener('touchend',function(e){if(sx==null)return;var dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)fn(dx<0?1:-1);sx=null;},{passive:true});}
swipe(document.getElementById('cal'),moveMonth);
swipe(document.getElementById('v-day'),stepDay);
document.getElementById('verLine').textContent='버전 '+VERSION+' · '+BUILD;
document.getElementById('verNo').textContent=VERSION;document.getElementById('verBuild').textContent=BUILD;
applyPalette();applyProfile();renderAlerts();go('cal');
/*PWA*/
})();
