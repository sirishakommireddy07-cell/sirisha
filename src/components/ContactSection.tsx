import {FormEvent, useState} from 'react';
import {Check, Copy, Mail, MapPin, Phone, Send} from 'lucide-react';
import {PORTFOLIO_PROFILE} from '../data/portfolio';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedSubject = form.subject.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setError('Please complete all fields before sending your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmittedData({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    });
    setForm(INITIAL_FORM);
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Sirisha,\n\n${data.message}\n\nBest regards,\n${data.name}\n(${data.email})`
    );
    return `mailto:${PORTFOLIO_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-b border-[#E5E6EA] bg-[#FAFAF8] py-16 sm:py-20 lg:py-24 transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#4C6E91] uppercase dark:text-[#96B3D1]">
            Get in Touch
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance] dark:text-[#F4F4F5]">
            Have an Idea? Let&apos;s Connect!
          </h2>
          <p className="mt-3 text-base text-[#52565E] dark:text-[#B4B9C6]">
            Open to internship opportunities, collaborative software projects, and technical conversations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Details & Socials */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#E2E4E9] bg-white p-6 sm:p-7 dark:border-[#2E313A] dark:bg-[#1D1F25]">
              <h3 className="font-display text-lg font-semibold text-[#202124] dark:text-[#F4F4F5]">
                Contact Information
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
                    <Mail className="h-[18px] w-[18px] text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Email</p>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${PORTFOLIO_PROFILE.email}`}
                        className="break-all text-sm font-medium text-[#202124] hover:text-[#6D59A1] dark:text-[#F4F4F5] dark:hover:text-[#A99AD4]"
                      >
                        {PORTFOLIO_PROFILE.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        className="inline-flex h-7 items-center gap-1 rounded-md border border-[#E2E4E9] px-2 text-xs text-[#52565E] transition-colors hover:bg-[#F1F2F4] dark:border-[#323640] dark:text-[#B4B9C6] dark:hover:bg-[#262932]"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3 w-3 text-[#6D59A1] dark:text-[#A99AD4]" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
                    <Phone className="h-[18px] w-[18px] text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Phone</p>
                    <a
                      href={PORTFOLIO_PROFILE.phoneHref}
                      className="mt-0.5 block text-sm font-medium tabular-nums text-[#202124] hover:text-[#4C6E91] dark:text-[#F4F4F5] dark:hover:text-[#96B3D1]"
                    >
                      {PORTFOLIO_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3F8] dark:bg-[#232A35]">
                    <MapPin className="h-[18px] w-[18px] text-[#4C6E91] dark:text-[#96B3D1]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-[#202124] dark:text-[#F4F4F5]">
                      {PORTFOLIO_PROFILE.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-[#ECEEF2] pt-6 dark:border-[#2C2F37]">
                <p className="text-xs font-medium text-[#5F6368] dark:text-[#A1A6B3]">
                  Connect Elsewhere
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={PORTFOLIO_PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2 text-sm font-medium text-[#202124] transition-colors hover:border-[#8875B9] hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PORTFOLIO_PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2 text-sm font-medium text-[#202124] transition-colors hover:border-[#8875B9] hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                  >
                    <GitHubIcon />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PORTFOLIO_PROFILE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2 text-sm font-medium text-[#202124] transition-colors hover:border-[#8875B9] hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                  >
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={PORTFOLIO_PROFILE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2 text-sm font-medium text-[#202124] transition-colors hover:border-[#8875B9] hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4] dark:hover:bg-[#2A2D35]"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E2E4E9] bg-white p-6 sm:p-8 dark:border-[#2E313A] dark:bg-[#1D1F25]">
              {submittedData ? (
                <div className="py-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8875B9]/15 text-[#6D59A1] dark:bg-[#A99AD4]/20 dark:text-[#A99AD4]">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#202124] dark:text-[#F4F4F5]">
                    Message Prepared
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52565E] dark:text-[#B4B9C6]">
                    Thank you, {submittedData.name}. Your note regarding &ldquo;{submittedData.subject}&rdquo; is ready to send directly via your default email client, or you can write another message.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#7663A8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#665496] whitespace-nowrap shrink-0 dark:bg-[#A99AD4] dark:text-[#17181C] dark:hover:bg-[#B8AAE0]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Send via Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex min-h-[44px] items-center rounded-xl border border-[#D4D7DF] bg-white px-4 py-2 text-sm font-medium text-[#202124] transition-colors hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#202124] dark:text-[#E5E7EB]"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2.5 text-sm text-[#202124] placeholder-[#80868B] transition-colors focus:border-[#8875B9] focus:bg-white focus:outline-none dark:border-[#323640] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:placeholder-[#6E7482] dark:focus:border-[#A99AD4] dark:focus:bg-[#17181C]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#202124] dark:text-[#E5E7EB]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2.5 text-sm text-[#202124] placeholder-[#80868B] transition-colors focus:border-[#8875B9] focus:bg-white focus:outline-none dark:border-[#323640] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:placeholder-[#6E7482] dark:focus:border-[#A99AD4] dark:focus:bg-[#17181C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-[#202124] dark:text-[#E5E7EB]"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({...form, subject: e.target.value})}
                      placeholder="Project inquiry, internship, or collaboration"
                      className="mt-1.5 w-full rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-2.5 text-sm text-[#202124] placeholder-[#80868B] transition-colors focus:border-[#8875B9] focus:bg-white focus:outline-none dark:border-[#323640] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:placeholder-[#6E7482] dark:focus:border-[#A99AD4] dark:focus:bg-[#17181C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#202124] dark:text-[#E5E7EB]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      placeholder="Share a brief note about your idea or inquiry..."
                      className="mt-1.5 w-full resize-y rounded-xl border border-[#D4D7DF] bg-[#FAFAF8] px-4 py-3 text-sm text-[#202124] placeholder-[#80868B] transition-colors focus:border-[#8875B9] focus:bg-white focus:outline-none dark:border-[#323640] dark:bg-[#17181C] dark:text-[#F4F4F5] dark:placeholder-[#6E7482] dark:focus:border-[#A99AD4] dark:focus:bg-[#17181C]"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg border border-[#D93025]/30 bg-[#D93025]/5 px-3.5 py-2 text-sm text-[#B3261E] dark:border-[#F28B82]/30 dark:bg-[#F28B82]/10 dark:text-[#F28B82]"
                    >
                      {error}
                    </p>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#4C6E91] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3E5C7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7FA3] whitespace-nowrap shrink-0 dark:bg-[#829DBB] dark:text-[#17181C] dark:hover:bg-[#96B0CE]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
