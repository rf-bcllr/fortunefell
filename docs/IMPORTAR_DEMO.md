# Importar a demo original

A fonte indicada pelo autor é o projeto completo e o ZIP de originais do site existente, ou um pacote mais recente da outra conta. Não reconstruir o jogo de um HTML antigo quando existir base mais nova. Conferir manifesto, hash e conteúdo antes de escolher a base. O handoff menciona v45 pública e v46 local, não prova que a v46 foi publicada.

1. Recupere o projeto completo fora de public/. Confira cada caminho do ZIP antes de extrair (sem caminhos absolutos ou `..`) e preserve o pacote original. Compare com a versão mais recente da outra conta.
2. Leia o README e os scripts do projeto importado. O handoff menciona `node tools/build.mjs`, `node --check tools/.bundle-check.js` e `node tools/validate.mjs`; execute-os na pasta correta depois de confirmar que pertencem à base atual.
3. Execute testes pertinentes e faça playtest de navegador. Conserve a engine, flags, rotas, identidade dos personagens e entregas já aprovadas. O portal não precisa de outra engine.
4. Para um HTML offline autocontido validado, copie apenas o bundle público aprovado como `public/demos/v46/index.html` (ou o número real). Se houver assets externos, copie as dependências públicas mantendo caminhos relativos. Não inclua originais de arte, PDFs internos, credenciais nem documentos com spoilers.
5. Adicione uma entrada em data/releases.json:

```json
{
  "version": "v46",
  "entry": "demos/v46/index.html",
  "commit": "SHA real da base do jogo",
  "summary": "Descrição do que esta versão contém",
  "checks": "Comandos, resultados e playtest realmente executados; explicitar limitações"
}
```

A versão acima é somente exemplo. Não registre v46 sem verificar os arquivos. Preserve as demos anteriores quando adicionar uma versão nova.

6. Valide o portal e confira a demo servida sob um subdiretório equivalente a `/fortunefell/`: caminhos absolutos `/assets/...` costumam falhar em GitHub Pages de projeto. Confira imagem, áudio, input, saves e console; a troca de domínio não transfere automaticamente localStorage do site antigo.
7. Atualize FF-001 e FF-002 conforme o que foi realmente comprovado. Integre por PR, confira Actions e teste o endereço público antes de declarar publicação concluída.

GitHub Pages serve conteúdo estático. Se a base recuperada usar backend, identifique essa dependência antes de publicar; não inclua segredos no HTML. Consulte os limites atuais do GitHub antes de enviar pacotes grandes; mantenha masters fora do bundle da demo.
