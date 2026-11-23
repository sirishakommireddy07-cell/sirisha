import {ArrowUp, Mail} from 'lucide-react';
import {PORTFOLIO_PROFILE} from '../data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="bg-[#FAFAF8] py-10 transition-colors duration-200 dark:bg-[#17181C]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-[#202124] dark:text-[#F4F4F5]">
            Designed &amp; Developed by {PORTFOLIO_PROFILE.fullName}
          </p>
          <p className="mt-1 text-xs text-[#5F6368] dark:text-[#A1A6B3]">
            © {new Date().getFullYear()} {PORTFOLIO_PROFILE.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E4E9] bg-white text-[#52565E] transition-colors hover:border-[#8875B9] hover:text-[#6D59A1] dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#B4B9C6] dark:hover:border-[#A99AD4] dark:hover:text-[#A99AD4]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </a>

          <a
            href={PORTFOLIO_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E4E9] bg-white text-[#52565E] transition-colors hover:border-[#8875B9] hover:text-[#6D59A1] dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#B4B9C6] dark:hover:border-[#A99AD4] dark:hover:text-[#A99AD4]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
          </a>

          <a
            href={`mailto:${PORTFOLIO_PROFILE.email}`}
            aria-label="Send email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E4E9] bg-white text-[#52565E] transition-colors hover:border-[#8875B9] hover:text-[#6D59A1] dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#B4B9C6] dark:hover:border-[#A99AD4] dark:hover:text-[#A99AD4]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-1 inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#E2E4E9] bg-white px-3.5 text-xs font-semibold text-[#202124] transition-colors hover:border-[#8875B9] hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
