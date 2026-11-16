# Reglas de stack (SAGC Premium)

Al desarrollar apps Mayti / SAGC / VIGÍA:

1. **Framework:** Next.js 16 + React 19 + Tailwind 4  
2. **Iconos:** `lucide-react`  
3. **Motion:** `motion` (`EASE` / `spring` / `Reveal` / `AnimatePresence`)  
4. **Gráficos:** solo `charts.tsx`  
5. **Listas:** solo `record-list.tsx` + `paginate` / `ListPager`  
6. **Mapas SIG:** `maplibre-gl` + `coverage-panel.tsx` + workers  
7. **Filtros:** `SearchInput` + `FilterMenu` / `FilterChips`  
8. **Cards / KPIs:** `SectionCard` + `StatStrip` + `PageHeader`  
9. **Dialogs:** `record-drawer.tsx` (modal); no `alert` / `confirm`  
10. **Empty:** siempre `EmptyState` con CTA cuando aplique  
11. **Volver:** breadcrumbs + `btn btn-ghost` “Volver al listado”  
12. **Loading:** `.shimmer` / spinner; no Suspense vacío  
13. **Toasts:** `useMutation` / `useToast`  

Detalle: `stack/libraries.json`, `stack/reusables.md`, **`stack/patterns.md`**.
