export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLinkItem {
  name: 'LinkedIn' | 'GitHub' | 'WhatsApp' | 'Instagram';
  href: string;
  handle: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
  iconName: 'brain' | 'code' | 'palette' | 'book' | 'award';
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  status: 'current' | 'completed';
  detail: string;
}

export interface InternshipEntry {
  id: string;
  role: string;
  domain: string;
  highlights: string[];
  summary: string;
  iconKey: 'chart' | 'cloud';
}

export interface ProgrammingLanguage {
  name: string;
  key: 'c' | 'python' | 'java';
  focus: string;
}

export interface SkillGroupCard {
  title: string;
  subtitle: string;
  items: string[];
  description: string;
  iconKey: 'database' | 'layout';
}

export interface CoreCompetency {
  title: string;
  description: string;
  iconName: 'users' | 'message' | 'zap';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  previewType: 'portfolio' | 'spider';
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialType: string;
  issuedDate?: string;
  credentialId?: string;
  summary: string;
  highlights: string[];
  pdfUrl?: string;
  verifyUrl?: string;
}

export interface LanguageProficiency {
  language: string;
  level: string;
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: 'sparkles' | 'compass' | 'book' | 'cpu';
}

export const PORTFOLIO_PROFILE = {
  initials: 'SK',
  fullName: 'Sirisha Kommireddy',
  headline: "Hello, I'm Sirisha Kommireddy.",
  subtitle: 'Artificial Intelligence Student | Aspiring Software Developer',
  heroDescription:
    'I am a third-year B.Sc. Artificial Intelligence student who enjoys turning complex logic into clean, reliable software. From C, Python, and Java to databases, Power BI analytics, Azure cloud computing, and interactive front-end design, I focus on building practical solutions while continuously expanding my craft.',
  location: 'Bhimavaram, Andhra Pradesh, India',
  email: 'sirishakommireddy07@gmail.com',
  phone: '+91 9398305560',
  phoneHref: 'tel:+919398305560',
  linkedin: 'https://linkedin.com/in/sirisha-kommireddy',
  github: 'https://github.com/sirishakommireddy07-cell',
  whatsapp: 'https://wa.me/919398305560',
  instagram: 'https://www.instagram.com/',
};

export const SOCIAL_PROFILES: SocialLinkItem[] = [
  {
    name: 'LinkedIn',
    href: PORTFOLIO_PROFILE.linkedin,
    handle: 'sirisha-kommireddy',
  },
  {
    name: 'GitHub',
    href: PORTFOLIO_PROFILE.github,
    handle: 'sirishakommireddy',
  },
  {
    name: 'WhatsApp',
    href: PORTFOLIO_PROFILE.whatsapp,
    handle: '+91 9398305560',
  },
  {
    name: 'Instagram',
    href: PORTFOLIO_PROFILE.instagram,
    handle: 'Instagram',
  },
];

export const NAV_ITEMS: NavItem[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'education', label: 'Education'},
  {id: 'internships', label: 'Internships'},
  {id: 'skills', label: 'Skills'},
  {id: 'projects', label: 'Projects'},
  {id: 'certifications', label: 'Certifications'},
  {id: 'contact', label: 'Contact'},
];

export const ABOUT_NARRATIVE = {
  heading: 'A Little About Me',
  paragraphs: [
    'Currently in my third year of B.Sc. Artificial Intelligence at Sri Aditya Degree College, Bhimavaram, I maintain a strong academic standing of 77% while exploring how intelligent systems, cloud computing, and clean software engineering intersect.',
    'My technical training combines programming fundamentals in C, Python, and Java with database management across MySQL, PL/SQL, and MongoDB—alongside practical internship experience in Power BI data visualization and Microsoft Azure cloud computing.',
    'Beyond structured coursework, I lean into creative problem solving—whether crafting coordinate-driven browser animations or earning certifications across Coursera, Cisco Networking Academy, and AWS Machine Learning—driven by a commitment to continuous learning.',
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    title: 'Institution & Academics',
    description:
      'Pursuing B.Sc. Artificial Intelligence (3rd Year, 77%) at Sri Aditya Degree College after scoring 72.5% in ISC Intermediate.',
    iconName: 'award',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Building a disciplined understanding of machine learning principles, AWS AI/ML workflows, and intelligent problem solving.',
    iconName: 'brain',
  },
  {
    title: 'Programming & Cloud Data',
    description:
      'Working across C, Python, Java, DBMS (MySQL, PL/SQL, MongoDB), Power BI dashboards, and Azure Cloud Computing.',
    iconName: 'code',
  },
  {
    title: 'Creative Skills',
    description:
      'Blending visual design sensibility with geometric math to craft responsive layouts and interactive canvas motion.',
    iconName: 'palette',
  },
  {
    title: 'Continuous Learning',
    description:
      'Actively expanding skills through internships, Coursera, Cisco Networking Academy, AWS Machine Learning, and U-Learn.',
    iconName: 'book',
  },
];

