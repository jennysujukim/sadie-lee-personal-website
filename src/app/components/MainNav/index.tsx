'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// assets
import grip from '@/app/assets/grip.svg'
import checkbox from '@/app/assets/checkbox.svg'
import check from '@/app/assets/check.svg'
import arrowLeft from '@/app/assets/grip-arrow-left.svg'
import arrowRight from '@/app/assets/grip-arrow-right.svg'
// styles
import styles from './MainNav.module.css'

export default function MainNav() {

  const navLinks = [ { text: 'about', link: '/about' }, { text: 'work', link: '/' } ];
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.gripContainer}>
        <div className={styles.arrowLeft}>
          <Image src={arrowLeft} alt="graphic of left arrow" />
        </div>
        <div className={styles.grip}>
          <Image src={grip} alt="graphic of grip" />
        </div>
        <div className={styles.arrowRight}>
          <Image src={arrowRight} alt="graphic of right arrow" />
        </div>
      </div>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>SADiE LEE</h1>
      </div>

      <nav>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.link}
                className={styles.link}
              >
                <div className={styles.checkboxContainer}>
                  <div className={pathname === navLink.link ? `${styles.check} ${styles.active}` : `${styles.check}`}>
                    <Image src={check} alt="graphic of check" />
                  </div>
                  <div>
                    <Image src={checkbox} alt="graphic of checkbox" />
                  </div>
                </div>
                <p className={styles.linkText}>{navLink.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
