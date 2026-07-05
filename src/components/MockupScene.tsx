import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Briefcase, Users, CheckSquare, MessageSquare, FileBarChart2, Settings, ChevronDown, Monitor } from 'lucide-react';
import { Language } from '../types';

interface MockupSceneProps {
  lang: Language;
  theme?: 'dark' | 'light';
}

export default function MockupScene({ lang, theme = 'dark' }: MockupSceneProps) {
  const [analyticsData, setAnalyticsData] = useState([40, 55, 48, 70, 62, 85, 78, 95]);
  const [satisfactionRate, setSatisfactionRate] = useState(99);
  const [isUpdating, setIsUpdating] = useState(false);
  const isRtl = lang === 'ar';
  const isLight = theme === 'light';

  // Periodic subtle updates to show it is a live interactive platform
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setAnalyticsData(prev => {
          const next = [...prev.slice(1)];
          const lastVal = prev[prev.length - 1];
          const change = Math.floor(Math.random() * 20) - 10;
          const newVal = Math.max(30, Math.min(100, lastVal + change));
          return [...next, newVal];
        });
        setSatisfactionRate(prev => {
          const delta = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
          return Math.max(97, Math.min(100, prev + delta));
        });
        setIsUpdating(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // SVG Chart path calculation
  const getSvgPath = (data: number[]) => {
    const width = 280;
    const height = 90;
    const step = width / (data.length - 1);
    const maxVal = 100;
    
    return data.reduce((path, val, idx) => {
      const x = idx * step;
      // invert y (0 is top of screen)
      const y = height - (val / maxVal) * (height - 10);
      return path + `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
    }, '');
  };

  const getAreaSvgPath = (data: number[]) => {
    const width = 280;
    const height = 90;
    const step = width / (data.length - 1);
    const maxVal = 100;
    const pointsPath = getSvgPath(data);
    
    // Connect to bottom right then bottom left
    const lastX = width;
    const lastY = height;
    return `${pointsPath} L ${lastX} ${lastY} L 0 ${height} Z`;
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center py-10">
      
      {/* Decorative ambient glowing background matching the screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.85, 0.5],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[20%] right-[10%] w-72 h-72 bg-brand-cyan/20 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.75, 0.4],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-brand-purple/20 rounded-full blur-[90px]" 
        />
      </div>

      {/* Main 3D Floating container */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 5, rotateY: -5 }}
        animate={{ 
          opacity: 1, 
          y: [0, -12, 0],
          rotateX: [1, -2, 1],
          rotateY: [-1.5, 1.5, -1.5]
        }}
        transition={{ 
          opacity: { duration: 1, ease: 'easeOut' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="relative w-full aspect-[4/3] flex items-center justify-center perspective-[1200px]"
      >
        
        {/* LAPTOP MOCKUP (Perspective tilted) */}
        <div className={`relative w-[85%] aspect-[1.6] rounded-2xl p-[2px] overflow-hidden transform rotate-x-2 -rotate-y-3 transition-all duration-300 ${
          isLight
            ? 'bg-gradient-to-b from-[#f1f5f9] to-[#cbd5e1] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.15)] border border-slate-300/40'
            : 'bg-gradient-to-b from-[#1c223c] to-[#0a0d1e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10'
        }`}>
          
          {/* Bezel inner background */}
          <div className={`w-full h-full rounded-xl flex flex-col p-1.5 overflow-hidden relative transition-colors duration-300 ${
            isLight ? 'bg-[#f8fafc]' : 'bg-[#050715]'
          }`}>
            
            {/* Top Bar / Notch */}
            <div className={`w-full h-4 flex items-center justify-between px-3 text-[9px] font-mono pb-1 transition-colors duration-300 ${
              isLight ? 'text-slate-500 border-b border-slate-200' : 'text-gray-500 border-b border-white/5'
            }`}>
              <div className="flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1">
                <Monitor className="w-2.5 h-2.5" />
                <span>oxa-cloud-instance-01</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${isUpdating ? 'animate-ping' : ''}`} />
                <span className="text-[8px] text-emerald-500 font-bold">ONLINE</span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* Dashboard Sidebar */}
              <div className={`w-[24%] p-1.5 flex flex-col justify-between transition-colors duration-300 ${
                isLight ? 'border-r border-slate-200 bg-[#ffffff]' : 'border-r border-white/5 bg-[#040510]/80'
              }`}>
                <div className="space-y-3">
                  {/* Local logo */}
                  <div className="flex items-center gap-1 px-1">
                    <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center p-[0.5px]">
                      <span className="text-[7px] font-bold text-white leading-none">&lt;&gt;</span>
                    </div>
                    <span className={`text-[9px] font-bold tracking-wider transition-colors duration-300 ${isLight ? 'text-slate-800' : 'text-white'}`}>OXA CODE</span>
                  </div>

                  {/* Sidebar Links */}
                  <div className="space-y-0.5">
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard', active: true },
                      { icon: Briefcase, label: 'Projects' },
                      { icon: Users, label: 'Clients' },
                      { icon: CheckSquare, label: 'Tasks' },
                      { icon: MessageSquare, label: 'Messages' },
                      { icon: FileBarChart2, label: 'Reports' },
                      { icon: Settings, label: 'Settings' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-1.5 px-1.5 py-1 rounded-md text-[8px] font-medium transition-all duration-300 ${
                          item.active
                            ? isLight 
                              ? 'bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 text-slate-900 border-l-[1.5px] border-brand-blue font-bold shadow-sm'
                              : 'bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white border-l-[1.5px] border-brand-cyan'
                            : isLight
                              ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-50'
                              : 'text-gray-500 hover:text-white'
                        }`}
                      >
                        <item.icon className={`w-2.5 h-2.5 ${item.active ? (isLight ? 'text-brand-blue' : 'text-brand-cyan') : (isLight ? 'text-slate-400' : 'text-gray-500')}`} />
                        <span className="hidden sm:inline">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`text-[7px] font-mono px-1 transition-colors duration-300 ${isLight ? 'text-slate-450' : 'text-gray-600'}`}>
                  v2.4.0-stable
                </div>
              </div>

              {/* Dashboard Content Panel */}
              <div className="flex-1 p-2.5 overflow-y-auto space-y-2.5">
                
                {/* Header bar of Dashboard */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className={`text-[10px] font-bold font-display transition-colors duration-300 ${isLight ? 'text-slate-800' : 'text-white'}`}>Dashboard</h4>
                    <p className={`text-[7px] transition-colors duration-300 ${isLight ? 'text-slate-400' : 'text-gray-500'}`}>Live Workspace Diagnostics</p>
                  </div>
                  <div className={`flex items-center gap-1 border rounded px-1 py-0.5 text-[7px] font-mono transition-all duration-300 ${
                    isLight ? 'bg-white border-slate-200 text-slate-600 shadow-sm' : 'bg-white/5 border border-white/5 text-gray-400'
                  }`}>
                    <span>This Year</span>
                    <ChevronDown className="w-2 h-2" />
                  </div>
                </div>

                {/* Grid metrics cards */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { title: 'Total Projects', value: '120+' },
                    { title: 'Happy Clients', value: '80+' },
                    { title: 'Years Experience', value: '10+' },
                    { title: 'Countries', value: '15+' },
                  ].map((card, idx) => (
                    <div key={idx} className={`rounded-lg p-1.5 flex flex-col justify-between transition-all duration-300 ${
                      isLight 
                        ? 'bg-white border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]' 
                        : 'bg-[#0b0e25] border border-white/5'
                    }`}>
                      <span className={`text-[6px] uppercase tracking-wider block transition-colors duration-300 ${isLight ? 'text-slate-450' : 'text-gray-500'}`}>{card.title}</span>
                      <span className={`text-[10px] font-bold mt-1 transition-colors duration-300 ${isLight ? 'text-slate-800' : 'text-white'}`}>{card.value}</span>
                    </div>
                  ))}
                </div>

                {/* Chart Section and Satisfaction circle */}
                <div className="grid grid-cols-3 gap-2">
                  
                  {/* SVG Chart Panel */}
                  <div className={`col-span-2 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                    isLight 
                      ? 'bg-white border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]' 
                      : 'bg-[#0b0e25] border border-white/5'
                  }`}>
                    <div className="flex items-center justify-between z-10">
                      <span className={`text-[7px] font-semibold transition-colors duration-300 ${isLight ? 'text-slate-500' : 'text-gray-400'}`}>Project Analytics</span>
                      <div className={`flex items-center gap-1 font-mono text-[6px] transition-colors duration-300 ${isLight ? 'text-brand-blue' : 'text-brand-cyan'}`}>
                        <span className={`w-1 h-1 rounded-full animate-pulse ${isLight ? 'bg-brand-blue' : 'bg-brand-cyan'}`} />
                        <span>Real-time Active</span>
                      </div>
                    </div>

                    {/* SVG Chart Render */}
                    <div className="h-20 w-full relative mt-1">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={isLight ? "#2d9cdb" : "#00f0ff"} stopOpacity={isLight ? "0.2" : "0.45"} />
                            <stop offset="100%" stopColor={isLight ? "#2d9cdb" : "#00f0ff"} stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={isLight ? "#7c3aed" : "#7000ff"} />
                            <stop offset="50%" stopColor={isLight ? "#2d9cdb" : "#00f0ff"} />
                            <stop offset="100%" stopColor={isLight ? "#4f46e5" : "#2563eb"} />
                          </linearGradient>
                        </defs>

                        {/* Grid Lines */}
                        <line x1="0" y1="20" x2="280" y2="20" stroke={isLight ? "rgba(15,23,42,0.04)" : "rgba(255,255,255,0.03)"} strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="280" y2="50" stroke={isLight ? "rgba(15,23,42,0.04)" : "rgba(255,255,255,0.03)"} strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="280" y2="80" stroke={isLight ? "rgba(15,23,42,0.04)" : "rgba(255,255,255,0.03)"} strokeWidth="0.5" />

                        {/* Area Fill */}
                        <path d={getAreaSvgPath(analyticsData)} fill="url(#chartGradient)" className="transition-all duration-500 ease-in-out" />

                        {/* Stroke Line */}
                        <path d={getSvgPath(analyticsData)} fill="none" stroke="url(#strokeGradient)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 ease-in-out" />

                        {/* Dot Highlights */}
                        {analyticsData.map((val, idx) => {
                          const width = 280;
                          const height = 90;
                          const step = width / (analyticsData.length - 1);
                          const x = idx * step;
                          const y = height - (val / 100) * (height - 10);
                          const isLast = idx === analyticsData.length - 1;

                          return (
                            <g key={idx}>
                              <circle
                                cx={x}
                                cy={y}
                                r={isLast ? 3.5 : 2}
                                className={`${isLight ? 'fill-brand-blue' : 'fill-brand-cyan'} transition-all duration-500`}
                                stroke={isLight ? "#ffffff" : "#050715"}
                                strokeWidth="1.5"
                              />
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    {/* X-Axis labels */}
                    <div className={`flex justify-between items-center text-[6px] mt-1 font-mono transition-colors duration-300 ${isLight ? 'text-slate-400' : 'text-gray-500'}`}>
                      {months.map((m, i) => (
                        <span key={i}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Radial Satisfaction Meter */}
                  <div className={`rounded-lg p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden transition-all duration-300 ${
                    isLight 
                      ? 'bg-white border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]' 
                      : 'bg-[#0b0e25] border border-white/5'
                  }`}>
                    <span className={`text-[7px] font-semibold block w-full text-left transition-colors duration-300 ${isLight ? 'text-slate-500' : 'text-gray-400'}`}>Client Satisfaction</span>

                    {/* Interactive Gauge */}
                    <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="25"
                          className={`stroke-[4] fill-none transition-colors duration-300 ${isLight ? 'stroke-slate-100' : 'stroke-white/5'}`}
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="25"
                          className={`${isLight ? 'stroke-brand-blue' : 'stroke-brand-cyan'} stroke-[4.5] fill-none`}
                          strokeDasharray="157" // 2 * PI * r = 2 * 3.14159 * 25 = 157
                          animate={{ strokeDashoffset: 157 - (157 * satisfactionRate) / 100 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          strokeLinecap="round"
                          style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 4px rgba(0,240,255,0.6))' }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-[11px] font-bold font-display leading-none transition-colors duration-300 ${isLight ? 'text-slate-800' : 'text-white'}`}>{satisfactionRate}%</span>
                        <span className={`text-[5px] mt-0.5 leading-none font-bold tracking-wider transition-colors duration-300 ${isLight ? 'text-brand-blue' : 'text-brand-cyan'}`}>SATISFIED</span>
                      </div>
                    </div>

                    {/* Satisfaction legend */}
                    <div className={`flex gap-2 justify-center text-[5.5px] transition-colors duration-300 ${isLight ? 'text-slate-500' : 'text-gray-400'}`}>
                      <div className="flex items-center gap-0.5">
                        <span className={`w-1 h-1 rounded-full ${isLight ? 'bg-brand-blue' : 'bg-brand-cyan'}`} />
                        <span>Satisfied</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-brand-purple" />
                        <span>Repeat</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* LAPTOP BASE AND SHADOW */}
        <div className={`absolute bottom-[23%] left-[10%] w-[75%] h-[4%] rounded-b-xl transform rotate-x-2 -rotate-y-3 z-10 transition-all duration-300 ${
          isLight
            ? 'bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] border-b-[3px] border-[#94a3b8] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.1)]'
            : 'bg-gradient-to-b from-[#161a32] to-[#010208] border-b-[3px] border-[#2c345b] shadow-2xl'
        }`} />

        {/* MOBILE APP MOCKUP (Floating overlay, slightly overlapping the laptop on the right) */}
        <motion.div
          animate={{
            y: [0, -22, 0],
            rotateZ: [-0.5, 2.5, -0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute bottom-[8%] right-[8%] w-[24%] aspect-[0.52] rounded-[22px] p-[1.5px] overflow-hidden z-20 flex flex-col transform rotate-x-1 rotate-y-3 transition-all duration-300 ${
            isLight
              ? 'bg-gradient-to-b from-[#cbd5e1] to-[#cbd5e1] shadow-[0_20px_40px_rgba(15,23,42,0.1)] border border-slate-300'
              : 'bg-gradient-to-b from-[#13172e] to-[#040614] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/10'
          }`}
        >
          {/* Bezel inner background */}
          <div className={`w-full h-full rounded-[21px] flex flex-col p-1.5 overflow-hidden relative transition-colors duration-300 ${
            isLight ? 'bg-[#ffffff]' : 'bg-[#040510]'
          }`}>
            
            {/* Phone Notch */}
            <div className="w-full h-3 flex justify-center items-center relative">
              <div className={`w-10 h-2 rounded-full absolute -top-1 border ${isLight ? 'bg-slate-800 border-slate-200' : 'bg-black border-white/5'}`} />
            </div>

            {/* Mobile Header */}
            <div className={`flex justify-between items-center px-1 text-[6px] font-mono mt-0.5 transition-colors duration-300 ${isLight ? 'text-slate-400' : 'text-gray-500'}`}>
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span className={`w-2.5 h-1.5 rounded-sm border ${isLight ? 'border-slate-300 bg-emerald-500' : 'border-gray-500 bg-emerald-400'}`} />
              </div>
            </div>

            {/* Welcome message */}
            <div className={`px-1 mt-2.5 space-y-0.5 ${isRtl ? 'text-right' : 'text-left'}`}>
              <span className={`text-[6px] uppercase tracking-wider block font-bold leading-none ${isLight ? 'text-brand-blue' : 'text-brand-cyan'}`}>OXA MOBILE</span>
              <h5 className={`text-[8px] font-bold font-display leading-none mt-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>Welcome Back!</h5>
              <p className={`text-[5.5px] leading-none ${isLight ? 'text-slate-400' : 'text-gray-500'}`}>Active workspace trackers.</p>
            </div>

            {/* Task state list cards inside Mobile */}
            <div className="space-y-1 mt-2 flex-1">
              {[
                { title: 'In Progress', count: '24', color: isLight ? 'text-amber-600' : 'text-yellow-400', progress: '65%' },
                { title: 'Completed', count: '18', color: isLight ? 'text-emerald-600' : 'text-emerald-400', progress: '100%' },
                { title: 'New Tasks', count: '6', color: isLight ? 'text-brand-blue' : 'text-brand-cyan', progress: '15%' },
              ].map((item, idx) => (
                <div key={idx} className={`rounded-lg p-1.5 flex flex-col gap-1 transition-all duration-300 ${
                  isLight 
                    ? 'bg-slate-50 border border-slate-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:bg-slate-100/50' 
                    : 'bg-[#0b0e25]/90 border border-white/5 hover:border-white/10'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[6.5px] font-medium ${isLight ? 'text-slate-500' : 'text-gray-400'}`}>{item.title}</span>
                    <span className={`text-[8px] font-bold ${item.color}`}>{item.count}</span>
                  </div>
                  {/* Miniature progress bar */}
                  <div className={`w-full h-1 rounded-full overflow-hidden ${isLight ? 'bg-slate-200/50' : 'bg-white/5'}`}>
                    <div className={`h-full ${isLight ? 'bg-gradient-to-r from-brand-purple to-brand-blue' : 'bg-gradient-to-r from-brand-purple to-brand-cyan'}`} style={{ width: item.progress }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Sparkline at bottom of Phone */}
            <div className={`h-8 w-full rounded-lg p-1 mt-2 relative overflow-hidden transition-all duration-300 ${
              isLight ? 'bg-slate-50 border border-slate-150' : 'bg-[#080a1d] border border-white/5'
            }`}>
              <span className={`text-[5px] font-mono absolute top-1 left-1.5 ${isLight ? 'text-slate-400' : 'text-gray-500'}`}>LIVE SPEED</span>
              <svg className="w-full h-full overflow-visible mt-1" viewBox="0 0 100 20">
                <path
                  d="M0,15 L15,12 L30,16 L45,8 L60,11 L75,4 L90,12 L100,6"
                  fill="none"
                  stroke={isLight ? "#4f46e5" : "#00f0ff"}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0,15 L15,12 L30,16 L45,8 L60,11 L75,4 L90,12 L100,6 L100,20 L0,20 Z"
                  fill={isLight ? "rgba(79, 70, 229, 0.08)" : "rgba(0, 240, 255, 0.15)"}
                />
              </svg>
            </div>

          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}