export const EDUCATION_LIST: EducationEntry[] = [
  {
    degree: 'B.Sc. Artificial Intelligence',
    institution: 'Sri Aditya Degree College',
    location: 'Bhimavaram',
    period: 'Currently Pursuing – 3rd Year',
    score: '77%',
    status: 'current',
    detail:
      'Undergraduate program focused on artificial intelligence, programming languages, database management systems, and software engineering.',
  },
  {
    degree: 'Intermediate – ISC',
    institution: 'Flaiz Memorial College',
    location: 'Narasapuram',
    period: '2024',
    score: '72.5%',
    status: 'completed',
    detail: 'Completed higher secondary education under the Indian School Certificate curriculum.',
  },
  {
    degree: '10th – ICSE',
    institution: 'Flaiz Memorial Higher School',
    location: 'Narasapuram',
    period: '2022',
    score: '65%',
    status: 'completed',
    detail: 'Completed secondary school education under the Indian Certificate of Secondary Education board.',
  },
];

export const INTERNSHIPS_LIST: InternshipEntry[] = [
  {
    id: 'power-bi-internship',
    role: 'Power BI Internship',
    domain: 'Data Analytics & Business Intelligence',
    summary:
      'Gained practical experience transforming raw datasets into structured data models and interactive visual dashboards for clear reporting and analytical decision-making.',
    highlights: ['Interactive Dashboards', 'Data Modeling & Transformation', 'Visual Reporting'],
    iconKey: 'chart',
  },
  {
    id: 'azure-cloud-internship',
    role: 'Azure Cloud Computing Internship',
    domain: 'Cloud Infrastructure & Services',
    summary:
      'Completed hands-on internship training in Microsoft Azure cloud fundamentals, resource provisioning, virtualized environments, and scalable cloud deployment concepts.',
    highlights: ['Azure Cloud Fundamentals', 'Resource Management', 'Cloud Deployment Concepts'],
    iconKey: 'cloud',
  },
];

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    name: 'C Programming',
    key: 'c',
    focus: 'Procedural logic, pointers, memory awareness, and foundational data structures.',
  },
  {
    name: 'Python',
    key: 'python',
    focus: 'Algorithmic problem solving, data visualization, and AI/ML foundations.',
  },
  {
    name: 'Java',
    key: 'java',
    focus: 'Object-oriented design, structured application logic, and modular coding.',
  },
];

export const TECHNICAL_DOMAINS: SkillGroupCard[] = [
  {
    title: 'Database Management (DBMS)',
    subtitle: 'MySQL · PL/SQL · MongoDB',
    items: ['MySQL', 'PL/SQL', 'MongoDB'],
    description:
      'Designing relational schemas, writing stored procedures and queries in MySQL and PL/SQL, and working with document-oriented MongoDB collections.',
    iconKey: 'database',
  },
  {
    title: 'Frontend Development',
    subtitle: 'HTML5 · CSS3 · JavaScript · React · Tailwind CSS',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    description:
      'Building accessible, responsive user interfaces with light/dark theming, clean component architecture, and interactive HTML5 Canvas motion.',
    iconKey: 'layout',
  },
];

