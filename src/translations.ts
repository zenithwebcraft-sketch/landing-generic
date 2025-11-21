// translations.ts - Sistema completo de traducciones

export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Hero Section
    hero: {
      brand: "ZenithWebCraft",
      title1: "TU LANDING PAGE",
      title2: "PROFESIONAL",
      title3: "LISTA EN 48 HORAS",
      subtitle: "Convierte visitantes en clientes con una landing page diseñada para vender.",
      description: "Sin complicaciones técnicas. Sin código. Sin estrés.",
      originalPrice: "$240",
      currentPrice: "$49.99",
      paymentNote: "Pago único • Sin mensualidades",
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
      socialProof: "Más de 50 landing pages entregadas",
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
      title2: "LANDING PAGE",
      title3: "DE ALTA CONVERSIÓN?",
      subtitle: "La página completa con todo lo necesario para vender",
      features: [
        "Landing Page Profesional de Alta Conversión - Valor: $240",
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
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
      securePayment: "💳 Pago 100% seguro a través de Hotmart",
      guarantee: "Garantía de 7 días o te devolvemos tu dinero"
    },
    
    // CTA Section
    cta: {
      urgencyBadge: "Oferta Por Tiempo Limitado",
      headline1: "TU ACCESO INSTANTÁNEO A",
      headline2: "TODO ESTO:",
      items: [
        { text: "Landing Page Profesional de Alta Conversión", value: "$240" },
        { text: "Guía de Copywriting en PDF", value: "$97" },
        { text: "Paleta de Colores Personalizada", value: "$67" },
        { text: "Instalación en tu Dominio", value: "$97" },
        { text: "30 Días de Soporte por Email", value: "$36" }
      ],
      normalValue: "Valor Normal:",
      specialPrice: "Precio Especial Hoy:",
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
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
      subtitle: "Tu landing page profesional está a solo un paso. Completa tu información de pago de forma segura.",
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