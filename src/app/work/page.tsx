"use client"

import { useState } from 'react'
// components
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './workPage.module.css'

export default function WorkPage() {

  const [navWidth, setNavWidth] = useState<number>(200);


  return (
    <main className={styles.main}>
      <div className={styles.imgsContainer}>
        <ArticleImgs />
      </div>
      <div className={styles.navContainer} style={{ width: `${navWidth}px` }} >
        <MainNav />
      </div>
      <div className={styles.descriptionsContainer}>
        <ArticleDescriptions />
      </div>
    </main>
  )
}
