import { Card, CardContent } from "@/components/ui/card";
import { FileText, Palette, Globe, Mail, Gift } from "lucide-react";
import { useTranslation } from "@/translations";

const BonusesSection = () => {
  const { t } = useTranslation();

  // Nota: Como cambiaste los bonos a "Smart Checkout" y "Infraestructura",
  // idealmente luego deberías importar iconos como 'CreditCard' y 'Zap' 
  // para reemplazar FileText y Palette. Por ahora dejo los que tenías para que no de error.
  const icons = [FileText, Palette, Globe, Mail];

  const totalValue = t.bonuses.items.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('$', ''));
  }, 0);

  return (
    <section className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Gift className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">{t.bonuses.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.bonuses.title}
          </h2>
          <h3 className="text-3xl font-bold text-primary mb-4">
            {t.bonuses.titleHighlight}
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.bonuses.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {t.bonuses.items.map((bonus, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Columna Icono */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    {/* Columna Texto - AQUÍ ESTÁ EL ARREGLO (min-w-0) */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h3 className="font-bold text-white text-lg leading-tight uppercase break-words">
                          {bonus.title}
                        </h3>
                        <span className="text-primary font-bold text-lg shrink-0 ml-2">
                          {bonus.value}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">{t.bonuses.totalValue}</p>
            <p className="text-5xl font-bold text-primary">${totalValue}</p>
            <p className="text-primary text-xl font-bold mt-2">{t.bonuses.free}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-white font-bold mb-2">
            {t.bonuses.investment} <span className="text-primary">{t.bonuses.only}</span>
          </p>
          <p className="text-gray-400">
            {t.bonuses.valueStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;