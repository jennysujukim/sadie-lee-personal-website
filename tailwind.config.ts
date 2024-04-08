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
        'tab-lg': '768px',
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
        'mainNav-link': 'var(--fs-mainNav-link)',
        'mainNav-link-mobile': 'var(--fs-mainNav-link-mobile)',
      },
      backgroundImage: {
        'gradient-workNav': 'var(--bg-gradient-workNav)',
        'gradient-workNav-mobile': 'var(--bg-gradient-workNav-mobile)',
        'gradient-workNav-mobile-open': 'var(--bg-gradient-workNav-mobile-open)'
      },
      spacing: {
        'wrapper-side-mobile': 'var(--spacing-sideWrapper-mobile)',
        'wrapper-side-tab': 'var(--spacing-sideWrapper-tab)',
        'wrapper-side-lap': 'var(--spacing-sideWrapper-lap)',
        'workNav-linkContainer-mobile': 'var(--h-workNav-linkContainer-mobile)',
        'workNav-height-mobile': 'var(--h-workNav-mobile)',
        'workNav-height': 'var(--h-workNav)', 
        'mainNav-width': 'var(--w-mainNav)',
        'carousel-min-width': 'var(--min-w-carousel)',
        'articleImg-mobile': 'var(--w-articleImg-mobile)',
        'articleImg-tab': 'var(--w-articleImg-tab)',
        'profileImg-lap': 'var(--w-profileImg-lap)',
        'profileImg-desk': 'var(--w-profileImg-desk)',
        'aboutPage-height': 'var(--h-aboutPage-lap)',
        'aboutTextWrapper-lap': 'var(--w-aboutPageTextWrapper-lap)',
        'aboutTextWrapper-desk': 'var(--w-aboutPageTextWrapper-desk)',
      },
      minHeight: {
        'workNav': 'var(--h-workNav)',
        'articleWrapper': 'var(--min-h-articleWrapper)',
      },
      maxHeight: {
        'aboutTextContainer': 'var(--max-h-aboutPageTextContainer-lap)',
      },
      minWidth: {
        'articleImg': 'var(--min-w-articleImg)',
      },
      maxWidth: {
        'constraint': '1920px',
      },
      borderRadius: {
        'articleImg': 'var(--b-radius-articleImg)',
        'descriptionContainer': 'var(--b-radius-descriptionContainer)',
      },
      boxShadow: {
        'workNav-hover-thumbnail': 'var(--color-pink) 0px 5px 15px',
      }
    },
  },
  plugins: [],
}
export default config
