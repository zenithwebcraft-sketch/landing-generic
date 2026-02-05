import CheckoutToggle from './CheckoutToggle';
import { useTranslation } from '@/translations';
import './CheckoutSection.css';

type CheckoutMode = 'embedded' | 'hotmart';

interface CheckoutSectionProps {
  defaultMode?: 'embedded' | 'hotmart';
}

const CheckoutSection = ({ defaultMode = 'embedded' }: CheckoutSectionProps) => {
  const { t } = useTranslation();

  return (
    <section 
      id="checkout-section" 
      className="checkout-section"
    >
      <div className="checkout-container">
        <div className="checkout-header">
          <h2 className="checkout-title">
            {t.checkout.title}
          </h2>
          <p className="checkout-subtitle">
            {t.checkout.subtitle}
          </p>
          
          <div className="trust-badges">
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{t.checkout.trust1}</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.checkout.trust2}</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>{t.checkout.trust3}</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <CheckoutToggle defaultMode={defaultMode} />
        </div>

        <div className="checkout-footer">
          <div className="guarantee-badge">
            <svg className="guarantee-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h4>{t.checkout.guaranteeTitle}</h4>
              <p>{t.checkout.guaranteeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
