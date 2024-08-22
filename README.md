# **Animated Accordion Challenge**

![Animated Accordion](readmeassets/accordion.gif)

## Formål

Formålet med denne øvelse/udfordring er at se, hvordan du vil gribe et effekt an, uden nødvendigvis at vide, hvordan du skal opnå det visuelle resultat. Dette vil hjælpe dig med at udfordre dig selv og din viden om CSS.

## Ressourcer

Brug følgende ressourcer til at hjælpe dig med at løse denne udfordring:

- [How to animate height with css grid](https://www.stefanjudis.com/snippets/how-to-animate-height-with-css-grid/)
- [The simple trick to transition from height 0 to auto with CSS](https://www.youtube.com/watch?v=B_n4YONte5A)

## Opgavebeskrivelse

Du skal arbejde med denne branch, som er sat op med Astro. Indholdet er allerede loadet ind på `index.astro`, så du skal primært fokusere på at inkorporere effekten i `AccordionItem.astro`.

Du kan bruge følgende selector til at style elementer i deres åbne tilstand:

`article:has([aria-expanded="true"])`

Hvis vi fx skal animere SVG-ikonet, når en artikel er åben, kan vi skrive:

```css
article:has([aria-expanded="true"]) {
  /*...*/
  .vertical-line {
    rotate: z 90deg;
  }
}
```

### Specifikke mål

- Udfordre dig selv til at anvende din viden om CSS samt at implementere teknikker fra eksterne ressourcer.

> [!NOTE]  
> **Bemærk, at denne branch allerede inkluderer et CSS Reset.**
