# Patrones de Diseño

> Patrones arquitectónicos usados en el proyecto y sus trade-offs.

## 1. Mount-Once, Patch-Later

El patrón central de rendering evita reemplazar el DOM completo en cada cambio de estado:

```
┌─────────────────────────────────────────────────┐
│  Render Inicial (isInitialRender = true)        │
│  ─────────────────────────────────────────────  │
│  1. app.innerHTML = shell completo              │
│  2. attachEvents() — vincula listeners          │
│  3. isInitialRender = false                     │
│                                                 │
│  Re-renders Subsecuentes                        │
│  ─────────────────────────────────────────────  │
│  1. Calcula nuevos valores con convert*()       │
│  2. Actualiza solo los <p> de resultado         │
│     via typeWriter()                            │
│  3. Listeners y layout intactos                 │
└─────────────────────────────────────────────────┘
```

**¿Por qué?**
- Evita layout thrashing y reflows costosos
- Preserva event listeners sin necesidad de re-attach
- Mantiene el focus del teclado durante actualizaciones

> Ver [ADR-002](../decisions/002-mount-once-patch-later.md) para el contexto completo de esta decisión.

## 2. Template-Literal Components

Los "componentes" no son clases ni instancias — son **funciones puras que retornan strings de HTML**:

```js
// Header(initialValue) → string HTML
// ResultCard(title, id) → string HTML
```

Se usan **solo durante el mount inicial**. Después, las actualizaciones son quirúrgicas sobre nodos existentes.

**Trade-offs:**
- ✅ Sin framework, bundle mínimo
- ✅ Fácil de entender y debuggear
- ⚠️ No soporta re-rendering parcial de componentes (innecesario para este scope)

## 3. Funciones Puras de Conversión

Toda la lógica de negocio vive en `conversions.js` como funciones puras:

```js
convertLength(value) → { forward: number, reverse: number }
convertVolume(value) → { forward: number, reverse: number }
convertMass(value)   → { forward: number, reverse: number }
```

**Principios:**
- Sin side-effects → 100% testeable
- Sin dependencias → ejecutable en cualquier contexto
- Constantes exportadas para transparencia (`METER_TO_FEET`, `LITER_TO_GALLON`, `KILO_TO_POUND`)

## 4. TypeWriter con Cancelación

`typeWriter(element, text, speed)` anima texto carácter por carácter con un mecanismo de cancelación:

```
element.__typewriterTimer → referencia al setTimeout activo
                         → clearTimeout() al re-invocar
                         → null cuando termina la animación
```

Esto previene race conditions cuando el usuario cambia el input rápidamente.
