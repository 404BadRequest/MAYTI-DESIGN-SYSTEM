# Reutilizables SAGC Premium

Código canónico en:

`MAYTI-SAGC-V2.0/premium-environmental-management-dashboard/`

## UI kit — `src/components/ui.tsx`

| Export / patrón | Uso |
|-----------------|-----|
| `Badge` | Estados y chips de tono |
| Toast (`ToastProvider` / push) | Feedback de mutaciones |
| `SectionCard` | Contenedor de sección |
| `PageHeader` | Cabecera de vista/ficha |
| `StatStrip` | Fila de KPIs |
| `SearchInput` / `SelectField` | Filtros |
| `ProgressBar` | Avance |
| `EmptyState` | Vacío con CTA |
| `Reveal` / `EASE` / `spring` / `cn` | Motion + classnames |

## Gráficos — `src/components/charts.tsx`

Implementar visualizaciones **solo** con este módulo (SVG + `motion`). No añadir Recharts/Chart.js.

Tipos: gauge, área, donut, barras, sparkline, matriz, scatter, stacked, timeline, forecast.

Consumidores típicos: `views/overview.tsx`, `compliance.tsx`, `registry.tsx`, `execution.tsx`, `decision.tsx`, `coverage-panel.tsx`, fichas.

## Listas / “tablas” — `src/components/record-list.tsx`

Patrón de filas paginadas con título, badges, métricas y acciones. Sustituye tablas de terceros.

## Mapas — `src/components/coverage-panel.tsx`

MapLibre GL. Copiar workers con `scripts/copy-maplibre-worker.mjs` (`predev` / `prebuild`).

## Drawers

- `src/components/record-drawer.tsx` — CRUD genérico de entidades
- `src/components/fichas/commitment-subresource-drawer.tsx` — verificador / evidencia / plan

## Shell

- `src/components/app-shell.tsx` — navegación, tema light/dark, aurora, toasts

## Tokens de app — `src/app/globals.css`

Variables `--bg`, `--surface`, `--accent*`, glass, aurora, `.btn`, `.field`, `.chip`, `.display`, `.mono`.

Tipografías actuales SAGC: Inter / Sora / JetBrains Mono. Identidad Mayti corporativa: Plus Jakarta Sans (ver `IDENTITY.md`).
