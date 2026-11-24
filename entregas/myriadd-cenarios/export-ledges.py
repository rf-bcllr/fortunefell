"""Export the three terrace sprites with the violet rock and warm grass palette of Myriadd."""
from pathlib import Path
from PIL import Image
import numpy as np
root=Path(__file__).parent
src=Image.open(root/'ledge-source.png').convert('RGBA')
alpha=np.asarray(src)[:,:,3]
rows=np.flatnonzero((alpha>128).sum(axis=1)>src.width*.035)
groups=np.split(rows,np.flatnonzero(np.diff(rows)>5)+1)
groups=[g for g in groups if len(g)>src.height*.05]
assert len(groups)==3, [(int(g[0]),int(g[-1])) for g in groups]
tones=['29182e','39213d','502941','663347','814354','9a5360','ac6d66','936653','aa825f','bea282','d5bfa1','f0dcb6','faebc8','51432b','726139','968647','b7aa55','d4bd62','e8cf83','f2d7b1','c693a1','dbc0ca','ece1df','806782','685372']
pal=Image.new('P',(1,1))
colors=[v for tone in tones for v in bytes.fromhex(tone)]
pal.putpalette(colors+colors[:3]*((768-len(colors))//3))
for name,g in zip(['garden','terr','out'],groups):
    part=src.crop((0,max(0,int(g[0])-2),src.width,min(src.height,int(g[-1])+3)))
    part=part.crop(part.getchannel('A').point(lambda x:255 if x>115 else 0).getbbox())
    w=160
    h=round(w*part.height/part.width)
    part=part.resize((w,h),Image.Resampling.BOX)
    quant=part.convert('RGB').quantize(palette=pal,dither=Image.Dither.NONE).convert('RGBA')
    quant.putalpha(part.getchannel('A').point(lambda x:255 if x>=120 else 0))
    quant.save(root/'assets/myriadd'/f'myriadd_ledge_{name}.png')
    print(name,quant.size)
