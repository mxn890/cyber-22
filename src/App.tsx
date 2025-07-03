import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataBreachChecker from './components/DataBreachChecker';
import Tools from './components/Tools';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Smooth scrolling for all anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <DataBreachChecker />
      <Tools />
      <About />
      <Footer />
    </div>
  );
}

export default App;