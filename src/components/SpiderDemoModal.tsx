import {useEffect, useState} from 'react';
import {Eye, EyeOff, X} from 'lucide-react';
import {SpiderCanvas} from './SpiderCanvas';

interface SpiderDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export function SpiderDemoModal({isOpen, onClose, theme}: SpiderDemoModalProps) {
  const [showGuides, setShowGuides] = useState(true);
  const [telemetry, setTelemetry] = useState({x: 0, y: 0, speed: 0});

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spider-demo-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E2E4E9] bg-white shadow-xl dark:border-[#2E313A] dark:bg-[#1D1F25]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E4E9] px-6 py-4 dark:border-[#2E313A]">
          <div>
            <h3
              id="spider-demo-title"
              className="font-display text-lg font-bold text-[#202124] dark:text-[#F4F4F5]"
            >
              Interactive Spider Animation Design
            </h3>
            <p className="text-xs text-[#5F6368] dark:text-[#A1A6B3]">
              Move your pointer or tap inside the canvas to test dynamic inverse kinematics and gait stepping
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowGuides((prev) => !prev)}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#D4D7DF] bg-[#FAFAF8] px-3 py-1.5 text-xs font-medium text-[#202124] transition-colors hover:bg-[#F1F2F4] whitespace-nowrap shrink-0 dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
            >
              {showGuides ? (
                <>
                  <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Hide Vector Guides</span>
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Show Vector Guides</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close live demo"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4D7DF] bg-white text-[#202124] transition-colors hover:bg-[#F1F2F4] dark:border-[#323640] dark:bg-[#22242A] dark:text-[#F4F4F5] dark:hover:bg-[#2A2D35]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="h-[420px] w-full bg-[#FAFAF8] sm:h-[480px] dark:bg-[#17181C]">
          <SpiderCanvas theme={theme} showGuides={showGuides} onTelemetry={setTelemetry} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E4E9] bg-[#F1F2F4]/60 px-6 py-3 text-xs text-[#52565E] dark:border-[#2E313A] dark:bg-[#22242A] dark:text-[#B4B9C6]">
          <div className="font-mono-code flex items-center gap-4 tabular-nums">
            <span>Body X: {telemetry.x}px</span>
            <span>Body Y: {telemetry.y}px</span>
            <span>Velocity: {telemetry.speed} px/s</span>
          </div>
          <span>Coordinate Geometry · 8 Articulated Limbs</span>
        </div>
      </div>
    </div>
  );
}
