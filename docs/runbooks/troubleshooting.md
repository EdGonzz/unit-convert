# Runbook: Troubleshooting

> Soluciones a problemas comunes durante el desarrollo.

## El dev server no arranca

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules
pnpm install
pnpm dev
```

Si persiste, verificar la versión de Node:
```bash
node -v  # Debe ser ≥ 18
```

## Tests fallan con errores de DOM

Verificar que `vitest` esté configurado con environment `jsdom` en `vite.config.js`:

```js
test: {
  globals: true,
  include: ['src/**/*.test.{js,ts}'],
}
```

Si los tests de `dom-utils` fallan con timeouts, asegurar que usan `vi.useFakeTimers()`.

## Tailwind no aplica estilos

1. Verificar que `@tailwindcss/vite` está en plugins de `vite.config.js`
2. Verificar que `style.css` importa Tailwind: `@import "tailwindcss";`
3. Reiniciar el dev server

## El path alias `@/` no resuelve

Verificar ambos archivos:

**`vite.config.js`:**
```js
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
},
```

**`jsconfig.json`:**
```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

## El build de producción falla

```bash
# 1. Limpiar cache de Vite
rm -rf node_modules/.vite

# 2. Rebuild
pnpm build
```

Si falla con errores de imports, verificar que todos los paths usen `@/` o rutas relativas correctas.

---

*Última actualización: 2026-03-14*
