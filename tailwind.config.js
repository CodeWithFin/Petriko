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
        'apple-blue': '#007AFF',
        'apple-blue-dark': '#0A84FF',
        'apple-gold': '#FFD60A',
        'apple-text': '#1D1D1F',
        'apple-text-secondary': '#86868B',
        'apple-text-dark': '#FFFFFF',
        'apple-text-secondary-dark': '#98989D',
        'apple-gray': '#F2F2F7',
        'apple-gray-dark': '#1C1C1E',
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': ['40px', '46px'],
        'hero-desktop': ['56px', '64px'],
        'h2-mobile': ['28px', '34px'],
        'h2-desktop': ['48px', '52px'],
        'h3-mobile': ['24px', '30px'],
        'h3-desktop': ['36px', '40px'],
        'body-mobile': ['17px', '25px'],
        'body-desktop': ['19px', '27px'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'apple': '20px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      margin: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
