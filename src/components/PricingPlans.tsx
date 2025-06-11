import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface PlanProps {
  title: string;
  originalPrice: string;
  currentPrice: string;
  discount: string;
  features: string[];
  exclusiveShows?: string[];
  recommended?: boolean;
  bgColor?: string;
  buttonLink: string;
}

const Plan: React.FC<PlanProps> = ({ 
  title, 
  originalPrice, 
  currentPrice, 
  discount, 
  features,
  exclusiveShows,
  recommended = false,
  bgColor = '#1F1F1F',
  buttonLink
}) => {
  return (
    <div className={`
      p-8 rounded-2xl transition-transform duration-300 hover:scale-105 border-2
      ${recommended ? 'relative border-[#e50914]' : 'border-gray-700'}
    `}
    style={{ backgroundColor: bgColor }}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e50914] text-white font-bold py-1 px-6 rounded-full text-sm">
          Mais Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-6 text-[#e50914]">{title}</h3>
      
      <div className="mb-6">
        <span className="line-through text-gray-400 text-lg">{originalPrice}</span>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold text-white">{currentPrice}</span>
          <span className="text-gray-300">/mês</span>
        </div>
        <span className="inline-block mt-3 bg-[#e50914]/20 text-[#e50914] font-bold px-4 py-1 rounded-full text-sm">
          {discount} OFF
        </span>
      </div>
      
      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-[#e50914] mr-3 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {exclusiveShows && (
        <>
          <p className="text-gray-300 mb-3 font-medium">Séries exclusivas inclusas:</p>
          <ul className="mb-8 space-y-2">
            {exclusiveShows.map((show, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">🎬</span>
                <span className="text-gray-300">{show}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      
      <Button 
        href={buttonLink}
        variant="custom"
        className="w-full text-lg font-bold py-4 bg-[#00FF94] hover:bg-[#00FF94]/90 text-black"
      >
        ASSINAR AGORA
      </Button>

      <p className="text-sm text-gray-400 mt-6 text-center">
        Receba +15% de desconto pagando via cartão de crédito.
      </p>
    </div>
  );
};

export const PricingPlans: React.FC = () => {
  const premiumShows = [
    "A vida secreta do meu marido bilionário",
    "A companheira amaldiçoada do alfa",
    "Meu mundo termina com você",
    "Casamento acidental com meu CEO pobre",
    "Betty aparelhuda - Brace Face Betty",
    "Saia da frente! Eu sou o chefe final!",
    "Não despertem o dragão dormindo",
    "Como conquistar uma raposa prateada",
    "Você pertence a mim",
    "The Mafia Boss"
  ];

  return (
    <section id="secao-planos" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="text-[#e50914]">plano ideal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Assista aos melhores doramas com qualidade e conforto. Cancele quando quiser.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <Plan 
            title="PLANO BÁSICO"
            originalPrice="R$29,90"
            currentPrice="R$10,90"
            discount="63%"
            features={[
              "Apenas 1 usuário",
              "+500 Séries completas",
              "30 dias de acesso",
              "Qualidade Full HD/4K",
              "Suporte técnico 24/7"
            ]}
            bgColor="#1F1F1F"
            buttonLink="https://pay.kirvano.com/da3e68b1-0a47-4298-ac55-5316493714af"
          />

          <Plan 
            title="PLANO PREMIUM"
            originalPrice="R$99,90"
            currentPrice="R$29,90"
            discount="70%"
            features={[
              "Acesso a +1500 séries atualizadas",
              "Telas Ilimitadas",
              "Qualidade Full HD/4K",
              "Suporte técnico 24/7"
            ]}
            exclusiveShows={premiumShows}
            recommended={true}
            bgColor="#1F1F1F"
            buttonLink="/oferta"
          />
        </div>
      </div>
    </section>
  );
};