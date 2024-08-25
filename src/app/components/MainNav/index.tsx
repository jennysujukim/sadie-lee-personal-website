"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
// components
import Logo from '../Logo'
import NavLink from '../NavLink'
// assets
import grip from '@/app/assets/grip.svg'
import arrowLeft from '@/app/assets/grip-arrow-left.svg'
import arrowRight from '@/app/assets/grip-arrow-right.svg'
// styles
import styles from './MainNav.module.css'


type MainNavProps = {
  handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void
  isNavOnly?: boolean;
}

export default function MainNav({ 
  handleMouseDown,
  isNavOnly }: MainNavProps ) {

  const pathname = usePathname()
  const pathText = pathname.trim().replace(/^\/+|\/+$/g, '')
  const navLinks = [ { text: "work", link: "/work" }, { text: "about", link: "/about" } ]

  return (
    <div className={styles.wrapper}>
      {!isNavOnly &&
        <>
          {pathname !== '/about/' && 
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
            <li 
              key={index}
              className={styles.link}
            >
              <NavLink 
                link={navLink.link}
                text={navLink.text}
                isHighlight={navLink.text === pathText}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
