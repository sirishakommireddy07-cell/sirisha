import {ArrowUpRight, FolderGit2, Layers, Play} from 'lucide-react';
import {PORTFOLIO_PROFILE, PROJECTS_LIST} from '../data/portfolio';
import {SpiderCanvas} from './SpiderCanvas';

interface ProjectsSectionProps {
  theme: 'light' | 'dark';
  onOpenSpiderDemo: () => void;
}

function PortfolioWireframePreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#F3F6FA] p-6 sm:p-8 dark:bg-[#15181E]">
      {/* Architectural Browser Frame */}
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#DCE3EC] bg-white shadow-xs dark:border-[#2E3440] dark:bg-[#1D1F25]">
        <div className="flex items-center justify-between border-b border-[#E8EEF5] px-4 py-2.5 dark:border-[#2C313C]">
          <span className="font-display text-xs font-bold text-[#4C6E91] dark:text-[#96B3D1]">
            SK
          </span>
          <div className="flex items-center gap-3 text-[11px] text-[#5F6368] dark:text-[#A1A6B3]">
            <span>About</span>
            <span>Internships</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 p-5 sm:grid-cols-12">
          <div className="flex flex-col justify-center sm:col-span-7">
            <p className="text-[11px] font-semibold text-[#4C6E91] dark:text-[#96B3D1]">
              Light &amp; Dark Theme Architecture
            </p>
            <p className="mt-1.5 font-display text-base font-bold text-[#202124] dark:text-[#F4F4F5]">
              Sirisha Kommireddy
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
              Modular React showcase with instant theme switching, interactive CV preview, and PDF certificate viewer.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex rounded-md bg-[#4C6E91] px-2.5 py-1 text-[11px] font-medium text-white dark:bg-[#829DBB] dark:text-[#17181C]">
                Projects
              </span>
              <span className="inline-flex rounded-md border border-[#CED9E6] px-2.5 py-1 text-[11px] font-medium text-[#202124] dark:border-[#363D4B] dark:text-[#E5E7EB]">
                Resume
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-[#E8EEF5] bg-[#F8FAFC] p-3.5 sm:col-span-5 dark:border-[#2C313C] dark:bg-[#17181C]">
            <div className="flex items-center justify-between text-[11px] text-[#5F6368] dark:text-[#A1A6B3]">
              <span>Modules</span>
              <Layers className="h-3.5 w-3.5 text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-md border border-[#DCE3EC] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#202124] dark:border-[#2E3440] dark:bg-[#22242A] dark:text-[#E5E7EB]">
                Education &amp; Internships
              </div>
              <div className="rounded-md border border-[#DCE3EC] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#202124] dark:border-[#2E3440] dark:bg-[#22242A] dark:text-[#E5E7EB]">
                Interactive Spider IK
              </div>
              <div className="rounded-md border border-[#DCE3EC] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#202124] dark:border-[#2E3440] dark:bg-[#22242A] dark:text-[#E5E7EB]">
                Original PDF Certificates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({theme, onOpenSpiderDemo}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="border-b border-[#DDE4EE] bg-[#F3F6FA]/70 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/55"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
              Selected Work
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
              Things I&apos;ve Built
            </h2>
          </div>
          <p className="text-sm text-[#5F6368] dark:text-[#A1A6B3]">
            Web engineering &amp; interactive front-end builds
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {PROJECTS_LIST.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white shadow-[0_1px_3px_rgba(32,33,36,0.04)] transition-all duration-200 hover:border-[#829DBB] hover:shadow-[0_14px_32px_-16px_rgba(76,110,145,0.22)] dark:border-[#2E3440] dark:bg-[#1D1F25] dark:hover:border-[#829DBB]/60"
            >
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Project Preview */}
                <div className="relative min-h-[300px] border-b border-[#DCE3EC] bg-[#FAFAF8] sm:min-h-[340px] lg:col-span-7 lg:border-b-0 lg:border-r dark:border-[#2E3440] dark:bg-[#17181C]">
                  {project.previewType === 'spider' ? (
                    <>
                      <SpiderCanvas theme={theme} showGuides />
                      <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#5F6368] dark:text-[#A1A6B3]">
                        <span>Move cursor over canvas to guide the spider</span>
                        <span className="font-mono-code hidden sm:inline">2-Bone IK</span>
                      </div>
                    </>
                  ) : (
                    <PortfolioWireframePreview />
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                  <div>
                    <p className="text-xs font-semibold text-[#4C6E91] dark:text-[#96B3D1]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#202124] dark:text-[#F4F4F5]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#4A4E54] sm:text-[0.95rem] dark:text-[#C5C9D3]">
                      {project.description}
                    </p>

                    {/* Clean Unboxed Tech Metadata (Zero-Pill Rule) */}
                    <div className="mt-6 border-t border-[#E8EEF5] pt-4 dark:border-[#2C313C]">
                      <p className="text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                        Technologies
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-[#202124] dark:text-[#E5E7EB]">
                        {project.technologies.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.previewType === 'spider' ? (
                      <button
                        type="button"
                        onClick={onOpenSpiderDemo}
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#4C6E91] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3E5C7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:bg-[#829DBB] dark:text-[#17181C] dark:hover:bg-[#96B0CE]"
                      >
                        <Play className="h-4 w-4" aria-hidden="true" />
                        <span>Live Demo</span>
                      </button>
                    ) : (
                      <a
                        href="#home"
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#4C6E91] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3E5C7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:bg-[#829DBB] dark:text-[#17181C] dark:hover:bg-[#96B0CE]"
                      >
                        <Play className="h-4 w-4" aria-hidden="true" />
                        <span>Live Site</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#CED9E6] bg-white px-5 py-2 text-sm font-semibold text-[#202124] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9] hover:bg-[#F5F3FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                    >
                      <FolderGit2 className="h-4 w-4 text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#5F6368] dark:text-[#A1A6B3]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ready for future projects */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-[#CBD7E6] bg-white/75 px-6 py-5 sm:flex-row sm:items-center dark:border-[#323846] dark:bg-[#1D1F25]/60">
          <div>
            <p className="font-display text-sm font-semibold text-[#202124] dark:text-[#F4F4F5]">
              More Builds in Progress
            </p>
            <p className="mt-0.5 text-sm text-[#52565E] dark:text-[#A1A6B3]">
              Exploring Python utilities, DBMS applications, Power BI dashboards, and AI coursework experiments.
            </p>
          </div>
          <a
            href={PORTFOLIO_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4C6E91] hover:underline whitespace-nowrap shrink-0 dark:text-[#96B3D1]"
          >
            <span>Follow on GitHub</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
