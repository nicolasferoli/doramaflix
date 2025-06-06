import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, image }) => {
  return (
    <div className="bg-[#141414] p-6 rounded-lg border border-gray-800 transform transition-all hover:border-[#E50914]/50 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={author} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#E50914]"
        />
        <div>
          <p className="font-bold text-lg">{author}</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                className="w-4 h-4 text-[#E50914] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 italic">{quote}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Testimonial 
            quote="Melhor custo-benefício! Cancelei todas minhas assinaturas individuais. Não me arrependo!" 
            author="Amanda Silva"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
          />
          <Testimonial 
            quote="Atendimento rápido e conteúdo sempre atualizado. Qualidade incrível!" 
            author="Juliana Santos"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
          />
          <Testimonial 
            quote="A qualidade é excelente e posso usar em todos os meus dispositivos sem problemas." 
            author="Mariana Costa"
            image="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop"
          />
          <Testimonial 
            quote="Economizei muito dinheiro desde que assinei. Agora toda a família usa!" 
            author="Fernanda Lima"
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};