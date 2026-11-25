import {useEffect, useState} from 'react';
import {CheckCircle2, X} from 'lucide-react';
import {AboutSection} from './components/AboutSection';
import {CertificateModal} from './components/CertificateModal';
import {CertificationsSection} from './components/CertificationsSection';
import {ContactSection} from './components/ContactSection';
import {EducationSection} from './components/EducationSection';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {InternshipSection} from './components/InternshipSection';
import {LanguagesInterestsSection} from './components/LanguagesInterestsSection';
import {Navbar} from './components/Navbar';
import {ProjectsSection} from './components/ProjectsSection';
import {ResumeModal, triggerResumeDownload} from './components/ResumeModal';
import {SkillsSection} from './components/SkillsSection';
import {SpiderDemoModal} from './components/SpiderDemoModal';
import {CertificationItem, NAV_ITEMS} from './data/portfolio';

const THEME_STORAGE_KEY = 'sk-theme';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [spiderDemoOpen, setSpiderDemoOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [resumeToast, setResumeToast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors if private mode blocks localStorage
    }
  }, [theme]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {rootMargin: '-35% 0px -55% 0px'}
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleDownloadResume = () => {
    triggerResumeDownload();
    setResumeToast(true);
    setTimeout(() => setResumeToast(false), 4500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#202124] transition-colors duration-200 dark:bg-[#17181C] dark:text-[#F4F4F5]">
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />

      <main>
        <HeroSection
          onDownloadResume={handleDownloadResume}
          onPreviewResume={() => setResumeModalOpen(true)}
        />
        <AboutSection />
        <EducationSection />
        <InternshipSection />
        <SkillsSection />
        <ProjectsSection theme={theme} onOpenSpiderDemo={() => setSpiderDemoOpen(true)} />
        <CertificationsSection onOpenCertificate={(cert) => setSelectedCertificate(cert)} />
        <LanguagesInterestsSection />
        <ContactSection />
      </main>

      <Footer />

      <SpiderDemoModal
        isOpen={spiderDemoOpen}
        onClose={() => setSpiderDemoOpen(false)}
        theme={theme}
      />

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Subtle download confirmation toast */}
      {resumeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-xl border border-[#E2E4E9] bg-white px-4 py-3 text-sm shadow-lg dark:border-[#2E313A] dark:bg-[#22242A]"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
          <span className="text-[#202124] dark:text-[#F4F4F5]">Resume downloaded.</span>
          <button
            type="button"
            onClick={() => {
              setResumeToast(false);
              setResumeModalOpen(true);
            }}
            className="font-semibold text-[#6D59A1] hover:underline dark:text-[#A99AD4]"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setResumeToast(false)}
            aria-label="Dismiss notification"
            className="ml-1 text-[#5F6368] hover:text-[#202124] dark:text-[#A1A6B3] dark:hover:text-[#F4F4F5]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
