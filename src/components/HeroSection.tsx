import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open('https://go.hotmart.com/M102318829D', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">ZenithWebCraft</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">TU LANDING PAGE</span>
          <br />
          <span className="text-white">PROFESIONAL</span>
          <br />
          <span className="text-primary">LISTA EN 48 HORAS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Convierte visitantes en clientes con una landing page diseñada para vender.
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Sin complicaciones técnicas. Sin código. Sin estrés.
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="inline-flex items-baseline gap-3">
            <span className="text-gray-400 text-2xl line-through">$240</span>
            <span className="text-5xl md:text-6xl font-bold text-primary">$49.99</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Pago único • Sin mensualidades</p>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-gray-900 font-bold text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 group w-full max-w-md mx-auto"
        >
          <span className="text-center leading-tight">
            OBTENER MI LANDING PAGE<br className="sm:hidden" /> POR SOLO $49.99
          </span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </Button>

        {/* Social Proof */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-gray-300 text-sm ml-2">
            Más de 50 landing pages entregadas
          </span>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">48h</span>
            <span className="text-sm text-gray-300">Entrega Garantizada</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">100%</span>
            <span className="text-sm text-gray-300">Responsive Design</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">7 Días</span>
            <span className="text-sm text-gray-300">Garantía de Devolución</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;