// Project hero images
import forumP1Cover from '@/assets/photos/forum/forum-01.jpg';
import forumP2Cover from '@/assets/photos/forum/forum2-01.jpg';
import noortmonaCover from '@/assets/photos/noortmona/noortmona-01.jpg';
import sawaseyaCover from '@/assets/photos/sawaseya/sawaseya-02.jpg';
import sasaCover from '@/assets/photos/sasa-peace/sasa-01.jpg';
import cookersCover from '@/assets/photos/solar-cookers/cookers-01.jpg';

// Project galleries
import forumP1a from '@/assets/photos/forum/forum-01.jpg';
import forumP1b from '@/assets/photos/forum/forum-02.jpg';
import forumP2a from '@/assets/photos/forum/forum2-01.jpg';
import forumP2b from '@/assets/photos/forum/forum2-02.jpg';
import forumP2c from '@/assets/photos/forum/forum2-03.jpg';
import forumP2d from '@/assets/photos/forum/forum2-04.jpg';

import noort1 from '@/assets/photos/noortmona/noortmona-01.jpg';
import noort2 from '@/assets/photos/noortmona/noortmona-02.jpg';
import noort3 from '@/assets/photos/noortmona/noortmona-03.jpg';
import noort4 from '@/assets/photos/noortmona/noortmona-04.jpg';
import noort5 from '@/assets/photos/noortmona/noortmona-05.jpg';
import noort6 from '@/assets/photos/noortmona/noortmona-06.jpg';

import saw1 from '@/assets/photos/sawaseya/sawaseya-01.jpg';
import saw2 from '@/assets/photos/sawaseya/sawaseya-02.jpg';
import saw3 from '@/assets/photos/sawaseya/sawaseya-03.jpg';
import saw4 from '@/assets/photos/sawaseya/sawaseya-04.jpg';
import saw5 from '@/assets/photos/sawaseya/sawaseya-05.jpg';
import saw6 from '@/assets/photos/sawaseya/sawaseya-06.jpg';

import sasa1 from '@/assets/photos/sasa-peace/sasa-01.jpg';
import sasa2 from '@/assets/photos/sasa-peace/sasa-02.jpg';

import cook1 from '@/assets/photos/solar-cookers/cookers-01.jpg';
import cook2 from '@/assets/photos/solar-cookers/cookers-02.jpg';
import cook3 from '@/assets/photos/solar-cookers/cookers-03.jpg';
import cook4 from '@/assets/photos/solar-cookers/cookers-04.jpg';

// Partner logos
import pCpcs from '@/assets/partners/cpcs.png';
import pGenerations from '@/assets/partners/generations-without-qat.png';
import pLightForMedia from '@/assets/partners/light-for-media.png';
import pShebaYouth from '@/assets/partners/sheba-youth.png';
import pYcjf from '@/assets/partners/youth-climate-justice-fund.png';
import pUnknown from '@/assets/partners/unknown.png';

export type Category = 'climate' | 'education' | 'advocacy' | 'capacity';

export interface Project {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  overview: { en: string; ar: string };
  category: Category;
  status: 'ongoing' | 'completed';
  image: string;
  gallery?: string[];
  videoUrl?: string;
  location: { en: string; ar: string };
  beneficiaries: string;
  duration: string;
  donor: string;
  objectives: { en: string[]; ar: string[] };
  results: { en: string[]; ar: string[] };
}

