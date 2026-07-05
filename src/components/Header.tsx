import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { translationStrings } from '../data';
import Logo from './Logo';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  currentPage: string;
  setCurrentPage: (p: string) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  onOpenWizard: () => void;
}

export default function Header({
  lang,
  setLang,
  currentPage,
  setCurrentPage,
  theme,
  setTheme,
  onOpenWizard,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'services', label: t.navServices },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = (selected: Language) => {
    setLang(selected);
    setLangOpen(false);
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = selected;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      id="oxa-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-dark/80 backdrop-blur-lg py-3 border-b border-brand-border shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }} 
          className="flex items-center gap-3 group"
        >
          <Logo className="w-[58px] h-[34px]" showText={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-brand-card border border-brand-border px-2 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive ? 'text-white font-semibold' : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-border hover:border-brand-border-hover rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover flex items-center justify-center text-brand-muted hover:text-brand-text transition-all duration-200"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-brand-muted hover:text-brand-text transition-colors py-1.5 px-3 rounded-full hover:bg-brand-card border border-brand-border hover:border-brand-border-hover"
            >
              <Globe className="w-4 h-4 text-brand-cyan" />
              <span>{lang === 'en' ? 'EN' : 'العربية'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute z-20 mt-2 w-32 rounded-xl bg-brand-secondary border border-brand-border shadow-2xl p-1.5 ${
                      isRtl ? 'left-0 origin-top-left' : 'right-0 origin-top-right'
                    }`}
                  >
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        lang === 'en'
                          ? 'bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white font-semibold'
                          : 'text-brand-muted hover:text-brand-text hover:bg-brand-card'
                      } ${isRtl ? 'text-right' : 'text-left'}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => toggleLanguage('ar')}
                      className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        lang === 'ar'
                          ? 'bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white font-semibold'
                          : 'text-brand-muted hover:text-brand-text hover:bg-brand-card'
                      } ${isRtl ? 'text-right' : 'text-left'}`}
                    >
                      العربية
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* CTA button */}
          <button
            onClick={onOpenWizard}
            className="relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_4px_20px_rgba(112,0,255,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(0,240,255,0.4)] flex items-center gap-1.5 active:translate-y-0 cursor-pointer"
          >
            <span>{t.startProject}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme picker */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-card border border-brand-border text-brand-muted active:bg-brand-card-hover"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>

          {/* Mobile language picker */}
          <button
            onClick={() => toggleLanguage(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-card border border-brand-border text-brand-muted active:bg-brand-card-hover"
          >
            <Globe className="w-4 h-4 text-brand-cyan" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-card border border-brand-border text-brand-text active:bg-brand-card-hover"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-brand-dark/95 border-b border-brand-border backdrop-blur-lg overflow-hidden absolute top-full left-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`py-2.5 px-4 rounded-lg text-base font-semibold text-left transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 border-l-2 border-brand-cyan text-brand-text'
                        : 'text-brand-muted hover:text-brand-text'
                    } ${isRtl ? 'text-right' : 'text-left'}`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <hr className="border-brand-border my-2" />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWizard();
                }}
                className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t.startProject}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
