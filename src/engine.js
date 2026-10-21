class Component extends DCLogic {
renderVals() {
var self = this, st = this.state || {};
var Y = parseInt(this.props.year || '2026', 10), M = parseInt(this.props.month || '11', 10);
var DAY = 86400000;
function U(y, m, d) { return Date.UTC(y, m - 1, d); }
var S = U(2026, 10, 29), TWO = U(2026, 12, 10), LATE = U(2027, 2, 5), DOL = U(2027, 5, 11), FINGER = U(2026, 12, 26);
var WD = ['일', '월', '화', '수', '목', '금', '토'];
var NEWS = ['쌀', '오트밀', '소고기', '애호박', '청경채', '양배추', '브로콜리', '밀가루', '단호박', '달걀', '감자', '땅콩버터', '당근', '양파', '무', '닭고기', '플레인 요거트', '배추', '검은콩', '시금치', '대구살', '현미', '새송이버섯', '두부', '수수', '부추', '참깨', '미역', '가자미살', '적채', '연근', '가지', '우엉', '동태살', '사과', '비트', '바나나', '파프리카', '표고버섯', '새우살', '쪽파', '배', '대파', '완두콩', '메밀', '돼지고기', '숙주나물', '블루베리', '아스파라거스', '호두 가루', '느타리버섯', '콜리플라워', '딸기', '콩나물', '대게살', '고구마', '키위', '아보카도', '귤', '흑미', '토마토', '망고', '근대', '양송이버섯', '아욱'];
var FRUIT = ['사과', '바나나', '배', '블루베리', '딸기', '키위', '아보카도', '귤', '망고'];
var GRAIN = ['쌀', '오트밀', '현미', '수수', '흑미'];
var MEAT = ['소고기', '닭고기', '돼지고기'];
var FISH = ['대구살', '가자미살', '동태살', '새우살', '대게살'];
var STAR = ['밀가루', '달걀', '땅콩버터', '플레인 요거트', '두부', '참깨', '메밀', '호두 가루', '대구살', '새우살', '대게살'];
var SPECIAL = { '밀가루': ['3g', '1작은술 그대로 넣기', '1/4작은술을 물 1큰술에 개어 전자레인지 20~30초 익혀 섞기 → 3일째 1작은술'], '달걀': ['1개', '풀어서 넣기, 끓으면서 완전히 익어요', '따로 12분 완숙 → 첫날 노른자·흰자 합쳐 1/4작은술, 3일째 1/4개'], '두부': ['40g', '손으로 으깨 넣기', '따로 1분 데쳐 → 첫날 1작은술, 3일째 15g'], '메밀': ['5g', '메밀가루로 넣기', '메밀가루 1/4작은술을 물에 개어 익혀 섞기 → 3일째 1작은술'], '땅콩버터': ['10g', '100% 제품, 데운 죽에 녹이기', '첫날 1/8작은술 → 3일째 1작은술, 데운 죽에 녹여서'], '참깨': ['한 꼬집/끼', '곱게 간 것을 얹기', '첫날 한 꼬집 → 3일째 1/2작은술, 곱게 갈아서'], '호두 가루': ['한 꼬집/끼', '아주 고운 가루를 얹기', '첫날 한 꼬집 → 3일째 1/2작은술, 아주 곱게'], '플레인 요거트': ['1~2큰술/일', '조리 없이 따로 먹이기', '첫날 1작은술 → 3일째 1큰술, 조리 없이'] };
var MNAME = { '소고기': '소고기 다짐육 (우둔·홍두깨)', '돼지고기': '돼지고기 다짐육 (안심)', '닭고기': '닭고기 다짐육 (가슴살)' };
var VLEAF = ['청경채', '시금치', '배추', '양배추', '근대', '아욱', '부추', '적채', '쪽파', '대파', '미역'], VHARD = ['단호박', '감자', '당근', '무', '연근', '우엉', '비트', '고구마'], VMUSH = ['새송이버섯', '표고버섯', '느타리버섯', '양송이버섯'];
var VTRIM = { '청경채': '잎만 떼어 씻기', '시금치': '잎만 떼어 씻기', '배추': '연한 잎만, 두꺼운 심 빼기', '양배추': '잎만, 두꺼운 심 빼기', '근대': '잎만 떼어 씻기', '아욱': '잎만, 껍질 벗겨 주무르듯 씻기', '부추': '연한 윗부분만', '적채': '잎만, 심 빼기', '쪽파': '흰 부분 위주로', '대파': '흰 부분만', '미역': '20분 불려 여러 번 헹구기', '단호박': '껍질·씨 빼기', '감자': '껍질 벗기고 싹 난 곳 도려내기', '당근': '껍질 벗기기', '무': '껍질 벗기기', '연근': '껍질 벗기기', '우엉': '껍질 긁어내기', '비트': '껍질 벗기기', '고구마': '껍질 벗기기', '애호박': '씨 많은 가운데는 빼고 껍질째', '브로콜리': '꽃송이 부분만', '콜리플라워': '꽃송이 부분만', '양파': '겉껍질 벗기기', '가지': '껍질 벗기기', '파프리카': '껍질·씨 빼기', '검은콩': '전날 밤 불려 껍질 벗기기', '완두콩': '꼬투리에서 빼 껍질 벗기기', '숙주나물': '머리·꼬리 떼기', '콩나물': '머리·꼬리 떼기', '토마토': '데쳐서 껍질·씨 빼기', '아스파라거스': '아래 단단한 부분 자르고 껍질 벗기기' };
function vMin(n) { return VHARD.indexOf(n) >= 0 ? 6 : (VLEAF.indexOf(n) >= 0 ? 1 : (VMUSH.indexOf(n) >= 0 ? 2 : 3)); }
function catOf(n) { if (GRAIN.indexOf(n) >= 0) return 'g'; if (MEAT.indexOf(n) >= 0) return 'm'; if (FISH.indexOf(n) >= 0) return 'f'; if (FRUIT.indexOf(n) >= 0) return 'p'; if (SPECIAL[n]) return 'A'; return 'v'; }
var MENU = [
['햅쌀 쌀죽', null, [], [], [], []],
['쌀 오트밀죽', null, [], [], [], []],
['소고기 쌀죽', '소고기', [], [], [], []],
['소고기 애호박죽', '소고기', ['애호박'], [], [], []],
['소고기 애호박 청경채죽', '소고기', ['애호박', '청경채'], [], [], []],
['소고기 청경채 양배추죽', '소고기', ['청경채', '양배추'], [], [], []],
['소고기 양배추 브로콜리죽', '소고기', ['양배추', '브로콜리'], [], [], []],
['소고기 브로콜리 애호박죽', '소고기', ['브로콜리', '애호박'], [], [], []],
['소고기 브로콜리 단호박죽', '소고기', ['브로콜리', '단호박'], [], [], []],
['소고기 단호박 애호박죽', '소고기', ['단호박', '애호박'], [], [], []],
['소고기 단호박 감자죽', '소고기', ['단호박', '감자'], [], [], []],
['소고기 감자 청경채 달걀죽', '소고기', ['감자', '청경채'], [], ['달걀'], []],
['소고기 감자 당근죽', '소고기', ['감자', '당근'], [], [], []],
['소고기 당근 양파죽', '소고기', ['당근', '양파'], [], [], []],
['소고기 무 애호박죽', '소고기', ['양파', '무', '애호박'], [], [], []],
['닭고기 당근 브로콜리죽', '닭고기', ['당근', '브로콜리'], [], [], []],
['소고기 단호박 청경채죽', '소고기', ['양파', '단호박', '청경채'], [], [], []],
['닭고기 배추 애호박죽', '닭고기', ['양파', '배추', '애호박'], [], [], []],
['소고기 단호박 검은콩죽', '소고기', ['양파', '단호박', '검은콩'], [], [], []],
['닭고기 시금치 배추죽', '닭고기', ['양파', '배추', '시금치'], [], [], []],
['대구살 단호박 애호박죽', '대구살', ['양파', '단호박', '애호박'], [], [], []],
['소고기 당근 단호박 현미죽', '소고기', ['양파', '당근', '단호박'], ['현미'], [], []],
['닭고기 감자 새송이죽', '닭고기', ['양파', '감자', '새송이버섯'], [], [], []],
['소고기 시금치 당근죽', '소고기', ['양파', '시금치', '당근'], [], [], []],
['대구살 두부 단호박 수수죽', '대구살', ['양파', '단호박'], ['수수'], ['두부'], []],
['닭고기 부추 애호박죽', '닭고기', ['양파', '부추', '애호박'], [], [], []],
['소고기 무 새송이죽', '소고기', ['양파', '무', '새송이버섯'], [], [], []],
['소고기 미역 새송이죽', '소고기', ['양파', '미역', '새송이버섯'], [], [], ['참깨']],
['가자미 시금치 두부죽', '가자미살', ['양파', '시금치'], [], ['두부'], []],
['닭고기 단호박 적채죽', '닭고기', ['양파', '단호박', '적채'], [], [], []],
['소고기 연근 시금치죽', '소고기', ['양파', '연근', '시금치'], [], [], ['참깨']],
['닭고기 가지 새송이죽', '닭고기', ['양파', '가지', '새송이버섯'], [], [], []],
['소고기 우엉 적채 현미죽', '소고기', ['양파', '적채', '우엉'], ['현미'], [], []],
['동태살 양배추 부추 두부죽', '동태살', ['양파', '양배추', '부추'], [], ['두부'], []],
['소고기 단호박 양배추 현미죽', '소고기', ['단호박', '양배추'], ['현미'], [], []],
['닭고기 비트 감자 수수죽', '닭고기', ['양파', '비트', '감자'], ['수수'], [], []],
['가자미 애호박 두부죽', '가자미살', ['양파', '애호박'], [], ['두부'], []],
['소고기 배추 파프리카죽', '소고기', ['양파', '배추', '파프리카'], [], [], []],
['소고기 연근 표고죽', '소고기', ['양파', '연근', '표고버섯'], [], [], ['참깨']],
['새우살 양배추 애호박죽', '새우살', ['양배추', '애호박'], [], [], []],
['닭고기 새송이 쪽파죽', '닭고기', ['새송이버섯', '쪽파', '애호박'], [], [], []],
['닭고기 표고 당근죽', '닭고기', ['양파', '표고버섯', '당근'], [], [], []],
['소고기 무 대파죽', '소고기', ['무', '대파'], [], [], ['참깨']],
['닭고기 완두콩 당근 현미죽', '닭고기', ['양파', '완두콩', '당근'], ['현미'], [], []],
['대구살 무 대파 두부죽', '대구살', ['무', '대파'], [], ['두부'], []],
['돼지고기 배추 대파죽', '돼지고기', ['배추', '대파'], [], [], []],
['소고기 양배추 숙주죽', '소고기', ['양배추', '숙주나물', '당근'], [], [], []],
['동태살 양배추 부추 두부죽', '동태살', ['양파', '양배추', '부추'], [], ['두부'], []],
['닭고기 아스파라거스 감자죽', '닭고기', ['양파', '아스파라거스', '감자'], [], [], []],
['돼지고기 가지 애호박죽', '돼지고기', ['양파', '가지', '애호박'], [], [], []],
['소고기 두부 느타리죽', '소고기', ['양파', '느타리버섯', '당근'], [], ['두부'], []],
['닭고기 콜리플라워 브로콜리죽', '닭고기', ['양파', '콜리플라워', '브로콜리'], [], [], []],
['돼지고기 애호박 당근죽', '돼지고기', ['양파', '애호박', '당근'], [], [], []],
['소고기 콩나물 무죽', '소고기', ['콩나물', '무', '대파'], [], [], ['참깨']],
['대게살 브로콜리 애호박죽', '대게살', ['양파', '브로콜리', '애호박'], [], [], []],
['닭고기 고구마 브로콜리죽', '닭고기', ['고구마', '브로콜리'], [], [], []],
['돼지고기 숙주 부추죽', '돼지고기', ['숙주나물', '부추', '당근'], [], [], []],
['소고기 시금치 표고죽', '소고기', ['양파', '시금치', '표고버섯'], [], [], ['참깨']],
['새우살 애호박 부추죽', '새우살', ['양파', '애호박', '부추'], [], [], []],
['소고기 흑미 대파죽', '소고기', ['대파', '감자'], ['흑미'], [], []],
['닭고기 토마토 양파죽', '닭고기', ['양파', '토마토', '애호박'], [], [], []],
['돼지고기 양배추 당근죽', '돼지고기', ['양배추', '당근'], [], [], []],
['소고기 근대 감자죽', '소고기', ['양파', '근대', '감자'], [], [], []],
['대구살 양송이 애호박죽', '대구살', ['양파', '양송이버섯', '애호박'], [], ['두부'], []],
['닭고기 아욱 감자죽', '닭고기', ['아욱', '감자'], [], [], []]];
var PH = [
{ s: U(2026, 10, 29), name: '초기 ①', R: 10, cube: 'in', m0: 20, m1: 60, meat: 10, base: 0.75, tex: '쌀알이 조금 남는 질감 있는 죽', por: '생쌀 1 : 물 10 (8배죽 수준)', cubeTex: '초기용 큐브(퓨레형)', vsize: '1cm 이하로 작게 썰기(칼날이 갈아줘요)', mode: '쌀알이 남는 죽 모드(건강죽 등)로 돌려요. 너무 거칠면 믹서를 3~5초만 더 돌려요.', b0: 210, b1: 180 },
{ s: U(2026, 11, 13), name: '초기 ②', R: 7.5, cube: 'in', m0: 60, m1: 80, meat: 12, base: 0.65, tex: '1~2mm 알갱이가 보이는 죽', por: '생쌀 1 : 물 7.5 (6배죽 수준)', cubeTex: '1~2mm 다짐 큐브', vsize: '1~2mm로 잘게 다지기', mode: '쌀알이 남는 죽 모드로 돌리고, 추가 믹서는 돌리지 않아요.', b0: 180, b1: 160 },
{ s: U(2026, 11, 25), name: '초기 ③', R: 6, cube: 'in', m0: 80, m1: 100, meat: 15, base: 0.6, tex: '2~3mm 알갱이(갈기 졸업)', por: '생쌀 1 : 물 6 (5배죽 수준)', cubeTex: '중기용 큐브(2~3mm)', vsize: '2~3mm로 다지기', mode: '쌀알이 남는 죽 모드로 돌리고, 추가 믹서는 돌리지 않아요.', b0: 160, b1: 140 },
{ s: U(2026, 12, 10), name: '중기 ①', R: 5, cube: 'after', m0: 90, m1: 120, meat: 10, base: 0.55, tex: '3~5mm 알갱이', por: '생쌀 1 : 물 5 (4배죽 수준)', cubeTex: '중기용 큐브(3~5mm)', vsize: '3~5mm로 다지기', mode: '쌀알이 남는 죽 모드로 돌려요. 채소는 칼날에 갈리지 않도록 따로 익혀 끝난 뒤에 넣어요.', b0: 150, b1: 120 },
{ s: U(2027, 1, 12), name: '중기 ②', R: 4.5, cube: 'after', m0: 120, m1: 150, meat: 13, base: 0.5, tex: '5~7mm 알갱이, 된죽', por: '생쌀 1 : 물 4.5 (된죽)', cubeTex: '후기용 큐브(5~7mm)', vsize: '5~7mm로 다지기', mode: '쌀알이 남는 죽 모드로 돌려요. 바닥에 눌어붙으면 다음엔 물을 10% 늘려요.', b0: 120, b1: 100 },
{ s: U(2027, 2, 5), name: '후기', R: 4, cube: 'after', m0: 120, m1: 150, meat: 15, base: 0.45, tex: '7mm~1cm 알갱이, 된죽', por: '생쌀 1 : 물 4 (된죽)', cubeTex: '후기용 큐브(7mm~1cm)', mode: '쌀알이 남는 죽 모드로 돌려요. 바닥에 눌어붙으면 다음엔 물을 10% 늘려요.', b0: 0, b1: 0 },
{ s: U(2027, 4, 12), name: '완료기', R: 4, cube: 'after', m0: 150, m1: 180, meat: 18, base: 0.4, tex: '1cm 알갱이, 된죽', por: '생쌀 1 : 물 4 (된죽)', cubeTex: '완료기용 큐브(1cm)', mode: '쌀알이 남는 죽 모드로 돌려요. 바닥에 눌어붙으면 다음엔 물을 10% 늘려요.', b0: 0, b1: 0 }];
function phOf(t) { var i = 0; for (var k = 0; k < PH.length; k++) { if (t >= PH[k].s) i = k; } return i; }
function frac(t, i) { var a = PH[i].s, b = i + 1 < PH.length ? PH[i + 1].s : U(2027, 5, 12); var f = (t - a) / Math.max(DAY, b - a - DAY); return f < 0 ? 0 : (f > 1 ? 1 : f); }
function jo(w, a, b) { var c = w.charCodeAt(w.length - 1); return w + ((c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28) ? a : b); }
function r5(x) { return Math.max(5, Math.round(x / 5) * 5); }
function r10(x) { return Math.round(x / 10) * 10; }
function mealG(t) { var i = phOf(t), p = PH[i]; return r5(p.m0 + (p.m1 - p.m0) * frac(t, i)); }
function fishPer(t) { return t < DOL ? 8 : 16; }
function bIdx(t) { return Math.floor(Math.round((t - S) / DAY) / 3); }
function bStart(b) { return S + b * 3 * DAY; }
function md(t) { var d = new Date(t); return (d.getUTCMonth() + 1) + '/' + d.getUTCDate(); }
function mdw(t) { var d = new Date(t); return d.getUTCFullYear() + '년 ' + (d.getUTCMonth() + 1) + '월 ' + d.getUTCDate() + '일 (' + WD[d.getUTCDay()] + ')'; }
function age(t) { var d = new Date(t), m = (d.getUTCFullYear() - 2026) * 12 + (d.getUTCMonth() + 1 - 5) - (d.getUTCDate() < 11 ? 1 : 0); var b0 = Date.UTC(2026, 4 + m, 11); return '생후 ' + m + '개월 ' + Math.round((t - b0) / DAY) + '일'; }
function idxOf(n) { return NEWS.indexOf(n); }
function menuOf(b) {
if (MENU[b]) return MENU[b];
var it = NEWS[b], pr = ['소고기', '닭고기', '돼지고기'][b % 3], v = [], gr = [], DEF = ['애호박', '양파', '당근', '양배추'];
if (it && catOf(it) === 'v') v.push(it);
if (it && catOf(it) === 'g') gr.push(it);
for (var q = 0; v.length < 2 && q < 4; q++) { var c = DEF[(b + q) % 4]; if (v.indexOf(c) < 0) v.push(c); }
return [pr + ' ' + v.join(' ') + (gr.length ? ' ' + gr[0] : '') + '죽', pr, v, gr, [], []];
}
function isFishRec(b) { var pr = menuOf(b)[1]; return !!pr && catOf(pr) === 'f'; }
function uses(b) {
var s = bStart(b), u = [];
for (var k = 0; k < 3; k++) { var d = s + k * DAY; u.push({ t: d, slot: d < TWO ? 'one' : 'am' }); }
for (var k2 = 0; k2 < 3; k2++) { var d2 = s + (3 + k2) * DAY; if (d2 >= TWO) u.push({ t: d2, slot: 'pm' }); }
return u;
}
function fishOnDay(t) { if (t < S) return 0; var b = bIdx(t), g = 0; if (isFishRec(b)) g += fishPer(t); if (t >= TWO && b > 0 && isFishRec(b - 1)) g += fishPer(t); return g; }
function fishWeek(t) { var g = 0; for (var k = 0; k < 7; k++) g += fishOnDay(t - k * DAY); return g; }
function fruitsBy(b) { var out = []; for (var q = 0; q <= b && q < NEWS.length; q++) { if (catOf(NEWS[q]) === 'p') out.push(NEWS[q]); } return out; }
var cache = {};
function batch(b) {
if (cache[b]) return cache[b];
var MN = menuOf(b), it = NEWS[b] || null, itc = it ? catOf(it) : '', s = bStart(b), i = phOf(s), p = PH[i];
var US = uses(b), nMeals = US.length, total = 0, base = 0, meatC = 0, fishRaw = 0, prot = MN[1], pc = prot ? catOf(prot) : '';
for (var k = 0; k < US.length; k++) { var pi = PH[phOf(US[k].t)], g = mealG(US[k].t); total += g; base += g * pi.base; if (pc === 'm') meatC += pi.meat; if (pc === 'f') fishRaw += fishPer(US[k].t); }
var tops = MN[2], grains = (i < 3 && b >= 1 ? ['오트밀'] : []).concat(MN[3]);
var topC = total - base - meatC - fishRaw * 0.8; if (topC < 0) topC = 0;
if (!tops.length) { base += topC; topC = 0; }
var mix = grains.length ? (i < 3 ? 0.2 : 0.4) : 0, cubeIn = p.cube === 'in' ? topC : 0;
var rice = Math.max(15, base / ((1 + 0.95 * p.R) * 0.92)), water = r10(Math.max(rice * p.R * 0.6, rice * p.R * 0.95 - 0.5 * cubeIn));
var IN = '기계에 함께', rows = [], inNames = [], introNote = '', totalIn = rice + water + cubeIn;
rows.push({ name: '햅쌀 (생쌀)' + (it === '쌀' ? ' · NEW' : ''), raw: r5(rice * (1 - mix)) + 'g', done: IN, prep: '씻어서 물기만 빼고 불리지 않기' });
for (var g2 = 0; g2 < grains.length; g2++) { var gn = grains[g2]; rows.push({ name: gn + (it === gn ? ' · NEW' : ''), raw: r5(rice * mix / grains.length) + 'g', done: IN, prep: gn === '오트밀' ? '그대로 넣기' : (gn === '수수' ? '씻어서 넣기' : '통곡물이라 전날 밤 물에 불려두기') }); }
rows.push({ name: '물', raw: water + 'g', done: IN, prep: p.por + ' · 햅쌀이라 5% 줄인 양' + (cubeIn ? ', 채소 수분만큼 뺀 양' : '') });
if (pc === 'm') { var mg = Math.max(10, Math.round(meatC / 0.75 / 10) * 10); totalIn += mg; rows.push({ name: MNAME[prot] + (it === prot ? ' · NEW' : ''), raw: mg + 'g', done: IN, prep: '10g 소분 큐브 ' + (mg / 10) + '개 · 전날 밤 냉장 해동 · 물에 풀어 넣으면 뭉치지 않아요' }); }
if (pc === 'f') { var fg = Math.round(fishRaw); totalIn += fg; rows.push({ name: (it === prot && STAR.indexOf(prot) >= 0 ? '★ ' : '') + prot + ' (조리 전 무게)' + (it === prot ? ' · NEW' : ''), raw: fg + 'g', done: IN, prep: '시판 생선 큐브나 순살, 가시 꼭 확인 · 전날 밤 냉장 해동 · 한 끼 ' + fishPer(s) + 'g꼴이라 한 주 생선 ' + (s < DOL ? '50' : '100') + 'g 이하로 맞춰져요' }); }
var share = tops.length ? topC / tops.length : 0;
var FRESH = s < LATE;
for (var t2 = 0; t2 < tops.length; t2++) { var tn = tops[t2]; if (p.cube === 'in') inNames.push(tn); rows.push({ name: tn + (FRESH ? ' (생채소)' : ' 큐브') + (it === tn ? ' · NEW' : ''), raw: Math.max(10, r5(share)) + 'g', done: p.cube === 'in' ? IN : (FRESH ? '데쳐서 다 된 뒤 섞기' : '다 된 뒤 섞기'), prep: FRESH ? ((VTRIM[tn] || '깨끗이 씻기') + ' → ' + p.vsize + (p.cube === 'in' ? '' : ' → 끓는 물에 ' + vMin(tn) + '분 데치기') + ' · 손질 후 무게') : (p.cubeTex + ' · 전날 밤 냉장 해동') }); }
for (var e2 = 0; e2 < MN[4].length; e2++) { var en = MN[4][e2]; inNames.push(en); rows.push({ name: en, raw: SPECIAL[en][0], done: IN, prep: SPECIAL[en][1] }); }
if (itc === 'A') { rows.push({ name: '★ ' + it + ' · NEW', raw: SPECIAL[it][0], done: '먹일 때 따로', prep: SPECIAL[it][2] }); introNote = '★ ' + jo(it, '은', '는') + ' 처음 먹는 재료라 레시피에 넣지 않고 이번 3일 동안 낮 끼니에 따로 줘요. ' + SPECIAL[it][2] + '.'; }
for (var e3 = 0; e3 < MN[5].length; e3++) { var pn = MN[5][e3]; rows.push({ name: pn + ' (선택)', raw: SPECIAL[pn][0], done: '먹이기 직전', prep: '토핑처럼 얹어도 되고 빼도 돼요' }); }
if (itc === 'p') { rows.push({ name: it + ' (생과일) · NEW', raw: '하루 20g', done: '점심 오트밀포리지', prep: '첫날 1~2작은술부터, 오트밀포리지에 으깨 얹기' }); introNote = '새 과일 ' + jo(it, '은', '는') + ' 점심 오트밀포리지에 첫날 1~2작은술부터 얹어 줘요.'; }
if (b >= 4) rows.push({ name: '카놀라유 (선택)', raw: '2~3방울/끼', done: '먹이기 직전', prep: '상온 보관, 데운 죽에 섞기' });
var am = US.filter(function (u) { return u.slot !== 'pm'; }), pmU = US.filter(function (u) { return u.slot === 'pm'; });
var steps = [];
if (prot || (tops.length && !FRESH)) steps.push('전날 밤: ' + [prot ? (pc === 'f' ? '생선 큐브' : '고기 큐브') : '', (tops.length && !FRESH) ? '채소 큐브' : ''].filter(function (x) { return x; }).join('와 ') + '를 냉장실로 옮겨 해동해요. 급하면 전자레인지 해동 30초.');
steps.push('햅쌀' + (grains.length ? '과 ' + grains.join('·') : '') + '을 씻어 물기를 빼요. 햅쌀은 불리지 않아요.');
if (FRESH && tops.length) {
  var vs = tops.slice().sort(function (a, b2) { return vMin(b2) - vMin(a); });
  if (p.cube === 'in') steps.push('채소(' + tops.join('·') + ')를 손질해 ' + p.vsize.replace('(칼날이 갈아줘요)', '') + '. 손질한 뒤 저울로 무게를 재요. 날것 그대로 기계에 넣으면 죽과 함께 익어요.');
  else steps.push('채소(' + tops.join('·') + ')를 손질해 ' + p.vsize.replace('다지기', '다져요') + '. 작은 냄비에 물을 끓여 단단한 채소부터 ' + vs.map(function (v) { return v + ' ' + vMin(v) + '분'; }).join(' → ') + ' 순서로 넣어 데치고, 체에 밭쳐 물기를 빼요. 죽이 되는 동안 하면 시간이 맞아요.');
}
steps.push('두유제조기에 쌀' + (grains.length ? '·잡곡' : '') + (prot ? ' → ' + (pc === 'f' ? '생선' : '고기') : '') + (inNames.length ? ' → ' + inNames.join('·') : '') + ' → 물 ' + water + 'g 순서로, 용기를 저울에 올린 채 영점을 맞춰 가며 넣어요. 총 약 ' + r10(totalIn) + 'g예요. 두유 MAX 선을 넘지 않는지 확인해요.');
steps.push(p.mode);
if (p.cube === 'after' && tops.length) steps.push('끝나면 ' + (FRESH ? '데친 채소(' : '해동한 채소 큐브(') + tops.join('·') + ')를 넣고 저은 뒤, 칼날이 돌지 않는 가열 모드로 3~5분 데워요.');
steps.push('바로 다른 용기로 옮기고, 기계는 곧장 물로 헹군 뒤 세척 모드를 돌려요. 바닥에 눌어붙기 쉬워요.');
steps.push(nMeals + '끼로 나눠요(한 끼 약 ' + r5(total / nMeals) + 'g). ' + (pmU.length ? (s >= LATE ? '아침' : '낮') + ' 끼니 ' + am.length + '개는 ' + md(am[0].t) + '~' + md(am[am.length - 1].t) + ', ' + (s >= LATE || pmU[0].t >= LATE ? '저녁' : '오후') + ' 끼니 ' + pmU.length + '개는 ' + md(pmU[0].t) + '~' + md(pmU[pmU.length - 1].t) + '에 먹어요. 날짜 라벨을 붙여요.' : md(am[0].t) + '~' + md(am[am.length - 1].t) + '에 한 끼씩 먹어요.'));
var store = ['1일차 분량만 냉장하고 나머지는 식히자마자 한 끼씩 냉동해요. 조리하고 6일 안에 먹어요.', '먹기 전날 밤 냉장실로 옮기거나 전자레인지로 김이 날 때까지 데운 뒤 체온 정도로 식혀요. 저어서 뜨거운 곳이 없는지 확인해요.'];
if (totalIn < 350) store.push('양이 적어요. 기계에 최소 물 눈금(MIN)이 있으면 쌀과 물을 같은 비율로 늘려 눈금을 맞추고, 남는 죽은 버려요.');
if (totalIn > 750) store.push('총 투입량이 1L 기계의 두유 MAX(약 750ml)를 넘어요. 용량이 작은 기계라면 두 번에 나눠 조리해요.');
if (it && itc !== 'A' && itc !== 'p') store.unshift((STAR.indexOf(it) >= 0 ? '★ ' : 'NEW ') + it + ': 레시피에 함께 들어가요. ' + md(s) + ' 첫 끼는 2~3숟가락만 먹여 보고 2~3시간 반응을 지켜봐요. 괜찮으면 양을 늘리고, 모자란 양은 분유로 채워요.');
if (introNote) store.unshift(introNote);
cache[b] = { name: MN[0], s: s, i: i, nMeals: nMeals, total: total, meatC: meatC, prot: prot, pc: pc, tops: tops, extras: MN[4], toppings: MN[5], rows: rows, steps: steps, store: store, it: it, itc: itc, am: am, pm: pmU, introNote: introNote };
return cache[b];
}
function oatOf(t) {
var b = bIdx(t), fr = fruitsBy(b), it = NEWS[b], i = phOf(t), oat = i >= 6 ? 20 : 15, f;
if (it && catOf(it) === 'p') f = it; else if (fr.length) f = fr[Math.round((t - S) / DAY) % fr.length];
return { g: oat * 7, text: '오트밀 ' + oat + 'g + 분유 탄 물 ' + (oat * 6) + 'ml → 전자레인지 1분 30초, 저어서 30초 더 → ' + (f ? f + ' 20g을 으깨 얹기' : '그대로') + ' (선택: 플레인 요거트 1큰술 또는 땅콩버터 1/3작은술)', fruit: f };
}
function dayInfo(t) {
var i = phOf(t), p = PH[i], f = frac(t, i), g = mealG(t), b = bIdx(t), A = batch(b), P = t >= TWO && b > 0 ? batch(b - 1) : null, rows = [];
function R(tm, lb, am) { rows.push({ time: tm, label: lb, amount: am }); }
if (t < TWO) { var bb = r10(p.b0 + (p.b1 - p.b0) * f); R('08:00', '분유', '210ml'); R('12:00', '이유식 · ' + A.name, g + 'g'); R('', '바로 이어서 분유', bb + 'ml'); R('16:00', '분유', '210ml'); R('19:30', '분유 → 밤잠', '210ml'); }
else if (t < LATE) { var mo = i === 3 ? 210 : 200, b2 = r10(p.b0 + (p.b1 - p.b0) * f); R('08:00', '분유', mo + 'ml'); R('12:00', '이유식 ① · ' + A.name, g + 'g'); R('', '이어서 분유', b2 + 'ml'); R('16:00', '이유식 ② · ' + P.name, g + 'g'); R('', '이어서 분유', b2 + 'ml'); R('19:30', '분유 → 밤잠', mo + 'ml'); }
else if (i === 5) { var O = oatOf(t); R('08:00', '아침 · ' + A.name, g + 'g'); R('', '이어서 분유', '180ml'); R('12:00', '점심 · 오트밀포리지' + (O.fruit ? ' + ' + O.fruit : ''), O.g + 'g'); R('16:00', '분유', '180ml'); R('18:00', '저녁 · ' + P.name, g + 'g'); R('19:30', '분유 → 밤잠', '210ml'); }
else { var O2 = oatOf(t); R('08:00', '아침 · ' + A.name, g + 'g'); R('', '이어서 분유', '150ml'); R('10:30', '간식', '50g'); R('12:00', '점심 · 오트밀포리지' + (O2.fruit ? ' + ' + O2.fruit : ''), O2.g + 'g'); R('15:00', '간식 + 분유', '50g · 150ml'); R('18:00', '저녁 · ' + P.name, g + 'g'); R('19:30', '분유(컵) → 밤잠', '200ml'); }
var ml = 0;
for (var k = 0; k < rows.length; k++) { var mm = /(\d+)ml/.exec(rows[k].amount); if (mm) ml += parseInt(mm[1], 10); }
var menu = [];
if (t < TWO) menu.push('오늘 메뉴: ' + A.name + ' (' + md(A.s) + ' 조리분)');
else { menu.push((t >= LATE ? '아침' : '낮 끼니') + ': ' + A.name + ' (' + md(A.s) + ' 조리분, 새 레시피)'); menu.push((t >= LATE ? '저녁' : '오후 끼니') + ': ' + P.name + ' (' + md(P.s) + ' 조리분, 직전 레시피)'); }
if (t >= LATE) menu.push('점심 오트밀포리지: ' + oatOf(t).text);
var fd = fishOnDay(t);
if (fd) menu.push('생선: 오늘 ' + fd + 'g, 최근 7일 합계 ' + fishWeek(t) + 'g (조리 전 무게, ' + (t < DOL ? '돌 전 주 50g' : '돌 이후 주 100g') + ' 이하)');
var tp = A.toppings.concat(P ? P.toppings : []).filter(function (x, q, arr) { return arr.indexOf(x) === q; });
menu.push('먹이기 직전(선택): 카놀라유 2~3방울' + (tp.indexOf('참깨') >= 0 ? ' · 참깨 한 꼬집' : ''));
var notes = [], d0 = A.s;
if (A.it && t === d0) {
if (A.itc === 'A') notes.push(A.introNote);
else if (A.itc === 'p') notes.push('NEW ' + A.it + ' 처음 먹는 날이에요. 오트밀포리지에 1~2작은술만 얹어 주고 2~3시간 반응을 지켜봐요.');
else notes.push((STAR.indexOf(A.it) >= 0 ? '★ ' : 'NEW ') + A.it + ' 처음 먹는 날이에요. 새 레시피는 2~3숟가락만 먹여 보고 2~3시간 동안 두드러기·구토·설사를 지켜봐요. 모자란 양은 분유로 채워요.');
} else if (A.it && t > d0) notes.push(A.it + ' 관찰 ' + (Math.round((t - d0) / DAY) + 1) + '일차예요. 이상 없으면 양을 늘려요.' + (A.itc === 'A' ? ' 오늘도 낮 끼니에 따로 줘요.' : ''));
notes.push(i <= 2 ? '물: 끼니 때 빨대컵으로 몇 모금' : '물: 끼니마다 컵으로 30~60ml');
if (t >= FINGER) notes.push('핑거푸드: 손가락으로 눌러 으깨지는 찐 채소·두부 스틱 2~3개');
notes.push('숟가락은 늘 아기 손에 쥐여줘요.');
return { rows: rows, ml: ml, menu: menu, notes: notes, i: i };
}
var MILE = { '10-29': '시작', '11-11': '만 6개월', '11-13': '6배죽', '11-25': '5배죽', '12-10': '중기·2끼', '12-26': '핑거푸드', '1-12': '된죽', '2-5': '후기·3끼', '4-12': '완료기', '5-11': '첫 돌' };
var INFO = { '2026-11': '10/29 8배죽 → 11/13 6배죽 → 11/25 5배죽(갈기 졸업) · 3일마다 새 재료 1 · 채소는 새 채소 + 직전 채소 · ★ 첫날은 평일', '2026-12': '12/10부터 하루 2끼 6끼 슬라이딩: 낮엔 새 레시피, 오후엔 직전 레시피 · 12/28 첫 생선 · 12/26 핑거푸드', '2027-1': '1/12부터 된죽(5~7mm) · 소고기·닭고기 번갈아, 생선은 돌 전 주 50g 이하 · 숟가락 연습', '2027-2': '2/5부터 하루 3끼: 아침 새 레시피, 점심 오트밀포리지, 저녁 직전 레시피 · 영유아검진 예약', '2027-3': '3/13 돼지고기 시작 · 오트밀포리지에 과일을 돌아가며 · 컵으로 물 마시기', '2027-4': '4/12 완료기(1cm) · 간식 2회 · 젖병보다 컵', '2027-5': '5/11 첫 돌 · 이후 생선 주 100g까지 · 돌 이후 우유 전환은 소아과와 상의' };
var mStart = U(Y, M, 1), mEnd = U(Y, M + 1, 1) - DAY;
var aStart = (Y === 2026 && M === 11) ? S : mStart;
var gStart = aStart - new Date(aStart).getUTCDay() * DAY, gEnd = mEnd + (6 - new Date(mEnd).getUTCDay()) * DAY;
var cells = [], phNames = [];
for (var t = gStart; t <= gEnd; t += DAY) {
var dt = new Date(t), mo = dt.getUTCMonth() + 1, dd = dt.getUTCDate(), dow = dt.getUTCDay();
if (t < aStart || t > mEnd || t < S) { cells.push({ show: false, blank: true }); continue; }
var pn = PH[phOf(t)].name; if (phNames.indexOf(pn) < 0) phNames.push(pn);
var key = mo + '-' + dd, b = bIdx(t), it = NEWS[b], d0 = bStart(b), cook = t === d0;
var isFirst = !!it && cook, obs = (it && t > d0) ? it + ' 관찰 ' + (Math.round((t - d0) / DAY) + 1) + '일차' : '';
var g = mealG(t), sum = cook ? batch(b).name : (t < TWO ? '이유식 1회 · ' + g + 'g' : (t < LATE ? '2끼 · 각 ' + g + 'g' : '3끼 · 오트밀 1'));
cells.push({ show: true, blank: false, dayText: (t < mStart ? mo + '/' + dd : String(dd)), sun: dow === 0, wk: dow !== 0, mile: !!MILE[key], mileText: MILE[key] || '', cook: cook, fish: fishOnDay(t) > 0, isNew: isFirst && STAR.indexOf(it) < 0, isNewA: isFirst && STAR.indexOf(it) >= 0, label: isFirst ? it : '', isObs: !!obs, obsText: obs, sumText: sum, aria: md(t) + ' 자세히 보기', pick: (function (tt, ck) { return function () { self.setState({ sel: tt, tab: ck ? 'rec' : 'feed' }); }; })(t, cook) });
}
var mid = Math.max(aStart, U(Y, M, 15)), di0 = dayInfo(mid);
var routine = di0.rows.filter(function (r) { return r.time; }).map(function (r) { return r.time + ' ' + r.label.split(' · ')[0]; }).join(' · ');
var out = { cells: cells, title: (Y === 2026 && M === 11) ? '2026. 10–11' : Y + '. ' + (M < 10 ? '0' : '') + M, phaseText: phNames.join(' → '), routine: routine, info: INFO[Y + '-' + M] || '', open: false, mTitle: '', mSub: '', isCook: false, tabRecOn: false, tabRecOff: false, tabFeedOn: false, tabFeedOff: false, showFeed: false, showRec: false, feedRows: [], feedTotal: '', menu: [], notes: [], rTitle: '', rSub: '', rRows: [], rSteps: [], rStore: [] };
out.close = function () { self.setState({ sel: null }); };
out.goFeed = function () { self.setState({ tab: 'feed' }); };
out.goRec = function () { self.setState({ tab: 'rec' }); };
var sel = st.sel;
if (sel && sel >= aStart && sel <= mEnd) {
var di = dayInfo(sel), sb = bIdx(sel), isCook = sel === bStart(sb), tab = isCook ? (st.tab || 'rec') : 'feed', B = batch(sb), PP = PH[di.i];
out.open = true; out.mTitle = mdw(sel); out.mSub = age(sel) + ' · ' + PP.name + ' · ' + PP.por + ' · 입자: ' + PP.tex;
out.isCook = isCook; out.tabRecOn = tab === 'rec'; out.tabRecOff = tab !== 'rec'; out.tabFeedOn = tab === 'feed'; out.tabFeedOff = tab !== 'feed';
out.showFeed = tab === 'feed'; out.showRec = isCook && tab === 'rec';
out.feedRows = di.rows; out.feedTotal = '분유 하루 합계 약 ' + di.ml + 'ml';
out.menu = di.menu.map(function (x) { return { t: x }; }); out.notes = di.notes.map(function (x) { return { t: x }; });
out.rTitle = B.name + ' · ' + md(B.s) + ' 조리 · ' + B.nMeals + '끼분 · 두유제조기'; out.rSub = '완성 약 ' + r10(B.total) + 'g · ' + (B.it ? '새 재료 ' + B.it : '새 재료 없음');
out.rRows = B.rows; out.rSteps = B.steps.map(function (x, k) { return { t: (k + 1) + '. ' + x }; }); out.rStore = B.store.map(function (x) { return { t: x }; });
}
return out;
}
}
