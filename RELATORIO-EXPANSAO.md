# Fortune Fell — expansão de personagens e sistemas

Base: demo Arquivos R7 com correções posteriores do jardim e Charnecas.

## Nesta etapa

- Nova arte da guardiã do cofre com quatro quadros de repouso e retrato conforme a referência. A figura do corredor tornou-se NPC conversável e mantém as falas do papel original.
- Mesa antiga removida da posição do comandante. Mesa desenhada para a Chancelaria instalada depois do cofre, entre a guardiã e a oficina. É decoração enquanto Pódhraic e a Chancelaria estão em desenvolvimento.
- Chromium verificou o mapa do palácio, a mesa, a aproximação e a fala da guardiã e o carregamento das artes.
- Fontes de arte e a especificação integral recebida acompanham o pacote.

## Auditoria e dependências

O jogo está consolidado em jogo.html, com arte em r7-art-*.js. O save usa localStorage, flags, rings, gold, route, quests e ponto de controle, além de migração visual. Um cofre separado contém o pedestal de Myrdhórin. A guardiã fica no corredor junto à porta do cofre. O mapa castle contém a audiência e o NPC counselor, usado também em cutscenes e diálogos. A sequência de abertura deve continuar funcionando ao introduzir Pódhraic sem antecipar sua presença. Em Éhrein, heir é uma figura genérica na corte. Há QUESTS, fluxo de interação e estados existentes para reaproveitar. A Chancelaria ainda precisa ser implementada.

## Próximas etapas

1. Revisar individualmente os masters dos quatro personagens, retratos e spritesheets ancorados no sprite de Idhrí. Produzir movimentos contextuais e acessórios, incluindo lança e óculos.
2. Implementar o rio de High Woods e GateTower. Testar a introdução e retorno de Pódhraic nas duas ordens de visita, respeitando pontes destruídas.
3. Implementar Llúpin, as aparições persistentes do Sacerdote e Llewlás, conservando designs e prólogo.
4. Implementar Tesouro Real separado de G.gold, transferência com escolha e confirmação, representação visual do cofre e migração dos saves. Testar cancelamento, saldo insuficiente, repetição e recarga.
5. Implementar Chancelaria, cartas, missões e aprovação regional com dados configuráveis e estados persistentes, localizados em português e inglês.
6. Criar o companheiro opcional Llewlás e testar navegação, combate com ou sem ajuda e os ramos de Éhrein.
7. Validar campanha completa, saves antigos, os roteiros, documentação e versões públicas antes de declarar a expansão concluída.

O ZIP contém a cópia jogável integrada e o HTML R7 de entrada. A árvore de fontes completa recebida em conversas anteriores não está neste pacote.

## Continuação — etapa de personagens e Tesouro

- Llúpin substitui a figura de herdeiro na Corte de Éhrein, com retrato, quatro quadros de repouso e fala em português e inglês. Os estados de leitura e óculos ainda faltam.
- O Sacerdote aparece em Iomadh, Gileád e Éhrein, com retrato, repouso, encontros compartilhados e fala que apresenta sua religião como crença. O estado dos encontros é salvo. Andar, pregar, rezar, abençoar, ler e animar o turíbulo seguem pendentes.
- A guardiã permite escolher e confirmar um depósito, usando saldo pessoal separado do Tesouro Real salvo como royal_treasury em flags. Saves anteriores começam com saldo zero. Não existe saque. Montículos não coletáveis surgem no cofre aos saldos 1, 50 e 150. Falta arte adicional de moedas/baús e integração com despesas da Chancelaria.
- As artes-base e retratos candidatos dos outros personagens acompanham este pacote apenas como material de trabalho. Exigem comparação e eventual correção com as fichas enviadas, sobretudo emblemas, armaduras e vestuário. Não foram implementados como personagens prontos.
- Testes locais no Chromium: interação com Llúpin e guardiã, dois encontros do Sacerdote em reinos diferentes, revisão/retorno/depósito, saldo salvo no localStorage, visual do cofre com saldo, erros JavaScript e carregamento de imagens.

