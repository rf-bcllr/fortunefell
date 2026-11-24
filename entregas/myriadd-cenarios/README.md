# Cenários de Myriadd

- `assets/` contém os três panoramas originais em WebP sem perdas e as três variantes de cipreste em PNG com transparência.
- `cypress-source.png` é a folha original. `python export-cypress.py cypress-source.png assets` refaz os recortes dos três ciprestes.
- `shots/` contém capturas nativas do Jardim, dos Terraços e dos arredores do castelo.
- `test-results.json` registra a versão do HTML e as verificações dos mapas e das pontes.

Para rodar a verificação, copie `public/demos/v-demo-pixelfx/index.html` para esta pasta com o nome `jogo.html`, instale Playwright para Python e execute `python verify.py`. O roteiro usa Chromium em `/usr/bin/chromium` e serve a versão instrumentada em localhost.

A queda d'água vem de `water/waterfall` do PixelFX (MIT), adaptada em `assets/fortune-waterfall.js`. Para reexportar, copie o módulo para `src/fx/water/` no checkout indicado no aviso do ZIP e renderize com `node tools/render.mjs water/fortune-waterfall --sheet --bg none --fps 30 --zoom 1 --out /tmp/myriadd-fx`. Rode `python export-waterfall.py /tmp/myriadd-fx/water/fortune-waterfall/fortune-waterfall.png assets` para gerar a grade final com o fim da água desvanecido em névoa.
