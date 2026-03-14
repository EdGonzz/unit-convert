# Runbook: Agregar una Nueva Conversión

> Paso a paso para agregar un nuevo tipo de conversión a la app.

## Pasos

### 1. Agregar la constante del factor en `src/conversions.js`

```js
export const NEW_FACTOR = 1.234;
```

### 2. Crear la función pura de conversión

```js
/**
 * Convert unitA ↔ unitB
 * @param {number} value
 * @returns {ConversionResult}
 */
export const convertNew = (value) => ({
  forward: value * NEW_FACTOR,
  reverse: value / NEW_FACTOR,
});
```

### 3. Agregar tests en `src/conversions.test.js`

```js
describe('convertNew', () => {
  it('converts forward correctly', () => {
    const result = convertNew(10);
    expect(result.forward).toBeCloseTo(12.34);
  });

  it('converts reverse correctly', () => {
    const result = convertNew(10);
    expect(result.reverse).toBeCloseTo(8.103);
  });

  it('handles zero', () => {
    const result = convertNew(0);
    expect(result.forward).toBe(0);
    expect(result.reverse).toBe(0);
  });
});
```

### 4. Integrar en `main.js`

```js
// 1. Importar
import { convertNew } from './conversions.js';

// 2. En render(), calcular el resultado
const newResult = convertNew(currentValue);
const newText = `${currentValue} unitA = ${format(newResult.forward)} unitB | ${currentValue} unitB = ${format(newResult.reverse)} unitA`;

// 3. En el mount inicial (isInitialRender), agregar el ResultCard
${ResultCard("New Unit (UnitA/UnitB)", "new-result")}

// 4. En los targeted updates, agregar el typeWriter
typeWriter(document.getElementById('new-result'), newText, 20);
```

### 5. Verificar

```bash
pnpm test          # Tests pasan
pnpm dev           # Verificar visualmente
```

## Checklist

- [ ] Constante exportada en `conversions.js`
- [ ] Función pura con JSDoc types
- [ ] Tests unitarios (forward, reverse, zero, roundtrip)
- [ ] `ResultCard` en el mount inicial
- [ ] `typeWriter` en los targeted updates
- [ ] Verificación visual en dev server

---

*Última actualización: 2026-03-14*
