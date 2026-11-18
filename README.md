# Fortune Fell — demo e desenvolvimento

Portal estático para testar versões da demo e acompanhar duas contas do Codex trabalhando com o mesmo usuário GitHub.

**Estado atual:** estrutura preparada; o código e os assets do jogo ainda não foram importados. Nenhuma demo é inventada para preencher essa ausência. O handoff relata uma v45 pública e mudanças locais v46, ainda sem verificação nesta conta.

## Rodar o portal

Python 3.12 e Node 24, sem dependências adicionais:

```sh
python -m unittest discover -s tests -v
node --check public/app.js
python tools/build_portal.py
python -m http.server 8000 --directory site --bind 0.0.0.0
```

O servidor acima é para desenvolvimento local. Os arquivos gerados ficam em site/ e não são commitados.

## Publicar

1. Envie esta base para a branch main de rf-bcllr/fortunefell.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**. Se necessário, habilite Actions nas configurações do repositório.
3. Execute o workflow **Portal e GitHub Pages**, ou faça push em main.
4. Confira o job deploy e a URL retornada pelo ambiente github-pages. A URL esperada, caso o GitHub mantenha o padrão de projeto, é `https://rf-bcllr.github.io/fortunefell/`; ela só é considerada ativa após resposta verificada.

Pull requests executam os testes e disponibilizam o portal como artifact para download. Não recebem uma URL pública de preview. A publicação pública ocorre após integração em main. Não configure aprovação por um segundo usuário se as duas contas Codex usam o mesmo usuário GitHub: elas não são revisores independentes para o GitHub.

## Conteúdo

- data/tasks.json: fila única, responsável, prioridade, estado e evidência.
- data/releases.json: versões jogáveis importadas, em ordem da mais antiga à mais recente; a última é a demo principal.
- public/: somente material aprovado para acesso público, incluindo demos versionadas.
- tools/build_portal.py: valida dados, escapa textos e monta o portal.
- docs/COLABORACAO.md: coordenação das duas contas.
- docs/IMPORTAR_DEMO.md: importação da base original sem refazer o jogo.
- docs/CONTEXTO.md: referências recebidas e incertezas.

O site é uma visão de leitura dos registros do commit publicado. Alterações feitas numa conta só chegam à outra após commit/push e integração. Nenhum token é incluído no navegador e nenhum backend adicional é necessário.

## Downloads de assets

[Baixar pacote completo](https://github.com/rf-bcllr/fortunefell/raw/refs/heads/entrega-assets/entregas/fortune-fell-todos-assets-e-documentacao.zip) · [Pacote leve](https://github.com/rf-bcllr/fortunefell/raw/refs/heads/entrega-assets/entregas/fortune-fell-assets-e-instrucoes.zip)

O portal destaca os downloads, as fontes separadas e o progresso. Os assets ainda precisam ser integrados à demo; Llewlás, Llúpin e estados adicionais do boneco continuam na fila.
