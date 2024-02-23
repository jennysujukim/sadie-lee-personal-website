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
import logo from '@/app/assets/logo.svg'
// styles
import styles from './MainNav.module.css'

type MainNavProps = {
  handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function MainNav({ handleMouseDown }: MainNavProps ) {

  const navLinks = [ { text: 'about', link: '/about' }, { text: 'work', link: '/work' } ];
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.gripContainer}>
        <Image 
          className={styles.arrowLeft}
          src={arrowLeft} 
          alt="Left arrow icon"
        />
        <Image
          className={styles.grip} 
          src={grip} 
          alt="Grip graphic"
          onMouseDown={handleMouseDown}
          draggable="false"
        />
        <Image 
          className={styles.arrowRight}
          src={arrowRight} 
          alt="Right arrow icon"
        />
      </div>
      <Link
        href={'/'} 
        className={styles.logoContainer}
      >
        <Image 
          className={styles.logo}
          src={logo}
          alt="Sadie Lee logo"
        />
      </Link>
      <nav className={styles.navContainer}>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.link}
                className={styles.link}
              >
                <div className={styles.checkboxContainer}>
                  <Image
                    className={pathname === navLink.link ? `${styles.check} ${styles.active}` : `${styles.check}`} 
                    src={check} 
                    alt="Check icon"
                  />
                  <Image 
                    src={checkbox} 
                    alt="Checkbox icon"
                  />
                </div>
                <p className={pathname === navLink.link ? `${styles.linkText} ${styles.active}` : styles.linkText }>
                  {navLink.text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
