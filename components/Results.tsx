import React from 'react';
import { CheckCircle, BarChart3, ExternalLink } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          
          {/* Accuracy Stats */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <span className="text-4xl font-bold text-white">100%</span>
                </div>
                <p className="text-emerald-200/80 font-medium">Key Match to Expected Output</p>
                <p className="text-sm text-slate-500 mt-2">Passed all validation checks against the provided `Expected Output.xlsx` reference schema.</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                  <span className="text-xl font-semibold text-slate-200">Schema Compliance</span>
                </div>
                 <div className="w-full bg-slate-800 rounded-full h-2.5 mb-1">
                    <div className="bg-cyan-400 h-2.5 rounded-full w-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                </div>
                <p className="text-xs text-right text-cyan-400 mt-1">37/37 Rows Matched</p>
              </div>
            </div>
          </div>

          {/* Project Screenshot & Link */}
          <div className="lg:col-span-3">
             <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-2 shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                {/* Browser Toolbar decoration */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-950/50 rounded-t-xl">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="h-6 rounded-md bg-slate-900 border border-slate-800 w-3/4 max-w-[300px] mx-auto flex items-center justify-center text-[10px] text-slate-500 font-mono">
                      ai-agent-assignment.streamlit.app
                    </div>
                  </div>
                </div>
                
                {/* Screenshot Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 rounded-b-xl group">
                    <img 
                      src="/ai_agent.png" 
                      alt="Project Screenshot" 
                      className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
             </div>

             <div className="mt-8 flex justify-center">
                <a 
                  href="https://ai-agent-assignment.streamlit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  Launch Live Interface
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;