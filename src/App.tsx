import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectWizard from './components/ProjectWizard';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardPreselectedService, setWizardPreselectedService] = useState<string | null>(null);

  // Sync theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const handleSelectServiceInWizard = (serviceId: string) => {
    setWizardPreselectedService(serviceId);
    setIsWizardOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-6"
          >
            <ServicesSection
              lang={lang}
              onSelectServiceInWizard={handleSelectServiceInWizard}
            />
            <ProcessTimeline lang={lang} />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <PortfolioSection lang={lang} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <AboutSection lang={lang} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ContactSection lang={lang} />
          </motion.div>
        );
      case 'home':
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-16"
          >
            <Hero
              lang={lang}
              theme={theme}
              onOpenWizard={() => setIsWizardOpen(true)}
            />
            
            <MetricsBar lang={lang} />
            
            {/* Elegant preview card grid on Home to pull users into pages */}
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-text mb-4">
                  {lang === 'en' ? 'Navigate Our Solutions' : 'تصفّح حلولنا البرمجية'}
                </h2>
                <p className="text-brand-muted text-sm md:text-base">
                  {lang === 'en' 
                    ? 'Explore our full list of digital systems, bespoke software architecture, and active request hub.' 
                    : 'استكشف قائمتنا الكاملة من الأنظمة البرمجية، الحلول المخصصة، ولوحة تحكم عملائنا.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Services Shortcut Card */}
                <div 
                  onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="p-6 rounded-2xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover cursor-pointer group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2 font-display">{lang === 'en' ? 'Premium Services' : 'الخدمات المميزة'}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {lang === 'en' 
                      ? 'From custom cloud-native apps to Gemini AI integration and mobile platform architecture.' 
                      : 'من التطبيقات السحابية المتقدمة إلى دمج نماذج Gemini والحلول المتكاملة.'}
                  </p>
                  <span className="text-xs font-mono font-bold text-brand-cyan flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span>{lang === 'en' ? 'Explore Services' : 'استكشف الخدمات'}</span>
                    <span>&rarr;</span>
                  </span>
                </div>

                {/* Portfolio Shortcut Card */}
                <div 
                  onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="p-6 rounded-2xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover cursor-pointer group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2 font-display">{lang === 'en' ? 'Active Case Studies' : 'دراسات الحالة والمشاريع'}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {lang === 'en' 
                      ? 'Inspect the production platforms and digital architecture we deployed with real-time analytics.' 
                      : 'تصفح النظم البرمجية وقواعد البيانات السحابية التي تم تدشينها بنجاح.'}
                  </p>
                  <span className="text-xs font-mono font-bold text-brand-purple flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span>{lang === 'en' ? 'Browse Portfolio' : 'تصفح سابقة أعمالنا'}</span>
                    <span>&rarr;</span>
                  </span>
                </div>

                {/* Contact Shortcut Card */}
                <div 
                  onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="p-6 rounded-2xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover cursor-pointer group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2 font-display">{lang === 'en' ? 'Client Hub & Contact' : 'بوابة العملاء والتواصل'}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {lang === 'en' 
                      ? 'Submit custom requests, track estimates, and launch direct chats with our systems engineers.' 
                      : 'تواصل مباشرة، تتبع طلباتك، واحصل على تقارير تسليم فورية مع مهندسينا.'}
                  </p>
                  <span className="text-xs font-mono font-bold text-brand-blue flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span>{lang === 'en' ? 'Open Contact Portal' : 'افتح بوابة التواصل'}</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden relative transition-colors duration-300">
      
      {/* Background radial spotlights */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(112,0,255,0.08),transparent_55%)] pointer-events-none" />

      {/* Main Layout Elements */}
      <Header
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        setTheme={setTheme}
        onOpenWizard={() => setIsWizardOpen(true)}
      />
      
      {/* Scrollable multi-page display with beautiful animations */}
      <main className="min-h-[75vh]">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer
        lang={lang}
      />

      {/* Interactive Estimator Wizard popup */}
      <ProjectWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        lang={lang}
        preselectedServiceId={wizardPreselectedService}
        onClearPreselectedService={() => setWizardPreselectedService(null)}
      />

    </div>
  );
}
