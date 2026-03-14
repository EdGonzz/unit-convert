---
name: scaffold-conversion
description: Scaffolds boilerplate para añadir una nueva conversión (Lógica pura, Tests, JSDoc).
---

# Scaffold New Conversion

Esta automatización permite estructurar correctamente cualquier nueva funcionalidad matemática para el **Unit Converter**, respetando la arquitectura y principios del proyecto.

## Principios a Seguir:
- **Funciones puras**: La lógica no debe tocar el DOM.
- **Type Safety**: Debe incluir tipos `JSDoc` (`@param`, `@returns`).
- **Tests requeridos**: Deben existir pruebas Vitest (`npx vitest` jsdom) que garanticen su funcionamiento antes y después del refactor.

## Instrucciones y pasos

1. **Definir el objeto unitario:**
   - Crear / actualizar `src/conversion.js` (o un módulo dedicado en `src/lib/`).
   - Definir la lógica.
2. **Generar pruebas:**
   - Crear el archivo correspondiente `src/lib/conversion-[tipo].test.js`.
   - Utilizar aserciones de Vitest con casos frontera (edge cases), números grandes, negativos y floats.
3. **Integrar con DOM de forma localizada:**
   - Acoplar la lógica al `src/main.js` respetando la regla "Targeted DOM updates".
   - **Crucial**: Nunca usar `innerHTML`. Si se renderiza, modificar únicamente los elementos textNode o atributos mediante selectores y actualización atómica del estado.

Al invocar este skill, la IA deberá realizar estas 3 etapas, validando primero si el archivo de test (`test:watch`) pasa exitosamente.
