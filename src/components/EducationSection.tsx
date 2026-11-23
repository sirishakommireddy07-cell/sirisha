import {GraduationCap} from 'lucide-react';
import {EDUCATION_LIST} from '../data/portfolio';

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-[#E5E6EA] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
            Academic Path
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Education
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Academic foundation spanning secondary schooling through undergraduate Artificial Intelligence studies.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Vertical hairline track */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[19px] top-4 w-px bg-[#DFE1E7] dark:bg-[#2E313A]"
          />

          <div className="space-y-8">
            {EDUCATION_LIST.map((edu) => (
              <article key={edu.degree} className="relative pl-14 sm:pl-16">
                {/* Geometric Timeline Marker */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                    edu.status === 'current'
                      ? 'border-[#8875B9] bg-[#8875B9]/10 text-[#6D59A1] dark:border-[#A99AD4] dark:bg-[#A99AD4]/15 dark:text-[#A99AD4]'
                      : 'border-[#DFE1E7] bg-white text-[#5F6368] dark:border-[#323640] dark:bg-[#22242A] dark:text-[#A1A6B3]'
                  }`}
                >
                  <GraduationCap className="h-[18px] w-[18px]" />
                </div>

                <div className="rounded-2xl border border-[#E2E4E9] bg-white p-6 transition-all duration-200 hover:border-[#8875B9]/50 dark:border-[#2E313A] dark:bg-[#1D1F25] dark:hover:border-[#A99AD4]/50">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium tabular-nums text-[#6D59A1] dark:text-[#A99AD4]">
                      <span>{edu.period}</span>
                      {edu.score && (
                        <>
                          <span aria-hidden="true" className="text-[#9AA0A6]">
                            ·
                          </span>
                          <span>{edu.score}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm font-medium text-[#4A4E54] dark:text-[#D1D5DB]">
                    <span>{edu.institution}</span>
                    <span aria-hidden="true" className="text-[#9AA0A6]">
                      ·
                    </span>
                    <span className="text-[#5F6368] dark:text-[#A1A6B3]">{edu.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                    {edu.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
