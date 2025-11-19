import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentSection = () => {
  const includedFeatures = [
    "Landing Page Profesional de Alta Conversión - Valor: $240",
    "Guía de Copywriting en PDF - Valor: $97",
    "Paleta de Colores Personalizada - Valor: $67",
    "Instalación en tu Dominio - Valor: $97",
    "30 Días de Soporte por Email - Valor: $36"
  ];

  const features = [
    "Estructura de conversión probada",
    "Diseño adaptable y profesional",
    "Tecnología de carga instantánea",
    "Formulario de contacto integrado",
    "Compatible con todos los dispositivos",
    "Optimizada para SEO",
    "Integración con redes sociales",
    "1 semana de ajustes post-entrega"
  ];

  const handleCTAClick = () => {
    window.open('https://go.hotmart.com/M102318829D', '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            ¿QUÉ INCLUYE TU<br className="sm:hidden" /> LANDING PAGE
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            DE ALTA CONVERSIÓN?
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            La página completa con todo lo necesario para vender
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary/30">
            <CardContent className="p-8 md:p-12">
              {/* What's Included List */}
              <div className="space-y-4 mb-8">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-gray-900" />
                      </div>
                    </div>
                    <p className="text-gray-200 text-lg flex-1">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-8"></div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Box */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <p className="text-gray-300 text-lg mb-2">Valor Total del Paquete Completo:</p>
              <p className="text-gray-400 text-3xl line-through mb-2">$537</p>
              
              <div className="my-6">
                <p className="text-white text-2xl font-bold mb-2">Precio Especial Hoy:</p>
                <p className="text-6xl font-bold text-primary mb-2">$49.99</p>
                <p className="text-sm text-gray-400">Pago único • Sin cargos ocultos • Sin mensualidades</p>
              </div>

              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-gray-900 font-bold text-base sm:text-lg py-6 sm:py-7 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                <span className="text-center leading-tight">
                  OBTENER MI LANDING PAGE<br className="sm:hidden" /> POR SOLO $49.99
                </span>
              </Button>

              <p className="text-xs text-gray-500 mt-4">
                💳 Pago 100% seguro a través de Hotmart
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold">Garantía de 7 días o te devolvemos tu dinero</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;