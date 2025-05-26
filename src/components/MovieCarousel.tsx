import React, { useRef, useEffect } from 'react';

const moviesTop = [
  {
    title: 'Oppenheimer',
    image: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
  },
  {
    title: 'Barbie',
    image: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  },
  {
    title: 'John Wick 4',
    image: 'https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg',
  },
  {
    title: 'Homem-Aranha: Através do Aranhaverso',
    image: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  },
  {
    title: 'Super Mario Bros. O Filme',
    image: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
  {
    title: 'Guardiões da Galáxia Vol. 3',
    image: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
  },
  {
    title: 'Avatar: O Caminho da Água',
    image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  },
  {
    title: 'Velozes e Furiosos 10',
    image: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
  },
  {
    title: 'Elementos',
    image: 'https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
  },
  {
    title: 'Indiana Jones e a Relíquia do Destino',
    image: 'https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg',
  },
];

const moviesBottom = [
  {
    title: 'The Last of Us',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/el1KQzwdIm17I3A6cYPfsVIWhfX.jpg',
  },
  {
    title: 'Lilo & Stitch',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/toLU4HzWf2iKqPbElKPDypKNGTr.jpg',
  },
  {
    title: 'Minecraft',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/4VtkIaj76TpQNfhDHXQDdT9uBN5.jpg',
  },
  {
    title: 'Karatê Kid: Lendas',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/gnuSSOVBVWlKL8dFEGKRoOiiKTS.jpg',
  },
  {
    title: 'Thunderbolts*',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/eKD2p840nsRXLUR25ciVsNMJgOB.jpg',
  },
  {
    title: 'Sonic 3: O Filme',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg',
  },
  {
    title: 'Branca de Neve',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/t0mabA2l3KE9Ai350BEKz61Ltor.jpg',
  },
  {
    title: 'Capitão América',
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/5nbSgP8f5LMCI0PwVRRaHJaUmR3.jpg',
  },
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          🎬 Todos os filmes e séries em um só lugar!
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