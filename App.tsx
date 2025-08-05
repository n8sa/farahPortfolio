
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('#hero');

  const sectionIds = useMemo(() => ['hero', ...NAV_LINKS.map(link => link.href.substring(1))], []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = `#${id}`;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY === 0) {
        setActiveSection('#hero');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans leading-relaxed">
      <Header />
      <SideNav navLinks={NAV_LINKS} activeSection={activeSection} />
      <main className="container mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;