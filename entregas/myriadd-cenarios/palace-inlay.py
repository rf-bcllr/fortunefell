"""Draw the Myriadd threshold as cut stones in the perspective of the palace steps."""
from PIL import Image, ImageDraw
import math, random
from pathlib import Path
r=random.Random(11)
im=Image.new('RGBA',(240,56))
d=ImageDraw.Draw(im)
cx,cy=120,27
def point(angle,radius):
    return (round(cx+math.cos(angle)*radius),round(cy+math.sin(angle)*radius*.217))
def sector(radius,inner,start,end):
    return [point(start+(end-start)*i/7,radius) for i in range(8)]+[point(start+(end-start)*i/7,inner) for i in reversed(range(8))]
for ring,(outer,inner,count,tones) in enumerate([
    (102,91,32,['#c5ab96','#d1bba1','#d8c4a9']),
    (91,87,24,['#c29752','#dbb772','#be975b']),
    (87,43,20,['#e2cfae','#e8d7b8','#dac6a8','#e3cfb3']),
    (43,0,14,['#e3cfb5','#e6d2b5','#decaaf'])]):
    for i in range(count):
        a=(i+ring*.37)*math.tau/count
        b=a+math.tau/count
        d.polygon(sector(outer,inner,a,b),fill=r.choice(tones))
        if ring!=3:d.line([point(a,inner),point(a,outer)],fill='#ad9789',width=1)
        if ring==0:d.line([point(a+.011,outer-1),point(b-.01,outer-1)],fill='#e7d4b9',width=1)
for i in range(8):
    a=i*math.pi/4
    tip=point(a,76 if i%2==0 else 61)
    l=point(a-math.pi/8,20);right=point(a+math.pi/8,20)
    d.polygon([(cx,cy),l,tip],fill='#a77c40')
    d.polygon([(cx,cy),tip,right],fill='#dbb66b')
    d.line([l,tip],fill='#f2d99b')
d.ellipse((115,25,125,29),fill='#e6c379',outline='#a27841')
im.save(Path(__file__).parent/'assets/myriadd/myriadd_palace_inlay.png')
