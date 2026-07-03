import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import { ListRow } from '@/components/list-row'
import { ProjectCard } from '@/components/project-card'
import { Dock } from '@/components/dock'
import { profile, about, work, education, skills, projects, socials } from '@/lib/data'

export default function Home() {
  return (
    <main className="relative z-[1] mx-auto max-w-[680px] px-7 pb-32 pt-16">
      {/* HERO — desktop: text left / avatar right. Mobile (<640px): avatar
          centered on top, greeting + tagline centered below (flex-col-reverse
          keeps the avatar first while it stays last in the DOM). */}
      <section className="mb-[52px] flex items-center justify-between gap-6 pt-2 max-sm:mb-16 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-9 max-sm:text-center">
        <div className="max-sm:w-full">
          <h1 className="font-display text-[40px] font-black uppercase leading-[1.05] tracking-[1px] text-strong hero-glow max-sm:text-[44px]">
            HI, I&apos;M{' '}
            <span className="text-cyber-yellow neon-yellow">{profile.name.toUpperCase()}</span>
          </h1>
          <p className="mt-3.5 max-w-[360px] text-[17px] font-medium leading-[1.5] text-muted max-sm:mx-auto max-sm:mt-5 max-sm:max-w-none max-sm:text-[19px] max-sm:leading-[1.6]">
            {profile.taglineBefore}
            <span className="text-cyber-cyan">{profile.taglineHighlight}</span>
            {profile.taglineAfter}
          </p>
        </div>
        <div
          className="h-[120px] w-[120px] shrink-0 rounded-full p-[3px] shadow-[0_0_28px_rgba(0,234,255,0.45),0_0_48px_rgba(255,43,214,0.3)] max-sm:h-[min(500px,80vw)] max-sm:w-[min(500px,80vw)] max-sm:p-1"
          style={{
            background:
              'conic-gradient(from 180deg, var(--cyan), var(--mag), var(--yellow), var(--cyan))',
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-panel">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 639px) 80vw, 120px"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-[52px]">
        <SectionTitle>About</SectionTitle>
        <p className="text-base font-medium leading-[1.65] text-muted max-sm:text-lg max-sm:leading-[1.7]">
          {about}
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mb-[52px]">
        <SectionTitle>Work Experience</SectionTitle>
        {work.map((entry) => (
          <ListRow key={entry.title} {...entry} />
        ))}
      </section>

      {/* EDUCATION */}
      <section className="mb-[52px]">
        <SectionTitle>Education</SectionTitle>
        {education.map((entry) => (
          <ListRow key={entry.title} {...entry} />
        ))}
      </section>

      {/* SKILLS */}
      <section className="mb-[52px]">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-wrap gap-2.5 max-sm:justify-center max-sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-edge bg-fill px-[11px] py-[5px] font-mono text-xs uppercase tracking-[1px] text-cyber-cyan shadow-[inset_0_0_12px_rgba(0,234,255,0.08)] clip-corner max-sm:px-3.5 max-sm:py-2 max-sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-[52px] text-center">
        <span className="mb-4 inline-block border border-cyber-magenta/40 bg-cyber-magenta/[0.07] px-3.5 py-[5px] font-mono text-xs uppercase tracking-[2px] text-cyber-magenta shadow-[0_0_16px_rgba(255,43,214,0.25)] clip-corner">
          My Projects
        </span>
        <h2 className="font-display text-[30px] font-black uppercase tracking-[1px] text-strong neon-cyan max-sm:text-[34px]">
          Check out my latest work
        </h2>
        <p className="mx-auto mt-3 max-w-[460px] text-base font-medium leading-[1.55] text-muted max-sm:text-lg max-sm:leading-[1.6]">
          I&apos;ve worked on a range of projects, from quick experiments to production web apps.
          Here are a few of my favorites.
        </p>
        <div className="mt-[30px] grid grid-cols-2 gap-[18px] text-left max-sm:mt-8 max-sm:grid-cols-1 max-sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mb-[52px] text-center">
        <span className="mb-4 inline-block border border-cyber-cyan/40 bg-cyber-cyan/[0.07] px-3.5 py-[5px] font-mono text-xs uppercase tracking-[2px] text-cyber-cyan shadow-[0_0_16px_rgba(0,234,255,0.25)] clip-corner">
          Contact
        </span>
        <h2 className="font-display text-[34px] font-black uppercase tracking-[1px] text-strong neon-cyan">
          Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-[420px] text-base font-medium leading-[1.55] text-muted max-sm:text-lg max-sm:leading-[1.6]">
          Want to chat? Send me an{' '}
          <a
            href={`mailto:${socials.email}`}
            className="border-b border-cyber-cyan text-cyber-cyan neon-cyan"
          >
            email
          </a>{' '}
          and I&apos;ll respond whenever I can.
        </p>
      </section>

      <Dock />
    </main>
  )
}
