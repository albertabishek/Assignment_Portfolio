import React from 'react';
import { FileText, Cpu, ShieldAlert, Wrench, FileSpreadsheet, ArrowDown, ArrowRight } from 'lucide-react';

const Architecture: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6 text-slate-300" />,
      title: "Ingestion",
      desc: "PyMuPDF extracts raw text from PDF stream.",
      color: "bg-slate-800"
    },
    {
      id: 2,
      icon: <Cpu className="w-6 h-6 text-cyan-300" />,
      title: "Reasoning",
      desc: "GPT-4o + Guided Few-Shot Prompting extracts JSON.",
      color: "bg-cyan-900/40 border-cyan-500/30"
    },
    {
      id: 3,
      icon: <ShieldAlert className="w-6 h-6 text-emerald-300" />,
      title: "Validation",
      desc: "Pydantic ensures strict Schema Compliance.",
      color: "bg-emerald-900/30 border-emerald-500/30"
    },
    {
      id: 4,
      icon: <Wrench className="w-6 h-6 text-purple-300" />,
      title: "Formatting",
      desc: "Python Middleware cleans Dates (ISO) & Currencies.",
      color: "bg-purple-900/30 border-purple-500/30"
    },
    {
      id: 5,
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-300" />,
      title: "Output",
      desc: "Pandas generates final Excel file.",
      color: "bg-blue-900/30 border-blue-500/30"
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Architecture</h2>
          <p className="mt-4 text-slate-400">Data flow pipeline from raw unstructured input to structured analytical output.</p>
        </div>

        {/* Desktop View (Horizontal) */}
        <div className="hidden lg:flex justify-between items-start relative">
          {/* Connection Line */}
          <div className="absolute top-10 left-0 w-full h-0.5 bg-slate-800 -z-10" />
          
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center max-w-[200px] relative group">
              <div className={`w-20 h-20 rounded-2xl border border-slate-700 flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:-translate-y-2 ${step.color} backdrop-blur-sm z-10`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-200">{step.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-8 -right-[3.5rem] text-slate-700 w-6 h-6" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile View (Vertical) */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
           {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center w-full max-w-sm relative">
              <div className={`w-full p-6 rounded-2xl border border-slate-700 flex items-center gap-4 mb-2 shadow-lg ${step.color}`}>
                <div className="p-3 rounded-lg bg-slate-950/50">
                    {step.icon}
                </div>
                <div className="text-left">
                    <h3 className="text-lg font-semibold text-slate-200">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowDown className="text-slate-700 w-6 h-6 my-2" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Architecture;