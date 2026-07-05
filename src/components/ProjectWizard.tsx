import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, Calculator, Calendar, DollarSign, Send, ShieldCheck } from 'lucide-react';
import { Language, ProjectLead } from '../types';
import { translationStrings, servicesData } from '../data';

interface ProjectWizardProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedServiceId: string | null;
  onClearPreselectedService: () => void;
}

export default function ProjectWizard({
  isOpen,
  onClose,
  lang,
  preselectedServiceId,
  onClearPreselectedService,
}: ProjectWizardProps) {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [costMin, setCostMin] = useState(5000);
  const [costMax, setCostMax] = useState(8000);
  const [weeksMin, setWeeksMin] = useState(4);
  const [weeksMax, setWeeksMax] = useState(6);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  const scopeFeatures = [
    { id: 'auth', label: { en: 'User Authentication', ar: 'تسجيل دخول وحسابات مستخدمين' }, cost: 1500, weeks: 1 },
    { id: 'payment', label: { en: 'Payments & Stripe Sync', ar: 'الدفع الإلكتروني وبوابة سترايب' }, cost: 2000, weeks: 1 },
    { id: 'db', label: { en: 'Complex Database Schemas', ar: 'قواعد بيانات ونظم متقدمة' }, cost: 1800, weeks: 2 },
    { id: 'ai', label: { en: 'Gemini LLM Integration', ar: 'تكامل الذكاء الاصطناعي و Gemini' }, cost: 3500, weeks: 2 },
    { id: 'multilang', label: { en: 'Multilingual Translations', ar: 'دعم لغات متعددة (مترجم)' }, cost: 1000, weeks: 1 },
    { id: 'realtime', label: { en: 'Real-time Chats/WebSockets', ar: 'شات فوري وتحديثات لحظية' }, cost: 2500, weeks: 2 },
  ];

  // Set pre-selected service if provided
  useEffect(() => {
    if (preselectedServiceId) {
      setServices([preselectedServiceId]);
      onClearPreselectedService();
    }
  }, [preselectedServiceId]);

  // Recalculate cost & timeline based on choices
  useEffect(() => {
    let baseMin = 4000;
    let baseMax = 6000;
    let baseWeeksMin = 3;
    let baseWeeksMax = 5;

    // Services modifier
    services.forEach(s => {
      if (s === 'web') { baseMin += 2500; baseMax += 4000; baseWeeksMin += 1; baseWeeksMax += 2; }
      if (s === 'mobile') { baseMin += 3500; baseMax += 5500; baseWeeksMin += 2; baseWeeksMax += 3; }
      if (s === 'ai') { baseMin += 4500; baseMax += 7500; baseWeeksMin += 2; baseWeeksMax += 4; }
      if (s === 'design') { baseMin += 1500; baseMax += 2500; baseWeeksMin += 1; baseWeeksMax += 1; }
      if (s === 'marketing') { baseMin += 1000; baseMax += 2000; baseWeeksMin += 1; baseWeeksMax += 1; }
      if (s === 'cloud') { baseMin += 2500; baseMax += 4500; baseWeeksMin += 1; baseWeeksMax += 2; }
    });

    // Features modifier
    features.forEach(fId => {
      const target = scopeFeatures.find(item => item.id === fId);
      if (target) {
        baseMin += target.cost;
        baseMax += target.cost * 1.35;
        baseWeeksMin += target.weeks;
        baseWeeksMax += target.weeks + 1;
      }
    });

    setCostMin(Math.round(baseMin));
    setCostMax(Math.round(baseMax));
    setWeeksMin(baseWeeksMin);
    setWeeksMax(baseWeeksMax);
  }, [services, features]);

  const handleServiceToggle = (id: string) => {
    if (services.includes(id)) {
      setServices(services.filter(s => s !== id));
    } else {
      setServices([...services, id]);
    }
  };

  const handleFeatureToggle = (id: string) => {
    if (features.includes(id)) {
      setFeatures(features.filter(f => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const saved = localStorage.getItem('oxa_leads');
      let currentLeads: ProjectLead[] = [];
      if (saved) {
        try { currentLeads = JSON.parse(saved); } catch (err) {}
      }

      const servicesString = services.map(s => {
        const found = servicesData.find(item => item.id === s);
        return found ? found.title.en : s;
      });

      const newLead: ProjectLead = {
        id: 'OXA-WIZ-' + Math.floor(1000 + Math.random() * 9000),
        name,
        email,
        services: servicesString.length > 0 ? servicesString : ['Configurator Submission'],
        budget: `$${costMin.toLocaleString()} - $${costMax.toLocaleString()}`,
        message: `Wizard Configured! Features requested: [${features.join(', ')}]. Client Message: "${message}"`,
        createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ar-EG', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      const updated = [newLead, ...currentLeads];
      localStorage.setItem('oxa_leads', JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clean up fields after a bit
      setTimeout(() => {
        setStep(1);
        setServices([]);
        setFeatures([]);
        setName('');
        setEmail('');
        setMessage('');
        setIsSuccess(false);
        onClose();
      }, 3000);

    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          {/* Wizard Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-y-4 inset-x-4 md:inset-y-10 md:max-w-4xl md:mx-auto bg-brand-secondary border border-brand-border rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col md:flex-row transition-colors duration-300"
          >
            {/* Left Content Column */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-brand-secondary">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-brand-border pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                    <Calculator className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-brand-text leading-none">
                      {t.wizardTitle}
                    </h3>
                    <p className="text-xs text-brand-dim mt-1.5 leading-none">{t.wizardDesc}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-brand-card hover:bg-brand-card-hover border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Steps Area */}
              <div className="flex-1 py-6 md:py-8">
                <AnimatePresence mode="wait">
                  
                  {/* Step 1: Services Selector */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRtl ? -30 : 30 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
                        {lang === 'en' ? "STEP 1: CHOOSE SYSTEM SERVICES" : "الخطوة 1: حدد الخدمات المطلوبة لشركتك"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicesData.map((s) => {
                          const isSelected = services.includes(s.id);
                          return (
                            <button
                              type="button"
                              key={s.id}
                              onClick={() => handleServiceToggle(s.id)}
                              className={`p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                                  : 'bg-brand-card border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-card-hover'
                              } ${isRtl ? 'text-right flex-row-reverse' : 'text-left'}`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${
                                isSelected ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan' : 'bg-brand-card border-brand-border text-brand-muted'
                              }`}>
                                <Check className={`w-4 h-4 transition-transform ${isSelected ? 'scale-100' : 'scale-0'}`} />
                              </div>
                              <div className="space-y-0.5 flex-1">
                                <span className="text-sm font-bold text-brand-text block leading-none">{s.title[lang]}</span>
                                <span className="text-[10px] text-brand-muted block leading-tight mt-1.5">{s.description[lang]}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Feature Scope */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRtl ? -30 : 30 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
                        {lang === 'en' ? "STEP 2: ENHANCED INTEGRATIONS" : "الخطوة 2: حدد الميزات والدمج التقني"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {scopeFeatures.map((f) => {
                          const isSelected = features.includes(f.id);
                          return (
                            <button
                              type="button"
                              key={f.id}
                              onClick={() => handleFeatureToggle(f.id)}
                              className={`p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                                  : 'bg-brand-card border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-card-hover'
                              } ${isRtl ? 'text-right flex-row-reverse' : 'text-left'}`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${
                                isSelected ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan' : 'bg-brand-card border-brand-border text-brand-muted'
                              }`}>
                                <Check className={`w-4 h-4 transition-transform ${isSelected ? 'scale-100' : 'scale-0'}`} />
                              </div>
                              <div className="space-y-0.5 flex-1">
                                <span className="text-sm font-bold text-brand-text block leading-none">{f.label[lang]}</span>
                                <span className="text-[10px] text-brand-muted block leading-tight mt-1.5">
                                  {lang === 'en' ? `+ $${f.cost.toLocaleString()} & + ${f.weeks} wk` : `+ $${f.cost.toLocaleString()} و + ${f.weeks} أسابيع`}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact & Complete */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRtl ? -30 : 30 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
                        {lang === 'en' ? "STEP 3: CONTACT INFORMATION" : "الخطوة 3: معلومات التواصل وتأكيد الطلب"}
                      </h4>

                      {!isSuccess ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold font-mono text-brand-dim uppercase">{t.nameLabel}</label>
                              <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none transition-colors"
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold font-mono text-brand-dim uppercase">{t.emailLabel}</label>
                              <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none transition-colors"
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold font-mono text-brand-dim uppercase">{lang === 'en' ? "Project Requirements" : "موجز إضافي لمتطلبات المشروع"}</label>
                            <textarea
                              required
                              rows={3}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text focus:outline-none transition-colors resize-none"
                              placeholder={lang === 'en' ? "Include timeline constraints, desired integrations, or scaling requirements..." : "الموعد التقريبي، أي روابط لمشاريع ملهمة، إلخ..."}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="py-10 flex flex-col items-center text-center space-y-4">
                          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <Check className="w-6 h-6 animate-pulse" />
                          </div>
                          <div>
                            <h5 className="text-base font-bold text-brand-text">{lang === 'en' ? "Project Configuration Transmitted!" : "تم إرسال مواصفات مشروعك!"}</h5>
                            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                              {lang === 'en' 
                                ? "We have received your custom wizard structure and will evaluate it. Standby for contact!"
                                : "تلقينا هيكل التكلفة والميزات المخصصة التي حددتها. سنتواصل معك بالدراسة التقنية الكاملة قريباً!"}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Wizard Footer Navigation Controls */}
              {!isSuccess && (
                <div className="border-t border-brand-border pt-5 flex items-center justify-between mt-4">
                  <button
                    disabled={step === 1}
                    onClick={() => setStep(prev => prev - 1)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-dim hover:text-brand-text transition-colors disabled:opacity-20 cursor-pointer"
                  >
                    <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    <span>{t.wizardBack}</span>
                  </button>

                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((s) => (
                      <span
                        key={s}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          step === s ? 'bg-brand-cyan' : 'bg-brand-border'
                        }`}
                      />
                    ))}
                  </div>

                  {step < 3 ? (
                    <button
                      onClick={() => setStep(prev => prev + 1)}
                      className="flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-brand-text bg-brand-cyan/5 hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-blue hover:text-white px-4 py-2 border border-brand-cyan/25 hover:border-transparent rounded-lg transition-all cursor-pointer"
                    >
                      <span>{t.wizardNext}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !name || !email || !message}
                      className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-brand-purple to-brand-blue px-5 py-2.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-40 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{t.submitting}</span>
                      ) : (
                        <>
                          <span>{t.wizardFinish}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}

            </div>

            {/* Right Estimator Display Column */}
            <div className="w-full md:w-[35%] bg-brand-card p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-border relative overflow-hidden">
              {/* Glowing vector line */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-[30px]" />
              
              <div className="space-y-6 relative z-10">
                <span className="flex items-center gap-2 text-[10px] font-bold font-mono text-brand-cyan uppercase tracking-wider">
                  <DollarSign className="w-4 h-4 animate-bounce" />
                  <span>{t.estimatedCost}</span>
                </span>

                {/* Pricing Range */}
                <div className="space-y-1">
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-brand-text tracking-tight block">
                    ${costMin.toLocaleString()}
                  </span>
                  <span className="text-xs text-brand-dim block">{lang === 'en' ? "up to" : "تصل كحد أقصى إلى:"}</span>
                  <span className="text-xl font-display font-bold text-brand-muted block">
                    ${costMax.toLocaleString()}
                  </span>
                </div>

                <hr className="border-brand-border" />

                {/* Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-brand-purple uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>{t.timelineLabel}</span>
                  </div>
                  <span className="text-lg font-bold text-brand-text block">
                    {weeksMin} - {weeksMax} {t.weeks}
                  </span>
                </div>
              </div>

              {/* Secure standards badge */}
              <div className="mt-8 bg-brand-secondary border border-brand-border rounded-xl p-3.5 flex items-center gap-3 relative z-10">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-[10px] text-brand-muted leading-tight">
                  {lang === 'en' 
                    ? "Includes full testing suites, cloud setup, and 12-month security updates." 
                    : "تشمل التكلفة اختبارات الأداء، بناء السحابة، وضمان برمجياً لمدة 12 شهراً."}
                </span>
              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
