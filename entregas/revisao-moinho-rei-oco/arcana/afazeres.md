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

### Escolta, sentinelas e portas do palácio

- Depois da caçada, Llewlás só oferece o atalho para o Santuário de Éhrein quando Idhrí tem a chave de Lúgham e a conversa sobre evacuação foi concluída. Com o conselho da Bruxa ou da Oráculo em mãos, Llewlás indica o retorno à corte. Se Idhrí pedir tempo para decidir, ainda pode sair da corte por conta própria.
- Llewlás usa 18 quadros numa única folha de 68 × 52 px por célula. O repouso, a subida do salto, a queda e o recuo usam a mesma escala da caminhada, corrida, estocada e arremesso.
- As quatro sentinelas do Campo dos Monumentos e do Santuário de Gileád patrulham perto da posição inicial, viram nas bordas e param para disparar.
- A porta do Tesouro Real tem um fecho circular de bronze. A saída para o jardim de Myriadd ganhou um arco alto de cantaria com pilastras e duas folhas de madeira. As duas foram exportadas a 2×.

[Portas e sentinela no jogo](portas-e-sentinela-em-jogo.jpg) · [Quadros de Llewlás](llewlas-todos-os-estados.png)


## Cabana da Bruxa, memoriais e profundidade

- Os quatro memoriais ficam a 48 ladrilhos um do outro pelo jardim. A estátua de Mhóira segue o perfil, o cabelo, o diadema e o arco do prólogo. Os outros memoriais compartilham a cantaria e a base. As células continuam a 2×.
- Os cinco tipos de luminárias têm seis quadros de chama por reino. As tochas ficam presas às paredes laterais e viradas para o salão. Candelabros ocupam os vãos internos. A lareira de Myriadd fica num vão próprio, separada da mesa da Chancelaria.
- O Pescador de Éhrein indica a trilha. Dois espantalhos com ervas estão nas Charnecas e um na clareira. As flechas do Tempo desaceleram a chuva em torno de cada alvo, e o progresso fica salvo. Depois de proteger os três, Idhrí pode ouvir o conselho de evacuação da Bruxa, mesmo na rota da Oráculo.
- A cabana tem mapa próprio. Há dois corvos amistosos do lado de fora e um voando dentro. Llewlás espera na clareira e volta a acompanhar Idhrí após a saída.
- Llewlás responde perguntas sobre a caçada, Éhrein e seu pai Lúgham. A primeira fala de Lúgham sobre a balança ganhou um close da balança em movimento.
- Os exteriores ganharam primeiro plano por ambiente. Os Terraços têm camadas móveis de nuvens, a Mata Alta tem copas próximas, o Rio tem uma roda em primeiro plano, Gileád tem cantaria e névoa, e Éhrein tem vegetação baixa e bruma.

[Capturas no jogo](cabana-memoriais-e-cenarios.jpg)


## Cabana em corte e cena da balança

- Os três espantalhos foram simplificados para a escala do jogo. O primeiro tem um galho curvo em forma de arco, o segundo tem máscara branca de madeira e o terceiro usa capuz ameixa. As ervas e a interação com o anel do Tempo continuam em cada alvo.
- A cabana agora é um interior compacto em corte, com piso, batente, lareira, móveis e teto alinhados à altura dos personagens. A Bruxa e o corvo continuam dentro e Llewlás espera do lado de fora.
- Os mapas usam silhuetas de uma cor em primeiro plano. Elas incluem as copas da Mata Alta, a roda do Rio, as nuvens dos Terraços e composições próprias nos palácios, santuários e arredores.
- Mhoirín usa o diadema de Mhóira e apoia a miniatura de uma roda numa mão. A base do memorial segue a mesma cantaria.
- A primeira conversa sobre a balança ganhou uma ilustração em alta resolução, vista por trás de Idhrí e Lúgham. A balança fica no chão, no fundo do salão, um pouco acima da altura dos dois. O enquadramento é mais próximo e centraliza Idhrí, a balança e Lúgham. A cor do cabelo de Idhrí é a da ilustração. O traje de Lúgham segue a ficha de implementação e o retrato atual. A luz fria e a chuva dão o tom do salão, com tapete, manto e estandarte íntegros.

[Capturas no jogo](cabana-sombras-e-memorial.jpg) · [Ilustração da balança](balanca-na-corte-de-ehrein.jpg)
