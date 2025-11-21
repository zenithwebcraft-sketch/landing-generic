// translations.ts - Sistema completo de traducciones

export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Hero Section
    hero: {
      brand: "ZenithWebCraft",
      title1: "TU SALES PAGE",
      title2: "PROFESIONAL",
      title3: "LISTA EN 48 HORAS",
      subtitle: "Convierte visitantes en clientes con una sales page diseñada para vender.",
      description: "Sin complicaciones técnicas. Sin código. Sin estrés.",
      originalPrice: "$240",
      currentPrice: "$49.99",
      paymentNote: "Pago único • Sin mensualidades",
      ctaButton: "OBTENER MI SALES PAGE POR SOLO $49.99",
      socialProof: "Más de 50 sales pages entregadas",
      badge1: "48h",
      badge1Text: "Entrega Garantizada",
      badge2: "100%",
      badge2Text: "Responsive Design",
      badge3: "7 Días",
      badge3Text: "Garantía de Devolución"
    },
    
    // Content Section
    content: {
      title1: "¿QUÉ INCLUYE TU",
      title2: "SALES PAGE",
      title3: "DE ALTA CONVERSIÓN?",
      subtitle: "La página completa con todo lo necesario para vender",
      features: [
        "Sales Page Profesional de Alta Conversión - Valor: $240",
        "Guía de Copywriting en PDF - Valor: $97",
        "Paleta de Colores Personalizada - Valor: $67",
        "Instalación en tu Dominio - Valor: $97",
        "30 Días de Soporte por Email - Valor: $36"
      ],
      additionalFeatures: [
        "Estructura de conversión probada",
        "Diseño adaptable y profesional",
        "Tecnología de carga instantánea",
        "Formulario de contacto integrado",
        "Compatible con todos los dispositivos",
        "Optimizada para SEO",
        "Integración con redes sociales",
        "1 semana de ajustes post-entrega"
      ],
      packageValue: "Valor Total del Paquete Completo:",
      specialPrice: "Precio Especial Hoy:",
      paymentNote: "Pago único • Sin cargos ocultos • Sin mensualidades",
      ctaButton: "OBTENER MI SALES PAGE POR SOLO $49.99",
      securePayment: "💳 Pago 100% seguro a través de Hotmart",
      guarantee: "Garantía de 7 días o te devolvemos tu dinero"
    },
    
    // CTA Section
    cta: {
      urgencyBadge: "Oferta Por Tiempo Limitado",
      headline1: "TU ACCESO INSTANTÁNEO A",
      headline2: "TODO ESTO:",
      items: [
        { text: "Sales Page Profesional de Alta Conversión", value: "$240" },
        { text: "Guía de Copywriting en PDF", value: "$97" },
        { text: "Paleta de Colores Personalizada", value: "$67" },
        { text: "Instalación en tu Dominio", value: "$97" },
        { text: "30 Días de Soporte por Email", value: "$36" }
      ],
      normalValue: "Valor Normal:",
      specialPrice: "Precio Especial Hoy:",
      ctaButton: "OBTENER MI SALES PAGE POR SOLO $49.99",
      paymentNote: "💳 Pago 100% seguro • Garantía de 7 días",
      trust1: "Pago Seguro con Hotmart",
      trust2: "Entrega en 48 horas",
      limitedSpots: "Solo 10 spots disponibles este mes",
      priceIncrease: "Después del límite, el precio sube a $97",
      spotsOccupied: "7 de 10 espacios ocupados",
      guarantee: "Garantía de Satisfacción de 7 Días o tu Dinero de Vuelta"
    },
    
    // Checkout Section
    checkout: {
      title: "Completa Tu Orden",
      subtitle: "Tu sales page profesional está a solo un paso. Completa tu información de pago de forma segura.",
      trust1: "Pago 100% Seguro",
      trust2: "Entrega en 48 Horas",
      trust3: "Múltiples Métodos de Pago",
      guaranteeTitle: "Garantía de Satisfacción",
      guaranteeText: "Si no estás 100% satisfecho, te devolvemos tu dinero",
      paymentMethod: "Método de Pago:",
      embeddedCheckout: "💳 Pagar Aquí (Tarjeta/PayPal)",
      hotmartCheckout: "🏦 Pagar en Hotmart",
      switchTo: "¿Prefieres pagar en",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "aquí"
    },
    
    // Thank You Page
    thankYou: {
      title: "¡Compra Exitosa!",
      subtitle: "Gracias por confiar en ZenithWebCraft",
      message: "Tu landing page profesional está en camino",
      whatNext: "¿Qué Sigue Ahora?",
      step1Title: "1. Revisa tu Email (Siguiente 5 minutos)",
      step1Text: "Recibirás un email de confirmación de Hotmart con los detalles de tu compra y el recibo.",
      step2Title: "2. Completa el Formulario de Información (Hoy)",
      step2Text: "Te enviaremos un formulario para recopilar la información necesaria para tu landing page:",
      step2Items: [
        "Tu información de negocio",
        "Colores de marca preferidos",
        "Textos y contenido principal",
        "Logo e imágenes (si tienes)"
      ],
      step3Title: "3. Recibe tu Landing Page (Máximo 48 horas)",
      step3Text: "Crearemos tu landing page profesional y te la entregaremos completamente funcional, instalada en tu dominio y lista para empezar a vender.",
      whatYouGet: "Lo Que Recibirás",
      items: [
        "Landing Page Profesional de Alta Conversión",
        "Guía de Copywriting en PDF",
        "Paleta de Colores Personalizada",
        "Instalación en tu Dominio",
        "30 Días de Soporte por Email"
      ],
      questionsTitle: "¿Tienes Preguntas?",
      questionsText: "Estamos aquí para ayudarte",
      contactButton: "Contactar Soporte",
      socialProof: "🎉 Te uniste a más de 50 emprendedores que ya tienen su landing page profesional"
    },

    // Benefits Section
    benefits: {
      title: "LA TRANSFORMACIÓN",
      titleBreak: "PARA TU NEGOCIO",
      subtitle: "No es solo una landing page, es tu nuevo canal de ventas 24/7",
      items: [
        {
          title: "LANZA EN TIEMPO RÉCORD",
          description: "Olvídate de semanas de desarrollo. Tu landing page estará lista en solo 48 horas, optimizada y funcionando.",
          highlight: "48 horas de entrega"
        },
        {
          title: "CONVIERTE VISITANTES EN CLIENTES",
          description: "Diseño probado para maximizar conversiones. Cada elemento está pensado para guiar a tus visitantes hacia la acción.",
          highlight: "Optimizada para vender"
        },
        {
          title: "PROYECTA MÁXIMA CONFIANZA",
          description: "Con diseño profesional y estructura clara, transmites credibilidad desde el primer segundo. Tus clientes sentirán que están en buenas manos.",
          highlight: "Diseño profesional"
        }
      ],
      quote: "La mayoría de los negocios pierden clientes potenciales cada día por no tener una landing page efectiva.",
      cta: "No dejes que eso te pase a ti."
    },

    // Testimonials Section
    testimonials: {
      title: "LO QUE DICEN NUESTROS CLIENTES",
      subtitle: "Más de 50 emprendedores ya transformaron su negocio",
      items: [
        {
          name: "Carmen Cecilia",
          business: "People Sin Límites",
          role: "Coach & Tarot",
          text: "La landing page superó mis expectativas. El diseño es hermoso y profesional, y lo mejor es que empecé a recibir consultas desde el primer día. Totalmente recomendado."
        },
        {
          name: "Ernesto Márquez",
          business: "Proyecto Lumen",
          role: "Transformación Masculina",
          text: "Como desarrollador, aprecio la calidad del código y el diseño. Mi landing para Proyecto Lumen quedó perfecta y mis clientes potenciales me dicen que se ve muy profesional."
        },
        {
          name: "Alejandro Suárez",
          business: "Disuaferca",
          role: "Importación & Exportación",
          text: "Necesitaba una presencia web rápida para mi negocio de importación. En 48 horas tenía mi landing funcionando. La inversión se pagó sola con los primeros clientes."
        }
      ],
      trust: "✨ Únete a decenas de emprendedores que ya están convirtiendo visitantes en clientes"
    },

    // Bonuses Section
    bonuses: {
      badge: "BONOS EXCLUSIVOS",
      title: "ADEMÁS, RECIBE ESTOS BONOS",
      titleHighlight: "TOTALMENTE GRATIS",
      subtitle: "Todo lo que necesitas para que tu nueva landing page convierta desde el primer día",
      items: [
        {
          title: "Guía de Copywriting para Landing Pages",
          description: "Aprende a escribir textos que venden. Incluye plantillas, ejemplos reales y fórmulas probadas para aumentar conversiones.",
          value: "$97"
        },
        {
          title: "Kit de Diseño: Paleta + Psicología del Color",
          description: "Elige los colores perfectos que generen confianza y acción. Incluye paletas pre-diseñadas y guía de implementación.",
          value: "$67"
        },
        {
          title: "Setup Completo de Dominio y Hosting",
          description: "Te ayudamos a configurar tu dominio y hosting para que tu landing esté en línea. Soporte paso a paso incluido.",
          value: "$97"
        },
        {
          title: "30 Días de Soporte por Email",
          description: "Cualquier duda, ajuste menor o consulta técnica. Estamos aquí para asegurar tu éxito durante el primer mes.",
          value: "$36"
        }
      ],
      totalValue: "Valor Total de los Bonos:",
      free: "100% GRATIS",
      investment: "Tu inversión:",
      only: "Solo $49.99",
      valueStatement: "Obtienes $346.99 en valor por solo $49.99"
    },

    // FAQ Section
    faq: {
      title: "PREGUNTAS FRECUENTES (FAQ)",
      subtitle: "Resolvemos todas tus dudas antes de que des el paso",
      items: [
        {
          question: "¿Qué necesito para empezar?",
          answer: "Solo necesitas tener claro qué quieres vender o promocionar. Nosotros nos encargamos de todo lo demás: diseño, estructura, copywriting y puesta en línea. Si ya tienes un dominio, perfecto. Si no, te ayudamos a conseguir uno."
        },
        {
          question: "¿Qué pasa si no sé nada de tecnología?",
          answer: "¡No hay problema! Ese es exactamente el punto. Nosotros manejamos toda la parte técnica. Tú solo necesitas decirnos qué quieres comunicar y nosotros lo hacemos realidad. Además, incluimos 30 días de soporte para cualquier duda."
        },
        {
          question: "¿Puedo hacer cambios después de la entrega?",
          answer: "Sí. Incluimos 1 semana de ajustes post-entrega sin costo adicional. Después de ese período, puedes contratar ajustes menores o aprender a editarla tú mismo con la guía que te entregamos."
        },
        {
          question: "¿Está optimizada para móviles?",
          answer: "¡Absolutamente! Más del 70% de las visitas vienen de móviles. Tu landing page se verá perfecta en celulares, tablets y computadoras. Probamos en todos los dispositivos antes de entregarte."
        },
        {
          question: "¿Incluye formulario de contacto?",
          answer: "Sí, incluye un formulario de contacto completamente funcional. Los mensajes llegan directo a tu email. También podemos integrarlo con herramientas como Mailchimp, ActiveCampaign o WhatsApp si lo prefieres."
        },
        {
          question: "¿Qué pasa si no me gusta el diseño?",
          answer: "Trabajamos contigo para asegurarnos de que el diseño refleje tu marca. Hacemos una propuesta inicial basada en tus necesidades y luego refinamos hasta que estés 100% satisfecho. Si definitivamente no te convence, tenemos garantía de 7 días."
        },
        {
          question: "¿Cómo funciona el proceso de entrega?",
          answer: "1) Haces tu compra. 2) Te contactamos para conocer tu negocio. 3) En 24-48 horas te enviamos la primera versión. 4) Hacemos ajustes según tu feedback. 5) Entregamos la landing completa funcionando en tu dominio."
        },
        {
          question: "¿Puedo conectarla con Hotmart/Stripe/PayPal?",
          answer: "¡Claro! Podemos integrar botones de pago de cualquier plataforma: Hotmart, Stripe, PayPal, Mercado Pago, etc. Solo necesitas tus links de pago y nosotros los configuramos."
        },
        {
          question: "¿Incluye hosting?",
          answer: "La landing está lista para subir a cualquier hosting. Si ya tienes uno, perfecto. Si no, te recomendamos opciones gratuitas como Vercel o Netlify, y te ayudamos a configurarlo (incluido en el bonus de setup)."
        },
        {
          question: "¿Hay garantía de devolución?",
          answer: "Sí. Tienes 7 días para evaluar tu landing page. Si por cualquier razón no estás satisfecho, te devolvemos tu dinero completo, sin preguntas. Queremos que estés 100% feliz con tu inversión."
        },
        {
          question: "¿Cuánto tiempo tengo acceso a los bonos?",
          answer: "Los bonos (guías, paletas de colores, soporte) son tuyos para siempre. Los recibes por email inmediatamente después de tu compra y puedes usarlos cuando quieras, sin límite de tiempo."
        },
        {
          question: "¿El precio incluye el dominio?",
          answer: "El precio de $49.99 incluye el diseño y desarrollo de la landing page. El dominio se compra aparte (cuesta $10-15 al año). Sin embargo, te ayudamos con todo el proceso de compra y configuración como parte del bonus de setup."
        }
      ],
      stillQuestions: "¿Tienes otra pregunta?",
      contact: "Contáctanos directamente →"
    }
  },
  
  en: {
    // Hero Section
    hero: {
      brand: "ZenithWebCraft",
      title1: "YOUR PROFESSIONAL",
      title2: "SALES PAGE",
      title3: "READY IN 48 HOURS",
      subtitle: "Turn visitors into customers with a sales page designed to sell.",
      description: "No technical complications. No code. No stress.",
      originalPrice: "$240",
      currentPrice: "$49.99",
      paymentNote: "One-time payment • No monthly fees",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      socialProof: "Over 50 sales pages delivered",
      badge1: "48h",
      badge1Text: "Guaranteed Delivery",
      badge2: "100%",
      badge2Text: "Responsive Design",
      badge3: "7 Days",
      badge3Text: "Money-Back Guarantee"
    },
    
    // Content Section
    content: {
      title1: "WHAT'S INCLUDED IN YOUR",
      title2: "HIGH-CONVERTING",
      title3: "SALES PAGE?",
      subtitle: "The complete page with everything you need to sell",
      features: [
        "Professional High-Converting Sales Page - Value: $240",
        "Copywriting Guide PDF - Value: $97",
        "Custom Color Palette - Value: $67",
        "Domain Installation - Value: $97",
        "30 Days Email Support - Value: $36"
      ],
      additionalFeatures: [
        "Proven conversion structure",
        "Adaptive and professional design",
        "Instant loading technology",
        "Integrated contact form",
        "Compatible with all devices",
        "SEO optimized",
        "Social media integration",
        "1 week post-delivery adjustments"
      ],
      packageValue: "Total Package Value:",
      specialPrice: "Special Price Today:",
      paymentNote: "One-time payment • No hidden fees • No monthly charges",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      securePayment: "💳 100% secure payment through Hotmart",
      guarantee: "7-day guarantee or your money back"
    },
    
    // CTA Section
    cta: {
      urgencyBadge: "Limited Time Offer",
      headline1: "YOUR INSTANT ACCESS TO",
      headline2: "ALL OF THIS:",
      items: [
        { text: "Professional High-Converting Sales Page", value: "$240" },
        { text: "Copywriting Guide PDF", value: "$97" },
        { text: "Custom Color Palette", value: "$67" },
        { text: "Domain Installation", value: "$97" },
        { text: "30 Days Email Support", value: "$36" }
      ],
      normalValue: "Regular Value:",
      specialPrice: "Special Price Today:",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      paymentNote: "💳 100% secure payment • 7-day guarantee",
      trust1: "Secure Payment with Hotmart",
      trust2: "Delivery in 48 hours",
      limitedSpots: "Only 10 spots available this month",
      priceIncrease: "After the limit, price increases to $97",
      spotsOccupied: "7 of 10 spots taken",
      guarantee: "7-Day Satisfaction Guarantee or Your Money Back"
    },
    
    // Checkout Section
    checkout: {
      title: "Complete Your Order",
      subtitle: "Your professional sales page is just one step away. Complete your payment information securely.",
      trust1: "100% Secure Payment",
      trust2: "Delivery in 48 Hours",
      trust3: "Multiple Payment Methods",
      guaranteeTitle: "Satisfaction Guarantee",
      guaranteeText: "If you're not 100% satisfied, we'll refund your money",
      paymentMethod: "Payment Method:",
      embeddedCheckout: "💳 Pay Here (Card/PayPal)",
      hotmartCheckout: "🏦 Pay on Hotmart",
      switchTo: "Prefer to pay on",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "here"
    },
    
    // Thank You Page
    thankYou: {
      title: "Purchase Successful!",
      subtitle: "Thank you for trusting ZenithWebCraft",
      message: "Your professional sales page is on its way",
      whatNext: "What's Next?",
      step1Title: "1. Check Your Email (Next 5 minutes)",
      step1Text: "You'll receive a confirmation email from Hotmart with your purchase details and receipt.",
      step2Title: "2. Complete the Information Form (Today)",
      step2Text: "We'll send you a form to collect the necessary information for your sales page:",
      step2Items: [
        "Your business information",
        "Preferred brand colors",
        "Main texts and content",
        "Logo and images (if you have them)"
      ],
      step3Title: "3. Receive Your Sales Page (Maximum 48 hours)",
      step3Text: "We'll create your professional sales page and deliver it fully functional, installed on your domain and ready to start selling.",
      whatYouGet: "What You'll Receive",
      items: [
        "Professional High-Converting Sales Page",
        "Copywriting Guide PDF",
        "Custom Color Palette",
        "Domain Installation",
        "30 Days Email Support"
      ],
      questionsTitle: "Have Questions?",
      questionsText: "We're here to help",
      contactButton: "Contact Support",
      socialProof: "🎉 You joined over 50 entrepreneurs who already have their professional sales page"
    },

    // Benefits Section
    benefits: {
      title: "THE TRANSFORMATION",
      titleBreak: "FOR YOUR BUSINESS",
      subtitle: "It's not just a sales page, it's your new 24/7 sales channel",
      items: [
        {
          title: "LAUNCH IN RECORD TIME",
          description: "Forget weeks of development. Your sales page will be ready in just 48 hours, optimized and working.",
          highlight: "48-hour delivery"
        },
        {
          title: "CONVERT VISITORS INTO CUSTOMERS",
          description: "Proven design to maximize conversions. Every element is designed to guide your visitors toward action.",
          highlight: "Optimized to sell"
        },
        {
          title: "PROJECT MAXIMUM TRUST",
          description: "With professional design and clear structure, you convey credibility from the first second. Your customers will feel they're in good hands.",
          highlight: "Professional design"
        }
      ],
      quote: "Most businesses lose potential customers every day by not having an effective sales page.",
      cta: "Don't let that happen to you."
    },

    // Testimonials Section
    testimonials: {
      title: "WHAT OUR CLIENTS SAY",
      subtitle: "Over 50 entrepreneurs have already transformed their business",
      items: [
        {
          name: "Carmen Cecilia",
          business: "People Sin Límites",
          role: "Coach & Tarot",
          text: "The sales page exceeded my expectations. The design is beautiful and professional, and best of all, I started receiving inquiries from day one. Totally recommended."
        },
        {
          name: "Ernesto Márquez",
          business: "Proyecto Lumen",
          role: "Male Transformation",
          text: "As a developer, I appreciate the code quality and design. My landing for Proyecto Lumen turned out perfect and my potential clients tell me it looks very professional."
        },
        {
          name: "Alejandro Suárez",
          business: "Disuaferca",
          role: "Import & Export",
          text: "I needed a quick web presence for my import business. In 48 hours I had my landing page working. The investment paid for itself with the first clients."
        }
      ],
      trust: "✨ Join dozens of entrepreneurs who are already converting visitors into customers"
    },

    // Bonuses Section
    bonuses: {
      badge: "EXCLUSIVE BONUSES",
      title: "PLUS, RECEIVE THESE BONUSES",
      titleHighlight: "COMPLETELY FREE",
      subtitle: "Everything you need for your new sales page to convert from day one",
      items: [
        {
          title: "Copywriting Guide for Sales Pages",
          description: "Learn to write texts that sell. Includes templates, real examples and proven formulas to increase conversions.",
          value: "$97"
        },
        {
          title: "Design Kit: Palette + Color Psychology",
          description: "Choose the perfect colors that generate trust and action. Includes pre-designed palettes and implementation guide.",
          value: "$67"
        },
        {
          title: "Complete Domain and Hosting Setup",
          description: "We help you configure your domain and hosting so your landing is online. Step-by-step support included.",
          value: "$97"
        },
        {
          title: "30 Days Email Support",
          description: "Any questions, minor adjustments or technical queries. We're here to ensure your success during the first month.",
          value: "$36"
        }
      ],
      totalValue: "Total Bonus Value:",
      free: "100% FREE",
      investment: "Your investment:",
      only: "Only $49.99",
      valueStatement: "You get $346.99 in value for only $49.99"
    },

    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
      subtitle: "We answer all your questions before you take the step",
      items: [
        {
          question: "What do I need to get started?",
          answer: "You just need to be clear about what you want to sell or promote. We take care of everything else: design, structure, copywriting and going live. If you already have a domain, perfect. If not, we help you get one."
        },
        {
          question: "What if I don't know anything about technology?",
          answer: "No problem! That's exactly the point. We handle all the technical parts. You just need to tell us what you want to communicate and we make it happen. Plus, we include 30 days of support for any questions."
        },
        {
          question: "Can I make changes after delivery?",
          answer: "Yes. We include 1 week of post-delivery adjustments at no additional cost. After that period, you can hire minor adjustments or learn to edit it yourself with the guide we provide."
        },
        {
          question: "Is it optimized for mobile?",
          answer: "Absolutely! More than 70% of visits come from mobile. Your sales page will look perfect on phones, tablets and computers. We test on all devices before delivering."
        },
        {
          question: "Does it include a contact form?",
          answer: "Yes, it includes a fully functional contact form. Messages go straight to your email. We can also integrate it with tools like Mailchimp, ActiveCampaign or WhatsApp if you prefer."
        },
        {
          question: "What if I don't like the design?",
          answer: "We work with you to ensure the design reflects your brand. We make an initial proposal based on your needs and then refine until you're 100% satisfied. If you're definitely not convinced, we have a 7-day guarantee."
        },
        {
          question: "How does the delivery process work?",
          answer: "1) You make your purchase. 2) We contact you to learn about your business. 3) In 24-48 hours we send you the first version. 4) We make adjustments based on your feedback. 5) We deliver the complete landing working on your domain."
        },
        {
          question: "Can I connect it with Hotmart/Stripe/PayPal?",
          answer: "Of course! We can integrate payment buttons from any platform: Hotmart, Stripe, PayPal, Mercado Pago, etc. You just need your payment links and we configure them."
        },
        {
          question: "Does it include hosting?",
          answer: "The landing is ready to upload to any hosting. If you already have one, perfect. If not, we recommend free options like Vercel or Netlify, and we help you configure it (included in the setup bonus)."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "Yes. You have 7 days to evaluate your sales page. If for any reason you're not satisfied, we'll refund your money in full, no questions asked. We want you to be 100% happy with your investment."
        },
        {
          question: "How long do I have access to the bonuses?",
          answer: "The bonuses (guides, color palettes, support) are yours forever. You receive them by email immediately after your purchase and can use them whenever you want, with no time limit."
        },
        {
          question: "Does the price include the domain?",
          answer: "The price of $49.99 includes the design and development of the sales page. The domain is purchased separately (costs $10-15 per year). However, we help you with the entire purchase and configuration process as part of the setup bonus."
        }
      ],
      stillQuestions: "Have another question?",
      contact: "Contact us directly →"
    }
  }
};

// Hook para usar traducciones
export const useTranslation = () => {
  const detectLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  const language = detectLanguage();
  const t = translations[language];

  return { t, language };
};