from PIL import Image
from pathlib import Path
import sys

source = Image.open(sys.argv[1]).convert('RGBA')
out = Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
split = round(source.height * .34)
for key, top, bottom in [('wisps', 0, split), ('bank', split, source.height)]:
    cloud = source.crop((0, top, source.width, bottom))
    bounds = cloud.getchannel('A').point(lambda value: 255 if value >= 45 else 0).getbbox()
    cloud = cloud.crop(bounds)
    cloud.thumbnail((560, 300), Image.Resampling.LANCZOS)
    cloud.save(out / f'myriadd_cloud_{key}.png', optimize=True)
