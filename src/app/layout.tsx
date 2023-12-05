import type { Metadata } from 'next'
import { Sansita } from 'next/font/google'
import localFont from 'next/font/local'
// components
import HeaderNav from "@/app/components/HeaderNav"
// styles
import './globals.css'

export const metadata: Metadata = {
  title: 'Sadiee Lee Portfolio',
  description: 'This is Sadiee Lee\'s portfolio.',
}

const sansita = Sansita({ 
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
})

const idGrotesk = localFont({
  src: [
    {
      path: './fonts/IDGroteskTrial-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/IDGroteskTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IDGroteskTrial-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/IDGroteskTrial-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/IDGroteskTrial-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/IDGroteskTrial-BoldItalic.woff2',
      weight: '600',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-idGrotesk',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sansita.variable} ${idGrotesk.variable}`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  )
}
