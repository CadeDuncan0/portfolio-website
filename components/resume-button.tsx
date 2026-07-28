import { Download } from '@/components/icons'
import { profile } from '@/lib/data'

/**
 * Primary call-to-action: downloads the resume PDF straight from public/docs.
 * The magenta accent plus the .cta-pulse glow keep it the loudest interactive
 * element on an otherwise cyan page, so it reads as the thing to click.
 */
export function ResumeButton({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex cta-pulse ${className}`}>
      <a
        href={profile.resume}
        download
        className="group relative inline-flex items-center gap-2.5 overflow-hidden border border-cyber-magenta/55 bg-cyber-magenta/[0.09] px-[18px] py-2.5 font-mono text-[13px] uppercase tracking-[2px] text-cyber-magenta transition-colors clip-corner hover:border-cyber-magenta hover:bg-cyber-magenta/[0.16] max-sm:px-6 max-sm:py-3 max-sm:text-sm"
      >
        {/* Sheen that sweeps across on hover — starts a full width to the left
            and travels past the right edge. */}
        <span className="pointer-events-none absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-cyber-cyan/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />
        <Download className="h-4 w-4 max-sm:h-[18px] max-sm:w-[18px]" />
        Download Resume
      </a>
    </span>
  )
}
