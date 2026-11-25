import {Award, ExternalLink, FileCheck2} from 'lucide-react';
import {CERTIFICATIONS_LIST, CertificationItem} from '../data/portfolio';

interface CertificationsSectionProps {
  onOpenCertificate: (certificate: CertificationItem) => void;
}

export function CertificationsSection({onOpenCertificate}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="border-b border-[#DDE4EE] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
            Credentials
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Certifications
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Verified credentials and completed coursework across AI/ML, networking, programming, and data visualization.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS_LIST.map((cert) => {
            const hasOriginalPdf = Boolean(cert.pdfUrl);
            return (
              <article
                key={cert.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white shadow-[0_1px_3px_rgba(32,33,36,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#829DBB] hover:shadow-[0_10px_26px_-12px_rgba(76,110,145,0.22)] dark:border-[#2E3440] dark:bg-[#1D1F25] dark:hover:border-[#829DBB]/60"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        hasOriginalPdf
                          ? 'bg-[#EEF3F8] text-[#4C6E91] dark:bg-[#232A35] dark:text-[#96B3D1]'
                          : 'bg-[#F3F1F9] text-[#6D59A1] dark:bg-[#272434] dark:text-[#A99AD4]'
                      }`}
                    >
                      {hasOriginalPdf ? (
                        <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Award className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-right text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                      {cert.credentialType}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-[#202124] dark:text-[#F4F4F5]">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#4C6E91] dark:text-[#96B3D1]">
                    {cert.issuer}
                  </p>

                  {(cert.issuedDate || cert.credentialId) && (
                    <p className="mt-1.5 text-xs tabular-nums text-[#5F6368] dark:text-[#A1A6B3]">
                      {[cert.issuedDate, cert.credentialId].filter(Boolean).join(' · ')}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                    {cert.summary}
                  </p>
                </div>

                <div className="border-t border-[#E8EEF5] bg-[#F8FAFC]/60 px-6 py-4 dark:border-[#2C313C] dark:bg-[#22252D]/50">
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(cert)}
                    className={`inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap ${
                      hasOriginalPdf
                        ? 'bg-[#4C6E91] text-white hover:bg-[#3E5C7B] dark:bg-[#829DBB] dark:text-[#17181C] dark:hover:bg-[#96B0CE]'
                        : 'border border-[#CED9E6] bg-white text-[#202124] hover:border-[#8875B9] hover:bg-[#7663A8] hover:text-white dark:border-[#363D4B] dark:bg-[#1D1F25] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#A99AD4] dark:hover:text-[#17181C]'
                    }`}
                  >
                    <span>{hasOriginalPdf ? 'View Original Certificate' : 'Open Certificate'}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
