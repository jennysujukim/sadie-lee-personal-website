import Link from 'next/link'
import Image from 'next/image'
import grip from '@/app/assets/grip.svg'
import checkbox from '@/app/assets/checkbox.svg'
import check from '@/app/assets/check.svg'
// styles
import styles from './MainNav.module.css'

export default function MainNav() {
  return (
    <div className={styles.wrapper}>
      <Image src={grip} alt="" />

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>SADiE LEE</h1>
      </div>

      <nav>
        <ul>
          <li>
            <div>
              <Image src={check} alt="" />
              <Image src={checkbox} alt="" />
            </div>
            <Link href="/">about</Link>
          </li>
          <li>
            <div>
              <Image src={check} alt="" />
              <Image src={checkbox} alt="" />
            </div>
            <Link href="/about">work</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
