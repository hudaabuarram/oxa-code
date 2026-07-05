import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, Database, Trash2, ShieldCheck, ChevronRight, Server, Eye, FileText } from 'lucide-react';
import { Language, ProjectLead } from '../types';
import { translationStrings, servicesData } from '../data';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('10k-25k');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [leads, setLeads] = useState<ProjectLead[]>([]);
  const [showCRM, setShowCRM] = useState(false);

  const t = translationStrings[lang];
  const isRtl = lang === 'ar';

  // Load leads from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('oxa_leads');
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (e) {
        // Safe check
      }
    } else {
      // Seed an initial demo lead to make the client portal look lively
      const seedLeads: ProjectLead[] = [
        {
          id: 'OXA-7294',
          name: lang === 'en' ? 'Faisal Al-Otaibi' : 'فيصل العتيبي',
          email: 'faisal@sauditech.sa',
          company: lang === 'en' ? 'Saudi Tech Ventures' : 'الاستثمارات التقنية السعودية',
          services: ['Web Development', 'AI Systems'],
          budget: '25k-50k',
          message: lang === 'en' 
            ? 'We need a dual-language dashboard with custom Gemini integration and a Postgres cloud backend.' 
            : 'نحتاج إلى لوحة تحكم ثنائية اللغة مدمج بها نماذج ذكاء اصطناعي وقاعدة بيانات سحابية.',
          createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ar-EG', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        }
      ];
      setLeads(seedLeads);
      localStorage.setItem('oxa_leads', JSON.stringify(seedLeads));
    }
  }, [lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@oxacode.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newLead: ProjectLead = {
        id: 'OXA-' + Math.floor(1000 + Math.random() * 9000),
        name,
        email,
        company,
        services: selectedServices.length > 0 ? selectedServices : ['General Inquiry'],
        budget,
        message,
        createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ar-EG', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem('oxa_leads', JSON.stringify(updatedLeads));

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset
      setName('');
      setEmail('');
      setCompany('');
      setSelectedServices([]);
      setBudget('10k-25k');
      setMessage('');
    }, 1200);
  };

  const handleDeleteLead = (id: string) => {
    const nextLeads = leads.filter(l => l.id !== id);
    setLeads(nextLeads);
    localStorage.setItem('oxa_leads', JSON.stringify(nextLeads));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-brand-border">
      
      {/* Glow Backlights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs lg:text-sm font-bold font-mono text-brand-cyan tracking-[0.2em] uppercase block">
            {t.contactSub}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-brand-text tracking-tight leading-tight">
            {t.contactTitle}
          </h2>
          <p className="text-base lg:text-lg text-brand-muted">
            {t.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Callout box */}
            <div className="bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 border border-brand-border rounded-2xl p-6 space-y-4 shadow-sm">
              <span className="flex items-center gap-2 text-xs font-bold font-mono text-brand-cyan uppercase">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>{lang === 'en' ? "SUB-SECOND RESPONSE GUARANTEE" : "ضمان الرد السريع خلال ساعات"}</span>
              </span>
              <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                {lang === 'en' 
                  ? "Every submission triggers an instant team review. Expect an executive brief, tech stack map, and custom pricing proposal in under 24 hours."
                  : "تخضع كل رسالة مراجعة فورية من مهندسينا. توقع استلام دراسة أولية لمشروعك، والتقنيات المقترحة مع تسعير تقديري خلال أقل من 24 ساعة."}
              </p>
            </div>

            {/* Email card */}
            <div className="glass-card rounded-2xl p-6 border border-brand-border flex items-center justify-between group shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-xs text-brand-dim block uppercase font-mono">{lang === 'en' ? "Email Us" : "راسلنا على البريد"}</span>
                  <span className="text-sm font-semibold text-brand-text mt-1 block">hello@oxacode.com</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-8 h-8 rounded-lg bg-brand-card hover:bg-brand-card-hover border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text transition-all cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location card */}
            <div className="glass-card rounded-2xl p-6 border border-brand-border flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <span className="text-xs text-brand-dim block uppercase font-mono">{lang === 'en' ? "Global Office" : "الموقع الجغرافي"}</span>
                <span className="text-sm font-semibold text-brand-text mt-1 block">
                  {lang === 'en' ? "London, United Kingdom & Remote" : "لندن، المملكة المتحدة والعمل عن بعد"}
                </span>
              </div>
            </div>

            {/* Client Portal / Leads DB Toggler */}
            <button
              onClick={() => setShowCRM(!showCRM)}
              className="w-full py-4 px-5 rounded-2xl border border-dashed border-brand-border hover:border-brand-cyan bg-brand-card hover:bg-brand-card-hover flex items-center justify-between text-xs font-bold text-brand-text hover:text-brand-cyan transition-all cursor-pointer font-mono shadow-sm"
            >
              <span className="flex items-center gap-2.5">
                <Database className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span>{lang === 'en' ? 'CLIENT PORTAL (ACTIVE REQUESTS)' : 'لوحة تحكم طلبات العملاء المباشرة'} ({leads.length})</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded-full font-bold">
                  {lang === 'en' ? 'VIEW PIPELINE' : 'عرض الطلبات'}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${showCRM ? 'rotate-90' : ''}`} />
              </div>
            </button>

          </div>

          {/* Column 2: Elegant Form */}
          <div className="lg:col-span-7 bg-brand-secondary border border-brand-border rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Top border ambient glow */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-purple to-transparent" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                        {t.nameLabel} <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-dim focus:outline-none transition-colors"
                        placeholder={lang === 'en' ? "John Doe" : "الاسم الثنائي"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                        {t.emailLabel} <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-dim focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-dim focus:outline-none transition-colors"
                      placeholder={lang === 'en' ? "Acme Corp" : "اسم شركتك أو جهتك"}
                    />
                  </div>

                  {/* Multiselect Service items */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                      {t.selectServices}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {servicesData.map((s) => {
                        const isChecked = selectedServices.includes(s.id);
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => handleServiceToggle(s.id)}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              isChecked
                                ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)] font-semibold'
                                : 'bg-brand-card border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-card-hover'
                            }`}
                          >
                            <span>{s.title[lang].split(' ')[0]}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                      {t.budgetLabel}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                      {[
                        { id: 'under-10k', label: '$5k - $10k' },
                        { id: '10k-25k', label: '$10k - $25k' },
                        { id: '25k-50k', label: '$25k - $50k' },
                        { id: 'above-50k', label: '$50k+' },
                      ].map((b) => (
                        <button
                           type="button"
                           key={b.id}
                           onClick={() => setBudget(b.id)}
                           className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all text-center cursor-pointer ${
                             budget === b.id
                               ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                               : 'bg-brand-card border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-card-hover'
                           }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-mono text-brand-dim uppercase block">
                      {t.messageLabel} <span className="text-brand-cyan">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-dim focus:outline-none transition-colors resize-none"
                      placeholder={lang === 'en' ? "Describe features, timeline, and core goals..." : "اشرح لنا متطلبات مشروعك، الأهداف الأساسية وموعد الإطلاق..."}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>{t.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.submitBtn}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400/20 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Check className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-2.5 max-w-md mx-auto">
                    <h3 className="text-2xl font-display font-bold text-brand-text tracking-tight">
                      {lang === 'en' ? "Inquiry Transmitted!" : "تم استلام طلبك بنجاح!"}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {t.successMsg}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-card hover:bg-brand-card-hover border border-brand-border text-sm font-semibold text-brand-muted hover:text-brand-text transition-all cursor-pointer"
                  >
                    {lang === 'en' ? "Submit Another Inquiry" : "إرسال طلب آخر"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Local Leads CRM Database Viewer (Toggled Drawer) */}
        <AnimatePresence>
          {showCRM && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-brand-secondary border border-brand-border rounded-2xl p-6 overflow-hidden shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-brand-border pb-4">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-brand-cyan animate-pulse" />
                  <h4 className="text-sm font-bold font-mono text-brand-text tracking-wider">
                    {lang === 'en' ? "OXA CLIENT PROJECT PIPELINE" : "بوابة متابعة طلبات العملاء الحية"}
                  </h4>
                </div>
                <span className="text-[10px] bg-brand-cyan/15 border border-brand-cyan/25 text-brand-cyan px-2 py-0.5 rounded-full font-mono font-bold">
                  {leads.length} {lang === 'en' ? 'ACTIVE LEADS' : 'طلبات نشطة'}
                </span>
              </div>

              {leads.length === 0 ? (
                <div className="py-8 text-center text-brand-dim font-mono text-xs">
                  {lang === 'en' ? "NO INCOMING CLIENT LEADS FOUND. SUBMIT FORM TO LOG." : "لا توجد طلبات واردة حالياً. أرسل نموذج الاتصال لتظهر هنا."}
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {leads.map((lead, idx) => {
                    // Seed dynamic status for each lead to look ultra professional
                    const statuses = [
                      { text: lang === 'en' ? 'In Review' : 'قيد المراجعة', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
                      { text: lang === 'en' ? 'Consultation Booked' : 'تم حجز المقابلة', color: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20' },
                      { text: lang === 'en' ? 'Proposal Ready' : 'العرض الفني جاهز', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' }
                    ];
                    const leadStatus = statuses[idx % statuses.length];

                    return (
                      <div key={lead.id} className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover rounded-xl p-4 flex flex-col md:flex-row justify-between gap-4 transition-all shadow-sm">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-xs font-bold font-mono text-brand-cyan">{lead.id}</span>
                            <span className="text-sm font-semibold text-brand-text">{lead.name}</span>
                            <span className="text-xs text-brand-muted">({lead.email})</span>
                            {lead.company && <span className="text-xs text-brand-dim font-medium">@ {lead.company}</span>}
                            <span className={`text-[10px] border px-2 py-0.5 rounded-full font-mono font-semibold ${leadStatus.color}`}>
                              {leadStatus.text}
                            </span>
                            <span className="text-[10px] font-mono text-brand-dim bg-brand-secondary border border-brand-border px-1.5 py-0.5 rounded ml-auto">{lead.createdAt}</span>
                          </div>
                          
                          <p className="text-xs text-brand-text leading-relaxed font-sans mt-2 italic bg-brand-secondary p-3 rounded-lg border border-brand-border">
                            "{lead.message}"
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {lead.services.map((ser, i) => (
                              <span key={i} className="text-[9px] font-mono font-medium text-brand-purple bg-brand-purple/5 border border-brand-purple/10 px-2 py-0.5 rounded-md">
                                {ser}
                              </span>
                            ))}
                            <span className="text-[9px] font-mono font-bold text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-md">
                              BUDGET: {lead.budget.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="text-brand-dim hover:text-red-400 p-1.5 rounded-lg hover:bg-brand-secondary transition-all self-end md:self-center cursor-pointer"
                          title={lang === 'en' ? 'Delete lead' : 'حذف الطلب'}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
}
