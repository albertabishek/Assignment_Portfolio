import React from 'react';
import { ShieldCheck, Split, BrainCircuit, AlertTriangle, CheckCircle2 } from 'lucide-react';

const ChallengeSolution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-slate-950 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* The Challenge */}
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 text-red-400 font-semibold tracking-wide uppercase text-sm">
                <AlertTriangle className="w-4 h-4" /> The Challenge
             </div>
             <h2 className="text-3xl font-bold text-white">Unstructured Chaos to Structured Order</h2>
             <p className="text-slate-400 leading-relaxed">
               The core problem involves extracting highly specific data points from diverse PDF resumes into a rigid 37-row Excel schema. 
               The difficulty lies not just in extraction, but in <span className="text-slate-200">preventing LLM hallucination</span>, 
               ensuring <span className="text-slate-200">atomic data splitting</span> (names, locations), and maintaining 
               <span className="text-slate-200">verbatim accuracy</span> without paraphrasing.
             </p>
             <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800/60">
                <h3 className="text-sm font-medium text-slate-500 uppercase mb-4">Pain Points Addressed</h3>
                <ul className="space-y-3">
                  {['Non-standard PDF formats', 'Strict Excel Schema Requirement', 'Zero Tolerance for Hallucinations'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* The Solution */}
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                <CheckCircle2 className="w-4 h-4" /> My Solution
             </div>
             <h2 className="text-3xl font-bold text-white">Hybrid Neuro-Symbolic Agent</h2>
             <p className="text-slate-400 leading-relaxed">
               I architected a solution combining the reasoning power of <span className="text-cyan-400">GPT-4o</span> with the 
               deterministic reliability of <span className="text-cyan-400">Python middleware</span>. This ensures flexibility in understanding 
               resumes while mathematically constraining the output to the required schema.
             </p>
             
             {/* Feature Cards */}
             <div className="grid gap-4 sm:grid-cols-1">
                <FeatureCard 
                  icon={<ShieldCheck className="text-emerald-400" />}
                  title="Strict Schema Enforcement"
                  desc="Leveraged Pydantic to create a rigid validation layer. The AI output is mathematically constrained to specific keys, eliminating structural hallucinations."
                />
                <FeatureCard 
                  icon={<Split className="text-blue-400" />}
                  title="Atomic Data Splitting"
                  desc="Intelligent post-processing logic splits 'Full Name' into First/Last and 'Location' into City/State automatically, ensuring granular database readiness."
                />
                <FeatureCard 
                  icon={<BrainCircuit className="text-purple-400" />}
                  title="The Compliance Engine"
                  desc="Implemented a 'No Paraphrasing' directive using 'Golden Examples' in the system prompt, guaranteeing 100% verbatim context extraction."
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-slate-700 hover:bg-slate-900">
    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 border border-slate-800">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-slate-200">{title}</h3>
      <p className="mt-1 text-sm text-slate-400 leading-snug">{desc}</p>
    </div>
  </div>
);

export default ChallengeSolution;