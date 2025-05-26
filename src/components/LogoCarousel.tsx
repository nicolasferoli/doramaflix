import React, { useRef, useEffect } from 'react';
import AppleTVLogo from '../images/Apple_TV_Plus_Logo 1.svg';
import HBOMaxLogo from '../images/HBO_Max_Logo 1.svg';

const logos = [
  {
    name: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'HBO',
    src: HBOMaxLogo,
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
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Duplicar as logos para efeito infinito
    const totalLogos = carousel.children.length;
    if (totalLogos === logos.length) {
      for (let i = 0; i < logos.length; i++) {
        const clone = carousel.children[i].cloneNode(true);
        carousel.appendChild(clone);
      }
    }

    let animationFrame: number;
    let scrollAmount = 1.2;

    function animate() {
      if (!carousel) return;
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-8 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Fade esquerdo */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #000 80%, transparent)'}} />
        {/* Fade direito */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #000 80%, transparent)'}} />
        <div
          ref={carouselRef}
          className="flex overflow-hidden no-scrollbar items-center whitespace-nowrap"
          style={{ scrollBehavior: 'auto' }}
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
              style={{ minWidth: 100, minHeight: 40, marginRight: 40 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 object-contain"
                style={{ maxWidth: 100 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 