from pathlib import Path
from PIL import Image
import sys
here=Path(__file__).resolve().parent
src=Image.open(here/'native73.png').convert('RGBA')
ref=Image.open(here/'llewlas_actions.png').convert('RGBA').crop((0,0,68,52))
frames=[]
# Shared scale from the source crown/sole landmarks. Align the pelvis, not the spear or cloak edge.
scale=40/532
for n,pelvis in enumerate([282,811,1380,1905]):
 left=round(n*src.width/4);right=round((n+1)*src.width/4)
 cell=src.crop((left,0,right,src.height))
 bounds=cell.getchannel('A').point(lambda a:255 if a>=135 else 0).getbbox()
 sprite=cell.crop(bounds);sprite=sprite.resize(tuple(round(v*scale) for v in sprite.size),Image.Resampling.LANCZOS)
 sprite.putalpha(sprite.getchannel('A').point(lambda a:255 if a>=116 else 0))
 dest=Image.new('RGBA',(68,52));dest.alpha_composite(sprite,(32-round((pelvis-left-bounds[0])*scale),52-sprite.height))
 frames.append(dest)
atlas=Image.new('RGBA',(544,52))
for i,img in enumerate(frames*2):atlas.alpha_composite(img,(i*68,0))
atlas.save(here/'passo73.png')
dest=Path(sys.argv[1]) if len(sys.argv)>1 else here
def backdrop(img):
 bg=Image.new('RGB',img.size,'#483c4d');bg.paste(img,(0,0),img);return bg
proof=Image.new('RGB',(340,52))
for i,f in enumerate([ref]+frames):proof.paste(backdrop(f),(i*68,0))
proof.resize((1020,156),Image.Resampling.NEAREST).save(dest/'llewlas-comparacao.png')
seq=[backdrop(f).resize((272,208),Image.Resampling.NEAREST) for f in frames];seq[0].save(dest/'llewlas-passada.gif',save_all=True,append_images=seq[1:],duration=145,loop=0)
