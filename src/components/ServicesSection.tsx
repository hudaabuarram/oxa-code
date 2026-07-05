import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Smartphone, Cpu, Palette, Megaphone, Cloud, ArrowRight, X, Check, ArrowUpRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { servicesData, translationStrings } from '../data';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceInWizard: (serviceId: string) => void;
}

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Cpu,
  Palette,
  Megaphone,
  Cloud,
};

export default function ServicesSection({ lang, onSelectServiceInWizard }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-3`}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs lg:text-sm font-bold font-mono text-brand-cyan tracking-[0.2em] uppercase block"
          >
            {t.servicesSub}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight"
          >
            {t.servicesTitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-brand-muted"
          >
            {t.servicesDesc}
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            
            // Custom glows
            let borderHover = 'hover:border-brand-cyan/45 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]';
            let iconBg = 'bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]';
            
            if (service.glowColor === 'purple') {
              borderHover = 'hover:border-brand-purple/45 hover:shadow-[0_10px_30px_rgba(112,0,255,0.15)]';
              iconBg = 'bg-brand-purple/10 border-brand-purple/25 text-brand-purple shadow-[0_0_15px_rgba(112,0,255,0.1)]';
            } else if (service.glowColor === 'pink') {
              borderHover = 'hover:border-pink-500/45 hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)]';
              iconBg = 'bg-pink-500/10 border-pink-500/25 text-pink-500 shadow-[0_0_15px_rgba(244,63,94,0.1)]';
            } else if (service.glowColor === 'blue') {
              borderHover = 'hover:border-blue-500/45 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]';
              iconBg = 'bg-blue-500/10 border-blue-500/25 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]';
            } else if (service.glowColor === 'green') {
              borderHover = 'hover:border-emerald-500/45 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]';
              iconBg = 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]';
            }

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onClick={() => setSelectedService(service)}
                className={`glass-card rounded-2xl p-6 lg:p-8 border border-brand-border flex flex-col justify-between cursor-pointer transition-all duration-300 relative group overflow-hidden ${borderHover}`}
              >
                {/* Accent top gradient glow */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  service.glowColor === 'cyan' ? 'from-transparent via-brand-cyan to-transparent' :
                  service.glowColor === 'purple' ? 'from-transparent via-brand-purple to-transparent' :
                  service.glowColor === 'pink' ? 'from-transparent via-pink-500 to-transparent' :
                  service.glowColor === 'blue' ? 'from-transparent via-blue-500 to-transparent' :
                  'from-transparent via-emerald-500 to-transparent'
                }`} />

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-display font-semibold text-brand-text tracking-tight mb-3">
                    {service.title[lang]}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description[lang]}
                  </p>
                </div>

                {/* Arrow indicator bottom right */}
                <div className={`flex items-center gap-1.5 text-xs font-semibold text-brand-muted group-hover:text-brand-text transition-colors self-end ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span>{t.viewDetails}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* DETAILED SERVICE MODAL DRAWER */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-y-6 inset-x-4 md:inset-y-12 md:max-w-3xl md:mx-auto bg-brand-secondary border border-brand-border rounded-3xl p-6 md:p-10 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header of Modal */}
                <div className="flex justify-between items-start border-b border-brand-border pb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                      selectedService.glowColor === 'cyan' ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan' :
                      selectedService.glowColor === 'purple' ? 'bg-brand-purple/10 border-brand-purple/20 text-brand-purple' :
                      selectedService.glowColor === 'pink' ? 'bg-pink-500/10 border-pink-500/20 text-pink-500' :
                      selectedService.glowColor === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' :
                      'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                    }`}>
                      {(() => {
                        const Icon = iconMap[selectedService.iconName] || Code;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-brand-text tracking-tight">
                        {selectedService.title[lang]}
                      </h3>
                      <span className="text-xs text-brand-cyan font-mono tracking-wider block mt-0.5">
                        SERVICE SPECIFICATION
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 rounded-full bg-brand-card hover:bg-brand-card-hover border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Long description */}
                <div className="py-6 md:py-8 space-y-6">
                  <p className="text-sm md:text-base text-brand-text leading-relaxed">
                    {selectedService.longDescription[lang]}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
                      {lang === 'en' ? "What We Deliver:" : "مخرجات الخدمة والتسليمات:"}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {selectedService.features[lang].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 bg-brand-card border border-brand-border rounded-xl p-3">
                          <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm text-brand-text font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row items-center justify-end gap-4 mt-6">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full md:w-auto px-6 py-2.5 rounded-xl border border-brand-border hover:border-brand-border-hover text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors"
                >
                  {lang === 'en' ? "Close Specification" : "إغلاق التفاصيل"}
                </button>
                <button
                  onClick={() => {
                    onSelectServiceInWizard(selectedService.id);
                    setSelectedService(null);
                  }}
                  className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-sm font-semibold text-white shadow-lg flex items-center justify-center gap-1.5 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t.startProject}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
