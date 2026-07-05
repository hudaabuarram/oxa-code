import { ServiceItem, MetricItem, ProcessStep, PortfolioItem } from './types';

export const translationStrings = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navAbout: "About Us",
    navContact: "Contact",
    startProject: "Start Your Project",
    seeWork: "See Our Work",
    taglineBadge: "WE BUILD DIGITAL SOLUTIONS",
    heroTitlePart1: "We Build ",
    heroTitlePart2: "Software ",
    heroTitlePart3: "That Drives ",
    heroTitleGradient: "Business Forward",
    heroDescription: "OxaCode is a full-stack development agency creating powerful web, mobile and digital solutions that help businesses grow, innovate and lead in the digital world.",
    
    servicesSub: "OUR SERVICES",
    servicesTitle: "Complete Digital Solutions",
    servicesDesc: "End-to-end services to help your business grow in the digital world.",
    
    processSub: "OUR PROCESS",
    processTitle: "From Idea to Success",
    
    portfolioSub: "OUR WORK",
    portfolioTitle: "Innovations We've Brought to Life",
    portfolioDesc: "Browse our latest digital creations built for forward-thinking brands.",
    
    aboutSub: "ABOUT US",
    aboutTitle: "We Are Pioneers in Digital Craftsmanship",
    aboutDesc: "At Oxa Code, we blend engineering excellence with visual artistry to build software that creates lasting impact.",
    aboutValuesTitle: "Our Core Values",
    
    contactSub: "GET IN TOUCH",
    contactTitle: "Let's Build Something Great",
    contactDesc: "Have an ambitious project in mind? Let's connect and design the future together.",
    
    allCategories: "All Projects",
    categoryWeb: "Web Apps",
    categoryMobile: "Mobile Apps",
    categoryAI: "AI & Automation",
    categoryDesign: "UI/UX Design",
    
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    companyLabel: "Company Name (Optional)",
    messageLabel: "Project Details / Message",
    selectServices: "Select Services Needed",
    budgetLabel: "Estimated Budget",
    submitBtn: "Send Message",
    submitting: "Sending...",
    successMsg: "Thank you! We've received your request and will contact you within 24 hours.",
    
    wizardTitle: "Project Configurator",
    wizardDesc: "Estimate your project budget & scope in real-time.",
    wizardNext: "Next Step",
    wizardBack: "Previous Step",
    wizardFinish: "Submit Configuration",
    estimatedCost: "Estimated Development Range",
    timelineLabel: "Project Timeline",
    weeks: "weeks",
    
    techStack: "Tech Stack & Ecosystem",
    viewDetails: "View Details",
    backToHome: "Back to Home",
    footerText: "© 2026 Oxa Code. All rights reserved. Crafting infinite software solutions.",
    leadsViewer: "Client Portal & Submissions"
  },
  ar: {
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navPortfolio: "أعمالنا",
    navAbout: "من نحن",
    navContact: "اتصل بنا",
    startProject: "ابدأ مشروعك",
    seeWork: "شاهد أعمالنا",
    taglineBadge: "نصنع الحلول الرقمية المتكاملة",
    heroTitlePart1: "نحن نبني ",
    heroTitlePart2: "البرمجيات ",
    heroTitlePart3: "التي تدفع ",
    heroTitleGradient: "أعمالك نحو القمة",
    heroDescription: "أوكسا كود هي وكالة تطوير متكاملة تصنع حلولاً برمجية قوية للويب والهاتف وحلولاً رقمية تساعد الشركات على النمو والابتكار والريادة في العالم الرقمي.",
    
    servicesSub: "خدماتنا المتميزة",
    servicesTitle: "حلول رقمية متكاملة",
    servicesDesc: "خدمات شاملة من البداية للنهاية لمساعدة أعمالك على النمو والازدهار في العالم الرقمي.",
    
    processSub: "منهجية العمل",
    processTitle: "من الفكرة إلى النجاح",
    
    portfolioSub: "معرض أعمالنا",
    portfolioTitle: "ابتكارات برمجية حققت النجاح",
    portfolioDesc: "تصفح أحدث مشاريعنا الرقمية المصممة للشركات والمؤسسات الطموحة.",
    
    aboutSub: "من نحن",
    aboutTitle: "رواد في صياغة الحلول الرقمية والبرمجية",
    aboutDesc: "في أوكسا كود، نمزج بين التميز الهندسي والفن البصري لبناء برمجيات متطورة تترك أثراً دائماً.",
    aboutValuesTitle: "قيمنا الأساسية",
    
    contactSub: "تواصل معنا",
    contactTitle: "دعنا نصنع شيئاً رائعاً معاً",
    contactDesc: "هل لديك فكرة مشروع طموحة؟ دعنا نتواصل لنصنع مستقبل أعمالك البرمجية اليوم.",
    
    allCategories: "جميع المشاريع",
    categoryWeb: "تطبيقات ويب",
    categoryMobile: "تطبيقات الهاتف",
    categoryAI: "الذكاء الاصطناعي",
    categoryDesign: "تصاميم UI/UX",
    
    nameLabel: "الاسم الكريم",
    emailLabel: "البريد الإلكتروني",
    companyLabel: "اسم الشركة (اختياري)",
    messageLabel: "تفاصيل المشروع / الرسالة",
    selectServices: "اختر الخدمات المطلوبة",
    budgetLabel: "الميزانية المتوقعة",
    submitBtn: "إرسال الرسالة",
    submitting: "جاري الإرسال...",
    successMsg: "شكرًا لك! لقد تلقينا طلبك وسنتواصل معك خلال 24 ساعة.",
    
    wizardTitle: "مهيئ المشاريع التفاعلي",
    wizardDesc: "احسب التكلفة التقديرية وميزانية مشروعك في الوقت الفعلي.",
    wizardNext: "الخطوة التالية",
    wizardBack: "الخطوة السابقة",
    wizardFinish: "إرسال المواصفات",
    estimatedCost: "نطاق التكلفة التقديري لتطوير مشروعك",
    timelineLabel: "المدة الزمنية المتوقعة",
    weeks: "أسابيع",
    
    techStack: "التقنيات والنظام البرمجي",
    viewDetails: "عرض التفاصيل",
    backToHome: "العودة للرئيسية",
    footerText: "© 2026 أوكسا كود. جميع الحقوق محفوظة. نصنع حلولاً برمجية لا حدود لها.",
    leadsViewer: "بوابة العملاء والطلبات المستقبلة"
  }
};

