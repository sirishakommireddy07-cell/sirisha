import {ArrowRight, ArrowUpRight, Download, FileText} from 'lucide-react';
import {PORTFOLIO_PROFILE, SOCIAL_PROFILES, SocialLinkItem} from '../data/portfolio';

interface HeroSectionProps {
  onDownloadResume: () => void;
  onPreviewResume: () => void;
}

function SocialProfileIcon({name}: {name: SocialLinkItem['name']}) {
  switch (name) {
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m5.81 14.12c-.24.69-1.42 1.31-1.95 1.39-.5.07-1.13.11-1.82-.11-.42-.14-.96-.31-1.65-.61-2.91-1.26-4.8-4.19-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.83 2.02.9 2.17.07.14.12.31.02.5-.1.2-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.7-.17 1.39Z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
        </svg>
      );
  }
}

export function HeroSection({onDownloadResume, onPreviewResume}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#DDE4EE] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      {/* Subtle minimal geometric + soft-blue atmospheric background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#829DBB]/[0.08] blur-3xl dark:bg-[#829DBB]/[0.06]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-[#8875B9]/[0.06] blur-3xl dark:bg-[#A99AD4]/[0.05]" />
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-[0.45] dark:opacity-[0.2]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-geo-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-[#E2E8F0] dark:text-[#2B2E36]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-geo-grid)" />
        </svg>
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full border border-[#829DBB]/25 dark:border-[#829DBB]/15" />
        <div className="absolute right-24 bottom-10 h-44 w-44 rounded-2xl border border-[#8875B9]/20 rotate-12 dark:border-[#A99AD4]/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Social Profile Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5 dark:border-[#2C2F37]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#4C6E91] dark:text-[#96B3D1]">
            <span>B.Sc. Artificial Intelligence</span>
            <span aria-hidden="true" className="text-[#94A3B8]">·</span>
            <span>3rd Year Undergraduate</span>
            <span aria-hidden="true" className="text-[#94A3B8]">·</span>
            <span>Bhimavaram, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {SOCIAL_PROFILES.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} profile`}
                className="inline-flex min-h-[38px] items-center gap-2 rounded-xl border border-[#DCE3EC] bg-white px-3.5 py-1.5 text-xs font-medium text-[#202124] shadow-[0_1px_2px_rgba(32,33,36,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5C7FA3] hover:bg-[#EEF3F8] hover:text-[#3A5A7C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:border-[#2E3440] dark:bg-[#22242A] dark:text-[#E5E7EB] dark:hover:border-[#829DBB] dark:hover:bg-[#2A2F3A] dark:hover:text-[#96B3D1]"
              >
                <SocialProfileIcon name={social.name} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Introduction */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202124] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1] [text-wrap:balance] dark:text-[#F4F4F5]">
              {PORTFOLIO_PROFILE.headline}
            </h1>

            <p className="mt-4 font-display text-lg font-semibold text-[#4C6E91] sm:text-xl dark:text-[#96B3D1]">
              {PORTFOLIO_PROFILE.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4A4E54] sm:text-[1.0625rem] dark:text-[#C5C9D3]">
              {PORTFOLIO_PROFILE.heroDescription}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#4C6E91] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3E5C7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:bg-[#829DBB] dark:text-[#17181C] dark:hover:bg-[#96B0CE]"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#CED9E6] bg-white px-5 py-2.5 text-sm font-semibold text-[#202124] shadow-[0_1px_2px_rgba(32,33,36,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9] hover:bg-[#F5F3FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:border-[#323846] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
              >
                <Download className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onPreviewResume}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-[#4C6E91] transition-colors hover:text-[#6D59A1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:text-[#96B3D1] dark:hover:text-[#A99AD4]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Preview CV</span>
              </button>
            </div>
          </div>

          {/* Right Architectural Profile Summary Card (No Photo) */}
          <div className="flex items-stretch lg:col-span-5">
            <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white shadow-[0_14px_34px_-16px_rgba(76,110,145,0.2)] transition-colors duration-200 dark:border-[#2E3440] dark:bg-[#1D1F25]">
              {/* Subtle two-tone top accent hairline */}
              <div
                aria-hidden="true"
                className="h-1 w-full bg-gradient-to-r from-[#4C6E91] via-[#829DBB] to-[#8875B9]"
              />

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
                    Academic &amp; Technical Snapshot
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-[#202124] dark:text-[#F4F4F5]">
                    Building from Foundations to AI
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                    Combining academic discipline with hands-on software engineering, DBMS, Power BI analytics, and cloud computing.
                  </p>

                  <dl className="mt-6 divide-y divide-[#E8EEF5] border-t border-[#E8EEF5] text-sm dark:divide-[#2C313C] dark:border-[#2C313C]">
                    <div className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[#5F6368] dark:text-[#A1A6B3]">Degree</dt>
                      <dd className="text-right font-semibold tabular-nums text-[#202124] dark:text-[#F4F4F5]">
                        B.Sc. AI · 3rd Year (77%)
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[#5F6368] dark:text-[#A1A6B3]">College</dt>
                      <dd className="text-right font-medium text-[#202124] dark:text-[#F4F4F5]">
                        Sri Aditya Degree College
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[#5F6368] dark:text-[#A1A6B3]">Core Stack</dt>
                      <dd className="text-right font-medium text-[#202124] dark:text-[#F4F4F5]">
                        C · Python · Java · DBMS
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[#5F6368] dark:text-[#A1A6B3]">Internships</dt>
                      <dd className="text-right font-medium text-[#202124] dark:text-[#F4F4F5]">
                        Power BI &amp; Azure Cloud
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8EEF5] pt-4 text-xs dark:border-[#2C313C]">
                  <span className="text-[#5F6368] dark:text-[#A1A6B3]">
                    Open to software &amp; AI internships
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-[#4C6E91] hover:text-[#6D59A1] hover:underline whitespace-nowrap shrink-0 dark:text-[#96B3D1] dark:hover:text-[#A99AD4]"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
