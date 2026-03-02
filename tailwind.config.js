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
        'petriko-cream': '#F8F8F8',
        'petriko-dark': '#111111',
        'petriko-gold': '#b19777',
        'petriko-card': '#FFFFFF',
        'petriko-border': 'rgba(0,0,0,0.06)',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-split': ['16vw', { lineHeight: '0.8', letterSpacing: '-0.06em' }],
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
    },
  },
  plugins: [],
  darkMode: 'class',
}