export const metricsData: MetricItem[] = [
  {
    id: 'projects',
    value: '120+',
    label: { en: "Projects Delivered", ar: "مشاريع تم تسليمها" },
    iconName: 'Rocket',
    glowColor: 'cyan'
  },
  {
    id: 'clients',
    value: '80+',
    label: { en: "Happy Clients", ar: "عملاء سعداء" },
    iconName: 'Users',
    glowColor: 'purple'
  },
  {
    id: 'experience',
    value: '10+',
    label: { en: "Years of Experience", ar: "سنوات من الخبرة" },
    iconName: 'Award',
    glowColor: 'blue'
  },
  {
    id: 'countries',
    value: '15+',
    label: { en: "Countries Served", ar: "دولة نخدمها" },
    iconName: 'Globe',
    glowColor: 'cyan'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'web',
    iconName: 'Code',
    title: { en: "Web Development", ar: "تطوير الويب المتكامل" },
    description: { 
      en: "Modern, fast and scalable web applications customized to your enterprise needs.", 
      ar: "تطبيقات ويب حديثة، فائقة السرعة وقابلة للتوسع ومخصصة لتلبية احتياجات أعمالك." 
    },
    longDescription: {
      en: "We build top-tier, search-engine-optimized, responsive web platforms using React, Node.js, and cutting-edge cloud tech. Our focus is absolute speed, flawless user experience, and architecture that scales with your growth.",
      ar: "نقوم ببناء منصات ويب ممتازة ومحسنة لمحركات البحث، متجاوبة بالكامل باستخدام React و Node.js وأحدث تقنيات السحاب. نركز على السرعة الفائقة، تجربة مستخدم لا مثيل لها، وبنية برمجية تتوسع مع نموك."
    },
    features: {
      en: ["Custom SPAs & SSR Apps", "E-commerce & SaaS Platforms", "API Integrations", "Database Architecture", "Responsive Desktop & Mobile Layouts"],
      ar: ["تطبيقات مخصصة SPA و SSR", "منصات التجارة الإلكترونية و SaaS", "ربط وتطوير برمجيات الـ APIs", "بناء وتصميم قواعد البيانات الشاملة", "تصاميم متجاوبة بالكامل لجميع الشاشات"]
    },
    glowColor: 'cyan'
  },
  {
    id: 'mobile',
    iconName: 'Smartphone',
    title: { en: "Mobile App Development", ar: "تطوير تطبيقات الهواتف" },
    description: { 
      en: "Custom mobile apps for iOS and Android designed for stellar performance.", 
      ar: "تطبيقات هاتف ذكي مخصصة ومصقولة لأنظمة iOS و Android تضمن تجربة مستخدم مبهرة." 
    },
    longDescription: {
      en: "Using cross-platform frameworks like Flutter/React Native or native languages, we design and code native-grade mobile applications with seamless animation, offline capability, push notifications, and store deployment support.",
      ar: "باستخدام تقنيات ممتازة مثل Flutter و React Native أو اللغات الأصلية، نصمم ونطور تطبيقات هاتف بمستوى أصيل مع رسوم متحركة سلسة، دعم العمل دون اتصال، الإشعارات الفورية، ودعم الإطلاق على المتاجر."
    },
    features: {
      en: ["Native iOS & Android Development", "Flutter & React Native Cross-platform", "Elegant UI Transitions & Gestures", "App Store & Play Store Publishing", "Secure Off-line Storage & Syncing"],
      ar: ["تطوير أصيل لـ iOS و Android", "تطبيقات متعددة الأنظمة بـ Flutter", "انتقالات بصرية وتفاعلات لمس سلسة", "النشر الكامل على متجر App Store و Play Store", "مزامنة البيانات الآمنة والعمل بدون إنترنت"]
    },
    glowColor: 'purple'
  },
  {
    id: 'ai',
    iconName: 'Cpu',
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: { 
      en: "Smart solutions that automate your business processes and leverage AI insights.", 
      ar: "حلول ذكية تعمل على أتمتة عملياتك التجارية وتستفيد من قوة نماذج الذكاء الاصطناعي." 
    },
    longDescription: {
      en: "Integrate powerful large language models (like Gemini API), machine learning pipelines, predictive analytics, and automated chat agents into your existing workflows to double operational efficiency and unlock hidden business value.",
      ar: "تكامل وتطوير نماذج ذكاء اصطناعي قوية (مثل Gemini API)، خطوط معالجة تعلم الآلة، التحليلات التنبؤية، والمساعدين الأذكياء المؤتمتين لتضاعف كفاءة العمل وتستخرج قيمة أعمالك المخفية."
    },
    features: {
      en: ["LLM & Gemini API Integration", "Robotic Process Automation (RPA)", "Smart Conversational Chatbots", "Predictive Analytics Models", "Automated Content & Report Gen"],
      ar: ["دمج وتخصيص نماذج Gemini API والذكاء الاصطناعي", "أتمتة العمليات الروبوتية (RPA)", "برمجة مساعدين محادثة أذكياء", "نماذج التحليل والتبصر التنبؤي للأعمال", "أتمتة صناعة التقارير والمحتوى الذكي"]
    },
    glowColor: 'pink'
  },
  {
    id: 'design',
    iconName: 'Palette',
    title: { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" },
    description: { 
      en: "Beautiful, user-centered designs that convert visitors into loyal advocates.", 
      ar: "تصاميم واجهات ومسارات مستخدم مذهلة، ترفع من نسبة التحول وتوفر سهولة فائقة." 
    },
    longDescription: {
      en: "Design is not just how it looks, but how it works. We perform deep user research, build interactive wireframes, establish robust design systems, and deliver highly polished visual assets that make your brand stand out.",
      ar: "التصميم ليس مجرد شكل، بل هو كيف تعمل الأشياء. نقوم بأبحاث عميقة للمستخدمين، بناء نماذج تفاعلية سلكية، تأسيس أنظمة تصميم شاملة، وتقديم تصاميم مذهلة تجعل علامتك التجارية تلمع."
    },
    features: {
      en: ["Detailed User Research & Mapping", "High-fidelity Wireframes & Prototypes", "Scalable Multi-platform Design Systems", "Interactive UI Motion & Micro-interactions", "Usability Testing & Conversion Optimization"],
      ar: ["أبحاث مستخدمين متقدمة ورسم الخرائط", "نماذج واجهات عالية الدقة وتفاعلية", "تأسيس أنظمة تصميم (Design Systems) متكاملة", "رسوم متحركة مخصصة وتفاعلات دقيقة", "اختبارات سهولة الاستخدام وزيادة معدل التحويل"]
    },
    glowColor: 'blue'
  },
  {
    id: 'marketing',
    iconName: 'Megaphone',
    title: { en: "Digital Marketing", ar: "التسويق الرقمي والنمو" },
    description: { 
      en: "Data-driven marketing campaigns that scale customer acquisition and presence.", 
      ar: "حملات تسويقية رقمية مبنية على تحليلات دقيقة تضمن انتشاراً واسعاً واكتساباً مستمراً للعملاء." 
    },
    longDescription: {
      en: "We build and execute tailored digital growth frameworks. From technical SEO that lands your product on page one to targeted marketing automations, we focus strictly on high return-on-investment and brand positioning.",
      ar: "نقوم ببناء وتنفيذ أطر نمو رقمي مخصصة. من السيو التقني (SEO) الذي يضع منتجك في الصفحة الأولى، إلى حملات التسويق المؤتمتة المستهدفة، نركز بشكل كامل على تحقيق عوائد استثمارية ممتازة."
    },
    features: {
      en: ["Technical & On-Page SEO Campaigns", "Conversion Rate Optimization (CRO)", "Tailored Customer Journey Analytics", "Email & Automations Setup", "Social Commerce Growth Strategies"],
      ar: ["حملات سيو (SEO) تقنية ومتقدمة للمواقع", "تحسين معدلات التحول وحث الزوار (CRO)", "إعداد تحليلات متقدمة لرحلة المستخدم", "أتمتة حملات البريد الإلكتروني الذكية", "استراتيجيات نمو التجارة الرقمية والاجتماعية"]
    },
    glowColor: 'purple'
  },
  {
    id: 'cloud',
    iconName: 'Cloud',
    title: { en: "Cloud Solutions", ar: "الحلول والبنية السحابية" },
    description: { 
      en: "Secure and scalable cloud infrastructure keeping your digital services online 24/7.", 
      ar: "بنية تحتية سحابية بالغة الأمان وفائقة المرونة تضمن تشغيل خدماتك طوال الساعة دون توقف." 
    },
    longDescription: {
      en: "Host your platforms confidently on secure, auto-scaling environments (AWS, GCP, Cloud Run). We implement DevOps automation, continuous integration and deployment (CI/CD) pipelines, and continuous monitoring to guarantee near 100% uptime.",
      ar: "استضف منصاتك بثقة تامة في بيئات سحابية مؤمنة ومرنة ذاتية التوسع (AWS, GCP, Cloud Run). نؤسس لك عمليات DevOps الذكية، خطوط النشر التلقائي (CI/CD)، والرقابة المستمرة لضمان تشغيل يقارب 100%."
    },
    features: {
      en: ["AWS & Google Cloud Setup", "Docker & Kubernetes Containerization", "Automated CI/CD Deployment Pipelines", "Auto-scaling & Disaster Recovery Setup", "Security Auditing & Hardening"],
      ar: ["إعداد وإدارة AWS و Google Cloud", "تغليف المنصات بـ Docker و Kubernetes", "بناء خطوط النشر التلقائي CI/CD المؤتمتة", "التوسع التلقائي وإدارة سيناريوهات الطوارئ", "فحص الأمان، الحماية وسد الثغرات"]
    },
    glowColor: 'green'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    id: 'discover',
    stepNumber: '01',
    title: { en: "Discover", ar: "الاكتشاف وفهم الأهداف" },
    description: { 
      en: "We dive deep into your business requirements, target audience, and project goals to build a bulletproof roadmap.", 
      ar: "نغوص في متطلبات عملك، جمهورك المستهدف، وأهداف مشروعك لبناء خارطة طريق برمجية واضحة ومثالية." 
    },
    iconName: 'Search'
  },
  {
    id: 'plan',
    stepNumber: '02',
    title: { en: "Plan", ar: "التخطيط والهيكلة" },
    description: { 
      en: "We design robust tech architecture, wireframes, timelines, and select the optimal technology stacks for performance.", 
      ar: "نضع الهيكل التقني المناسب، المخططات المبدئية، ونحدد التقنيات المثلى لضمان أداء لا يضاهى واستقرار تام." 
    },
    iconName: 'FileText'
  },
  {
    id: 'design',
    stepNumber: '03',
    title: { en: "Design", ar: "تصميم تجربة المستخدم" },
    description: { 
      en: "We create interactive UI prototypes and a custom design system focusing on aesthetic brilliance and intuitive flows.", 
      ar: "نصنع نماذج واجهات تفاعلية مذهلة، ونظام تصميم موحد مع التركيز على الجاذبية البصرية والتدفقات السلسة." 
    },
    iconName: 'Compass'
  },
  {
    id: 'develop',
    stepNumber: '04',
    title: { en: "Develop", ar: "التطوير والبرمجة" },
    description: { 
      en: "Our engineers write clean, efficient, and thoroughly tested code, bringing the approved designs to life.", 
      ar: "يقوم مهندسو البرمجيات لدينا بكتابة أكواد برمجية نظيفة، فائقة الفعالية ومختبرة بالكامل لنبث الحياة في التصاميم." 
    },
    iconName: 'Code'
  },
  {
    id: 'launch',
    stepNumber: '05',
    title: { en: "Launch", ar: "الإطلاق والنشر" },
    description: { 
      en: "We handle secure deployment to high-performance cloud servers, perform final audits, and make the app live.", 
      ar: "نتولى عملية النشر الآمن على سيرفرات سحابية ممتازة، ونجري الفحوصات النهائية لنطلق مشروعك للعلن." 
    },
    iconName: 'CheckCircle'
  },
  {
    id: 'support',
    stepNumber: '06',
    title: { en: "Support", ar: "الدعم والتحسين المستمر" },
    description: { 
      en: "We provide round-the-clock monitoring, routine updates, optimization, and scale resources as your company grows.", 
      ar: "نقدم رقابة مستمرة على مدار الساعة، تحديثات دورية، تحسين الأداء، وتوسيع الموارد لتواكب نمو أعمالك." 
    },
    iconName: 'ShieldAlert'
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: { en: "AeroFin Dashboard", ar: "لوحة تحكم إيروفين المالية" },
    category: 'web',
    categoryLabel: { en: "Web App", ar: "تطبيق ويب" },
    description: { 
      en: "A real-time financial tracking dashboard managing million-dollar operations with analytics.", 
      ar: "لوحة تحكم مالية لحظية لتتبع وإدارة العمليات الاستثمارية الضخمة مع تحليلات ورسوم بيانية." 
    },
    longDescription: {
      en: "Built for a global venture firm, AeroFin handles multi-currency transactions, predictive portfolio yield modeling, automated report PDF generation, and real-time bank syncing with a secure server-side infrastructure.",
      ar: "تم تطويرها لشركة استثمار عالمية، تدعم إدارة المعاملات متعددة العملات، نمذجة عوائد المحافظ التنبؤية، توليد تقارير PDF مؤتمتة ومزامنة بنكية فورية في بيئة سحابية فائقة الأمان."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React 19", "Node.js", "Express", "D3.js", "PostgreSQL"],
    link: "#"
  },
  {
    id: '2',
    title: { en: "MedSync Patient App", ar: "تطبيق ميدسينك للمرضى والأطباء" },
    category: 'mobile',
    categoryLabel: { en: "Mobile App", ar: "تطبيق هاتف" },
    description: { 
      en: "Elegant mobile application for secure healthcare consultations, prescriptions, and chats.", 
      ar: "تطبيق هاتف ذكي مذهل للاستشارات الطبية الآمنة، إدارة الوصفات الدوائية ومحادثات الفيديو الفورية." 
    },
    longDescription: {
      en: "MedSync provides encrypted video streams between patient and certified physician, automated symptom checkers powered by AI, real-time medicine notifications, and full cloud syncing with medical record privacy compliance.",
      ar: "يوفر ميدسينك مكالمات فيديو مشفرة بالكامل بين المريض والطبيب المعتمد، فاحص ذكي للأعراض بالذكاء الاصطناعي، تذكيرات دورية بالجرعات الدوائية ومزامنة سحابية متوافقة مع معايير خصوصية السجلات الطبية العالمية."
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Dart", "Firebase", "WebRTC", "Google Cloud"],
    link: "#"
  },
  {
    id: '3',
    title: { en: "AI Content Studio", ar: "استوديو صناعة المحتوى بالذكاء الاصطناعي" },
    category: 'ai',
    categoryLabel: { en: "AI & Automation", ar: "الذكاء الاصطناعي" },
    description: { 
      en: "Automated multi-channel social media asset and text generation utilizing Gemini.", 
      ar: "منصة لإنشاء المنشورات والرسومات والحملات الإعلانية لمواقع التواصل مؤتمتة بالكامل عبر نماذج Gemini." 
    },
    longDescription: {
      en: "This suite connects to top platforms via APIs, allowing users to type a single prompt and receive high-end written articles, social media text, recommended hashtags, and generated high-quality images ready for automated publishing.",
      ar: "يتصل هذا النظام بالمنصات الاجتماعية الشهيرة عبر الـ APIs، ليمكن المستخدم من كتابة فكرة واحدة ليحصل على مقالات احترافية، نصوص تسويقية، وسوم مقترحة، وصور توليدية فائقة الجودة جاهزة للنشر الفوري."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Express", "Gemini SDK", "DALL-E API", "Tailwind CSS"],
    link: "#"
  },
  {
    id: '4',
    title: { en: "Veloce SaaS Platform", ar: "نظام فيلوتشي السحابي لفرق العمل" },
    category: 'web',
    categoryLabel: { en: "Web App", ar: "تطبيق ويب" },
    description: { 
      en: "High-performance team workspace with kanban, chat, Gantt, and file drive.", 
      ar: "بيئة عمل وتنسيق فائقة الأداء للفرق تضم لوحات كانبان، دردشة مباشرة، مخططات غانت ومساحة ملفات مشتركة." 
    },
    longDescription: {
      en: "Veloce is built with a sub-second reactive engine, allowing 10,000+ simultaneous users to collaborate live on boards, drag documents seamlessly, stream vocal channels, and monitor development tracks without lagging.",
      ar: "تم بناء فيلوتشي بمحرك استجابة فائق السرعة، يتيح لأكثر من 10,000 مستخدم متزامن التعاون المباشر على اللوحات، تبادل الملفات بسلاسة، فتح قنوات محادثات صوتية وتتبع مسار الإنتاج دون أي بطء."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["Vite", "Node.js", "WebSockets", "MongoDB", "Tailwind CSS"],
    link: "#"
  },
  {
    id: '5',
    title: { en: "Aura Zen Branding", ar: "الهوية البصرية وتجربة أورا زين" },
    category: 'design',
    categoryLabel: { en: "UI/UX Design", ar: "تصميم UI/UX" },
    description: { 
      en: "Holistic, minimalist design system and interactive mockups for a premium wellness brand.", 
      ar: "نظام تصميم شامل وهادئ ونماذج واجهات تفاعلية راقية لعلامة تجارية متخصصة في الصحة البدنية والنفسية." 
    },
    longDescription: {
      en: "We designed a bespoke visual identifier, color pairings, custom line art assets, typography pairings, and engineered a comprehensive, responsive mockup showcasing micro-interactions, smooth card wipes, and seamless page transitions.",
      ar: "قمنا بابتكار هوية بصرية مخصصة، تناسق ألوان، أيقونات خطية راقية، خطوط متناسقة، وصممنا واجهات تفاعلية كاملة مع رسوم متناهية الصغر لتوفير تجربة هادئة وفاخرة للمستخدمين."
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tech: ["Figma", "Adobe Illustrator", "Tailwind Theme", "Motion React"],
    link: "#"
  }
];

export const valuesData = [
  {
    iconName: 'Shield',
    title: { en: "Absolute Security", ar: "الأمان المطلق" },
    description: { 
      en: "Encryption-first software design ensuring database, customer credentials, and client IP are 100% fortified.",
      ar: "تصميم برمجيات يركز على التشفير أولاً لضمان حماية قواعد البيانات، بيانات الاعتماد، والملكية الفكرية للمشروع بنسبة 100%."
    }
  },
  {
    iconName: 'Zap',
    title: { en: "Stellar Performance", ar: "الأداء الفائق والسرعة" },
    description: { 
      en: "Millisecond reaction times, optimized static assets, lazy-loading, and responsive systems built to convert.",
      ar: "سرعة استجابة تقاس بالأجزاء من الثانية، صور وملفات محسنة، تحميل كسول، وأنظمة مصممة لزيادة المبيعات والتحول."
    }
  },
  {
    iconName: 'TrendingUp',
    title: { en: "Infinite Scalability", ar: "قابلية توسع لا متناهية" },
    description: { 
      en: "Microservice-ready frameworks and auto-scaling cloud databases that adjust effortlessly to millions of hits.",
      ar: "أطر عمل برمجية جاهزة للعمل السحابي وقواعد بيانات ذاتية التوسع تتكيف بسهولة مع ملايين الزيارات والعمليات المتزامنة."
    }
  }
];
