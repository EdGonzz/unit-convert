# ADR-002: Patrón Mount-Once, Patch-Later para Rendering

- **Estado:** Aceptada
- **Fecha:** 2026-03-11
- **Contexto:** Optimización de rendimiento en `main.js`

## Contexto

La implementación original de `render()` reemplazaba `app.innerHTML` en cada cambio de input. Esto causaba:
- Re-creación innecesaria de todos los nodos DOM
- Pérdida de event listeners (requería re-attach)
- Layout thrashing y reflows costosos
- Pérdida de focus del input durante actualizaciones

## Decisión

Adoptar el patrón **mount-once, patch-later**:

1. En el render inicial, montar el shell HTML completo via `innerHTML` y vincular eventos con `attachEvents()`.
2. En renders subsecuentes, actualizar **solo los text nodes** de los resultados usando `typeWriter()`.
3. Usar un flag `isInitialRender` para distinguir entre mount y update.

## Consecuencias

### Positivas
- **~99% reducción** en nodos DOM manipulados por re-render
- Event listeners persistentes — sin re-attach
- Focus del input se mantiene durante actualizaciones
- Compatible con animación typeWriter (no hay conflicto de timers)

### Negativas
- El código de `render()` tiene dos paths (initial vs. update) que deben mantenerse sincronizados
- Agregar nuevos resultados requiere actualizar ambos paths

## Alternativas Consideradas

| Alternativa             | Razón de descarte                                      |
| ----------------------- | ------------------------------------------------------ |
| Full innerHTML replace  | Performance pobre, pierde listeners y focus             |
| Virtual DOM (framework) | Overkill para el scope del proyecto                     |
| `document.createElement`| Más verboso sin ganancia significativa para este caso   |