export const projects: Project[] = [
  {
    slug: 'climate-justice-forum-phase2',
    title: {
      en: 'Climate & Social Justice Forum — Phase II',
      ar: 'منتدى العدالة المناخية والاجتماعية — المرحلة الثانية',
    },
    excerpt: {
      en: 'Advanced training for 20 young leaders, investigative reporting on water governance, and community accountability hearings in Taiz.',
      ar: 'تدريب متقدم لـ 20 شاباً وشابة، وتقرير استقصائي حول حوكمة المياه، وجلسات مساءلة مجتمعية في تعز.',
    },
    overview: {
      en: 'Phase II (2025–2026) delivered an advanced training program in social accountability, investigative journalism, proposal writing and digital safety. The project conducted field surveys producing a qualitative investigative report on urban water governance in Taiz, culminating in two community accountability hearings with the Water Corporation and Cleaning Fund, plus a working paper translating outcomes into actionable policies.',
      ar: 'نفذت المرحلة الثانية (2025–2026) برنامجاً تدريبياً متقدماً لـ 20 شاباً وشابة في المساءلة المجتمعية والصحافة الاستقصائية وكتابة مقترحات المشاريع والسلامة الرقمية. تضمن المشروع نزولاً ومسحاً ميدانياً لإنتاج تقرير استقصائي نوعي حول حوكمة المياه في تعز، توّج بتنفيذ جلستي استماع ومساءلة مجتمعية مع مؤسسة المياه وصندوق النظافة، وإصدار ورقة عمل لتحويل المخرجات إلى سياسات قابلة للتنفيذ.',
    },
    category: 'advocacy',
    status: 'ongoing',
    image: forumP2Cover,
    gallery: [forumP2a, forumP2b, forumP2c, forumP2d],
    location: { en: 'Taiz Governorate', ar: 'محافظة تعز' },
    beneficiaries: '20 youth leaders + community',
    duration: '2025–2026',
    donor: '—',
    objectives: {
      en: [
        'Advanced training in accountability, investigative journalism, proposal writing and digital safety',
        'Produce an investigative report on water governance in Taiz',
        'Hold community accountability hearings with local authorities',
      ],
      ar: [
        'تدريب متقدم في المساءلة والصحافة الاستقصائية وكتابة المقترحات والسلامة الرقمية',
        'إنتاج تقرير استقصائي حول حوكمة المياه في تعز',
        'تنفيذ جلسات مساءلة مجتمعية مع السلطات المحلية',
      ],
    },
    results: {
      en: [
        '20 youth leaders trained in advanced advocacy skills',
        'Investigative report: "Deconstructing the Urban Water Crisis in Taiz"',
        'Working paper (2026): "Water Crisis: From Consumption to Production"',
        '2 community accountability hearings with Water Corporation and Cleaning Fund',
      ],
      ar: [
        'تدريب 20 قائداً شاباً في مهارات المناصرة المتقدمة',
        'تقرير استقصائي: "تفكيك أزمة المياه الحضرية في تعز"',
        'ورقة عمل (2026): "أزمة المياه: من الاستهلاك إلى الإنتاج"',
        'جلستا مساءلة مجتمعية مع مؤسسة المياه وصندوق النظافة',
      ],
    },
  },
  {
    slug: 'climate-justice-forum',
    title: {
      en: 'Climate & Social Justice Forum — Phase I',
      ar: 'منتدى العدالة الاجتماعية والمناخية — المرحلة الأولى',
    },
    excerpt: {
      en: 'Institutionalising youth-led climate action in Taiz through capacity building, policy papers and digital advocacy.',
      ar: 'مأسسة العمل المناخي الشبابي في تعز من خلال بناء القدرات وأوراق السياسات والمناصرة الرقمية.',
    },
    overview: {
      en: 'A dual-track intervention (2024) strengthening Ymnt\'s internal capacity while training 20 marginalised young women and men to launch the independent "Climate & Social Justice Forum" — a sustained platform for knowledge production, policy drafting and digital advocacy campaigns.',
      ar: 'تدخل استراتيجي مزدوج المسار (2024) عزز البنية الداخلية للمؤسسة، فيما درّب 20 شاباً وشابة من الفئات المهمشة وصولاً إلى تأسيس "منتدى العدالة الاجتماعية والمناخية" كمنصة شبابية مستقلة لإنتاج المعرفة وصياغة السياسات وقيادة المناصرة الرقمية.',
    },
    category: 'capacity',
    status: 'completed',
    image: forumP1Cover,
    gallery: [forumP1a, forumP1b],
    videoUrl: 'https://www.youtube.com/embed/98r3MOTnHgc',
    location: { en: 'Taiz Governorate', ar: 'محافظة تعز' },
    beneficiaries: '20 youth + community',
    duration: '2024',
    donor: '—',
    objectives: {
      en: [
        'Strengthen Ymnt\'s institutional and operational capacity',
        'Train 20 marginalised youth in climate action, leadership and advocacy',
        'Produce specialised policy papers diagnosing environmental and social challenges',
        'Run digital awareness campaigns on climate issues',
      ],
      ar: [
        'تعزيز البنية التحتية والقدرات التشغيلية لمؤسسة يمنت',
        'تدريب 20 شاباً وشابة من الفئات المهمشة في العمل المناخي والقيادة والمناصرة',
        'إنتاج أوراق سياسات متخصصة تشخص التحديات البيئية والمجتمعية',
        'تنفيذ حملات توعوية رقمية حول قضايا المناخ',
      ],
    },
    results: {
      en: [
        'Official launch of the Climate & Social Justice Forum',
        '20 youth leaders graduated, capable of leading climate and community action',
        'Policy paper: "Climate Change Impacts in Yemen"',
        'Policy paper: "Barriers to Social & Environmental Justice in Yemen"',
        'Strategic digital advocacy campaign across social platforms',
      ],
      ar: [
        'الإطلاق الرسمي لمنتدى العدالة الاجتماعية والمناخية',
        'تخريج 20 قائداً شاباً قادرين على قيادة العمل المناخي والمجتمعي',
        'ورقة سياسات: "تأثيرات التغير المناخي في الجمهورية اليمنية"',
        'ورقة سياسات: "عوائق تحقيق العدالة الاجتماعية والبيئية في اليمن"',
        'حملة مناصرة رقمية استراتيجية عبر منصات التواصل الاجتماعي',
      ],
    },
  },
  {
    slug: 'sasa-peace',
    title: {
      en: 'Sasa Peace — Digital Education & Peacebuilding',
      ar: 'ساسة سلام — التعليم الرقمي وبناء السلام',
    },
    excerpt: {
      en: 'A dedicated e-learning platform for the History & Political Science Department at Taiz University to fight academic dropout.',
      ar: 'منصة تعليم رقمي مخصصة لقسم التاريخ والعلوم السياسية بجامعة تعز للحد من التسرب الأكاديمي.',
    },
    overview: {
      en: 'Sasa Peace responded to Yemen\'s higher-education crisis by designing a comprehensive digital learning platform for the History & Political Science Department at Taiz University. The platform hosts curricula and references in good governance, peace and gender, complemented by classroom upgrades (Data Show projector) — moving from traditional teaching to inclusive, gender-sensitive digital education.',
      ar: 'استجابة نوعية لأزمة التعليم العالي في اليمن، حيث صممت المؤسسة منصة تعليم رقمي متكاملة لطلاب قسم التاريخ والعلوم السياسية بجامعة تعز، مجهزة بكافة المقررات والمراجع التخصصية في الحكم الرشيد والسلام والنوع الاجتماعي، مع تحديث القاعات بأجهزة عرض (Data Show) — للانتقال من التعليم التقليدي إلى التعليم الرقمي الدامج والحساس للنوع الاجتماعي.',
    },
    category: 'education',
    status: 'completed',
    image: sasaCover,
    gallery: [sasa1, sasa2],
    location: { en: 'Taiz University, Al-Qahira District', ar: 'جامعة تعز، مديرية القاهرة' },
    beneficiaries: '158 direct · 140 indirect',
    duration: '11–30 January 2022',
    donor: 'Generations Without Qat Foundation',
    objectives: {
      en: [
        'Design and launch a dedicated e-learning website for the department',
        'Upgrade classroom teaching tools (Data Show projector + stationery)',
        'Mainstream gender by engaging young women in the technical team',
      ],
      ar: [
        'تصميم وإطلاق موقع إلكتروني تعليمي مخصص للقسم',
        'تحديث أدوات التدريس بالقاعات (جهاز عرض رقمي ومستلزمات قرطاسية)',
        'تعميم النوع الاجتماعي عبر إشراك الشابات في الفريق التقني',
      ],
    },
    results: {
      en: [
        'Integrated e-learning platform with full curriculum, free access for 280 students',
        'Data Show projector and supplies delivered to the department',
        'Sustainability MoU signed with the department head',
        'Young technical team (incl. a female designer) launched their own web-design start-up in Taiz',
      ],
      ar: [
        'منصة تعليم رقمي متكاملة بالمنهج كاملاً ووصول مجاني لـ 280 طالباً وطالبة',
        'تسليم جهاز عرض رقمي ومستلزمات قرطاسية للقسم',
        'توقيع مذكرة استدامة مع رئاسة القسم',
        'تأسيس الفريق الفني الشاب (وبينهم شابة) لشركة ناشئة لتصميم المواقع في تعز',
      ],
    },
  },
  {
    slug: 'solar-cookers',
    title: {
      en: 'Solar Cookers — Environmental Justice & Green Empowerment',
      ar: 'الطباخات الشمسية — العدالة البيئية والتمكين الأخضر',
    },
    excerpt: {
      en: 'Transferring solar-cooker technology to Taiz to curb deforestation and equip youth with green skills.',
      ar: 'نقل تكنولوجيا الطباخ الشمسي إلى تعز للحد من قطع الأشجار وتزويد الشباب بمهارات خضراء.',
    },
    overview: {
      en: 'A flagship green intervention linking emergency response with long-term environmental solutions. Through specialised workshops, 10 young women and men from vulnerable groups were trained to locally manufacture solar cookers from local materials — reducing logging, easing household fuel costs, and protecting women and girls from the safety and health risks of firewood collection.',
      ar: 'أحد أبرز التدخلات البيئية المستدامة التي تربط الاستجابة الإنسانية بالحلول البيئية طويلة الأجل. عبر ورش تدريبية متخصصة، تم تأهيل 10 شباب وشابات من الفئات الضعيفة على صناعة الطباخات الشمسية محلياً من خامات محلية — مما يحد من التحطيب الجائر، ويخفف نفقات الوقود على الأسر، ويحمي النساء والفتيات من مخاطر جمع الحطب.',
    },
    category: 'climate',
    status: 'completed',
    image: cookersCover,
    gallery: [cook1, cook2, cook3, cook4],
    location: { en: 'Taiz Governorate', ar: 'محافظة تعز' },
    beneficiaries: '10 trainees + low-income families',
    duration: '2022',
    donor: '—',
    objectives: {
      en: [
        'Build green capacities of 10 young women and men in solar-cooker manufacturing',
        'Localise solar-cooker technology in Taiz to reduce deforestation',
        'Provide families with a safe, free energy alternative',
      ],
      ar: [
        'بناء القدرات الخضراء لـ 10 شباب وشابات في صناعة الطباخات الشمسية',
        'توطين تكنولوجيا الطباخ الشمسي في تعز للحد من قطع الأشجار',
        'تزويد الأسر ببديل طاقة آمن ومجاني',
      ],
    },
    results: {
      en: [
        'Solar-cooker technology introduced in Taiz for the first time',
        '10 young women and men trained in design, manufacture and testing',
        'Knowledge guide "Solar Cooker Manufacturing Manual" published',
        'Gradual reduction in firewood use in targeted areas',
      ],
      ar: [
        'إدخال تكنولوجيا الطباخ الشمسي إلى تعز لأول مرة',
        'تدريب 10 شباب وشابات على التصميم والصناعة والاختبار',
        'إصدار "دليل صناعة الطباخ الشمسي" كمرجع معرفي',
        'الاستغناء التدريجي عن التحطيب في المناطق المستهدفة',
      ],
    },
  },
  {
    slug: 'sawaseya',
    title: {
      en: 'Sawaseya — Digital Advocacy & Social Justice',
      ar: 'سواسية — المناصرة الرقمية والعدالة الاجتماعية',
    },
    excerpt: {
      en: 'A digital and field advocacy campaign confronting discrimination against marginalised communities in Taiz schools.',
      ar: 'حملة مناصرة رقمية وميدانية لمواجهة التمييز ضد الفئات المهمشة في مدارس تعز.',
    },
    overview: {
      en: 'Sawaseya combined development-driven media on social platforms with field tactics (mural art) to raise awareness around human rights, end marginalisation and stigma, and showcase marginalised leaders as genuine partners in peacebuilding.',
      ar: 'حملة مناصرة شاملة جمعت بين الإعلام التنموي على منصات التواصل والتكتيكات الميدانية (الفن الجداري) لرفع الوعي بحقوق الإنسان، وإنهاء التهميش والوصم، وإبراز قيادات المهمشين كشركاء حقيقيين في بناء السلام.',
    },
    category: 'advocacy',
    status: 'completed',
    image: sawaseyaCover,
    gallery: [saw1, saw2, saw3, saw4, saw5, saw6],
    videoUrl: 'https://www.youtube.com/embed/679qE0a8r3E',
    location: { en: 'Taiz – Al-Qahira District (field + digital)', ar: 'تعز - مديرية القاهرة (ميدانياً ورقمياً)' },
    beneficiaries: '1,069 direct · 1,360 indirect',
    duration: '1–30 November 2021',
    donor: 'Shabab Saba Foundation for Development',
    objectives: {
      en: [
        'Launch a specialised digital platform on human-rights awareness and peacebuilding',
        'Promote inspiring role models from marginalised youth and women',
        'Counter discrimination and racism in school environments through expressive art',
      ],
      ar: [
        'إطلاق منصة رقمية متخصصة لتوعية المجتمع بحقوق الإنسان وبناء السلام',
        'الترويج لنماذج قيادية ملهمة من الشباب والنساء المهمشين',
        'مكافحة التمييز والعنصرية في البيئات التعليمية عبر التدخلات الفنية',
      ],
    },
    results: {
      en: [
        'Sawaseya digital platform launched (400+ engaged followers)',
        '5 visual posters, 3 rights-based cartoons, 9 development articles, 3 human stories, 18 boosted strategic posts',
        '2 documentary video reports of inspiring marginalised leaders, screened to 20 activists on Zoom',
        '2 expressive murals in front of Hamza Girls School and Mu\'adh Boys School reaching 1,000+ students',
      ],
      ar: [
        'إطلاق منصة سواسية الرقمية (+400 متابع متفاعل)',
        '5 صور تعبيرية و3 رسوم كاريكاتورية حقوقية و9 مقالات تنموية و3 قصص إنسانية و18 منشوراً مموّلاً استراتيجياً',
        'ريبورتاجان مرئيان لقصص نجاح قيادية ملهمة، عُرضا في ندوة Zoom لـ 20 ناشطاً',
        'جداريتان فنيتان أمام مدرستي الحمزة للبنات ومعاذ للبنين تصلان لأكثر من 1,000 طالب وطالبة',
      ],
    },
  },
  {
    slug: 'noortmona',
    title: {
      en: 'Noortmona — Solar Lighting for Safer Neighbourhoods',
      ar: 'نورتمونا — إنارة شمسية لأحياء أكثر أماناً',
    },
    excerpt: {
      en: 'Solar street lighting in three Taiz neighbourhoods to strengthen environmental justice and community security.',
      ar: 'إنارة شمسية لشوارع ثلاثة أحياء في تعز لتعزيز العدالة البيئية والأمن المجتمعي.',
    },
    overview: {
      en: 'Ymnt\'s founding intervention: installing 15 solar streetlights across three Taiz neighbourhoods while engaging marginalised youth in planning and implementation — embedding clean energy and civic participation from day one.',
      ar: 'التدخل التأسيسي لمؤسسة يمنت: تركيب 15 إنارة شمسية في ثلاثة أحياء بتعز، مع إشراك الشباب من الفئات الضعيفة في التخطيط والتنفيذ — لترسيخ الطاقة النظيفة والمشاركة المدنية منذ البداية.',
    },
    category: 'climate',
    status: 'completed',
    image: noortmonaCover,
    gallery: [noort1, noort2, noort3, noort4, noort5, noort6],
    videoUrl: 'https://www.youtube.com/embed/mQ8G9RXat1U',
    location: { en: 'Taiz – three neighbourhoods', ar: 'تعز - ثلاثة أحياء' },
    beneficiaries: 'Residents of 3 neighbourhoods',
    duration: '2021',
    donor: '—',
    objectives: {
      en: [
        'Promote environmental justice and community safety through clean energy',
        'Engage marginalised youth in planning and implementing community infrastructure',
      ],
      ar: [
        'تعزيز العدالة البيئية والأمن المجتمعي عبر الطاقة النظيفة',
        'إشراك الشباب من الفئات الضعيفة في التخطيط والتنفيذ للبنية المجتمعية',
      ],
    },
    results: {
      en: ['15 solar streetlights installed', '3 neighbourhoods served', 'Marginalised youth integrated into project leadership'],
      ar: ['تركيب 15 إنارة شمسية', 'خدمة 3 أحياء', 'دمج الشباب من الفئات المهمشة في قيادة المشروع'],
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
    slug: 'water-governance-report-2026',
    title: {
      en: 'New investigative report: Deconstructing the urban water crisis in Taiz',
      ar: 'تقرير استقصائي جديد: تفكيك أزمة المياه الحضرية في تعز',
    },
    excerpt: {
      en: 'From natural scarcity to a governance and institutional waste crisis — our 2026 report.',
      ar: 'من ندرة طبيعية إلى أزمة حوكمة وهدر مؤسسي — تقريرنا لعام 2026.',
    },
    body: {
      en: 'As part of Phase II of the Climate & Social Justice Forum, Ymnt published a qualitative investigative report on urban water governance in Taiz, followed by two community accountability hearings with the Water Corporation and Cleaning Fund.',
      ar: 'في إطار المرحلة الثانية من منتدى العدالة المناخية والاجتماعية، أصدرت مؤسسة يمنت تقريراً استقصائياً نوعياً حول حوكمة المياه الحضرية في تعز، أعقبته جلستا مساءلة مجتمعية مع مؤسسة المياه وصندوق النظافة.',
    },
    date: '2026-03-10',
    category: { en: 'Report', ar: 'تقرير' },
    image: forumP2b,
  },
  {
    slug: 'forum-graduation-2024',
    title: {
      en: '20 young leaders graduate from the Climate & Social Justice Forum',
      ar: 'تخريج 20 قائداً شاباً من منتدى العدالة المناخية والاجتماعية',
    },
    excerpt: {
      en: 'A new generation of marginalised youth equipped to lead climate and rights advocacy in Yemen.',
      ar: 'جيل جديد من الشباب المهمشين مؤهل لقيادة المناصرة المناخية والحقوقية في اليمن.',
    },
    body: {
      en: 'Phase I (2024) concluded with the official launch of the Forum, two published policy papers and a wide digital advocacy campaign.',
      ar: 'اختتمت المرحلة الأولى (2024) بالإطلاق الرسمي للمنتدى وإصدار ورقتي سياسات وحملة مناصرة رقمية واسعة.',
    },
    date: '2024-12-18',
    category: { en: 'Milestone', ar: 'إنجاز' },
    image: forumP1b,
  },
  {
    slug: 'environmental-honor-charter',
    title: {
      en: '“Environmental Honor Charter” signed with local authority and community leaders',
      ar: 'توقيع "وثيقة شرف للحفاظ على البيئة" مع السلطة المحلية وعقال الحارات',
    },
    excerpt: {
      en: 'A consultative meeting that turned into a binding community commitment for the environment.',
      ar: 'لقاء تشاوري تحوّل إلى التزام مجتمعي ملزم تجاه البيئة.',
    },
    body: {
      en: 'Ymnt convened the local authority, security, and neighbourhood elders for a consultative meeting in Taiz, culminating in the signing of an "Environmental Honor Charter".',
      ar: 'جمعت مؤسسة يمنت السلطة المحلية والأمن وعقال الحارات في لقاء تشاوري في تعز، توّج بتوقيع "وثيقة شرف للحفاظ على البيئة".',
    },
    date: '2025-09-04',
    category: { en: 'Advocacy', ar: 'مناصرة' },
    image: forumP2c,
  },
];

export interface Partner {
  name: { en: string; ar: string };
  logo: string;
}

export const partners: Partner[] = [
  { name: { en: 'Sheba Youth Foundation for Development', ar: 'مؤسسة شباب سبأ للتنمية' }, logo: pShebaYouth },
  { name: { en: 'Generations Without Qat', ar: 'مؤسسة أجيال بلا قات' }, logo: pGenerations },
  { name: { en: 'Center for Peace and Climate Studies (CPCS)', ar: 'مركز دراسات السلام والمُناخ' }, logo: pCpcs },
  { name: { en: 'Youth Climate Justice Fund', ar: 'صندوق العدالة المناخية للشباب' }, logo: pYcjf },
  { name: { en: 'Light for Media', ar: 'لايت فور ميديا' }, logo: pLightForMedia },
  { name: { en: 'Partner Organisation', ar: 'منظمة شريكة' }, logo: pUnknown },
];

export interface TeamMember {
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  email?: string;
  reportsTo?: 'chair' | 'ceo' | 'ops';
  key?: string;
}

export const board: TeamMember[] = [
  {
    key: 'chair',
    name: { en: 'Maria Adam Seif Ismail', ar: 'ماريا آدم سيف إسماعيل' },
    role: { en: 'Chairperson — Board of Trustees', ar: 'رئيسة مجلس الأمناء' },
    email: 'mariaadmsayf@gmail.com',
  },
];

export const staff: TeamMember[] = [
  {
    key: 'ceo',
    name: { en: 'Khalil Ahmed Ali Jubarah', ar: 'خليل أحمد علي جبارة' },
    role: { en: 'Chief Executive Officer (CEO)', ar: 'المدير التنفيذي' },
    email: 'Khaliljubarah@gmail.com',
    reportsTo: 'chair',
  },
  {
    key: 'finance',
    name: { en: 'Muhab Muhammad Abd al-Nour Mahyoub', ar: 'مهاب محمد عبدالنور مهيوب' },
    role: { en: 'Financial Officer', ar: 'المسؤول المالي' },
    email: 'acc.muhab@gmail.com',
    reportsTo: 'ceo',
  },
  {
    key: 'ops',
    name: { en: 'Mohammed Abdulrahman Farea Al-Hamadi', ar: 'محمد عبدالرحمن فارع الحمادي' },
    role: { en: 'Operations Officer', ar: 'مسؤول العمليات' },
    email: 'Alhammmm80@gmail.com',
    reportsTo: 'ceo',
  },
  {
    key: 'media',
    name: { en: 'Hamdi Abdullah Qaid Ali', ar: 'حمدي عبدالله قائد علي' },
    role: { en: 'Media Officer', ar: 'مسؤول الإعلام' },
    email: 'hamdialhilali0@gmail.com',
    reportsTo: 'ops',
  },
  {
    key: 'meal',
    name: { en: 'Zainab Gamal Abdulrahman Ahmed', ar: 'زينب جمال عبدالرحمن أحمد' },
    role: { en: 'MEAL Officer', ar: 'مسؤولة الرصد والتقييم والتعلم والمساءلة' },
    email: 'zainabgmal0000@gmail.com',
    reportsTo: 'ops',
  },
  {
    key: 'logistics',
    name: { en: 'Omaima Khalid Mohammed Asaad', ar: 'أميمة خالد محمد أسعد' },
    role: { en: 'Logistics Officer', ar: 'مسؤولة اللوجستيات' },
    email: 'omaimaasaad4@gmail.com',
    reportsTo: 'ops',
  },
];

export const opportunities: any[] = [];

export const policies = [
  { key: 'hr', en: 'Human Resources Manual', ar: 'دليل الموارد البشرية' },
  { key: 'finance', en: 'Financial Management Manual', ar: 'دليل الإدارة المالية' },
  { key: 'procurement', en: 'Procurement & Logistics Manual', ar: 'دليل المشتريات واللوجستيات' },
  { key: 'governance', en: 'Governance Manual (Conflict of Interest, Whistleblowing, Transparency, Code of Conduct)', ar: 'دليل الحوكمة (تضارب المصالح، حماية المبلغين، الشفافية، مدونة السلوك)' },
  { key: 'do-no-harm', en: 'Do No Harm & Risk Management Matrix', ar: 'مبدأ عدم الإضرار ومصفوفة إدارة المخاطر' },
];

export const reports = [
  { key: 'water-paper-2026', en: 'Working Paper (2026): Water Crisis — From Consumption to Production', ar: 'ورقة عمل (2026): أزمة المياه — من الاستهلاك إلى الإنتاج' },
  { key: 'water-investigative-2026', en: 'Investigative Report (2026): Deconstructing the Urban Water Crisis in Taiz', ar: 'تقرير استقصائي (2026): تفكيك أزمة المياه الحضرية في تعز' },
  { key: 'climate-policy-2024', en: 'Policy Paper (2024): Climate Change Impacts in Yemen', ar: 'ورقة سياسات (2024): تأثيرات التغير المناخي في اليمن' },
  { key: 'justice-policy-2024', en: 'Policy Paper (2024): Barriers to Social & Environmental Justice', ar: 'ورقة سياسات (2024): عوائق العدالة الاجتماعية والبيئية' },
  { key: 'solar-cooker-guide-2022', en: 'Knowledge Guide (2022): Solar Cooker Manufacturing Manual', ar: 'دليل معرفي (2022): دليل صناعة الطباخ الشمسي' },
];

export const legalDocs = [
  { key: 'registration', en: 'NGO Registration Certificate No. 60/M/2025', ar: 'شهادة إشهار رقم (60/م/2025)' },
  { key: 'license', en: 'Activity Practice License No. 99/2025', ar: 'تصريح مزاولة النشاط رقم (99) لعام 2025' },
];

export const financials = [
  { key: 'operational-budget', en: 'Detailed operational and programmatic budgets', ar: 'ميزانيات تشغيلية وبرامجية مفصلة' },
  { key: 'audit', en: 'Audited financial statements (on request)', ar: 'قوائم مالية مدققة (عند الطلب)' },
];

// External resources hosted on Google Drive / YouTube
export interface ResourceLink {
  key: string;
  title: { en: string; ar: string };
  url: string;
  type: 'folder' | 'file' | 'video';
}

export const externalResources: ResourceLink[] = [
  {
    key: 'founding-docs',
    title: { en: 'Founding documents & bylaws', ar: 'ملفات التأسيس والنظام الأساسي' },
    url: 'https://drive.google.com/drive/folders/1Zkh-RCsM30uVsxVGN94hv0SD93Wap666?usp=sharing',
    type: 'folder',
  },
  {
    key: 'work-permit-2026',
    title: { en: 'Activity Practice License 2026', ar: 'تصريح عمل المؤسسة لعام 2026' },
    url: 'https://drive.google.com/file/d/1FeJHgZP-djkcUekddmkrWJxOqwo6eNKX/view?usp=sharing',
    type: 'file',
  },
  {
    key: 'bank-accounts',
    title: { en: 'Foundation bank accounts', ar: 'الحسابات البنكية للمؤسسة' },
    url: 'https://drive.google.com/drive/folders/1DNe0c9pwPToTMnLaiPYFUHBI-lzPp57K?usp=sharing',
    type: 'folder',
  },
  {
    key: 'policies-manuals',
    title: { en: 'Policies & operational manuals', ar: 'الأدلة والسياسات الخاصة بالمؤسسة' },
    url: 'https://drive.google.com/drive/folders/1TzWE8hfa05b4evjMuJHsj0z5MwpyjzmN?usp=sharing',
    type: 'folder',
  },
  {
    key: 'publications',
    title: { en: 'Publications & knowledge production', ar: 'الإصدارات والإنتاج المعرفي' },
    url: 'https://drive.google.com/drive/folders/1xfKeURBFeDrf8Q_WgpM4ELLqrdHHqnar?usp=sharing',
    type: 'folder',
  },
];

export interface VideoItem {
  key: string;
  title: { en: string; ar: string };
  youtubeId: string;
}

export const videos: VideoItem[] = [
  {
    key: 'forum-1',
    title: { en: 'Climate & Social Justice Forum — Phase I', ar: 'منتدى العدالة الاجتماعية والمناخية — المرحلة الأولى' },
    youtubeId: '98r3MOTnHgc',
  },
  {
    key: 'noortmona',
    title: { en: 'Noortmona — Solar Lighting Project', ar: 'مشروع نورتمونا — الإنارة الشمسية' },
    youtubeId: 'mQ8G9RXat1U',
  },
  {
    key: 'sawaseya-misk',
    title: { en: 'Sawaseya Success Story: Misk', ar: 'قصة نجاح مسك من مشروع سواسية' },
    youtubeId: '679qE0a8r3E',
  },
  {
    key: 'sawaseya-akram',
    title: { en: 'Sawaseya Success Story: Akram', ar: 'قصة نجاح أكرم من مشروع سواسية' },
    youtubeId: 'hQ_q3j3uI-U',
  },
];
