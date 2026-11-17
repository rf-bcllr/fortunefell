# Duas contas Codex no mesmo GitHub

Use os identificadores codex-a e codex-b para distinguir as sessões. Eles não são usuários GitHub diferentes. Cada conta pode acessar o mesmo repositório por sua própria conexão autorizada; não copie tokens de uma para a outra.

## Rotina

1. Leia main atual, AGENTS.md e a fila. Escolha uma tarefa livre.
2. Abra um PR de reserva alterando somente a tarefa em data/tasks.json: owner, status doing e branch futura. Integre a reserva antes de iniciar a implementação. Se duas reservas concorrerem, prevalece a primeira integrada; a outra conta escolhe outro ID.
3. Atualize a base e crie a branch de implementação a partir de main: `codex-a/ff-003-revisar-contexto`, por exemplo. Cada conta mantém no máximo uma tarefa doing/review. Evite duas tarefas simultâneas nos mesmos arquivos.
4. Implemente o escopo do ID. Em caso de dependência, registre-a na nota e marque blocked; não tome a tarefa da outra conta.
5. Abra PR com estado review e resultados reais. Atualize a branch com main e resolva conflitos antes de integrar. Não force push em main.
6. A outra conta pode revisar e deixar suas conclusões, identificando-se como codex-a ou codex-b. Como ambas usam o mesmo usuário GitHub, isso não equivale a uma aprovação independente. Você decide a integração; é possível usar merge manual do PR após checks.
7. No commit de conclusão, registre done e evidence com SHA/PR mais os testes executados. Arte deve ter conferência em escala nativa; validação estática não é playtest.
8. A integração em main publica o portal por Actions. Confira deploy e comportamento antes de afirmar que a versão está online. O build.json identifica o commit do portal; o commit da demo aparece separadamente no histórico.

Sem conectividade, a reserva local não funciona como trava para a outra conta. Compartilhe o impedimento e aguarde sincronização antes de mexer em arquivos disputados.

## Prioridades e melhoria contínua

P0 bloqueia acesso/publicação; P1 é a próxima entrega; P2 são melhorias posteriores; P3 é exploração. Registre novas sugestões como Issues, sem iniciar a implementação automaticamente. Quando aprovadas, crie um ID na fila com critério verificável em note. Issues e PRs são discussão e evidência; o estado exibido no portal vem exclusivamente da fila versionada.

Não marque concluídas tarefas apenas sugeridas em relatórios antigos. O painel inicial usa o handoff como fonte provisória; confirme prioridades com a base atual antes de executar FF-004/005.

## Mensagem de passagem

Copie para a outra sessão: ID, conta, branch, SHA base e final, PR, arquivos alterados, testes e falhas, bloqueios e próximo passo. Anexe evidências; não dependa da memória da conversa.
