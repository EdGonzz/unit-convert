# Runbook: Desarrollo Local

> Guía para levantar el entorno de desarrollo desde cero.

## Prerequisitos

- **Node.js** ≥ 18
- **pnpm** ≥ 9 (`npm install -g pnpm`)

## Setup Inicial

```bash
# 1. Clonar el repositorio
git clone https://github.com/EdGonzz/unit-convert.git
cd unit-convert

# 2. Instalar dependencias
pnpm install

# 3. Levantar dev server
pnpm dev
# → http://localhost:5173
```

## Comandos Frecuentes

| Comando            | Propósito                                    |
| ------------------ | -------------------------------------------- |
| `pnpm dev`         | Dev server con HMR                           |
| `pnpm build`       | Build de producción → `dist/`                |
| `pnpm preview`     | Preview del build de producción              |
| `pnpm test`        | Ejecutar tests una vez                       |
| `pnpm test:watch`  | Tests en modo watch                          |

## Más Runbooks

| Necesitas…                       | Ve a                                                                  |
| -------------------------------- | --------------------------------------------------------------------- |
| Agregar una nueva conversión     | [agregar-conversion.md](./agregar-conversion.md)                      |
| Resolver problemas comunes       | [troubleshooting.md](./troubleshooting.md)                            |
| Desplegar a producción           | [deploy.md](./deploy.md)                                              |

---

*Última actualización: 2026-03-14*