export const CORE_COMPETENCIES: CoreCompetency[] = [
  {
    title: 'Communication Skills',
    description:
      'Conveying technical ideas clearly in documentation, presentations, and collaborative discussions.',
    iconName: 'message',
  },
  {
    title: 'Teamwork',
    description:
      'Collaborating reliably across shared academic projects, problem solving, and group milestones.',
    iconName: 'users',
  },
  {
    title: 'Quick Learning',
    description:
      'Adapting rapidly to new tools, frameworks, cloud platforms, and programming paradigms.',
    iconName: 'zap',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Responsive Web Design & UI Engineering',
    description:
      'Designed and built a modern, light-first personal portfolio featuring persistent Light and Dark mode switching, an interactive CV preview and download workflow, project showcases, and accessible navigation across all viewports.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
   githubUrl: 'https://github.com/sirishakommireddy07-cell/sirisha',
    previewType: 'portfolio',
    featured: true,
  },
  {
    id: 'interactive-spider-animation',
    title: 'Interactive Spider Animation Design',
    category: 'Interactive Front-End & Coordinate Geometry',
    description:
      'Developed a responsive front-end visual layout demonstrating dynamic path movements and physics tracking. Handled geometric coordinate configurations to create fluid spider-leg animation responses through user interactions.',
    technologies: ['HTML5 Canvas', 'JavaScript', 'CSS3', 'Coordinate Geometry', 'Inverse Kinematics'],
    githubUrl: 'https://github.com/sirishakommireddy07-cell/spider-animation',
    previewType: 'spider',
    featured: true,
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'aws-ml-basics',
    title: 'AWS Foundations: Machine Learning Basics',
    issuer: 'AWS & Simplilearn SkillUP',
    credentialType: 'Cloud & AI Certificate · Verified',
    issuedDate: '12 Nov 2026',
    credentialId: 'Certificate Code: 11023719',
    summary:
      'Completed AWS Foundations: Machine Learning Basics through Simplilearn SkillUP, covering core machine learning concepts and AWS ML workflows.',
    highlights: ['Machine Learning Basics', 'AWS ML Foundations', 'Verified Completion'],
    pdfUrl: '/assets/aistudio/simple_learn_.AWS_ML_28da98a2.pdf',
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    credentialType: 'Networking Certificate · Verified',
    issuedDate: '24 Nov 2026',
    credentialId: 'Cert ID: 49c8d2bf-e4fd-4238-b2af-14b09995360d',
    summary:
      'Completed Networking Basics offered by Networking Academy through the Cisco Networking Academy program.',
    highlights: ['Network Protocols', 'IP Addressing', 'Cisco Networking Academy'],
    pdfUrl:
      '/assets/aistudio/Networking_Basics_certificate_sirishakommireddy07-gmail-com_49c8d2bf-e4fd-4238-b2af-14b09995360d__1__678baa67.pdf',
  },
  {
    id: 'coursera-python-dataviz',
    title: 'Data Visualization & Storytelling in Python',
    issuer: 'Coursera · Stemplicity',
    credentialType: 'Project Certificate · Verified',
    issuedDate: 'May 8, 2026',
    credentialId: 'Verify ID: I9V6JGOSUM3Q',
    summary:
      'Completed the Coursera guided project authorized by Coursera and led by Dr. Ryan Ahmed, focusing on visual storytelling with Python.',
    highlights: ['Data Visualization', 'Python Storytelling', 'Coursera Verified'],
    pdfUrl: '/assets/aistudio/crosera_1_97dd1ba2.pdf',
    verifyUrl: 'https://coursera.org/verify/I9V6JGOSUM3Q',
  },
  {
    id: 'cisco-c-essentials',
    title: 'C Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialType: 'Programming Certification',
    summary:
      'Completed Parts 1 & 2 covering C syntax, control structures, functions, pointers, memory management, and modular development.',
    highlights: ['Pointers & Memory', 'Modular Functions', 'Structured Data'],
  },
  {
    id: 'cisco-python-essentials',
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialType: 'Programming Certification',
    summary:
      'Completed Parts 1 & 2 mastering Python fundamentals, data collections, exception handling, and object-oriented programming.',
    highlights: ['Core Syntax & Logic', 'Object-Oriented Python', 'Modules & Packages'],
  },
  {
    id: 'mepro-pearson',
    title: 'Mepro Pearson',
    issuer: 'Pearson',
    credentialType: 'English Proficiency Certification',
    summary:
      'Verified proficiency in professional English reading, writing, listening, and structured workplace communication.',
    highlights: ['Business Communication', 'Reading & Listening', 'Written Clarity'],
  },
  {
    id: 'ulearn-aws-ml',
    title: 'AI & ML in AWS Machine Learning',
    issuer: 'U-Learn',
    credentialType: 'Applied AI & ML Certification',
    summary:
      'Completed hands-on coursework focused on applying Artificial Intelligence and Machine Learning concepts within AWS.',
    highlights: ['Applied AI Concepts', 'AWS ML Pipeline', 'Practical Use Cases'],
  },
];

export const LANGUAGES_SPOKEN: LanguageProficiency[] = [
  {language: 'English', level: 'Professional'},
  {language: 'Telugu', level: 'Native'},
  {language: 'Hindi', level: 'Proficient'},
];

export const PERSONAL_INTERESTS: InterestItem[] = [
  {
    title: 'Creative Coding & Motion Geometry',
    description: 'Experimenting with coordinate math, inverse kinematics, and interactive browser visuals.',
    iconName: 'sparkles',
  },
  {
    title: 'AI Tools in Daily Developer Workflows',
    description: 'Exploring how modern AI assistants accelerate learning, debugging, and rapid prototyping.',
    iconName: 'cpu',
  },
  {
    title: 'Exploring Emerging Tech & Cloud Systems',
    description: 'Keeping up with advancements in machine learning, cloud platforms, and modern databases.',
    iconName: 'compass',
  },
  {
    title: 'Reading Technical Books',
    description: 'Deepening software engineering instincts through foundational computer science and design books.',
    iconName: 'book',
  },
];
