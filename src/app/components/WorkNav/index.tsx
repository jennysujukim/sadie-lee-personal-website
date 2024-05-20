'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useWorkContext } from '@/app/utils/useWorkContext'
// assets
import star from '@/app/assets/nav-star.svg'
import arrowTop from '@/app/assets/nav-mobile-arrow-top.svg'
// styles
import styles from './WorkNav.module.css'


export default function HeaderNav() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)
  const { works } = useWorkContext()

  const onClickScroll = (id: any) => {
    const target = document.getElementById(id)

    if(target){
      const targetTop = target.offsetTop - 150
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }

  }

  const onClickScrollMobile = (id: any) => {
    const target = document.getElementById(`${id}_mobile`)

    if(target){
      const targetTop = target.offsetTop - 120
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }

    setIsMobileNavOpen(false)
  }

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
              {works && works.map((work, index) => (
                <li 
                  key={index}
                  className={styles.mobileLinkContainer}
                >
                  <Link 
                    href={`#${work.slug.current}`}
                    className={styles.mobileLink}
                    onClick={() => onClickScrollMobile(work.slug.current)}
                  >
                    {work.title}
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
            {works.map((work, index)=> (
              <li 
                key={index}
                className={styles.linkContainer} 
                onClick={() => onClickScroll(work.slug.current)}
              >
                <div 
                  className={styles.link}
                >
                  {work.title}
                  <Image 
                    className={styles.hoverThumbnail}
                    src={work.images[0]}
                    alt={`Thumbnail of ${work.title} project`}
                    width={100}
                    height={80}
                  />
                </div>
                {index !== works.length - 1 &&
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
