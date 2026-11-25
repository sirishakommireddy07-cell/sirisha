import {useEffect, useState} from 'react';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Printer,
  X,
} from 'lucide-react';
import {CertificationItem, PORTFOLIO_PROFILE} from '../data/portfolio';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({certificate, onClose}: CertificateModalProps) {
  const [viewMode, setViewMode] = useState<'pdf' | 'details'>('pdf');

  useEffect(() => {
    if (!certificate) return;
    setViewMode(certificate.pdfUrl ? 'pdf' : 'details');

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [certificate, onClose]);

  if (!certificate) return null;

  const hasPdf = Boolean(certificate.pdfUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-5 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white shadow-2xl dark:border-[#2E3440] dark:bg-[#1D1F25]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header with Clear Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5EAF1] bg-[#F8FAFC] px-4 py-3.5 sm:px-6 dark:border-[#2C313C] dark:bg-[#22252D]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-[#CED9E6] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#202124] transition-colors hover:border-[#5C7FA3] hover:bg-[#EEF3F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:hover:border-[#829DBB] dark:hover:bg-[#2A2F3A]"
            >
              <ArrowLeft className="h-4 w-4 text-[#4C6E91] dark:text-[#829DBB]" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </button>

            <div className="hidden sm:flex items-center gap-2">
              <Award className="h-4 w-4 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#4C6E91] dark:text-[#96B3D1]">
                {certificate.issuer}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {hasPdf && (
              <div className="flex items-center rounded-lg border border-[#DCE3EC] bg-white p-0.5 dark:border-[#323846] dark:bg-[#17181C]">
                <button
                  type="button"
                  onClick={() => setViewMode('pdf')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                    viewMode === 'pdf'
                      ? 'bg-[#5C7FA3] text-white dark:bg-[#829DBB] dark:text-[#17181C]'
                      : 'text-[#52565E] hover:text-[#202124] dark:text-[#A1A6B3] dark:hover:text-[#F4F4F5]'
                  }`}
                >
                  Original PDF
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('details')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                    viewMode === 'details'
                      ? 'bg-[#5C7FA3] text-white dark:bg-[#829DBB] dark:text-[#17181C]'
                      : 'text-[#52565E] hover:text-[#202124] dark:text-[#A1A6B3] dark:hover:text-[#F4F4F5]'
                  }`}
                >
                  Summary
                </button>
              </div>
            )}

            {certificate.pdfUrl && (
              <a
                href={certificate.pdfUrl}
                download
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#CED9E6] bg-white px-3 py-1.5 text-xs font-semibold text-[#202124] transition-colors hover:border-[#5C7FA3] hover:bg-[#EEF3F8] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:hover:border-[#829DBB] dark:hover:bg-[#2A2F3A]"
              >
                <Download className="h-3.5 w-3.5 text-[#4C6E91] dark:text-[#829DBB]" aria-hidden="true" />
                <span>Download PDF</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#CED9E6] bg-white text-[#202124] transition-colors hover:bg-[#F1F2F4] dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:hover:bg-[#2A2F3A]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {hasPdf && viewMode === 'pdf' && certificate.pdfUrl ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  id="certificate-modal-title"
                  className="font-display text-lg font-bold text-[#202124] sm:text-xl dark:text-[#F4F4F5]"
                >
                  {certificate.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5F6368] tabular-nums dark:text-[#A1A6B3]">
                  {certificate.issuedDate && <span>Issued {certificate.issuedDate}</span>}
                  {certificate.issuedDate && certificate.credentialId && (
                    <span aria-hidden="true">·</span>
                  )}
                  {certificate.credentialId && <span>{certificate.credentialId}</span>}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#DCE3EC] bg-[#F1F4F8] dark:border-[#2E3440] dark:bg-[#14161B]">
                <iframe
                  src={`${certificate.pdfUrl}#view=FitH`}
                  title={`${certificate.title} PDF`}
                  className="h-[58vh] min-h-[380px] w-full bg-white"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#52565E] dark:text-[#A1A6B3]">
                <span className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-[#5C7FA3] dark:text-[#829DBB]" aria-hidden="true" />
                  <span>If the PDF does not display inline on your device, use Download PDF above.</span>
                </span>

                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#5C7FA3] hover:underline dark:text-[#96B3D1]"
                  >
                    <span>Verify Credential Online</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-[#DCE3EC] bg-[#F8FAFC] p-6 sm:p-8 dark:border-[#2E3440] dark:bg-[#17181C]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5EAF1] pb-4 dark:border-[#2C313C]">
                <span className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
                  {certificate.issuer}
                </span>
                <span className="text-xs font-medium text-[#6D59A1] dark:text-[#A99AD4]">
                  {certificate.credentialType}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Awarded To</p>
                <p className="mt-1 font-display text-lg font-semibold text-[#202124] dark:text-[#F4F4F5]">
                  {PORTFOLIO_PROFILE.fullName}
                </p>

                <h3
                  id="certificate-modal-title"
                  className="mt-5 font-display text-2xl font-bold tracking-tight text-[#202124] sm:text-[1.75rem] dark:text-[#F4F4F5]"
                >
                  {certificate.title}
                </h3>

                {(certificate.issuedDate || certificate.credentialId) && (
                  <p className="mt-2 text-xs font-medium tabular-nums text-[#5F6368] dark:text-[#A1A6B3]">
                    {[certificate.issuedDate, certificate.credentialId].filter(Boolean).join(' · ')}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-[#4A4E54] dark:text-[#C5C9D3]">
                  {certificate.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-[#E5EAF1] pt-5 dark:border-[#2C313C]">
                <p className="text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                  Key Topics Covered
                </p>
                <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {certificate.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-[#202124] dark:text-[#E5E7EB]"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#5C7FA3] dark:text-[#829DBB]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Footer Bar with Secondary Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EAF1] bg-[#F8FAFC] px-4 py-3 sm:px-6 dark:border-[#2C313C] dark:bg-[#22252D]">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CED9E6] bg-white px-4 py-1.5 text-xs font-semibold text-[#202124] transition-colors hover:bg-[#EEF3F8] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:hover:bg-[#2A2F3A]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Certifications</span>
          </button>

          <div className="flex items-center gap-2">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CED9E6] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4C6E91] transition-colors hover:bg-[#EEF3F8] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#96B3D1] dark:hover:bg-[#2A2F3A]"
              >
                <span>Verify</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {!hasPdf && (
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CED9E6] bg-white px-3.5 py-1.5 text-xs font-medium text-[#202124] transition-colors hover:bg-[#EEF3F8] whitespace-nowrap shrink-0 dark:border-[#363D4B] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:hover:bg-[#2A2F3A]"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Print</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
