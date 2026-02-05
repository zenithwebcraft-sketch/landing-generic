import { useEffect, useRef } from 'react';
import { integrationsConfig } from '@/config/integrations.config';

/**
 * Componente de Checkout Embebido de Hotmart
 * Integra el checkout directamente en la landing page
 */
const HotmartCheckout = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<any>(null);

  useEffect(() => {
    // Cargar el script de Hotmart si no está presente
    const loadHotmartScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Verificar si el script ya está cargado
        if (window.checkoutElements) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Hotmart script'));
        document.head.appendChild(script);
      });
    };

    // Inicializar el checkout
    const initializeCheckout = async () => {
      try {
        await loadHotmartScript();
        
        // Esperar un momento para asegurar que checkoutElements está disponible
        await new Promise<void>(resolve => setTimeout(resolve, 100));

        if (window.checkoutElements && checkoutRef.current) {
          // Inicializar el checkout embebido usando productCode de config
          elementsRef.current = window.checkoutElements.init('inlineCheckout', {
            offer: integrationsConfig.hotmart.productCode
          });

          // Montar el checkout en el div
          elementsRef.current.mount('#hotmart-inline-checkout');
        }
      } catch (error) {
        console.error('Error initializing Hotmart checkout:', error);
      }
    };

    initializeCheckout();

    // Cleanup al desmontar
    return () => {
      if (elementsRef.current && elementsRef.current.unmount) {
        try {
          elementsRef.current.unmount();
        } catch (error) {
          console.error('Error unmounting checkout:', error);
        }
      }
    };
  }, []);

  return (
    <div className="hotmart-checkout-container">
      <div 
        id="hotmart-inline-checkout" 
        ref={checkoutRef}
        className="hotmart-checkout-wrapper"
      />
    </div>
  );
};

export default HotmartCheckout;
