// src/config/brand.config.ts
// Configuración de marca e identidad

export const brandConfig = {
  // Información básica de la marca
  name: 'ZenithWebCraft',
  tagline: 'Tu Landing Page Profesional en 48 Horas',
  
  // Logo (puedes usar ruta de archivo o URL)
  logo: {
    path: '/logo.png', // Ruta del logo en /public
    alt: 'ZenithWebCraft Logo',
    width: 180,
    height: 40,
  },

  // Favicon
  favicon: '/favicon.ico',

  // URLs y enlaces
  urls: {
    website: 'https://zenithwebcraft.com',
    landing: 'https://landing.zenithwebcraft.com',
    contactForm: 'https://forms.gle/tu-formulario-aqui', // Formulario de Google Forms o similar
    whatsapp: 'https://wa.me/1234567890', // Opcional
  },

  // Redes sociales
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  },

  // Metadatos SEO
  seo: {
    title: 'Landing Page Profesional en 48 Horas | ZenithWebCraft',
    description: 'Convierte visitantes en clientes con una landing page diseñada para vender. Sin código, sin complicaciones. Lista en 48 horas.',
    keywords: 'landing page, diseño web, página de ventas, conversión, marketing digital',
    ogImage: '/og-image-landing.jpg', // Imagen para compartir en redes
  },

  // Información de contacto
  contact: {
    email: 'hola@zenithwebcraft.com',
    phone: '+1 (407) 123-4567',
    location: 'Orlando, FL, USA',
  },
};

export default brandConfig;
