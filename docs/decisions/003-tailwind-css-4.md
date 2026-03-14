# ADR-003: Tailwind CSS 4 sobre Vanilla CSS

- **Estado:** Aceptada
- **Fecha:** 2026-03-10
- **Contexto:** Selección de approach para estilos

## Contexto

El proyecto necesita estilos consistentes con un tema retro CRT. Se evaluaron dos opciones principales: Vanilla CSS con custom properties o Tailwind CSS.

## Decisión

Usar **Tailwind CSS 4** via el plugin de Vite (`@tailwindcss/vite`) para estilos utility-first, complementado con **CSS custom properties** en `style.css` para el tema CRT (variables, scanlines, `.sr-only`).

## Consecuencias

### Positivas
- Desarrollo rápido con utilities directamente en el markup
- Plugin de Vite elimina CSS no usado automáticamente (tree-shaking)
- Custom properties para el tema CRT mantienen la identidad visual centralizada
- Tailwind 4 tiene mejor performance y menor config que v3

### Negativas
- HTML classes más largas y verbose
- Dependencia adicional en el build
- Mezcla de dos paradigmas (utility classes + custom CSS)

## Alternativas Consideradas

| Alternativa       | Razón de descarte                                      |
| ----------------- | ------------------------------------------------------ |
| Solo Vanilla CSS  | Más lento de desarrollar, más propenso a inconsistencias |
| CSS Modules       | Overhead de configuración sin beneficio claro aquí       |
| Styled Components | Requiere framework JS, fuera del scope                  |
