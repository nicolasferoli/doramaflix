import React from 'react';
import { Button } from './Button';
import { PlayCircle, Shield, Trophy, Lock } from 'lucide-react';

export const PricingComparison: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          💰 <span className="text-[#E50914]">ECONOMIZE ATÉ 90%</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <div className="bg-[#1F1F1F] p-6 rounded-lg w-full md:w-1/2 max-w-md">
            <h3 className="text-xl mb-4">Outras plataformas:</h3>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex justify-between">
                <span>Netflix</span>
                <span>R$ 55,90/mês</span>
              </div>
              <div className="flex justify-between">
                <span>Disney+</span>
                <span>R$ 33,90/mês</span>
              </div>
              <div className="flex justify-between">
                <span>Amazon Prime</span>
                <span>R$ 14,90/mês</span>
              </div>
              <div className="flex justify-between">
                <span>HBO Max</span>
                <span>R$ 34,90/mês</span>
              </div>
              <div className="flex justify-between">
                <span>Globoplay</span>
                <span>R$ 49,90/mês</span>
              </div>
              <div className="flex justify-between">
                <span>Outros serviços</span>
                <span>R$ 347,50/mês</span>
              </div>
              <div className="h-px bg-gray-600 my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="line-through text-gray-400">R$ 537,00/mês</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-[#E50914] text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center">
              VS
            </div>
          </div>
          
          <div className="bg-[#E50914]/10 border-2 border-[#E50914] p-6 rounded-lg w-full md:w-1/2 max-w-md relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="absolute top-0 right-0 bg-[#E50914] text-white px-4 py-1 rounded-bl-lg font-bold">
              MELHOR OPÇÃO
            </div>
            <h3 className="text-xl mb-6 mt-4">DoramaFlix:</h3>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">APENAS</span>
              <div className="text-right">
                <span className="text-4xl font-extrabold text-[#E50914]">R$ 29,90</span>
                <span className="text-xl">/mês</span>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-300">Todos os serviços em um só lugar!</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <Button href="#secao-planos" className="group flex items-center justify-center gap-2 text-lg px-8 py-4 max-w-[600px] mx-auto">
            <PlayCircle className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-bold">QUERO ASSINAR AGORA!</span>
          </Button>
          
          {/* Ícones de garantia */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-8 mt-8 mb-6">
            <div className="flex flex-col items-center text-white w-[100px] sm:w-[142px]">
              <Shield className="w-6 h-6 sm:w-10 sm:h-10 text-[#E50914]" />
              <span className="text-[10px] sm:text-sm mt-1 sm:mt-2 text-center">Compra Segura</span>
            </div>
            <div className="flex flex-col items-center text-white w-[100px] sm:w-[142px]">
              <Trophy className="w-6 h-6 sm:w-10 sm:h-10 text-[#E50914]" />
              <span className="text-[10px] sm:text-sm mt-1 sm:mt-2 text-center">Satisfação Garantida</span>
            </div>
            <div className="flex flex-col items-center text-white w-[100px] sm:w-[142px]">
              <Lock className="w-6 h-6 sm:w-10 sm:h-10 text-[#E50914]" />
              <span className="text-[10px] sm:text-sm mt-1 sm:mt-2 text-center">Privacidade Protegida</span>
            </div>
          </div>
          
          <p className="text-lg text-white opacity-90 mb-6 text-center">
            🔓 Receba 15% de desconto pagando via cartão de crédito.
          </p>
        </div>
      </div>
    </section>
  );
};