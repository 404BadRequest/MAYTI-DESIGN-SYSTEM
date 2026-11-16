# Identidad visual MAYTI

Versión 1.0 · Fuente: [mayti-web.vercel.app](https://mayti-web.vercel.app) + repo `MAYTI-WEB`.

## Dos capas

| Capa | Cuándo | Tipografía | Tokens |
|------|--------|------------|--------|
| **Corporativa Mayti** | Sitios marketing, landing, nuevos productos web | Plus Jakarta Sans (+ Space Grotesk) | `tokens/mayti-tokens.css` |
| **Producto SAGC Premium** | Dashboards de cumplimiento (SAGC / VIGÍA apps) | Inter / Sora / JetBrains (hoy) | `stack/sagc-tokens.css` + componentes en Premium |

**Regla:** nuevos sitios Mayti → identidad corporativa. Pantallas tipo SAGC → reutilizar kit UI/charts/mapas de Premium (`stack/`). Al tocar skin de SAGC, migrar tipografía hacia Plus Jakarta.

## Logos

| Asset | Archivo | Regla |
|-------|---------|-------|
| MAYTI | `assets/mayti/logo-mayti.png` | No recortar, no recolorear, no regenerar. Solo escalar con `object-contain`. OK en claro u oscuro. |
| VIGÍA / Conecta / Circular | `assets/products/*.png` | PNG con transparencia (fuente). **Solo sobre fondo claro.** |
| Productos en UI clara | `assets/products/*-light.png` | Misma marca ya compostada sobre blanco — preferida en brand book y cards. |
| Favicon | `assets/mayti/favicon-mayti.png` | Tal cual. |

**No** colocar logos de producto sobre navy/oscuro: el wordmark azul y el matte generan halo blanco.

## Gradiente marca

`#327e96 → #0097b2 → #e85b3f → #d9a006` — CTAs “Explorar / Consultar / Ingresar” corporativos.

## Productos

- **VIGÍA Ambiental** — emerald/teal · “Anticipa riesgos. Previene incumplimientos”
- **VIGÍA Sectorial** — teal/cyan
- **Conecta** — cyan/blue
- **Circular** — amber/orange

Ver `usage/product-accents.md` y `usage/do-dont.md`.
