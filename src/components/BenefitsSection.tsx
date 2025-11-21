import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "@/translations";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const icons = [Clock, TrendingUp, Shield];

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 leading-tight">
            {t.benefits.title}<br />{t.benefits.titleBreak}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="bg-gray-800 border-2 border-gray-700 hover:border-primary transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wide">
                      {benefit.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              "{t.benefits.quote}"
            </p>
            <p className="text-lg text-primary font-bold">
              {t.benefits.cta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;