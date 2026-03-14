# SEO

> Estrategia de optimización para motores de búsqueda.

## Implementación

- **Open Graph** — Meta tags para preview en redes sociales (título, descripción, imagen)
- **Twitter Cards** — Meta tags específicas para X/Twitter
- **JSON-LD** — Schema.org `WebApplication` embebido en `index.html`
- **Meta description** — Descripción descriptiva para SERPs
- **Canonical URL** — `https://unit-convert-six.vercel.app/`

## Archivos Estáticos

| Archivo          | Ubicación  | Propósito                              |
| ---------------- | ---------- | -------------------------------------- |
| `robots.txt`     | `public/`  | Directivas para crawlers               |
| `sitemap.xml`    | `public/`  | Mapa del sitio para indexación          |
| `og-image.png`   | `public/`  | Imagen de preview para Open Graph       |
| `favicon.png`    | `public/`  | Icono del sitio                         |

## `<noscript>` Fallback

Para crawlers que no ejecutan JavaScript, `index.html` incluye un bloque `<noscript>` con contenido alternativo que describe la funcionalidad de la app.
