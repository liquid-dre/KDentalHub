import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A6CFF',
          'blue-light': '#6FD3FF',
          'blue-pale': '#F7FBFF',
          'blue-border': '#DCEBFF',
          navy: '#0F172A',
          slate: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0A6CFF 0%, #6FD3FF 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% 0%, #EBF5FF 0%, #FFFFFF 70%)',
        'gradient-section': 'radial-gradient(ellipse 60% 40% at 50% 50%, #F0F8FF 0%, #FFFFFF 80%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
        },
      },
      boxShadow: {
        'blue-soft': '0 4px 24px rgba(10, 108, 255, 0.08)',
        'blue-glow': '0 0 40px rgba(10, 108, 255, 0.12)',
        'card': '0 2px 16px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 8px 32px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
}

export default config
