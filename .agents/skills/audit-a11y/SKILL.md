---
name: audit-a11y
description: Realiza una auditoría de accesibilidad (WCAG 2.1 AA) y uso semántico de HTML5 en el proyecto.
---

# Audit Accessibility (a11y)

Este skill se encarga de revisar que la aplicación cumpla con los estándares de accesibilidad requeridos en las reglas del proyecto: WCAG 2.1 AA, HTML5 semántico y controles interactivos por teclado.

## Instrucciones de ejecución

1. **Revisión de elementos interactivos:**
   - Busca todos los `<button>`, `<a>`, `<input>`, y `<select>` en el código fuente.
   - Verifica que cada uno tenga `aria-label` (si no tiene texto descriptivo interno) o estados como `aria-expanded`, `aria-hidden` donde aplique.
   - Asegúrate de que todos los elementos interactivos generados por JS puedan recibir foco (`tabindex="0"` o usando etiquetas nativas).

2. **Revisión de HTML Semántico:**
   - Verifica que la estructura de la página use etiquetas HTML5 apropiadas (`<main>`, `<nav>`, `<aside>`, `<header>`, `<footer>`, `<section>`, `<article>`) en lugar de `<div>` genéricos.

3. **Verificación visual del DOM (Opcional):**
   - Si se requiere, corre las pruebas unitarias que validan el DOM generado para asegurar la accesibilidad.
   - **Consejo de rendimiento:** Asegúrate de no reemplazar el `innerHTML` completo al actualizar la UI, sino hacer patching de los text nodes.

## Script u Operaciones
- Puedes usar el comando `grep_search` para buscar casos donde se use `class="... onclick=..."` en un div en lugar de un `button`.
- Revisa los tests en `vitest` para ver si hay tests que validen accesibilidad usando jsdom.
