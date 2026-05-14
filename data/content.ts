export type Lang = "en" | "ar";

type NavItem = { id: string; en: string; ar: string };
type ServiceGroup = { title: { en: string; ar: string }; items: { en: string; ar: string }[] };
type WhyPoint = { en: string; ar: string };
type ProcessStep = { en: string; ar: string };
type Solution = {
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  description: { en: string; ar: string };
  stack: string[];
};

export const navItems: NavItem[] = [
  { id: "about", en: "About", ar: "من نحن" },
  { id: "services", en: "Services", ar: "الخدمات" },
  { id: "process", en: "Process", ar: "العملية" },
  { id: "solutions", en: "Solutions", ar: "الحلول" },
  { id: "contact", en: "Contact", ar: "تواصل" },
];

export const content = {
  brand: { en: "Nexora Agency", ar: "نيكسورا" },
  hero: {
    title: {
      en: "Building Modern Websites & Smart Digital Solutions",
      ar: "نبني مواقع عصرية وحلولًا رقمية ذكية",
    },
    description: {
      en: "We build scalable web applications, business systems, AI workflows, and modern digital experiences that help businesses grow faster.",
      ar: "نبني تطبيقات ويب قابلة للتوسع، أنظمة أعمال مخصصة، حلول أتمتة بالذكاء الاصطناعي، وتجارب رقمية حديثة تساعد الشركات على النمو بشكل أسرع.",
    },
    primaryCta: { en: "View Services", ar: "استعرض الخدمات" },
    secondaryCta: { en: "Start a Project", ar: "ابدأ مشروعك" },
  },
  about: {
    title: { en: "A Long-Term Engineering Partner", ar: "شريك هندسي طويل المدى" },
    description: {
      en: "Nexora is a premium software engineering and digital innovation agency focused on scalable systems, clean architecture, and measurable business outcomes. We partner with startups, brands, and growing businesses to build the next generation of digital solutions through modern engineering and strategic execution.",
      ar: "نيكسورا وكالة متخصصة في هندسة البرمجيات والابتكار الرقمي، تركز على الأنظمة القابلة للتوسع، والهندسة النظيفة، وتحقيق نتائج أعمال قابلة للقياس. نتعاون مع الشركات الناشئة والعلامات التجارية والشركات المتنامية لبناء الجيل القادم من الحلول الرقمية عبر هندسة حديثة وتنفيذ استراتيجي.",
    },
  },
  services: [
    {
      title: { en: "Software Engineering", ar: "هندسة البرمجيات" },
      items: [
        { en: "Custom Web Applications", ar: "تطبيقات ويب مخصصة" },
        { en: "SaaS Development", ar: "تطوير منصات SaaS" },
        { en: "Business Systems Development", ar: "تطوير أنظمة أعمال" },
        { en: "Admin Dashboards", ar: "لوحات تحكم إدارية" },
        { en: "Backend Development", ar: "تطوير الواجهات الخلفية" },
        { en: "Node.js API Development", ar: "تطوير واجهات Node.js API" },
        { en: "Database Architecture", ar: "هندسة قواعد البيانات" },
        { en: "Authentication Systems", ar: "أنظمة المصادقة" },
        { en: "Scalable System Architecture", ar: "بنية أنظمة قابلة للتوسع" },
      ],
    },
    {
      title: { en: "Web Experiences", ar: "تجارب الويب" },
      items: [
        { en: "React Development", ar: "تطوير React" },
        { en: "Next.js Development", ar: "تطوير Next.js" },
        { en: "Frontend Development", ar: "تطوير الواجهات الأمامية" },
        { en: "Landing Pages", ar: "صفحات هبوط" },
        { en: "UI/UX Improvements", ar: "تحسين تجربة وواجهة المستخدم" },
        { en: "eCommerce Websites", ar: "متاجر إلكترونية" },
      ],
    },
    {
      title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
      items: [
        { en: "AI Workflow Automation", ar: "أتمتة سير العمل بالذكاء الاصطناعي" },
        { en: "Chatbots", ar: "روبوتات المحادثة" },
        { en: "AI Assistants", ar: "مساعدات ذكية" },
        { en: "API Integrations", ar: "تكاملات API" },
        { en: "Business Process Automation", ar: "أتمتة عمليات الأعمال" },
      ],
    },
    {
      title: { en: "Optimization & Support", ar: "التحسين والدعم" },
      items: [
        { en: "Performance Optimization", ar: "تحسين الأداء" },
        { en: "Website Maintenance", ar: "صيانة المواقع" },
        { en: "SEO-Friendly Development", ar: "تطوير متوافق مع SEO" },
        { en: "Domain & Hosting Setup", ar: "إعداد النطاق والاستضافة" },
        { en: "Technical Support", ar: "دعم تقني" },
      ],
    },
    {
      title: { en: "CMS Solutions", ar: "حلول إدارة المحتوى" },
      items: [
        { en: "WordPress Solutions", ar: "حلول WordPress" },
        { en: "WooCommerce Solutions", ar: "حلول WooCommerce" },
      ],
    },
  ] as ServiceGroup[],
  whyUs: {
    title: { en: "Why Choose Nexora", ar: "لماذا تختار نيكسورا" },
    points: [
      { en: "Engineering Mindset", ar: "عقلية هندسية" },
      { en: "Clean Code", ar: "كود نظيف" },
      { en: "Fast Delivery", ar: "تنفيذ سريع" },
      { en: "Scalable Systems", ar: "أنظمة قابلة للتوسع" },
      { en: "Business Focused", ar: "تركيز على أهداف الأعمال" },
      { en: "Transparent Communication", ar: "تواصل شفاف" },
      { en: "Long-Term Support", ar: "دعم طويل المدى" },
      { en: "Premium User Experience", ar: "تجربة مستخدم احترافية" },
    ] as WhyPoint[],
  },
  process: {
    title: { en: "Our Process", ar: "آلية العمل" },
    steps: [
      { en: "Contact Us", ar: "تواصل معنا" },
      { en: "Discovery & Analysis", ar: "الاكتشاف والتحليل" },
      { en: "Proposal & Scope", ar: "المقترح وتحديد النطاق" },
      { en: "Agreement", ar: "الاتفاق" },
      { en: "Design & Development", ar: "التصميم والتطوير" },
      { en: "Testing & Launch", ar: "الاختبار والإطلاق" },
      { en: "Support & Growth", ar: "الدعم والنمو" },
    ] as ProcessStep[],
  },
  solutions: {
    title: { en: "Featured Solutions", ar: "حلول مميزة" },
    cta: { en: "Explore Solution", ar: "استكشف الحل" },
    items: [
      {
        title: { en: "Healthcare Management Platform", ar: "منصة إدارة الرعاية الصحية" },
        category: { en: "Operations System", ar: "نظام تشغيلي" },
        description: {
          en: "Centralized workflows for clinics, patient records, appointments, and internal reporting.",
          ar: "سير عمل موحد للعيادات، سجلات المرضى، المواعيد، والتقارير الداخلية.",
        },
        stack: ["Next.js", "Node.js", "PostgreSQL"],
      },
      {
        title: { en: "Restaurant Management System", ar: "نظام إدارة المطاعم" },
        category: { en: "Business Platform", ar: "منصة أعمال" },
        description: {
          en: "Order handling, kitchen coordination, inventory tracking, and performance dashboards.",
          ar: "إدارة الطلبات، تنسيق المطبخ، تتبع المخزون، ولوحات الأداء.",
        },
        stack: ["React", "Express", "MongoDB"],
      },
      {
        title: { en: "SaaS Dashboard", ar: "لوحة SaaS" },
        category: { en: "B2B Product", ar: "منتج أعمال" },
        description: {
          en: "Multi-tenant analytics, billing logic, and role-based access for scalable SaaS operations.",
          ar: "تحليلات متعددة المستأجرين، منطق الفوترة، وصلاحيات مرنة لعمليات SaaS القابلة للتوسع.",
        },
        stack: ["Next.js", "Prisma", "Stripe"],
      },
      {
        title: { en: "eCommerce Platform", ar: "منصة تجارة إلكترونية" },
        category: { en: "Commerce", ar: "تجارة" },
        description: {
          en: "High-performance storefront, product management, secure checkout, and SEO-ready architecture.",
          ar: "واجهة متجر عالية الأداء، إدارة المنتجات، دفع آمن، وبنية مهيأة لمحركات البحث.",
        },
        stack: ["Next.js", "Tailwind", "Payments API"],
      },
      {
        title: { en: "AI Automation System", ar: "نظام أتمتة بالذكاء الاصطناعي" },
        category: { en: "Automation", ar: "أتمتة" },
        description: {
          en: "Automated workflows that connect CRM, support channels, and internal task pipelines.",
          ar: "سير عمل آلي يربط أنظمة CRM، قنوات الدعم، ومسارات المهام الداخلية.",
        },
        stack: ["OpenAI API", "Node.js", "Webhook Integrations"],
      },
      {
        title: { en: "Premium Business Website", ar: "موقع أعمال احترافي" },
        category: { en: "Digital Presence", ar: "حضور رقمي" },
        description: {
          en: "Conversion-driven website with strong brand storytelling and fast technical foundations.",
          ar: "موقع يركز على التحويل مع سرد علامة قوي وأساس تقني سريع.",
        },
        stack: ["Next.js", "Framer Motion", "CMS"],
      },
    ] as Solution[],
  },
  trust: {
    title: { en: "Built for Long-Term Partnerships", ar: "مصمم لشراكات طويلة المدى" },
    description: {
      en: "We work with clear communication, technical transparency, and business-first thinking to deliver scalable engineering with continuous support.",
      ar: "نعمل بتواصل واضح، وشفافية تقنية، وفهم عميق للأعمال لتقديم هندسة قابلة للتوسع مع دعم مستمر.",
    },
    metrics: [
      { en: "Fast Response", ar: "استجابة سريعة" },
      { en: "Flexible Collaboration", ar: "تعاون مرن" },
      { en: "Engineering Standards", ar: "معايير هندسية" },
      { en: "Future-Ready Solutions", ar: "حلول جاهزة للمستقبل" },
    ],
  },
  contact: {
    title: { en: "Start Your Project", ar: "ابدأ مشروعك" },
    projectType: { en: "Project Type", ar: "نوع المشروع" },
    budget: { en: "Budget Range", ar: "نطاق الميزانية" },
    details: { en: "Project Details", ar: "تفاصيل المشروع" },
  },
};
