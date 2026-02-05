// src/config/theme.config.ts
// Configuración visual de la plantilla

export const themeConfig = {
  // Colores principales
  colors: {
    primary: {
      DEFAULT: '#D4AF37',  // Color principal (ejemplo: dorado)
      foreground: '#1a1a1a', // Color de texto sobre el primario
    },
    // Puedes agregar más colores personalizados aquí
  },

  // Fuentes (si quieres usar fuentes personalizadas)
  fonts: {
    heading: 'Inter', // Fuente para títulos
    body: 'Inter',     // Fuente para textos
  },

  // Radio de bordes
  borderRadius: {
    default: '0.5rem', // Radio por defecto
    lg: '1rem',
    full: '9999px',
  },
};

export default themeConfig;
