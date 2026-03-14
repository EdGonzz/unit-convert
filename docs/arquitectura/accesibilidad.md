# Accesibilidad (a11y)

> Estrategia de accesibilidad siguiendo WCAG 2.1 AA.

## Implementación Actual

| Característica           | Implementación                                     |
| ------------------------ | -------------------------------------------------- |
| Semántica HTML5          | `<main>`, `<header>`, `<article>`, `<section>`     |
| Labels para inputs       | `<label class="sr-only">` + `aria-label`           |
| Resultados dinámicos     | `aria-live="polite"` en cada `<p>` de resultado     |
| Navegación por teclado   | Focus states en input y botón                       |
| Screen-reader utility    | `.sr-only` class en `style.css`                     |
| `<noscript>` fallback    | Mensaje alternativo para JS deshabilitado           |

## Detalles

### Labels del Input

El `<input>` tiene doble cobertura:
1. `<label for="input-value" class="sr-only">` — label nativo oculto visualmente
2. `aria-label="Enter a numeric value to convert"` — refuerzo para screen readers

### Live Regions

Los tres `<p>` de resultados usan `aria-live="polite"`, lo que permite a screen readers anunciar cambios sin interrumpir al usuario.

### Utility `.sr-only`

Clase CSS que oculta contenido visualmente pero lo mantiene accesible para screen readers:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```
