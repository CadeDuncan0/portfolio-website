import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from '@/components/project-card'
import type { Project } from '@/lib/data'

const project: Project = {
  title: 'Windows 7 Web OS',
  type: 'Web App',
  status: 'Live',
  desc: 'A browser-based recreation of the Windows 7 Aero Glass desktop.',
  tags: ['Next.js', 'TypeScript'],
  preview: 'linear-gradient(135deg,#0d3433,#1a7a5f)',
  website: 'https://cadeduncan.com/desktop',
  source: 'https://github.com/CadeDuncan0/portfolio-website-windows7',
}

describe('ProjectCard', () => {
  it('renders the title, meta line, description, and tags', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    expect(screen.getByText(project.type)).toBeInTheDocument()
    expect(screen.getByText(project.status)).toBeInTheDocument()
    expect(screen.getByText(project.desc)).toBeInTheDocument()
    for (const tag of project.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders both link buttons when the project has a website and a source repo', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('link', { name: /website/i })).toHaveAttribute('href', project.website)
    expect(screen.getByRole('link', { name: /source/i })).toHaveAttribute('href', project.source)
  })

  it('omits the link row entirely for a project with neither link', () => {
    render(<ProjectCard project={{ ...project, website: undefined, source: undefined }} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
