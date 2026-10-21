"""src/ 를 합쳐 index.html(홈 화면 웹앱)과 dist/artifact.html(Claude 페이지용)을 만든다.
사용: python3 build.py"""
import os, re
H=os.path.dirname(os.path.abspath(__file__)); S=lambda f: open(os.path.join(H,'src',f),encoding='utf-8').read()
page=S('page.html').replace('/*UI*/',S('ui.js'))
eng=S('engine.js'); a="aria: md(t) + ' 자세히 보기',"
assert a in eng; eng=eng.replace(a,'t: t, '+a)
full=page.replace('/*ENGINE*/',eng)
os.makedirs(os.path.join(H,'dist'),exist_ok=True)
open(os.path.join(H,'dist','artifact.html'),'w',encoding='utf-8').write(full.replace('/*PWA*/',''))
pwa="if('serviceWorker' in navigator&&window.top===window.self&&location.protocol==='https:'){navigator.serviceWorker.register('sw.js').catch(function(){});}"
b=full.replace('/*PWA*/',pwa); k=b.index('<header')
open(os.path.join(H,'index.html'),'w',encoding='utf-8').write(S('head.html')+b[:k]+'</head><body>\n'+b[k:]+'\n</body></html>\n')
v=re.search(r"VERSION='([^']+)'",S('ui.js')).group(1)
sw=open(os.path.join(H,'sw.js'),encoding='utf-8').read()
open(os.path.join(H,'sw.js'),'w',encoding='utf-8').write(re.sub(r"const C='[^']*'","const C='yijae-v"+v+"'",sw))
print('built v'+v)
