import React from 'react';
import { Search, FileText, Compass, Code, CheckCircle, ShieldAlert, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { processStepsData, translationStrings } from '../data';

interface ProcessTimelineProps {
  lang: Language;
}

const iconMap: Record<string, LucideIcon> = {
  Search,
  FileText,
  Compass,
  Code,
  CheckCircle,
  ShieldAlert,
};

export default function ProcessTimeline({ lang }: ProcessTimelineProps) {
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-brand-secondary overflow-hidden border-t border-b border-brand-border transition-colors duration-300">
      
      {/* Dynamic background canvas glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs lg:text-sm font-bold font-mono text-brand-cyan tracking-[0.2em] uppercase block">
              {t.processSub}
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight">
              {t.processTitle}
            </h2>
          </div>
          
          <div className="flex gap-2 text-xs font-mono font-bold text-brand-dim">
            <span className="text-brand-cyan">01. SCOPING</span>
            <span>&bull;</span>
            <span className="text-brand-purple">02. PRODUCTION</span>
            <span>&bull;</span>
            <span className="text-emerald-500">03. SCALE</span>
          </div>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          
          {/* Connecting glowing line (Desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-brand-border opacity-60" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative"
          >
            {processStepsData.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Code;
              const isFirstHalf = idx < 3;
              const isLaunch = idx === 4;

              let circleGlow = 'group-hover:border-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:text-brand-cyan';
              let badgeColor = 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30';

              if (!isFirstHalf) {
                circleGlow = 'group-hover:border-brand-purple group-hover:shadow-[0_0_20px_rgba(112,0,255,0.3)] group-hover:text-brand-purple';
                badgeColor = 'text-brand-purple bg-brand-purple/10 border-brand-purple/30';
              }
              if (isLaunch || idx === 5) {
                circleGlow = 'group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:text-emerald-500';
                badgeColor = 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30';
              }

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group relative"
                >
                  
                  {/* Glowing step identifier badge / circle */}
                  <div className="relative mb-6">
                    {/* Glowing outer shadow ring */}
                    <div className="absolute -inset-1 bg-brand-card rounded-full blur-[3px] group-hover:blur-[6px] transition-all opacity-40 group-hover:opacity-100" />
                    
                    {/* Active circle */}
                    <div className={`w-20 h-20 rounded-full bg-brand-card border-2 border-brand-border flex items-center justify-center transition-all duration-300 z-10 relative ${circleGlow} shadow-sm`}>
                      <IconComponent className="w-8 h-8 text-brand-muted transition-colors duration-300 group-hover:text-current" />
                    </div>

                    {/* Miniature Index bubble */}
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full border flex items-center justify-center font-mono font-bold text-[10px] shadow-lg ${badgeColor} ${isRtl ? 'right-auto -left-1' : ''}`}>
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Step Title & Details */}
                  <h3 className={`text-lg font-display font-bold text-brand-text tracking-tight mb-2 group-hover:text-brand-cyan transition-colors ${isRtl ? 'lg:text-right w-full' : ''}`}>
                    {step.title[lang]}
                  </h3>
                  <p className={`text-xs md:text-sm text-brand-muted leading-relaxed max-w-xs ${isRtl ? 'lg:text-right w-full' : ''}`}>
                    {step.description[lang]}
                  </p>

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>

    </section>
  );
}
