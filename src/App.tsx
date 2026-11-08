import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { DataWorkflow } from './components/DataWorkflow';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <div id="process">
          <DataWorkflow />
        </div>
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
