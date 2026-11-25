import {useState, useEffect} from 'react';
import {Menu, Moon, Sun, X} from 'lucide-react';
import {NAV_ITEMS, PORTFOLIO_PROFILE} from '../data/portfolio';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
}

export function Navbar({theme, onToggleTheme, activeSection}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E6EA] bg-[#FAFAF8]/90 backdrop-blur-md transition-colors duration-200 dark:border-[#2C2F37] dark:bg-[#17181C]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="font-display text-lg font-bold tracking-tight text-[#202124] transition-colors hover:text-[#6D59A1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8875B9] dark:text-[#F4F4F5] dark:hover:text-[#A99AD4] whitespace-nowrap shrink-0"
          aria-label="Sirisha Kommireddy — Home"
        >
          {PORTFOLIO_PROFILE.initials}
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-5 xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8875B9] ${
                  isActive
                    ? 'text-[#6D59A1] dark:text-[#A99AD4]'
                    : 'text-[#52565E] hover:text-[#202124] dark:text-[#A7ACB8] dark:hover:text-[#F4F4F5]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] rounded-full bg-[#8875B9] transition-transform duration-200 origin-left dark:bg-[#A99AD4] ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Theme Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E4E9] bg-white text-[#202124] transition-colors duration-200 hover:border-[#8875B9]/60 hover:bg-[#F1F2F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:border-[#A99AD4]/60 dark:hover:bg-[#2A2D35]"
          >
            {theme === 'light' ? (
              <Moon className="h-[18px] w-[18px] text-[#52565E]" aria-hidden="true" />
            ) : (
              <Sun className="h-[18px] w-[18px] text-[#A99AD4]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E4E9] bg-white text-[#202124] transition-colors duration-200 hover:bg-[#F1F2F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8875B9] lg:hidden dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#E5E6EA] bg-[#FAFAF8] px-4 py-3 lg:hidden dark:border-[#2C2F37] dark:bg-[#17181C]"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleLinkClick}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#F1F2F4] text-[#6D59A1] dark:bg-[#22242A] dark:text-[#A99AD4]'
                        : 'text-[#3C4043] hover:bg-[#F1F2F4] hover:text-[#202124] dark:text-[#D1D5DB] dark:hover:bg-[#22242A] dark:hover:text-[#F4F4F5]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
