import {BookOpen, Brain, Code2, Compass, Lightbulb} from 'lucide-react';
import {ABOUT_HIGHLIGHTS, ABOUT_NARRATIVE, AboutHighlight} from '../data/portfolio';

function renderHighlightIcon(iconName: AboutHighlight['iconName']) {
  const iconClass = 'h-5 w-5 text-[#6D59A1] dark:text-[#A99AD4]';
  switch (iconName) {
    case 'brain':
      return <Brain className={iconClass} aria-hidden="true" />;
    case 'code':
      return <Code2 className={iconClass} aria-hidden="true" />;
    case 'compass':
      return <Compass className={iconClass} aria-hidden="true" />;
    case 'lightbulb':
      return <Lightbulb className={iconClass} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={iconClass} aria-hidden="true" />;
  }
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-[#E5E6EA] bg-[#F1F2F4]/60 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
              Profile
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
              {ABOUT_NARRATIVE.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4A4E54] dark:text-[#C5C9D3]">
              {ABOUT_NARRATIVE.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-[#E2E4E9] pt-6 dark:border-[#323640]">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Institution</dt>
                  <dd className="mt-1 font-medium text-[#202124] dark:text-[#F4F4F5]">
                    Sri Aditya Degree College
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Academic Standing</dt>
                  <dd className="mt-1 font-medium text-[#202124] dark:text-[#F4F4F5]">
                    B.Sc. AI · 3rd Year
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Small Highlight Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-[#E2E4E9] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9]/50 dark:border-[#2E313A] dark:bg-[#1D1F25] dark:hover:border-[#A99AD4]/50 ${
                    idx === ABOUT_HIGHLIGHTS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F2F4] dark:bg-[#262932]">
                      {renderHighlightIcon(item.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-[#202124] dark:text-[#F4F4F5]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
