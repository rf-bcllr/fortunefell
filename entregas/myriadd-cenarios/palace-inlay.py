"""Brass inlay laid into the purple paving visible through the palace arch."""
from pathlib import Path
from math import pi, sin, cos
from PIL import Image, ImageDraw

im = Image.new('RGBA', (112, 32))
pen = ImageDraw.Draw(im)
def point(angle, radius):
    return round(56+radius*cos(angle)), round(16+radius*.26*sin(angle))
# Open joints let the underlying paving show through the band.
for sector in range(12):
    start = sector*pi/6
    line = [point(start+k*pi/144, 49) for k in range(1,23)]
    pen.line(line, fill=(219,164,98,192))
for ray in range(8):
    a = ray*pi/4
    tip = point(a,39 if ray%2==0 else 29)
    pen.polygon([(56,16),point(a-pi/8,9),tip],fill=(217,159,77,221))
    pen.polygon([(56,16),tip,point(a+pi/8,9)],fill=(170,112,76,202))
im.save(Path(__file__).parent/'assets/myriadd/myriadd_palace_inlay.png')
