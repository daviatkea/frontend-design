# Styling af tekstindhold

## Formål

At forbedre den visuelle præsentation af tekstindhold ved at anvende principper for god typografi, spacing og hierarki.

Opgaven handler om at gøre indholdet mere læsbart og mere bevidst stylet ved hjælp af:

- typografisk skala
- spacing-skala
- line-height
- vertikal rytme
- toneværdi/gråtonehierarki (neutrals)
- styling af tekstnære elementer (links, inline `code`, `figure`, `figcaption`)

## Ressourcer

Brug ressourcerne herunder som hjælp og reference til denne opgave.

1. [Styling af tekstindhold](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/styling-af-tekstindhold)
   - prose/article-wrapper, links, inline code, figcaption, nabo-regler og typografisk hierarki

2. [Fluid typografi og skalaer i praksis](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/fluid-typografi-og-skalaer-i-praksis)
   - hvordan du bruger type- og spacing-skalaer (`--step-*`, `--space-*`) i praksis

3. [Flow-space og spacing i praksis](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/flow-space-og-spacing-i-praksis)
   - flow-space, `gap` og spacing-intent i læsbare layouts

4. [Line-height, lh og rlh i praksis](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/line-height-lh-og-rlh-i-praksis)
   - line-height som læsbarheds- og layoutværktøj

5. [Units i praksis](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/units-i-praksis)
   - hvordan du bruger forskellige units (rem, lh, ch) i typografi og spacing

## Værktøjer

Brug værktøjerne til at generere typografiske skalaer, spacing-skalaer og til at tjekke dine typografiske valg.

- [Utopia Type Scale Calculator](https://utopia.fyi/type/calculator/)
- [Utopia Space Scale Calculator](https://utopia.fyi/space/calculator)
- [Sane Typography Rules](https://anthonyhobday.com/sideprojects/saferules/) (hurtigt opslagsværk)

## Opgavebeskrivelse

Du skal arbejde med denne branch, som indeholder et HTML-dokument med overskrifter, paragraffer, billeder og andre typografiske elementer.

Brug `style.css` til at forbedre indholdets typografi og visuelle hierarki.

Fokus er på at style **tekstindhold (prose/article)**, så det bliver:

- læsbart
- roligt
- hierarkisk tydeligt
- visuelt sammenhængende

HTML’en indeholder allerede forskellige elementer (bl.a. `h1-h4`, `p`, links, inline `code`, `figure`, `figcaption`) og små tekstvarianter som `.text-lead` og `.text-small`, som du forventes at tage stilling til.

Brug følgende gråtoner (neutrals) i `:root` som udgangspunkt for tonehierarkiet:

- `--gray-50: #f9fafb;`
- `--gray-100: #f3f4f6;`
- `--gray-200: #e5e7eb;`
- `--gray-300: #d1d5db;`
- `--gray-400: #9ca3af;`
- `--gray-500: #6b7280;`
- `--gray-600: #4b5563;`
- `--gray-700: #374151;`
- `--gray-800: #1f2937;`
- `--gray-900: #111827;`

## Anbefalet fremgangsmåde

1. Start med en `article`-wrapper:
   - læsebredde
   - centreret layout
   - grundlæggende flow-spacing

2. Definér en typografisk skala som tokens (fx `--step-*`)
   - brug den på `h1-h4`, brødtekst, lead og small tekst

3. Definér en spacing-skala (fx `--space-*`)
   - brug den til både wrapper-padding og vertikal spacing

4. Indfør gråtonehierarki
   - overskrifter mørkere
   - brødtekst lidt lysere
   - småtekst/figcaption endnu lettere (men stadig læsbar)

5. Finjustér line-height
   - ikke kun globalt, men bevidst for overskrifter og brødtekst

6. Tilføj nabo-regler (adjacency)
   - fx `p + h2`, `h2 + h3`, `figure + h2`
   - så spacing føles gennemtænkt og ikke “ens overalt”

7. Style tekstnære elementer
   - links
   - inline `code`
   - `figure` og `figcaption`

## Specifikke mål

1. Definér en flydende typografiskala som tokens (fx `--step-*`) og brug den på `h1-h4`, brødtekst og småtekst.
2. Definér en spacing-skala (fx `--space-*`) og brug den til både article-padding og vertikal spacing i indholdet.
3. Opsæt en `article`-wrapper med passende læsebredde og stabil flow-spacing.
4. Brug gråtonehierarki til typografisk hierarki:
   - overskrifter mørkere
   - brødtekst lidt lysere
   - småtekst/figcaption endnu lettere (men stadig læsbar)
5. Justér line-height bevidst (ikke kun globalt) for overskrifter og brødtekst.
6. Tilføj mindst et par nabo-regler (fx `p + h2`, `h2 + h3`), så spacing føles gennemtænkt.
7. Style links, inline `code`, `figure` og `figcaption`, så de passer ind i det samlede typografiske system.

> [!NOTE]
> Bemærk, at denne branch allerede inkluderer et CSS Reset.

## Tips

- Test med længere overskrifter og ekstra tekst, ikke kun standardindholdet.
- Tjek hvordan `h2 + h3` og `p + h2` ser ud. Det er ofte her typografien falder fra hinanden.
- Brug få, tydelige tokens frem for mange næsten ens værdier.
- Start simpelt, og finjustér bagefter.

## Aflevering

Find link til din løsning på Netlify og aflever det på Fronter.

Link-struktur: `text-styling--[dit-unikke-netlify-link].netlify.app/`
