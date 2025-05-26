import React from 'react';
import { Button } from './Button';

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-[#141414] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          📺 <span className="text-[#E50914]">SEU UNIVERSO</span> DE ENTRETENIMENTO
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-xl">
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
            <span className="font-bold">4.000+ Canais</span>
          </div>
          <div className="hidden sm:block">|</div>
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
            <span className="font-bold">50.000+ Filmes/Séries</span>
          </div>
          <div className="hidden sm:block">|</div>
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
            <span className="font-bold">Todas as Plataformas Integradas</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105">
            <p className="text-lg mb-1">👉 <span className="font-bold">Assista em 3 telas simultâneas</span></p>
            <p className="text-gray-400">Compartilhe com a família</p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105">
            <p className="text-lg mb-1">👉 <span className="font-bold">Qualidade Full HD/4K</span></p>
            <p className="text-gray-400">Imagem e som impecáveis</p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg transform transition-transform hover:scale-105">
            <p className="text-lg mb-1">👉 <span className="font-bold">App exclusivo para Smart TV, Celular e PC</span></p>
            <p className="text-gray-400">Acesse de qualquer lugar</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button href="#secao-planos">
            🔥 QUERO ASSINAR AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};