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
      <p className={styles.copyrightDesign}>Designed by Sadie Lee</p>
      <p className={styles.copyrightDevelop}>Developed by&nbsp;
        <Link 
          href="https://seojeongkim.com" 
          target='_blank'
          className={styles.copyrightLink}
          >
            Jenny Kim
        </Link>
      </p>
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