Aprovação regional, correspondências, missões, Rio de High Woods, chegada de Pódhraic, animações de leitura de Llúpin, Llewlás e combate cooperativo continuam pendentes. Consultar SOLICITACAO-EXPANSAO.txt para o escopo completo. Não alterar os designs aprovados, simplificar apenas detalhes para a escala.

## Atualização posterior — continuação para testes

- Rio de High Woods acessível por Iomadh, com introdução de Pódhraic e retorno à Chancelaria depois do encontro. A mesa foi reduzida.
- A Chancelaria usa aprovação regional persistente, cartas para restauração do Arquivo de Gileád e passagem de Iomadh, despesas confirmadas do Tesouro Real e uma caçada opcional a três cães nas Charnecas para Éhrein. Conferidos saldo insuficiente, repetição e entrega da missão.
- Foram reexportados idles de Niobhán, Seyrín, Bruxa, Lúgham, A’Maídhe, Llúpin, Sacerdote, Pódhraic e Ínys em proporções comparadas a Idhrí e às crianças. Guardiã aprovada e Halberd foram preservados. Validar artisticamente no jogo em todos os cenários; a roupa de Seyrín ainda precisa ser conferida contra a ficha longa aprovada.
- Verificações locais no navegador: carregamento, erros JavaScript, mapas, cartas, saldo, contagem e entrega da caçada. Não é um playtest completo da campanha.
- Pendências prioritárias: Llewlás ainda não está integrado como companheiro; suas animações candidatas de andar, salto e ataque precisam limpeza de fundo, revisão de design e escala, integração e testes do combate e navegação. Verificar a vestimenta de Seyrín, restantes missões e efeitos narrativos da aprovação, as duas ordens de visita e saves antigos. Leitura de Llúpin foi adiada a pedido.
- Fontes e scripts de trabalho desta etapa ficam em /workspace/generated_images e /dev/shm/r7site; o ZIP contém o jogo e parte das fontes, não um repositório completo. IDs dos candidatos de Llewlás: 785d9670, e4d180bb e 1b9ae86c.

## Ajustes seguintes

- Seyrín: roupa longa branca e dourada preservada; tecido antes carmim foi alterado para roxo no idle e no retrato. As três expressões usam temporariamente o mesmo retrato neutro; recuperar expressões diferenciadas após exportação cuidadosa.
- Foram gerados tronos específicos de Myriadd (estrela), Gileád (ampulheta) e Éhrein (torre e lobo), em aplicação à cena; validar escala e perspectiva visualmente em jogo.
- O conversor pixel-Asset-converter oferece divisão de mapas e quadros com paleta e escala comuns; o Ink Studio é voltado a construção procedural 3D e requer prova de compatibilidade visual. Nenhum foi integrado ou testado na produção.
- Pendente expandir o mapa do rio em High Woods e integrar a gatehouse com sua navegação e colisões. Testar as duas ordens de visita. Llewlás segue pendente, incluindo movimentação, salto e combate. As artes candidatas não são integração jogável.
- Charnecas: entrada da Clareira transferida para o desvio elevado nos tiles 48–66, com três patamares e retorno no patamar superior; o Hollow junto ao Santuário recebeu piso contínuo até a barreira. Foi verificada a estrutura do mapa e os destinos; ainda é necessário playtest manual dos saltos e da patrulha durante a campanha.
- A clareira ganhou trecho inicial explorável com plataformas e inimigos, separado da posição da Bruxa. Rio de High Woods ampliado para 100 tiles com plataformas e inimigos longe do encontro com Pódhraic; panorama foi recortado para manter proporção. Moinho gerado como candidato (04300679), mas não aplicado por fundo inadequado. Gatehouse do rio ainda não foi integrada. Casa A de Éhrein reduzida a 55% do tamanho de exportação. Validar esses trechos manualmente, incluindo segurança dos encontros.
- O moinho do rio usa prédio e roda separados; a roda gira no jogo. O Sacerdote da Fortuna substitui o anterior em Iomadh. Um morador, o guarda e A’Maídhe comentam a presença de Pódhraic antes do encontro. O NPC na Chancelaria continua condicionado à flag do encontro no rio. Teste local de introdução, despesa e entrega da carta passou sem erros de página.
- Próxima prioridade de interface: ocultar corretamente o objetivo em cenas e sobreposições; criar interfaces próprias para Tesouro Real, oficina de Halberd e Chancelaria, mantendo os diálogos. Validar controles, cancelar/confirmar, acessibilidade e saves. Não implementado nesta etapa.
- Rio: baú secreto atrás de uma queda d’água animada simples, com 25 moedas e flag própria de coleta; teste confirmou flag, geração de moedas e ausência de erros. A imagem candidata detalhada ad0e1587 não foi aplicada por fundo opaco. O aviso de objetivo agora se recolhe depois de seis segundos; a revisão completa da UI segue pendente.

