import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dock } from '@/components/dock'
import { profile, socials } from '@/lib/data'

describe('Dock', () => {
  it('offers the resume as a download alongside the social links', () => {
    render(<Dock />)

    const resume = screen.getByRole('link', { name: /download resume/i })
    expect(resume).toHaveAttribute('href', profile.resume)
    expect(resume).toHaveAttribute('download')
  })

  it('renders every social destination', () => {
    render(<Dock />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', socials.github)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', socials.linkedin)
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${socials.email}`)
  })

  it('opens external profiles in a new tab without leaking the opener', () => {
    render(<Dock />)

    for (const name of ['GitHub', 'LinkedIn']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
