# Sprites e silhuetas de primeiro plano

Idhrí foi reexportado dos originais em 2×. São 12 poses para cada um dos cinco estados de cabelo da demo, em células de 96 × 80 projetadas em 48 × 40 unidades. A Bruxa foi redesenhada a partir da ficha da Velha Bruxa das Charnecas e do retrato. O sprite recupera os cachos volumosos, o adereço da cabeça, o cajado com amuletos e a sobreposição de tecido oliva e ameixa. A respiração varia em quatro quadros, com movimento localizado no manto. O ciclo da sentinela usa a arte de caminhada em resolução maior, e as poses de repouso e disparo foram reconstruídas com base nos sprites do jogo. A escala, os pivôs e as caixas de colisão usam as medidas de antes.

O terreno ao ar livre recebeu um realce fino em bordas superiores de grama ou pedra onde os pixels já estão presentes. Esse ajuste complementa as junções internas da revisão anterior.

As silhuetas usam os dois tons da Mata Alta, `#222c26` e `#303b2d`, com interior opaco. Beirais, vigas, capitéis, grades e capim foram refinados na resolução de exibição. Nas margens foi usado o próprio contorno visto em câmera, sem a máscara horizontal que cortava as pontas.

No Chromium, conferi 154 enquadramentos em 23 mapas. A maior cobertura observada pelo primeiro plano foi 8.8%, no Rio. A inspeção verificou a ordem de desenho sobre Idhrí e sobre a borda do terreno nos Terraços, e a posição da roda em relação ao mapa ao deslocar a câmera. A rotação pode suavizar o perímetro da roda em frações de pixel.

| Mapa | Primeiro plano | Maior cobertura amostrada |
| --- | --- | --- |
| Myriadd · Castelo | Lustres e beirada de tecido. | 1.6% |
| Myriadd · Cofre | Arco e pontas da grade de ferro. | 2.1% |
| Myriadd · Oficina | Coifa com rebites e beirada de metal. | 3.3% |
| Myriadd · Exterior do castelo | Folhagem de jardim, com formas invertidas e escalas variadas. | 2.6% |
| Myriadd · Jardim | Copas ornamentais e margem aberta para leitura das estátuas. | 4.0% |
| Myriadd · Mirante | Bancos de nuvens rente à borda inferior. | 2.3% |
| Gileád · Capital | Beirais escalonados com recortes de telhas. | 1.7% |
| Gileád · Corte da Rainha | Capitéis de pedra e tecido acima do salão. | 1.1% |
| Gileád · Arquivos Reais | Cornijas e apoios das estantes do Arquivo. | 3.9% |
| Iomadh · Praça | Beirais de telha junto às casas e copa perto das árvores. | 2.7% |
| Iomadh · Sede do Conselho | Vigas de madeira com encaixes visíveis. | 1.0% |
| Éhrein · Vila murada | Ameias com juntas de alvenaria na beira superior. | 2.6% |
| Éhrein · Corte | Capitel e lustre acima da corte. | 1.6% |
| Myriadd · Terraços de Nuvem | Bancos superiores e inferiores desenhados sobre o terreno e Idhrí. | 7.2% |
| Gileád · Campo dos Monumentos | Lápides baixas, nas margens inferiores. | 1.6% |
| Iomadh · Mata Alta | Copas usadas como referência de cor e contorno. | 4.2% |
| Éhrein · Charneca | Capim e ramos baixos ao pé das charnecas. | 1.5% |
| Gileád · Santuário da Fortuna | Capitéis de pedra com juntas e rebaixos. | 1.9% |
| Iomadh · Santuário da Fortuna | Raízes curvas na parte superior do santuário. | 3.5% |
| Éhrein · Santuário da Fortuna | Ameias e pedra trabalhada no teto. | 2.6% |
| Éhrein · Clareira da Bruxa | Copas acima da clareira e vegetação baixa. | 3.0% |
| Iomadh · Rio da Mata Alta | Roda em rotação presa ao canto inferior esquerdo do mapa, com copas ao longo do percurso. | 8.8% |
| Éhrein · Cabana da Bruxa | Moldura do próprio interior em corte, visível na captura. | Moldura pintada |

[Mapas 1 a 12](primeiro-plano-1.jpg) · [Mapas 13 a 23](primeiro-plano-2.jpg) · [Poses dos personagens](personagens-2x.png) · [Comparação da Bruxa em jogo](bruxa-em-jogo.png)
