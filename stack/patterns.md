# Patrones UI obligatorios (SAGC Premium → cualquier sitio Mayti)

Fuente canónica: `MAYTI-SAGC-V2.0/premium-environmental-management-dashboard`.

Al crear una vista nueva, reutilizar estos patrones (no inventar variantes).

## Checklist de pantalla

| Necesidad | Patrón | Archivo canónico |
|-----------|--------|------------------|
| Cabecera de vista | `PageHeader` | `ui.tsx` |
| KPIs | `StatStrip` / `SectionCard` | `ui.tsx` |
| Buscar + filtrar | `SearchInput` + `FilterMenu` / `FilterChips` | `ui.tsx` |
| Lista de registros | `RecordList` + `RecordListPaged` | `record-list.tsx` |
| Paginación | `paginate` + `ListPager` (`PAGE_SIZE=15`) | `lib/pagination.ts`, `ui.tsx` |
| Vacío | `EmptyState` (+ CTA) | `ui.tsx` |
| Volver / migas | `FichaBreadcrumbs` + link `btn btn-ghost` | `fichas/breadcrumbs.tsx` |
| Crear / editar / detalle | `RecordDrawer` (modal centrado) | `record-drawer.tsx` |
| Mapa SIG | `CoveragePanel` + MapLibre | `coverage-panel.tsx` |
| Gráficos | `charts.tsx` | `charts.tsx` |
| Loading | Spinner Lucide o skeleton `.shimmer` | `globals.css` |
| Feedback | `ToastProvider` / `useToast` / `useMutation` | `ui.tsx` |
| Motion | `Reveal`, `EASE`, `spring`, `AnimatePresence` | `ui.tsx` + `motion` |

## Paginación

- Cliente: `const pager = paginate(filtered, page)` → filas + `ListPager`.
- Resetear a página 1 cuando cambian filtros.
- No instalar tablas de terceros; la paginación vive junto a `RecordList`.

## Mapas SIG

- Una sola lib: `maplibre-gl`.
- Capas GeoJSON de cobertura (permisos / RCA / OIA) vía `cobertura.ts`.
- Workers: `scripts/copy-maplibre-worker.mjs` en `predev` / `prebuild`.
- Loading: overlay con `Loader2`, no bloquear el shell.
- Popup + dock de capas dentro del panel; no abrir mapa en modal aparte.

## Cards de información

- Contenedor: `SectionCard` (eyebrow, title, action, sheen opcional).
- Métricas: `StatStrip` (tone + icon Lucide).
- Filas densas: `RecordList` / glass cards, no `<table>` HTML de producto.

## Dialog / drawer

- CRUD y detalle: modal centrado `role="dialog"` con backdrop blur (`RecordDrawer`).
- Capas de mapa: `motion.aside` lateral (solo cobertura).
- Escape cierra; body `overflow: hidden` mientras está abierto.
- Confirmación destructiva dentro del mismo shell (no `window.confirm`).

## Empty / CTA vacío

- Siempre `EmptyState`: icono + título + descripción + acción opcional.
- Texto accionable (“Crear permiso”, “Ajusta filtros”), no solo “Sin datos”.

## Botón volver

- En fichas: migas (`FichaBreadcrumbs`) + “Volver al listado” con `btn btn-ghost`.
- No usar el historial del browser como único mecanismo.

## Filtros

- `SearchInput` (debounce visual inmediato en cliente).
- `FilterMenu` para dimensiones (estado, tipo, proyecto).
- `FilterChips` cuando hay pocas opciones y se quiere feedback animado (`layoutId`).
- Contador de resultados en tipografía mono.

## Animaciones

- Entradas: `Reveal` / `fadeUp` con `EASE = [0.16, 1, 0.3, 1]`.
- Overlays: `spring` (`stiffness: 260`, `damping: 28`).
- Respetar `prefers-reduced-motion` (`useReducedMotion`).
- Ambiente: blobs aurora en shell, no en cada card.

## Skeleton / loading

- Mutaciones cortas: `Loader2` + `animate-spin`.
- Primera carga de lista/card: filas placeholder con clase `.shimmer` (token en `globals.css`).
- No dejar `Suspense` vacío sin feedback visual.

## Toasts

- Éxito / error vía `useMutation` → toast glass (máx. 3, ~4s).
- No alertas nativas para feedback de CRUD.

## Tabs y breadcrumbs

- Tabs de ficha: botones + indicador `motion.span`.
- Breadcrumbs solo en rutas de ficha / detalle profundo.
