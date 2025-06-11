import React from 'react';
import { Check } from 'lucide-react';

export const OfertaPage: React.FC = () => {
  const features = [
    "Acesso ilimitado",
    "+1500 Séries completas",
    "Acesso vitalício",
    "Acesso a séries de lançamento",
    "Suporte 24h no Whatsapp"
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-[#e50914] mb-4">
            Oferta Premium com desconto especial liberado!
          </h1>
          <div className="bg-[#e50914]/10 p-6 rounded-lg border border-[#e50914] mb-8">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Espere! Desconto ESPECIAL na OFERTA PREMIUM!
            </h2>
          </div>
        </div>

        {/* Features */}
        <div className="bg-[#111] p-8 rounded-xl mb-12">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#e50914] flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
          <h3 className="text-xl mb-6">
            Oferta Premium com preço exclusivo somente nessa página por apenas:
          </h3>
          <div className="mb-8">
            <p className="text-gray-400 line-through text-2xl">de R$97,00</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-lg">por apenas</p>
              <p className="text-4xl md:text-5xl font-bold">R$19,90</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <a 
            href="https://pay.kirvano.com/52d01255-67c6-4868-8b66-235def13f88b"
            className="block w-full bg-[#e50914] hover:bg-[#e50914]/90 text-white py-4 px-6 rounded-lg text-xl font-bold text-center transition-colors"
          >
            SIM, QUERO A OFERTA!
          </a>
          <a 
            href="https://pay.kirvano.com/da3e68b1-0a47-4298-ac55-5316493714af"
            className="block w-full text-white py-4 px-6 rounded-lg text-xl  text-center"
          >
            Não! Eu quero o Pacote Básico!
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-400">
          <p>DORAMAFLIX – Todos os direitos reservados {new Date().getFullYear()}©️</p>
          <p>Todos os Direitos Reservados</p>
        </footer>
      </div>
    </div>
  );
}; 
