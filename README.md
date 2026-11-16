# MAYTI Design System

Kit de identidad corporativa Mayti + catálogo de stack/reutilizables SAGC Premium.

## Abrir en local

```bash
cd "/Users/juliosoto/Documents/MAYTI/Proyectos web/MAYTI-DESIGN-SYSTEM"
python3 -m http.server 4173
```

Abrir [http://localhost:4173/](http://localhost:4173/)

## Contenido

| Ruta | Qué es |
|------|--------|
| `index.html` | Brand book visual |
| `tokens/` | Colores, tipografía, CSS y mapa Tailwind Mayti |
| `stack/` | Librerías y reutilizables SAGC Premium |
| `assets/` | Logos MAYTI y productos (PNG + variantes `*-light.png` para UI clara) |
| `usage/` | Do/don’t, acentos, reglas de stack |
| `IDENTITY.md` | Guía corta de marca |

## Cómo reutilizar

1. **Sitio marketing Mayti** → importar `tokens/mayti-tokens.css` y assets de `assets/mayti` / `assets/products`.
2. **App tipo SAGC / VIGÍA** → seguir `stack/libraries.json` y `usage/stack-rules.md`; código canónico en `MAYTI-SAGC-V2.0/premium-environmental-management-dashboard`.

## Vercel

Sitio estático (sin build). Despliegue:

```bash
npx vercel --prod
```

Proyecto nuevo (no sobrescribe mayti-web). La URL pública se anota aquí tras el deploy:

- **URL producción:** https://mayti-design-system.vercel.app
- **Inspect:** https://vercel.com/404badrequests-projects/mayti-design-system
