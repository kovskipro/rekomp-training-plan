/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f0f0f',
          soft: '#3a3a3a',
          muted: '#787878',
          faint: '#b8b8b8',
        },
        paper: {
          DEFAULT: '#f8f6f1',
          warm: '#f0ede6',
          card: '#ffffff',
        },
        accent: {
          DEFAULT: '#1a4731',
          light: '#2d6e4a',
          pale: '#e8f2ec',
        },
        warn: {
          DEFAULT: '#7a4500',
          pale: '#fdf0e0',
        },
        danger: {
          DEFAULT: '#6b1c1c',
          pale: '#fceaea',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
