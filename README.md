# **Code in the Dark 2**

## Formål

Formålet med denne øvelse er at skærpe din evne til at visualisere det ønskede resultat af et layout udelukkende gennem koden. Du vil "kode i blinde", for at se, om det, du forestiller dig, stemmer overens med resultatet af din kode. Dette vil hjælpe dig med at forfine din forståelse af, hvordan HTML og CSS interagerer for at skabe et visuelt layout, og hvordan man kan forudsige det visuelle output baseret på ren kodning.

## Opgavebeskrivelse

Du skal arbejde med denne branch, som indeholder en HTML-side, en CSS-fil og et billede, som du skal bruge til at kode nedenstående layout. Der er et overlay, der skjuler resultatet af dit arbejde undervejs.

Forsøg at matche det vedhæftede layout så tæt som muligt.

Når du føler dig klar til at afsløre dit design, skal du ændre værdien af `--hide-overlay` til '1' i :root-sektionen i CSS-filen. Dette vil fjerne overlayet og afsløre resultatet af dit arbejde.

![Code in the Dark 2](./assets/image.png)

### Brug af SVG-ikoner til links

I løbet af denne øvelse skal du integrere sociale medie-ikoner som links ved hjælp af SVG. Du får stillet en række SVG-ikoner til rådighed, som repræsenterer forskellige sociale platforme: `#mastodon`, `#gitHub`, `#website` og `#twitter`.

For at inkludere et ikon skal du bruge et `<svg>` element sammen med et `<use>` element. `<use>` elementet skal henvise til en specifik del af en SVG-fil ved hjælp af en fragment-identifikator. Denne identifikator angives med en `#`, efterfulgt af ikonets navn, som er defineret i jeres `icons.svg` fil.

Her er et eksempel på, hvordan du kan indsætte et Mastodon-ikon:

```html
<svg>
  <use href="icons.svg#mastodon" width="25" height="25" />
</svg>
```

Sæt denne kode ind på det sted i HTML-dokumentet, hvor du vil have ikonet til at vises. Husk at erstatte #mastodon med det relevante ikonnavn, når du indsætter andre ikoner som `#github`, `#website` eller `#twitter`.

### Specifikke mål

- Udfordre dig selv til at anvende din viden om CSS for at bygge et layout "i blinde".
- Bliv mere selvsikker i dit arbejde med HTML og CSS uden direkte feedback.

**Bemærk, at denne branch allerede inkluderer et CSS Reset.**

## Aflevering

Find linket til din løsning på Netlify og aflever det på Fronter.

Link-struktur: **citd-2--**[Dit unikke netlify link].netlify.app/

**Notér:** Denne opgave er en fantastisk måde at finjustere din kodningsprocess og blive mere afstemt med dine styling beslutninger, uden at blive påvirket af det visuelle resultat undervejs.
