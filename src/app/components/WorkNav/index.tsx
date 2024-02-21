'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { projects } from '@/_data/projects'
// assets
import star from '@/app/assets/nav-star.svg'
import arrowTop from '@/app/assets/nav-mobile-arrow-top.svg'
// styles
import styles from './WorkNav.module.css'

export default function HeaderNav() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)

  return (
    <>
      <header className={isMobileNavOpen ? `${styles.mobileHeader} ${styles.open}` : styles.mobileHeader}>
        <Image 
          className={isMobileNavOpen ? `${styles.mobileArrow} ${styles.open}` : styles.mobileArrow}
          src={arrowTop}
          alt="Arrow icon"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />
        <nav className={styles.mobileNav}>
          {isMobileNavOpen &&
            <ul>
              {projects.map((project) => (
                <li 
                  className={styles.mobileLinkContainer}
                  key={project.id}
                >
                  <Link 
                    className={styles.mobileLink}
                    href={`#${project.title}`}
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          }
        </nav>
      </header>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            {projects.map((project, index) => (
              <li
                className={styles.linkContainer} 
                key={project.id}
              >
                <Link 
                  className={styles.link}
                  href={`#${project.title}`}
                >
                  {project.title}
                  <Image 
                    className={styles.hoverThumbnail}
                    src={project.images[0]} 
                    alt={`Thumbnail of ${project.title} project` }
                  />
                </Link>
                {index !== projects.length - 1 && 
                  <Image 
                    className={styles.star}
                    src={star}
                    alt="Star icon"
                  />
                }
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
