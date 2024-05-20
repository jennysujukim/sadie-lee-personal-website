import type { Metadata } from 'next'
import { Sansita } from 'next/font/google'
import localFont from 'next/font/local'
import { WorkContextProvider } from './context/WorkContext'
// styles
import './globals.css'

export const metadata: Metadata = {
  title: 'Sadie Lee_London-based graphic designer',
  description: '.',
  keywords: 'London Graphic designer, London publication, design studio, UAL designer, London graphic, London graphic studio, London designer, Graphic media design, London branding, London ux design, London UI design, London art, London art lesson, London design commision, London art commision, London logo design, London app design, London type design',
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
        <WorkContextProvider>
          {children}
        </WorkContextProvider>
      </body>
    </html>
  )
}
