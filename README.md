https://github.com/user-attachments/assets/1689eb8d-cf32-4034-ba76-f21adb79c308

# **Responsive Album View (Container Queries)**

## Formål

Formålet med denne opgave er at lære, hvordan _container queries_ kan bruges til at bygge et responsivt “album view”, hvor layout ændrer sig afhængigt af containerens bredde. Du øver dig i at:

- Definere containere med `container: [container-navn] / inline-size`
- Bruge container queries direkte med syntaksen
  `@container [container-navn] (width …) { … }`.
- Ændre layout (grid/flex) og rækkefølge ved forskellige container-størrelser.

## Ressourcer

- [Getting started with container queries (MDN)](https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/)
- [`@container` (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

> [!NOTE]  
> **Bemærk, at denne branch inkluderer et lille CSS Reset.**

## Opgavebeskrivelse

Du skal arbejde med et **album-layout** bestående af:

- Et `article` der indeholder et `header` med cover-billede og indhold (album-detaljer, actions og beskrivelse).
- En ordnet liste (`ol.songs`) med 10 tracks.

Du får udleveret markup og lidt CSS. Din opgave er at **implementere** container queries de rigtige steder samt finpudse, så det ligner referencen øverst.

### Trin 1 – Definér containere

- Gør `article` til container:
  ```css
  article {
    container: article / inline-size;
  }
  ```
- Gør `header` til container:
  ```css
  header {
    container: header / inline-size;
  }
  ```

### Trin 2 – Brug container queries

1. **Article-breakpoint (små visninger):**

   ```css
   @container article (width < 550px) {
     /* fx centrér album-detaljer, fuldbredde knapper, negativ margin på .content */
   }
   ```

2. **Header-breakpoint (mellemstore visninger):**

   ```css
   @container header (width >= 550px) {
     /* fx grid med 250px cover + tekst ved siden af */
   }
   ```

3. **Article-breakpoint (store visninger):**
   ```css
   @container article (width > 768px) {
     /* fx grid-template-columns: 300px 1fr */
   }
   ```

### Trin 3 – Layout og detaljer

- `article` → responsiv kolonne-deling.
- `header > div` → skifter fra stack til 2 kolonner ved `>= 550px`.
- `img` → fade mask når containeren er smal.
- `.actions` → ved smal visning bliver knapper fuldbredde.

### Specifikke mål

- Få implementeret **container queries** i CSS’en, så det efterligner referencen.
- Sørg for, at layoutet ændrer sig tydeligt ved:
  - **550px**
  - **768px**

## Aflevering

Find link til din løsning på Netlify og aflever det på Fronter.

Link-struktur: **responsive-album--**[dit unikke netlify link].netlify.app/
