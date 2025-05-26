import React from 'react';
import { Button } from './Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#E50914]/20 to-black p-8 rounded-lg border border-[#E50914]/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              NÃO PERCA MAIS TEMPO COM MÚLTIPLAS ASSINATURAS!
            </h2>
            
            <div className="bg-[#E50914]/10 inline-block p-4 rounded-lg mb-6">
              <p className="text-xl font-bold">
                💡 <span className="text-[#E50914]">DICA:</span> Assine o plano anual e economize <span className="text-[#E50914]">R$150/ano</span>!
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
                      
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-[#E50914]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-300 text-sm">Pagamentos 100% seguros via PIX, cartão ou boleto</p>
            </div>
          </div>
          
         
        </div>
      </div>
      
      <footer className="max-w-5xl mx-auto px-4 mt-16 text-center text-gray-500 text-sm">
        <p>© 2025 DoramaFlix. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-[#E50914] hover:underline mx-2">Termos de Uso</a> | 
          <a href="#" className="hover:text-[#E50914] hover:underline mx-2">Política de Privacidade</a>
        </p>
      </footer>
    </section>
  );
};