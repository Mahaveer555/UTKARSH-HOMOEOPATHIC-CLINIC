/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1268B5',
          dark: '#0E5291',
          light: '#2880D1',
        },
        navy: {
          DEFAULT: '#10345C',
          dark: '#0B2442',
          light: '#1B477A',
        },
        accent: {
          red: '#D62839',
          'red-hover': '#BF2030',
          'soft-red': '#FFF0F1',
        },
        lightBlue: '#EAF4FC',
        hospitalText: {
          main: '#202B3C',
          muted: '#64748B',
        },
        gold: {
          DEFAULT: '#F6C843',
          light: '#FDE68A',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(18, 104, 181, 0.15)',
        'card-soft': '0 4px 20px -2px rgba(16, 52, 92, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(18, 104, 181, 0.18)',
      }
    },
  },
  plugins: [],
}
