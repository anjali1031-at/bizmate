import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import Categories from './components/Categories';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedCarousel />
      <Categories />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;