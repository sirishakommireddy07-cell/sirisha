import {Award} from 'lucide-react';
import {CERTIFICATIONS_LIST} from '../data/portfolio';

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="border-b border-[#E5E6EA] bg-[#F1F2F4]/60 py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#22242A]/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6D59A1] uppercase dark:text-[#A99AD4]">
            Credentials
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Certifications
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Structured industry-recognized coursework in programming fundamentals and professional communication.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTIFICATIONS_LIST.map((cert) => (
            <article
              key={cert.title}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E4E9] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8875B9]/50 dark:border-[#2E313A] dark:bg-[#1D1F25] dark:hover:border-[#A99AD4]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F2F4] dark:bg-[#262932]">
                    <Award className="h-5 w-5 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                    {cert.credentialType}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-[#202124] dark:text-[#F4F4F5]">
                  {cert.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                  {cert.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-[#ECEEF2] pt-4 text-xs font-medium text-[#6D59A1] dark:border-[#2C2F37] dark:text-[#A99AD4]">
                Issued by {cert.issuer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
