import { useState, useEffect } from 'react';
import HotmartCheckout from './HotmartCheckout';
import { useTranslation } from '@/translations';
import { trackInitiateCheckout } from './MetaPixel';

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

  const hotmartUrl = 'https://pay.hotmart.com/M102318829D?off=43vz0ocq';

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
          <div className="embedded-checkout-wrapper animate-fade-in">
            <HotmartCheckout />
          </div>
        ) : (
          /* TARJETA DE REDIRECCIÓN PARA LATAM */
          <div className="hotmart-redirect-wrapper animate-fade-in">
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

      <style jsx>{`
        .checkout-toggle-container { width: 100%; }
        .payment-method-selector { margin-bottom: 32px; }
        .selector-title { font-size: 1.25rem; font-weight: 700; color: #1a1a1a; margin-bottom: 20px; text-align: center; }
        .radio-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 600px; margin: 0 auto; }
        .radio-option { position: relative; padding: 20px; border: 3px solid #e9ecef; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; background: white; }
        .radio-option:hover { border-color: #D4AF37; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2); }
        .radio-option.selected { border-color: #D4AF37; background: linear-gradient(135deg, #fff9e6 0%, #ffffff 100%); box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3); }
        .radio-option input[type="radio"] { position: absolute; opacity: 0; pointer-events: none; }
        .radio-content { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .radio-icon { font-size: 2rem; }
        .radio-text { font-size: 0.95rem; font-weight: 600; color: #495057; text-align: center; line-height: 1.3; }
        .radio-option.selected .radio-text { color: #1a1a1a; }
        .checkout-display { width: 100%; }
        
        /* ESTILOS NUEVOS PARA LA TARJETA */
        .redirect-card {
          text-align: center; padding: 40px; background: #f8f9fa; border-radius: 16px; border: 1px solid #e9ecef; max-width: 500px; margin: 0 auto;
        }
        .secure-icon { font-size: 3rem; margin-bottom: 16px; }
        .redirect-card h3 { margin-bottom: 12px; color: #1a1a1a; font-size: 1.2rem; font-weight: 700; }
        .redirect-card p { color: #6c757d; margin-bottom: 24px; font-size: 0.95rem; }
        .hotmart-button {
          display: inline-block; background-color: #ff5a00; color: white; font-weight: bold; padding: 14px 28px;
          border-radius: 8px; text-decoration: none; font-size: 1rem; transition: transform 0.2s;
          box-shadow: 0 4px 15px rgba(255, 90, 0, 0.3); width: 100%;
        }
        .hotmart-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 90, 0, 0.4); }
        .security-badges { margin-top: 24px; display: flex; justify-content: center; gap: 16px; font-size: 0.8rem; color: #495057; opacity: 0.8; }
        .animate-fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .radio-buttons { grid-template-columns: 1fr; gap: 12px; }
          .radio-option { padding: 16px; }
          .radio-content { flex-direction: row; justify-content: center; }
          .radio-icon { font-size: 1.5rem; }
          .radio-text { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default CheckoutToggle;