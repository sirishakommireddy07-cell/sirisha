import {Award, BookOpen, Brain, Code2, Palette} from 'lucide-react';
import {ABOUT_HIGHLIGHTS, ABOUT_NARRATIVE, AboutHighlight} from '../data/portfolio';

function renderHighlightIcon(iconName: AboutHighlight['iconName']) {
  const iconClass = 'h-5 w-5 text-[#4C6E91] dark:text-[#96B3D1]';
  switch (iconName) {
    case 'award':
      return <Award className={iconClass} aria-hidden="true" />;
    case 'brain':
      return <Brain className={iconClass} aria-hidden="true" />;
    case 'code':
      return <Code2 className={iconClass} aria-hidden="true" />;
    case 'palette':
      return <Palette className={iconClass} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={iconClass} aria-hidden="true" />;
  }
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-[#DDE4EE] bg-[#F3F6FA]/70 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/55"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
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

            <div className="mt-8 border-t border-[#DCE3EC] pt-6 dark:border-[#323846]">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Institution</dt>
                  <dd className="mt-1 font-medium text-[#202124] dark:text-[#F4F4F5]">
                    Sri Aditya Degree College
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Academics</dt>
                  <dd className="mt-1 font-semibold tabular-nums text-[#4C6E91] dark:text-[#96B3D1]">
                    B.Sc. AI · 3rd Year (77%)
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Highlight Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-[#DCE3EC] bg-white p-5 shadow-[0_1px_3px_rgba(32,33,36,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#829DBB] hover:shadow-[0_10px_24px_-12px_rgba(76,110,145,0.2)] dark:border-[#2E3440] dark:bg-[#1D1F25] dark:hover:border-[#829DBB]/60 ${
                    idx === ABOUT_HIGHLIGHTS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
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
