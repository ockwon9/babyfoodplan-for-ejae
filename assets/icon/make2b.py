from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, random
N=1024
head=Image.open('head2.png')
def tex(img,cols,n=9000,seed=1,alpha=38):
    r=random.Random(seed); L=Image.new('RGBA',img.size,(0,0,0,0)); d=ImageDraw.Draw(L)
    for _ in range(n):
        x=r.uniform(0,N); y=r.uniform(0,N); l=r.uniform(10,26); a=math.radians(r.uniform(55,70))
        c=r.choice(cols); d.line([(x,y),(x+l*math.cos(a),y-l*math.sin(a))],fill=c+(r.randint(alpha//2,alpha),),width=2)
    img.alpha_composite(L); return img
def radial(c0,c1):
    im=Image.new('RGBA',(N,N)); px=im.load()
    for y in range(N):
        for x in range(0,N):
            t=min(1,math.hypot(x-N/2,y-N/2)/(N*0.72))
            px[x,y]=tuple(int(c0[i]+(c1[i]-c0[i])*t) for i in range(3))+(255,)
    return im
def linear(c0,c1):
    im=Image.new('RGBA',(N,N)); d=ImageDraw.Draw(im)
    for i in range(2*N):
        t=i/(2*N); c=tuple(int(c0[k]+(c1[k]-c0[k])*t) for k in range(3))
        d.line([(i,0),(0,i)],fill=c+(255,),width=2)
    return im
def heart(d,cx,cy,s,col):
    pts=[]
    for i in range(60):
        t=2*math.pi*i/60; x=16*math.sin(t)**3; y=13*math.cos(t)-5*math.cos(2*t)-2*math.cos(3*t)-math.cos(4*t)
        pts.append((cx+x*s/16,cy-y*s/16))
    d.polygon(pts,fill=col)
def star(d,cx,cy,s,col):
    pts=[]
    for i in range(10):
        r=s if i%2==0 else s*0.45; a=math.pi/2+i*math.pi/5
        pts.append((cx+r*math.cos(a),cy-r*math.sin(a)))
    d.polygon(pts,fill=col)
def place(bg,upright,scale=1.74,cx=300,cy=318):
    h=head
    if upright: h=h.rotate(19,resample=Image.BICUBIC,center=(cx,cy))
    h=h.resize((int(600*scale),)*2,Image.LANCZOS)
    ox=int(N/2-cx*scale); oy=int(N/2-cy*scale)+0
    al=h.split()[3]
    halo=Image.new('L',bg.size,0); halo.paste(al.point(lambda v:255 if v>150 else 0),(ox,oy)); halo=halo.filter(ImageFilter.MaxFilter(31)).filter(ImageFilter.GaussianBlur(28))
    white=Image.new('RGBA',bg.size,(255,255,255,0)); white.putalpha(halo.point(lambda v:int(v*0.75)))
    bg.alpha_composite(white); bg.alpha_composite(h,(ox,oy)); return bg
# 1 upright pink
b1=tex(radial((255,236,242),(247,196,214)),[(255,255,255),(240,170,195),(255,210,225)],seed=1)
b1=place(b1,True)
# 2 cream hearts stars
b2=tex(radial((255,248,236),(255,226,214)),[(255,255,255),(250,200,180),(255,230,200)],seed=2)
d=ImageDraw.Draw(b2); r=random.Random(11)
def rheart(cx,cy,s,col,rot,outline=False):
    pts=[]
    for k in range(80):
        t=2*math.pi*k/80; x=16*math.sin(t)**3; y=-(13*math.cos(t)-5*math.cos(2*t)-2*math.cos(3*t)-math.cos(4*t))
        a=math.radians(rot); X=x*math.cos(a)-y*math.sin(a); Y=x*math.sin(a)+y*math.cos(a)
        pts.append((cx+X*s/16,cy+Y*s/16))
    if outline: d.line(pts+[pts[0]],fill=col,width=max(4,int(s/7)),joint='curve')
    else: d.polygon(pts,fill=col)
HC=[(246,150,180,235),(255,190,205,235),(240,120,160,220),(255,205,170,235),(250,170,200,230),(255,214,120,220),(225,170,230,220)]
spots=[(115,140,40),(905,165,34),(110,830,38),(915,810,40),(195,525,24),(850,505,30),(470,85,26),(560,945,28),(75,420,30),(955,360,24),(260,70,18),(760,70,22),(60,640,20),(965,620,22),(300,955,20),(770,935,24),(175,300,18),(860,300,18),(140,700,16),(890,700,16)]
for k,(x,y,s) in enumerate(spots):
    rheart(x,y,s*1.15,HC[k%len(HC)],r.uniform(-25,25),outline=(k%4==3))
import sys
SC=float(sys.argv[1]) if len(sys.argv)>1 else 1.74
b2=place(b2,False,scale=SC)

b2.convert('RGB').save(sys.argv[2] if len(sys.argv)>2 else 'v2b.png')
S=300; sheet=Image.new('RGB',(2*S+120,S+80),(242,242,246))
im=b2.convert('RGB').resize((S,S),Image.LANCZOS)
m=Image.new('L',(S,S),0); ImageDraw.Draw(m).rounded_rectangle([0,0,S-1,S-1],68,fill=255); sheet.paste(im,(40,40),m)
c=Image.new('L',(S,S),0); ImageDraw.Draw(c).ellipse([0,0,S-1,S-1],fill=255); sheet.paste(im,(S+80,40),c)
sheet.save('preview2b.png')
