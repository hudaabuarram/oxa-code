import React from 'react';
import { Shield, Zap, TrendingUp, Cpu, Server, Database, Code, Globe, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translationStrings, valuesData } from '../data';

interface AboutSectionProps {
  lang: Language;
}

const valueIconMap: Record<string, any> = {
  Shield,
  Zap,
  TrendingUp,
};

const techStackList = [
  { name: 'React 19 & Next.js', category: 'Frontend', icon: Code, color: 'text-brand-cyan' },
  { name: 'Flutter & Dart', category: 'Mobile App', icon: Globe, color: 'text-blue-400' },
  { name: 'Node.js & Go', category: 'Backend Server', icon: Terminal, color: 'text-emerald-400' },
  { name: 'PostgreSQL & Redis', category: 'Data Stores', icon: Database, color: 'text-brand-purple' },
  { name: 'Gemini LLM & PyTorch', category: 'AI & ML', icon: Cpu, color: 'text-pink-500' },
  { name: 'Docker & AWS', category: 'DevOps & SRE', icon: Server, color: 'text-blue-500' },
];

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      
      {/* Decorative vector grid behind */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,0,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Info Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-xs lg:text-sm font-bold font-mono text-brand-cyan tracking-[0.2em] uppercase block">
              {t.aboutSub}
            </span>
            <h2 className={`text-3xl lg:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight ${isRtl ? 'lg:text-right' : 'text-left'}`}>
              {t.aboutTitle}
            </h2>
            <p className={`text-base lg:text-lg text-brand-muted leading-relaxed ${isRtl ? 'lg:text-right' : 'text-left'}`}>
              {t.aboutDesc}
            </p>

            {/* Quick stats panel */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { count: '100%', label: lang === 'en' ? 'Quality Guarantee' : 'ضمان الجودة 100%' },
                { count: '24/7', label: lang === 'en' ? 'Technical Monitoring' : 'مراقبة تقنية متواصلة' },
                { count: 'Sub-Sec', label: lang === 'en' ? 'Server Responses' : 'سرعة استجابة فائقة' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-brand-card border border-brand-border rounded-xl p-3.5 text-center">
                  <span className="text-xl md:text-2xl font-bold font-display text-brand-text block">{stat.count}</span>
                  <span className="text-[10px] md:text-xs text-brand-dim font-medium block mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Tech Stack Box */}
          <div className="lg:col-span-5 bg-brand-secondary border border-brand-border rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group">
            {/* Ambient purple backlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-purple/10 rounded-full blur-[40px] group-hover:bg-brand-purple/20 transition-colors pointer-events-none" />

            <h3 className={`text-lg font-display font-bold text-brand-text tracking-tight mb-6 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Cpu className="w-5 h-5 text-brand-cyan" />
              <span>{t.techStack}</span>
            </h3>

            <div className="space-y-4">
              {techStackList.map((tech, idx) => {
                const TechIcon = tech.icon;

                return (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover transition-all">
                    <div className={`flex items-center gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-9 h-9 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center ${tech.color}`}>
                        <TechIcon className="w-4 h-4" />
                      </div>
                      <div className={isRtl ? 'text-right' : 'text-left'}>
                        <span className="text-sm font-semibold text-brand-text block leading-none">{tech.name}</span>
                        <span className="text-[10px] text-brand-dim block mt-1">{tech.category}</span>
                      </div>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Agency Core Values Cards */}
        <div className="space-y-10">
          <h3 className={`text-2xl font-display font-bold text-brand-text tracking-tight text-center ${isRtl ? 'text-center' : 'text-center'}`}>
            {t.aboutValuesTitle}
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {valuesData.map((val, idx) => {
              const IconComp = valueIconMap[val.iconName] || Shield;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6 lg:p-8 border border-brand-border hover:border-brand-border-hover transition-all flex gap-5 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-lg font-display font-bold text-brand-text tracking-tight leading-none">
                      {val.title[lang]}
                    </h4>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                      {val.description[lang]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
