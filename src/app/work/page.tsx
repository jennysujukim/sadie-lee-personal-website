'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useWorkContext } from '@/app/utils/useWorkContext'
// components
import ArticleMobile from '../components/ArticleMobile'
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './workPage.module.css'

export default function WorkPage() {

  const { works } = useWorkContext()

  // column resize interaction
  const [navContainerWidth, setNavContainerWidth] = useState<number | undefined>();
  const targetRef = useRef<HTMLDivElement>(null);
  const [padding, setPadding] = useState<boolean>(true);
  const [articleHeights, setArticleHeights] = useState<(number | string)[] | undefined>([]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const ele = targetRef.current;
    if (!ele) { return; }

    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    
    const styles = window.getComputedStyle(ele);
    const w = parseInt(styles.width, 10);

    const handleMouseMove = (e: MouseEvent) => {
        const dx = e.clientX - startPos.x;
        setNavContainerWidth(w - dx);
        updateCursor();
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        resetCursor();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  const updateCursor = () => {
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  const resetCursor = () => {
    document.body.style.removeProperty('cursor');
    document.body.style.removeProperty('user-select');
  }

  const imgsContainerRef = useRef<HTMLDivElement>(null);

  const handleHeight = useCallback((value: (number | string)[] | undefined) => {
    setArticleHeights(value);
  }, []); 

  useEffect(() => {
    if(navContainerWidth && navContainerWidth < 150) {
      setPadding(false)
    } else {
      setPadding(true)
    }
  }, [navContainerWidth])


  return (
    <>
      <main className={styles.main}>
        <div className={styles.mobileWrapper}>
          <div className={styles.navContainer}>
            <MainNav />
          </div>
          <div className={styles.mobileArticlesContainer}>
            <ArticleMobile works={works} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div 
            className={styles.imgsContainer}
            ref={imgsContainerRef}
          >
            <ArticleImgs works={works} heights={articleHeights} />
          </div>
          <div className={styles.navContainer}>
            <MainNav handleMouseDown={handleMouseDown}/>
          </div>
          <div 
            className={styles.descriptionsContainer} 
            ref={targetRef}
            style={{ padding: padding ? "0 2.5rem" : "0 1rem" }}
          >
            <ArticleDescriptions 
              width={navContainerWidth} 
              getHeightValue={handleHeight}
              works={works}
            />
          </div>
        </div>
      </main>
    </>
  )
}
