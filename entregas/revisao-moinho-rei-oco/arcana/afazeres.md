# Estado da demo Arcana

| Item | Estado na demo |
| --- | --- |
| Cetro de Nióbhan | A ampulheta ganhou contorno e dois travessões legíveis. Nióbhan ergue o cetro no começo da audiência e volta ao repouso. Corpo e apoio dos pés mantêm a escala. |
| Carruagem de Ínys | A nova versão do jardim usa arte gerada e revista em cena, com bandeira vazia, estrela no topo, madeira bege, rodas ameixa e boneco da cena de inspeção. As cinco cenas de inspeção do boneco conservam as variantes de cabelo disponíveis. |
| Pilastras e checkpoints | Novos sprites gerados para cada um dos quatro reinos. A diferença vem do desenho e do material. A ativação, recuperação de vida e gravação seguem pela rotina original. |
| Placas | Os modelos pequeno e grande foram exportados dos masters originais a 2× para cada reino. Quando dividem um patamar, os modelos alternam e a placa mais próxima tem prioridade de leitura. |
| Llewlás | Acompanhamento ao lado de Idhrí na clareira e 17 quadros conferidos no render do jogo. Subida e queda usam o quadro aéreo corrigido de 68 × 52 px. A passada e a corrida receberam arte nova. As ações usam o contorno revisto sobre as poses da folha anterior. A distância a Idhrí ficou em cerca de 24 px no teste de caminhada, parada e retorno. [Escala das poses](llewlas-escala-poses.png) |
| Bruxa e Sacerdote | Os sprites com postura e silhueta revistas estão na demo. A moradora de Iomadh respira junto ao poço e o Sacerdote foi reposicionado para a subida do conselho. |
| A’Maídhe e Pódhraic | O reexport 2× dos dois sprites está integrado. O gesto de ajustar o monóculo de A’Maídhe segue pendente. A leitura do monóculo deve continuar sendo avaliada na escala de jogo. |
| Perseguição dos Ocos | Aquisição frontal, perda por obstáculo ou distância e retomada com a visão livre foram verificadas na build deste lote. |
| Moinho, Rei Oco e Clareira | A rota do telhado rende 30 moedas por interação e 15 pela flecha. A clareira conecta a cabana à caçada, e o Rei Oco se dourifica e espalha moedas ao quebrar. [Notas do lote](README.md) · [Mapa da Clareira](../clareira/README.md) |
| Bigorna, mesa e retratos | A forja de Halberd e a mesa do Arquivo foram reexportadas; Myrdhórin usa o original reexportado. Os retratos revisados estão integrados, com um arquivo de download próprio. [Auditoria de arte](auditoria-arte.md) · [ZIP de retratos](../retratos.zip) |
| Interface, aprovação e lista Jogo 21 | A demo inclui a interface Arcana e o sistema de aprovação. A auditoria dos 15 itens detalha epílogo, tesouro, atalho, objetivos, diálogos, fachadas e intervalo da balança. [Auditoria Jogo 21](auditoria-jogo21.md) |

## Capturas deste lote

- [Nióbhan em audiência](cetro-na-audiencia.jpg) e [quadros do cetro](cetro-quadros.png)

- [Revisão de arte e exportações](revisao-sinalizacao.md)
- [Carruagem no jardim](carruagem-comparativo.jpg)
- [Pilastras, checkpoints e placas em cena](sinalizacao-comparativo.jpg)

- [Jardim, conversas, pedidos, saque no Tesouro Real e revisão de sprites](revisao-jardim-e-pedidos.md)
- [Cobertura do pacote de ícones](auditoria-icones.md)


## Revisão de iluminação e animação

- Llewlás usa três quadros novos para a estocada e três para o arremesso, com células de 68 × 52 px.
- Os quatro memoriais do jardim usam células de 84 × 156 px para uma área de 42 × 78 px em cena. O pedestal vazio continua com a mesma altura em relação ao chão.
- A estante falsa do Arquivo tem duas poses. Fechada, o fecho central e a moldura destacam a passagem. Aberta, ela deixa o vão visível.
- A superfície de trabalho da bigorna foi baixada. Halberd foi aproximado da bigorna e o quadro do golpe acompanha a altura da nova mesa.
- Os salões e ruas usam tochas, candelabros, lustres, postes e lareiras de acordo com o reino. O material vai do latão e da pedra clara de Myriadd à pedra violeta de Gileád, à madeira com cobre de Iomadh e à pedra escura com ferragens de Éhrein. Os checkpoints ativos voltaram a emitir brilho.

[Capturas no jogo](revisao-iluminacao-em-jogo.jpg) · [Animações de caça](llewlas-caca.gif)

### Na fila

- Redesenhar a porta do Tesouro Real.
- Dar mais presença à saída do palácio de Myriadd.
- Animar a caminhada e dar uma patrulha curta à sentinela de Gileád, mantendo os disparos de projéteis.
