import React, { useRef, useEffect } from 'react';
import AppleTVLogo from '../images/Apple_TV_Plus_Logo 1.svg';

const logos = [
  {
    name: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'HBO',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  },
  {
    name: 'Amazon',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  },
  {
    name: 'Apple TV',
    src: AppleTVLogo,
  },
  {
    name: 'Globo Play',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Globoplay_logo.svg',
  },
  {
    name: 'Crunchyroll',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Crunchyroll.svg',
  },
];

export const LogoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 180,
          behavior: 'smooth',
        });
        // Loop para o início
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth - 1
        ) {
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.scrollTo({ left: 0, behavior: 'auto' });
            }
          }, 400);
        }
      }
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Fade esquerdo */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          {/* Fade direito */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div
            ref={carouselRef}
            className="flex gap-10 overflow-x-auto py-4 px-2 scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 object-contain drop-shadow-lg"
                  style={{ maxWidth: 120 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 