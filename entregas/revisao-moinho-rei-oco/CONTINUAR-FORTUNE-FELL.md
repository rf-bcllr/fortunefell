# Fortune Fell — entrega para continuar a demo

Abra `jogo.html` dentro de `demo-pixel-art.zip`. A prévia parte da versão `23cc73c`, inclui o hotfix dos pêndulos e preserva o formato de save da demo. Entre pelos capítulos de avaliação para testar mapas específicos. Faça uma cópia do save do navegador antes de trocar de arquivo ou origem.

## Pedidos integrados nesta prévia

| Nº | Pedido | Implementação e pontos de conferência |
| --- | --- | --- |
| 1 | Separar o cavaleiro que avisa da ponte do conselheiro real | O mensageiro usa o figurino militar de Myriadd em 2× e seu retrato correspondente. O conselheiro perto do trono usa o cortesão e o retrato civil. |
| 2 | Primeira decisão já repercute em Myriadd | A audiência aplica +6 ao perdoar, +2 ao adiar ou −3 ao manter o tributo com mantimentos. Aplica uma vez, inclusive quando um save anterior já tem a decisão. |
| 3 | Banners grandes do palácio | As tapeçarias de Myriadd mantêm a estrela e o recorte e foram refinadas em 2×. A fonte usada é a pintura aprovada em definição menor. |
| 4 | Chaves da Guardiã e referência a 20 anos | O molho de chaves aparece no repouso, no piscar e na respiração. As falas usam vinte anos. |
| 5 | Nuvens do primeiro plano sem acompanhar verticalmente Idhrí | As âncoras verticais ficam no mundo e são projetadas pela câmera. O primeiro plano continua na frente do jogador. |
| 6 | Algodão-nuvem substitui o trigo | Texto em português e inglês e plantas com brotos e folhas em quatro quadros nos Terraços. |
| 7 | Retrato ruivo do menino | Usei a arte preparada anteriormente e reenviada pelo autor. Recorte transparente em 256 × 256. O sprite em jogo permanece o existente. |
| 8 | Transparência do estandarte de Gileád | Os furos pequenos dentro do tecido foram repostos. Os vazios externos das ferragens ficaram abertos. |
| 9 | Elenco feminino em Gileád | A cortesã passou à corte de Gileád, o cronista passou a Myriadd e o mago do Mirante passou a auxiliar a Guardiã. A maga regional ocupa o lugar do mago de Gileád no Mirante. O sacerdote passou da capital de Gileád ao jardim de Myriadd. |
| 10 | Livros interativos pelos Arquivos | Três pontos de leitura com E, aviso da aprendiz e bestiário sobre tangibilidade, recuo temporário e linha de visão do Eco. |
| 11 | Checkpoints afastados de placas e portões | Revisão de apoio e espaço lateral; deslocamento nas plataformas existentes quando há área livre. Começar a conferência pelo retorno do Santuário de Gileád. |
| 12 | Contorno dos checkpoints | Reforço localizado na borda dos oito estados mantendo a luz e as cores dos reinos. |
| 13 | Duas fases da Guardiã de Gileád | Destruir as mãos expõe o núcleo no cinto, que atira duas espirais roxas. Na primeira quebra as mãos se refazem. A segunda vence a luta. |
| 14 | Plataformas nas câmaras | Acabamento regional na borda e nos materiais de apoio das plataformas dos três Guardiões, mantendo a altura de pouso. A reconstrução modular de todo o terreno está no briefing. |
| 15 | Moedas da fonte de Gileád | Escolha de pegar ou deixar. Pegar dá 3 pepitas e reduz 3 pontos de aprovação uma vez por save. |
| 16 | Sacerdote · perguntas e oração | Perguntas sobre a Roda Sagrada e as bestas celestiais. Em Iomadh há uma escolha de oração com o card A Fortuna se lembrará disso, usando o ícone da Roda. |
| 17 | Escolha do tamanho das placas | A estela grande só entra se tiver outra placa na mesma plataforma a até 88 unidades e houver espaço para a base. |
| 18 | Estátuas do jardim maiores | Passaram de 78 para 90 unidades de altura, próximas dos monólitos de Gileád que medem 88–90. |
| 19 | Atalhos de Gileád sem Percepção | O Campo ganhou degraus e uma margem de chegada visível. A estante funciona após derrotar a Guardiã. A galeria superior abre uma saída para o Campo. A subida até a cabeceira mantém os blocos do Tempo. |
| 20 | Reações à queda de duas pontes | Cinco NPCs de cada reino inicial reagem à queda de sua ponte. Cinco de Éhrein citam Myriadd e a ponte que de fato caiu. As falas registram leitura no save. |
| Extra | Congelamento infinito no Santuário | O pêndulo usa o tempo normal do Anel e outra flecha o solta. A retomada de saves antigos limpa a trava. |
| Extra | Foles e terceiro raio de Percepção | A melhoria mantém três áreas reveladas e custa 40 pepitas. O pedido dos três couros aparece quando todas as melhorias chegam ao máximo. Depois da entrega, Halberd informa que fechou temporariamente a oficina. Saves que já tinham uma entrega antiga ainda podem completar as compras. |
| Extra | Reexportar originais maiores | Vinte originais integrados em 2×. A auditoria contém os pares de origem e de jogo. |

## Pedidos registrados para a próxima passada

1. Fixar as tochas de parede sobrepondo levemente sua base à pedra e acertar a orientação de cada lado.
2. Fazer Idhrí passar por trás dos guarda-corpos da ponte do Jardim de Myriadd.
3. Refazer a cabeça e a junção com pescoço e gola de A’Maídhe a partir da ficha. Conferir o repouso com Idhrí e o conselheiro Fiadhra. A folha atual e a tomada em jogo acompanham o briefing.
4. Fazer Idhrí comentar, diante da mesa vazia, que Pódhraic foi acompanhar as eleições em Iomadh.
5. Só ativar o objetivo de encontrar Pódhraic depois da fala de Idhrí na entrada da Mata Alta.
6. Fazer o saco de tesouro do moinho desaparecer ao ser atingido por uma flecha.
7. Conferir as plataformas invisíveis do moinho com as posições marcadas pelo autor.
8. Reconstruir os terrenos e redesenhar as peças assinaladas na auditoria. Começar por Guardiões e Rei Oco. Usar os PNGs em escala e as instruções do pacote de arte.
9. Revisar a arte em movimento com Idhrí e os espantalhos como réguas. Conferir as juntas, silhuetas de primeiro plano e proporções do elenco. Fazer ajustes localizados onde o contorno ainda perde leitura.

## Como retomar a implementação

A demo é HTML autocontido com os assets embutidos. O ZIP conserva os arquivos auxiliares e inclui os PNGs novos na pasta `assets/revisao-gilead/`. Para editar a lógica, localize o script que contém o objeto `G` e `const Snd`. Verifique a sintaxe com `node --check` no JavaScript desse script e use os capítulos de avaliação para conferir as mudanças. Preserve saves e escala lógica dos mapas ao trocar os arquivos de arte.

O outro ZIP, `pacote-redesenho.zip`, contém o briefing para enviar ao ChatGPT, o inventário de redesenho, as referências atuais, os pisos, as capturas em jogo e os 20 pares de reexportação. O ícone da Roda da Fortuna é de Caro Asercion, Game-icons.net, CC BY 3.0. [Licença e fonte](https://game-icons.net/1x1/caro-asercion/tarot-10-wheel-of-fortune.html)
