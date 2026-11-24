from PIL import Image
from pathlib import Path
import sys

source = Image.open(sys.argv[1]).convert('RGBA')
out = Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
cuts = [(0, 610), (610, 1200), (1200, source.width)]
variants = [('tall', 170), ('medium', 144), ('young', 114)]
for (left, right), (name, height) in zip(cuts, variants, strict=True):
    piece = source.crop((left, 0, right, source.height))
    bounds = piece.getchannel('A').point(lambda alpha: 255 if alpha >= 96 else 0).getbbox()
    piece = piece.crop(bounds)
    width = round(piece.width * height / piece.height)
    piece = piece.resize((width, height), Image.Resampling.LANCZOS)
    piece.putalpha(piece.getchannel('A').point(lambda alpha: 255 if alpha >= 128 else 0))
    piece.save(out / f'myriadd_cypress_{name}.png', optimize=True)
