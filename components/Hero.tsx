import React from 'react';
import { Rocket, Code, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Submission for AI Agent Development Internship
        </div>
        
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI Extraction</span> Agent
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
          A Hybrid Neuro-Symbolic system architected by <strong>Albert Abishek I</strong>. 
          Transforming unstructured PDF resumes into strict, compliant Excel schemas with zero data loss and 100% context retention.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a 
            href="https://ai-agent-assignment.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Rocket className="h-5 w-5" />
            Launch Live Demo
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="https://github.com/albertabishek/AI_Agent_Assignment.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600"
          >
            <Code className="h-5 w-5" />
            View Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;