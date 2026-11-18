# Continuidade: portal e downloads

ZIPs públicos na branch entrega-assets, commit 4bd2db13d3cbc512839c841b32b845d7678828c5. Os binários ficam nessa branch; main contém o portal e links diretos.

Interface atualizada: download completo e leve, fontes em três partes, arte da cabana, busca sem distinção de acentos, filtros e layout responsivo. data/downloads.json centraliza URLs e hashes; data/tasks.json registra entregas e pendências.

Validação: quatro testes Python, node --check e build aprovados; Chromium em 1280, 390 e 320 px sem overflow ou erros JS. Downloads, busca e estado vazio verificados. Isto não é playtest do jogo.

Pendências: integrar assets ao HTML original; produzir Llewlás e Llúpin e estados adicionais do boneco conforme os handoffs dos ZIPs. Confirmar deploy GitHub Pages: consultas à API e ao domínio Pages recebem HTTP 403 neste ambiente. Workflow existente dispara por push em main. A API bloqueada impediu criação de PR; reserva e entrega foram enviadas por Git, sem force push, conforme autorização direta do autor para publicação.
