# Flujo de Datos

> Cómo viaja la información desde el input del usuario hasta la pantalla.

## Diagrama de Secuencia

```mermaid
sequenceDiagram
    participant User
    participant Input as #input-value
    participant Main as main.js
    participant Conv as conversions.js
    participant DOM as typeWriter()

    User->>Input: Cambia valor / click [RUN]
    Input->>Main: change event / click event
    Main->>Main: currentValue = parseFloat()
    Main->>Conv: convertLength(val)
    Main->>Conv: convertVolume(val)
    Main->>Conv: convertMass(val)
    Conv-->>Main: { forward, reverse }
    Main->>DOM: typeWriter(#length-result, text)
    Main->>DOM: typeWriter(#volume-result, text)
    Main->>DOM: typeWriter(#mass-result, text)
    DOM-->>User: Animación de texto
```

## Estado de la Aplicación

El estado es **minimal y en memoria**:

| Variable          | Tipo      | Propósito                              |
| ----------------- | --------- | -------------------------------------- |
| `currentValue`    | `number`  | Valor numérico actual del input        |
| `isInitialRender` | `boolean` | Flag para distinguir mount vs. update  |

No hay store, no hay estado global complejo. Un solo módulo (`main.js`) gestiona todo el ciclo de vida.
