# Wglitch landing page

En statisk GitHub Pages-landningssida för småprojekt.

## Uppdatera projekt

Redigera bara `projects.js`.

```js
{
  name: "Mapnotes",
  slug: "mapnotes",
  icon: "icons/mapnotes.png"
}
```

Det blir automatiskt länken:

```txt
https://wglitch.github.io/mapnotes
```

Vill du använda en helt egen URL kan du skriva:

```js
{
  name: "Extern grej",
  url: "https://example.com",
  icon: "icons/extern.png"
}
```

## Ikoner

Lägg projektikoner i mappen `icons/`.

Om en ikon saknas visas en fallback med initialer.
