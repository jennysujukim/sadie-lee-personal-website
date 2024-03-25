// components
import Hero from '../components/Hero'
// styles
import styles from './homePage.module.css'

export default async function HomePage() {

  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}