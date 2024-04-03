import Link from 'next/link'
// components
import Hero from '../components/Hero'
// styles
import styles from './homePage.module.css'

export default function HomePage() {


  return (
    <>
    <Link href="/about">About</Link>
    <Link href="/work">Work</Link>
    <main className={styles.main}>
      <Hero />
    </main>
    </>
  )
}
