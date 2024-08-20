# Patterns

Se en oversigt over nogle a nedenstående patterns på [Codepen](https://codepen.io/collection/pgYZjB).

Simple Page Layout

```css
:root {
  --content-width: 75rem;
}

main {
  display: grid;
  grid-template-columns: 1fr minmax(0, var(--content-width)) 1fr;

  > * {
    grid-column: 2;
  }

  .full {
    grid-column: 1 / -1;
  }
}
```

Multiple Column Page Layout

```css
.content {
  --content: min(50ch, 100% - 1rem * 2);

  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [feature-start] minmax(0, 2rem)
    [content-start] var(--content) [content-end]
    minmax(0, 2rem) [feature-end]
    minmax(1rem, 1fr) [full-end];
}
```

Grid Pile

```css
.parent {
  display: grid;

  > * {
    grid-area: 1 / 1;
  }
}
```

Content Padding (horizontal)

```css
:root {
  --content-width: 75rem;
}

.container {
  padding-inline: max(1rem, 50% - var(--content-width) / 2);
}
```

Fluid Spacing

```css
.container {
  padding: min(3rem, 5%);
}
```

Text Spacing

```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```

Equal Spacing

```css
.grid {
  display: grid;
  gap: 1rem;
}
```

## Selectors

Vælg det første liste-element, hvis det samtidigt er ulige, når man tæller fra slutningen af listen.

```css
li:nth-last-child(odd):first-child {
  ...;
}
```

Vælg det andet barn i listen af elementer med klassen `.featured`

```css
:nth-child(2 of .featured) {
  ...;
}
```

Vælg sektioner med kun ét barn

```css
section:has(> :only-child) {
  ...;
}
```

Vælg sektioner med mindst 5 børn

```css
section:has(> :nth-child(5)) {
  ...;
}
```

Vælg sektioner med tre børn (vælger ikke sektioner med ét eller to børn)

```css
section:has(> :nth-last-child(3):first-child) {
  ...;
}
```

Vælg sektioner, der udelukkende indeholder artikler som direkte børn

```css
section:not(:has(> :not(article))) {
  ...;
}
```

Se flere eksempler på [bram.us](https://www.bram.us/2022/11/17/style-a-parent-element-based-on-its-number-of-children-using-css-has/).
