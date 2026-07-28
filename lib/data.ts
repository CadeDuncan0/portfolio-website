export const profile = {
  name: 'Cade',
  taglineBefore:
    'Full-stack engineer crafting clean, aesthetic web experiences — and the systems that power them. I turn ideas into ',
  taglineHighlight: 'interfaces people love to use',
  taglineAfter: '.',
  // Served from public/imgs — Next.js exposes the public/ dir at the site root.
  avatar: '/imgs/linkedin-headshot.png',
  // Same public/ root — served from public/docs.
  resume: '/docs/Cade-Duncan-Resume.pdf',
}

export const socials = {
  website: 'https://cadeduncan.com',
  github: 'https://github.com/CadeDuncan0',
  linkedin: 'https://www.linkedin.com/in/cade-duncan',
  email: 'cadeduncan72@gmail.com',
}

export const about =
  "I'm a full-stack software engineer at Russell Sigler Inc., where I design and ship internal platforms that replace legacy processes and streamline business-critical workflows. My work spans .NET and React — from an order-intake system processing hundreds of sales orders a month to reusable component libraries and automated reporting pipelines. I care about clean architecture, strong developer experience, and building software that measurably moves the needle for the teams that depend on it."

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
    desc: 'A full-stack order intake platform that retired the legacy Esker Notes process and now handles hundreds of sales orders each month, consolidating multi-entity transactional workflows, third-party API file delivery, and automated notifications.',
    tags: ['ASP.NET Core', 'C#', 'SQL', 'Entity Framework'],
    preview: 'linear-gradient(135deg,#141a4d,#3a1f6b)',
  },
  {
    title: 'Windows 7 Web OS',
    date: 'Open Source',
    desc: 'A browser-based recreation of the Windows 7 Aero Glass desktop, featuring a custom window manager with Framer Motion animations, dual-role Supabase authentication, and a 25+ component design system documented in Storybook and guarded by zero-warning CI.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Redux Toolkit'],
    preview: 'linear-gradient(135deg,#0d3433,#1a7a5f)',
    website: 'https://cadeduncan.com/desktop',
    source: 'https://github.com/CadeDuncan0/portfolio-website-windows7',
  },
  {
    title: 'Stardew Valley Mods',
    date: 'Open Source',
    desc: 'Open-source C# gameplay mods published to Nexus Mods with 96,000+ downloads, using event-driven SMAPI hooks to manage real-time menu state with defensive logic that prevents a game-breaking soft-lock.',
    tags: ['C#', 'SMAPI', 'Game Modding'],
    preview: 'linear-gradient(135deg,#3a1f0d,#9b5a18)',
    website: 'https://www.nexusmods.com/profile/Stingrayss/mods',
    source: 'https://github.com/CadeDuncan0/StardewValley',
  },
  {
    title: 'Super Mario Bros. NES Recreation',
    date: 'Personal Project',
    desc: 'A faithful recreation of the NES-era Super Mario Bros. built in Godot, replicating the original physics, collision detection, and game-state systems.',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    preview: 'linear-gradient(135deg,#3a0d2e,#8a1f63)',
    source: 'https://github.com/CadeDuncan0/Super-Mario-Bros-In-Godot',
  },
]
