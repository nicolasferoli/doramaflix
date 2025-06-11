import React from 'react';
import { Button } from './Button';
import { Users, MonitorSmartphone, MonitorPlay, PlayCircle, Shield, Trophy, Lock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-[#141414] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          📺 <span className="text-[#E50914]">SEU UNIVERSO</span> DE ENTRETENIMENTO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105 text-center">
            <Users className="mx-auto mb-3 w-10 h-10 text-[#E50914]" />
            <p className="text-lg mb-1 font-bold">Assista em Telas Ilimitadas</p>
            <p className="text-gray-400">Compartilhe com a família</p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105 text-center">
            <MonitorPlay className="mx-auto mb-3 w-10 h-10 text-[#E50914]" />
            <p className="text-lg mb-1 font-bold">Qualidade Full HD/4K</p>
            <p className="text-gray-400">Imagem e som impecáveis</p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105 text-center">
            <MonitorSmartphone className="mx-auto mb-3 w-10 h-10 text-[#E50914]" />
            <p className="text-lg mb-1 font-bold">Assista em qualquer lugar </p>
            <p className="text-gray-400">(Smart TV, Celular e PC)</p>
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