import React from 'react';
import { Rocket, Users, Award, Globe, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { metricsData } from '../data';

interface MetricsBarProps {
  lang: Language;
}

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Users,
  Award,
  Globe,
};

export default function MetricsBar({ lang }: MetricsBarProps) {
  const isRtl = lang === 'ar';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="w-full max-w-7xl mx-auto px-6 mt-16 lg:mt-24"
    >
      <div className="glass-panel rounded-3xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 shadow-xl border border-brand-border relative overflow-hidden">
        
        {/* Subtle decorative background lights */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-brand-cyan/5 rounded-full blur-[40px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-brand-purple/5 rounded-full blur-[40px] pointer-events-none" />

        {metricsData.map((item, idx) => {
          const IconComponent = iconMap[item.iconName] || Globe;
          const isCyan = item.glowColor === 'cyan';
          const isPurple = item.glowColor === 'purple';
          const isBlue = item.glowColor === 'blue';

          let glowClass = 'shadow-[0_0_15px_rgba(0,240,255,0.15)] bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan';
          if (isPurple) {
            glowClass = 'shadow-[0_0_15px_rgba(112,0,255,0.15)] bg-brand-purple/10 border-brand-purple/20 text-brand-purple';
          } else if (isBlue) {
            glowClass = 'shadow-[0_0_15px_rgba(37,99,245,0.15)] bg-brand-blue/10 border-brand-blue/20 text-brand-blue';
          }

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-center gap-4 lg:gap-5 group relative"
            >
              {/* Divider for desktop */}
              {idx > 0 && (
                <div className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-brand-border ${isRtl ? 'right-0 left-auto' : ''}`} />
              )}

              {/* Icon container */}
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${glowClass}`}>
                <IconComponent className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>

              {/* Metric Text */}
              <div className="space-y-0.5">
                <span className="text-2xl lg:text-3xl font-display font-bold text-brand-text tracking-tight block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-text group-hover:to-brand-cyan transition-all">
                  {item.value}
                </span>
                <span className="text-xs lg:text-sm text-brand-muted font-medium tracking-wide block">
                  {item.label[lang]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
