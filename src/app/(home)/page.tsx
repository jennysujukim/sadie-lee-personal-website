import Link from 'next/link'
// components
import Hero from '../components/Hero'
import NavLink from '../components/NavLink'
// styles
import styles from './homePage.module.css'

export default function HomePage() {


  return (
    <>
    <main className={styles.main}>
      <nav className={styles.linksWrapper}>
        <ul className={styles.linksContainer}>
          <li className={styles.link}>
            <NavLink 
              link="/work"
              text="Work"
              isHome
            />
          </li>
          <li className={styles.link}>
            <NavLink 
              link="/about"
              text="About"
              isHome
            />
          </li>
        </ul>
      </nav>
      <Hero />
    </main>
    </>
  )
}
