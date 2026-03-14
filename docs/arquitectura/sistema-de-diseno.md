# Sistema de Diseño Visual

> Tokens, tema y efectos visuales del proyecto.

## Tema: Terminal CRT Retro

| Token CSS        | Valor                          | Uso                          |
| ---------------- | ------------------------------ | ---------------------------- |
| `--background`   | `#0d0d0d`                      | Fondo negro de terminal      |
| `--foreground`   | `#1F2937`                      | Gris oscuro para bordes      |
| `--primary`      | `#00ff00`                      | Verde terminal (todo el UI)  |
| `--glow`         | Multi-layer green `text-shadow` | Efecto de brillo CRT         |

## Tipografía

- **Fuente:** Space Mono (monoespaciada)
- **Carga:** `@fontsource/space-mono` — self-hosted, sin request a Google Fonts
- **Configuración:** `tailwind.config.js` → `fontFamily.mono`

## Efectos Especiales

- **Scanlines**: Animación CSS que simula las líneas horizontales de un monitor CRT
- **Cursor pulsante**: `animate-pulse` en el character `_` junto al input
- **Typewriter**: Texto que aparece carácter por carácter en los resultados
- **Glow**: Multi-layer `text-shadow` verde para efecto de brillo CRT
