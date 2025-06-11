import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { LogoCarousel } from './components/LogoCarousel';
import { MovieCarousel } from './components/MovieCarousel';
import { Features } from './components/Features';
import { PricingComparison } from './components/PricingComparison';
import { Testimonials } from './components/Testimonials';
import { PricingPlans } from './components/PricingPlans';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { OfertaPage } from './components/OfertaPage';

const HomePage = () => {
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
      <PricingComparison />
      <Testimonials />
      <PricingPlans />
      <Guarantee />
      <FAQ />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<OfertaPage />} />
      </Routes>
    </Router>
  );
}

export default App;