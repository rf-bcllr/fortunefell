# Fortune Fell — estudos de arranjo v1

Produzidos nesta sessão, separados do jogo. Não são os antigos áudios apenas convertidos: há novos voicings, distribuição instrumental, fraseado/respiração, dinâmica de notas, mapa de tempos, contraste entre contextos e coda. O material melódico/harmônico inicial vem da R7 acessível.

## Estudos

- Amidst Rain and Ruin:115.60s;Town→Moors→Shrine→Battle→coda. GaitaGM, flauta, harpa, cordas, violoncelo, trompa, tímpanos/coro pontuais. A gaita do banco é uma substitutaGM; não é uma gravação dedicada deuilleannpipes.
- Eyes of Iomadh:109.72s;Plaza→Wilds→Shrine→Battle→coda. Acordeão em primeiro plano/diálogo com flauta, harpa e cordas. Dois mixesMP3: limpo e com sussurros experimentais.
- O autor escolheu vozes sussurrando palavras indistintas. A camada experimental usa fonemas articulados sintetizados, sem significado/idioma/lore; não é gravaçãohumana nem síntese neural. Há nove entradas esparsas com perfis de formantes/pan diferentes, sobretudoexploração/santuário; semvozesna batalha. A proposta inicial de simples sopro não foi usada.

## Arquivos

Em cada pasta: mix.mp3, arranjo.mid (pistas por instrumento),arranjo.json (notas/tempos/programas/contextos). Iomadh inclui mix-com-sussurros.mp3. No pacotecompleto:mix.flacPCMint24/44.1kHz dosdoisinstrumentais e sussurros-experimentais.flacisolado/alinhado para mix. Soma dascamadas permiteeditarvozesindependentemente. WAV24 ficamnoambientedetrabalho;nãoincluídosparaevitarduplicação. O áudio tem0.5s depre-roll;MIDIcomeçanoprimeiropulso.

## Limites

Banco TimGM6mbamostradoinstalado(local,proveniêncianotxt); não banco orquestraldefinitivo. Nenhuma gravaçãohumana de sussurro foi obtida. Um mockupcomarticulaçãovocalsintética nãoequivaleàproduçãohumana final. MúsicaevozesnãoforamintegradasnoHTML. Estudoslineares:osmovimentosnãosãoloopsfinaisprontosparaengine. Nãohouvecuradoriaauditivahumanafaixaa faixa.

Verificado:renderamostrado24bits44.1kHzestéreo,MP3/FLACválidos,durações,limitesdenotas/velocidades,semclippingnasamostras,mediçãodeLUFS/truepeak e MIDIestruturalmenteválido. Éhrein:-21.43LUFS/-4.06dBTP;Iomadhlimpo:-19.67LUFS/-4.99dBTP. Ganhoigual6nosdoismasters,semcompressão/loudnessnormalization;balanceamentopendecuradoria.

## Reprodução

produzir.py + scores.json;Python3,numpy,scipy,libfluidsynth,ffmpeg eTimGM6mbnoendereçodocumentado.Renderizarcom`python produzir.py`;depois`python sussurros.py`. Parausarcomoutrosinstrumentos,importarosMIDIsnaDAW eatribuirbibliotecas. O banco nãofoiembutido.

Próximos:curadoria de composição e dinâmica,substituirGMporbibliotecasespecializadasquandoadequado,avaliarsussurrossintéticosvsgravaçõesreais;desenvolverShadowOvertheRainbow apartirdaidentidadedeÉhrein.Nãoinventarnomes/títulosnemtextosfaladosinteligíveis.
