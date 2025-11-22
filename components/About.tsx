import React from 'react';
import { User, MapPin, GraduationCap, Code2, Award, Briefcase, Calendar, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white">About The Developer</h2>
           <p className="text-slate-400 mt-2">Computer Science Engineer & AI Automation Specialist</p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          
          {/* Profile Card - Left Column */}
          <div className="md:col-span-4 h-full">
            <div className="h-full rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col items-center text-center sticky top-24">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 text-slate-600 overflow-hidden">
                <User className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Albert Abishek I</h3>
              <div className="flex items-center gap-2 text-slate-400 mt-2 text-sm">
                <MapPin className="w-4 h-4" />
                Vellore, Tamil Nadu
              </div>
              
              <div className="mt-6 w-full space-y-4 border-t border-slate-800 pt-6">
                <div className="flex items-start gap-3 text-left">
                  <GraduationCap className="w-5 h-5 text-cyan-500 mt-1 shrink-0" />
                  <div>
                    <p className="text-slate-200 font-medium">B.E. CSE (2023 - 2027)</p>
                    <p className="text-sm text-slate-500">Thanthai Periyar Govt. Institute Of Technology</p>
                    <p className="text-xs text-cyan-400 mt-1 font-medium">Current: 5th Semester</p>
                  </div>
                </div>
                <a 
                  href="https://v0-albert-abishek-landing-page.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> View Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Experience, Projects, Skills */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Work Experience */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
               <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-semibold text-white">Work Experience</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:left-2 before:top-10 before:bottom-4 before:w-0.5 before:bg-slate-900">
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-cyan-500 bg-slate-950" />
                  <h4 className="text-slate-200 font-medium text-lg">AI Automation Intern</h4>
                  <p className="text-cyan-400 text-sm">CSTE International • Virtual</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 mb-2">
                    <Calendar className="w-3 h-3" /> Jul 2025 - Present
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
                  <h4 className="text-slate-200 font-medium text-lg">Web Development And SEO Intern</h4>
                  <p className="text-slate-400 text-sm">Adventx • Virtual</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 mb-2">
                    <Calendar className="w-3 h-3" /> Aug 2025 - Nov 2025
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Worked on Serverless API React.js + TypeScript projects. Implemented Stripe payment gateway and Prisma. Redesigned website pages and hosted on Vercel.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
                  <h4 className="text-slate-200 font-medium text-lg">Automation Engineer Intern</h4>
                  <p className="text-slate-400 text-sm">CodeSA • Virtual</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 mb-2">
                    <Calendar className="w-3 h-3" /> Jul 2025 - Sep 2025
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Designed workflows using n8n, Zapier, and Make. Integrated data across Google Workspace, Notion, and Slack.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
               <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-purple-500" />
                <h3 className="text-lg font-semibold text-white">Notable Projects</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <h4 className="text-slate-200 font-medium">AiLearn</h4>
                  <p className="text-xs text-cyan-400 mt-0.5">Nov 2024 - Present</p>
                  <p className="text-sm text-slate-400 mt-3">
                    AI-powered learning platform using OpenAI API. Reduced latency by 25% through backend optimization. Deployed on Render with 99.8% uptime.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <h4 className="text-slate-200 font-medium">QuizCraft</h4>
                  <p className="text-xs text-cyan-400 mt-0.5">Apr 2025 - Present</p>
                  <p className="text-sm text-slate-400 mt-3">
                    Full-stack quiz platform (Flask + Supabase). CI/CD via Railway reducing release cycle by 40%. Planned AI features for auto-question generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Languages & Core</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'C++', 'C', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Frameworks & Web</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['React.js', 'Next.js', 'Node.js', 'Flask', 'Django', 'Tailwind', 'Prisma ORM'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">AI & Automation</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['n8n', 'Zapier', 'LangChain', 'Cursor (GenAI)', 'Windsurf (GenAI)', 'ChatGPT API'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;