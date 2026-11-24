# Cenários de Myriadd

- `assets/` contém os três panoramas originais usados na demo, exportados em WebP sem perdas.
- `shots/` contém capturas nativas do Jardim, dos Terraços e dos arredores do castelo.
- `test-results.json` registra a versão do HTML e as verificações dos mapas e das pontes.

Para rodar a verificação, copie `public/demos/v-demo-pixelfx/index.html` para esta pasta com o nome `jogo.html`, instale Playwright para Python e execute `python verify.py`. O roteiro usa Chromium em `/usr/bin/chromium` e serve a versão instrumentada em localhost.
