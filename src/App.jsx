import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="text-slate-800 relative" style={{ position: 'relative', zIndex: 10 }}>
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
