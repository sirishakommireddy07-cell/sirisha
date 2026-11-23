export interface NavItem {
  id: string;
  label: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
  iconName: 'brain' | 'code' | 'compass' | 'lightbulb' | 'book';
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

export interface ProgrammingLanguage {
  name: string;
  key: 'python' | 'java' | 'c';
  focus: string;
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
  hasInteractiveDemo: boolean;
  featured: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialType: string;
  summary: string;
}

export interface LanguageProficiency {
  language: string;
  level: string;
}

export const PORTFOLIO_PROFILE = {
  initials: 'SK',
  fullName: 'Sirisha Kommireddy',
  headline: "Hello, I'm Sirisha Kommireddy.",
  subtitle: 'Artificial Intelligence Student | Aspiring Software Developer',
  heroDescription:
    "I'm a passionate Artificial Intelligence student who enjoys programming, exploring emerging technologies and building creative digital experiences. I believe in continuous learning and turning ideas into practical solutions.",
  portraitImage: '/src/assets/images/hero_profile_portrait_1795415217808.jpg',
  location: 'Bhimavaram, Andhra Pradesh, India',
  email: 'sirishakommireddy07@gmail.com',
  phone: '+91 9398305560',
  phoneHref: 'tel:+919398305560',
  linkedin: 'https://linkedin.com/in/sirisha-kommireddy',
  github: 'https://github.com/sirishakommireddy',
};

export const NAV_ITEMS: NavItem[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'education', label: 'Education'},
  {id: 'skills', label: 'Skills'},
  {id: 'projects', label: 'Projects'},
  {id: 'certifications', label: 'Certifications'},
  {id: 'contact', label: 'Contact'},
];

export const ABOUT_NARRATIVE = {
  heading: 'A Little About Me',
  paragraphs: [
    'I am a third-year B.Sc. Artificial Intelligence student at Sri Aditya Degree College in Bhimavaram, building a strong foundation in algorithms, software development, and intelligent systems.',
    'What draws me most to technology is the intersection of logical structure and visual clarity—writing clean code that solves real problems while creating interfaces that feel intuitive and thoughtful.',
    'Beyond coursework, I enjoy studying how modern AI tools can streamline everyday developer workflows, reading technical books, and experimenting with interactive front-end geometry.',
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    title: 'Artificial Intelligence',
    description: 'Studying core AI concepts, structured problem representation, and practical intelligent tooling.',
    iconName: 'brain',
  },
  {
    title: 'Programming',
    description: 'Writing readable, maintainable code across Python, Java, C, and modern web technologies.',
    iconName: 'code',
  },
  {
    title: 'Modern Technologies',
    description: 'Exploring responsive web architecture, interactive graphics, and contemporary developer ecosystems.',
    iconName: 'compass',
  },
  {
    title: 'Creative Problem Solving',
    description: 'Breaking down complex spatial or logical challenges into clear, testable implementations.',
    iconName: 'lightbulb',
  },
  {
    title: 'Continuous Learning',
    description: 'Committed to steady skill growth through technical reading, certifications, and hands-on builds.',
    iconName: 'book',
  },
];

export const EDUCATION_LIST: EducationEntry[] = [
  {
    degree: 'B.Sc. Artificial Intelligence',
    institution: 'Sri Aditya Degree College',
    location: 'Bhimavaram',
    period: 'Currently Pursuing – 3rd Year',
    status: 'current',
    detail: 'Undergraduate studies focused on artificial intelligence foundations, programming, and software engineering.',
  },
  {
    degree: 'Intermediate – ISC',
    institution: 'Flaiz Memorial College',
    location: 'Narasapuram',
    period: '2024',
    score: '70.05%',
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

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    name: 'Python',
    key: 'python',
    focus: 'Algorithmic problem solving, scripting, and foundational AI & data workflows.',
  },
  {
    name: 'Java',
    key: 'java',
    focus: 'Object-oriented programming, structured application logic, and modular design.',
  },
  {
    name: 'C Programming',
    key: 'c',
    focus: 'Low-level memory concepts, procedural logic, and core data structures.',
  },
];

export const CORE_COMPETENCIES: CoreCompetency[] = [
  {
    title: 'Teamwork',
    description: 'Collaborating constructively across shared academic builds, code reviews, and group milestones.',
    iconName: 'users',
  },
  {
    title: 'Communication',
    description: 'Articulating technical ideas clearly in writing and discussion with peers and mentors.',
    iconName: 'message',
  },
  {
    title: 'Quick Learning',
    description: 'Picking up new languages, libraries, and engineering workflows efficiently through practice.',
    iconName: 'zap',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'interactive-spider-animation',
    title: 'Interactive Spider Animation Design',
    category: 'Interactive Front-End & Coordinate Geometry',
    description:
      'Developed a responsive front-end visual layout demonstrating dynamic path movements and physics tracking. Handled geometric coordinate configurations to create fluid spider-leg animation responses through user interactions.',
    technologies: ['HTML5 Canvas', 'JavaScript', 'CSS3', 'Coordinate Geometry', 'Inverse Kinematics'],
    githubUrl: 'https://github.com/subbu6149/Portfolio',
    hasInteractiveDemo: true,
    featured: true,
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'Cisco C Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialType: 'Programming Certification',
    summary: 'Comprehensive training in C syntax, pointers, memory management, and modular software design.',
  },
  {
    title: 'Python Programming Language Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialType: 'Programming Certification',
    summary: 'Structured mastery of Python fundamentals, object-oriented principles, and algorithmic logic.',
  },
  {
    title: 'Mepro Pearson',
    issuer: 'Pearson',
    credentialType: 'English Proficiency Certification',
    summary: 'Verified proficiency in professional English reading, writing, listening, and workplace communication.',
  },
];

export const LANGUAGES_SPOKEN: LanguageProficiency[] = [
  {language: 'English', level: 'Professional'},
  {language: 'Telugu', level: 'Native'},
];

export const PERSONAL_INTERESTS: string[] = [
  'Reading Technical Books',
  'Exploring New Technologies',
  'Using AI Tools in Daily Workflows',
];
