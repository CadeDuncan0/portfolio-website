import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeToggle } from '@/components/theme-toggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    delete document.documentElement.dataset.theme
    localStorage.clear()
  })

  it('renders the dark default when nothing has been applied yet', () => {
    render(<ThemeToggle />)

    expect(screen.getByRole('button', { name: /switch to light theme/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('reflects a theme the layout script applied before mount', () => {
    document.documentElement.dataset.theme = 'light'

    render(<ThemeToggle />)

    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toHaveAttribute('aria-pressed', 'true')
  })

  it('stamps data-theme and persists the choice in both directions', () => {
    render(<ThemeToggle />)

    fireEvent.click(screen.getByRole('button', { name: /switch to light theme/i }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')

    fireEvent.click(screen.getByRole('button', { name: /switch to dark theme/i }))
    // Dark is the absence of the attribute, not data-theme="dark".
    expect(document.documentElement.dataset.theme).toBeUndefined()
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
