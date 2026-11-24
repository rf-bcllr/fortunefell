from PIL import Image, ImageDraw
from random import Random
from pathlib import Path
im=Image.new('RGBA',(96,48))
d=ImageDraw.Draw(im);r=Random(342)
for row,(y,h) in enumerate([(4,8),(12,11),(23,10),(33,7)]):
 for i in range(-1,5):
  x=i*24+(row%2)*12
  bottom=y+h-r.choice([0,1,2,5] if row==3 else [0,0,1])
  d.polygon([(x+2,y),(x+21,y),(x+23,y+2),(x+23,bottom-3),(x+20,bottom),(x+3,bottom),(x,bottom-2),(x,y+2)],fill='#a88d99')
  d.polygon([(x+2,y),(x+20,y),(x+22,y+2),(x+21,bottom-3),(x+18,bottom-2),(x+2,bottom-2)],fill=r.choice(['#ebddc8','#efdfcf','#e5d1c0','#efdfcd']))
  d.line([(x+2,y+1),(x+17,y+1)],fill='#fff3db')
  d.line([(x+12,y+2),(x+10,y+4),(x+8,y+4)],fill='#dbccbc')
for i in range(8):
 x=r.randrange(96); y=r.randrange(27,36)
 for j in range(r.randrange(3,9)):
  x+=r.choice([-1,0,1]);y+=1
  d.point((x,y),fill='#78674b')
  if j%2==0:d.rectangle((x-2,y,x,y+1),fill=r.choice(['#948c50','#b3ae72']))
im.save(Path(__file__).parent/'assets/myriadd/myriadd_garden_stone.png')
