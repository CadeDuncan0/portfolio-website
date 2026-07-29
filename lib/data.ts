export const profile = {
  name: 'Cade',
  taglineBefore: 'Full-stack engineer crafting clean, aesthetic web experiences — and the systems that power them. I turn ideas into ',
  taglineHighlight: 'interfaces people love to use',
  taglineAfter: '.',
  avatar: '/imgs/linkedin-headshot.png',
  resume: '/docs/Cade-Duncan-Resume.pdf',
}

export const socials = {
  website: 'https://cadeduncan.com',
  github: 'https://github.com/CadeDuncan0',
  linkedin: 'https://www.linkedin.com/in/cade-duncan',
  email: 'cadeduncan72@gmail.com',
}

export const about =
  "I'm a full-stack software engineer at Russell Sigler Inc., where I design and ship internal platforms that replace legacy processes and streamline business-critical workflows. I care about clean architecture, strong developer experience, and building software that measurably moves the needle for the teams that depend on it."

export type ListEntry = {
  letter: string
  gradient: string
  title: string
  sub: string
  date: string
}

export const work: ListEntry[] = [
  {
    letter: 'R',
    gradient: 'linear-gradient(135deg,#00eaff,#0088ff)',
    title: 'Russell Sigler Inc.',
    sub: 'Software Engineer',
    date: '2025 — Present',
  },
  {
    letter: 'R',
    gradient: 'linear-gradient(135deg,#00ffae,#00b37a)',
    title: 'Russell Sigler Inc.',
    sub: 'Software Engineer Intern',
    date: '2024',
  },
]

export const education: ListEntry[] = [
  {
    letter: 'F',
    gradient: 'linear-gradient(135deg,#00eaff,#3366ff)',
    title: 'California State University, Fullerton',
    sub: 'B.S. in Computer Science',
    date: '2023 — 2024',
  },
  {
    letter: 'C',
    gradient: 'linear-gradient(135deg,#ff2bd6,#ff5a5a)',
    title: 'Clovis Community College',
    sub: 'A.S. in Computer Science',
    date: '2021 — 2023',
  },
]

export const skills: string[] = [
  'C#',
  'TypeScript',
  'JavaScript',
  'SQL',
  'Python',
  'ASP.NET Core',
  'React',
  'Next.js',
  'Godot',
  'Claude Code',
  'Codex',
  'Vitest',
]

export type Project = {
  title: string
  date: string
  desc: string
  tags: string[]
  preview: string
  website?: string
  source?: string
}

export const projects: Project[] = [
  {
    title: 'Order Intake Platform',
    date: 'Russell Sigler Inc.',
    desc: 'A full-stack order intake platform that handles hundreds of sales orders each month. Features include multi-entity transactional workflows, third-party API file delivery, and automated notifications.',
    tags: ['ASP.NET Core', 'C#', 'SQL', 'Entity Framework'],
    preview: 'url(/imgs/projects/order-intake.svg) center/cover no-repeat, linear-gradient(135deg,#141a4d,#3a1f6b)',
  },
  {
    title: 'Windows 7 Web OS',
    date: 'Open Source',
    desc: 'An open-source recreation of the Windows 7 desktop in the browser, featuring a React component library built on 7.css, era-themed Internet Explorer, start menu, and more. Designed around a customizable, registry-driven config system.',
    tags: ['React', 'Next.js', 'TypeScript'],
    preview: 'url(/imgs/projects/windows7-web-os.svg) center/cover no-repeat, linear-gradient(135deg,#0a2340,#1a5f8a)',
    website: 'https://cadeduncan.com/desktop',
    source: 'https://github.com/CadeDuncan0/portfolio-website-windows7',
  },
  {
    title: 'Stardew Valley Mods',
    date: 'Open Source',
    desc: 'Open-source C# gameplay mods published to Nexus Mods with 100,000+ downloads. Uses event-driven SMAPI hooks to manage real-time menu state with defensive logic that prevents a game-breaking soft-lock.',
    tags: ['C#', 'SMAPI'],
    preview: 'url(/imgs/projects/stardew-mods.svg) center/cover no-repeat, linear-gradient(135deg,#150a2e,#9b5a18)',
    website: 'https://www.nexusmods.com/profile/Stingrayss/mods',
    source: 'https://github.com/CadeDuncan0/StardewValley',
  },
  {
    title: 'Super Mario Bros. NES Recreation',
    date: 'Personal Project',
    desc: 'A faithful recreation of the NES-era Super Mario Bros. Built in Godot, replicating the original physics, collision detection, and game-state systems.',
    tags: ['Godot', 'GDScript'],
    preview: 'url(/imgs/projects/super-mario-bros.svg) center/cover no-repeat, linear-gradient(135deg,#3a0d2e,#8a1f63)',
    source: 'https://github.com/CadeDuncan0/Super-Mario-Bros-In-Godot',
  },
]
