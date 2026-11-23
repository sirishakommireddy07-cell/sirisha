import {BookOpen, Cpu, Globe, Sparkles} from 'lucide-react';
import {LANGUAGES_SPOKEN, PERSONAL_INTERESTS} from '../data/portfolio';

export function LanguagesInterestsSection() {
  const interestIcons = [
    <BookOpen key="books" className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />,
    <Cpu key="tech" className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />,
    <Sparkles key="ai" className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />,
  ];

  return (
    <section
      aria-labelledby="languages-interests-heading"
      className="border-b border-[#E5E6EA] bg-[#FAFAF8] py-16 sm:py-20 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
            Background
          </p>
          <h2
            id="languages-interests-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]"
          >
            Languages &amp; Interests
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Languages Card */}
          <div className="rounded-2xl border border-[#E2E4E9] bg-white p-6 sm:p-7 dark:border-[#2E313A] dark:bg-[#1D1F25]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F2F4] dark:bg-[#262932]">
                <Globe className="h-5 w-5 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
                Languages
              </h3>
            </div>

            <div className="mt-6 divide-y divide-[#ECEEF2] dark:divide-[#2C2F37]">
              {LANGUAGES_SPOKEN.map((item) => (
                <div
                  key={item.language}
                  className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="font-medium text-[#202124] dark:text-[#F4F4F5]">
                    {item.language}
                  </span>
                  <span className="text-sm text-[#5F6368] dark:text-[#A1A6B3]">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="rounded-2xl border border-[#E2E4E9] bg-white p-6 sm:p-7 dark:border-[#2E313A] dark:bg-[#1D1F25]">
            <h3 className="font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
              Interests
            </h3>
            <p className="mt-1.5 text-sm text-[#5F6368] dark:text-[#A1A6B3]">
              Habits and areas that shape my perspective outside the classroom
            </p>

            <ul className="mt-5 space-y-3.5">
              {PERSONAL_INTERESTS.map((interest, idx) => (
                <li
                  key={interest}
                  className="flex items-center gap-3.5 rounded-xl border border-[#ECEEF2] bg-[#FAFAF8] px-4 py-3 text-sm font-medium text-[#202124] dark:border-[#2C2F37] dark:bg-[#22242A] dark:text-[#F4F4F5]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-[#17181C]">
                    {interestIcons[idx]}
                  </span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
