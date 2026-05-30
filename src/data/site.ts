import edu from '@/assets/project-education.jpg';
import climate from '@/assets/project-climate.jpg';
import water from '@/assets/project-water.jpg';
import women from '@/assets/project-women.jpg';

export type Category = 'climate' | 'education' | 'water' | 'women' | 'protection';

export interface Project {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  overview: { en: string; ar: string };
  category: Category;
  status: 'ongoing' | 'completed';
  image: string;
  location: { en: string; ar: string };
  beneficiaries: string;
  duration: string;
  donor: string;
  objectives: { en: string[]; ar: string[] };
  results: { en: string[]; ar: string[] };
}

export const projects: Project[] = [
  {
    slug: 'climate-smart-terraces',
    title: { en: 'Climate-Smart Terraces Revival', ar: 'إحياء المدرجات الزراعية الذكية مناخيًا' },
    excerpt: {
      en: 'Restoring ancient terraced farms in Taiz mountains to fight erosion and food insecurity.',
      ar: 'إعادة تأهيل المدرجات الزراعية القديمة في جبال تعز لمكافحة التعرية وانعدام الأمن الغذائي.',
    },
    overview: {
      en: 'Working with 1,200 farming households across four districts, we rehabilitate centuries-old stone terraces, introduce drought-resilient seeds and rainwater harvesting.',
      ar: 'نعمل مع 1,200 أسرة زراعية في أربع مديريات لإعادة تأهيل المدرجات الحجرية وإدخال البذور المقاومة للجفاف وحصاد مياه الأمطار.',
    },
    category: 'climate',
    status: 'ongoing',
    image: climate,
    location: { en: 'Taiz Governorate', ar: 'محافظة تعز' },
    beneficiaries: '7,800',
    duration: '2024–2027',
    donor: 'EU Humanitarian Aid',
    objectives: {
      en: ['Rehabilitate 540 hectares of terraced land', 'Train 1,200 farmers in climate-smart agriculture', 'Install 60 rainwater harvesting systems'],
      ar: ['إعادة تأهيل 540 هكتارًا من الأراضي المدرجة', 'تدريب 1,200 مزارع على الزراعة الذكية مناخيًا', 'تركيب 60 نظامًا لحصاد مياه الأمطار'],
    },
    results: {
      en: ['38% increase in seasonal yield', '210 hectares restored to date', '410 women trained'],
      ar: ['زيادة بنسبة 38% في الإنتاج الموسمي', 'استعادة 210 هكتارات حتى الآن', 'تدريب 410 امرأة'],
    },
  },
  {
    slug: 'safe-learning-spaces',
    title: { en: 'Safe Learning Spaces', ar: 'فضاءات تعلّم آمنة' },
    excerpt: {
      en: 'Rebuilding damaged schools and providing psychosocial support for displaced children.',
      ar: 'إعادة بناء المدارس المتضررة وتوفير الدعم النفسي للأطفال النازحين.',
    },
    overview: {
      en: 'A multi-year program rehabilitating 24 schools and supporting 9,000 children with quality education, learning materials and trauma-informed care.',
      ar: 'برنامج متعدد السنوات لإعادة تأهيل 24 مدرسة ودعم 9,000 طفل بتعليم نوعي ومواد تعلّمية ورعاية نفسية.',
    },
    category: 'education',
    status: 'ongoing',
    image: edu,
    location: { en: 'Taiz & Lahj', ar: 'تعز ولحج' },
    beneficiaries: '9,000',
    duration: '2023–2026',
    donor: 'UNICEF Yemen',
    objectives: {
      en: ['Rehabilitate 24 schools', 'Train 320 teachers', 'Distribute 9,000 learning kits'],
      ar: ['إعادة تأهيل 24 مدرسة', 'تدريب 320 معلمًا ومعلمة', 'توزيع 9,000 حقيبة تعلّمية'],
    },
    results: {
      en: ['18 schools reopened', '6,400 children re-enrolled', '92% attendance rate'],
      ar: ['إعادة فتح 18 مدرسة', 'إعادة تسجيل 6,400 طفل', 'نسبة حضور 92%'],
    },
  },
  {
    slug: 'water-for-life',
    title: { en: 'Water For Life', ar: 'مياه للحياة' },
    excerpt: { en: 'Sustainable WASH solutions for drought-affected rural communities.', ar: 'حلول مياه وإصحاح مستدامة للمجتمعات الريفية المتأثرة بالجفاف.' },
    overview: {
      en: 'Solar-powered water systems, hygiene promotion and women-led water committees in 32 villages.',
      ar: 'أنظمة مياه تعمل بالطاقة الشمسية، وحملات نظافة، ولجان مياه نسائية في 32 قرية.',
    },
    category: 'water',
    status: 'ongoing',
    image: water,
    location: { en: 'Ibb & Al-Dhale', ar: 'إب والضالع' },
    beneficiaries: '24,500',
    duration: '2024–2026',
    donor: 'GIZ',
    objectives: {
      en: ['Install 32 solar water systems', 'Form 32 women-led water committees', 'Reach 24,500 people with safe water'],
      ar: ['تركيب 32 نظام مياه شمسي', 'تشكيل 32 لجنة مياه نسائية', 'الوصول إلى 24,500 شخص بمياه آمنة'],
    },
    results: {
      en: ['14 systems operational', '11,200 people served', 'Waterborne disease down 47%'],
      ar: ['تشغيل 14 نظامًا', 'خدمة 11,200 شخص', 'انخفاض الأمراض المنقولة بالمياه بنسبة 47%'],
    },
  },
  {
    slug: 'women-economic-empowerment',
    title: { en: 'Women Economic Empowerment', ar: 'تمكين النساء اقتصاديًا' },
    excerpt: { en: 'Cooperatives, micro-enterprise and financial inclusion for rural Yemeni women.', ar: 'تعاونيات ومشاريع صغيرة وإدماج مالي للنساء الريفيات.' },
    overview: {
      en: 'Supporting 18 cooperatives with grants, business training and market linkages — focused on food processing, handicrafts and beekeeping.',
      ar: 'دعم 18 تعاونية بالمنح والتدريب وربط السوق — في تصنيع الأغذية والحرف اليدوية وتربية النحل.',
    },
    category: 'women',
    status: 'ongoing',
    image: women,
    location: { en: 'Taiz, Hodeidah', ar: 'تعز، الحديدة' },
    beneficiaries: '2,300',
    duration: '2023–2025',
    donor: 'UN Women',
    objectives: {
      en: ['Establish 18 women cooperatives', 'Train 2,000 women in business skills', 'Disburse 500 micro-grants'],
      ar: ['إنشاء 18 تعاونية نسائية', 'تدريب 2,000 امرأة على مهارات الأعمال', 'صرف 500 منحة صغيرة'],
    },
    results: {
      en: ['12 cooperatives generating monthly revenue', '1,400 women earning income', '$280K total disbursed'],
      ar: ['12 تعاونية تحقق إيرادات شهرية', '1,400 امرأة تكسب دخلًا', 'إجمالي الصرف 280 ألف دولار'],
    },
  },
];

