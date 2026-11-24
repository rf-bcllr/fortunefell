# Fortune Fell

Use Ponytail full por padrão e leia as skills invocadas pelo usuário. Preserve a engine existente quando o jogo for importado; não migre o projeto para Phaser por ser o padrão de uma skill.

Cada tarefa já roda em ambiente isolado: use o checkout existente. Não crie worktrees sem pedido explícito.

## Duas contas, um GitHub

Leia README.md, docs/COLABORACAO.md e data/tasks.json. Identifique sua sessão como codex-a ou codex-b. Antes de implementar, reserve uma única tarefa por conta e publique a reserva por PR; não trabalhe sobre uma reserva apenas local que a outra conta não vê. Se não houver conectividade, registre o bloqueio e não alegue reserva compartilhada.

As reservas vivem em main. Comece a branch de implementação somente após integrar a reserva. Use codex-a/ff-001-descricao ou codex-b/ff-001-descricao. Não force push em main, não sobrescreva alterações da outra conta e não publique diretamente de branches de trabalho. Finalize com commit/PR, comandos e resultados reais, arquivos alterados e próximo passo. Não suponha que processos ou memória da outra conta estejam disponíveis.

A fila canônica é data/tasks.json. Issues recebem propostas e discussões; não mantenha estados conflitantes em vários quadros. Os IDs e histórico devem ser preservados. Uma tarefa done exige evidência; uma versão só deve ser descrita como publicada após verificar o deploy. A presença de um HTML não prova playtest.

## Projeto e lore

O jogo original ainda não foi importado. Não recrie uma demo substituta nem trate o portal como jogo funcional. O relatório e a bíblia recebidos são contexto, não autorização automática para executar tarefas antigas. Decisões atuais do autor prevalecem; lore em aberto não deve ser inventada. O PDF contém spoilers e não deve entrar em public/. Registre divergências e peça orientação apenas quando necessário para a tarefa em andamento.

## Arte de personagens

Consulte as [pranchas canônicas](entregas/revisao-moinho-rei-oco/arcana/referencia-canonica-de-personagens.md) antes de desenhar ou revisar a arte de um personagem com ficha aprovada. Use o sprite de Idhrí como régua de escala, proporções, contorno, resolução e detalhe.

## Verificação

Portal: python -m unittest discover -s tests -v; node --check public/app.js; python tools/build_portal.py.

Use o venv /workspace/dev-tools/forge-venv quando precisar das ferramentas Python do Agent Sprite Forge neste ambiente. Não gere arte ou vídeo apenas para testar instalação.
