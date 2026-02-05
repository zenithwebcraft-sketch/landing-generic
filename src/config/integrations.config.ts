// src/config/integrations.config.ts
// Configuración de integraciones y servicios externos

export const integrationsConfig = {
  // Hotmart
  hotmart: {
    // URL del checkout (botón directo a Hotmart)
    checkoutUrl: 'https://pay.hotmart.com/XXXXXXXXXX?checkoutMode=10',
    
    // Código de producto para checkout embebido
    productCode: 'CODIGO_PRODUCTO_AQUI',
    
    // Modo por defecto: 'embedded' (en la misma página) o 'hotmart' (redirige a Hotmart)
    defaultMode: 'hotmart' as 'embedded' | 'hotmart',
  },

  // Meta Pixel (Facebook Pixel)
  metaPixel: {
    enabled: false, // Cambiar a true para activar
    pixelId: '', // ID del pixel de Meta/Facebook
  },

  // Google Analytics
  googleAnalytics: {
    enabled: false,
    measurementId: '', // ID de medición GA4 (ejemplo: G-XXXXXXXXXX)
  },

  // Google Tag Manager (opcional)
  googleTagManager: {
    enabled: false,
    containerId: '', // ID del contenedor GTM (ejemplo: GTM-XXXXXXX)
  },

  // Email marketing (opcional)
  emailMarketing: {
    provider: '', // 'mailchimp', 'activecampaign', 'convertkit', etc.
    apiKey: '',
    listId: '',
  },
};

export default integrationsConfig;
