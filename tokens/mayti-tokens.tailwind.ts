/**
 * Mapa de tokens MAYTI para Tailwind v4 (@theme) o config.
 * Copiar/adaptar en el proyecto consumidor.
 */
export const maytiTheme = {
  colors: {
    "mayti-navy": "#0f172a",
    "mayti-navy-deep": "#020617",
    "mayti-section": "#e8eef5",
    "mayti-card": "#f8fafc",
    "mayti-border": "#d5dee8",
    "mayti-cyan": "#06b6d4",
    "mayti-sky": "#0ea5e9",
    "mayti-teal": "#0d9488",
    "mayti-emerald": "#059669",
    "mayti-amber": "#d97706",
    "mayti-orange": "#ea580c",
    "mayti-g1": "#327e96",
    "mayti-g2": "#0097b2",
    "mayti-g3": "#e85b3f",
    "mayti-g4": "#d9a006",
  },
  fontFamily: {
    mayti: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
    "mayti-display": ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
  },
  borderRadius: {
    "mayti-pill": "9999px",
    "mayti-card": "1.5rem",
    "mayti-input": "0.75rem",
  },
  backgroundImage: {
    "mayti-brand":
      "linear-gradient(90deg, #327e96 0%, #0097b2 32%, #e85b3f 72%, #d9a006 100%)",
  },
} as const;

/** Ejemplo @theme CSS (Tailwind v4):
@theme {
  --color-mayti-navy: #0f172a;
  --color-mayti-cyan: #06b6d4;
  --font-mayti: "Plus Jakarta Sans", system-ui, sans-serif;
}
*/
