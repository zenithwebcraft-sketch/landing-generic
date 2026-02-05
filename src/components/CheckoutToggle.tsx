import { useState, useEffect } from 'react';
import HotmartCheckout from './HotmartCheckout';
import { useTranslation } from '@/translations';
import { trackInitiateCheckout } from './MetaPixel';
import { integrationsConfig } from '@/config/integrations.config';
import './CheckoutToggle.css';

export type CheckoutMode = 'embedded' | 'hotmart';

interface CheckoutToggleProps {
  defaultMode: CheckoutMode;
}

const CheckoutToggle = ({ defaultMode }: CheckoutToggleProps) => {
  // Inicializamos el estado con el modo que venga desde la configuración
  const [selectedMode, setSelectedMode] = useState<CheckoutMode>(defaultMode);
  const { t } = useTranslation();

  // Si la configuración cambia (raro, pero buena práctica), actualizamos
  useEffect(() => {
    setSelectedMode(defaultMode);
  }, [defaultMode]);

  const handleModeChange = (mode: CheckoutMode) => {
    setSelectedMode(mode);
    trackInitiateCheckout();
  };

  // Usar URL de configuración
  const hotmartUrl = integrationsConfig.hotmart.checkoutUrl;

  return (
    <div className="checkout-toggle-container">
      <div className="payment-method-selector">
        <h3 className="selector-title">{t.checkout.paymentMethod}</h3>
        
        <div className="radio-buttons">
          <label 
            className={`radio-option ${selectedMode === 'embedded' ? 'selected' : ''}`}
            onClick={() => handleModeChange('embedded')}
          >
            <input
              type="radio"
              name="checkout-mode"
              value="embedded"
              checked={selectedMode === 'embedded'}
              onChange={() => handleModeChange('embedded')}
            />
            <div className="radio-content">
              <span className="radio-icon">💳</span>
              <span className="radio-text">{t.checkout.embeddedCheckout}</span>
            </div>
          </label>

          <label 
            className={`radio-option ${selectedMode === 'hotmart' ? 'selected' : ''}`}
            onClick={() => handleModeChange('hotmart')}
          >
            <input
              type="radio"
              name="checkout-mode"
              value="hotmart"
              checked={selectedMode === 'hotmart'}
              onChange={() => handleModeChange('hotmart')}
            />
            <div className="radio-content">
              <span className="radio-icon">🔥</span>
              <span className="radio-text">{t.checkout.hotmartCheckout}</span>
            </div>
          </label>
        </div>
      </div>

      <div className="checkout-display">
        {selectedMode === 'embedded' ? (
          <div className="embedded-checkout-wrapper">
            <HotmartCheckout />
          </div>
        ) : (
          <div className="hotmart-redirect-wrapper">
            <div className="redirect-card">
              <div className="secure-icon">🔒</div>
              <h3>Finalizar compra de forma segura</h3>
              <p>Serás redirigido a Hotmart para completar tu pago con métodos locales (Efectivo, PSE, Cuotas, etc).</p>
              
              <a 
                href={hotmartUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hotmart-button"
              >
                Ir a Pagar Ahora ➔
              </a>
              
              <div className="security-badges">
                <span>🛡️ 100% Seguro</span>
                <span>⚡ Entrega Inmediata</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutToggle;
