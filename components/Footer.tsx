import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-500">© 2025 Albert Abishek I. All rights reserved.</p>
          
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
           <div className="flex flex-col md:items-end gap-1 text-sm text-slate-400">
              <a href="mailto:abishekialbert@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> abishekialbert@gmail.com
              </a>
              <div className="flex items-center gap-2">
                 <Phone className="w-4 h-4" /> +91 9042824369
              </div>
           </div>
           
           <div className="flex items-center gap-4">
             <a href="#" className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
               <Linkedin className="w-5 h-5" />
             </a>
             <a href="https://github.com/albertabishek" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
               <Github className="w-5 h-5" />
             </a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;