# Auditoria de resolução dos 23 mapas

Conferi 115 enquadramentos por versão no Chromium, cinco por mapa. A amostra inclui a entrada e trechos distribuídos pela extensão de cada mapa. Medi o canvas final, o tamanho da camada estática e a relação entre os pixels da imagem e o tamanho em que ela é desenhada. Os nomes na tabela descrevem famílias de objetos observadas ou verificadas no renderer. A amostra cobre todos os mapas, com recortes representativos de cada um.

## O que mudou

- O Mirante usava um canvas de 400 × 225. Com a densidade comum a todos os mapas, o canvas de jogo passa a ser de 800 × 450 também ali. A área visível e a escala lógica seguem as do mapa.
- As pilastras foram reexportadas dos quatro masters usados na demo. A célula passou de 28 × 86 para 56 × 172 e continua ocupando 28 × 86 no mundo. O desenho passa direto ao canvas de jogo, atrás do terreno.
- Uma casa de Éhrein já tinha 204 × 174 no arquivo e ocupa 166 × 142 no mundo. Sua composição antiga era rasterizada a 1×. A mesma imagem agora vai direto ao canvas e preserva os cerca de 1,23× que a fonte permite.
- O canvas estático de terreno mantém a dimensão original para controlar o custo de memória. As peças a 1× continuam com seus pixels nítidos e acabamento original. O ganho de detalhe nelas depende da disponibilidade de masters aprovados com mais resolução. Sprites e peças de terreno pedem um ajuste por conjunto para preservar as proporções, o contorno e as junções.

[Comparativo em cena](comparativo-resolucao-mapas.jpg)

## Resultado por mapa

| Mapa | Canvas anterior | Canvas atual | Detalhe disponível no render | Principal diferença de resolução que permanece |
| --- | --- | --- | --- | --- |
| Myriadd · Castelo | 800 × 450 | 800 × 450 | Portas, luminárias e pilastras | Mesa da Chancelaria, estandartes e personagens |
| Myriadd · Cofre Real | 800 × 450 | 800 × 450 | Luminárias e pilastras | Pedestal e decoração do cofre |
| Myriadd · Oficina de Halberd | 800 × 450 | 800 × 450 | Forja, luminárias e pilastras | Caixas e sprites de serviço |
| Myriadd · Exterior do castelo | 800 × 450 | 800 × 450 | Placas e checkpoints | Terreno, vegetação e inimigos |
| Myriadd · Jardim | 800 × 450 | 800 × 450 | Fachada do palácio, memoriais e postes | Pontes, quiosques e fontes |
| Myriadd · Mirante | 400 × 225 | 800 × 450 | Canvas passou de 400 × 225 para 800 × 450 | Portais, soldados e panorama com fontes de escala lógica |
| Gileád · Capital | 800 × 450 | 800 × 450 | Postes e placas | Fachada da corte, casas e mobiliário urbano |
| Gileád · Corte da Rainha | 800 × 450 | 800 × 450 | Luminárias e pilastras | Trono, estandartes e personagens |
| Gileád · Arquivos Reais | 800 × 450 | 800 × 450 | Mesa do catálogo e estante falsa | Terreno, estantes comuns e elementos arquitetônicos |
| Iomadh · Praça | 800 × 450 | 800 × 450 | Postes e placas | Fachadas, madeira e vegetação |
| Iomadh · Sede do Conselho | 800 × 450 | 800 × 450 | Luminárias e pilastras | Mesa, estandartes e personagens |
| Éhrein · Vila murada | 800 × 450 | 800 × 450 | Postes e placas. Uma casa recuperou a densidade original de cerca de 1,23× | Fachada do castelo, terreno e mobiliário |
| Éhrein · Corte | 800 × 450 | 800 × 450 | Luminárias e pilastras | Balança em jogo, trono e estandartes |
| Myriadd · Terraços de Nuvem | 800 × 450 | 800 × 450 | Checkpoints | Plataformas, terreno e vegetação |
| Gileád · Campo dos Monumentos | 800 × 450 | 800 × 450 | Checkpoints | Monumentos, terreno e sentinelas |
| Iomadh · Mata Alta | 800 × 450 | 800 × 450 | Placas e checkpoints | Copas do cenário, terreno e criaturas |
| Éhrein · Charneca | 800 × 450 | 800 × 450 | Espantalhos e checkpoints | Terreno e criaturas |
| Gileád · Santuário da Fortuna | 800 × 450 | 800 × 450 | Placas e checkpoints | Terreno, mecanismos e criaturas |
| Iomadh · Santuário da Fortuna | 800 × 450 | 800 × 450 | Placas e checkpoints | Terreno, mecanismos e criaturas |
| Éhrein · Santuário da Fortuna | 800 × 450 | 800 × 450 | Placas e checkpoints | Terreno, mecanismos e criaturas |
| Éhrein · Clareira da Bruxa | 800 × 450 | 800 × 450 | Espantalho e checkpoint | Exterior da cabana e vegetação |
| Iomadh · Rio da Mata Alta | 800 × 450 | 800 × 450 | Panorama do rio e checkpoints | Moinho, ponte de madeira e terreno |
| Éhrein · Cabana da Bruxa | 800 × 450 | 800 × 450 | Interior da cabana e luz animada | Bruxa e corvo |
