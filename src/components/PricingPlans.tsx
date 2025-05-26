import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface PlanProps {
  title: string;
  originalPrice: string;
  currentPrice: string;
  discount: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

const Plan: React.FC<PlanProps> = ({ 
  title, 
  originalPrice, 
  currentPrice, 
  discount, 
  period,
  features,
  recommended = false 
}) => {
  return (
    <div className={`
      p-6 rounded-lg border-2 transition-transform duration-300 hover:scale-105
      ${recommended 
        ? 'border-[#E50914] bg-[#E50914]/10 shadow-lg' 
        : 'border-gray-800 bg-[#141414]'
      }
    `}>
      {recommended && (
        <div className="bg-[#E50914] text-white font-bold py-1 px-4 rounded-full text-sm inline-block mb-4">
          MAIS POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="mb-4">
        <span className="line-through text-gray-400">{originalPrice}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{currentPrice}</span>
          <span className="text-gray-300">{period}</span>
        </div>
        <span className="inline-block mt-1 bg-[#E50914]/20 text-[#E50914] font-bold px-2 py-1 rounded-sm text-sm">
          {discount} OFF
        </span>
      </div>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-[#E50914] mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        href="#" 
        className={recommended ? 'bg-[#E50914] hover:bg-[#E50914]/90' : ''}
      >
        QUERO ESTE PLANO
      </Button>
    </div>
  );
};

export const PricingPlans: React.FC = () => {
  // Common features for both plans
  const commonFeatures = [
    "Acesso a todos os canais e plataformas",
    "Suporte técnico 24/7",
    "Até 3 telas simultâneas",
    "Qualidade Full HD/4K",
    "App para todos os dispositivos"
  ];

  return (
    <section id="secao-planos" className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          ⚡ <span className="text-[#E50914]">PLANOS DISPONÍVEIS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Plan 
            title="Plano Mensal"
            originalPrice="R$ 37,80"
            currentPrice="R$ 29,90"
            discount="20%"
            period="/mês"
            features={commonFeatures}
          />
          
          <Plan 
            title="Plano Anual"
            originalPrice="R$ 299,80"
            currentPrice="R$ 149,90"
            discount="50%"
            period="/ano"
            features={[
              ...commonFeatures,
              "Economize R$150 por ano",
              "Acesso prioritário a novos lançamentos"
            ]}
            recommended={true}
          />
        </div>
        
        <div className="text-center mt-12">
          <Button href="#" className="bg-[#E50914] hover:bg-[#E50914]/90">
            ⏰ QUERO MEU DESCONTO!
          </Button>
          <p className="mt-4 text-gray-400">
            Oferta por tempo limitado. Preços sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};