/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
          950: 'rgb(var(--primary-950) / <alpha-value>)',
        },
        ink: {
          50: 'rgb(var(--ink-50) / <alpha-value>)',
          100: 'rgb(var(--ink-100) / <alpha-value>)',
          200: 'rgb(var(--ink-200) / <alpha-value>)',
          300: 'rgb(var(--ink-300) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          950: 'rgb(var(--ink-950) / <alpha-value>)',
        },
        modax: {
          navy: 'rgb(var(--modax-navy) / <alpha-value>)',
          'navy-2': 'rgb(var(--modax-navy-2) / <alpha-value>)',
          'navy-deep': 'rgb(var(--modax-navy-deep) / <alpha-value>)',
          line: 'rgb(var(--modax-line) / <alpha-value>)',
          'blue-deep': 'rgb(var(--modax-blue-deep) / <alpha-value>)',
          blue: 'rgb(var(--modax-blue) / <alpha-value>)',
          aqua: 'rgb(var(--modax-aqua) / <alpha-value>)',
          gold: 'rgb(var(--modax-gold) / <alpha-value>)',
          'gold-hover': 'rgb(var(--modax-gold-hover) / <alpha-value>)',
          'gold-tint': 'rgb(var(--modax-gold-tint) / <alpha-value>)',
          white: 'rgb(var(--modax-white) / <alpha-value>)',
          muted: 'rgb(var(--modax-muted) / <alpha-value>)',
          'muted-2': 'rgb(var(--modax-muted-2) / <alpha-value>)',
          ink: 'rgb(var(--modax-ink) / <alpha-value>)',
          body: 'rgb(var(--modax-body) / <alpha-value>)',
          'border-lt': 'rgb(var(--modax-border-lt) / <alpha-value>)',
          'blue-tint': 'rgb(var(--modax-blue-tint) / <alpha-value>)',
          'blue-tint-2': 'rgb(var(--modax-blue-tint-2) / <alpha-value>)',
          accent: 'rgb(var(--modax-accent) / <alpha-value>)',
          'accent-dark': 'rgb(var(--modax-accent-dark) / <alpha-value>)',
          'accent-light': 'rgb(var(--modax-accent-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)',
        'grid-pattern-dark':
          'linear-gradient(to right, rgb(10 12 18 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(10 12 18 / 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
