import {BookOpen, Compass, Cpu, Globe, Sparkles} from 'lucide-react';
import {InterestItem, LANGUAGES_SPOKEN, PERSONAL_INTERESTS} from '../data/portfolio';

function InterestIcon({name}: {name: InterestItem['iconName']}) {
  const cls = 'h-4 w-4 text-[#4C6E91] dark:text-[#96B3D1]';
  switch (name) {
    case 'sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={cls} aria-hidden="true" />;
    case 'compass':
      return <Compass className={cls} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={cls} aria-hidden="true" />;
  }
}

export function LanguagesInterestsSection() {
  return (
    <section
      aria-labelledby="languages-interests-heading"
      className="border-b border-[#DDE4EE] bg-[#F3F6FA]/70 py-16 sm:py-20 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/55"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
            Background
          </p>
          <h2
            id="languages-interests-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]"
          >
            Languages &amp; Interests
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Languages Card */}
          <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(32,33,36,0.04)] lg:col-span-5 dark:border-[#2E3440] dark:bg-[#1D1F25]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
                <Globe className="h-5 w-5 text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
                  Languages
                </h3>
                <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">
                  Multilingual communication
                </p>
              </div>
            </div>

            <div className="mt-6 divide-y divide-[#E8EEF5] dark:divide-[#2C313C]">
              {LANGUAGES_SPOKEN.map((item) => (
                <div
                  key={item.language}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <span className="font-medium text-[#202124] dark:text-[#F4F4F5]">
                    {item.language}
                  </span>
                  <span className="text-sm font-medium text-[#4C6E91] dark:text-[#96B3D1]">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(32,33,36,0.04)] lg:col-span-7 dark:border-[#2E3440] dark:bg-[#1D1F25]">
            <h3 className="font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
              Interests &amp; Explorations
            </h3>
            <p className="mt-1 text-sm text-[#5F6368] dark:text-[#A1A6B3]">
              Creative and technical pursuits that fuel curiosity outside coursework
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {PERSONAL_INTERESTS.map((interest) => (
                <div
                  key={interest.title}
                  className="rounded-xl border border-[#E8EEF5] bg-[#F8FAFC] p-4 transition-colors hover:border-[#829DBB] dark:border-[#2C313C] dark:bg-[#22252D] dark:hover:border-[#829DBB]/60"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3F8] dark:bg-[#17181C]">
                      <InterestIcon name={interest.iconName} />
                    </span>
                    <h4 className="font-display text-sm font-semibold text-[#202124] dark:text-[#F4F4F5]">
                      {interest.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
