import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { LogoCarousel } from './components/LogoCarousel';
import { MovieCarousel } from './components/MovieCarousel';
import { Features } from './components/Features';
import { ContentDetails } from './components/ContentDetails';
import { PricingComparison } from './components/PricingComparison';
import { Testimonials } from './components/Testimonials';
import { PricingPlans } from './components/PricingPlans';
import { Guarantee } from './components/Guarantee';
import { FinalCTA } from './components/FinalCTA';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = "DoramaFlix: Todos os Filmes e Séries em Um Só Lugar";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <LogoCarousel />
      <MovieCarousel />
      <Features />
      <ContentDetails />
      <PricingComparison />
      <Testimonials />
      <PricingPlans />
      <Guarantee />
      <FinalCTA />
    </div>
  );
}

export default App;