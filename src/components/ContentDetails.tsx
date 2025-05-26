import React from 'react';
import FilmesImg from '../images/Filmes.webp';
import SeriesImg from '../images/Series.webp';
import EsportesImg from '../images/Esportes.webp';
import AdultosImg from '../images/Adultos.webp';
import DesenhosImg from '../images/Desenhos.webp';
import AnimesImg from '../images/Animes.webp';

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  image,
  alt
}) => {
  return (
    <div className="bg-black/40 p-5 rounded-lg transform transition-all hover:bg-[#E50914]/10 hover:shadow-lg flex flex-col items-center text-center">
      <img
        src={image}
        alt={alt}
        className="w-full h-42 object-cover rounded-[8px] mb-4"
      />
      <div className="font-bold text-lg mb-1">{title}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export const ContentDetails: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          🎬 <span className="text-[#E50914]">O QUE VOCÊ VAI ENCONTRAR</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ContentCard 
            image={FilmesImg}
            alt="Filmes"
            title="Filmes" 
            description="Lançamentos e clássicos disponíveis 24/7 para você maratonar."
          />
          <ContentCard 
            image={SeriesImg}
            alt="Séries"
            title="Séries" 
            description="Temporadas completas das suas séries favoritas."
          />
          <ContentCard 
            image={EsportesImg}
            alt="Esportes"
            title="Esportes" 
            description="Transmissões ao vivo dos seus times e atletas preferidos."
          />
          <ContentCard 
            image={DesenhosImg}
            alt="Infantil"
            title="Infantil" 
            description="Desenhos educativos e conteúdo seguro para toda a família."
          />
          <ContentCard 
            image={AdultosImg}
            alt="Adultos"
            title="Adultos" 
            description="Conteúdo +18 disponível em canais dedicados."
          />
          <ContentCard 
            image={AnimesImg}
            alt="Animes"
            title="Animes" 
            description="Últimos episódios e clássicos do mundo dos animes."
          />
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl text-gray-300 italic">
            "Imagine ter acesso a todos os streamings e canais que você sempre quis, 
            sem precisar assinar cada um separadamente."
          </p>
        </div>
      </div>
    </section>
  );
};