## Correções da sessão seguinte
- Corrigida a ordem de instalação dos tronos, que eram substituídos pelo carregamento padrão. Originais mantidos no pacote; validar perspectiva e posicionamento em cada corte.
- Corrigida a escala da casa A de Éhrein na etapa efetivamente usada para desenhá-la: 55%.
- Audiência: o mestre de cerimônias usa aparência de soldado e retrato de soldado, distintos de Pódhraic. Pódhraic na Chancelaria continua inativo antes da flag de encontro. Teste automatizado local confirmou invisibilidade/interação antes do retorno e interação depois.
- Acrescentado identificador de versão nas URLs dos módulos de arte, para evitar cache antigo após publicação.
- Pendências: rever portraits de Sacerdote, Llúpin, Pódhraic e demais novos; A’Maídhe deve seguir sua ficha aprovada e a tentativa errada foi rejeitada. Gatehouse de Iomadh deve usar laranja e símbolo do olho; candidato com folha foi rejeitado. Llewlás, animações de combate e acompanhamento, UI própria do Tesouro, oficina e Chancelaria e artwork adequado da queda d’água seguem pendentes. Validar narrativa, rotas e playtest completo.

## Revisão local após a versão 63
- High Woods River usa canvas 800 × 450 e um enquadramento que mostra a água. O moinho foi trazido para dentro do enquadramento de Pódhraic e sua roda foi alinhada ao eixo.
- A queda do baú usa sprite com brilhos animados e maior transparência quando Idhrí se aproxima. Original em /workspace/generated_images/exec-2cca22b4-f5aa-465c-9c46-5e42a4fdef20.png. Incluir no próximo ZIP por meio da lista de originais de hair.py.
- Verificados o encontro de Pódhraic, a carta e a abertura única do baú. Alterações locais em dist/jogo.html e dist/r7-revisao-personagens.js. Falta empacotar e publicar, além de gatehouse, portraits, Llewlás e interfaces.

### Interfaces em andamento
- Na cópia local, a guardiã abre um painel de Tesouro para selecionar e confirmar o depósito. Pódhraic abre um painel com as cartas. Reaproveitei o menu acessível por teclado e mouse, preservando as regras de saldo e confirmação.
- A Chancelaria ainda usa diálogo para o conteúdo e a aprovação regional. Falta levar esses fluxos para o painel, revisar a oficina existente e validar os três serviços em jogo.
- Publicação sob instrução de aguardar todas as pendências. Manter a 63 no ar até finalizar e testar.

### Ordem de trabalho atual
1. Portraits com a ficha individual para identidade e portrait de Idhrí para traço. O candidato de Llúpin mantém o broche lunar, o arminho e o cabelo castanho. Ainda falta obter o PNG original da geração no workspace e conferir o resultado exportado no diálogo.
2. Llewlás, depois Rio de High Woods.
3. Chancelaria e, por último, oficina. A oficina atual funciona.
- Trabalho local já executado na Chancelaria: leitura da carta, autorização e confirmação da despesa em painéis, além da consulta de aprovação regional. O teste de encontro e carta do rio passou (40 → 15 no Tesouro, 50 → 58 em Iomadh). Ainda falta validar cancelamento, missão e aprovação nas telas novas.
- A versão pública deve ficar na 63 até a entrega completa.

