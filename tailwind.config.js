/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'roxo-escuro': '#2D1576',
        'roxo-medio': '#6A3DE8',
        'lilas-claro': '#A78BFA',
        'branco': '#FFFFFF',
        'sucesso': '#53C2B3',
        'erro': '#E93CAC',
        'neutro': '#9992A9',
        'white': '#FFFFFF',
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      backgroundImage: {
        'gradient-principal': 'linear-gradient(to right, #2D1576, #6A3DE8)',
        'gradient-secundario': 'linear-gradient(to right, #6A3DE8, #A78BFA)',
        'gradient-terciario': 'linear-gradient(to right, #13073A, #2D1576)',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}; 