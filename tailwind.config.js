/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0F1113',
        accent: '#2563EB',
        gray: {
          support: '#6B7280',
          light: '#F7F7F6',
          border: '#E5E5E3',
        }
      },
      maxWidth: {
        container: '1200px',
      }
    },
  },
  plugins: [],
}
