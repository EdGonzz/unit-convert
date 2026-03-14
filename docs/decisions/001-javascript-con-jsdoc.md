# ADR-001: JavaScript con JSDoc en lugar de TypeScript

- **Estado:** Aceptada
- **Fecha:** 2026-03-10
- **Contexto:** Proyecto de aprendizaje / laboratorio

## Contexto

Al iniciar el proyecto, se evaluó usar TypeScript para type safety. Sin embargo, el objetivo principal del proyecto es practicar fundamentos de **vanilla JavaScript** y entender el DOM sin capas de abstracción.

## Decisión

Usar **JavaScript (ESM)** con **anotaciones JSDoc** (`@typedef`, `@param`, `@returns`) para obtener type checking en el editor sin compilación adicional.

## Consecuencias

### Positivas
- Zero build overhead para tipos — Vite transpila solo ESM
- El editor (VS Code) provee autocompletado e inferencia de tipos via JSDoc
- Menor barrera de entrada para contribuidores
- Bundle más predecible (lo que escribes es lo que se sirve)

### Negativas
- JSDoc es más verbose que la sintaxis de TypeScript
- No hay `strict mode` forzado a nivel de compilador
- Tipos genéricos son incómodos de expresar en JSDoc

## Alternativas Consideradas

| Alternativa       | Razón de descarte                                    |
| ----------------- | ---------------------------------------------------- |
| TypeScript         | Agrega complejidad innecesaria para un lab project   |
| Sin tipos          | Pierde el beneficio de autocompletado y validación    |
| Flow              | Ecosistema reducido, menor soporte de tooling         |
