from PIL import Image, ImageDraw, ImageFilter, ImageChops
import math, random
src=Image.open('/root/.claude/uploads/990bfe66-27ae-5204-b81f-7b5080d7357a/33887c33-image.png').convert('RGB').crop((380,230,980,830))
cut=Image.open('cut.png')
def spline(P,n=24):
    out=[];L=len(P)
    for i in range(L):
        p0,p1,p2,p3=P[(i-1)%L],P[i],P[(i+1)%L],P[(i+2)%L]
        for k in range(n):
            t=k/n;t2=t*t;t3=t2*t
            out.append(tuple(0.5*((2*p1[j])+(-p0[j]+p2[j])*t+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3) for j in range(2)))
    return out
C=[(292,92),(340,95),(383,112),(417,137),(438,166),(451,200),(458,240),(460,280),(455,318),(446,350),(440,378),(437,400),(431,422),(419,445),(398,470),(368,495),(338,523),(302,538),(264,544),(222,535),(184,510),(156,480),(139,447),(132,405),(138,362),(148,318),(158,272),(176,224),(203,172),(242,124)]
m=Image.new('L',(600,600),0);ImageDraw.Draw(m).polygon(spline(C),fill=255)
solid=m.filter(ImageFilter.GaussianBlur(1.6))
# 자연스러운 머리카락 잔털: 윗부분은 rembg 알파를 조금 바깥까지 허용
fr=Image.new('L',(600,600),0);ImageDraw.Draw(fr).polygon([(200,40),(520,40),(520,250),(470,260),(445,160),(330,75),(230,100)],fill=255)
fr=fr.filter(ImageFilter.GaussianBlur(8))
outer=ImageChops.multiply(cut.split()[3].point(lambda v:0 if v<60 else v),fr)
alpha=solid
img=src.convert('RGBA')
# 숱 보강: 밝은 두피 부분에 머리결 방향으로 옅은 선
hair=Image.new('L',(600,600),0)
H=[(175,250),(185,215),(205,175),(245,135),(300,112),(360,118),(410,140),(440,175),(458,215),(462,260),(452,292),(432,250),(405,218),(370,203),(325,198),(285,203),(245,215),(205,238)]
ImageDraw.Draw(hair).polygon(spline(H,16),fill=255); hair=hair.filter(ImageFilter.GaussianBlur(10))
px=src.load(); cols=[]
for y in range(100,200,3):
    for x in range(240,420,3):
        r,g,b=px[x,y]
        if r+g+b<330: cols.append((r,g,b))
r=random.Random(3)
st=Image.new('RGBA',(600,600),(0,0,0,0)); d=ImageDraw.Draw(st)
for _ in range(4000):
    x=r.uniform(170,465); y=r.uniform(110,300)
    if hair.getpixel((int(x),int(y)))<60: continue
    br=sum(px[int(x),int(y)])/3
    if br<170: continue
    c=r.choice(cols); ang=math.radians(r.uniform(-25,5)+ (x-300)*0.18)
    l=r.uniform(14,34); pts=[]
    for k in range(6):
        t=k/5; pts.append((x+math.cos(ang)*l*t, y+math.sin(ang)*l*t + 3*math.sin(t*3)))
    d.line(pts,fill=c+(r.randint(70,140),),width=r.choice([1,1,2]))
st=st.filter(ImageFilter.GaussianBlur(0.6))
sa=ImageChops.multiply(st.split()[3],hair); st.putalpha(sa)
img.alpha_composite(st)
img.putalpha(alpha)
img.save('head2.png')
bg=Image.new('RGBA',(600,600),(40,160,90,255)); bg.alpha_composite(img); bg.crop((100,30,580,570)).convert('RGB').resize((720,810)).save('head2view.png')
