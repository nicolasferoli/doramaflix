import React from 'react';
import { Button } from './Button';
import { PlayCircle, Shield, Trophy, Lock } from 'lucide-react';
import backgroundImg from '../images/background.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 py-16 md:py-24 overflow-hidden bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
      
      {/* Background image - Netflix style com overlay escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50"
        style={{ 
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      
      <div className="relative z-20 max-w-5xl mx-auto">
        <h1 className="text-[1.1rem] leading-5 sm:text-4xl md:text-5xl lg:text-[3rem] font-bold mb-4 text-white animate-fade-in">
          <span className="text-[#E50914]">DORAMAFLIX</span>: TODAS OS DORAMAS E SÉRIES EXCLUSIVAS EM UM SÓ LUGAR!
        </h1>
        
        {/* Container do vídeo com proporção 16:9 */}
        <div className="relative w-full max-w-3xl mx-auto mb-8 aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trailer Doramaflix"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="flex flex-wrap justify-center sm:gap-3 mb-8 text-gray-300 text-lg">
          <span className="flex items-center">✅ Ativação na hora</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">✅ Assista de onde quiser (TV ou Celular)</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">✅ Planos que cabem no seu bolso.</span>
        </div>
        
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
    </section>
  );
};