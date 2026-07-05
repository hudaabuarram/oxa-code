import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Filter, Layers, Code, Smartphone, Cpu, Palette, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { portfolioData, translationStrings } from '../data';

interface PortfolioSectionProps {
  lang: Language;
}

export default function PortfolioSection({ lang }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const categories = [
    { id: 'all', label: t.allCategories, icon: Layers },
    { id: 'web', label: t.categoryWeb, icon: Code },
    { id: 'mobile', label: t.categoryMobile, icon: Smartphone },
    { id: 'ai', label: t.categoryAI, icon: Cpu },
    { id: 'design', label: t.categoryDesign, icon: Palette },
  ];

  const filteredProjects = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-[10%] left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3">
          <span className="text-xs lg:text-sm font-bold font-mono text-brand-cyan tracking-[0.2em] uppercase block">
            {t.portfolioSub}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight">
            {t.portfolioTitle}
          </h2>
          <p className="text-base lg:text-lg text-brand-muted">
            {t.portfolioDesc}
          </p>
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue border-transparent text-white shadow-lg shadow-brand-purple/25'
                    : 'bg-brand-card hover:bg-brand-card-hover border-brand-border hover:border-brand-border-hover text-brand-muted hover:text-brand-text shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl border border-brand-border overflow-hidden cursor-pointer group hover:border-brand-cyan/25 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md"
              >
                {/* Project Image Container with dynamic zooming */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill Over Image */}
                  <div className={`absolute top-4 left-4 ${isRtl ? 'right-4 left-auto' : ''}`}>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-cyan px-2.5 py-1 rounded-full bg-slate-900/90 border border-brand-cyan/30 shadow-md">
                      {project.categoryLabel[lang]}
                    </span>
                  </div>
                </div>

                {/* Project Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-brand-text group-hover:text-brand-cyan transition-colors line-clamp-1">
                      {project.title[lang]}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                      {project.description[lang]}
                    </p>
                  </div>

                  {/* Tech stack listing */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-medium text-brand-muted bg-brand-card border border-brand-border px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-mono font-medium text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-1.5 py-0.5 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* PORTFOLIO DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            />

            {/* Modal Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-y-6 inset-x-4 md:inset-y-12 md:max-w-3xl md:mx-auto bg-brand-secondary border border-brand-border rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col justify-between"
            >
              {/* Image banner inside Modal */}
              <div className="relative h-60 md:h-72 w-full bg-slate-950 overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Close Button top right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-950 transition-colors z-20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title overlay */}
                <div className={`absolute bottom-6 left-6 right-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-cyan px-2.5 py-1 rounded-full bg-slate-900/95 border border-brand-cyan/25">
                    {selectedProject.categoryLabel[lang]}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mt-3">
                    {selectedProject.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Scrollable contents */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6">
                <p className="text-sm md:text-base text-brand-text leading-relaxed">
                  {selectedProject.longDescription[lang]}
                </p>

                {/* Tech Ecosystem Details */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-brand-cyan uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-4 h-4" />
                    <span>{lang === 'en' ? "Technology Ecosystem:" : "النظام التقني واللغات المستخدمة:"}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((techItem, idx) => (
                      <span key={idx} className="text-xs font-mono font-medium text-brand-text bg-brand-card border border-brand-border px-3 py-1 rounded-lg">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client guarantee box */}
                <div className="bg-brand-card border border-brand-border rounded-xl p-4 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-brand-text">
                      {lang === 'en' ? "Enterprise Quality Standards" : "معايير الجودة المؤسساتية"}
                    </h5>
                    <p className="text-xs text-brand-muted leading-relaxed mt-1">
                      {lang === 'en' 
                        ? "This project features 100% test coverage, optimized serverless caching architectures, responsive security sandboxing, and routine automated audits."
                        : "يتميز هذا المشروع بتغطية شاملة للاختبارات الأوتوماتيكية، بنيات كاش ذكية ومحسنة، حماية معززة بالكامل، وفحص دوري للأداء والسرعة."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom footer buttons */}
              <div className="p-6 border-t border-brand-border bg-brand-card flex flex-col md:flex-row items-center justify-between gap-4 shrink-0">
                <span className="text-xs text-brand-dim font-mono">
                  {lang === 'en' ? "PROJECT ID: OXA-PORT-0" : "معرف المشروع: OXA-PORT-0"}{selectedProject.id}
                </span>
                <div className="flex gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-brand-border hover:border-brand-border-hover text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? "Close View" : "إغلاق"}
                  </button>
                  <a
                    href={selectedProject.link || "#"}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-sm font-semibold text-white flex items-center justify-center gap-1.5 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span>{lang === 'en' ? "Launch Demo" : "تشغيل العرض التوضيحي"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