### Portrait de Llúpin
- Folha original em /dev/shm/r7site/llupin-expressoes.png. Três retratos RGBA de 128 × 128 já exportados para o jogo local. Llúpin assume expressão introspectiva por padrão, preocupada após a autorização de Éhrein e atormentada após o Guardião. Falta verificar as três falas em cena.
- Ordem revisada por solicitação do usuário. Publicar depois de portraits, Llewlás, rio e Chancelaria. A oficina fica para uma atualização posterior.
- Sacerdote da Fortuna: três expressões integradas localmente, serena na saudação, convicta na declaração sobre a Fortuna e enigmática no reencontro. Original em /dev/shm/r7site/sacerdote-expressoes.png para incluir no próximo ZIP. Sintaxe validada. Falta verificar as transições em cena.
- A’Maídhe e Pódhraic: novos bustos baseados diretamente nas duas fichas reenviadas. Aplicados localmente a 128 × 128, validados formato, alpha e sintaxe. Originais integrais em amaidhe-ficha-original.png e podhraic-ficha-original.png nesta pasta. Falta testar em diálogo e gerar expressões a partir desses originais. As tentativas anteriores com o design alterado não foram integradas. Demo pública permanece na 63.
- Encontro no rio: após a notícia da ponte caída, Pódhraic faz uma pausa, reage com humor e corre para a saída no caminho de Myriadd. O retorno é salvo após a corrida. Validar a sequência em jogo.
- Orientação para Pódhraic: homem de meia-idade com o rosto levemente empoado. Preservar máscara, gola e broche da ficha.
- Retrato de A’Maídhe com o traço revisado aprovado pelo usuário e aplicado localmente (amaidhe-traco.png). Próximo passo: expressões a partir desse original.
- Pódhraic: podhraic-maduro.png é candidato de rosto empoado e meia-idade. O usuário considerou o traço ainda fora do padrão. O candidato fica fora da build. Revisar a partir da ficha sem alterar o design.
- Teste Chromium do encontro no rio completado: após a reação cômica Pódhraic alcança a saída, a flag de retorno é gravada e a carta permanece funcional. A fala explicita que seu destino é Myriadd.
- A’Maídhe: retrato neutro aprovado mantido, variantes pensativa e sorridente ligadas às expressões de escuta e reação. Original integral em amaidhe-expressoes.png. A exportação remove resíduos de baixa opacidade. Falta conferir a composição e as transições em diálogo. Nenhuma publicação.
- Rio: o usuário prefere o desenho da gatehouse anterior. Preservei o portão existente. A candidata rio-gatehouse.png não está ligada ao mapa. Se retocar a candidata anterior exec-94de5fff-3840-430d-92cc-7c902d76f3a2.png, manter sua arquitetura e substituir apenas a folha da bandeira pelo olho de Iomadh. O retrato podhraic-final.png está aplicado na cópia local.
- Gatehouse existente mantida por decisão do usuário. O rio recebeu um checkpoint antes dos inimigos e um patamar na origem da cachoeira para conectar a água ao cenário. Pódhraic tem retrato neutro atualizado e a cena de saída para Myriadd passou no teste da Chancelaria. Expressões de Pódhraic, Llewlás e oficina seguem pendentes.
- Versão 64 publicada (commit e29d097). Inclui rio, Pódhraic e os retratos locais da rodada. As duas pontes de madeira vieram depois desse pacote e estão apenas no código local. Usam a lógica dos jardins com sprite baseado no parallax, água abaixo do tabuleiro e piso contínuo. Original em ponte-rio.png nesta pasta. Teste de Pódhraic passou após a edição; faltam inspeção visual das duas travessias e inclusão do original no próximo pacote.
- Nova build: duas pontes de High Woods atravessadas com o controle de movimento no Chromium, sem saltos ou erros. O pacote inclui a arte original e os portraits já integrados de Llúpin, Sacerdote, A’Maídhe e Pódhraic. Expressões de Pódhraic, Llewlás e revisão da oficina seguem pendentes.
- Versão 65 publicada com duas pontes, originais no ZIP e portraits integrados. O usuário rejeitou a qualidade do moinho, da cachoeira, do parallax e do portrait de Pódhraic. Revisão local começou pelo panorama original river-new.png, preservando proporção e resolução da fonte. Ainda precisa de comparação visual no jogo. Próximos: refazer moinho e roda na escala da cena, redesenhar cachoeira como parte da margem e revisar retrato de Pódhraic com referência de traço de Llúpin.
- Revisão local após a 65: panorama river-new.png em proporção nativa, cachoeira queda-v2.png com paredão e cavidade atrás do baú, e moinho moinho-v2.png com roda separada, montagem menor e rotação mais lenta. Originais nessa pasta, incluir no próximo pacote. O teste Chromium do encontro e da carta passou sem falhas de carregamento. Falta conferência artística em movimento e de alinhamento com o terreno, além da revisão de Pódhraic e demais pendências anteriores. Nenhuma nova publicação.
- Conferi o ZIP da versão 65: contém originais das pontes, de Llúpin, Sacerdote, A’Maídhe e Pódhraic em imagens-originais. O gerador do próximo pacote agora inclui river-new.png, moinho-v2.png e queda-v2.png.
- Inspecionei as duas áreas no Chromium. O visual local mostrava água chapada sob as pontes e patamar acima da rocha. Retirei a faixa pintada para deixar o rio do panorama aparecer, alinhei o patamar um tile abaixo e afastei o moinho do encontro. Repetir inspeção visual e verificar as travessias antes de publicar. A demo pública segue na versão 65.
- Retrato neutro de Pódhraic trocado localmente por podhraic-v2.png, com olhar astuto, cabeça menos inclinada e paleta suavizada. Fonte integral incluída pelo gerador do ZIP. O usuário fará a avaliação em jogo. A demo pública segue na 65.
- Pódhraic: retrato local substituído pela versão baseada diretamente na expressão Imponente da ficha reenviada. Llúpin serviu de referência de traço. Original pod-ficha-v3.png incluído na lista do próximo ZIP. Avaliação visual a cargo do usuário. Sem publicação nesta rodada.
- Pódhraic: o usuário rejeitou a semelhança do rosto e o desenho da máscara no candidato v3. Nova tentativa de extração por geração também redesenhou os dois, então ficou fora da build. Para o próximo passe, obter a ficha aprovada como arquivo PNG e recortar o busto da figura principal preservando os pixels do rosto e da máscara. A referência de Llúpin serve só para acabamento.
- Pódhraic: revisão local aplicada com máscara de mármore sem borda dourada, estrela solar de raios finos e lábios mais escuros. O PNG integral pod-marble.png entra no ZIP. A avaliação em jogo fica com o usuário.
- Pódhraic: versão local pod-refined.png com máscara de mármore de contorno revisado, sol pintado com centro preenchido, linhas de expressão, pinta e lábios escuros. Original incluído na lista de exportação. Avaliação de semelhança fica com o usuário. Sem publicação.
- Pódhraic: mantida a arte pod-refined.png. A exportação 128 × 128 agora iguala altura visível e linha de base do retrato de Llúpin no diálogo, sem alterar o desenho original nem criar regra especial na UI. O original integral segue no ZIP. Sem publicação.
- Próxima versão reúne as correções do rio, o retrato neutro de Pódhraic ajustado à escala da caixa e a expressão chocada na fala sobre a ponte, antes da corrida para Myriadd. Original pod-shock.png incluído no pacote. Llewlás e a revisão da oficina ainda pendentes.
- 66 publicada. Revisão seguinte: tamanho do rosto ajustado na moldura de Llúpin, Sacerdote e Pódhraic. Dez cartas renderizadas no Chromium. Llúpin reexportado do original com 44 px de altura em quatro poses. Casa A agora tem a mesma altura nominal da B (142 px). Três tronos espelhados. Presença de Pódhraic filtrada ao instanciar o mapa, arauto da audiência identificado separadamente. Conferidos palácio inicial (zero), rio (um) e palácio após retorno (um). Pontes do rio alargadas com estacas de madeira. Charnecas com trilha elevada bidirecional, sete plataformas atravessáveis, recompensa e via inferior. Ainda falta avaliação manual da travessia completa.
- Llewlás integrado nas Charnecas, próximo da subida à Clareira. Recrutamento opcional, persistência em saves, auxílio contra inimigos e lance à placa revelada e dourada do Guardião. O último golpe é de Idhrí. Folha de poses e originais de referência incluídos no ZIP. Corrigida precedência dos sprites revisados sobre os pacotes-base. Chromium: diálogo renderizado, entrada solo/com aliado, ausência após a vitória, arremesso atingindo a placa e nenhuma falha de asset. Não foi jogada a campanha completa.
- Oficina de Halberd: bancada com inspeção de melhorias, conferência de custo e saldo, confirmação da forja e recibo. Uma melhoria sem saldo ou completa pode ser inspecionada. Custos, requisitos e efeitos originais preservados. Chromium verificou compra de Vida por 25, saldo 40→15, nível 0→1, bloqueio por saldo insuficiente, retorno e saída.
- Interface inspirada em tarô: abertura ilustrada com carta de Idhrí, menu lateral, nomes dos lugares animados no centro por cerca de dois segundos e objetivo disponível na pausa. Preserva instruções em Controles e respeita preferência de movimento reduzido nos títulos das áreas. Chromium em 960×540 e 390×844: carga e pausa em português, carta presente, anúncio encerrado, objetivo acessível, zero exceções observadas. Auditoria dos sprites acompanha esta distribuição separadamente no ZIP.
- Prioridade de Llewlás: reproduzido erro a 29 px; personagem caminhava para fora do alcance (24 px) e o primeiro E não abria conversa. Raio ampliado com limite de altura, pausa para conversar, porta continua com prioridade. Testadas a interação E antes do recrutamento, escolha Vamos juntos e nova conversa por E. Nova folha de 4 passos e 4 poses de corrida, ciclo por distância, pés realinhados, redução da escala, respiração e temporizador de estocada separado da recarga. Arremesso conferido contra placa dourada. Pendentes teste de campanha integral e revisão artística do elenco.

