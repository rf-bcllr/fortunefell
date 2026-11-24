"""Pixel-art inlay cut into a single course of warm limestone at the palace door."""
from pathlib import Path
from math import sin,cos,pi
from PIL import Image,ImageDraw
im=Image.new('RGBA',(178,27))
d=ImageDraw.Draw(im)
rim='#c2a178'
cream='#f0dfc5'
shadow='#d6c1ab'
d.ellipse((0,0,177,26),fill=rim)
d.ellipse((3,1,174,24),fill=cream)
# Two staggered rows of slabs, matching the width of the stones in the apron.
def joint(x,top,bottom):
    for y in range(top,bottom+1):
        xx=x+(y-top)//6
        if ((xx-89)/84)**2+((y-13)/11)**2<1:
            d.point((xx,y),fill=shadow)
for x in (20,68,116,164):joint(x,3,12)
for x in (42,90,138):joint(x,14,24)
d.line((11,13,166,13),fill='#e7d3ba')
for i in range(8):
    a=i*pi/4
    def pt(angle,r):
        return round(89+cos(angle)*r),round(13+sin(angle)*r*.18)
    peak=pt(a,63 if i%2==0 else 36)
    d.polygon([(89,13),pt(a-pi/8,13),peak],fill='#c49260')
    d.polygon([(89,13),peak,pt(a+pi/8,13)],fill='#d6a575')
assert set(im.getchannel('A').getdata())=={0,255}
im.save(Path(__file__).parent/'assets/myriadd/myriadd_palace_inlay.png')
