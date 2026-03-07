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
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#E8F0F3',
          100: '#D1E1E7',
          200: '#A3C3CF',
          300: '#75A5B7',
          400: '#47879F',
          500: '#1E4A5F', // Deep teal
          600: '#18404F',
          700: '#12363F',
          800: '#0C2B2F',
          900: '#06211F',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: '#FFF2ED',
          100: '#FFE5DB',
          200: '#FFCBB7',
          300: '#FFB193',
          400: '#FF976F',
          500: '#FF7F5C', // Warm coral
          600: '#E66F4F',
          700: '#CC5F42',
          800: '#B34F35',
          900: '#993F28',
        },
        cream: {
          50: '#FFFEFC',
          100: '#FFFCF9',
          200: '#FFFAF3',
          300: '#FFF7ED',
          400: '#FFF5E7',
          500: '#FFF8F0', // Soft cream
          600: '#F5E5D6',
          700: '#EBD2BC',
          800: '#E1BFA2',
          900: '#D7AC88',
        },
        graphite: {
          500: '#2F2F35', // Deep text
          600: '#26262B',
          700: '#1D1D21',
          800: '#141417',
          900: '#0B0B0C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config