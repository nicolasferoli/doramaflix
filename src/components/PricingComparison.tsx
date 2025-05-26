import React from 'react';
import { Button } from './Button';

export const PricingComparison: React.FC = () => {
  return (
    <section className="py-16 bg-[#141414] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          💰 <span className="text-[#E50914]">ECONOMIZE ATÉ 90%</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <div className="bg-black/40 p-6 rounded-lg w-full md:w-1/2 max-w-md">
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
        
        <div className="flex justify-center">
          <Button href="#secao-planos">
            🛒 COMPRAR COM DESCONTO
          </Button>
        </div>
      </div>
    </section>
  );
};