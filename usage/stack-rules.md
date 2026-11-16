# Reglas de stack (SAGC Premium)

Al desarrollar apps Mayti / SAGC / VIGÍA:

1. **Framework:** Next.js 16 + React 19 + Tailwind 4  
2. **Iconos:** `lucide-react`  
3. **Motion:** `motion` (AnimatePresence, springs, drawers)  
4. **Gráficos:** solo `premium-environmental-management-dashboard/src/components/charts.tsx`  
5. **Tablas/listas:** solo `record-list.tsx` (no TanStack/AG Grid)  
6. **Mapas:** `maplibre-gl` + patrón `coverage-panel.tsx` + workers  
7. **UI primitives:** `ui.tsx` (Badge, toast, SectionCard, PageHeader, StatStrip, fields…)  
8. **Drawers:** `record-drawer.tsx` / subresource drawers  

Detalle: `stack/libraries.json` y `stack/reusables.md`.
