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
      },
      minHeight: {
        'headerNav': 'var(--h-headerNav)',
      },
    },
  },
  plugins: [],
}
export default config
