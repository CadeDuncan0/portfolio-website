import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: 'rgb(var(--cyan-ink) / <alpha-value>)',
          magenta: 'rgb(var(--mag-ink) / <alpha-value>)',
          yellow: 'rgb(var(--yellow-ink) / <alpha-value>)',
        },
        ink: 'var(--ink)',
        strong: 'var(--strong)',
        bright: 'var(--bright)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        panel: 'var(--panel)',
        edge: 'var(--edge)',
        'edge-soft': 'var(--edge-soft)',
        fill: 'var(--fill)',
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
