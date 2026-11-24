# Fortune Fell — redesenho de assets

Use minha arte atual de `01-arte-atual`, as tomadas em `02-em-jogo` e as réguas em `03-reguas`. Quero recuperar nitidez e leitura mantendo o desenho já aprovado. Os espantalhos dão a régua de contorno e detalhe para objetos. O repouso de Idhrí dá a régua de proporção, contorno e escala para personagens. Retome pelo Lote 2, com uma peça de prova de cada família em escala real. O CSV `inventario-redesenho.csv` lista cada peça com tamanho e localização em jogo. O inventário completo registra também os 20 originais maiores já localizados, destinados à reexportação.

## Formato e revisão

- Entregue PNG RGBA com transparência e o mesmo nome-base do arquivo atual. Em geral o novo PNG mede o dobro da imagem-fonte nas duas dimensões. Mantenha margem, base, centro de rotação e encaixes na mesma posição relativa. Use uma malha nova de pixel art com volumes legíveis nessa resolução.
- Entregue cada peça móvel separada, com tabela de dimensões, pivôs, linha de apoio, número de quadros e sua ordem. Monte uma prancha de controle que mostre imagem atual, nova em escala lógica, nova ampliada com vizinho mais próximo e composição ao lado de Idhrí.
- O alfa dos materiais opacos deve ser sólido. Preserve vazios como o vão de portas e as argolas das correntes. Confira os roxos e os recortes internos sobre fundo claro e escuro. Faça o contorno por contraste dos volumes, com os espantalhos e Idhrí como referência.
- O motor usa o PNG para arte e sua própria malha para física. Os pés de personagens, a borda de pouso e a abertura das portas precisam coincidir com o desenho atual. As linhas `·canvas` e `@piso-base` do CSV descrevem composições do motor. Use-as para conferir o conjunto depois de desenhar as peças-fonte.

## Lote 1 · Guardiões e Rei Oco — já integrado

O diretório `05-integrados-nesta-versao` traz as exportações usadas no jogo. As especificações abaixo documentam a integração e servem para verificar encostes e estados. Use estes PNGs ao prosseguir. A arte atual dos Guardiões foi exportada em 2×. O Rei Oco tem 12 células de 768 × 288. Não é necessário regenerar o Lote 1 para continuar os Lotes 2 e 3.

| Família | Exportação | O que preservar |
| --- | --- | --- |
| Guardiã de Gileád | `g_body` 300 × 520, `g_hand` 112 × 80, `g_core` 88 × 88, `wheel_128` 256 × 256 | Corpo frontal, contato da mão espelhada com o solo, centro da roda e encaixe do núcleo no cinto. O núcleo abre após destruir as mãos em duas fases. Abertura, rotação e face selada precisam do mesmo pivô. Veja `gd-boss.jpg`. |
| Guardião de Iomadh | `i_body` 240 × 184, seis `i_mask_*` de 56 × 56 cada, `wheel_124` 248 × 248 | Preserve encaixes e diferenças das máscaras. Use `i_mask_adhar`, `i_mask_aelv`, `i_mask_dvern`, `i_mask_dwyn`, `i_mask_fiadh` e `i_mask_morgh` como referências individuais. Veja `id-boss.jpg`. |
| Guardião de Éhrein | `e_body` 240 × 320, `e_chest` 118 × 146, `e_helm` 110 × 132, `e_shoulder` 106 × 100, `wheel_148` 296 × 296 | Preserve posição, ordem de sobreposição e pivôs das placas. Explore o metal frio e os contrastes da referência. Veja `ed-boss.jpg`. |

As rodas giram pelo centro. Preserve os raios e recortes que distinguem as três. Monte os Guardiões em conjunto com a roda. As versões normal, dourada e petrificada precisam preservar a forma de cada peça e o espaço de sobreposição.

**Rei Oco**. Use a folha ativa `hollow_king_sheet.png`, com 12 células de 256 × 96 em linha. O motor desenha cada célula a cerca de 333 × 125 lógicos. Entregue uma folha de **9216 × 288**, com 12 células de **768 × 288** na mesma ordem. Mantenha linha de chão, pivô do corpo, altura e alcance visual da arma em cada célula. Observe poses vizinhas antes de redesenhar um quadro. A folha é espelhada pelo jogo e recebe Ouro e Tempo no motor. Entregue também uma grade com os números fora de cada quadro. O Cavaleiro Oco comum e o Eco usam folhas próprias.

## Lote 2 · terreno jogável por reino

A pasta `01-arte-atual/terreno-por-mapa` contém os 22 pisos compostos da prévia. Preserve perfis de subida, emendas, níveis e alturas de pouso. Entregue módulos de 16 × 16 lógicos em PNGs ou células de 32 × 32. Para tiras irregulares, use o dobro da dimensão do recorte. Cada material precisa de topo contínuo, corpo repetível, quinas internas e externas, ponta, transição, apoio fino e variações. Monte 12 módulos seguidos para conferir costuras. Refaça os apoios das câmaras e dos altares com o material do santuário.

