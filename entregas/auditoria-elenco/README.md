# Fortune Fell · Auditoria do elenco
Base jogável da correção de Llewlás (255f548). Abra comparacao.png primeiro. Todos os oito sprites usam a mesma ampliação inteira (4×), com os pés alinhados. A linha superior marca 39 pixels, a altura visível de Idhrí em repouso.

## O que a comparação mostra

- Idhrí tem 22 × 39 px em repouso. A corrida ocupa 30 px de largura e 37–39 de altura. O golpe intermediário cai a 35 px. Preserve a compressão da pose e confira a posição do pé de apoio ao refazer a animação.
- Llúpin ocupa 23 × 45 e Llewlás, com a lança, 27 × 46. Na prancha, compare a testa e o queixo dos irmãos com os de Lúgham. Para redesenhá-los, posicione primeiro olhos, queixo e ombros. Reserve espaço adicional para a lança, o cabelo e a capa. Usar os 46 px como altura corporal levaria a uma correção errada.
- A Arquivista e o rei ocupam praticamente a mesma caixa (25 × 40 e 25 × 39). Na Arquivista, cabelo, mangas e vestido formam massas contíguas. No rei, antebraço e cintura ficam legíveis separadamente. Priorizar a separação entre mão, manga e tronco na Arquivista.
- Seyrín ocupa 19 × 39. O capuz e o cabelo definem a silhueta. Preservar o rosto velado e a paleta de Gileád. Ínys e Halberd medem ambos 32 px de altura, com larguras de 17 e 21. A postura infantil de Ínys e o tronco largo de Halberd pedem dois modelos curtos distintos. Conferir a mão de Ínys no puxador da carruagem durante a passada.
- Em Iomadh, conselheiros e mercadores têm silhuetas e anatomias distintas. Usar famílias de corpo por espécie. Guardiões e criaturas requerem referências próprias.

## Régua proposta para os primeiros desenhos
Medidas provisórias para um adulto humano de estatura média, de pé, visto de três quartos na escala lógica do jogo. Colocar a sola em y=0 e contar para cima. Topo do crânio a 38–40 px, queixo a 28–30, ombros a 25–27, cotovelo a 18–20, punho relaxado a 13–15 e joelho a 9–11. Reservar 10–12 px de largura para os ombros sob a roupa. Conferir as articulações com um esqueleto por cima do desenho antes de vestir o personagem. Coroa, cabelo, chifres, armas e capas podem ultrapassar a régua. Reavaliar os valores no primeiro piloto.
 
## Ordem de redesenho
1. Idhrí em repouso, passada aberta e golpe. Manter cabelo, roupa, arco e leitura dos anéis. Avaliar a 1× e 4× junto de Llúpin, Llewlás e Lúgham.
2. Fechar o restante das ações do herói e dos irmãos depois de aprovar a escala. Na lança de Llewlás, verificar apoio na mão e pivô em cada quadro.
3. Arquivista, Seyrín, Bruxa, Ínys com carruagem, Halberd e Pódhraic. Fixar pivô do pé e variar anatomia segundo idade, espécie e postura.
4. Aplicar as famílias aprovadas aos figurantes, guardas e cortes de cada reino. Manter proporções próprias para criaturas e chefes. Validar duplas em cenas reais.

## Cobertura
O CSV contém 155 amostras, incluindo 12 poses de Idhrí. As quatro pranchas elenco mostram 95 combinações distintas de tipo e visual/pose. O inventário percorreu os mapas registrados no motor, desenhando NPCs, figurantes, inimigos, guardiões e o companheiro em canvas isolado. As dimensões são o retângulo de pixels com alfa a partir de 64 e podem incluir equipamento ou efeitos. As pranchas gerais limitam a ampliação de imagens grandes para caber na célula. Não medimos articulações automaticamente. Variantes condicionadas a missões, mudanças de cabelo, poses de diálogo, retratos, objetos acompanhantes, animações completas dos NPCs e arte exclusiva de cutscenes ainda requerem revisão dedicada. Esta entrega é a auditoria e a proposta de direção para o redesenho.
