import React from 'react';
import { Button } from './Button';
import { PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 py-16 md:py-24 overflow-hidden bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
      
      {/* Background image - Netflix style with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>
      
      <div className="relative z-20 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
          🚀 <span className="text-[#E50914]">TOTALSTREAMING</span>: TODOS OS STREAMINGS EM UM SÓ LUGAR!
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white">
          🔓 Acesso Imediato via PIX ou Cartão
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-gray-300 text-lg">
          <span className="flex items-center">✅ Ativação na hora</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">✅ Suporte 24/7</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">✅ Sem fidelidade</span>
        </div>
        
        <Button href="#secao-planos" className="group flex items-center justify-center gap-2 text-lg px-8 py-4">
          <PlayCircle className="w-6 h-6 group-hover:animate-pulse" />
          <span className="font-bold">QUERO ASSINAR AGORA!</span>
        </Button>
      </div>
    </section>
  );
};