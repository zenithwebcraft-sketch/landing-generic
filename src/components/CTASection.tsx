import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";

const CTASection = () => {
  const handleCTAClick = () => {
    window.open('https://go.hotmart.com/M102318829D', '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Urgency Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border-2 border-primary/30 rounded-full">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-bold uppercase tracking-wide">Oferta Por Tiempo Limitado</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight px-4">
            TU ACCESO INSTANTÁNEO A
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-6 px-4">
            TODO ESTO:
          </h3>
        </div>

        {/* What's Included Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gray-800 border-2 border-primary/30 rounded-2xl p-8">
            <div className="space-y-4">
              {[
                { text: "Landing Page Profesional de Alta Conversión", value: "$240" },
                { text: "Guía de Copywriting en PDF", value: "$97" },
                { text: "Paleta de Colores Personalizada", value: "$67" },
                { text: "Instalación en tu Dominio", value: "$97" },
                { text: "30 Días de Soporte por Email", value: "$36" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-200">{item.text}</span>
                  <span className="text-primary font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-gray-700 mt-6 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white text-xl font-bold">Valor Normal:</span>
                <span className="text-gray-400 text-2xl line-through">$537.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-2xl font-bold">Precio Especial Hoy:</span>
                <span className="text-primary text-4xl font-bold">$49.99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-8">
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-gray-900 font-bold text-base sm:text-xl px-8 sm:px-12 py-7 sm:py-8 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 group w-full max-w-2xl mx-auto"
          >
            <span className="text-center leading-tight">
              OBTENER MI LANDING PAGE<br className="sm:hidden" /> POR SOLO $49.99
            </span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            💳 Pago 100% seguro • Garantía de 7 días
          </p>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-gray-300">Pago Seguro con Hotmart</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-gray-300">Entrega en 48 horas</span>
          </div>
        </div>

        {/* Limited Availability */}
        <div className="text-center">
          <div className="inline-block bg-gray-800 border border-gray-700 rounded-xl px-8 py-6">
            <p className="text-white text-lg mb-2">
              ⚡ Solo <span className="text-primary font-bold">10 spots disponibles</span> este mes
            </p>
            <p className="text-gray-400 text-sm">
              Después del límite, el precio sube a $97
            </p>
            
            {/* Progress Bar */}
            <div className="mt-4 w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">7 de 10 espacios ocupados</p>
          </div>
        </div>

        {/* Final Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold">
              Garantía de Satisfacción de 7 Días o tu Dinero de Vuelta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;