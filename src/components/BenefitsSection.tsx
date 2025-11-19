import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "LANZA EN TIEMPO RÉCORD",
      description: "Olvídate de semanas de desarrollo. Tu landing page estará lista en solo 48 horas, optimizada y funcionando.",
      highlight: "48 horas de entrega"
    },
    {
      icon: TrendingUp,
      title: "CONVIERTE VISITANTES EN CLIENTES",
      description: "Diseño probado para maximizar conversiones. Cada elemento está pensado para guiar a tus visitantes hacia la acción.",
      highlight: "Optimizada para vender"
    },
    {
      icon: Shield,
      title: "PROYECTO MÁXIMA CONFIANZA",
      description: "Con diseño profesional y estructura clara, transmites credibilidad desde el primer segundo. Tus clientes sentirán que están en buenas manos.",
      highlight: "Diseño profesional"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 leading-tight">
            LA TRANSFORMACIÓN<br className="sm:hidden" /> PARA TU NEGOCIO
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            No es solo una landing page, es tu nuevo canal de ventas 24/7
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800 border-2 border-gray-700 hover:border-primary transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wide">
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              "La mayoría de los negocios pierden clientes potenciales cada día por no tener una landing page efectiva."
            </p>
            <p className="text-lg text-primary font-bold">
              No dejes que eso te pase a ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;