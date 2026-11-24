"""Extract the complete illustrated threshold at twice the game's logical resolution."""
from PIL import Image,ImageDraw
from pathlib import Path
root=Path(__file__).parent
im=Image.open(root/'threshold-source.png').convert('RGB')
s=im.width/520
outline=[(114,101),(163,101),(172,95),(207,90),(237,88),(296,88),(332,91),(354,95),(370,101),(422,101),(422,123),(416,130),(420,144),(416,149),(417,179),(396,180),(389,176),(380,182),(358,181),(348,188),(341,182),(312,180),(303,174),(282,177),(272,172),(250,177),(226,177),(217,171),(201,178),(175,178),(163,182),(145,179),(136,187),(123,182),(119,165),(116,147)]
mask=Image.new('L',im.size)
ImageDraw.Draw(mask).polygon([(round(x*s),round(y*s)) for x,y in outline],fill=255)
im.putalpha(mask)
tile=im.crop(mask.getbbox()).resize((288,94),Image.Resampling.BOX)
tile.putalpha(tile.getchannel('A').point(lambda v:255 if v>=128 else 0))
tile.save(root/'assets/myriadd/myriadd_palace_inlay.png')
