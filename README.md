# 🚀 Landing Page Template - Smart Sales Page

Plantilla profesional de landing page/sales page completamente personalizable, optimizada para conversiones y lista para desplegar en minutos.

**Stack Tecnológico:**
- ⚡ Vite + React + TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 🌍 Detección automática de idioma (ES/EN)
- 💳 Integración Hotmart (checkout embebido + directo)
- 📊 Meta Pixel + Google Analytics
- 🎯 100% responsive y optimizado SEO

---

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o bun
- Cuenta en Vercel (para deployment)
- Cuenta en Hotmart (para pagos)

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone [URL-DEL-REPOSITORIO]
cd [NOMBRE-DEL-PROYECTO]
2. Instalar dependencias
bash
npm install
# o
bun install
3. Ejecutar en desarrollo
bash
npm run dev
# o
bun dev
La aplicación estará disponible en http://localhost:5173

⚙️ Configuración - Paso a Paso
🎨 1. Configurar Colores y Tema
Archivo: src/config/theme.config.ts

typescript
export const themeConfig = {
  colors: {
    primary: {
      DEFAULT: '#D4AF37',  // 👈 Cambiar color principal
      foreground: '#1a1a1a',
    },
  },
  // ...
};
🏢 2. Configurar Marca e Identidad
Archivo: src/config/brand.config.ts

Completar TODOS estos campos:

typescript
export const brandConfig = {
  // Información básica
  name: 'Tu Marca',  // 👈 Nombre de tu marca/negocio
  tagline: 'Tu eslogan aquí',  // 👈 Eslogan/tagline

  // Logo
  logo: {
    path: '/logo.png',  // 👈 Subir logo a /public/logo.png
    alt: 'Tu Marca Logo',
    width: 180,
    height: 40,
  },

  // URLs
  urls: {
    website: 'https://tu-sitio-web.com',  // 👈 Tu sitio principal
    landing: 'https://tu-landing.com',  // 👈 URL de esta landing
    contactForm: 'https://forms.gle/xxxxx',  // 👈 Google Form u otro
    whatsapp: 'https://wa.me/1234567890',  // 👈 Opcional
  },

  // Redes sociales (opcional)
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  },

  // SEO
  seo: {
    title: 'Tu producto/servicio | Tu Marca',
    description: 'Descripción optimizada para SEO (150-160 caracteres)',
    keywords: 'palabra1, palabra2, palabra3',
    ogImage: '/og-image.jpg',  // 👈 Imagen 1200x630px en /public
  },

  // Contacto
  contact: {
    email: 'contacto@tumarca.com',
    phone: '+1 (123) 456-7890',
    location: 'Tu Ciudad, País',
  },
};
💳 3. Configurar Integraciones (Hotmart, Pixel, etc.)
Archivo: src/config/integrations.config.ts

typescript
export const integrationsConfig = {
  // Hotmart
  hotmart: {
    // URL del botón directo
    checkoutUrl: 'https://pay.hotmart.com/XXXXXXXX?checkoutMode=10',  // 👈 Tu URL de Hotmart
    
    // Código para checkout embebido (opcional)
    productCode: 'CODIGO_PRODUCTO',  // 👈 Solo si usas modo 'embedded'
    
    // Modo por defecto
    defaultMode: 'hotmart' as 'embedded' | 'hotmart',  // 👈 'hotmart' recomendado
  },

  // Meta Pixel (Facebook)
  metaPixel: {
    enabled: false,  // 👈 Cambiar a true si tienes pixel
    pixelId: '',  // 👈 ID de tu pixel (ej: '1234567890')
  },

  // Google Analytics
  googleAnalytics: {
    enabled: false,  // 👈 Cambiar a true si tienes GA
    measurementId: '',  // 👈 ID de GA4 (ej: 'G-XXXXXXXXXX')
  },
};
Cómo obtener la URL de Hotmart:

Ve a Hotmart > Mis Productos > [Tu Producto]

Click en "Promocionar" o "Links de Afiliado"

Copia la URL del checkout

Pégala en checkoutUrl

📝 4. Configurar Contenido y Precios
Archivo: src/config/variables.config.ts

Este es el archivo MÁS IMPORTANTE. Completar todo:

