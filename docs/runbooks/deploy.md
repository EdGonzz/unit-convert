# Runbook: Deploy

> Proceso de despliegue a producción.

## Plataforma

**Vercel** — deploy automático en cada push a `main`.

- **URL:** https://unit-convert-six.vercel.app/

## Proceso

### 1. Verificar que todo funciona localmente

```bash
pnpm test          # Tests pasan
pnpm build         # Build sin errores
pnpm preview       # Verificar visualmente en http://localhost:4173
```

### 2. Push a producción

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

Vercel detecta el push y ejecuta el build automáticamente.

### 3. Verificar el deploy

1. Ir a https://unit-convert-six.vercel.app/
2. Verificar que la app carga correctamente
3. Probar una conversión para confirmar funcionalidad

## Rollback

Si algo sale mal, Vercel permite revertir a un deploy anterior desde el dashboard:

1. Ir al proyecto en [vercel.com](https://vercel.com)
2. **Deployments** → seleccionar el deploy anterior que funcionaba
3. Click en **"Promote to Production"**

---

*Última actualización: 2026-03-14*
