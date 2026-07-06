import $ from 'jquery';
import './index.css';

// ==========================================
// 1. DATASETS & TRANSLATIONS
// ==========================================

const translationStrings = {
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

const metricsData = [
  { id: 'projects', value: '120+', label: { en: "Projects Delivered", ar: "مشاريع تم تسليمها" }, iconName: 'rocket', glowColor: 'cyan' },
  { id: 'clients', value: '80+', label: { en: "Happy Clients", ar: "عملاء سعداء" }, iconName: 'users', glowColor: 'purple' },
  { id: 'experience', value: '10+', label: { en: "Years of Experience", ar: "سنوات من الخبرة" }, iconName: 'award', glowColor: 'blue' },
  { id: 'countries', value: '15+', label: { en: "Countries Served", ar: "دولة نخدمها" }, iconName: 'globe', glowColor: 'cyan' }
];

const servicesData = [
  {
    id: 'web',
    iconName: 'code',
    title: { en: "Web Development", ar: "تطوير الويب المتكامل" },
    description: { en: "Modern, fast and scalable web applications customized to your enterprise needs.", ar: "تطبيقات ويب حديثة، فائقة السرعة وقابلة للتوسع ومخصصة لتلبية احتياجات أعمالك." },
    longDescription: {
      en: "We build top-tier, search-engine-optimized, responsive web platforms using React, Node.js, and cutting-edge cloud tech. Our focus is absolute speed, flawless user experience, and architecture that scales with your growth.",
      ar: "نقوم ببناء منصات ويب ممتازة ومحسنة لمحركات البحث، متجاوبة بالكامل باستخدام React و Node.js وأحدث تقنيات السحاب. نركز على السرعة الفائقة، تجربة مستخدم لا مثيل لها، وبنية برمجية تتوسع مع نموك."
    },
    features: {
      en: ["Custom SPAs & SSR Apps", "E-commerce & SaaS Platforms", "API Integrations", "Database Architecture", "Responsive Desktop & Mobile Layouts"],
      ar: ["تطبيقات مخصصة SPA و SSR", "منصات التجارة الإلكترونية و SaaS", "ربط وتطوير برمجيات الـ APIs", "بناء وتصميم قواعد البيانات الشاملة", "تصاميم متجاوبة بالكامل لجميع الشاشات"]
    },
    glowColor: 'cyan',
    basePrice: { min: 12000, max: 25000 },
    baseWeeks: { min: 6, max: 12 }
  },
  {
    id: 'mobile',
    iconName: 'smartphone',
    title: { en: "Mobile App Development", ar: "تطوير تطبيقات الهواتف" },
    description: { en: "Custom mobile apps for iOS and Android designed for stellar performance.", ar: "تطبيقات هاتف ذكي مخصصة ومصقولة لأنظمة iOS و Android تضمن تجربة مستخدم مبهرة." },
    longDescription: {
      en: "Using cross-platform frameworks like Flutter/React Native or native languages, we design and code native-grade mobile applications with seamless animation, offline capability, push notifications, and store deployment support.",
      ar: "باستخدام تقنيات ممتازة مثل Flutter و React Native أو اللغات الأصلية، نصمم ونطور تطبيقات هاتف بمستوى أصيل مع رسوم متحركة سلسة، دعم العمل دون اتصال، الإشعارات الفورية، ودعم الإطلاق على المتاجر."
    },
    features: {
      en: ["Native iOS & Android Development", "Flutter & React Native Cross-platform", "Elegant UI Transitions & Gestures", "App Store & Play Store Publishing", "Secure Off-line Storage & Syncing"],
      ar: ["تطوير أصيل لـ iOS و Android", "تطبيقات متعددة الأنظمة بـ Flutter", "انتقالات بصرية وتفاعلات لمس سلسة", "النشر الكامل على متجر App Store و Play Store", "مزامنة البيانات الآمنة والعمل بدون إنترنت"]
    },
    glowColor: 'purple',
    basePrice: { min: 15000, max: 30000 },
    baseWeeks: { min: 8, max: 14 }
  },
  {
    id: 'ai',
    iconName: 'cpu',
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: { en: "Smart solutions that automate your business processes and leverage AI insights.", ar: "حلول ذكية تعمل على أتمتة عملياتك التجارية وتستفيد من قوة نماذج الذكاء الاصطناعي." },
    longDescription: {
      en: "Integrate powerful large language models (like Gemini API), machine learning pipelines, predictive analytics, and automated chat agents into your existing workflows to double operational efficiency and unlock hidden business value.",
      ar: "تكامل وتطوير نماذج ذكاء اصطناعي قوية (مثل Gemini API)، خطوط معالجة تعلم الآلة، التحليلات التنبؤية، والمساعدين الأذكياء المؤتمتين لتضاعف كفاءة العمل وتستخرج قيمة أعمالك المخفية."
    },
    features: {
      en: ["LLM & Gemini API Integration", "Robotic Process Automation (RPA)", "Smart Conversational Chatbots", "Predictive Analytics Models", "Automated Content & Report Gen"],
      ar: ["دمج وتخصيص نماذج Gemini API والذكاء الاصطناعي", "أتمتة العمليات الروبوتية (RPA)", "برمجة مساعدين محادثة أذكياء", "نماذج التحليل والتبصر التنبؤي للأعمال", "أتمتة صناعة التقارير والمحتوى الذكي"]
    },
    glowColor: 'pink',
    basePrice: { min: 10000, max: 22000 },
    baseWeeks: { min: 5, max: 10 }
  },
  {
    id: 'design',
    iconName: 'palette',
    title: { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" },
    description: { en: "Beautiful, user-centered designs that convert visitors into loyal advocates.", ar: "تصاميم واجهات ومسارات مستخدم مذهلة، ترفع من نسبة التحول وتوفر سهولة فائقة." },
    longDescription: {
      en: "Design is not just how it looks, but how it works. We perform deep user research, build interactive wireframes, establish robust design systems, and deliver highly polished visual assets that make your brand stand out.",
      ar: "التصميم ليس مجرد شكل، بل هو كيف تعمل الأشياء. نقوم بأبحاث عميقة للمستخدمين، بناء نماذج تفاعلية سلكية، تأسيس أنظمة تصميم شاملة، وتقديم تصاميم مذهلة تجعل علامتك التجارية تلمع."
    },
    features: {
      en: ["Detailed User Research & Mapping", "High-fidelity Wireframes & Prototypes", "Scalable Multi-platform Design Systems", "Interactive UI Motion & Micro-interactions", "Usability Testing & Conversion Optimization"],
      ar: ["أبحاث مستخدمين متقدمة ورسم الخرائط", "نماذج واجهات عالية الدقة وتفاعلية", "تأسيس أنظمة تصميم (Design Systems) متكاملة", "رسوم متحركة مخصصة وتفاعلات دقيقة", "اختبارات سهولة الاستخدام وزيادة معدل التحويل"]
    },
    glowColor: 'blue',
    basePrice: { min: 5000, max: 12000 },
    baseWeeks: { min: 3, max: 6 }
  },
  {
    id: 'marketing',
    iconName: 'megaphone',
    title: { en: "Digital Marketing", ar: "التسويق الرقمي والنمو" },
    description: { en: "Data-driven marketing campaigns that scale customer acquisition and presence.", ar: "حملات تسويقية رقمية مبنية على تحليلات دقيقة تضمن انتشاراً واسعاً واكتساباً مستمراً للعملاء." },
    longDescription: {
      en: "We build and execute tailored digital growth frameworks. From technical SEO that lands your product on page one to targeted marketing automations, we focus strictly on high return-on-investment and brand positioning.",
      ar: "نقوم ببناء وتنفيذ أطر نمو رقمي مخصصة. من السيو التقني (SEO) الذي يضع منتجك في الصفحة الأولى، إلى حملات التسويق المؤتمتة المستهدفة، نركز بشكل كامل على تحقيق عوائد استثمارية ممتازة."
    },
    features: {
      en: ["Technical & On-Page SEO Campaigns", "Conversion Rate Optimization (CRO)", "Tailored Customer Journey Analytics", "Email & Automations Setup", "Social Commerce Growth Strategies"],
      ar: ["حملات سيو (SEO) تقنية ومتقدمة للمواقع", "تحسين معدلات التحول وحث الزوار (CRO)", "إعداد تحليلات متقدمة لرحلة المستخدم", "أتمتة حملات البريد الإلكتروني الذكية", "استراتيجيات نمو التجارة الرقمية والاجتماعية"]
    },
    glowColor: 'purple',
    basePrice: { min: 4000, max: 9000 },
    baseWeeks: { min: 4, max: 8 }
  },
  {
    id: 'cloud',
    iconName: 'cloud',
    title: { en: "Cloud Solutions", ar: "الحلول والبنية السحابية" },
    description: { en: "Secure and scalable cloud infrastructure keeping your digital services online 24/7.", ar: "بنية تحتية سحابية بالغة الأمان وفائقة المرونة تضمن تشغيل خدماتك طوال الساعة دون توقف." },
    longDescription: {
      en: "Host your platforms confidently on secure, auto-scaling environments (AWS, GCP, Cloud Run). We implement DevOps automation, continuous integration and deployment (CI/CD) pipelines, and continuous monitoring to guarantee near 100% uptime.",
      ar: "استضف منصاتك بثقة تامة في بيئات سحابية مؤمنة ومرنة ذاتية التوسع (AWS, GCP, Cloud Run). نؤسس لك عمليات DevOps الذكية، خطوط النشر التلقائي (CI/CD)، والرقابة المستمرة لضمان تشغيل يقارب 100%."
    },
    features: {
      en: ["AWS & Google Cloud Setup", "Docker & Kubernetes Containerization", "Automated CI/CD Deployment Pipelines", "Auto-scaling & Disaster Recovery Setup", "Security Auditing & Hardening"],
      ar: ["إعداد وإدارة AWS و Google Cloud", "تغليف المنصات بـ Docker و Kubernetes", "بناء خطوط النشر التلقائي CI/CD المؤتمتة", "التوسع التلقائي وإدارة سيناريوهات الطوارئ", "فحص الأمان، الحماية وسد الثغرات"]
    },
    glowColor: 'green',
    basePrice: { min: 8000, max: 18000 },
    baseWeeks: { min: 4, max: 8 }
  }
];

const processStepsData = [
  { id: 'discover', stepNumber: '01', title: { en: "Discover", ar: "الاكتشاف وفهم الأهداف" }, description: { en: "We dive deep into your business requirements, target audience, and project goals to build a bulletproof roadmap.", ar: "نغوص في متطلبات عملك، جمهورك المستهدف، وأهداف مشروعك لبناء خارطة طريق برمجية واضحة ومثالية." }, iconName: 'search' },
  { id: 'plan', stepNumber: '02', title: { en: "Plan", ar: "التخطيط والهيكلة" }, description: { en: "We design robust tech architecture, wireframes, timelines, and select the optimal technology stacks for performance.", ar: "نضع الهيكل التقني المناسب، المخططات المبدئية، ونحدد التقنيات المثلى لضمان أداء لا يضاهى واستقرار تام." }, iconName: 'file-text' },
  { id: 'design', stepNumber: '03', title: { en: "Design", ar: "تصميم تجربة المستخدم" }, description: { en: "We create interactive UI prototypes and a custom design system focusing on aesthetic brilliance and intuitive flows.", ar: "نصنع نماذج واجهات تفاعلية مذهلة، ونظام تصميم موحد مع التركيز على الجاذبية البصرية والتدفقات السلسة." }, iconName: 'compass' },
  { id: 'develop', stepNumber: '04', title: { en: "Develop", ar: "التطوير والبرمجة" }, description: { en: "Our engineers write clean, efficient, and thoroughly tested code, bringing the approved designs to life.", ar: "يقوم مهندسو البرمجيات لدينا بكتابة أكواد برمجية نظيفة، فائقة الفعالية ومختبرة بالكامل لنبث الحياة في التصاميم." }, iconName: 'code' },
  { id: 'launch', stepNumber: '05', title: { en: "Launch", ar: "الإطلاق والنشر" }, description: { en: "We handle secure deployment to high-performance cloud servers, perform final audits, and make the app live.", ar: "نتولى عملية النشر الآمن على سيرفرات سحابية ممتازة، ونجري الفحوصات النهائية لنطلق مشروعك للعلن." }, iconName: 'check-circle' },
  { id: 'support', stepNumber: '06', title: { en: "Support", ar: "الدعم والتحسين المستمر" }, description: { en: "We provide round-the-clock monitoring, routine updates, optimization, and scale resources as your company grows.", ar: "نقدم رقابة مستمرة على مدار الساعة، تحديثات دورية، تحسين الأداء، وتوسيع الموارد لتواكب نمو أعمالك." }, iconName: 'alert-triangle' }
];

const portfolioData = [
  {
    id: '1',
    title: { en: "AeroFin Dashboard", ar: "لوحة تحكم إيروفين المالية" },
    category: 'web',
    categoryLabel: { en: "Web App", ar: "تطبيق ويب" },
    description: { en: "A real-time financial tracking dashboard managing million-dollar operations with analytics.", ar: "لوحة تحكم مالية لحظية لتتبع وإدارة العمليات الاستثمارية الضخمة مع تحليلات ورسوم بيانية." },
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
    description: { en: "Elegant mobile application for secure healthcare consultations, prescriptions, and chats.", ar: "تطبيق هاتف ذكي مذهل للاستشارات الطبية الآمنة، إدارة الوصفات الدوائية ومحادثات الفيديو الفورية." },
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
    description: { en: "Automated multi-channel social media asset and text generation utilizing Gemini.", ar: "منصة لإنشاء المنشورات والرسومات والحملات الإعلانية لمواقع التواصل مؤتمتة بالكامل عبر نماذج Gemini." },
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
    description: { en: "High-performance team workspace with kanban, chat, Gantt, and file drive.", ar: "بيئة عمل وتنسيق فائقة الأداء للفرق تضم لوحات كانبان، دردشة مباشرة، مخططات غانت ومساحة ملفات مشتركة." },
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
    description: { en: "Holistic, minimalist design system and interactive mockups for a premium wellness brand.", ar: "نظام تصميم شامل وهادئ ونماذج واجهات تفاعلية راقية لعلامة تجارية متخصصة في الصحة البدنية والنفسية." },
    longDescription: {
      en: "We designed a bespoke visual identifier, color pairings, custom line art assets, typography pairings, and engineered a comprehensive, responsive mockup showcasing micro-interactions, smooth card wipes, and seamless page transitions.",
      ar: "قمنا بابتكار هوية بصرية مخصصة، تناسق ألوان، أيقونات خطية راقية، خطوط متناسقة، وصممنا واجهات تفاعلية كاملة مع رسوم متناهية الصغر لتوفير تجربة هادئة وفاخرة للمستخدمين."
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tech: ["Figma", "Adobe Illustrator", "Tailwind Theme", "Motion React"],
    link: "#"
  }
];

const valuesData = [
  { iconName: 'shield', title: { en: "Absolute Security", ar: "الأمان المطلق" }, description: { en: "Encryption-first software design ensuring database, customer credentials, and client IP are 100% fortified.", ar: "تصميم برمجيات يركز على التشفير أولاً لضمان حماية قواعد البيانات، بيانات الاعتماد، والملكية الفكرية للمشروع بنسبة 100%." } },
  { iconName: 'zap', title: { en: "Stellar Performance", ar: "الأداء الفائق والسرعة" }, description: { en: "Millisecond reaction times, optimized static assets, lazy-loading, and responsive systems built to convert.", ar: "سرعة استجابة تقاس بالأجزاء من الثانية، صور وملفات محسنة، تحميل كسول، وأنظمة مصممة لزيادة المبيعات والتحول." } },
  { iconName: 'trending-up', title: { en: "Infinite Scalability", ar: "قابلية توسع لا متناهية" }, description: { en: "Microservice-ready frameworks and auto-scaling cloud databases that adjust effortlessly to millions of hits.", ar: "أطر عمل برمجية جاهزة للعمل السحابي وقواعد بيانات ذاتية التوسع تتكيف بسهولة مع ملايين الزيارات والعمليات المتزامنة." } }
];

const wizardFeaturesData = [
  { id: 'auth', label: { en: "User Accounts & Secure OAuth", ar: "حسابات المستخدمين والتحقق الآمن" }, price: 1500, weeks: 1 },
  { id: 'payment', label: { en: "Stripe Payment Gateway", ar: "بوابة دفع إلكتروني (Stripe)" }, price: 2000, weeks: 1 },
  { id: 'gemini', label: { en: "Gemini Server-Side AI Agent", ar: "عميل ذكاء اصطناعي مدمج بـ Gemini" }, price: 3500, weeks: 2 },
  { id: 'realtime', label: { en: "WebSockets Real-time Pipelines", ar: "قنوات نقل لحظية WebSockets" }, price: 2500, weeks: 1 },
  { id: 'multilang', label: { en: "Dynamic Internationalization (i18n)", ar: "دعم تعدد اللغات التلقائي" }, price: 1000, weeks: 1 },
  { id: 'admin', label: { en: "Advanced Analytics Admin Panel", ar: "لوحة تحكم إدارية وتحليلات متقدمة" }, price: 3000, weeks: 2 }
];

// ==========================================
// 2. STATE STORES
// ==========================================

let appState = {
  lang: localStorage.getItem('oxa_lang') || 'en',
  theme: localStorage.getItem('oxa_theme') || 'dark',
  currentPage: 'home',
  
  // Wizard states
  wizardIsOpen: false,
  wizardStep: 1,
  wizardSelectedServices: [],
  wizardSelectedFeatures: [],
  
  // Contact multi-select services state
  contactSelectedServices: [],
  contactSelectedBudget: '10k-25k'
};

// ==========================================
// 3. CORE RENDERING UTILITIES
// ==========================================

function renderStrings() {
  const isRtl = appState.lang === 'ar';
  const t = translationStrings[appState.lang];

  // Set RTL/LTR properties on page elements
  if (isRtl) {
    $('html').attr('dir', 'rtl').attr('lang', 'ar');
    $('body').removeClass('font-sans').addClass('font-sans font-medium');
  } else {
    $('html').attr('dir', 'ltr').attr('lang', 'en');
    $('body').removeClass('font-sans font-medium').addClass('font-sans');
  }

  // Header and elements with static text mappings
  $('[data-t]').each(function() {
    const key = $(this).attr('data-t');
    if (t[key]) {
      $(this).text(t[key]);
    }
  });

  // Unique specific items
  $('#home-nav-title').text(isRtl ? 'تصفّح حلولنا البرمجية' : 'Navigate Our Solutions');
  $('#home-nav-desc').text(isRtl ? 'استكشف قائمتنا الكاملة من الأنظمة البرمجية، الحلول المخصصة، ولوحة تحكم عملائنا.' : 'Explore our full list of digital systems, bespoke software architecture, and active request hub.');
  
  // Home Shortcut Cards
  $('#short-services-title').text(isRtl ? 'الخدمات المميزة' : 'Premium Services');
  $('#short-services-desc').text(isRtl ? 'من التطبيقات السحابية المتقدمة إلى دمج نماذج Gemini والحلول المتكاملة.' : 'From custom cloud-native apps to Gemini AI integration and mobile platform architecture.');
  $('#short-services-cta').text(isRtl ? 'استكشف الخدمات' : 'Explore Services');

  $('#short-portfolio-title').text(isRtl ? 'دراسات الحالة والمشاريع' : 'Active Case Studies');
  $('#short-portfolio-desc').text(isRtl ? 'تصفح النظم البرمجية وقواعد البيانات السحابية التي تم تدشينها بنجاح.' : 'Inspect the production platforms and digital architecture we deployed with real-time analytics.');
  $('#short-portfolio-cta').text(isRtl ? 'تصفح سابقة أعمالنا' : 'Browse Portfolio');

  $('#short-contact-title').text(isRtl ? 'بوابة العملاء والتواصل' : 'Client Hub & Contact');
  $('#short-contact-desc').text(isRtl ? 'تواصل مباشرة، تتبع طلباتك، واحصل على تقارير تسليم فورية مع مهندسينا.' : 'Submit custom requests, track estimates, and launch direct chats with our systems engineers.');
  $('#short-contact-cta').text(isRtl ? 'افتح بوابة التواصل' : 'Open Contact Portal');

  // Contact section specific elements
  $('#response-guarantee-title').text(isRtl ? 'ضمان استجابة فوري' : 'SUB-SECOND RESPONSE GUARANTEE');
  $('#response-guarantee-desc').text(isRtl ? 'كل نموذج يتم إرساله يحفز مراجعة فورية من فريقنا التقني. توقع ملخصاً أولياً وعرض أسعار في غضون 24 ساعة.' : 'Every submission triggers an instant team review. Expect an executive brief, tech stack map, and custom pricing proposal in under 24 hours.');
  $('#email-card-sub').text(isRtl ? 'راسلنا مباشرة' : 'Email Us');
  $('#location-card-sub').text(isRtl ? 'مكتبنا العالمي' : 'Global Office');
  $('#location-card-title').text(isRtl ? 'لندن، المملكة المتحدة والعمل عن بعد' : 'London, United Kingdom & Remote');
  $('#crm-headline').text(isRtl ? 'لوحة طلبات العملاء النشطة' : 'CLIENT PORTAL (ACTIVE REQUESTS)');
  $('#crm-view-label').text(isRtl ? 'عرض الطلبات المستلمة' : 'VIEW PIPELINE');
  $('#success-header-t').text(isRtl ? 'تم إرسال طلبك بنجاح!' : 'Inquiry Transmitted!');
  $('#btn-reset-contact').text(isRtl ? 'إرسال استفسار آخر' : 'Submit Another Inquiry');
  $('#footer-bio-desc').text(isRtl ? 'وكالة برمجية متميزة لتطوير النظم البرمجية المتكاملة، تطبيقات الهواتف والبنية السحابية.' : 'Premium full-stack software development agency creating robust, auto-scaling platforms.');

  // Form placeholders
  $('#contact-name').attr('placeholder', isRtl ? 'أدخل اسمك الكريم هنا' : 'John Doe');
  $('#contact-email').attr('placeholder', isRtl ? 'البريد الإلكتروني للتواصل' : 'john@example.com');
  $('#contact-company').attr('placeholder', isRtl ? 'اسم شركتك (اختياري)' : 'Acme Corp');
  $('#contact-message').attr('placeholder', isRtl ? 'اشرح بالتفصيل فكرة مشروعك، المميزات المطلوبة، والخطط الزمنية...' : 'Describe features, timeline, and core goals...');

  // Wizard specific placeholders
  $('#wizard-name').attr('placeholder', isRtl ? 'أدخل اسمك الكريم هنا' : 'John Doe');
  $('#wizard-email').attr('placeholder', isRtl ? 'البريد الإلكتروني للتواصل' : 'john@example.com');
  $('#wizard-message').attr('placeholder', isRtl ? 'يرجى كتابة أي تفاصيل إضافية للمشروع للتسليم...' : 'Include timeline constraints, desired integrations, or scaling requirements...');
  $('#wizard-reqs-label').text(isRtl ? 'متطلبات ومواصفات المشروع' : 'Project Requirements');
  $('#wizard-success-title').text(isRtl ? 'تم إرسال تكوين مشروعك بنجاح!' : 'Project Configuration Transmitted!');
  $('#wizard-success-desc').text(isRtl ? 'لقد تلقينا ميزانيتك ومواصفاتك المخصصة بدقة وسيقوم أحد مهندسينا بالتواصل معك فوراً.' : 'We have received your custom wizard structure and will evaluate it. Standby for contact!');

  // Drawer text translations
  $('#deliverables-headline-t').text(isRtl ? 'ما الذي نقوم بتسليمه:' : 'What We Deliver:');
  $('#tech-ecosystem-title-t').text(isRtl ? 'بيئة العمل والتقنيات:' : 'Technology Ecosystem:');
  $('#corp-guarantee-title').text(isRtl ? 'معايير جودة برمجية متطورة' : 'Enterprise Quality Standards');
  $('#corp-guarantee-desc').text(isRtl ? 'يتميز هذا المشروع بتغطية فحص كاملة، وبنية كاش سريعة، وتحصين أمني شامل مع رقابة دورية.' : 'This project features 100% test coverage, optimized serverless caching architectures, responsive security sandboxing, and routine automated audits.');
  $('#launch-demo-label-t').text(isRtl ? 'إطلاق العرض الحي' : 'Launch Demo');

  // Ledger elements
  $('#ledger-headline').text(isRtl ? 'نطاق هيكلة البرمجيات الفوري' : 'REAL-TIME ARCHITECTURE SCOPE');
  $('#components-summary-headline').text(isRtl ? 'قائمة مكونات النظام الرقمية' : 'SYSTEM BLOCKS CHECKLIST');
  $('#wizard-security-guarantee-desc').text(isRtl ? 'تتميز هندسة Oxa Code بتشفير بيانات كامل، وأنظمة رقابة نشطة على مدار الساعة، مع ضمان صيانة تقنية لمدة 24 شهراً.' : 'Oxa Code architectures feature 100% full encryption backups, responsive monitoring systems, and 24-month technical warranties.');
  
  // Steps headers inside Wizard
  $('#wizard-step-1-title').text(isRtl ? 'الخطوة 1: اختر خدمات النظام' : 'STEP 1: CHOOSE SYSTEM SERVICES');
  $('#wizard-step-2-title').text(isRtl ? 'الخطوة 2: عمليات دمج وتطوير ذكية' : 'STEP 2: ENHANCED INTEGRATIONS');
  $('#wizard-step-3-title').text(isRtl ? 'الخطوة 3: معلومات التواصل' : 'STEP 3: CONTACT INFORMATION');
  
  // Toggle label text
  $('#current-lang-label').text(appState.lang.toUpperCase());
}

// ------------------------------------------
// Rendering Metrics Bar
// ------------------------------------------
function renderMetricsBar() {
  const barContainer = $('#metrics-bar');
  barContainer.empty();
  const isRtl = appState.lang === 'ar';

  let htmlMarkup = `
    <div class="glass-panel rounded-3xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 shadow-xl border border-brand-border relative overflow-hidden">
      <!-- Ambient Lights -->
      <div class="absolute top-0 right-1/4 w-40 h-40 bg-brand-cyan/5 rounded-full blur-[40px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-40 h-40 bg-brand-purple/5 rounded-full blur-[40px] pointer-events-none"></div>
  `;

  metricsData.forEach((item, idx) => {
    let glowClass = 'shadow-[0_0_15px_rgba(0,240,255,0.15)] bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan';
    if (item.glowColor === 'purple') {
      glowClass = 'shadow-[0_0_15px_rgba(112,0,255,0.15)] bg-brand-purple/10 border-brand-purple/20 text-brand-purple';
    } else if (item.glowColor === 'blue') {
      glowClass = 'shadow-[0_0_15px_rgba(37,99,245,0.15)] bg-brand-blue/10 border-brand-blue/20 text-brand-blue';
    }

    htmlMarkup += `
      <div class="flex items-center gap-4 lg:gap-5 group relative">
        ${idx > 0 ? `<div class="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-brand-border ${isRtl ? 'right-0 left-auto' : ''}"></div>` : ''}
        
        <!-- Icon -->
        <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${glowClass}">
          <i data-lucide="${item.iconName}" class="w-6 h-6 lg:w-7 lg:h-7"></i>
        </div>

        <!-- Texts -->
        <div class="space-y-0.5 text-left ${isRtl ? 'text-right' : ''}">
          <span class="text-2xl lg:text-3xl font-display font-bold text-brand-text tracking-tight block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-text group-hover:to-brand-cyan transition-all">
            ${item.value}
          </span>
          <span class="text-xs lg:text-sm text-brand-muted font-medium tracking-wide block">
            ${item.label[appState.lang]}
          </span>
        </div>
      </div>
    `;
  });

  htmlMarkup += `</div>`;
  barContainer.html(htmlMarkup);
}

// ------------------------------------------
// Rendering Services Grid & Spec Drawers
// ------------------------------------------
function renderServicesGrid() {
  const gridNode = $('#services-grid');
  gridNode.empty();

  servicesData.forEach(item => {
    let colorClass = 'shadow-[0_0_15px_rgba(0,240,255,0.06)] border-brand-cyan/15 hover:border-brand-cyan/35 text-brand-cyan bg-brand-cyan/5';
    if (item.glowColor === 'purple') {
      colorClass = 'shadow-[0_0_15px_rgba(112,0,255,0.06)] border-brand-purple/15 hover:border-brand-purple/35 text-brand-purple bg-brand-purple/5';
    } else if (item.glowColor === 'pink') {
      colorClass = 'shadow-[0_0_15px_rgba(236,72,153,0.06)] border-pink-500/15 hover:border-pink-500/35 text-pink-500 bg-pink-500/5';
    } else if (item.glowColor === 'blue') {
      colorClass = 'shadow-[0_0_15px_rgba(37,99,245,0.06)] border-brand-blue/15 hover:border-brand-blue/35 text-brand-blue bg-brand-blue/5';
    } else if (item.glowColor === 'green') {
      colorClass = 'shadow-[0_0_15px_rgba(16,185,129,0.06)] border-emerald-500/15 hover:border-emerald-500/35 text-emerald-500 bg-emerald-500/5';
    }

    const itemMarkup = `
      <div class="group p-6 lg:p-8 rounded-2xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover shadow-lg transition-all duration-350 hover:-translate-y-1.5 flex flex-col justify-between h-[360px]">
        <div>
          <!-- Icon Circle -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform ${colorClass}">
            <i data-lucide="${item.iconName}" class="w-6 h-6"></i>
          </div>
          <h3 class="text-xl font-bold font-display text-brand-text mb-3 leading-tight group-hover:text-brand-cyan transition-colors">
            ${item.title[appState.lang]}
          </h3>
          <p class="text-xs lg:text-sm text-brand-muted leading-relaxed line-clamp-4">
            ${item.description[appState.lang]}
          </p>
        </div>

        <!-- Button Actions -->
        <div class="flex items-center justify-between pt-6 border-t border-brand-border/40 mt-6">
          <button data-spec-service-id="${item.id}" class="text-xs font-semibold text-brand-cyan hover:text-brand-text flex items-center gap-1 cursor-pointer transition-colors">
            <span data-t="viewDetails">View Details</span>
            <span>&rarr;</span>
          </button>
          <button data-quick-configure-service-id="${item.id}" class="px-3.5 py-1.5 rounded-lg border border-brand-border hover:border-brand-cyan hover:bg-brand-cyan/5 text-[10px] font-mono font-bold text-brand-muted hover:text-brand-cyan transition-all cursor-pointer">
            ESTIMATE
          </button>
        </div>
      </div>
    `;
    gridNode.append(itemMarkup);
  });
}

// ------------------------------------------
// Rendering Process Timeline Step Nodes
// ------------------------------------------
function renderProcessTimeline() {
  const tGrid = $('#timeline-grid');
  tGrid.empty();

  processStepsData.forEach(item => {
    let iconLabel = 'search';
    if (item.id === 'plan') iconLabel = 'file-text';
    else if (item.id === 'design') iconLabel = 'compass';
    else if (item.id === 'develop') iconLabel = 'code';
    else if (item.id === 'launch') iconLabel = 'check-circle';
    else if (item.id === 'support') iconLabel = 'alert-triangle';

    const markup = `
      <div class="relative group space-y-4">
        <!-- Number & Circle Bezel -->
        <div class="flex items-center lg:flex-col lg:items-center gap-4 relative z-10">
          <div class="w-22 h-22 rounded-2xl bg-brand-card border-2 border-brand-border group-hover:border-brand-cyan flex flex-col items-center justify-center shadow-lg transition-all duration-300 relative">
            <span class="text-[10px] font-mono font-bold text-brand-cyan mb-1 animate-pulse">${item.stepNumber}</span>
            <div class="text-brand-muted group-hover:text-brand-cyan transition-colors">
              <i data-lucide="${iconLabel}" class="w-5 h-5"></i>
            </div>
          </div>
        </div>

        <!-- Copys -->
        <div class="text-left lg:text-center space-y-1.5">
          <h4 class="text-sm font-bold font-display text-brand-text group-hover:text-brand-cyan transition-colors">
            ${item.title[appState.lang]}
          </h4>
          <p class="text-[11px] text-brand-muted leading-relaxed line-clamp-4">
            ${item.description[appState.lang]}
          </p>
        </div>
      </div>
    `;
    tGrid.append(markup);
  });
}

// ------------------------------------------
// Rendering Portfolio Filtering & Grid cards
// ------------------------------------------
function renderPortfolioSection(selectedCategory = 'all') {
  // Render Tab Nodes
  const tabsContainer = $('#portfolio-tabs');
  tabsContainer.empty();

  const categories = [
    { id: 'all', label: { en: "All Projects", ar: "جميع المشاريع" } },
    { id: 'web', label: { en: "Web Apps", ar: "تطبيقات الويب" } },
    { id: 'mobile', label: { en: "Mobile Apps", ar: "تطبيقات الهاتف" } },
    { id: 'ai', label: { en: "AI & Automation", ar: "الذكاء الاصطناعي" } },
    { id: 'design', label: { en: "UI/UX Design", ar: "تصاميم الويب" } }
  ];

  categories.forEach(cat => {
    const isActive = cat.id === selectedCategory;
    const tabMarkup = `
      <button data-portfolio-filter="${cat.id}" class="px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
        isActive 
          ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/20 border-transparent'
          : 'bg-brand-card hover:bg-brand-card-hover text-brand-muted hover:text-brand-text border border-brand-border'
      }">
        ${cat.label[appState.lang]}
      </button>
    `;
    tabsContainer.append(tabMarkup);
  });

  // Render Grid items
  const gridContainer = $('#portfolio-grid');
  gridContainer.empty();

  const filteredItems = selectedCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(x => x.category === selectedCategory);

  filteredItems.forEach(item => {
    const markup = `
      <div class="group rounded-2xl overflow-hidden bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover shadow-xl hover:shadow-2xl transition-all duration-350 hover:-translate-y-1.5 flex flex-col justify-between h-[440px]">
        <!-- Banner Image -->
        <div class="relative h-48 bg-slate-950 overflow-hidden shrink-0">
          <img src="${item.image}" alt="${item.title[appState.lang]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#030513]/90 via-transparent to-transparent"></div>
          
          <!-- Category Floating tag -->
          <span class="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-wider text-brand-cyan px-2.5 py-1 rounded-full bg-[#030513]/85 border border-brand-cyan/20">
            ${item.categoryLabel[appState.lang]}
          </span>
        </div>

        <!-- Contents -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div class="space-y-2">
            <h4 class="text-lg font-bold font-display text-brand-text tracking-tight group-hover:text-brand-cyan transition-colors">
              ${item.title[appState.lang]}
            </h4>
            <p class="text-xs text-brand-muted leading-relaxed line-clamp-3">
              ${item.description[appState.lang]}
            </p>
          </div>

          <!-- Technologies row -->
          <div class="flex flex-wrap gap-1.5 pt-4">
            ${item.tech.slice(0, 3).map(t => `<span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-brand-secondary border border-brand-border text-brand-dim">${t}</span>`).join('')}
            ${item.tech.length > 3 ? `<span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-brand-secondary border border-brand-border text-brand-cyan">+${item.tech.length - 3}</span>` : ''}
          </div>
        </div>

        <!-- Actions -->
        <div class="px-6 pb-6 pt-2 shrink-0">
          <button data-portfolio-item-id="${item.id}" class="w-full py-2.5 rounded-xl border border-brand-border hover:border-brand-cyan text-xs font-bold text-brand-muted hover:text-brand-cyan transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-brand-secondary/40">
            <span data-t="viewDetails">View Details</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    `;
    gridContainer.append(markup);
  });
}

// ------------------------------------------
// Rendering About Stats List & Values grid
// ------------------------------------------
function renderAboutSection() {
  const statsPanel = $('#about-stats-panel');
  statsPanel.empty();

  metricsData.forEach(item => {
    const markup = `
      <div class="bg-brand-card/50 border border-brand-border/40 rounded-xl p-3.5 text-center shadow-sm">
        <span class="text-xl md:text-2xl font-bold font-display text-brand-cyan block">${item.value}</span>
        <span class="text-[9px] font-semibold text-brand-dim tracking-wider uppercase block mt-1">${item.label[appState.lang]}</span>
      </div>
    `;
    statsPanel.append(markup);
  });

  // Render Tech Stack items
  const stackPanel = $('#tech-stack-list');
  stackPanel.empty();

  const technologies = [
    { label: "Frontend Platforms", value: "React, Vue, Next.js, HTML5/CSS3", progress: 98, color: "from-brand-cyan to-brand-blue" },
    { label: "Cross-platform Mobile", value: "Flutter, React Native, Swift, Kotlin", progress: 95, color: "from-brand-purple to-pink-500" },
    { label: "SaaS backend cores", value: "Node.js, Go, Express, Python", progress: 92, color: "from-brand-blue to-brand-purple" },
    { label: "Database architecture", value: "PostgreSQL, Redis, Firestore, Spanner", progress: 90, color: "from-emerald-500 to-brand-cyan" }
  ];

  technologies.forEach(tech => {
    const markup = `
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-[11px] font-medium">
          <span class="text-brand-text font-bold">${tech.label}</span>
          <span class="text-brand-cyan font-mono">${tech.progress}%</span>
        </div>
        <div class="w-full h-1.5 rounded-full bg-brand-secondary border border-brand-border/60 overflow-hidden shadow-inner">
          <div class="h-full bg-gradient-to-r ${tech.color} rounded-full" style="width: ${tech.progress}%;"></div>
        </div>
        <p class="text-[9px] text-brand-dim font-mono tracking-wide">${tech.value}</p>
      </div>
    `;
    stackPanel.append(markup);
  });

  // Render Core Values Cards
  const valuesGrid = $('#values-grid');
  valuesGrid.empty();

  valuesData.forEach(val => {
    let iconStr = 'shield';
    if (val.iconName === 'zap') iconStr = 'zap';
    else if (val.iconName === 'trending-up') iconStr = 'trending-up';

    const valMarkup = `
      <div class="group p-6 rounded-2xl bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-hover shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-5 group-hover:scale-105 transition-transform">
          <i data-lucide="${iconStr}" class="w-5 h-5"></i>
        </div>
        <h4 class="text-base font-bold font-display text-brand-text mb-2">${val.title[appState.lang]}</h4>
        <p class="text-xs text-brand-muted leading-relaxed">${val.description[appState.lang]}</p>
      </div>
    `;
    valuesGrid.append(valMarkup);
  });
}

// ------------------------------------------
// Contact Form Service Checklist selector
// ------------------------------------------
function renderContactFormServices() {
  const container = $('#contact-services-selector');
  container.empty();

  servicesData.forEach(item => {
    const isChecked = appState.contactSelectedServices.includes(item.id);
    const markup = `
      <button type="button" data-contact-select-service="${item.id}" class="px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
        isChecked 
          ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.08)]'
          : 'bg-brand-card border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-card-hover'
      }">
        ${item.title[appState.lang]}
      </button>
    `;
    container.append(markup);
  });
}

// ==========================================
// 4. CRM LEADS / CLIENT INBOX PIPELINE
// ==========================================

function loadAndRenderCRMLeads() {
  const listContainer = $('#crm-leads-list');
  listContainer.empty();

  // Load from local storage
  let leads = [];
  try {
    const raw = localStorage.getItem('oxa_leads');
    if (raw) leads = JSON.parse(raw);
  } catch (err) {
    console.error("Failed loading local leads:", err);
  }

  // Create one default lead if none exists so panel is visually gorgeous
  if (leads.length === 0) {
    leads = [
      {
        id: 'OXA-LEAD-001',
        name: 'Al-Masader Logistics',
        email: 'ceo@almasader.sa',
        company: 'Al-Masader Enterprise Solutions',
        services: ['web', 'cloud'],
        features: ['auth', 'admin'],
        budget: '$15k - $30k',
        message: 'Looking to re-architect our logistics delivery backend into an auto-scaling cloud portal, with multi-language capabilities and direct real-time tracking.',
        date: new Date(Date.now() - 3600000 * 4).toLocaleString()
      }
    ];
    localStorage.setItem('oxa_leads', JSON.stringify(leads));
  }

  // Set total count
  $('#crm-total-badge').text(leads.length + (appState.lang === 'ar' ? ' طلب نشط' : ' ACTIVE REQUESTS'));

  leads.forEach(lead => {
    // Services labels matching IDs
    const serviceTags = (lead.services || []).map(sid => {
      const match = servicesData.find(x => x.id === sid);
      return match ? match.title[appState.lang] : sid;
    });

    const markup = `
      <div class="p-5 rounded-xl bg-brand-card border border-brand-border/80 space-y-3 shadow-md hover:border-brand-border transition-colors">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/40 pb-3">
          <div class="text-left rtl:text-right">
            <h5 class="text-sm font-bold text-brand-text">${lead.name}</h5>
            <span class="text-[10px] text-brand-dim mt-0.5 block">${lead.company || lead.email}</span>
          </div>
          <div class="text-right rtl:text-left">
            <span class="text-[10px] font-mono font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/15 px-2.5 py-1 rounded-full">${lead.budget || 'Custom'}</span>
            <span class="text-[9px] text-brand-dim block mt-1 font-mono">${lead.date}</span>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-[11px] text-brand-muted leading-relaxed whitespace-pre-line text-left rtl:text-right">
            "${lead.message}"
          </p>

          <div class="flex flex-wrap gap-1 pt-1">
            ${serviceTags.map(tag => `<span class="text-[8px] font-bold px-2 py-0.5 rounded-md bg-brand-secondary border border-brand-border text-brand-cyan">${tag}</span>`).join('')}
            ${(lead.features || []).map(f => {
              const match = wizardFeaturesData.find(x => x.id === f);
              return `<span class="text-[8px] font-bold px-2 py-0.5 rounded-md bg-brand-secondary border border-brand-border text-brand-purple">${match ? match.label[appState.lang] : f}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
    listContainer.append(markup);
  });
}

// ==========================================
// 5. PROJECT WIZARD REAL-TIME CALCULATOR
// ==========================================

function renderWizardChecklists() {
  // 1. Render Step 1 Services inside wizard
  const servicesGrid = $('#wizard-services-selector-grid');
  servicesGrid.empty();

  servicesData.forEach(item => {
    const isSelected = appState.wizardSelectedServices.includes(item.id);
    const markup = `
      <div data-wizard-toggle-service="${item.id}" class="p-4 rounded-xl bg-brand-card hover:bg-brand-card-hover border transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-sm ${
        isSelected 
          ? 'border-brand-cyan bg-brand-cyan/5 text-brand-text glow-cyan' 
          : 'border-brand-border text-brand-muted hover:text-brand-text'
      }">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center border ${
            isSelected 
              ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan' 
              : 'bg-brand-secondary border-brand-border text-brand-muted group-hover:text-brand-cyan'
          }">
            <i data-lucide="${item.iconName}" class="w-4.5 h-4.5"></i>
          </div>
          <div class="text-left rtl:text-right">
            <span class="text-xs font-bold block">${item.title[appState.lang]}</span>
            <span class="text-[9px] font-mono text-brand-dim mt-0.5 block font-bold">${appState.lang === 'ar' ? 'تبدأ من ' : 'Est: '}$${item.basePrice.min.toLocaleString()}</span>
          </div>
        </div>

        <!-- Checkmark Box -->
        <div class="w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors ${
          isSelected 
            ? 'bg-brand-cyan border-brand-cyan text-white' 
            : 'border-brand-border bg-brand-secondary group-hover:border-brand-cyan'
        }">
          <i data-lucide="check" class="w-3 h-3 ${isSelected ? 'block' : 'hidden'}"></i>
        </div>
      </div>
    `;
    servicesGrid.append(markup);
  });

  // 2. Render Step 2 Features inside wizard
  const featuresGrid = $('#wizard-features-selector-grid');
  featuresGrid.empty();

  wizardFeaturesData.forEach(feat => {
    const isSelected = appState.wizardSelectedFeatures.includes(feat.id);
    const markup = `
      <div data-wizard-toggle-feature="${feat.id}" class="p-4 rounded-xl bg-brand-card hover:bg-brand-card-hover border transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-sm ${
        isSelected 
          ? 'border-brand-purple bg-brand-purple/5 text-brand-text glow-purple' 
          : 'border-brand-border text-brand-muted hover:text-brand-text'
      }">
        <div class="flex items-center gap-3 w-[84%]">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center border ${
            isSelected 
              ? 'bg-brand-purple/10 border-brand-purple/20 text-brand-purple' 
              : 'bg-brand-secondary border-brand-border text-brand-muted group-hover:text-brand-purple'
          }">
            <i data-lucide="cpu" class="w-4.5 h-4.5"></i>
          </div>
          <div class="text-left rtl:text-right shrink-0 max-w-[150px] md:max-w-none">
            <span class="text-[11px] font-bold block truncate md:whitespace-normal leading-snug">${feat.label[appState.lang]}</span>
            <span class="text-[9px] font-mono text-brand-dim mt-0.5 block font-bold">+$${feat.price.toLocaleString()}</span>
          </div>
        </div>

        <!-- Checkmark Box -->
        <div class="w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors ${
          isSelected 
            ? 'bg-brand-purple border-brand-purple text-white' 
            : 'border-brand-border bg-brand-secondary group-hover:border-brand-purple'
        }">
          <i data-lucide="check" class="w-3 h-3 ${isSelected ? 'block' : 'hidden'}"></i>
        </div>
      </div>
    `;
    featuresGrid.append(markup);
  });
}

function calculateWizardEstimates() {
  let minCost = 0;
  let maxCost = 0;
  let minWeeks = 0;
  let maxWeeks = 0;

  // Selected components items for the sidebar list
  const selectedLedgerItems = [];

  // Sum base services
  appState.wizardSelectedServices.forEach(sid => {
    const match = servicesData.find(x => x.id === sid);
    if (match) {
      minCost += match.basePrice.min;
      maxCost += match.basePrice.max;
      minWeeks += match.baseWeeks.min;
      maxWeeks += match.baseWeeks.max;

      selectedLedgerItems.push({
        label: match.title[appState.lang],
        isService: true
      });
    }
  });

  // Sum premium feature add-ons
  appState.wizardSelectedFeatures.forEach(fid => {
    const match = wizardFeaturesData.find(x => x.id === fid);
    if (match) {
      minCost += match.price;
      maxCost += match.price;
      minWeeks += match.weeks;
      maxWeeks += match.weeks;

      selectedLedgerItems.push({
        label: match.label[appState.lang],
        isService: false
      });
    }
  });

  // Calculate timelines gracefully (if multiple items are chosen, overlap them slightly to reflect real-world team multi-threading!)
  if (appState.wizardSelectedServices.length > 1) {
    minWeeks = Math.round(minWeeks * 0.7);
    maxWeeks = Math.round(maxWeeks * 0.7);
  }

  // Bind values to UI labels
  if (minCost === 0) {
    $('#wizard-estimated-cost-text').text('$0 - $0');
    $('#wizard-estimated-timeline-text').text(appState.lang === 'ar' ? '0 أسابيع' : '0 weeks');
  } else {
    $('#wizard-estimated-cost-text').text(`$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`);
    $('#wizard-estimated-timeline-text').text(`${minWeeks} - ${maxWeeks} ${appState.lang === 'ar' ? 'أسابيع' : 'weeks'}`);
  }

  // Render the side sheet checklist summary
  const ledgerChecklist = $('#wizard-ledger-checklist');
  ledgerChecklist.empty();

  if (selectedLedgerItems.length === 0) {
    ledgerChecklist.append(`
      <span class="text-[10px] text-brand-dim font-mono italic block text-center py-6">
        ${appState.lang === 'ar' ? 'لم يتم اختيار أي مكونات' : 'No components selected'}
      </span>
    `);
  } else {
    selectedLedgerItems.forEach(item => {
      ledgerChecklist.append(`
        <div class="flex items-center gap-1.5 text-[10px] font-medium text-brand-text">
          <i data-lucide="check" class="w-3.5 h-3.5 text-brand-cyan shrink-0"></i>
          <span class="truncate">${item.label}</span>
        </div>
      `);
    });
  }

  // Refresh Vector Icons inside dynamically generated components
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ------------------------------------------
// Navigation Steps controllers inside wizard
// ------------------------------------------
function updateWizardStepsUI() {
  $('.wizard-step').addClass('hidden');
  $(`#wizard-step-${appState.wizardStep}`).removeClass('hidden');

  // Indicators
  $('[data-step-indicator]').removeClass('bg-brand-cyan').addClass('bg-brand-border');
  $(`[data-step-indicator="${appState.wizardStep}"]`).removeClass('bg-brand-border').addClass('bg-brand-cyan');

  // Buttons label & icon configuration
  if (appState.wizardStep === 1) {
    $('#wizard-back-btn').attr('disabled', 'disabled').css('opacity', '0.2');
    $('#wizard-next-label').text(appState.lang === 'ar' ? 'الخطوة التالية' : 'Next Step');
    $('#wizard-next-arrow').removeClass('hidden');
    $('#wizard-submit-icon').addClass('hidden');
  } else if (appState.wizardStep === 2) {
    $('#wizard-back-btn').removeAttr('disabled').css('opacity', '1');
    $('#wizard-next-label').text(appState.lang === 'ar' ? 'الخطوة التالية' : 'Next Step');
    $('#wizard-next-arrow').removeClass('hidden');
    $('#wizard-submit-icon').addClass('hidden');
  } else if (appState.wizardStep === 3) {
    $('#wizard-back-btn').removeAttr('disabled').css('opacity', '1');
    $('#wizard-next-label').text(appState.lang === 'ar' ? 'إرسال المواصفات' : 'Submit Configuration');
    $('#wizard-next-arrow').addClass('hidden');
    $('#wizard-submit-icon').removeClass('hidden');
  }
}

