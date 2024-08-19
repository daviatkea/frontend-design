# **Scrolling Cards**

![Scrolling Container](readmeassets/scrolling-container.gif)

## Formål

Formålet med denne øvelse er, at gøre dig i stand til at løse kunne dele af den større tema-opgave.

## Opgavebeskrivelse

Du skal arbejde med denne branch, som er sat op med Astro. Indholdet er allerede loadet ind på index.astro, så du skal primært fokusere på at style `ScrollingContainer.astro`, så du opnår den ønskede effekt.

Du skal også sætte styles op for det overordnede layout via `section` på `index.astro`, hvori `<ScrollingContainer />` er placeret.

> [!NOTE]  
> **Bemærk, at denne branch allerede inkluderer et CSS Reset.**

## Ressourcer

Projektet inkluderer følgende custom properties, som du med fordel kan bruge:

- `--content-width` – indholdets bredde
- `--card-padding` – kortenes padding
- `--card-gap` – afstanden mellem kortene
- `--card-border-radius` – kortenes border-radius
- `--card-background` – kortenes baggrundsfarve
- `--card-text-color` – kortenes tekstfarve

Du kan finde hjælp til at løse dele af denne øvelse i følgende:

- [Flexbox-øvelse](https://exercssises.vercel.app/flex/#flexbox-11)
- [Grid-øvelse](https://exercssises.vercel.app/grid/#grid-07)

## Ekstra udfordring (valgfri)

Brug Scroll Snap til at kontrollere, hvor meget der scrolles ad gangen samt hvor kortene stopper.

Hints:

- `scroll-snap-type`
- `scroll-snap-align`
- `scroll-snap-stop`
- [Scroll Snap på MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)

## Aflevering

Find linket til din løsning på Netlify og aflever det på Fronter.

Link-struktur: **scrolling-container--**[Dit unikke netlify link].netlify.app/
