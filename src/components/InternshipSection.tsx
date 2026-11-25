import {BarChart3, CheckCircle2, Cloud} from 'lucide-react';
import {INTERNSHIPS_LIST} from '../data/portfolio';

export function InternshipSection() {
  return (
    <section
      id="internships"
      className="border-b border-[#DDE4EE] bg-[#F3F6FA]/70 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/55"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
            Practical Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Internships
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Applied training in business intelligence dashboards and cloud computing platforms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {INTERNSHIPS_LIST.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[#DCE3EC] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(32,33,36,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#829DBB] hover:shadow-[0_10px_24px_-12px_rgba(76,110,145,0.2)] dark:border-[#2E3440] dark:bg-[#1D1F25] dark:hover:border-[#829DBB]/60"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
                    {item.iconKey === 'chart' ? (
                      <BarChart3 className="h-5 w-5 text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                    ) : (
                      <Cloud className="h-5 w-5 text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#4C6E91] dark:text-[#96B3D1]">
                      {item.domain}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
                      {item.role}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#4A4E54] sm:text-[0.95rem] dark:text-[#C5C9D3]">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-[#E8EEF5] pt-4 dark:border-[#2C313C]">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#202124] dark:text-[#E5E7EB]"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#4C6E91] dark:text-[#96B3D1]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
