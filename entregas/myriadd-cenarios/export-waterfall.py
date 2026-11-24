from pathlib import Path
from PIL import Image
import json,sys

source=Path(sys.argv[1])
dest=Path(sys.argv[2])
dest.mkdir(parents=True,exist_ok=True)
metadata=json.loads(source.with_suffix('.json').read_text())
sheet=Image.open(source).convert('RGBA')
w,h,columns=96,122,10
frames=metadata['frames']
atlas=Image.new('RGBA',(w*columns,h*((len(frames)+columns-1)//columns)))
fade=Image.new('L',(w,h))
for y in range(h):
    alpha=round(255*(1-max(0,min(1,(y-80)/42))**1.35))
    fade.paste(alpha,(0,y,w,y+1))
from PIL import ImageChops
for i,frame in enumerate(frames):
    x,y=frame['frame']['x'],frame['frame']['y']
    part=sheet.crop((x+24,y+14,x+120,y+136))
    part.putalpha(ImageChops.multiply(part.getchannel('A'),fade))
    atlas.paste(part,(i%columns*w,i//columns*h))
atlas.save(dest/'myriadd_waterfall.png',optimize=True)
(dest/'myriadd_waterfall.json').write_text(json.dumps(dict(w=w,h=h,columns=columns,frames=len(frames),lip=[48,12],sheetWidth=26,sheetHeight=92,fps=30),indent=2)+'\n')
