import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataBreachChecker from './components/DataBreachChecker';
import Tools from './components/Tools';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import BlogPage from './pages/blog';

function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <DataBreachChecker />
      <Tools />
      <About />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
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
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
