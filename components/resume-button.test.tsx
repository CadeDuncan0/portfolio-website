import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResumeButton } from '@/components/resume-button'
import { profile } from '@/lib/data'

describe('ResumeButton', () => {
  it('links to the resume PDF and asks the browser to download it', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /download resume/i })
    expect(link).toHaveAttribute('href', profile.resume)
    // The `download` attribute is what turns a navigation into a save; without
    // it the PDF opens in the browser viewer instead.
    expect(link).toHaveAttribute('download')
  })

  it('points at a path under public/, which is what Next.js serves at the site root', () => {
    render(<ResumeButton />)

    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/docs/Cade-Duncan-Resume.pdf')
  })

  it('applies caller-supplied layout classes to the outer wrapper', () => {
    const { container } = render(<ResumeButton className="mt-6" />)

    const wrapper = container.firstElementChild
    expect(wrapper).toHaveClass('mt-6')
    // The pulse lives on the wrapper, not the clipped anchor — see .cta-pulse
    // in globals.css.
    expect(wrapper).toHaveClass('cta-pulse')
  })
})
