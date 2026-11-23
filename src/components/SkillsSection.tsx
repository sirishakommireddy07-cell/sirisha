import {MessageSquare, Users, Zap} from 'lucide-react';
import {
  CORE_COMPETENCIES,
  CoreCompetency,
  PROGRAMMING_LANGUAGES,
  ProgrammingLanguage,
} from '../data/portfolio';

function LanguageIcon({lang}: {lang: ProgrammingLanguage['key']}) {
  if (lang === 'python') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M11.9 2.5C7.8 2.5 8.1 4.3 8.1 4.3v2h4v.7H6.4S3.5 6.7 3.5 11.1c0 4.3 2.5 4.2 2.5 4.2h1.5v-2.1s-.1-2.5 2.5-2.5h4.2s2.4 0 2.4-2.3V4.8s.4-2.3-4.7-2.3Zm-2 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"
          className="fill-[#6D59A1] dark:fill-[#A99AD4]"
        />
        <path
          d="M12.1 21.5c4.1 0 3.8-1.8 3.8-1.8v-2h-4v-.7h5.7s2.9.3 2.9-4.1c0-4.3-2.5-4.2-2.5-4.2h-1.5v2.1s.1 2.5-2.5 2.5H9.8s-2.4 0-2.4 2.3v3.6s-.4 2.3 4.7 2.3Zm2-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z"
          className="fill-[#829DBB]"
        />
      </svg>
    );
  }
  if (lang === 'java') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M9.5 17.2s-.9.5.6.7c1.9.2 2.9.2 5-.2 0 0 .5.4 1.3.7-4.6 2-10.4-.1-6.9-1.2Zm-.6-2.4s-1 .7.5.9c2 .2 3.7.2 6.5-.3 0 0 .4.4 1 .6-5.5 1.6-11.6.1-8-1.2Z"
          className="fill-[#829DBB]"
        />
        <path
          d="M13.2 11.4c1.1 1.3-.3 2.5-.3 2.5s2.9-1.5 1.6-3.4c-1.2-1.7-2.2-2.6 3-5.5 0 0-8.1 2-4.3 6.4Z"
          className="fill-[#6D59A1] dark:fill-[#A99AD4]"
        />
        <path
          d="M18 19.3s.7.6-.8 1c-2.8.9-11.8 1.1-14.3 0-.9-.4.8-.9 1.3-1 .5-.1.9-.1.9-.1-1-.7-6.6 1.4-2.8 2 10.2 1.7 18.6-.8 15.7-1.9Z"
          className="fill-[#6D59A1] dark:fill-[#A99AD4]"
        />
        <path
          d="M10.1 12.6s-4.2 1-1.5 1.4c1.1.1 3.4.1 5.5-.1 1.7-.1 3.5-.5 3.5-.5s-.6.3-1 .6c-4.3 1.1-12.5.6-10.1-.6 2-1 3.6-.8 3.6-.8Z"
          className="fill-[#829DBB]"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 20.5 7.4v9.2L12 21.5l-8.5-4.9V7.4L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-[#6D59A1] dark:text-[#A99AD4]"
      />
      <path
        d="M15.4 14.3a4.2 4.2 0 1 1 0-4.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-[#829DBB]"
      />
    </svg>
  );
}

function CompetencyIcon({name}: {name: CoreCompetency['iconName']}) {
  const cls = 'h-5 w-5 text-[#6D59A1] dark:text-[#A99AD4]';
  switch (name) {
    case 'users':
      return <Users className={cls} aria-hidden="true" />;
    case 'message':
      return <MessageSquare className={cls} aria-hidden="true" />;
    case 'zap':
      return <Zap className={cls} aria-hidden="true" />;
  }
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-[#E5E6EA] bg-[#F1F2F4]/60 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
            Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Technical Skills & Competencies
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Core programming languages and collaborative strengths applied across coursework and software experiments.
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mt-12">
          <h3 className="font-display text-sm font-semibold tracking-wide text-[#5F6368] uppercase dark:text-[#A1A6B3]">
            Programming Languages
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PROGRAMMING_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="group rounded-2xl border border-[#E2E4E9] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9]/50 dark:border-[#2E313A] dark:bg-[#1D1F25] dark:hover:border-[#A99AD4]/50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F2F4] transition-colors group-hover:bg-[#8875B9]/10 dark:bg-[#262932] dark:group-hover:bg-[#A99AD4]/15">
                    <LanguageIcon lang={lang.key} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#202124] dark:text-[#F4F4F5]">
                    {lang.name}
                  </h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                  {lang.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-12">
          <h3 className="font-display text-sm font-semibold tracking-wide text-[#5F6368] uppercase dark:text-[#A1A6B3]">
            Core Competencies
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CORE_COMPETENCIES.map((comp) => (
              <div
                key={comp.title}
                className="rounded-2xl border border-[#E2E4E9] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#829DBB]/60 dark:border-[#2E313A] dark:bg-[#1D1F25] dark:hover:border-[#829DBB]/60"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F2F4] dark:bg-[#262932]">
                    <CompetencyIcon name={comp.iconName} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#202124] dark:text-[#F4F4F5]">
                    {comp.title}
                  </h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