- Base desta publicação: rio-arte-original/entregas/rio-do-moinho/fortune-fell.zip. HTML independente com áudio da entrega. Ponte destruída determinada na primeira cabeceira, incluindo dois anéis, retorno pela ponte sobrevivente, consulta e evacuação coerentes. No Chromium ambas as primeiras cabeceiras ativaram a cena, a segunda chegou a Éhrein e o retorno levou ao mapa correspondente. Porta do contrapeso persistiu aberta após recarga do mapa. Pêndulos travados no alto guardam posição. Apoio de Percepção na descida alta. Oficina e interface de tarô integradas. Moinho e roda ampliados, correnteza, reflexos e espuma em código. Folha de locomoção individual, postura de caça, arte da referência de Llewlás.

- V71: redesenho visual de Llewlás seguindo sua referência oficial. Escala e âncoras do atlas da versão indicada mantidas nos oito quadros armados, paleta unificada no ciclo de locomoção. Original do redesenho e atlas final incluídos no projeto.

V72 — Llewlás recupera os quadros de ação da folha anterior. Os pés usam as poses de corrida de Idhrí, com ciclo por distância. Logo oficial 1774 × 887 no menu e na página de download.

V73 — Correção circunscrita à passada de Llewlás. Quatro poses completas baseadas no quadro nativo anterior. Mesmo ciclo em duas velocidades. Original e ferramenta de exportação em fontes/llewlas/.
