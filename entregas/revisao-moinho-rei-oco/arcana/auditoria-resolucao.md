# Resolução dos assets em cena

A demo reúne artes de várias rodadas de exportação. Os objetos exportados a 2× têm dois pixels de origem para cada pixel lógico do jogo. Parte das artes mais antigas foi exportada a 1×. Além disso, o canvas de terreno é composto a 1×. Quando uma decoração entra nessa camada, ela chega à tela com a resolução do terreno, mesmo que a tela esteja a 2×.

| Arte | Célula ou arquivo | Tamanho lógico em jogo | Caminho de renderização |
| --- | ---: | ---: | --- |
| Memoriais de Myriadd | 84 × 156 | 42 × 78 | 2× direto |
| Checkpoints | 40 × 50 | 20 × 25 | 2× direto |
| Lareiras | 108 × 92 | 54 × 46 | 2× direto |
| Candelabros | 54 × 82 | 27 × 41 | 2× direto |
| Pilastras | 28 × 86 | 28 × 86 | 1×, camada de cenário |
| Pontes do jardim | 192 × 37 | 192 × 37 | 1×, camada de cenário |
| Quiosques do jardim | 192 × 151 | 192 × 151 | 1×, camada de cenário |
| Fontes do jardim | 81 × 72 | 81 × 72 | 1×, camada de cenário |
| Mesa da Chancelaria | 74 × 40 | 74 × 40 | 1×, camada de cenário |

Os quatro masters de pilastra têm detalhe para uma nova exportação. Para aproveitar esse detalhe, a arte precisa ser desenhada diretamente no canvas do jogo. A ponte, o quiosque e a fonte que estão integrados correspondem ao tamanho lógico indicado na tabela. A revisão futura deve partir dos masters aprovados, conservar o ponto de apoio e a linguagem visual de cada peça e comparar o resultado em cena.