typescript
export const variablesConfig = {
  // ===== PRODUCTO/SERVICIO =====
  product: {
    name: 'Landing Page Profesional',  // 👈 Nombre de tu producto
    namePlural: 'Landing Pages',  // 👈 Plural
    actionCompleted: 'entregadas',  // 👈 "vendidos", "entregados", "realizadas"
    clientType: 'emprendedores',  // 👈 "estudiantes", "clientes", "empresas"
  },

  // ===== PRECIOS =====
  pricing: {
    originalPrice: '$240',  // 👈 Precio original (tachado)
    currentPrice: '$49.99',  // 👈 Precio de oferta
    normalValue: '$537',  // 👈 Valor total del paquete
    bonusValue: '$477',  // 👈 Valor de los bonos
    priceAfterLimit: '$97',  // 👈 Precio después de la oferta
    currency: 'USD',  // 👈 USD, EUR, MXN, etc.
  },

  // ===== MÉTRICAS =====
  metrics: {
    deliveryTime: '48',  // 👈 Tiempo de entrega
    deliveryUnit: 'horas',  // 👈 "horas", "días", "semanas"
    guaranteeDays: '7',  // 👈 Días de garantía
    supportDays: '30',  // 👈 Días de soporte
    totalDelivered: '50',  // 👈 Productos entregados/vendidos
    limitedSpots: '10',  // 👈 Espacios limitados
    spotsOccupied: '7',  // 👈 Espacios ocupados
  },

  // ===== PAQUETE PRINCIPAL (5 items) =====
  packageItems: {
    item1: {
      name: 'Producto/Servicio Principal',  // 👈 Cambiar
      value: '$240',
    },
    item2: {
      name: 'Bonus/Feature 2',  // 👈 Cambiar
      value: '$97',
    },
    // ... continuar con item3, item4, item5
  },

  // ===== BONOS (4 bonos) =====
  bonuses: {
    bonus1: {
      name: 'Nombre del Bono 1',  // 👈 Cambiar
      description: 'Descripción del bono...',  // 👈 Cambiar
      value: '$197',
    },
    // ... continuar con bonus2, bonus3, bonus4
  },

  // ===== HERO SECTION =====
  hero: {
    es: {
      title: ['TU PRODUCTO', 'PROFESIONAL', 'LISTO EN 48 HORAS'],  // 👈 Cambiar
      subtitle: 'Tu propuesta de valor principal...',  // 👈 Cambiar
      description: 'Sin complicaciones...',  // 👈 Cambiar
      badge1Text: 'Entrega Garantizada',
      badge2Text: 'Responsive Design',
      badge3Text: 'Garantía de Devolución',
    },
    en: {
      // ... versión en inglés
    },
  },

  // ===== BENEFICIOS (3 beneficios) =====
  benefits: {
    es: {
      title: 'LA TRANSFORMACIÓN PARA TU NEGOCIO',
      subtitle: 'No es solo un producto, es tu solución...',
      benefit1: {
        title: 'BENEFICIO 1',  // 👈 Cambiar
        description: 'Descripción...',  // 👈 Cambiar
        highlight: 'de entrega',
      },
      // ... benefit2, benefit3
    },
  },

  // ===== TESTIMONIOS (3 testimonios) =====
  testimonials: {
    es: [
      {
        name: 'Nombre Cliente',  // 👈 Cambiar
        business: 'Nombre Empresa',  // 👈 Cambiar
        role: 'Rol/Título',  // 👈 Cambiar
        text: 'Testimonio completo...',  // 👈 Cambiar
      },
      // ... testimonial 2, 3
    ],
  },
};
🖼️ 5. Reemplazar Imágenes
Subir estos archivos a /public:

text
/public
  ├── favicon.ico              👈 16x16px
  ├── favicon-16.png           👈 16x16px
  ├── favicon-32.png           👈 32x32px
  ├── favicon-192.png          👈 192x192px
  ├── favicon-512.png          👈 512x512px
  ├── logo.png                 👈 Tu logo (180x40px aprox)
  ├── og-image.jpg             👈 Imagen para redes sociales (1200x630px)
  └── hero-background.jpg      👈 (Opcional) Fondo del hero
Herramientas útiles:

Generar favicons: https://favicon.io/

Optimizar imágenes: https://tinypng.com/

📄 6. Actualizar index.html
Archivo: index.html

Cambiar estos campos:

xml
<!-- Title y Description -->
<title>Tu Producto | Tu Marca</title>
<meta name="description" content="Tu descripción aquí..." />

<!-- URLs -->
<link rel="canonical" href="https://tu-dominio.com" />
<meta property="og:url" content="https://tu-dominio.com" />

<!-- Imágenes -->
<meta property="og:image" content="https://tu-dominio.com/og-image.jpg" />
🚀 Deployment en Vercel
1. Conectar con Vercel
bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
2. Variables de Entorno (Opcional)
Si quieres forzar un idioma:

bash
# En Vercel Dashboard > Settings > Environment Variables
VITE_FORCE_LANG=es  # o 'en'
📁 Estructura del Proyecto
text
├── public/                  # Archivos estáticos (imágenes, favicons)
├── src/
│   ├── config/             # 🔥 Archivos de configuración (MODIFICAR ESTOS)
│   │   ├── theme.config.ts
│   │   ├── brand.config.ts
│   │   ├── integrations.config.ts
│   │   └── variables.config.ts
│   ├── components/         # Componentes React
│   ├── pages/              # Páginas
│   ├── translations.ts     # Sistema de traducciones
│   └── main.tsx
├── index.html              # HTML base (modificar meta tags)
├── tailwind.config.ts      # Configuración Tailwind
└── package.json
✅ Checklist de Configuración
Antes de hacer deploy, verifica que completaste:

 brand.config.ts - Todos los campos

 integrations.config.ts - URL de Hotmart

 variables.config.ts - Todo el contenido

 theme.config.ts - Colores

 index.html - Meta tags

 /public/logo.png - Tu logo

 /public/og-image.jpg - Imagen para redes

 /public/favicon-*.png - Todos los favicons

 Probado en localhost

 Revisado en móvil

🆘 Soporte y Preguntas
Problemas comunes:

Q: ¿Cómo cambio el color principal?
A: Edita src/config/theme.config.ts > colors.primary.DEFAULT

Q: ¿Cómo obtengo mi URL de Hotmart?
A: Hotmart > Mis Productos > [Tu Producto] > Promocionar > Copiar URL

Q: ¿Puedo usar otro procesador de pagos?
A: Sí, pero requiere personalización del código. Contacta soporte.

Q: ¿Cómo agrego más idiomas?
A: Actualmente soporta ES/EN. Para más idiomas, edita src/translations.ts

📝 Licencia
Este proyecto es una plantilla comercial. Una vez adquirida, tienes licencia para:

✅ Uso en proyectos propios

✅ Uso en proyectos de clientes

✅ Modificar el código

❌ Revender como plantilla

❌ Redistribuir el código fuente

🎯 Próximos Pasos
Completa todos los archivos de configuración

Reemplaza todas las imágenes

Prueba en localhost

Deploy en Vercel

Configura tu dominio personalizado

¡Empieza a vender!

Desarrollado con ❤️ por ZenithWebCraft