- **Myriadd** · `castle`, `vault`, `workshop`, `out`, `garden`, `mir`, `terr`. Inclua `tiles_castle`, `workshop_masonry_body`, `parapet_myriadd`, `parapet_post_left`, `parapet_post_right`, `cloud_platform` e `cloud_platform_wisp`. Separe mármore, alvenaria aquecida da oficina e bordas de gramado. Nos Terraços, mantenha o topo da nuvem legível como pouso e deixe as formas vaporosas na base.
- **Gileád** · `ga`, `gc`, `gh`, `gm`, `gd`. Inclua `archive_masonry_body`, `hplat` e `platform_chain_gilead`. Preserve a pedra lavanda, juntas e ferragens. Trabalhe as transições de borda nos Arquivos, no Campo e no Santuário.
- **Iomadh** · `ic`, `ih`, `im`, `highwoods_river`, `id`. Inclua `iomadh_council_masonry_body`, `branch_top`, `iomadh_understory` e `platform_vine_iomadh`. Separe ponta de galho, raiz, junção de tronco e sombra inferior. Mantenha a face superior dos galhos e plataformas na altura dos apoios atuais.
- **Éhrein** · `ec`, `eh`, `em`, `ed`, `witchclearing`. Inclua `ehrein_court_masonry_body`, pedra fria e úmida, transições de urze e plataformas internas. A cabana pintada `witchhut` usa arte própria.
- **Bloco móvel** · `block` passa de 48 × 16 para 96 × 32. Preserve a aresta superior. Onde o material muda por reino, acompanhe o estilo do mapa. Os efeitos de Tempo são aplicados pelo motor.

## Lote 3 · props e planta camuflada

- **Santuários externos** · `shrine_ehrein` e `shrine_iomadh`. Preserve a abertura, a linha de solo, a posição das ombreiras do arco e a leitura de perfil.
- **Molduras, portas e túneis** · `door_gate_ehrein`, `door_gate_gilead`, `door_gate_iomadh`, `door_gate_myriadd`, `door_tunnel_ehrein`, `door_tunnel_gilead`, `door_tunnel_iomadh`. Separe pedra, metal e vão e mantenha pivô de apoio e largura útil.
- **Portais** · `portal_airgead`, `portal_ehrein`, `portal_ehrein_broken`, `portal_fiodhor`, `portal_iomadh`, `portal_morgwang`, `portal_myriadd`, `portal_nemet`. A variante quebrada mantém centro e recorte da estrutura intacta. A identidade vem de materiais e motivos já presentes. Onde houver brasão, preserve estrela de Myriadd, torre de Éhrein, ampulheta de Gileád, olho de Iomadh, folha de Nemet e as três marcas de garras de Fiódhor. Nos demais casos copie o símbolo da referência.
- **Arquivos e jardim** · `archive_stair` tem degraus jogáveis, então preserve altura, começo e fim. `archive_three_graces` conserva pedestal e silhueta. `palace_balcony_playable` mantém comprimento e altura de pouso junto à fachada.
- **Mobiliário** · `table_council`, `throne_ehrein`, `throne_gilead` e `throne_myriadd` seguem a altura dos NPCs do mapa. Preserve pernas, base e contato com o chão. Refaça as juntas e materiais com detalhe compatível com os espantalhos.
- **Cabana externa fechada** · `witch_hut_closed` conserva entrada, telhado e escala doméstica. Confira a base em `witchclearing.jpg`.
- **Planta camuflada** · `enemy_plant` de 36 × 40 vai a 72 × 80. Preserve pé de raiz, volume e transição para os quadros já aprovados da planta exposta.

## A’Maídhe · integrada nesta prévia

`05-integrados-nesta-versao/amaidhe_nova_2x.png` é a folha nova. Ordem das quatro células de 80 × 96: repouso, respiração, piscar, fala. A ficha ilustrada da líder de Iomadh continua como referência para quaisquer ajustes posteriores. Confira o focinho e o apoio dos pés com o sprite de Idhrí em escala real.

## Lote de reexportação · 20 originais confirmados

`04-reexportacao/originais` tem os PNGs fonte. `04-reexportacao/em-uso` tem as peças que ocupavam o mesmo lugar na prévia auditada. O manifesto registra o ZIP de origem, o caminho interno, dimensões e hash SHA-256. Use `03-reguas/originais-e-demo.jpg` para conferir semelhança antes de substituir qualquer peça.

1. Corte somente a margem transparente do original. Use a caixa alfa de `em-uso` para manter posição do desenho, solo, faixa de parede, encaixe das portas e enquadramento do fundo.
2. Exporte RGBA a 2× da ocupação lógica. Coloque o recorte no mesmo lugar de seu equivalente em uso. Preserve o alfa suave onde há névoa ou parallax e confira opacidade na alvenaria e no tecido.
3. Integre o PNG na camada a 2× com as coordenadas lógicas preservadas. Quadros recortados e camadas acolchoadas para parallax precisam de coordenadas físicas dobradas. Inspecione pelo canvas final de 800 × 450 e teste a colisão de prateleiras, portas e bordas.
4. A demo atual mantém quatro desses masters. Os outros 16 voltaram às versões anteriores. Consulte `reexports-revisao.json` e compare os recortes contra as peças aprovadas antes de reativar os masters. Preserve exatamente os 12 vazios da balaustrada de Gileád, o vão do toldo da casa e a linha de apoio das portas. Amostre o alfa depois de integrar no canvas do jogo.
