'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'  
import { useDataContext } from '@/app/utils/useDataContext'
// assets
import star from '@/app/assets/nav-star.svg'
import arrowTop from '@/app/assets/nav-mobile-arrow-top.svg'
// styles
import styles from './WorkNav.module.css'


export default function WorkNav() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)
  const { works, filterWorks, setSelectedWorks, selectedWorks } = useDataContext()
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const mobileNavRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setSelectedWorks(works)
  }, [works, setSelectedWorks])

  // anchor scroll
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

  // If click outside, mobileNav is closed
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false)
      }
    }

    if (isMobileNavOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileNavOpen])


  // when mobileNav is open, no workPage scroll
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => { document.body.style.overflow = '' }
  }, [isMobileNavOpen]);

  // when filter is clicked, scroll to top
  const onClickScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  return (
    <>
      {/* Mobile Version */}
      <header className={styles.mobileHeader}>
        <div className={styles.filterContainer}>
          {['all', 'print', 'illustration', 'digital', 'animation'].map((filter) => (
            <button 
              key={filter} 
              onClick={() => {
                filterWorks(filter)
                setSelectedFilter(filter)
                onClickScrollTop()
              }}
              className={`${styles.filterButton} ${selectedFilter === filter ? styles.active : ''}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
          <div className={styles.divider}></div>
          <Image 
            className={isMobileNavOpen ? `${styles.mobileArrow} ${styles.open}` : styles.mobileArrow}
            src={arrowTop}
            alt="Arrow icon"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
        </div>
        {isMobileNavOpen &&
          <nav className={styles.mobileNav} ref={mobileNavRef}>
            <ul className={styles.mobileLinksContainer}>
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
          </nav>
        }
      </header>
      {/* Desktop Version */}
      <header className={styles.header}>
        <div className={styles.filterContainer}>
          {['all', 'print', 'illustration', 'digital', 'animation'].map((filter) => (
            <button 
              key={filter} 
              onClick={() => {
                filterWorks(filter)
                setSelectedFilter(filter)
                onClickScrollTop()
              }}
              className={`${styles.filterButton} ${selectedFilter === filter ? styles.active : ''}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            {selectedWorks.map((work, index)=> (
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
