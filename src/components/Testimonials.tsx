import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-[#141414] p-6 rounded-lg border border-gray-800 transform transition-all hover:border-[#E50914]/50 hover:shadow-lg">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            className="w-5 h-5 text-[#E50914] fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      <p className="font-bold">- {author}</p>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-[#141414] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          👍 <span className="text-[#E50914]">O QUE NOSSOS CLIENTES DIZEM</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial 
            quote="Melhor custo-benefício! Cancelei todas minhas assinaturas individuais. Não me arrependo!" 
            author="Carlos S."
          />
          <Testimonial 
            quote="Atendimento rápido e conteúdo sempre atualizado. Qualidade incrível!" 
            author="Ana L."
          />
          <Testimonial 
            quote="Consegui assistir a série que tanto queria sem precisar pagar por mais um serviço!" 
            author="Marcelo R."
          />
          <Testimonial 
            quote="A qualidade é excelente e posso usar em todos os meus dispositivos sem problemas." 
            author="Juliana M."
          />
          <Testimonial 
            quote="Muito fácil de usar e tem absolutamente tudo que eu queria assistir!" 
            author="Pedro F."
          />
          <Testimonial 
            quote="Economizei muito dinheiro desde que assinei. Agora toda a família usa!" 
            author="Fernanda C."
          />
        </div>
      </div>
    </section>
  );
};