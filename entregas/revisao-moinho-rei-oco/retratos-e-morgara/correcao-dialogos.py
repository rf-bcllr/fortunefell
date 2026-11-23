"""Portrait runtime fixes; changes no embedded artwork. CLI INPUT OUTPUT."""
from pathlib import Path
import re,sys
MARK='/* Portrait runtime audit fixes v1 */'
PATCH='''
/* Portrait runtime audit fixes v1 */
{
 const beforePortraitAudit=installFinalArt;
 installFinalArt=function(){
  beforePortraitAudit();
  const previous=portrait;
  const aliases={iomadh_river_local:'dwellerA',iomadh_river_guard:'gateGuardI'};
  portrait=function(name,rings){return previous(aliases[name]||name,rings);};
  if(window.__ff)window.__ff.portrait=portrait;
 };
}
'''
def apply(s):
 if MARK in s:return s
 # Destination dimensions required for 256px expression sources and future exports.
 target="} else x.drawImage(img, 0, 36);"
 if s.count(target)!=1:raise ValueError('Portrait drawCard anchor missing/ambiguous')
 s=s.replace(target,"} else x.drawImage(img, 0, 36, 128, 128);",1)
 # Pódhraic new portraits are composed 128x128 already; legacy zoom clips new artwork.
 s=s.replace(", podhraic: [16, 0, 98]",'')
 match=next((m for m in re.finditer(r'<script\b[^>]*>([\s\S]*?)</script>',s,re.I) if 'const G = {' in m[1] and 'const Snd = {' in m[1]),None)
 if not match:raise ValueError('Main game IIFE missing')
 point=match.start(1)+match[1].rfind('})();')
 return s[:point]+PATCH+s[point:]
if __name__=='__main__':
 if len(sys.argv)!=3:raise SystemExit('python runtime.py INPUT.html OUTPUT.html')
 src,dst=map(Path,sys.argv[1:]);assert src.resolve()!=dst.resolve(),'Refuse input overwrite';dst.write_text(apply(src.read_text()))
