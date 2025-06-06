import React, { useRef, useEffect } from 'react';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';
import img21 from '../images/21.png';
import img22 from '../images/22.png';

const moviesTop = [
  { title: 'Série 1', image: img1 },
  { title: 'Série 2', image: img2 },
  { title: 'Série 3', image: img3 },
  { title: 'Série 4', image: img4 },
  { title: 'Série 5', image: img5 },
  { title: 'Série 6', image: img6 },
  { title: 'Série 7', image: img7 },
  { title: 'Série 8', image: img8 },
  { title: 'Série 9', image: img9 },
  { title: 'Série 10', image: img10 },
  { title: 'Série 11', image: img11 },
];

const moviesBottom = [
  { title: 'Série 12', image: img12 },
  { title: 'Série 13', image: img13 },
  { title: 'Série 14', image: img14 },
  { title: 'Série 15', image: img15 },
  { title: 'Série 16', image: img16 },
  { title: 'Série 17', image: img17 },
  { title: 'Série 18', image: img18 },
  { title: 'Série 19', image: img19 },
  { title: 'Série 20', image: img20 },
  { title: 'Série 21', image: img21 },
  { title: 'Série 22', image: img22 },
];

function useInfiniteCarousel(ref: React.RefObject<HTMLDivElement>, direction: 'right' | 'left') {
  useEffect(() => {
    const carousel = ref.current;
    if (!carousel) return;
    // Duplicar os filmes para efeito infinito
    const totalMovies = carousel.children.length;
    if (totalMovies === (direction === 'right' ? moviesTop.length : moviesBottom.length)) {
      const arr = direction === 'right' ? moviesTop : moviesBottom;
      for (let i = 0; i < arr.length; i++) {
        const clone = carousel.children[i].cloneNode(true);
        carousel.appendChild(clone);
      }
    }
    let animationFrame: number;
    let scrollAmount = 1.2;
    function animate() {
      if (!carousel) return;
      if (direction === 'right') {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += scrollAmount;
        }
      } else {
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        } else {
          carousel.scrollLeft -= scrollAmount;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [ref, direction]);
}

export const MovieCarousel: React.FC = () => {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  useInfiniteCarousel(carouselRef1, 'right');
  useInfiniteCarousel(carouselRef2, 'left');

  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center max-w-[600px] mx-auto">
          🎬 Mais de 1500 séries atualizadas para você maratonar e se divertir!
        </h2>
        <div className="flex flex-col gap-8">
          {/* Carrossel de cima (direita) */}
          <div className="relative">
            {/* Fade esquerdo */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to right, #000 85%, transparent)'}} />
            {/* Fade direito */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to left, #000 85%, transparent)'}} />
            <div
              ref={carouselRef1}
              className="flex overflow-hidden no-scrollbar items-center whitespace-nowrap gap-6 relative"
              style={{ scrollBehavior: 'auto' }}
            >
              {moviesTop.map((movie, idx) => (
                <div
                  key={movie.title + idx}
                  className="flex-shrink-0 w-48 rounded-lg overflow-hidden bg-[#181818] shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Carrossel de baixo (esquerda) */}
          <div className="relative">
            {/* Fade esquerdo */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to right, #000 85%, transparent)'}} />
            {/* Fade direito */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to left, #000 85%, transparent)'}} />
            <div
              ref={carouselRef2}
              className="flex overflow-hidden no-scrollbar items-center whitespace-nowrap gap-6 relative"
              style={{ scrollBehavior: 'auto' }}
            >
              {moviesBottom.map((movie, idx) => (
                <div
                  key={movie.title + '-2-' + idx}
                  className="flex-shrink-0 w-48 rounded-lg overflow-hidden bg-[#181818] shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 