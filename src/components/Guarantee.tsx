import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-[#141414] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-black/40 rounded-lg p-8 border border-gray-800 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#E50914]/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔒</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            GARANTIA TOTAL DE 30 DIAS
          </h2>
          
          <p className="text-xl mb-6">
            Se não gostar, devolvemos seu dinheiro sem burocracia!
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Estamos tão confiantes na qualidade do nosso serviço que oferecemos 30 dias de garantia. 
              Se você não ficar satisfeito por qualquer motivo, basta solicitar o reembolso que 
              devolveremos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};