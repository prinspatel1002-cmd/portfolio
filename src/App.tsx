import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { InteractiveChartPlayground } from './components/InteractiveChartPlayground';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#080B12] text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white dark:selection:bg-cyan-500 dark:selection:text-black relative transition-colors duration-300">
        {/* Scroll Progress Bar at the very top */}
        <ScrollProgress />

        {/* Desktop-only Custom Animated Follower Cursor with Trail Sparkles */}
        <CustomCursor />

        {/* Sticky Navigation Bar with Light/Dark Mode Switcher */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <StatsCounter />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <InteractiveChartPlayground />
          <Certifications />
          <Education />
          <Journey />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
