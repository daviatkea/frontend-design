# **Bento Grid**

![bento solution](./assets/bento.gif)

## Formål

Formålet med denne opgave er at give dig en fornemmelse af, hvordan man kan lave et såkaldt "bento"-grid med container queries og CSS Grid. Ved at bruge `grid-template-areas` og container queries, kan man forholdsvist let skabe fleksible og adaptive layouts, der tilpasser sig forskellige containerstørrelser.

## Ressourcer

- [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
- [Getting started with container queries](https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/)
- [Creating a bento grid (VIDEO)](https://frontendmasters.com/courses/pro-css/creating-a-bento-grid/)

## Opgavebeskrivelse

Du skal arbejde med denne branch, som indeholder et HTML-dokument og en tilhørende stylesheet, der er delvist implementeret. I denne opgave skal du færdiggøre implementeringen af et "bento"-grid (se reference).

Identificer de elementer, der skal fungere som containere, og anvend `container-type: inline-size`. Dette vil gøre det muligt at anvende container queries på disse elementer.

Du skal primært bruge container queries til at ændre skriftstørrelsen (og muligvis lidt på layoutet), så teksten passer i diverse `.card`-elementer.

Brug `grid-template-areas` til at definere, hvordan elementerne skal placeres i forhold til hinanden, og hvordan de skal tilpasse sig forskellige skærmstørrelser ved at bruge `@media()`.

Når du har implementeret ovenstående ændringer, eksperimenter da med at ændre størrelsen på containere for at observere, hvordan layoutet dynamisk tilpasser sig.

### Specifikke mål

- Forstå, hvordan container queries kan forbedre både brugeroplevelsen og udvikleroplevelsen ved at skabe mere fleksible og kontekstsensitive layouts, der automatisk tilpasser sig forskellige containerstørrelser.
- Forstå, hvordan man kan bruge `grid-template-areas` til at skabe et layout, der er nemt at vedligeholde og tilpasse.
- Arbejde med og ændre eksisterende CSS

> [!NOTE]  
> **Bemærk, at denne branch inkluderer et lille CSS Reset.**

## Aflevering

Find linket til din løsning på Netlify og aflever det på Fronter.

Link-struktur: **bento-grid--**[Dit unikke netlify link].netlify.app/

Reference: [Dribbble Bento Grid](https://dribbble.com/shots/23700196-Brewbolt-Branding)
