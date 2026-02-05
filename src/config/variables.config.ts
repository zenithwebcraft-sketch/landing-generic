// src/config/variables.config.ts
// TODAS las variables que se solicitarán al cliente en el cuestionario

export const variablesConfig = {
  // ===== INFORMACIÓN DEL PRODUCTO/SERVICIO =====
  product: {
    // Nombre del producto/servicio principal
    name: 'Landing Page Profesional',
    namePlural: 'Landing Pages',
    
    // Tipo de acción (para social proof)
    actionCompleted: 'entregadas', // ej: "vendidos", "entregados", "realizadas", "activos"
    
    // Tipo de cliente/usuario
    clientType: 'emprendedores', // ej: "estudiantes", "clientes", "empresas", "miembros"
  },

  // ===== PRECIOS =====
  pricing: {
    originalPrice: '$240',
    currentPrice: '$49.99',
    normalValue: '$537',
    bonusValue: '$477',
    priceAfterLimit: '$97',
    currency: 'USD',
  },

  // ===== TIEMPOS Y MÉTRICAS =====
  metrics: {
    deliveryTime: '48',              // Tiempo de entrega
    deliveryUnit: 'horas',           // Unidad: "horas", "días", "semanas"
    guaranteeDays: '7',              // Días de garantía
    supportDays: '30',               // Días de soporte
    totalDelivered: '50',            // Total de productos entregados/vendidos
    limitedSpots: '10',              // Espacios limitados
    spotsOccupied: '7',              // Espacios ocupados
  },

  // ===== ITEMS DEL PAQUETE PRINCIPAL (5 items) =====
  packageItems: {
    item1: {
      name: 'Landing Page Profesional de Alta Conversión',
      value: '$240',
    },
    item2: {
      name: 'Guía de Copywriting en PDF',
      value: '$97',
    },
    item3: {
      name: 'Paleta de Colores Personalizada',
      value: '$67',
    },
    item4: {
      name: 'Instalación en tu Dominio',
      value: '$97',
    },
    item5: {
      name: 'Soporte por Email', // Sin el número de días aquí
      value: '$36',
    },
  },

  // ===== BONOS ADICIONALES (4 bonos) =====
  bonuses: {
    bonus1: {
      name: "Sistema de 'Smart Checkout' Geolocalizado",
      description: 'Tecnología inteligente que adapta la pasarela de pago según el país del visitante (Hotmart para Latam, Stripe/PayPal para el resto del mundo) para maximizar tus ventas.',
      value: '$197',
    },
    bonus2: {
      name: 'Hosting Global de Alta Velocidad',
      description: 'Alojamiento en redes CDN de última generación con detección automática de idioma. Tu página volará y se adaptará al usuario, sin importar dónde esté.',
      value: '$147',
    },
    bonus3: {
      name: 'Setup Completo de Dominio y Hosting',
      description: 'Te ayudamos a configurar tu dominio y hosting para que tu landing esté en línea. Soporte paso a paso incluido.',
      value: '$97',
    },
    bonus4: {
      name: 'Soporte por Email', // Sin el número de días aquí
      description: 'Cualquier duda, ajuste menor o consulta técnica. Estamos aquí para asegurar tu éxito durante el primer mes.',
      value: '$36',
    },
  },

  // ===== TEXTOS HERO SECTION =====
  hero: {
    es: {
      title: ['TU LANDING PAGE', 'PROFESIONAL', 'LISTA EN 48 HORAS'],
      subtitle: 'Convierte visitantes en clientes con una landing page diseñada para vender.',
      description: 'Sin complicaciones técnicas. Sin código. Sin estrés.',
      badge1Text: 'Entrega Garantizada',
      badge2Text: 'Responsive Design',
      badge3Text: 'Garantía de Devolución',
    },
    en: {
      title: ['YOUR PROFESSIONAL', 'SALES PAGE', 'READY IN 48 HOURS'],
      subtitle: 'Turn visitors into customers with a sales page designed to sell.',
      description: 'No technical complications. No code. No stress.',
      badge1Text: 'Guaranteed Delivery',
      badge2Text: 'Responsive Design',
      badge3Text: 'Money-Back Guarantee',
    },
  },

  // ===== BENEFICIOS (3 beneficios) =====
  benefits: {
    es: {
      title: 'LA TRANSFORMACIÓN PARA TU NEGOCIO',
      subtitle: 'No es solo una landing page, es tu nuevo canal de ventas 24/7',
      benefit1: {
        title: 'LANZA EN TIEMPO RÉCORD',
        description: 'Olvídate de semanas de desarrollo. Tu landing page estará lista en solo 48 horas, optimizada y funcionando.',
        highlight: 'de entrega',
      },
      benefit2: {
        title: 'CONVIERTE VISITANTES EN CLIENTES',
        description: 'Diseño probado para maximizar conversiones. Cada elemento está pensado para guiar a tus visitantes hacia la acción.',
        highlight: 'Optimizada para vender',
      },
      benefit3: {
        title: 'PROYECTA MÁXIMA CONFIANZA',
        description: 'Con diseño profesional y estructura clara, transmites credibilidad desde el primer segundo.',
        highlight: 'Diseño profesional',
      },
    },
    en: {
      title: 'THE TRANSFORMATION FOR YOUR BUSINESS',
      subtitle: "It's not just a sales page, it's your new 24/7 sales channel",
      benefit1: {
        title: 'LAUNCH IN RECORD TIME',
        description: 'Forget weeks of development. Your sales page will be ready in just 48 hours, optimized and working.',
        highlight: 'delivery',
      },
      benefit2: {
        title: 'CONVERT VISITORS INTO CUSTOMERS',
        description: 'Proven design to maximize conversions. Every element is designed to guide your visitors toward action.',
        highlight: 'Optimized to sell',
      },
      benefit3: {
        title: 'PROJECT MAXIMUM TRUST',
        description: 'With professional design and clear structure, you convey credibility from the first second.',
        highlight: 'Professional design',
      },
    },
  },

  // ===== TESTIMONIOS (3 testimonios) =====
  testimonials: {
    es: [
      {
        name: 'Carmen Cecilia',
        business: 'People Sin Límites',
        role: 'Coach & Tarot',
        text: 'La landing page superó mis expectativas. El diseño es hermoso y profesional, y lo mejor es que empecé a recibir consultas desde el primer día.',
      },
      {
        name: 'Ernesto Márquez',
        business: 'Proyecto Lumen',
        role: 'Transformación Masculina',
        text: 'Como desarrollador, aprecio la calidad del código y el diseño. Mi landing quedó perfecta y mis clientes potenciales me dicen que se ve muy profesional.',
      },
      {
        name: 'Alejandro Suárez',
        business: 'Disuaferca',
        role: 'Importación & Exportación',
        text: 'Necesitaba una presencia web rápida. En 48 horas tenía mi landing funcionando. La inversión se pagó sola con los primeros clientes.',
      },
    ],
    en: [
      {
        name: 'Carmen Cecilia',
        business: 'People Sin Límites',
        role: 'Coach & Tarot',
        text: 'The sales page exceeded my expectations. The design is beautiful and professional, and I started receiving inquiries from day one.',
      },
      {
        name: 'Ernesto Márquez',
        business: 'Proyecto Lumen',
        role: 'Male Transformation',
        text: 'As a developer, I appreciate the code quality and design. My landing turned out perfect and my clients tell me it looks very professional.',
      },
      {
        name: 'Alejandro Suárez',
        business: 'Disuaferca',
        role: 'Import & Export',
        text: 'I needed a quick web presence. In 48 hours I had my landing working. The investment paid for itself with the first clients.',
      },
    ],
  },

  // ===== FAQs (puedes agregar/quitar según necesites) =====
  // Los FAQs se quedarán en translations.ts porque son muy específicos
  // y varían mucho por tipo de negocio
};

export default variablesConfig;
