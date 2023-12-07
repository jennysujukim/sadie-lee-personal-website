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
        'tab': '640px',
        'lap': '1024px',
        'desk': '1280px',
      },
      colors: {
        purewhite: 'var(--color-purewhite)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        pink: 'var(--color-pink)',
        lightpink: 'var(--color-lightpink)',
      },
      fontFamily: {
        sansita: ['var(--font-sansita)'],
        idGrotesk: ['var(--font-idGrotesk)'],
      },
      fontSize: {
        'headerNav-link': 'var(--fs-headerNav-link)',
        'headerNav-comma': 'var(--fs-headerNav-comma)',
      },
      backgroundImage: {
        'gradient-white': 'var(--bg-gradient-white)',
      },
      spacing: {
        'headerNav-height': 'var(--h-headerNav)', 
        'mainNav-width': 'var(--w-mainNav)',
        'carousel-min-width': 'var(--min-w-carousel)',
      },
      minHeight: {
        'headerNav': 'var(--h-headerNav)',
        'articleWrapper': 'var(--min-h-articleWrapper)',
      },
      minWidth: {
        'articleImg': 'var(--min-w-articleImg)',
      },
      borderRadius: {
        'articleImg': 'var(--b-radius-articleImg)',
      }
    },
  },
  plugins: [],
}
export default config
