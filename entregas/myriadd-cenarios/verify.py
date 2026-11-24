from base64 import b64decode
from pathlib import Path
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
import hashlib
import json
import re
from playwright.sync_api import sync_playwright

root=Path(__file__).parent
raw=(root/'jogo.html').read_bytes()
html=raw.decode()
script=next(m for m in re.finditer(r'<script\b[^>]*>([\s\S]*?)</script>',html,re.I) if 'const G = {' in m[1] and 'const Snd = {' in m[1])
point=script.start(1)+script[1].rindex('})();')
instrumented=(html[:point]+(root/'audit.js').read_text()+html[point:]).encode()

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type','text/html; charset=utf-8')
        self.send_header('Content-Length',str(len(instrumented)))
        self.end_headers()
        self.wfile.write(instrumented)
    def log_message(self,*args): pass

server=ThreadingHTTPServer(('127.0.0.1',0),Server)
Thread(target=server.serve_forever,daemon=True).start()
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':800,'height':450})
    errors=[]
    page.route('https://**/*',lambda route:route.abort())
    page.on('pageerror',lambda error:errors.append(str(error)))
    page.on('pageerror',lambda error:print('pageerror',error,flush=True))
    page.on('console',lambda m:print(m.type,m.text[:280],flush=True) if m.type=='error' else None)
    page.add_init_script('const raf=requestAnimationFrame;window.requestAnimationFrame=fn=>raf(t=>{if(!window.freeze)fn(t);});')
    page.goto(f'http://127.0.0.1:{server.server_port}/',wait_until='domcontentloaded',timeout=60000)
    page.wait_for_function("window.audit&&document.getElementById('boot').hidden",timeout=60000)
    result=page.evaluate((root/'verify.js').read_text())
    shots=root/'shots'
    shots.mkdir(exist_ok=True)
    for name,buf in result.pop('captures').items():
        (shots/(name+'.png')).write_bytes(b64decode(buf))
    assert not errors,errors
    result['sha256']=hashlib.sha256(raw).hexdigest()
    (root/'test-results.json').write_text(json.dumps(result,indent=2,ensure_ascii=False))
    print(result)
