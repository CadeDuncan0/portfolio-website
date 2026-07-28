import Link from 'next/link'
import { Home, Github, Linkedin, Mail, FileDown } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { profile, socials } from '@/lib/data'

const iconClass =
  'flex h-[38px] w-[38px] items-center justify-center rounded-full border border-edge-soft bg-fill text-cyber-cyan transition-colors hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10'

const Divider = () => <span className="mx-1 h-6 w-px bg-edge" />

export function Dock() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="inline-flex items-center gap-1.5 rounded-[30px] border border-edge bg-surface px-3.5 py-[9px] shadow-[0_0_24px_rgba(0,234,255,0.22),inset_0_0_18px_rgba(0,234,255,0.06)] backdrop-blur-md">
        <Link href="/#" className={iconClass} aria-label="Home">
          <Home className="h-[18px] w-[18px]" />
        </Link>
        <Divider />
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="GitHub">
          <Github className="h-[18px] w-[18px]" />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="LinkedIn">
          <Linkedin className="h-[18px] w-[18px]" />
        </a>
        <a href={`mailto:${socials.email}`} className={iconClass} aria-label="Email">
          <Mail className="h-[18px] w-[18px]" />
        </a>
        <Divider />
        <a
          href={profile.resume}
          download
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-cyber-magenta/45 bg-cyber-magenta/[0.09] text-cyber-magenta transition-all duration-200 hover:border-cyber-magenta/80 hover:shadow-[0_0_18px_rgba(255,43,214,0.55)]"
          aria-label="Download resume (PDF)"
          title="Download resume (PDF)"
        >
          <FileDown className="h-[18px] w-[18px]" />
        </a>
        <Divider />
        <ThemeToggle />
      </div>
    </div>
  )
}
