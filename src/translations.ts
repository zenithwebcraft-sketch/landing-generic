// src/translations.ts
// Sistema de traducciones usando variables.config.ts

import { variablesConfig } from './config/variables.config';
import { brandConfig } from './config/brand.config';

export type Language = 'es' | 'en';

// Desestructurar variables para fácil acceso
const {
  product,
  pricing,
  metrics,
  packageItems,
  bonuses,
  hero: heroConfig,
  benefits: benefitsConfig,
  testimonials: testimonialsConfig,
} = variablesConfig;

const brandName = brandConfig.name;

export const translations = {
  es: {
    announcement: "ANUNCIO IMPORTANTE: ¡OFERTA DISPONIBLE POR TIEMPO LIMITADO!",
    
    // Hero Section
    hero: {
      brand: brandName,
      title1: heroConfig.es.title[0],
      title2: heroConfig.es.title[1],
      title3: heroConfig.es.title[2],
      subtitle: heroConfig.es.subtitle,
      description: heroConfig.es.description,
      originalPrice: pricing.originalPrice,
      currentPrice: pricing.currentPrice,
      paymentNote: "Pago único • Sin mensualidades",
      ctaButton: `OBTENER MI ${product.name.toUpperCase()} POR SOLO ${pricing.currentPrice}`,
      socialProof: `Más de ${metrics.totalDelivered} ${product.namePlural.toLowerCase()} ${product.actionCompleted}`,
      badge1: `${metrics.deliveryTime}${metrics.deliveryUnit === 'horas' ? 'h' : 'd'}`,
      badge1Text: heroConfig.es.badge1Text,
      badge2: "100%",
      badge2Text: heroConfig.es.badge2Text,
      badge3: `${metrics.guaranteeDays} Días`,
      badge3Text: heroConfig.es.badge3Text,
    },

    // Content Section
    content: {
      title1: "¿QUÉ INCLUYE TU",
      title2: product.name.toUpperCase(),
      title3: "DE ALTA CONVERSIÓN?",
      subtitle: "La página completa con todo lo necesario para vender",
      features: [
        `${packageItems.item1.name} - Valor: ${packageItems.item1.value}`,
        `${packageItems.item2.name} - Valor: ${packageItems.item2.value}`,
        `${packageItems.item3.name} - Valor: ${packageItems.item3.value}`,
        `${packageItems.item4.name} - Valor: ${packageItems.item4.value}`,
        `${metrics.supportDays} Días de ${packageItems.item5.name} - Valor: ${packageItems.item5.value}`,
      ],
      additionalFeatures: [
        "Estructura de conversión probada",
        "Diseño adaptable y profesional",
        "Tecnología de carga instantánea",
        "Formulario de contacto integrado",
        "Compatible con todos los dispositivos",
        "Optimizada para SEO",
        "Integración con redes sociales",
        "1 semana de ajustes post-entrega",
      ],
      packageValue: "Valor Total del Paquete Completo:",
      specialPrice: "Precio Especial Hoy:",
      paymentNote: "Pago único • Sin cargos ocultos • Sin mensualidades",
      ctaButton: `OBTENER MI ${product.name.toUpperCase()} POR SOLO ${pricing.currentPrice}`,
      securePayment: "💳 Pago 100% seguro a través de Hotmart",
      guarantee: `Garantía de ${metrics.guaranteeDays} días o te devolvemos tu dinero`,
    },

    // CTA Section
    cta: {
      urgencyBadge: "Oferta Por Tiempo Limitado",
      headline1: "TU ACCESO INSTANTÁNEO A",
      headline2: "TODO ESTO:",
      items: [
        { text: packageItems.item1.name, value: packageItems.item1.value },
        { text: packageItems.item2.name, value: packageItems.item2.value },
        { text: packageItems.item3.name, value: packageItems.item3.value },
        { text: packageItems.item4.name, value: packageItems.item4.value },
        { text: `${metrics.supportDays} Días de ${packageItems.item5.name}`, value: packageItems.item5.value },
      ],
      normalValue: "Valor Normal:",
      specialPrice: "Precio Especial Hoy:",
      ctaButton: `OBTENER MI ${product.name.toUpperCase()} POR SOLO ${pricing.currentPrice}`,
      paymentNote: `💳 Pago 100% seguro • Garantía de ${metrics.guaranteeDays} días`,
      trust1: "Pago Seguro con Hotmart",
      trust2: `Entrega en ${metrics.deliveryTime} ${metrics.deliveryUnit}`,
      limitedSpots: `Solo ${metrics.limitedSpots} spots disponibles este mes`,
      priceIncrease: `Después del límite, el precio sube a ${pricing.priceAfterLimit}`,
      spotsOccupied: `${metrics.spotsOccupied} de ${metrics.limitedSpots} espacios ocupados`,
      guarantee: `Garantía de Satisfacción de ${metrics.guaranteeDays} Días o tu Dinero de Vuelta`,
    },

    // Checkout Section
    checkout: {
      title: "Completa Tu Orden",
      subtitle: `Tu ${product.name.toLowerCase()} está a solo un paso. Completa tu información de pago de forma segura.`,
      trust1: "Pago 100% Seguro",
      trust2: `Entrega en ${metrics.deliveryTime} ${metrics.deliveryUnit}`,
      trust3: "Múltiples Métodos de Pago",
      guaranteeTitle: "Garantía de Satisfacción",
      guaranteeText: "Si no estás 100% satisfecho, te devolvemos tu dinero",
      paymentMethod: "Método de Pago:",
      embeddedCheckout: "💳 Pagar Aquí (Tarjeta/PayPal)",
      hotmartCheckout: "🏦 Pagar en Hotmart",
      switchTo: "¿Prefieres pagar en",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "aquí",
    },

    // Thank You Page
    thankYou: {
      title: "¡Compra Exitosa!",
      subtitle: `Gracias por confiar en ${brandName}`,
      message: `Tu ${product.name.toLowerCase()} está en camino`,
      whatNext: "¿Qué Sigue Ahora?",
      step1Title: "1. Completa el Formulario de Inicio (IMPORTANTE)",
      step1Text: "Necesitamos la información básica de tu negocio para configurar el Smart Checkout y el diseño. Haz clic en el botón de abajo para enviarnos tus datos.",
      step2Title: "2. Configuración Técnica (24 Horas)",
      step2Text: "Nuestro equipo conectará tu dominio a la red global CDN y configurará las pasarelas de pago para USA y Latam.",
      step3Title: `3. Entrega Final (Máximo ${metrics.deliveryTime} ${metrics.deliveryUnit})`,
      step3Text: "Te enviaremos tu enlace final para revisión. Tu negocio estará vendiendo globalmente en tiempo récord.",
      whatYouGet: "Tu Paquete Activado Incluye:",
      items: [
        packageItems.item1.name,
        packageItems.item2.name,
        packageItems.item3.name,
        packageItems.item4.name,
        `${metrics.supportDays} Días de ${packageItems.item5.name}`,
      ],
      questionsTitle: "¿Tienes Preguntas?",
      questionsText: "Estamos aquí para ayudarte",
      contactButton: "Ir al Formulario de Inicio",
      formNote: `*Es indispensable para entregar en ${metrics.deliveryTime}${metrics.deliveryUnit === 'horas' ? 'h' : 'd'}`,
      socialProof: `🎉 Te uniste a los ${product.clientType} que ya venden sin fronteras`,
    },

    // Benefits Section
    benefits: {
      title: benefitsConfig.es.title.split(' PARA ')[0],
      titleBreak: "PARA TU NEGOCIO",
      subtitle: benefitsConfig.es.subtitle,
      items: [
        {
          title: benefitsConfig.es.benefit1.title,
          description: benefitsConfig.es.benefit1.description,
          highlight: `${metrics.deliveryTime} ${metrics.deliveryUnit} ${benefitsConfig.es.benefit1.highlight}`,
        },
        {
          title: benefitsConfig.es.benefit2.title,
          description: benefitsConfig.es.benefit2.description,
          highlight: benefitsConfig.es.benefit2.highlight,
        },
        {
          title: benefitsConfig.es.benefit3.title,
          description: benefitsConfig.es.benefit3.description,
          highlight: benefitsConfig.es.benefit3.highlight,
        },
      ],
      quote: `La mayoría de los negocios pierden clientes potenciales cada día por no tener un ${product.name.toLowerCase()} efectivo.`,
      cta: "No dejes que eso te pase a ti.",
    },

    // Testimonials Section
    testimonials: {
      title: "LO QUE DICEN NUESTROS CLIENTES",
      subtitle: `Más de ${metrics.totalDelivered} ${product.clientType} ya transformaron su negocio`,
      items: testimonialsConfig.es,
      trust: `✨ Únete a decenas de ${product.clientType} que ya están convirtiendo visitantes en clientes`,
    },

    // Bonuses Section
    bonuses: {
      badge: "BONOS EXCLUSIVOS",
      title: "ADEMÁS, RECIBE ESTOS BONOS",
      titleHighlight: "TOTALMENTE GRATIS",
      subtitle: `Todo lo que necesitas para que tu nuevo ${product.name.toLowerCase()} convierta desde el primer día`,
      items: [
        {
          title: bonuses.bonus1.name,
          description: bonuses.bonus1.description,
          value: bonuses.bonus1.value,
        },
        {
          title: bonuses.bonus2.name,
          description: bonuses.bonus2.description,
          value: bonuses.bonus2.value,
        },
        {
          title: bonuses.bonus3.name,
          description: bonuses.bonus3.description,
          value: bonuses.bonus3.value,
        },
        {
          title: `${metrics.supportDays} Días de ${bonuses.bonus4.name}`,
          description: bonuses.bonus4.description,
          value: bonuses.bonus4.value,
        },
      ],
      totalValue: "Valor Total de los Bonos:",
      free: "100% GRATIS",
      investment: "Tu inversión:",
      only: `Solo ${pricing.currentPrice}`,
      valueStatement: `Obtienes ${pricing.bonusValue} en valor por solo ${pricing.currentPrice}`,
    },

    // FAQ Section
    faq: {
      title: "PREGUNTAS FRECUENTES (FAQ)",
      subtitle: "Resolvemos todas tus dudas antes de que des el paso",
      items: [
        {
          question: "¿Qué necesito para empezar?",
          answer: "Solo necesitas tener claro qué quieres vender o promocionar. Nosotros nos encargamos de todo lo demás: diseño, estructura, copywriting y puesta en línea. Si ya tienes un dominio, perfecto. Si no, te ayudamos a conseguir uno.",
        },
        {
          question: "¿Qué pasa si no sé nada de tecnología?",
          answer: `¡No hay problema! Ese es exactamente el punto. Nosotros manejamos toda la parte técnica. Tú solo necesitas decirnos qué quieres comunicar y nosotros lo hacemos realidad. Además, incluimos ${metrics.supportDays} días de soporte para cualquier duda.`,
        },
        {
          question: "¿Puedo hacer cambios después de la entrega?",
          answer: "Sí. Incluimos 1 semana de ajustes post-entrega sin costo adicional. Después de ese período, puedes contratar ajustes menores o aprender a editarla tú mismo con la guía que te entregamos.",
        },
        {
          question: "¿Está optimizada para móviles?",
          answer: `¡Absolutamente! Más del 70% de las visitas vienen de móviles. Tu ${product.name.toLowerCase()} se verá perfecta en celulares, tablets y computadoras. Probamos en todos los dispositivos antes de entregarte.`,
        },
        {
          question: "¿Incluye formulario de contacto?",
          answer: "Sí, incluye un formulario de contacto completamente funcional. Los mensajes llegan directo a tu email. También podemos integrarlo con herramientas como Mailchimp, ActiveCampaign o WhatsApp si lo prefieres.",
        },
        {
          question: "¿Qué pasa si no me gusta el diseño?",
          answer: `Trabajamos contigo para asegurarnos de que el diseño refleje tu marca. Hacemos una propuesta inicial basada en tus necesidades y luego refinamos hasta que estés 100% satisfecho. Si definitivamente no te convence, tenemos garantía de ${metrics.guaranteeDays} días.`,
        },
        {
          question: "¿Cómo funciona el proceso de entrega?",
          answer: `1) Haces tu compra. 2) Te contactamos para conocer tu negocio. 3) En ${metrics.deliveryTime}-${parseInt(metrics.deliveryTime) + 24} ${metrics.deliveryUnit} te enviamos la primera versión. 4) Hacemos ajustes según tu feedback. 5) Entregamos la landing completa funcionando en tu dominio.`,
        },
        {
          question: "¿Puedo conectarla con Hotmart/Stripe/PayPal?",
          answer: "¡Claro! Podemos integrar botones de pago de cualquier plataforma: Hotmart, Stripe, PayPal, Mercado Pago, etc. Solo necesitas tus links de pago y nosotros los configuramos.",
        },
        {
          question: "¿Incluye hosting?",
          answer: "La landing está lista para subir a cualquier hosting. Si ya tienes uno, perfecto. Si no, te recomendamos opciones gratuitas como Vercel o Netlify, y te ayudamos a configurarlo (incluido en el bonus de setup).",
        },
        {
          question: "¿Hay garantía de devolución?",
          answer: `Sí. Tienes ${metrics.guaranteeDays} días para evaluar tu ${product.name.toLowerCase()}. Si por cualquier razón no estás satisfecho, te devolvemos tu dinero completo, sin preguntas. Queremos que estés 100% feliz con tu inversión.`,
        },
        {
          question: "¿Cuánto tiempo tengo acceso a los bonos?",
          answer: "Los bonos (guías, paletas de colores, soporte) son tuyos para siempre. Los recibes por email inmediatamente después de tu compra y puedes usarlos cuando quieras, sin límite de tiempo.",
        },
        {
          question: "¿El precio incluye el dominio?",
          answer: `El precio de ${pricing.currentPrice} incluye el diseño y desarrollo de la landing page. El dominio se compra aparte (cuesta $10-15 al año). Sin embargo, te ayudamos con todo el proceso de compra y configuración como parte del bonus de setup.`,
        },
      ],
      stillQuestions: "¿Tienes otra pregunta?",
      contact: "Contáctanos directamente →",
    },
  },

  en: {
    announcement: "IMPORTANT ANNOUNCEMENT: OFFER AVAILABLE FOR A LIMITED TIME!",
    
    // Hero Section
    hero: {
      brand: brandName,
      title1: heroConfig.en.title[0],
      title2: heroConfig.en.title[1],
      title3: heroConfig.en.title[2],
      subtitle: heroConfig.en.subtitle,
      description: heroConfig.en.description,
      originalPrice: pricing.originalPrice,
      currentPrice: pricing.currentPrice,
      paymentNote: "One-time payment • No monthly fees",
      ctaButton: `GET MY ${product.name.toUpperCase()} FOR ONLY ${pricing.currentPrice}`,
      socialProof: `Over ${metrics.totalDelivered} ${product.namePlural.toLowerCase()} delivered`,
      badge1: `${metrics.deliveryTime}${metrics.deliveryUnit === 'horas' ? 'h' : 'd'}`,
      badge1Text: heroConfig.en.badge1Text,
      badge2: "100%",
      badge2Text: heroConfig.en.badge2Text,
      badge3: `${metrics.guaranteeDays} Days`,
      badge3Text: heroConfig.en.badge3Text,
    },

    // Content Section
    content: {
      title1: "WHAT'S INCLUDED IN YOUR",
      title2: product.name.toUpperCase(),
      title3: "?",
      subtitle: "The complete page with everything you need to sell",
      features: [
        `${packageItems.item1.name} - Value: ${packageItems.item1.value}`,
        `${packageItems.item2.name} - Value: ${packageItems.item2.value}`,
        `${packageItems.item3.name} - Value: ${packageItems.item3.value}`,
        `${packageItems.item4.name} - Value: ${packageItems.item4.value}`,
        `${metrics.supportDays} Days ${packageItems.item5.name} - Value: ${packageItems.item5.value}`,
      ],
      additionalFeatures: [
        "Proven conversion structure",
        "Adaptive and professional design",
        "Instant loading technology",
        "Integrated contact form",
        "Compatible with all devices",
        "SEO optimized",
        "Social media integration",
        "1 week post-delivery adjustments",
      ],
      packageValue: "Total Package Value:",
      specialPrice: "Special Price Today:",
      paymentNote: "One-time payment • No hidden fees • No monthly charges",
      ctaButton: `GET MY ${product.name.toUpperCase()} FOR ONLY ${pricing.currentPrice}`,
      securePayment: "💳 100% secure payment through Hotmart",
      guarantee: `${metrics.guaranteeDays}-day guarantee or your money back`,
    },

    // CTA Section
    cta: {
      urgencyBadge: "Limited Time Offer",
      headline1: "YOUR INSTANT ACCESS TO",
      headline2: "ALL OF THIS:",
      items: [
        { text: packageItems.item1.name, value: packageItems.item1.value },
        { text: packageItems.item2.name, value: packageItems.item2.value },
        { text: packageItems.item3.name, value: packageItems.item3.value },
        { text: packageItems.item4.name, value: packageItems.item4.value },
        { text: `${metrics.supportDays} Days ${packageItems.item5.name}`, value: packageItems.item5.value },
      ],
      normalValue: "Regular Value:",
      specialPrice: "Special Price Today:",
      ctaButton: `GET MY ${product.name.toUpperCase()} FOR ONLY ${pricing.currentPrice}`,
      paymentNote: `💳 100% secure payment • ${metrics.guaranteeDays}-day guarantee`,
      trust1: "Secure Payment with Hotmart",
      trust2: `Delivery in ${metrics.deliveryTime} ${metrics.deliveryUnit === 'horas' ? 'hours' : 'days'}`,
      limitedSpots: `Only ${metrics.limitedSpots} spots available this month`,
      priceIncrease: `After the limit, price increases to ${pricing.priceAfterLimit}`,
      spotsOccupied: `${metrics.spotsOccupied} of ${metrics.limitedSpots} spots taken`,
      guarantee: `${metrics.guaranteeDays}-Day Satisfaction Guarantee or Your Money Back`,
    },

    // Checkout Section
    checkout: {
      title: "Complete Your Order",
      subtitle: `Your ${product.name.toLowerCase()} is just one step away. Complete your payment information securely.`,
      trust1: "100% Secure Payment",
      trust2: `Delivery in ${metrics.deliveryTime} ${metrics.deliveryUnit === 'horas' ? 'hours' : 'days'}`,
      trust3: "Multiple Payment Methods",
      guaranteeTitle: "Satisfaction Guarantee",
      guaranteeText: "If you're not 100% satisfied, we'll refund your money",
      paymentMethod: "Payment Method:",
      embeddedCheckout: "💳 Pay Here (Card/PayPal)",
      hotmartCheckout: "🏦 Pay on Hotmart",
      switchTo: "Prefer to pay on",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "here",
    },

    // Thank You Page
    thankYou: {
      title: "Purchase Successful!",
      subtitle: `Thank you for trusting ${brandName}`,
      message: `Your ${product.name.toLowerCase()} is on its way`,
      whatNext: "What's Next?",
      step1Title: "1. Complete the Start Form (IMPORTANT)",
      step1Text: "We need your basic business info to configure the Smart Checkout and design. Click the button below to send us your data.",
      step2Title: "2. Technical Setup (24 Hours)",
      step2Text: "Our team will connect your domain to the global CDN network and configure payment gateways for USA and Latam.",
      step3Title: `3. Final Delivery (Maximum ${metrics.deliveryTime} ${metrics.deliveryUnit === 'horas' ? 'hours' : 'days'})`,
      step3Text: "We will send your final link for review. Your business will be selling globally in record time.",
      whatYouGet: "Your Activated Package Includes:",
      items: [
        packageItems.item1.name,
        packageItems.item2.name,
        packageItems.item3.name,
        packageItems.item4.name,
        `${metrics.supportDays} Days ${packageItems.item5.name}`,
      ],
      questionsTitle: "Have Questions?",
      questionsText: "We're here to help",
      contactButton: "Go to Start Form",
      formNote: `*Essential for ${metrics.deliveryTime}${metrics.deliveryUnit === 'horas' ? 'h' : 'd'} delivery`,
      socialProof: `🎉 You joined the ${product.clientType} selling without borders`,
    },

    // Benefits Section
    benefits: {
      title: benefitsConfig.en.title.split(' FOR ')[0],
      titleBreak: "FOR YOUR BUSINESS",
      subtitle: benefitsConfig.en.subtitle,
      items: [
        {
          title: benefitsConfig.en.benefit1.title,
          description: benefitsConfig.en.benefit1.description,
          highlight: `${metrics.deliveryTime} ${metrics.deliveryUnit === 'horas' ? 'hours' : 'days'} ${benefitsConfig.en.benefit1.highlight}`,
        },
        {
          title: benefitsConfig.en.benefit2.title,
          description: benefitsConfig.en.benefit2.description,
          highlight: benefitsConfig.en.benefit2.highlight,
        },
        {
          title: benefitsConfig.en.benefit3.title,
          description: benefitsConfig.en.benefit3.description,
          highlight: benefitsConfig.en.benefit3.highlight,
        },
      ],
      quote: `Most businesses lose potential customers every day by not having an effective ${product.name.toLowerCase()}.`,
      cta: "Don't let that happen to you.",
    },

    // Testimonials Section
    testimonials: {
      title: "WHAT OUR CLIENTS SAY",
      subtitle: `Over ${metrics.totalDelivered} ${product.clientType} have already transformed their business`,
      items: testimonialsConfig.en,
      trust: `✨ Join dozens of ${product.clientType} who are already converting visitors into customers`,
    },

    // Bonuses Section
    bonuses: {
      badge: "EXCLUSIVE BONUSES",
      title: "PLUS, RECEIVE THESE BONUSES",
      titleHighlight: "COMPLETELY FREE",
      subtitle: `Everything you need for your new ${product.name.toLowerCase()} to convert from day one`,
      items: [
        {
          title: bonuses.bonus1.name,
          description: bonuses.bonus1.description,
          value: bonuses.bonus1.value,
        },
        {
          title: bonuses.bonus2.name,
          description: bonuses.bonus2.description,
          value: bonuses.bonus2.value,
        },
        {
          title: bonuses.bonus3.name,
          description: bonuses.bonus3.description,
          value: bonuses.bonus3.value,
        },
        {
          title: `${metrics.supportDays} Days ${bonuses.bonus4.name}`,
          description: bonuses.bonus4.description,
          value: bonuses.bonus4.value,
        },
      ],
      totalValue: "Total Bonus Value:",
      free: "100% FREE",
      investment: "Your investment:",
      only: `Only ${pricing.currentPrice}`,
      valueStatement: `You get ${pricing.bonusValue} in value for only ${pricing.currentPrice}`,
    },

    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
      subtitle: "We answer all your questions before you take the step",
      items: [
        {
          question: "What do I need to get started?",
          answer: "You just need to be clear about what you want to sell or promote. We take care of everything else: design, structure, copywriting and going live. If you already have a domain, perfect. If not, we help you get one.",
        },
        {
          question: "What if I don't know anything about technology?",
          answer: `No problem! That's exactly the point. We handle all the technical parts. You just need to tell us what you want to communicate and we make it happen. Plus, we include ${metrics.supportDays} days of support for any questions.`,
        },
        {
          question: "Can I make changes after delivery?",
          answer: "Yes. We include 1 week of post-delivery adjustments at no additional cost. After that period, you can hire minor adjustments or learn to edit it yourself with the guide we provide.",
        },
        {
          question: "Is it optimized for mobile?",
          answer: `Absolutely! More than 70% of visits come from mobile. Your ${product.name.toLowerCase()} will look perfect on phones, tablets and computers. We test on all devices before delivering.`,
        },
        {
          question: "Does it include a contact form?",
          answer: "Yes, it includes a fully functional contact form. Messages go straight to your email. We can also integrate it with tools like Mailchimp, ActiveCampaign or WhatsApp if you prefer.",
        },
        {
          question: "What if I don't like the design?",
          answer: `We work with you to ensure the design reflects your brand. We make an initial proposal based on your needs and then refine until you're 100% satisfied. If you're definitely not convinced, we have a ${metrics.guaranteeDays}-day guarantee.`,
        },
        {
          question: "How does the delivery process work?",
          answer: `1) You make your purchase. 2) We contact you to learn about your business. 3) In ${metrics.deliveryTime}-${parseInt(metrics.deliveryTime) + 24} ${metrics.deliveryUnit === 'horas' ? 'hours' : 'days'} we send you the first version. 4) We make adjustments based on your feedback. 5) We deliver the complete landing working on your domain.`,
        },
        {
          question: "Can I connect it with Hotmart/Stripe/PayPal?",
          answer: "Of course! We can integrate payment buttons from any platform: Hotmart, Stripe, PayPal, Mercado Pago, etc. You just need your payment links and we configure them.",
        },
        {
          question: "Does it include hosting?",
          answer: "The landing is ready to upload to any hosting. If you already have one, perfect. If not, we recommend free options like Vercel or Netlify, and we help you configure it (included in the setup bonus).",
        },
        {
          question: "Is there a money-back guarantee?",
          answer: `Yes. You have ${metrics.guaranteeDays} days to evaluate your ${product.name.toLowerCase()}. If for any reason you're not satisfied, we'll refund your money in full, no questions asked. We want you to be 100% happy with your investment.`,
        },
        {
          question: "How long do I have access to the bonuses?",
          answer: "The bonuses (guides, color palettes, support) are yours forever. You receive them by email immediately after your purchase and can use them whenever you want, with no time limit.",
        },
        {
          question: "Does the price include the domain?",
          answer: `The price of ${pricing.currentPrice} includes the design and development of the sales page. The domain is purchased separately (costs $10-15 per year). However, we help you with the entire purchase and configuration process as part of the setup bonus.`,
        },
      ],
      stillQuestions: "Have another question?",
      contact: "Contact us directly →",
    },
  },
};

// Hook para usar las traducciones
export const useTranslation = () => {
  const detectLanguage = (): Language => {
    // A. Revisar si hay un idioma forzado via ENV
    const forcedLang = import.meta.env.VITE_FORCE_LANG;
    if (forcedLang === 'es' || forcedLang === 'en') {
      return forcedLang;
    }

    // B. Detectar del navegador
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  const language = detectLanguage();
  const t = translations[language];

  return { t, language };
};
