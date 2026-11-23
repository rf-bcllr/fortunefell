# Resolução e contorno pela referência dos espantalhos

A referência é a forma que aparece em jogo, com silhueta legível, contorno consistente e detalhe desenhado na escala de exibição. Os espantalhos usam uma célula de 96 × 112 px projetada em 48 × 56 unidades. As texturas do chão pedem definição de superfície e junções legíveis. Em personagens, inimigos e props, o contorno também precisa manter a leitura em movimento.

Conferi 115 enquadramentos em 23 mapas no Chromium. O canvas mediu 800 × 450 em todos. A instrumentação registrou 190 identificadores de desenho direto, dos quais 30 tiveram ao menos uma medição a 2× ou mais. Esses números incluem células, poses e efeitos. Os mapas estáticos e os desenhos sem identificação de fonte ficam fora dessa contagem. Os dados indicam a densidade observada e não medem a qualidade artística por si só.

| Grupo | Evidência na demo | Prioridade |
| --- | --- | --- |
| Idhrí | Amostras de repouso, passada, salto e golpe usam células de 48 × 40 a 1×. | Alta. Conferir os estados e as cores de cabelo como uma folha, incluindo pivô e contorno. |
| NPCs em áreas com arte recente | A Bruxa, o Sacerdote, Pódhraic e as lideranças registradas ainda desenham a 1×. A superfície detalhada da cabana torna a diferença visível. | Alta. Começar pelo elenco que divide tela com os espantalhos e pelos NPCs de diálogo mais recorrentes. |
| Inimigos | Sentinela de Gileád 44 × 44, cães 44 × 30 e besouros 36 × 24 a 1× nas cenas amostradas. | Alta. Conferir o ciclo inteiro e os estados de ouro e Tempo junto do contorno normal. |
| Props e mecanismos | Espantalhos, pilastras, forja, fonte, quiosque, ponte do jardim e mesa do Arquivo chegam a 2×. O baú comum, a porta de contrapeso e algumas fachadas de Santuário ainda chegam a 1×. | Média. Priorizar objetos interativos, começando pelos baús comuns e mecanismos. |
| Terreno | Detalhes a 2× são compostos sobre o piso base a 1× em 22 mapas. As bordas e junções ainda herdam a grade original. | Por conjunto. Refinar as transições de pedra, grama e plataformas com recortes in-game e preservar a leitura do pouso. |

Llewlás, os espantalhos e as peças recentes a 2× servem de comparação para os próximos lotes. Para comprovar ganho, cada lote deve mostrar arte em tamanho real, medida entre fonte e destino e quadros em movimento quando houver animação.

[Amostras de cena](amostras-escala-e-contorno.jpg) · [Medições por mapa](medicoes-da-auditoria.csv)
