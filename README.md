# **Flow-space (spacing som system)**

## Formål

At forstå og implementere **flow-space-teknikken** som en måde at skabe konsistent vertikal spacing i tekstindhold.

Målet er ikke at sætte margin på hvert element enkeltvis, men at lave en robust standardregel med få og tydelige overrides. Det giver mere læsbar og mere vedligeholdelsesvenlig CSS.

## Ressourcer

- [Flow-space og spacing i praksis](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/flow-space-og-spacing-i-praksis) (kursusmateriale)
- [My favourite 3 lines of CSS](https://piccalil.li/blog/my-favourite-3-lines-of-css/) af Andy Bell

## Opgavebeskrivelse

Du skal arbejde med denne branch, som indeholder et HTML-dokument og et stylesheet (`style.css`). Dokumentet indeholder en blanding af `h2`, `h3` og `p`. Din opgave er at bruge flow-space-teknikken til at skabe en god og konsekvent vertikal rytme i indholdet.

Du skal lave en løsning, hvor:

- der findes en tydelig **standard spacing-regel**
- spacing kan justeres lokalt med `--flow-space`
- enkelte elementer/overgange får bevidste overrides (ikke mange one-off regler)

## Konkrete krav

1. Angiv en standard vertikal afstand på `.5rlh` mellem alle elementer inde i **`article`**, med mulighed for overskrive denne via en custom property kaldet `--flow-space`.
2. For `h2`, sæt `—flow-space`-værdien til `2rlh`.
3. For `h3`, sæt `—flow-space`-værdien til `1rlh`.
4. For alle elementer, der kommer lige efter **`h3`**, reducér `—flow-space` til `.25rlh`.

_Hvis du ikke har set `rlh` før, så kan du læse mere om det i kursusmaterialet [lh/rlh](https://demos.cssxs.dev/topic/3sem/crafting-ui/typography/line-height-lh-og-rlh-i-praksis#lh-og-rlh-kort-fortalt)_

Din løsning skal vise en forståelse af flow space-teknikken og korrekt implementere de nødvendige CSS Custom Properties.

## Aflevering

Find link til din løsning på Netlify og aflever det på Fronter.

Link-struktur: **flow-space--**[Dit unikke netlify link].netlify.app/