export interface NewsItem {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  body: { en: string; ar: string };
  date: string;
  category: { en: string; ar: string };
  image: string;
}

export const news: NewsItem[] = [
  {
    slug: 'cop29-yemen-voices',
    title: { en: 'Bringing Yemeni voices to COP29', ar: 'صوت اليمن في مؤتمر COP29' },
    excerpt: { en: 'Our director joined a panel on climate adaptation in conflict-affected states.', ar: 'مديرتنا التنفيذية شاركت في جلسة عن التكيّف المناخي في الدول المتأثرة بالنزاع.' },
    body: { en: 'At COP29 in Baku, our delegation called for direct climate finance for Yemeni civil society and a binding loss-and-damage framework for the MENA region.', ar: 'في مؤتمر الأطراف COP29 في باكو، طالب وفدنا بتمويل مناخي مباشر للمجتمع المدني اليمني وإطار ملزم للخسائر والأضرار لمنطقة الشرق الأوسط وشمال أفريقيا.' },
    date: '2025-11-18',
    category: { en: 'Advocacy', ar: 'مناصرة' },
    image: climate,
  },
  {
    slug: 'school-reopening-hawban',
    title: { en: '18th school reopens in Al-Hawban', ar: 'افتتاح المدرسة الثامنة عشرة في الحوبان' },
    excerpt: { en: 'A milestone for our Safe Learning Spaces program.', ar: 'محطة بارزة لبرنامج فضاءات التعلّم الآمنة.' },
    body: { en: 'After eight months of rehabilitation, 420 children — half of them girls — return to a fully equipped, safe school in Al-Hawban.', ar: 'بعد ثمانية أشهر من إعادة التأهيل، يعود 420 طفلًا — نصفهم من الفتيات — إلى مدرسة آمنة ومجهّزة في الحوبان.' },
    date: '2025-10-02',
    category: { en: 'Field update', ar: 'تحديث ميداني' },
    image: edu,
  },
  {
    slug: 'partnership-giz',
    title: { en: 'New partnership with GIZ on water security', ar: 'شراكة جديدة مع GIZ في الأمن المائي' },
    excerpt: { en: 'Expanding solar water systems across two additional governorates.', ar: 'توسيع أنظمة المياه الشمسية لتشمل محافظتين إضافيتين.' },
    body: { en: 'Ymnt Foundation signed a 24-month partnership agreement with GIZ to scale Water For Life to Ibb and Al-Dhale.', ar: 'وقعت مؤسسة يمنت اتفاقية شراكة مدتها 24 شهرًا مع GIZ لتوسيع مشروع مياه للحياة إلى إب والضالع.' },
    date: '2025-08-14',
    category: { en: 'Partnerships', ar: 'شراكات' },
    image: water,
  },
];

