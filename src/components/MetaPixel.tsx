import { useEffect } from 'react';
import { integrationsConfig } from '@/config/integrations.config';
import { variablesConfig } from '@/config/variables.config';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Solo inicializar si está habilitado y hay pixelId
    if (!integrationsConfig.metaPixel.enabled || !integrationsConfig.metaPixel.pixelId) {
      console.log('Meta Pixel: Disabled or no pixel ID configured');
      return;
    }

    const pixelId = integrationsConfig.metaPixel.pixelId;

    // Inicializar Meta Pixel
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    // Inicializar pixel
    window.fbq('init', pixelId);
    
    // Track PageView
    window.fbq('track', 'PageView');

    console.log(`Meta Pixel initialized: ${pixelId}`);
  }, []);

  return null;
};

// Funciones helper para trackear eventos (usando variables genéricas)
export const trackEvent = (eventName: string, params?: object) => {
  if (window.fbq && integrationsConfig.metaPixel.enabled) {
    window.fbq('track', eventName, params);
    console.log(`Meta Pixel event: ${eventName}`, params);
  }
};

export const trackViewContent = (contentName?: string) => {
  const price = parseFloat(variablesConfig.pricing.currentPrice.replace('$', ''));
  const productName = contentName || variablesConfig.product.name;
  
  trackEvent('ViewContent', {
    content_name: productName,
    value: price,
    currency: variablesConfig.pricing.currency
  });
};

export const trackInitiateCheckout = () => {
  const price = parseFloat(variablesConfig.pricing.currentPrice.replace('$', ''));
  
  trackEvent('InitiateCheckout', {
    value: price,
    currency: variablesConfig.pricing.currency,
    content_name: variablesConfig.product.name
  });
};

export const trackPurchase = (customValue?: number) => {
  const price = customValue || parseFloat(variablesConfig.pricing.currentPrice.replace('$', ''));
  
  trackEvent('Purchase', {
    value: price,
    currency: variablesConfig.pricing.currency,
    content_name: variablesConfig.product.name
  });
};

export default MetaPixel;
