import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translationStrings } from '../data';
import MockupScene from './MockupScene';

interface HeroProps {
  lang: Language;
  theme?: 'dark' | 'light';
  onOpenWizard: () => void;
}

export default function Hero({ lang, theme = 'dark', onOpenWizard }: HeroProps) {
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  // 1. Mouse Parallax Effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Rotating Headline Words
  const rotatingWords = {
    en: ["Business Forward", "Digital Horizons", "Innovative Future", "Infinite Scale"],
    ar: ["أعمالك نحو القمة", "مستقبلك الرقمي", "ابتكاراتك البرمجية", "ريادتك الرقمية"]
  };

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords[lang].length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lang]);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. Floating Code Particles Background
  const floatingParticles = [
    { text: 'const', x: '12%', y: '18%', size: 'text-xs', delay: 0 },
    { text: '{...}', x: '82%', y: '12%', size: 'text-sm', delay: 2 },
    { text: 'async', x: '78%', y: '35%', size: 'text-xs', delay: 1 },
    { text: '</>', x: '8%', y: '45%', size: 'text-base', delay: 3 },
    { text: 'await', x: '85%', y: '65%', size: 'text-xs', delay: 4 },
    { text: 'import', x: '14%', y: '75%', size: 'text-xs', delay: 2.5 },
    { text: '=>', x: '88%', y: '82%', size: 'text-sm', delay: 0.5 },
    { text: '<div>', x: '45%', y: '15%', size: 'text-xs', delay: 1.8 },
    { text: '[]', x: '35%', y: '85%', size: 'text-xs', delay: 3.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-brand-bg overflow-hidden transition-colors duration-300">
      
      {/* Visual background lights with interactive mouse parallax */}
      <motion.div 
        style={{ x: mousePosition.x * -50, y: mousePosition.y * -50 }}
        className="absolute top-[10%] left-[5%] w-96 h-96 bg-brand-purple/10 rounded-full blur-[110px] pointer-events-none transition-transform duration-300 ease-out" 
      />
      <motion.div 
        style={{ x: mousePosition.x * -35, y: mousePosition.y * -35 }}
        className="absolute top-[20%] right-[5%] w-96 h-96 bg-brand-cyan/8 rounded-full blur-[110px] pointer-events-none transition-transform duration-300 ease-out" 
      />

      {/* Grid Pattern Accent Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Floating Code Particles */}
      {floatingParticles.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.15, 0.45, 0.15],
            y: [0, -40, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay
          }}
          className={`absolute pointer-events-none font-mono font-bold text-brand-cyan/30 hidden md:block select-none ${p.size}`}
          style={{ left: p.x, top: p.y }}
        >
          {p.text}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Column 1: Typography and buttons */}
        <motion.div 
          style={{ x: mousePosition.x * 12, y: mousePosition.y * 12 }}
          className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start transition-transform duration-300 ease-out"
        >
          
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/35 bg-brand-purple/5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse shrink-0" />
            <span className="text-[10px] md:text-xs font-bold font-mono tracking-wider text-brand-cyan uppercase">
              {t.taglineBadge}
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl lg:max-w-none">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-text tracking-tight leading-[1.12] ${isRtl ? 'lg:text-right' : 'text-left'}`}
            >
              {t.heroTitlePart1}
              <span className="text-brand-text">{t.heroTitlePart2}</span>
              {t.heroTitlePart3}
              <br className="hidden sm:inline" />
              
              {/* Rotating word with smooth fade-slide transitions */}
              <span className="inline-block mt-2 min-h-[1.1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue font-black inline-block drop-shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                  >
                    {rotatingWords[lang][wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
              className={`text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed max-w-xl mx-auto lg:mx-0 ${isRtl ? 'lg:text-right text-right' : 'text-left'}`}
            >
              {t.heroDescription}
            </motion.p>
          </div>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, cubicBezier: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ${isRtl ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* CTA 1: Start Your Project */}
            <button
              onClick={onOpenWizard}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_4px_25px_rgba(112,0,255,0.3)] hover:shadow-[0_4px_30px_rgba(0,240,255,0.45)] hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm font-sans"
            >
              <span>{t.startProject}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            {/* CTA 2: See Our Work */}
            <button
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-brand-muted hover:text-brand-text bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm shadow-sm"
            >
              <PlayCircle className="w-5 h-5 text-brand-cyan shrink-0 animate-pulse" />
              <span>{t.seeWork}</span>
            </button>
          </motion.div>
          
        </motion.div>

        {/* Column 2: Dashboard Mockup Scene with Mouse Parallax */}
        <motion.div 
          style={{ x: mousePosition.x * 25, y: mousePosition.y * 25 }}
          className="lg:col-span-6 flex items-center justify-center relative w-full overflow-visible transition-transform duration-300 ease-out"
        >
          <MockupScene lang={lang} theme={theme} />
        </motion.div>

      </div>

    </section>
  );
}