// ==========================================
// 6. 3D LAPTOP LIVE SCREEN ANIMATIONS
// ==========================================

function run3DLaptopPeriodicUpdater() {
  const isLight = appState.theme === 'light';

  // 1. Populate keyboard keys on start
  const keyboardWell = $('.keyboard-grid-keys');
  if (keyboardWell.children().length === 0) {
    const keyRows = [
      [14, "q w e r t y u i o p [ ]"],
      [13, "a s d f g h j k l ; '"],
      [11, "z x c v b n m , . /"],
      [5, "space"]
    ];

    keyRows.forEach((row, i) => {
      let rowHtml = `<div class="flex gap-[1.5px] justify-center">`;
      if (i === 3) {
        // Spacebar row
        rowHtml += `<div class="w-3.5 h-[5px] rounded-[1px] bg-[#111327]/85 light:bg-white/80 border border-white/5 shadow-sm"></div>`;
        rowHtml += `<div class="w-16 h-[5.5px] rounded-[1.5px] bg-[#15172d] light:bg-[#f1f5f9] border border-brand-border/40 light:border-slate-350 shadow-[0_1px_1.5px_rgba(0,0,0,0.5)] flex items-center justify-center"></div>`;
        rowHtml += `<div class="w-3.5 h-[5px] rounded-[1px] bg-[#111327]/85 light:bg-white/80 border border-white/5 shadow-sm"></div>`;
      } else {
        const keyCount = row[0];
        for (let k = 0; k < keyCount; k++) {
          let extraWidth = 'w-[8.5px]';
          if (k === 0 && i === 1) extraWidth = 'w-[11px]';
          if (k === keyCount - 1 && i === 2) extraWidth = 'w-[12px]';

          rowHtml += `<div class="${extraWidth} h-[5px] rounded-[1px] bg-[#15172d] light:bg-[#f1f5f9] border border-brand-border/40 light:border-slate-350 shadow-[0_1.2px_1px_rgba(0,0,0,0.4)]"></div>`;
        }
      }
      rowHtml += `</div>`;
      keyboardWell.append(rowHtml);
    });
  }

  // 2. Real-time periodic chart drawing curve coordinates
  function updateChartPath() {
    const isLightNow = $('html').hasClass('light');
    const width = 280;
    const height = 80;
    const padding = 10;

    const coords = [];
    const segments = 10;
    const segmentWidth = (width - padding * 2) / segments;

    for (let i = 0; i <= segments; i++) {
      const x = padding + i * segmentWidth;
      // High variation path lines
      let y = padding + Math.random() * (height - padding * 2);
      if (i === 0) y = height - padding * 1.5;
      if (i === segments) y = height - padding * 2.5;
      coords.push({ x, y });
    }

    // Build cubic bezier curve string
    let pathD = `M ${coords[0].x},${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const current = coords[i];
      const next = coords[i + 1];
      const controlX1 = current.x + segmentWidth / 2;
      const controlY1 = current.y;
      const controlX2 = next.x - segmentWidth / 2;
      const controlY2 = next.y;

      pathD += ` C ${controlX1},${controlY1} ${controlX2},${controlY2} ${next.x},${next.y}`;
    }

    // Build shaded area curve
    const areaD = `${pathD} L ${coords[coords.length - 1].x},${height} L ${coords[0].x},${height} Z`;

    // SVG elements inner layout
    const strokeColor = isLightNow ? "#2563eb" : "#00f0ff";
    const areaColor = isLightNow ? "rgba(37,99,245,0.06)" : "rgba(0,240,255,0.12)";

    const svgInnerHtml = `
      <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-1000" />
      <path d="${areaD}" fill="${areaColor}" class="transition-all duration-1000" />
      
      <!-- Live glowing tracking pointer dot at the tip of the curve -->
      <circle cx="${coords[coords.length - 1].x}" cy="${coords[coords.length - 1].y}" r="4" fill="${strokeColor}" class="transition-all duration-1000" />
      <circle cx="${coords[coords.length - 1].x}" cy="${coords[coords.length - 1].y}" r="8" fill="none" stroke="${strokeColor}" stroke-width="1.5" class="animate-ping" />
    `;

    $('#laptop-analytics-svg').html(svgInnerHtml);
  }

  // 3. Dial Satisfaction percentage oscillations
  function updateSatisfactionDial() {
    // Oscillation values between 97% and 100%
    const vals = [98, 99, 100, 99];
    const randVal = vals[Math.floor(Math.random() * vals.length)];
    $('#satisfaction-percentage-text').text(`${randVal}%`);

    // Complete circle stroke width is 150.8
    // Offset calculation: (100 - value) / 100 * 150.8
    const dashOffset = ((100 - randVal) / 100) * 150.8;
    $('#satisfaction-gauge-circle').css('stroke-dashoffset', dashOffset);
  }

  // 4. Populate sidebar links inside screen
  const linksContainer = $('#laptop-sidebar-links');
  linksContainer.empty();
  const screenTabs = [
    { icon: 'home', text: 'Overview' },
    { icon: 'box', text: 'Integrations' },
    { icon: 'database', text: 'Database' },
    { icon: 'shield-check', text: 'Security' }
  ];
  screenTabs.forEach((tab, i) => {
    const isAct = i === 0;
    linksContainer.append(`
      <div class="flex items-center gap-1 px-1 py-1 rounded transition-colors text-[7px] ${
        isAct 
          ? 'bg-brand-cyan/15 text-brand-cyan font-bold shadow-inner' 
          : 'text-gray-500 hover:text-white'
      }">
        <i data-lucide="${tab.icon}" class="w-2.5 h-2.5 shrink-0"></i>
        <span class="truncate">${tab.text}</span>
      </div>
    `);
  });

  // Call instantly and setup intervals
  updateChartPath();
  updateSatisfactionDial();
  
  setInterval(updateChartPath, 3000);
  setInterval(updateSatisfactionDial, 4000);
}

// ==========================================
// 7. PAGE VIEWER (SPA NAVIGATION MANAGER)
// ==========================================

function navigateToPage(targetPageId) {
  if (appState.currentPage === targetPageId) return;

  const currentView = $(`.page-view:not(.hidden)`);
  const targetView = $(`#page-${targetPageId}`);

  // Header active items indicators toggles
  $(`[data-nav]`).removeClass('text-white bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-border').addClass('text-brand-muted hover:text-brand-text');
  $(`[data-nav="${targetPageId}"]`).removeClass('text-brand-muted hover:text-brand-text').addClass('text-white bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-border');

  // Fade transition out-in
  currentView.fadeOut(200, function() {
    currentView.addClass('hidden');
    targetView.removeClass('hidden').hide().fadeIn(250);
    appState.currentPage = targetPageId;

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Refresh vectors inside active view
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Close mobile navigation menu automatically on tap
  $('#burger-icon').removeClass('hidden');
  $('#close-icon').addClass('hidden');
  $('#mobile-menu').slideUp(200);
}

// ==========================================
// 8. SPEC DRAWERS SHOWROOM MANAGER
// ==========================================

function openServiceDetailsDrawer(serviceId) {
  const match = servicesData.find(x => x.id === serviceId);
  if (!match) return;

  // Render spec copies matching current lang
  $('#service-modal-title').text(match.title[appState.lang]);
  $('#service-modal-description').text(match.longDescription[appState.lang]);

  // Set spec icon matching current item glow colors
  $('#service-modal-icon').attr('data-lucide', match.iconName);
  
  let glowClass = 'shadow-[0_0_15px_rgba(0,240,255,0.2)] bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan';
  if (match.glowColor === 'purple') {
    glowClass = 'shadow-[0_0_15px_rgba(112,0,255,0.2)] bg-brand-purple/10 border-brand-purple/25 text-brand-purple';
  } else if (match.glowColor === 'pink') {
    glowClass = 'shadow-[0_0_15px_rgba(236,72,153,0.2)] bg-pink-500/10 border-pink-500/25 text-pink-500';
  } else if (match.glowColor === 'blue') {
    glowClass = 'shadow-[0_0_15px_rgba(37,99,245,0.2)] bg-brand-blue/10 border-brand-blue/25 text-brand-blue';
  } else if (match.glowColor === 'green') {
    glowClass = 'shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-emerald-500/10 border-emerald-500/25 text-emerald-500';
  }
  $('#service-modal-icon-bg').attr('class', `w-12 h-12 rounded-xl border flex items-center justify-center ${glowClass}`);

  // Build specifications list grid
  const deliverablesNode = $('#service-modal-deliverables');
  deliverablesNode.empty();

  match.features[appState.lang].forEach(feat => {
    deliverablesNode.append(`
      <div class="p-3.5 rounded-xl bg-brand-card/70 border border-brand-border/65 flex items-start gap-2.5">
        <div class="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
          <i data-lucide="check" class="w-3 h-3"></i>
        </div>
        <span class="text-xs font-semibold text-brand-text leading-tight">${feat}</span>
      </div>
    `);
  });

  // Open backdrop
  $('#service-modal-backdrop').removeClass('hidden').css('opacity', '0').animate({ opacity: '1' }, 200);
  $('#service-modal').removeClass('hidden').css({ 'opacity': '0', 'transform': 'translateY(32px)' }).animate({ 'opacity': '1', 'transform': 'translateY(0)' }, 250);

  // CTA linking to preselected service inside wizard
  $('#service-modal-cta-btn').off('click').on('click', function() {
    // Close specification drawer and launch configuration wizard
    $('#service-modal-close-btn').trigger('click');
    setTimeout(() => {
      // Clear features
      appState.wizardSelectedFeatures = [];
      appState.wizardSelectedServices = [match.id];
      appState.wizardStep = 1;
      
      updateWizardStepsUI();
      calculateWizardEstimates();
      
      // Open Project wizard modal
      $('#wizard-backdrop').removeClass('hidden').css('opacity', '0').animate({ opacity: '1' }, 200);
      $('#wizard-modal').removeClass('hidden').css({ 'opacity': '0', 'transform': 'translateY(32px)' }).animate({ 'opacity': '1', 'transform': 'translateY(0)' }, 250);
    }, 150);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function openPortfolioDetailsDrawer(itemId) {
  const match = portfolioData.find(x => x.id === itemId);
  if (!match) return;

  // Populate data
  $('#portfolio-modal-image').attr('src', match.image);
  $('#portfolio-modal-category-badge').text(match.categoryLabel[appState.lang]);
  $('#portfolio-modal-title').text(match.title[appState.lang]);
  $('#portfolio-modal-description').text(match.longDescription[appState.lang]);
  $('#portfolio-modal-id-badge').text(`PROJECT ID: OXA-PORT-${match.id}`);

  // Technology tags
  const techNode = $('#portfolio-modal-tech-list');
  techNode.empty();

  match.tech.forEach(t => {
    techNode.append(`
      <span class="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-brand-card border border-brand-border text-brand-cyan">${t}</span>
    `);
  });

  // Open backdrop
  $('#portfolio-modal-backdrop').removeClass('hidden').css('opacity', '0').animate({ opacity: '1' }, 200);
  $('#portfolio-modal').removeClass('hidden').css({ 'opacity': '0', 'transform': 'translateY(32px)' }).animate({ 'opacity': '1', 'transform': 'translateY(0)' }, 250);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 9. RE-INIT ENGINE (LANG & THEME SWITCHES)
// ==========================================

function reInitializeCoreRenders() {
  renderStrings();
  renderMetricsBar();
  renderServicesGrid();
  renderProcessTimeline();
  renderPortfolioSection();
  renderAboutSection();
  renderContactFormServices();
  loadAndRenderCRMLeads();
  renderWizardChecklists();
  calculateWizardEstimates();
}

// ==========================================
// 10. INTERACTIVE MOUSE PERSPECTIVE PARALLAX
// ==========================================

function setupInteractiveLaptopParallax() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  $(document).on('mousemove', function(e) {
    const xVal = (e.clientX / window.innerWidth) - 0.5;
    const yVal = (e.clientY / window.innerHeight) - 0.5;

    // 1. Hover parallax spotlight behind sections
    // Simple 3D rotation of laptop lid and phone relative to cursor coordinates
    const lidRotateX = -2 - yVal * 15; // Lid slightly backwards, tilts slightly on vertical scroll
    const lidRotateY = xVal * 18;

    $('.laptop-screen-bezel').css({
      'transform': `perspective(1000px) rotateX(${lidRotateX}deg) rotateY(${lidRotateY}deg)`,
      'transform-style': 'preserve-3d',
      'transition': 'transform 0.1s ease-out'
    });

    // Device float offsets
    $('#hero-laptop-canvas').css({
      'transform': `translateY(${yVal * -25}px) translateX(${xVal * -20}px)`,
      'transition': 'transform 0.1s ease-out'
    });
  });
}

// ==========================================
// 11. INITIALIZATION ON DOM READY
// ==========================================

$(document).ready(function() {
  
  // Hide Loader overlay smoothly
  setTimeout(() => {
    $('#app-loader').addClass('opacity-0');
    setTimeout(() => {
      $('#app-loader').addClass('hidden');
    }, 500);
  }, 750);

  // Sync initial theme
  const root = document.documentElement;
  if (appState.theme === 'light') {
    root.classList.add('light');
    $('body').removeClass('bg-brand-dark text-brand-text').addClass('bg-brand-dark text-brand-text');
  } else {
    root.classList.remove('light');
  }

  // Generate code particles decorative tags in home background
  const pList = [
    { text: 'const', x: '12%', y: '18%', size: 'text-xs' },
    { text: '{...}', x: '82%', y: '12%', size: 'text-sm' },
    { text: 'async', x: '78%', y: '35%', size: 'text-xs' },
    { text: '</>', x: '8%', y: '45%', size: 'text-base' },
    { text: 'await', x: '85%', y: '65%', size: 'text-xs' },
    { text: 'import', x: '14%', y: '75%', size: 'text-xs' },
    { text: '=>', x: '88%', y: '82%', size: 'text-sm' },
    { text: '<div>', x: '45%', y: '15%', size: 'text-xs' },
    { text: '[]', x: '35%', y: '85%', size: 'text-xs' },
  ];
  const codeBox = $('#code-particles');
  codeBox.empty();
  pList.forEach(p => {
    codeBox.append(`
      <div class="absolute font-mono font-bold text-brand-cyan/25 select-none pointer-events-none ${p.size}" style="left: ${p.x}; top: ${p.y};">
        ${p.text}
      </div>
    `);
  });

  // Setup periodic updates and renders
  reInitializeCoreRenders();
  run3DLaptopPeriodicUpdater();
  setupInteractiveLaptopParallax();

  // Rotating Headline texts
  const rotatingWords = {
    en: ["Business Forward", "Digital Horizons", "Innovative Future", "Infinite Scale"],
    ar: ["أعمالك نحو القمة", "مستقبلك الرقمي", "ابتكاراتك البرمجية", "ريادتك الرقمية"]
  };
  let wordIndex = 0;
  setInterval(() => {
    const list = rotatingWords[appState.lang];
    wordIndex = (wordIndex + 1) % list.length;
    $('#rotating-word').fadeOut(300, function() {
      $(this).text(list[wordIndex]).fadeIn(300);
    });
  }, 4000);

  // Vector Launchers Icons initial render
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // 12. CLICK & INTERACTIVE EVENT LISTENERS
  // ==========================================

  // (A) Language Switch Dropdown Handlers
  $('#lang-menu-btn').on('click', function(e) {
    e.stopPropagation();
    const isHidden = $('#lang-dropdown').hasClass('hidden');
    if (isHidden) {
      $('#lang-dropdown').removeClass('hidden').css({ 'opacity': '0', 'transform': 'scale(0.95)' }).animate({ 'opacity': '1', 'transform': 'scale(1)' }, 150);
      $('#lang-chevron').addClass('rotate-180');
    } else {
      $('#lang-dropdown').addClass('hidden');
      $('#lang-chevron').removeClass('rotate-180');
    }
  });

  $(document).on('click', function() {
    $('#lang-dropdown').addClass('hidden');
    $('#lang-chevron').removeClass('rotate-180');
  });

  $('[data-lang-select]').on('click', function(e) {
    e.preventDefault();
    const nextLang = $(this).attr('data-lang-select');
    appState.lang = nextLang;
    localStorage.setItem('oxa_lang', nextLang);
    
    // Switch styling highlight inside dropdown
    $('[data-lang-select]').removeClass('bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white').addClass('text-brand-muted hover:text-brand-text hover:bg-brand-card');
    $(this).removeClass('text-brand-muted hover:text-brand-text hover:bg-brand-card').addClass('bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white');

    reInitializeCoreRenders();
  });

  // Mobile language toggle quick trigger
  $('#mobile-lang-toggle').on('click', function() {
    const nextLang = appState.lang === 'en' ? 'ar' : 'en';
    appState.lang = nextLang;
    localStorage.setItem('oxa_lang', nextLang);
    reInitializeCoreRenders();
  });

  // (B) Theme Toggle Switch Handlers (Pristine light/dark adjustments)
  function toggleThemeLogic() {
    const nextTheme = appState.theme === 'dark' ? 'light' : 'dark';
    appState.theme = nextTheme;
    localStorage.setItem('oxa_theme', nextTheme);

    const rootNode = document.documentElement;
    if (nextTheme === 'light') {
      rootNode.classList.add('light');
    } else {
      rootNode.classList.remove('light');
    }

    reInitializeCoreRenders();
  }

  $('#theme-toggle').on('click', toggleThemeLogic);
  $('#mobile-theme-toggle').on('click', toggleThemeLogic);

  // (C) Mobile Burger Menu sliding trigger
  $('#mobile-menu-btn').on('click', function() {
    const isOpen = $('#mobile-menu').hasClass('hidden');
    if (isOpen) {
      $('#mobile-menu').removeClass('hidden').hide().slideDown(250);
      $('#burger-icon').addClass('hidden');
      $('#close-icon').removeClass('hidden');
    } else {
      $('#mobile-menu').slideUp(200, function() {
        $('#mobile-menu').addClass('hidden');
      });
      $('#burger-icon').removeClass('hidden');
      $('#close-icon').addClass('hidden');
    }
  });

  // (D) SPA Page Navigation triggers
  $('[data-nav]').on('click', function(e) {
    e.preventDefault();
    const dest = $(this).attr('data-nav');
    navigateToPage(dest);
  });

  // See our work scrolls to portfolio page directly
  $('#btn-see-work').on('click', function(e) {
    e.preventDefault();
    navigateToPage('portfolio');
  });

  // Scroll to top trigger inside footer
  $('.scroll-top-trigger').on('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Home Page Navigation Shortcut Cards
  $('#card-services-shortcut').on('click', function() {
    navigateToPage('services');
  });
  $('#card-portfolio-shortcut').on('click', function() {
    navigateToPage('portfolio');
  });
  $('#card-contact-shortcut').on('click', function() {
    navigateToPage('contact');
  });

  // (E) Service Card Detail Spec triggers
  $(document).on('click', '[data-spec-service-id]', function(e) {
    e.stopPropagation();
    const sid = $(this).attr('data-spec-service-id');
    openServiceDetailsDrawer(sid);
  });

  $('#service-modal-close-btn').on('click', function() {
    $('#service-modal-backdrop').animate({ opacity: '0' }, 150, function() {
      $(this).addClass('hidden');
    });
    $('#service-modal').animate({ 'opacity': '0', 'transform': 'translateY(24px)' }, 150, function() {
      $(this).addClass('hidden');
    });
  });

  $('#service-modal-backdrop').on('click', function() {
    $('#service-modal-close-btn').trigger('click');
  });
  $('#service-modal-cancel-btn').on('click', function() {
    $('#service-modal-close-btn').trigger('click');
  });

  // (F) Portfolio Filtering and Detail Drawers triggers
  $(document).on('click', '[data-portfolio-filter]', function() {
    const filterCat = $(this).attr('data-portfolio-filter');
    renderPortfolioSection(filterCat);
  });

  $(document).on('click', '[data-portfolio-item-id]', function(e) {
    e.stopPropagation();
    const pid = $(this).attr('data-portfolio-item-id');
    openPortfolioDetailsDrawer(pid);
  });

  $('#portfolio-modal-close-btn').on('click', function() {
    $('#portfolio-modal-backdrop').animate({ opacity: '0' }, 150, function() {
      $(this).addClass('hidden');
    });
    $('#portfolio-modal').animate({ 'opacity': '0', 'transform': 'translateY(24px)' }, 150, function() {
      $(this).addClass('hidden');
    });
  });

  $('#portfolio-modal-backdrop').on('click', function() {
    $('#portfolio-modal-close-btn').trigger('click');
  });
  $('#portfolio-modal-cancel-btn').on('click', function() {
    $('#portfolio-modal-close-btn').trigger('click');
  });

  // (G) CRM View Toggler pipeline drawer
  $('#crm-toggle').on('click', function() {
    const isHidden = $('#crm-leads-pipeline').hasClass('hidden');
    if (isHidden) {
      $('#crm-leads-pipeline').removeClass('hidden').hide().slideDown(300);
      $('#crm-chevron').addClass('rotate-90');
    } else {
      $('#crm-leads-pipeline').slideUp(250, function() {
        $(this).addClass('hidden');
      });
      $('#crm-chevron').removeClass('rotate-90');
    }
  });

  // Form selections and submission logic in contact panel
  $(document).on('click', '[data-contact-select-service]', function() {
    const sid = $(this).attr('data-contact-select-service');
    const index = appState.contactSelectedServices.indexOf(sid);
    if (index > -1) {
      appState.contactSelectedServices.splice(index, 1);
    } else {
      appState.contactSelectedServices.push(sid);
    }
    renderContactFormServices();
  });

  $(document).on('click', '[data-budget-id]', function() {
    const bid = $(this).attr('data-budget-id');
    appState.contactSelectedBudget = bid;

    // Toggle styling highlights on buttons
    $('[data-budget-id]').removeClass('bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)]').addClass('bg-brand-card border-brand-border text-brand-muted hover:text-brand-text');
    $(this).removeClass('bg-brand-card border-brand-border text-brand-muted hover:text-brand-text').addClass('bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border-brand-cyan text-brand-text shadow-[0_0_15px_rgba(0,240,255,0.1)]');
  });

  // Form submit handler
  $('#contact-form-node').on('submit', function(e) {
    e.preventDefault();

    // Disable button to prevent double clicks
    const subBtn = $('#contact-submit-btn');
    subBtn.attr('disabled', 'disabled').addClass('opacity-50');
    subBtn.find('span').text(appState.lang === 'ar' ? 'جاري الإرسال...' : 'Sending...');

    // Extract values
    const newLead = {
      id: `OXA-LEAD-${Math.floor(Math.random() * 900) + 100}`,
      name: $('#contact-name').val(),
      email: $('#contact-email').val(),
      company: $('#contact-company').val(),
      services: [...appState.contactSelectedServices],
      features: [],
      budget: appState.contactSelectedBudget === 'under-10k' ? '$5k - $10k' : (appState.contactSelectedBudget === '10k-25k' ? '$10k - $25k' : (appState.contactSelectedBudget === '25k-50k' ? '$25k - $50k' : '$50k+')),
      message: $('#contact-message').val(),
      date: new Date().toLocaleString()
    };

    setTimeout(() => {
      // Push into localStorage
      let oldLeads = [];
      try {
        const raw = localStorage.getItem('oxa_leads');
        if (raw) oldLeads = JSON.parse(raw);
      } catch (err) {}

      oldLeads.unshift(newLead);
      localStorage.setItem('oxa_leads', JSON.stringify(oldLeads));

      // Reload CRM viewer lists
      loadAndRenderCRMLeads();

      // Show success screen and clear form
      $('#contact-form-node').addClass('hidden');
      $('#contact-success-screen').removeClass('hidden');

      // Reset form variables
      $('#contact-name').val('');
      $('#contact-email').val('');
      $('#contact-company').val('');
      $('#contact-message').val('');
      appState.contactSelectedServices = [];
      renderContactFormServices();

      // Recover button state
      subBtn.removeAttr('disabled').removeClass('opacity-50');
      subBtn.find('span').text(appState.lang === 'ar' ? 'إرسال الرسالة' : 'Send Message');
    }, 1200);
  });

  // Contact Success Reset trigger button
  $('#btn-reset-contact').on('click', function() {
    $('#contact-success-screen').addClass('hidden');
    $('#contact-form-node').removeClass('hidden');
  });

  // Copy email clip trigger
  $('#btn-copy-email').on('click', function() {
    navigator.clipboard.writeText('hello@oxacode.com');
    const copyIcon = $('#copy-email-icon');
    copyIcon.attr('data-lucide', 'check-circle').css('color', '#10b981');
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      copyIcon.attr('data-lucide', 'copy').css('color', '');
      if (window.lucide) window.lucide.createIcons();
    }, 2000);
  });

  // ==========================================
  // 13. WIZARD INTERACTIVE MODAL ACTIONS
  // ==========================================

  // (A) Open Configurator Drawer triggers
  $('[data-open-wizard]').on('click', function(e) {
    e.preventDefault();
    
    // Default config values
    appState.wizardSelectedServices = ['web'];
    appState.wizardSelectedFeatures = [];
    appState.wizardStep = 1;
    appState.wizardIsOpen = true;

    // Reset Success states if loaded
    $('#wizard-form-fields').removeClass('hidden');
    $('#wizard-success-screen').addClass('hidden');
    $('#wizard-footer-nav').removeClass('hidden');

    updateWizardStepsUI();
    renderWizardChecklists();
    calculateWizardEstimates();

    // Show backdrop & drawer modal
    $('#wizard-backdrop').removeClass('hidden').css('opacity', '0').animate({ opacity: '1' }, 200);
    $('#wizard-modal').removeClass('hidden').css({ 'opacity': '0', 'transform': 'translateY(32px)' }).animate({ 'opacity': '1', 'transform': 'translateY(0)' }, 250);
  });

  // (B) Configure Button inside Services Card
  $(document).on('click', '[data-quick-configure-service-id]', function(e) {
    e.stopPropagation();
    const serviceId = $(this).attr('data-quick-configure-service-id');

    appState.wizardSelectedServices = [serviceId];
    appState.wizardSelectedFeatures = [];
    appState.wizardStep = 1;
    appState.wizardIsOpen = true;

    // Reset Success states
    $('#wizard-form-fields').removeClass('hidden');
    $('#wizard-success-screen').addClass('hidden');
    $('#wizard-footer-nav').removeClass('hidden');

    updateWizardStepsUI();
    renderWizardChecklists();
    calculateWizardEstimates();

    // Show backdrop & drawer modal
    $('#wizard-backdrop').removeClass('hidden').css('opacity', '0').animate({ opacity: '1' }, 200);
    $('#wizard-modal').removeClass('hidden').css({ 'opacity': '0', 'transform': 'translateY(32px)' }).animate({ 'opacity': '1', 'transform': 'translateY(0)' }, 250);
  });

  // (C) Close Configurator Drawer
  $('#wizard-close-btn').on('click', function() {
    $('#wizard-backdrop').animate({ opacity: '0' }, 150, function() {
      $(this).addClass('hidden');
    });
    $('#wizard-modal').animate({ 'opacity': '0', 'transform': 'translateY(24px)' }, 150, function() {
      $(this).addClass('hidden');
      appState.wizardIsOpen = false;
    });
  });

  $('#wizard-backdrop').on('click', function() {
    $('#wizard-close-btn').trigger('click');
  });

  // (D) Check/Uncheck Service inside Configurator step 1
  $(document).on('click', '[data-wizard-toggle-service]', function() {
    const sid = $(this).attr('data-wizard-toggle-service');
    const index = appState.wizardSelectedServices.indexOf(sid);
    if (index > -1) {
      // Prevent unselecting if it is the only one selected
      if (appState.wizardSelectedServices.length > 1) {
        appState.wizardSelectedServices.splice(index, 1);
      }
    } else {
      appState.wizardSelectedServices.push(sid);
    }

    renderWizardChecklists();
    calculateWizardEstimates();
  });

  // (E) Check/Uncheck Feature inside Configurator step 2
  $(document).on('click', '[data-wizard-toggle-feature]', function() {
    const fid = $(this).attr('data-wizard-toggle-feature');
    const index = appState.wizardSelectedFeatures.indexOf(fid);
    if (index > -1) {
      appState.wizardSelectedFeatures.splice(index, 1);
    } else {
      appState.wizardSelectedFeatures.push(fid);
    }

    renderWizardChecklists();
    calculateWizardEstimates();
  });

  // (F) Configurator Back Button Navigator
  $('#wizard-back-btn').on('click', function() {
    if (appState.wizardStep > 1) {
      appState.wizardStep--;
      updateWizardStepsUI();
    }
  });

  // (G) Configurator Next Step / Finish Button Navigator
  $('#wizard-next-btn').on('click', function() {
    if (appState.wizardStep < 3) {
      appState.wizardStep++;
      updateWizardStepsUI();
    } else {
      // Finish config form submission
      const name = $('#wizard-name').val();
      const email = $('#wizard-email').val();
      const details = $('#wizard-message').val();

      if (!name || !email || !details) {
        alert(appState.lang === 'ar' ? 'يرجى إكمال جميع الحقول المطلوبة للتسليم!' : 'Please fill all required inputs!');
        return;
      }

      // Sum final estimates matching pricing algorithms
      let minCost = 0;
      appState.wizardSelectedServices.forEach(sid => {
        const match = servicesData.find(x => x.id === sid);
        if (match) minCost += match.basePrice.min;
      });
      appState.wizardSelectedFeatures.forEach(fid => {
        const match = wizardFeaturesData.find(x => x.id === fid);
        if (match) minCost += match.price;
      });

      // Construct lead
      const newLead = {
        id: `OXA-WIZ-${Math.floor(Math.random() * 900) + 100}`,
        name: name,
        email: email,
        company: 'Custom Configurator Target',
        services: [...appState.wizardSelectedServices],
        features: [...appState.wizardSelectedFeatures],
        budget: `$${minCost.toLocaleString()}+`,
        message: details,
        date: new Date().toLocaleString()
      };

      // Push into pipeline
      let oldLeads = [];
      try {
        const raw = localStorage.getItem('oxa_leads');
        if (raw) oldLeads = JSON.parse(raw);
      } catch (err) {}

      oldLeads.unshift(newLead);
      localStorage.setItem('oxa_leads', JSON.stringify(oldLeads));

      // Reload lists
      loadAndRenderCRMLeads();

      // Show Success indicators
      $('#wizard-form-fields').addClass('hidden');
      $('#wizard-success-screen').removeClass('hidden');
      $('#wizard-footer-nav').addClass('hidden');

      // Clear fields
      $('#wizard-name').val('');
      $('#wizard-email').val('');
      $('#wizard-message').val('');
    }
  });

});
