# Fortune Fell — estudos de arranjo v1

Este lote contém dois estudos novos, separados do jogo. Foram trabalhados voicings, distribuição instrumental, fraseado, dinâmica, tempos e contraste entre contextos, usando as melodias e harmonias da R7 como ponto de partida.

## Estudos produzidos

- **Amidst Rain and Ruin — 1min56s:** Town → Moors → Shrine → Battle → coda. Gaita, flauta, harpa, cordas, violoncelo, trompa e intervenções de tímpanos/coro. A gaita é a do banco GM disponível, uma substituta para experimentar o arranjo; não são amostras dedicadas de uilleann pipes.
- **Eyes of Iomadh — 1min50s:** Plaza → Wilds → Shrine → Battle → coda. O acordeão conduz a praça e dialoga com a flauta. Há versões instrumental e com sussurros experimentais.

## Sussurros

O autor escolheu vozes sussurrando palavras indistintas. O mockup usa fonemas articulados sintetizados, com perfis diferentes de formantes e posição estéreo. Não existe conteúdo semântico, idioma ou lore inventada. São nove intervenções espaçadas; não há sussurros durante a batalha.

**Não é gravação humana nem geração neural de voz.** A primeira ideia de simples sopro não foi usada. A camada experimental está separada para avaliação e eventual substituição por vozes gravadas.

## Arquivos

Cada pasta contém `mix.mp3`, `arranjo.mid` com pistas por instrumento e `arranjo.json` com notas, tempos, programas e contextos. Iomadh também contém `mix-com-sussurros.mp3`.

O pacote completo acrescenta os dois instrumentais em FLAC de 24 bits/44,1 kHz e a camada isolada `sussurros-experimentais.flac`, alinhada ao instrumental de Iomadh. Assim, as vozes podem ser editadas independentemente. Os WAV de trabalho não foram duplicados no pacote.

O áudio tem 0,5 segundo de pré-roll; o MIDI começa no primeiro pulso. `CONTEXTOS.csv` registra os tempos de cada seção. Estes são estudos lineares: os movimentos ainda não são loops finais para a engine.

## Qualidade e verificação

O banco amostrado disponível é TimGM6mb; sua procedência está no TXT incluído. Ele não foi apresentado como biblioteca orquestral definitiva e não foi embutido no pacote.

Foram verificados formato, duração, estéreo, limites de notas/velocidades, estrutura MIDI e ausência de clipping nos renders. Medições dos instrumentais: Éhrein, −21,43 LUFS e −4,06 dBTP; Iomadh, −19,67 LUFS e −4,99 dBTP. Foi aplicado o mesmo ganho aos dois masters, sem compressão ou normalização individual.

Ainda falta curadoria auditiva humana de timbres, composição e mix. **Nenhuma música ou voz foi integrada no jogo.**

## Reprodução e edição

Importe os MIDI na DAW para atribuir outras bibliotecas. Para reproduzir os renders por código, use Python 3, numpy, scipy, libfluidsynth, ffmpeg e o TimGM6mb no caminho documentado em `produzir.py`:

1. Execute `python produzir.py`.
2. Execute `python sussurros.py` para produzir o mockup vocal e o mix alternativo.

Os próximos passos são revisar os dois arranjos, avaliar a camada de sussurros, escolher timbres mais especializados e desenvolver Shadow Over the Rainbow a partir da identidade de Éhrein. Os títulos oficiais permanecem os definidos pelo autor.
