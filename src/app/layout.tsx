import type { Metadata } from 'next'
import { Sansita } from 'next/font/google'
import localFont from 'next/font/local'
import { DataContextProvider } from './context/DataContext'
// styles
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sadielee-design.com'),
  title: 'Sadie Lee : Graphic designer based in London',
  description: 'Sadie Lee is a graphic designer with a strong foundation in art education, further enriched by advanced studies in Interaction Design and a Master’s degree in Graphic Media Design from LCC (UAL). Her interdisciplinary background empowers her to create innovative and impactful designs that effectively tackle a wide range of creative challenges.',
  keywords: 'London Graphic designer, London publication, design studio, UAL designer, London graphic, London graphic studio, London designer, Graphic media design, London branding, London ux design, London UI design, London art, London art lesson, London design commision, London art commision, London logo design, London app design, London type design',
  openGraph: {
    title: 'Sadie Lee : Graphic designer based in London',
    description: 'Sadie Lee is a graphic designer with a strong foundation in art education, further enriched by advanced studies in Interaction Design and a Master’s degree in Graphic Media Design from LCC (UAL). Her interdisciplinary background empowers her to create innovative and impactful designs that effectively tackle a wide range of creative challenges.',
    images: '/big-circle.png',
    url: 'https://www.sadielee-design.com/',
    type: 'website',
    locale: 'en_GB'
  }
}

const sansita = Sansita({ 
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
})

const clashDisplay = localFont({
  src: './fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  variable: '--font-clashDisplay',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        className={`${sansita.variable} ${clashDisplay.variable}`}
      >
        <DataContextProvider>
          {children}
        </DataContextProvider>
      </body>
    </html>
  )
}
