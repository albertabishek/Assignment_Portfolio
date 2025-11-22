import React from 'react';
import Hero from './components/Hero';
import ChallengeSolution from './components/ChallengeSolution';
import Architecture from './components/Architecture';
import Results from './components/Results';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <span className="text-lg font-bold tracking-tight text-cyan-400">
              AI Agent<span className="text-slate-100">.Submit</span>
            </span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
              <a href="#solution" className="hover:text-cyan-400 transition-colors">Solution</a>
              <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
              <a href="#results" className="hover:text-cyan-400 transition-colors">Results</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ChallengeSolution />
        <Architecture />
        <Results />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;