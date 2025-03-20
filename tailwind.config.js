/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'roxo-escuro': '#2D1576',
        'roxo-medio': '#6A3DE8',
        'roxo-claro': '#A78BFA',
        'lilas-claro': '#F3EFFF',
        'sucesso': '#53C2B3',
        'erro': '#E93CAC',
        'neutro': '#9992A9'
      },
      backgroundImage: {
        'gradient-principal': 'linear-gradient(135deg, #6A3DE8, #2D1576)',
        'gradient-secundario': 'linear-gradient(135deg, #A78BFA, #6A3DE8)'
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: [],
};