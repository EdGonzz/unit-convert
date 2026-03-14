# Testing

> Estrategia de testing y archivos de test del proyecto.

## Runner

**Vitest** con `globals: true` y environment `jsdom`.

Los tests viven co-ubicados con el código fuente usando el sufijo `.test.js`.

## Archivos de Test

| Archivo                      | Scope                                    |
| ---------------------------- | ---------------------------------------- |
| `conversions.test.js`        | Conversiones + integridad roundtrip       |
| `dom-utils.test.js`          | TypeWriter con fake timers                |
| `utils.test.js`              | Helper `format()`                        |
| `render-benchmark.test.js`   | Benchmarks de rendimiento del render      |

## Comandos

```bash
pnpm test          # Ejecutar tests una vez
pnpm test:watch    # Tests en modo watch (desarrollo)
```

## Convenciones

1. **Co-ubicación** — Los tests viven junto al archivo que testean (`conversions.js` → `conversions.test.js`)
2. **Funciones puras primero** — La lógica de negocio está aislada en funciones puras para facilitar el testing
3. **Fake timers para DOM** — `dom-utils.test.js` usa `vi.useFakeTimers()` para testear animaciones
4. **Benchmarks separados** — `render-benchmark.test.js` mide performance y no se mezcla con unit tests funcionales
