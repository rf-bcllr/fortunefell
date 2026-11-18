# Fortune Fell — continuar o reparo visual P1

## Entrega atual

- Base recebida: `current.html`, SHA256 `f5f6b063d6b4ee08cf0d595e59047e0335765dcb2870cc634ed32efd893196f5`.
- Cópia corrigida: `fortune-fell-corrigido.html`, SHA256 `d4993d89dad7d6053167ae5271e8a8e95a2ec190810f768fc50090b345e5e9f4` no checkpoint desta documentação. Recalcular se o arquivo mudar.
- `rebuild.py`, `scene-fixes.js`, `reexport-manifest.json` e assets-fixed registram/reproduzem o reparo. Não substituir a base por um HTML anterior.

## Aplicado localmente

1. Treze sheets reexportados das fontes originais com BOX, paleta40 compartilhada sem dither, alpha binário e escala uniforme; Ínys28px, Seyrín com ajuste leve de temperatura sem mudar figurino/design.
2. Arquivista antiga restaurada, preservando gameplay.
3. Cache do parallax do Arquivo exclusivo de `ga`; `gd` conserva o fundo original aprovado. Não voltar a compartilhar a substituição pelo tema gileadD.
4. Quatro casas, forja e monumento reaplicados após installFinalArt; lustre workshop movido para x7 para não cobrir o topo da forja. A crítica do lustre na revisão independente é anterior a esse ajuste.

## Verificado

`verification.json`: sete mapas renderizados (`gh`, `eh`, `workshop`, `ga`, `gd`, `gc`, `garden`), zero erros JavaScript, zero assets falhos. Ordem `ga→gd→ga→gd` PASS; textura dos Arquivos ausente em gd. Capturas after-* e `REVISAO_VISUAL.md` documentam a composição. **Não houve run completa da demo nem aprovação artística final.**

## Falta fazer

- Galeria/parallax dos Arquivos continuam granulados. Os masters originais novos não estavam no HTML, somente PNGs nativos; obter os masters da outra conta ou redesenhar os assets rejeitados na resolução adequada. Não prometer recuperação por upscale/sharpen/paleta.
- Proporções artísticas dos NPCs continuam parcialmente inadequadas perto de Idhrí; a exportação é melhora incremental, não substitui desenho/clusters coerentes. Conferir Seyrín e Ínys em1×/4× e no cenário antes de aprovar.
- Carruagem/boneco não receberam comportamento novo aqui. Conferir puxar/brincar, cordão, rodas, pivôs e cinco estados reais do boneco; tinta nas mãos só diálogo, Ínys sem mudança visual por tinta.
- Integrar demais pendências dos lotes; Llewlás/Llúpin continuam apenas na fila, sem morte definitiva inferida para Llewlás.
- Fazer playtest completo e publicar pela conta autorizada, conferindo o HTML realmente servido.

## Publicação e transferência

**Site original não atualizado nesta conta:** https://fortune-fell-recuperado.fragrantgear2.chatgpt.site/ . Não há ferramenta de hospedagem autorizada disponível. O agente principal prepara o pacote para download no GitHub `entrega-visual-p1`; esse download não é publicação da demo no site original. Registrar URL/hash final do pacote após o envio.

Documentação ampla: `../fortune-expansion/PASSAGEM_OUTRO_CODEX.md` e `LEIA_PRIMEIRO.md`. Preservar designs oficiais, fontes aprovadas e o parallax original do Santuário. Nenhuma geração de arte nova foi feita neste reparo.

## Reexportação reproduzível

O ZIP inclui fontes/ com as quatro imagens originais utilizadas; assets-fixed contém os PNGs prontos. Para reproduzir, coloque o HTML original enviado pelo autor como current.html junto de rebuild.py, instale Pillow e execute python rebuild.py. O HTML original não está duplicado no pacote para economizar transferência. Os PNGs nativos dos demais objetos continuam preservados no HTML corrigido.
