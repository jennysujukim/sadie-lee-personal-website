'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getData } from '@/app/lib/getData'
// assets
import star from '@/app/assets/nav-star.svg'
import arrowTop from '@/app/assets/nav-mobile-arrow-top.svg'
// styles
import styles from './WorkNav.module.css'

export default function HeaderNav() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)
  const [ works, setWorks ] = useState<any[]>([])

  useEffect(() => {
    getData().then(data => { 
      setWorks(data.data)
    }).catch((error) => console.error(error))
  }, [])

  const onClickScroll = (id: any) => {
    const target = document.getElementById(id)

    if(target){
      const targetTop = target.offsetTop - 100
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
                    href={`#${work.attributes.slug}`}
                    className={styles.mobileLink}
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    {work.attributes.title}
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
              <>
                <li 
                  key={index}
                  className={styles.linkContainer} 
                >
                  <div 
                    className={styles.link}
                    onClick={() => onClickScroll(`${work.attributes.slug}`)}
                  >
                    {work.attributes.title}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      className={styles.hoverThumbnail}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${work.attributes.images.data[0].attributes.url}`}
                      alt={`Thumbnail of ${work.attributes.title} project`}
                    />
                  </div>
                </li>
                {index !== works.length - 1 &&
                  <Image 
                    className={styles.star}
                    src={star}
                    alt="Star icon"
                  />
                }
              </>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
