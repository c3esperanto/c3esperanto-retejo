# LEGUMIN.md

## Redakti la paĝon

- La tuta procedo bezonas Jekyll: https://jekyllrb.com/docs/installation/
- Klonu la deponejon: `git clone https://github.com/c3-esperanto/c3-esperanto-retejo.git`
- Ŝanĝu al la dosierujo, c3-esperanto-retejo, kaj ekservu la paĝon: `jekyll serve`
- La paĝo nun estas atingebla ĉe: http://localhost:4000
- Nun eblas redakti, kaj jekyll aŭtomate kunmetas la paĝojn.
- Jekyll kunmetas la paĝon el la dosieroj rekte en la ĉefa dosierujo
- La kunmetita retpaĝo troviĝas en: *_site/*
- Ceterajn dosierojn/dosierujojn, ekz. *nombrilo/*, jekyll kopias al *_site/* senŝange, listo da esceptoj troviĝas en *_config.yml*.
- *hacker-blog-master/* enhavas la etoson de la paĝo.

## Aŭtomata disponigo

La Github-Ago ĉe [.github/workflows/ĉefa.yml](https://github.com/c3-esperanto/c3-esperanto-retejo/actions/workflows/%C4%89efa.yml) aŭtomate post ĉiu kodkunfando alŝutas la paĝon al: https://c3eo.chaotik.de/