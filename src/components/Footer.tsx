import { brandConfig } from '@/config/brand.config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{brandConfig.name}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {brandConfig.tagline}
            </p>
            {brandConfig.contact.location && (
              <p className="text-gray-500 text-sm">
                {brandConfig.contact.location}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {brandConfig.urls.website && (
                <a 
                  href={brandConfig.urls.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Sitio Principal
                </a>
              )}
              {brandConfig.urls.website && (
                <>
                  <a 
                    href={`${brandConfig.urls.website}#services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    Servicios
                  </a>
                  <a 
                    href={`${brandConfig.urls.website}#portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    Portafolio
                  </a>
                  <a 
                    href={`${brandConfig.urls.website}#contact`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Información</h4>
            <div className="space-y-2">
              {brandConfig.contact.email && (
                <p className="text-gray-400 text-sm">
                  Email: <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-primary transition-colors">{brandConfig.contact.email}</a>
                </p>
              )}
              {brandConfig.contact.phone && (
                <p className="text-gray-400 text-sm">
                  Tel: {brandConfig.contact.phone}
                </p>
              )}
              <p className="text-gray-400 text-sm">
                💳 Pagos procesados por Hotmart
              </p>
              <p className="text-gray-400 text-sm">
                🔒 Compra 100% segura
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {brandConfig.name}. Todos los derechos reservados.
          </p>
          {brandConfig.contact.location && (
            <p className="text-gray-600 text-xs mt-2">
              Diseñado con ♥ en {brandConfig.contact.location}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
