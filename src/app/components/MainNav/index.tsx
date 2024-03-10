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
import Logo from '../Logo'

type MainNavProps = {
  handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void
  isNavOnly?: boolean;
}

export default function MainNav({ 
  handleMouseDown,
  isNavOnly }: MainNavProps ) {

  const navLinks = [ { text: 'about', link: '/about' }, { text: 'work', link: '/work' } ];
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {!isNavOnly &&
        <>
          {pathname !== '/about' && 
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
          }
          <Logo isLink={true} />
        </>
      }
      <nav className={isNavOnly ? styles.navContainer_Only : styles.navContainer}>
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
