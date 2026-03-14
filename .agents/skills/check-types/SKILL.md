---
name: check-types
description: Valida y audita el uso de JSDoc para asegurar la "Type Safety" en base a las reglas de TypeScript estricto.
---

# Check Types (JSDoc Type Safety)

Aunque este proyecto es puramente JavaScript (Vanilla JS), se requiere seguir reglas de TypeScript estricto mediante el uso de anotaciones **JSDoc**.

## Tareas Principales
1. **Auditar la ausencia de `any`:**
   - Asegurarse de que no existan variables, parámetros de función o retornos tipados como `@type {any}` en el proyecto.
2. **Uso de `unknown` y Type Guards:**
   - Confirmar que para datos dinámicos (como un parseo de un input o la respuesta de un formulario) se tipa como `unknown` seguido de un Type Guard antes de procesar.
3. **Preferir Interfaces / Typedefs para Objetos:**
   - Verificar la creación explicita de firmas:
     ```javascript
     /**
      * @typedef {Object} ConversionResult
      * @property {number} value
      * @property {string} unit
      */
     ```
   - No usar tipados de objeto dinámico (e.g. `@type {object}`).

## Cómo ejecutar

Puedes ejecutar una búsqueda rápida con `grep_search` buscando la palabra `any` dentro de JSDocs:
- `grep_search` con query `any` en `src/` (y descartar todo lo que no sea JSDoc).
- Puedes validar que cada archivo JS exportable (`utils.js`, `main.js`, `conversion.js`) tenga los tipos claramente documentados en cada parámetro de función exportable.
