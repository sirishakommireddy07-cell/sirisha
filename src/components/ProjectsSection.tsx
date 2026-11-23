import {ArrowUpRight, FolderGit2, Play} from 'lucide-react';
import {PORTFOLIO_PROFILE, PROJECTS_LIST} from '../data/portfolio';
import {SpiderCanvas} from './SpiderCanvas';

interface ProjectsSectionProps {
  theme: 'light' | 'dark';
  onOpenSpiderDemo: () => void;
}

export function ProjectsSection({theme, onOpenSpiderDemo}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="border-b border-[#E5E6EA] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
              Selected Work
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
              Things I&apos;ve Built
            </h2>
          </div>
          <p className="text-sm text-[#5F6368] dark:text-[#A1A6B3]">
            Interactive front-end experiments &amp; software builds
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {PROJECTS_LIST.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[#E2E4E9] bg-white shadow-sm transition-colors duration-200 dark:border-[#2E313A] dark:bg-[#1D1F25]"
            >
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Interactive Project Preview */}
                <div className="relative min-h-[300px] border-b border-[#E2E4E9] bg-[#FAFAF8] sm:min-h-[340px] lg:col-span-7 lg:border-b-0 lg:border-r dark:border-[#2E313A] dark:bg-[#17181C]">
                  <SpiderCanvas theme={theme} showGuides />
                  <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#5F6368] dark:text-[#A1A6B3]">
                    <span>Move cursor over canvas to guide the spider</span>
                    <span className="font-mono-code hidden sm:inline">2-Bone IK</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                  <div>
                    <p className="text-xs font-medium text-[#6D59A1] dark:text-[#A99AD4]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#202124] dark:text-[#F4F4F5]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#4A4E54] sm:text-[0.95rem] dark:text-[#C5C9D3]">
                      {project.description}
                    </p>

                    {/* Clean Unboxed Tech Metadata (Zero-Pill Rule) */}
                    <div className="mt-6 border-t border-[#ECEEF2] pt-4 dark:border-[#2C2F37]">
                      <p className="text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                        Technologies
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-[#202124] dark:text-[#E5E7EB]">
                        {project.technologies.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.hasInteractiveDemo && (
                      <button
                        type="button"
                        onClick={onOpenSpiderDemo}
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#7663A8] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#665496] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:bg-[#A99AD4] dark:text-[#17181C] dark:hover:bg-[#B8AAE0]"
                      >
                        <Play className="h-4 w-4" aria-hidden="true" />
                        <span>Live Demo</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-white px-5 py-2 text-sm font-semibold text-[#202124] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9] hover:bg-[#F1F2F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                    >
                      <FolderGit2 className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
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
        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-[#D4D7DF] bg-[#F1F2F4]/50 px-6 py-5 sm:flex-row sm:items-center dark:border-[#323640] dark:bg-[#22242A]/40">
          <div>
            <p className="font-display text-sm font-semibold text-[#202124] dark:text-[#F4F4F5]">
              More Builds in Progress
            </p>
            <p className="mt-0.5 text-sm text-[#52565E] dark:text-[#A1A6B3]">
              Exploring Python utilities, AI coursework implementations, and interactive web applications.
            </p>
          </div>
          <a
            href={PORTFOLIO_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6D59A1] hover:underline whitespace-nowrap shrink-0 dark:text-[#A99AD4]"
          >
            <span>Follow on GitHub</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