export const partners = [
  'UNICEF', 'UN Women', 'OCHA', 'UNDP', 'WFP', 'EU Humanitarian Aid', 'GIZ', 'Save the Children', 'Oxfam', 'IRC', 'NRC', 'CARE',
];

export const board = [
  { name: { en: 'Dr. Aisha Al-Sabri', ar: 'د. عائشة الصبري' }, role: { en: 'Chair of the Board', ar: 'رئيسة مجلس الأمناء' } },
  { name: { en: 'Eng. Khaled Al-Hamdi', ar: 'م. خالد الحمدي' }, role: { en: 'Vice Chair', ar: 'نائب الرئيس' } },
  { name: { en: 'Dr. Nadia Othman', ar: 'د. نادية عثمان' }, role: { en: 'Treasurer', ar: 'أمينة الصندوق' } },
  { name: { en: 'Mr. Yusuf Al-Maqtari', ar: 'أ. يوسف المقطري' }, role: { en: 'Secretary', ar: 'أمين السر' } },
  { name: { en: 'Ms. Hanan Saleh', ar: 'أ. حنان صالح' }, role: { en: 'Board Member', ar: 'عضو مجلس' } },
  { name: { en: 'Mr. Omar Al-Junaid', ar: 'أ. عمر الجنيد' }, role: { en: 'Board Member', ar: 'عضو مجلس' } },
];

export const staff = [
  { name: { en: 'Sumaya Al-Qadhi', ar: 'سمية القاضي' }, role: { en: 'Executive Director', ar: 'المديرة التنفيذية' } },
  { name: { en: 'Mohammed Al-Asbahi', ar: 'محمد الأصبحي' }, role: { en: 'Programs Director', ar: 'مدير البرامج' } },
  { name: { en: 'Lina Hassan', ar: 'لينا حسن' }, role: { en: 'Finance & Compliance', ar: 'المالية والامتثال' } },
  { name: { en: 'Yara Al-Najjar', ar: 'يارا النجار' }, role: { en: 'MEAL Manager', ar: 'مديرة الرصد والتقييم' } },
  { name: { en: 'Adel Al-Mikhlafi', ar: 'عادل المخلافي' }, role: { en: 'Safeguarding Lead', ar: 'مسؤول الصون' } },
  { name: { en: 'Maha Al-Eryani', ar: 'مها الإرياني', }, role: { en: 'Partnerships Manager', ar: 'مديرة الشراكات' } },
];

export const opportunities = [
  { title: { en: 'MEAL Officer — Taiz', ar: 'موظف رصد وتقييم — تعز' }, type: { en: 'Full-time', ar: 'دوام كامل' }, location: { en: 'Taiz', ar: 'تعز' }, deadline: '2026-06-30' },
  { title: { en: 'Climate Adaptation Consultant', ar: 'استشاري التكيّف المناخي' }, type: { en: 'Consultancy', ar: 'استشارة' }, location: { en: 'Remote / Yemen', ar: 'عن بُعد / اليمن' }, deadline: '2026-06-15' },
  { title: { en: 'Tender — Solar pumps procurement', ar: 'مناقصة — توريد مضخات شمسية' }, type: { en: 'Tender', ar: 'مناقصة' }, location: { en: 'Ibb', ar: 'إب' }, deadline: '2026-07-05' },
];

export const policies = [
  { key: 'child-protection', en: 'Child Protection Policy', ar: 'سياسة حماية الطفل' },
  { key: 'psea', en: 'PSEA Policy', ar: 'سياسة الوقاية من الاستغلال والاعتداء الجنسي' },
  { key: 'anti-corruption', en: 'Anti-Corruption & Fraud Policy', ar: 'سياسة مكافحة الفساد والاحتيال' },
  { key: 'code-of-conduct', en: 'Code of Conduct', ar: 'مدونة السلوك' },
  { key: 'whistleblowing', en: 'Whistleblowing Policy', ar: 'سياسة الإبلاغ عن المخالفات' },
  { key: 'data-protection', en: 'Data Protection Policy', ar: 'سياسة حماية البيانات' },
];

export const reports = [
  { key: 'annual-2024', en: 'Annual Report 2024', ar: 'التقرير السنوي 2024' },
  { key: 'annual-2023', en: 'Annual Report 2023', ar: 'التقرير السنوي 2023' },
  { key: 'annual-2022', en: 'Annual Report 2022', ar: 'التقرير السنوي 2022' },
];

export const legalDocs = [
  { key: 'registration', en: 'NGO Registration Certificate', ar: 'شهادة تسجيل المنظمة' },
  { key: 'bylaws', en: 'Foundation Bylaws', ar: 'النظام الأساسي' },
  { key: 'tax-exempt', en: 'Tax Exemption Letter', ar: 'خطاب الإعفاء الضريبي' },
];

export const financials = [
  { key: 'audit-2024', en: 'Audited Financial Statements 2024', ar: 'القوائم المالية المدققة 2024' },
  { key: 'audit-2023', en: 'Audited Financial Statements 2023', ar: 'القوائم المالية المدققة 2023' },
];
