# Terreno e jardim de Myriadd a 2×

A ponte de pedra, o quiosque e a fonte foram recriados a partir dos desenhos da demo. A ponte usa o recorte original dos arcos e do tabuleiro. O quiosque e a fonte mantêm a base apoiada no piso. As três peças são desenhadas diretamente no canvas e cada PNG está disponível em `assets/jardim-2x/` no pacote da demo.

| Peça | PNG recriado | Tamanho em jogo |
| --- | --- | --- |
| Ponte de pedra | 384 × 74 px | 192 × 37 |
| Quiosque | 384 × 302 px | 192 × 151 |
| Fonte | 162 × 144 px | 81 × 72 |

Em 22 mapas, o terreno ganhou junções e texturas desenhadas na grade de meio pixel. A cor e o contorno do piso atual guiam o desenho. Os detalhes são compostos em trechos visíveis, com cache limitado, para evitar canvases de mapa inteiro a 2×. A Cabana da Bruxa já usa uma ilustração a 2×.

No Chromium, foram conferidos cinco enquadramentos por mapa e as seis instâncias das peças do jardim. Os dois tabuleiros foram testados com o pouso do jogador e a grade de colisão dos 23 mapas foi comparada com a da versão anterior.

[Antes e depois em jogo](jardim-e-terreno-2x.jpg)
