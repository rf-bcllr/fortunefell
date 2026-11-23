# Fortune Fell — reexports R8, separados da R7

A R7 continua intacta e aprovada para publicar. Este pacote NÃO contém uma nova demo completa nem ativa animações.

## Pronto

- Seyrín:3portraits128x128 recoloridos seletivamente na mesma referência de paleta usada pelo spriteR7. Ouro, pele, cabelos claros, expressões e transparência preservados. Arquivos exp_portrait_oracle_{neutral,listening,reaction}.png.
- Halberd/Ínys:6portraits reexportados de masters reais e comparados. Sem ganho inequívoco: preservar os6ativosR7. Candidatos incluídos só para histórico/revisão.
- 7animações candidatas (6walks+Ínys pull), reexportadas de fontes maiores existentes, com escala/âncora por personagem. Não ativadas. Conferir manifest eGIFs antes de integração.

## Aplicar só Seyrín numa cópia separada

Com Python3, executar: `python aplicar_seyrin.py fortune-fell-r7.html fortune-fell-r8-seyrin.html`. O script exige SHA exatoR7, impede sobrescrever a entrada e troca apenas3PNGs embutidos. Não altera falas, mapa, física, sprites ou outros portraits.

## Pendências

Validar visualmente7animações com Idhrí em escala de jogo antes de ativar. Ínys continua separada de carruagem e boneco; não aplicar tinta às mãos. Não confundir reexport de pull com implementação completa de carruagem/boneco/estados. Masters maiores da Arquivista e props de forja/mesa/escada não localizados.5folhas de exército com fontes maiores são próximas candidatas, sem produção neste lote.

## Publicação

R7 está na branch entrega-arquivos-r7, commit a3d9eb5. OZIPpúblico foi baixado e oHTMLconferido porSHA. Siteoriginal/Pages/API seguem bloqueados pelo runtime restrictedrev1 semdomínios adicionais. Draftrev3JÁcontémdomínios,masnãoconstaaplicado. Aplicar/salvar rascunho nasconfigurações, confirmar política ativa e então repetirAPI/auth/deploy. PR não criado,main preservada; não alegar site atualizado.
