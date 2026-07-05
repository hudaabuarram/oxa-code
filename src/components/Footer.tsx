import React from 'react';
import { Globe, Github, Twitter, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { translationStrings } from '../data';
import Logo from './Logo';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-secondary border-t border-brand-border py-12 relative overflow-hidden transition-colors duration-300">
      
      {/* Glow lights */}
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-brand-purple/5 rounded-full blur-[50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a href="#oxa-header" onClick={handleScrollToTop} className="flex items-center gap-2.5 group">
            <Logo className="w-[48px] h-[28px]" showText={true} />
          </a>
          <p className="text-xs text-brand-dim mt-2 max-w-sm">
            {lang === 'en' 
              ? "Premium full-stack software development agency creating robust, auto-scaling platforms."
              : "وكالة برمجية متميزة لتطوير النظم البرمجية المتكاملة، تطبيقات الهواتف والبنية السحابية."}
          </p>
        </div>

        {/* Footer Text and credits */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          
          {/* Socials */}
          <div className="flex items-center gap-3.5">
            {[
              { icon: Github, link: '#' },
              { icon: Twitter, link: '#' },
              { icon: Linkedin, link: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-8 h-8 rounded-full bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover flex items-center justify-center text-brand-muted hover:text-brand-text transition-all shadow-sm"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="text-xs text-brand-dim flex items-center gap-1.5 mt-1 font-mono">
            <span>{t.footerText}</span>
          </div>

        </div>

      </div>

    </footer>
  );
}
