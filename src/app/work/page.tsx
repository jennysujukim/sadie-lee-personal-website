'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useDataContext } from '@/app/utils/useDataContext'
// components
import ArticleMobile from '../components/ArticleMobile'
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './workPage.module.css'

export default function WorkPage() {

  const { works } = useDataContext()

  // column resize interaction
  const [navContainerWidth, setNavContainerWidth] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [articleHeights, setArticleHeights] = useState<(number | string)[]>([]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const ele = targetRef.current;
    if (!ele) return;

    const startPos = e.clientX;
    const styles = window.getComputedStyle(ele);
    const initialWidth = parseInt(styles.width, 10);

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(0, initialWidth - (e.clientX - startPos)); // Prevent negative values
      setNavContainerWidth(newWidth);
      updateCursor();
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      resetCursor();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const updateCursor = () => {
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const resetCursor = () => {
    document.body.style.removeProperty('cursor');
    document.body.style.removeProperty('user-select');
  };

  const imgsContainerRef = useRef<HTMLDivElement>(null);

  const handleHeight = useCallback((value: (number | string)[] | undefined) => {
    setArticleHeights(value ?? []);
  }, []);

  useEffect(() => {
    setShowDescription(navContainerWidth >= 150);
  }, [navContainerWidth]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mobileWrapper}>
          <div className={styles.navContainer}>
            <MainNav />
          </div>
          <ArticleMobile works={works} />
        </div>
        <div className={styles.wrapper}>
          <div 
            className={styles.imgsContainer} 
            ref={imgsContainerRef}
          >
            <ArticleImgs 
              works={works} 
              heights={articleHeights}
            />
          </div>
          <div className={styles.navContainer}>
            <MainNav handleMouseDown={handleMouseDown} />
          </div>
          <div
            className={styles.descriptionsContainer}
            ref={targetRef}
            style={{ 
                width: `${navContainerWidth}px`, 
                display: showDescription ? 'block' : 'none',
                maxWidth: 'calc((100vw - ((100px + 2rem))) * 0.40)',
              }}
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
  );
}