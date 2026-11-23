import {useEffect} from 'react';
import {Download, Printer, X} from 'lucide-react';
import {
  CERTIFICATIONS_LIST,
  CORE_COMPETENCIES,
  EDUCATION_LIST,
  LANGUAGES_SPOKEN,
  PERSONAL_INTERESTS,
  PORTFOLIO_PROFILE,
  PROGRAMMING_LANGUAGES,
  PROJECTS_LIST,
} from '../data/portfolio';

export function generateResumeHtmlDocument(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sirisha Kommireddy — Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #202124; max-width: 780px; margin: 40px auto; padding: 0 24px; line-height: 1.55; }
    h1 { font-size: 28px; margin: 0 0 4px; }
    .subtitle { color: #6D59A1; font-weight: 600; margin: 0 0 10px; font-size: 15px; }
    .contact { font-size: 13px; color: #52565E; margin-bottom: 24px; border-bottom: 1px solid #E5E6EA; padding-bottom: 16px; }
    h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #6D59A1; border-bottom: 1px solid #ECEEF2; padding-bottom: 4px; margin: 24px 0 12px; }
    .entry { margin-bottom: 14px; }
    .entry-head { display: flex; justify-content: space-between; font-weight: 600; }
    .muted { color: #52565E; font-size: 14px; }
    ul { margin: 6px 0 0 18px; padding: 0; }
    li { margin-bottom: 4px; font-size: 14px; }
  </style>
</head>
<body>
  <h1>${PORTFOLIO_PROFILE.fullName}</h1>
  <p class="subtitle">${PORTFOLIO_PROFILE.subtitle}</p>
  <div class="contact">
    ${PORTFOLIO_PROFILE.location} · ${PORTFOLIO_PROFILE.email} · ${PORTFOLIO_PROFILE.phone}<br/>
    LinkedIn: ${PORTFOLIO_PROFILE.linkedin} · GitHub: ${PORTFOLIO_PROFILE.github}
  </div>

  <h2>Profile</h2>
  <p class="muted">${PORTFOLIO_PROFILE.heroDescription}</p>

  <h2>Education</h2>
  ${EDUCATION_LIST.map(
    (e) => `<div class="entry">
      <div class="entry-head"><span>${e.degree} — ${e.institution}, ${e.location}</span><span>${e.period}${e.score ? ' · ' + e.score : ''}</span></div>
      <div class="muted">${e.detail}</div>
    </div>`
  ).join('')}

  <h2>Technical Skills & Competencies</h2>
  <ul>
    <li><strong>Programming Languages:</strong> ${PROGRAMMING_LANGUAGES.map((l) => l.name).join(', ')}</li>
    <li><strong>Core Competencies:</strong> ${CORE_COMPETENCIES.map((c) => c.title).join(', ')}</li>
  </ul>

  <h2>Projects</h2>
  ${PROJECTS_LIST.map(
    (p) => `<div class="entry">
      <div class="entry-head"><span>${p.title}</span><span>${p.technologies.join(' · ')}</span></div>
      <div class="muted">${p.description}</div>
    </div>`
  ).join('')}

  <h2>Certifications</h2>
  <ul>
    ${CERTIFICATIONS_LIST.map((c) => `<li><strong>${c.title}</strong> — ${c.issuer}</li>`).join('')}
  </ul>

  <h2>Languages & Interests</h2>
  <ul>
    <li><strong>Languages:</strong> ${LANGUAGES_SPOKEN.map((l) => `${l.language} (${l.level})`).join(', ')}</li>
    <li><strong>Interests:</strong> ${PERSONAL_INTERESTS.join(', ')}</li>
  </ul>
</body>
</html>`;
}

export function triggerResumeDownload() {
  const html = generateResumeHtmlDocument();
  const blob = new Blob([html], {type: 'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Sirisha_Kommireddy_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({isOpen, onClose}: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#E2E4E9] bg-white shadow-xl dark:border-[#2E313A] dark:bg-[#1D1F25]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E4E9] px-6 py-4 dark:border-[#2E313A]">
          <h3
            id="resume-modal-title"
            className="font-display text-lg font-bold text-[#202124] dark:text-[#F4F4F5]"
          >
            Resume — {PORTFOLIO_PROFILE.fullName}
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#D4D7DF] bg-[#FAFAF8] px-3 py-1.5 text-xs font-medium text-[#202124] transition-colors hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={triggerResumeDownload}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#7663A8] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#665496] whitespace-nowrap shrink-0 dark:bg-[#A99AD4] dark:text-[#17181C] dark:hover:bg-[#B8AAE0]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download File</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4D7DF] bg-white text-[#202124] transition-colors hover:bg-[#F1F2F4] dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div id="resume-printable" className="overflow-y-auto p-6 sm:p-8">
          <div className="border-b border-[#E5E6EA] pb-5 dark:border-[#2C2F37]">
            <h4 className="font-display text-2xl font-bold text-[#202124] dark:text-[#F4F4F5]">
              {PORTFOLIO_PROFILE.fullName}
            </h4>
            <p className="mt-1 text-sm font-medium text-[#6D59A1] dark:text-[#A99AD4]">
              {PORTFOLIO_PROFILE.subtitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#5F6368] dark:text-[#A1A6B3]">
              {PORTFOLIO_PROFILE.location} · {PORTFOLIO_PROFILE.email} · {PORTFOLIO_PROFILE.phone}
            </p>
          </div>

          <div className="mt-5 space-y-6 text-sm">
            <div>
              <h5 className="font-display text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
                Education
              </h5>
              <div className="mt-2.5 space-y-3">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.degree} className="flex flex-col justify-between gap-1 sm:flex-row">
                    <div>
                      <p className="font-semibold text-[#202124] dark:text-[#F4F4F5]">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#52565E] dark:text-[#B4B9C6]">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                    <p className="text-xs font-medium tabular-nums text-[#5F6368] dark:text-[#A1A6B3]">
                      {edu.period}
                      {edu.score ? ` · ${edu.score}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-display text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
                Skills &amp; Competencies
              </h5>
              <p className="mt-2 text-[#4A4E54] dark:text-[#C5C9D3]">
                <strong className="text-[#202124] dark:text-[#F4F4F5]">Programming Languages:</strong>{' '}
                {PROGRAMMING_LANGUAGES.map((l) => l.name).join(', ')}
              </p>
              <p className="mt-1 text-[#4A4E54] dark:text-[#C5C9D3]">
                <strong className="text-[#202124] dark:text-[#F4F4F5]">Core Competencies:</strong>{' '}
                {CORE_COMPETENCIES.map((c) => c.title).join(', ')}
              </p>
            </div>

            <div>
              <h5 className="font-display text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
                Projects
              </h5>
              {PROJECTS_LIST.map((proj) => (
                <div key={proj.id} className="mt-2">
                  <p className="font-semibold text-[#202124] dark:text-[#F4F4F5]">
                    {proj.title}
                  </p>
                  <p className="mt-1 text-[#4A4E54] dark:text-[#C5C9D3]">{proj.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h5 className="font-display text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
                Certifications
              </h5>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[#4A4E54] dark:text-[#C5C9D3]">
                {CERTIFICATIONS_LIST.map((cert) => (
                  <li key={cert.title}>
                    <strong className="text-[#202124] dark:text-[#F4F4F5]">{cert.title}</strong> —{' '}
                    {cert.issuer}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-display text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
                Languages &amp; Interests
              </h5>
              <p className="mt-2 text-[#4A4E54] dark:text-[#C5C9D3]">
                <strong className="text-[#202124] dark:text-[#F4F4F5]">Languages:</strong>{' '}
                {LANGUAGES_SPOKEN.map((l) => `${l.language} (${l.level})`).join(', ')}
              </p>
              <p className="mt-1 text-[#4A4E54] dark:text-[#C5C9D3]">
                <strong className="text-[#202124] dark:text-[#F4F4F5]">Interests:</strong>{' '}
                {PERSONAL_INTERESTS.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
