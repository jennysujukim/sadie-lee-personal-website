// components
import MatterJSBridge from '@/app/components/MatterJSBridge'
// styles
import styles from './homePage.module.css'

export default function HomePage() {


  return (
    <main className={styles.main}>
      <MatterJSBridge />
    </main>
  )
}
