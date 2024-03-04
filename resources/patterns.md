# Patterns

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
