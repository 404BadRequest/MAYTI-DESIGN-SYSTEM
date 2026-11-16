# Do / Don’t

## Logos

**Do**
- Usar los PNG oficiales de `assets/`
- Escalar con `height` + `object-contain`
- MAYTI: claro u oscuro sin filtros
- Productos (VIGÍA / Conecta / Circular): solo fondo claro; preferir `*-light.png` en cards

**Don’t**
- Recortar, quitar fondo, invertir o recolorear
- Redibujar en SVG/HTML el wordmark
- Añadir sombras o glow que distorsionen el arte
- Poner logos de producto sobre navy/oscuro (aparece halo blanco)

## Color

**Do**
- Usar el gradiente marca en CTAs principales
- Mantener contraste AA en texto (`#0f172a` sobre `#F8FAFC`)

**Don’t**
- Sustituir el gradiente por un sólido genérico purple/indigo
- Usar el gradiente como fondo de página completa

## Stack SAGC

**Do**
- Gráficos vía `charts.tsx`
- Listas vía `record-list.tsx`
- Mapas vía MapLibre + `coverage-panel.tsx`
- Iconos Lucide + motion para drawers

**Don’t**
- Instalar Recharts / Chart.js / TanStack Table / AG Grid sin decisión explícita
