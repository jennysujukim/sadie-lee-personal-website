'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getWork } from '../../../../sanity/sanity.query'
import { projects } from '@/_data/projects'
// assets
import star from '@/app/assets/nav-star.svg'
import arrowTop from '@/app/assets/nav-mobile-arrow-top.svg'
// styles
import styles from './WorkNav.module.css'


export default function HeaderNav() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)
  const [ works, setWorks ] = useState<any[]>([])

  useEffect(() => {
    getWork().then(data => { 
      setWorks(data)
    }).catch((error) => console.error(error))
  }, [])

  const onClickScroll = (id: any) => {
    const target = document.getElementById(id)

    if(target){
      const targetTop = target.offsetTop - 100
      console.log(targetTop)
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }

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
                    onClick={() => setIsMobileNavOpen(false)}
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
            {works && works.map((work, index)=> (
              <React.Fragment key={index}>
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
                      height={100}
                    />
                  </div>
                </li>
                {index !== projects.length - 1 &&
                  <Image 
                    className={styles.star}
                    src={star}
                    alt="Star icon"
                  />
                }
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
