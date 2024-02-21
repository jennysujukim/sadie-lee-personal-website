import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tab': '600px',
        'lap': '1024px',
        'desk': '1200px',
        'desk-lg': '1920px'
      },
      colors: {
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        pink: 'var(--color-pink)',
        lightpink: 'var(--color-lightpink)',
        lightgrey: 'var(--color-lightgrey)',
      },
      fontFamily: {
        sansita: ['var(--font-sansita)'],
        clashDisplay: ['var(--font-clashDisplay)'],
      },
      fontSize: {
        'workNav-link': 'var(--fs-workNav-link)',
        'workNav-link-mobile': 'var(--fs-workNav-link-mobile)',
        'workNav-comma': 'var(--fs-workNav-comma)',
      },
      backgroundImage: {
        'gradient-workNav': 'var(--bg-gradient-workNav)',
        'gradient-workNav-mobile': 'var(--bg-gradient-workNav-mobile)',
        'gradient-workNav-mobile-open': 'var(--bg-gradient-workNav-mobile-open)'
      },
      spacing: {
        'workNav-linkContainer-mobile': 'var(--h-workNav-linkContainer-mobile)',
        'workNav-height-mobile': 'var(--h-workNav-mobile)',
        'workNav-height': 'var(--h-workNav)', 
        'mainNav-width': 'var(--w-mainNav)',
        'carousel-min-width': 'var(--min-w-carousel)',
      },
      minHeight: {
        'workNav': 'var(--h-workNav)',
        'articleWrapper': 'var(--min-h-articleWrapper)',
      },
      minWidth: {
        'articleImg': 'var(--min-w-articleImg)',
      },
      maxWidth: {
        'constraint': '1920px',
      },
      borderRadius: {
        'articleImg': 'var(--b-radius-articleImg)',
      },
      boxShadow: {
        'workNav-hover-thumbnail': 'var(--color-pink) 0px 5px 15px',
      }
    },
  },
  plugins: [],
}
export default config
