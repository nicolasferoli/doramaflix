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
      p-6 rounded-lg transition-transform duration-300 hover:scale-105
      ${recommended ? 'relative' : ''}
    `}
    style={{ backgroundColor: bgColor }}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E50914] text-white font-bold py-1 px-4 rounded-full text-sm">
          Mais vendido
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4 text-[#E50914]">{title}</h3>
      
      <div className="mb-4">
        <span className="line-through text-gray-400">{originalPrice}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{currentPrice}</span>
          <span className="text-gray-300">/mês</span>
        </div>
        <span className="inline-block mt-1 bg-[#E50914]/20 text-[#E50914] font-bold px-2 py-1 rounded-sm text-sm">
          {discount} OFF
        </span>
      </div>
      
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {exclusiveShows && (
        <>
          <p className="text-gray-300 mb-2">Séries exclusiva inclusas neste plano:</p>
          <ul className="mb-6 space-y-2">
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
        className="bg-[#E50914] hover:bg-[#E50914]/90 w-full"
      >
        QUERO ESTE PLANO
      </Button>

      <p className="text-sm text-gray-400 mt-4 text-center">
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

  const prataShows = [
    "A vida secreta do meu marido bilionário",
    "A companheira amaldiçoada do alfa",
    "Meu mundo termina com você",
    "Casamento acidental com meu CEO pobre",
    "Betty aparelhuda - Brace Face Betty"
  ];

  return (
    <section id="secao-planos" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          ⚡ <span className="text-[#E50914]">PLANOS DISPONÍVEIS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <Plan 
            title="PLANO BASIC"
            originalPrice="R$29,90"
            currentPrice="R$10,90"
            discount="50%"
            features={[
              "Acesso a +400 séries",
              "Até 3 telas simultâneas",
              "Qualidade Full HD/4K",
              "Suporte técnico 24/7"
            ]}
            bgColor="#1F1F1F"
            buttonLink="https://pay.kirvano.com/da3e68b1-0a47-4298-ac55-5316493714af"
          />
          
          <Plan 
            title="PLANO PRATA"
            originalPrice="R$49,90"
            currentPrice="R$15,90"
            discount="60%"
            features={[
              "Acesso a +700 séries atualizadas",
              "Até 3 telas simultâneas",
              "Qualidade Full HD/4K",
              "Suporte técnico 24/7"
            ]}
            exclusiveShows={prataShows}
            bgColor="#1F1F1F"
            buttonLink="https://pay.kirvano.com/3a666fd6-ea38-4c63-8c5d-874060b686ed"
          />

          <Plan 
            title="PLANO PREMIUM"
            originalPrice="R$97,90"
            currentPrice="R$19,90"
            discount="60%"
            features={[
              "Acesso a +700 séries atualizadas",
              "Até 3 telas simultâneas",
              "Qualidade Full HD/4K",
              "Suporte técnico 24/7",
              "+1500 séries atualizadas"
            ]}
            exclusiveShows={premiumShows}
            recommended={true}
            bgColor="#1F1F1F"
            buttonLink="https://pay.kirvano.com/0710d73c-0894-4a4b-abac-72026d45d07e"
          />
        </div>
      </div>
    </section>
  );
};