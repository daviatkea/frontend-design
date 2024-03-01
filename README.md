# **Card Expand Challenge**

![Card Expand Challenge](readmeassets/card-expand.gif)

## Formål

Formålet med denne øvelse/udfordring er at se, hvordan du vil gribe et layout an, uden nødvendigvis at vide, hvordan du skal opnå det visuelle resultat. Dette vil hjælpe dig med at udfordre dig selv og din viden om HTML og CSS.

## Opgavebeskrivelse

Du skal arbejde med denne branch, som er sat op med Astro-projekt. Indholdet er allerede loadet ind på index.astro, så du skal primært fokusere på at style Card.astro, så du opnår den ønskede effekt.

### Specifikke mål

- Udfordre dig selv til at anvende din viden om CSS.

> [!NOTE]  
> **Bemærk, at denne branch allerede inkluderer et CSS Reset.**

## Hints

- Du kan bruge `flexbox` til at opnå det ønskede layout.
- Brug `flex` til at justere kortets bredde (hhv. `flex: 1;` og fx `flex: 1.3;`).
- Du kan animere bredden ved at bruge `transition`, når kortet bliver hovered.
- Du kan bruge følgende Grid-teknik til at animere højden på kortets tekstindhold, så det kommer til syne med hover:
  [https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/#with-grid](https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/#with-grid)

## Løsning

Du kan finde en løsning på denne udfordring under `/src/components/solution/Card.astro`.
