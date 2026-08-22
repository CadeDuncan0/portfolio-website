'use client'

import { useSyncExternalStore } from 'react'
import { Sun, Moon } from '@/components/icons'

type Theme = 'dark' | 'light'

// The <html data-theme> attribute is the source of truth — the inline script
// in layout.tsx stamps it before first paint. Reading it through
// useSyncExternalStore (rather than syncing it into state from an effect)
// keeps the button in step with the DOM without a cascading re-render.
const listeners = new Set<() => void>()

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
  }
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

// SSR has no document. Dark is the default the inline script assumes, so the
// server and the hydrating client agree.
function getServerSnapshot(): Theme {
  return 'dark'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'light') {
    root.dataset.theme = 'light'
  } else {
    delete root.dataset.theme
  }
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* localStorage unavailable (private mode, etc.) — ignore */
  }
  listeners.forEach((listener) => {
    listener()
  })
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(isDark ? 'light' : 'dark')
      }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={!isDark}
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-cyber-yellow/40 bg-fill text-cyber-yellow shadow-none transition-all duration-200 hover:border-cyber-yellow/75 hover:shadow-[0_0_18px_rgba(252,238,10,0.55)]"
    >
      {isDark ? <Sun className="h-[19px] w-[19px]" /> : <Moon className="h-[19px] w-[19px]" />}
    </button>
  )
}
