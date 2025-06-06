import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon, isOpen, onClick }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-lg overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-start justify-between gap-3 hover:bg-[#2F2F2F] transition-colors duration-200"
      >
        <div className="flex items-start gap-3 flex-1 min-h-[48px]">
          <span className="text-2xl flex-shrink-0 mt-1">{icon}</span>
          <h3 className="text-lg font-bold pr-4 pt-1">{question}</h3>
        </div>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-6 pt-2">
          <p className="text-gray-300 ml-[44px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: "📱",
      question: "Como eu acesso as séries após a compra?",
      answer: "Após a confirmação do pagamento, você recebe automaticamente o link do grupo no Telegram onde estão disponibilizadas todas as séries em qualidade 1080p Full HD. Simples, rápido e prático!"
    },
    {
      icon: "⌛",
      question: "Por quanto tempo terei acesso?",
      answer: "Você terá acesso por 30 dias (1 mês) a contar da data da compra."
    },
    {
      icon: "🎬",
      question: "Tem limite de séries para assistir?",
      answer: "Durante esse período, pode assistir quantas séries quiser, sem limites!"
    },
    {
      icon: "💻",
      question: "Funciona em quais dispositivos?",
      answer: "Funciona em celulares (Android e iPhone), computadores, tablets e até em Smart TVs que tenham acesso ao Telegram. É só abrir o app e aproveitar!"
    },
    {
      icon: "🔐",
      question: "É seguro? Recebo mesmo o acesso?",
      answer: "Sim! A entrega é 100% automática e garantida. Assim que o pagamento é aprovado, você recebe o link de acesso diretamente no seu e-mail e na página de confirmação da compra."
    },
    {
      icon: "🔄",
      question: "Posso renovar a assinatura depois de 1 mês?",
      answer: "Claro! Antes do término da sua assinatura, você receberá um aviso para renovar e continuar tendo acesso a todo o conteúdo."
    },
    {
      icon: "💳",
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartão de crédito ePix. No cartão, além de ter 15% de desconto, a liberação é imediata. No Pix, em poucos minutos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          ❓ <span className="text-[#E50914]">PERGUNTAS FREQUENTES</span>
        </h2>
        
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 