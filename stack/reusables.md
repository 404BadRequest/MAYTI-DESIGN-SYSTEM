# Reutilizables SAGC Premium

Código canónico en:

`MAYTI-SAGC-V2.0/premium-environmental-management-dashboard/`

Checklist completo de patrones: **`stack/patterns.md`**.

## UI kit — `src/components/ui.tsx`

| Export / patrón | Uso |
|-----------------|-----|
| `Badge` | Estados y chips de tono |
| Toast (`ToastProvider` / `useToast` / `useMutation`) | Feedback de mutaciones |
| `SectionCard` | Contenedor de sección / card info |
| `PageHeader` | Cabecera de vista/ficha |
| `StatStrip` | Fila de KPIs |
| `SearchInput` / `SelectField` / `FilterMenu` / `FilterChips` | Filtros |
| `ListPager` | Paginación UI (con `paginate`) |
| `ProgressBar` | Avance |
| `EmptyState` | Vacío con CTA |
| `Reveal` / `EASE` / `spring` / `cn` | Motion + classnames |

## Paginación — `src/lib/pagination.ts`

`PAGE_SIZE = 15` · `paginate(items, page)` → filas + meta para `ListPager`.

## Gráficos — `src/components/charts.tsx`

Solo este módulo (SVG + `motion`). Tipos: gauge, área, donut, barras, sparkline, matriz, scatter, stacked, timeline, forecast.

## Listas — `src/components/record-list.tsx`

Filas con título, badges, métricas, empty props. No TanStack / AG Grid.

## Mapas SIG — `src/components/coverage-panel.tsx`

MapLibre GL + `lib/cobertura.ts`. Workers: `scripts/copy-maplibre-worker.mjs`.

## Dialogs / drawers

- `record-drawer.tsx` — modal centrado CRUD/detalle
- `commitment-subresource-drawer.tsx` — verificador / evidencia / plan
- Capas mapa: aside en `coverage-panel.tsx`

## Navegación ficha

- `fichas/breadcrumbs.tsx` + “Volver al listado” (`btn btn-ghost`)
- Tabs de ficha con indicador motion

## Loading

- `.shimmer` en `globals.css` para skeletons de lista
- `Loader2` + spin para mutaciones / mapa

## Shell

- `app-shell.tsx` — nav, tema, aurora, toasts

## Tokens de app — `src/app/globals.css`

`--bg`, `--surface`, `--accent*`, glass, aurora, `.btn`, `.field`, `.chip`, `.display`, `.mono`, `.shimmer`.

Tipografías SAGC hoy: Inter / Sora / JetBrains Mono. Corporativa Mayti: Plus Jakarta Sans (`IDENTITY.md`).
