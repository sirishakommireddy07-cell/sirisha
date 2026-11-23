import {useState} from 'react';
import {ArrowRight, Download, FileText, User} from 'lucide-react';
import {PORTFOLIO_PROFILE} from '../data/portfolio';

interface HeroSectionProps {
  onDownloadResume: () => void;
  onPreviewResume: () => void;
}

export function HeroSection({onDownloadResume, onPreviewResume}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#E5E6EA] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      {/* Subtle minimal geometric background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-[0.45] dark:opacity-[0.22]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-geo-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-[#E5E6EA] dark:text-[#2B2E36]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-geo-grid)" />
        </svg>
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-[#8875B9]/20 dark:border-[#A99AD4]/15" />
        <div className="absolute right-20 bottom-12 h-44 w-44 rounded-2xl border border-[#829DBB]/25 rotate-12 dark:border-[#829DBB]/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#5F6368] dark:text-[#A1A6B3]">
              <span>B.Sc. Artificial Intelligence</span>
              <span aria-hidden="true">·</span>
              <span>3rd Year Undergraduate</span>
              <span aria-hidden="true">·</span>
              <span>Bhimavaram, India</span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202124] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12] [text-wrap:balance] dark:text-[#F4F4F5]">
              {PORTFOLIO_PROFILE.headline}
            </h1>

            <p className="mt-4 font-display text-lg font-medium text-[#6D59A1] sm:text-xl dark:text-[#A99AD4]">
              {PORTFOLIO_PROFILE.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4A4E54] sm:text-[1.0625rem] dark:text-[#C5C9D3]">
              {PORTFOLIO_PROFILE.heroDescription}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#7663A8] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#665496] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:bg-[#A99AD4] dark:text-[#17181C] dark:hover:bg-[#B8AAE0]"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-white px-5 py-2.5 text-sm font-semibold text-[#202124] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9] hover:bg-[#F1F2F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
              >
                <Download className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onPreviewResume}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-[#52565E] transition-colors hover:text-[#6D59A1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:text-[#A7ACB8] dark:hover:text-[#A99AD4]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Preview CV</span>
              </button>
            </div>
          </div>

          {/* Right Profile Image Frame */}
          <div className="flex items-stretch lg:col-span-5">
            <div className="relative flex w-full flex-col justify-between rounded-2xl border border-[#E2E4E9] bg-white p-3 shadow-sm transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#1D1F25]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#F1F2F4] lg:aspect-auto lg:h-full lg:min-h-[420px] dark:bg-[#22242A]">
                {!imageError ? (
                  <img
                    src={PORTFOLIO_PROFILE.portraitImage}
                    alt="Editorial profile portrait illustration of Sirisha Kommireddy — replace with personal photograph"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-300"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#F1F2F4] p-8 text-center dark:bg-[#22242A]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4D7DF] bg-white dark:border-[#323640] dark:bg-[#17181C]">
                      <User className="h-9 w-9 text-[#8875B9] dark:text-[#A99AD4]" aria-hidden="true" />
                    </div>
                    <p className="font-display text-base font-semibold text-[#202124] dark:text-[#F4F4F5]">
                      Sirisha Kommireddy
                    </p>
                    <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">
                      Profile Photo Placeholder
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#5F6368] dark:text-[#A1A6B3]">
                <span className="font-medium text-[#202124] dark:text-[#E5E7EB]">
                  Sirisha Kommireddy
                </span>
                <span>Profile Portrait Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
