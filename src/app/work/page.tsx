'use client'

import { useState, useRef, useEffect } from 'react'
import { useDataContext } from '@/app/utils/useDataContext'
import { motion } from "framer-motion";
// components
import WorkNav from "@/app/components/WorkNav"
import ArticleMobile from '../components/ArticleMobile'
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './workPage.module.css'

export default function WorkPage() {

  const { selectedWorks } = useDataContext()

  // column resize interaction
  const [navContainerWidth, setNavContainerWidth] = useState<number>(0);

  // set initial width of ArticleDescription 
  useEffect(() => {
    const updateInitialWidth = () => {
      const baseWidth = window.innerWidth - (100 + parseFloat(getComputedStyle(document.documentElement).fontSize) * 2);
      setNavContainerWidth(baseWidth * 0.30);
    };
  
    updateInitialWidth();
    window.addEventListener("resize", updateInitialWidth);
  
    return () => window.removeEventListener("resize", updateInitialWidth);
  }, []);

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

  const handleHeight = (value: (number | string)[] | undefined) => {
    setArticleHeights(value ?? []);
  };

  useEffect(() => {
    setShowDescription(navContainerWidth >= 150);
  }, [navContainerWidth]);

  return (
    <>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.55, delay: 0.2 }}
      >
      <WorkNav />
        <main className={styles.main}>
          {/* mobile version */}
          <div className={styles.mobileWrapper}>
            {selectedWorks.length === 0 ? (
              <>
                <div className={styles.navContainer}>
                  <MainNav />
                </div>
                <div className={styles.mobileDisabledContainer}>There are no works to show for the selected filter.</div>
              </>
            ) : (
              <>
                <div className={styles.navContainer}>
                  <MainNav />
                </div>
                <ArticleMobile works={selectedWorks} />
              </>
            )}

          </div>
          {/* desktop version */}
          <div className={styles.wrapper}>
            {selectedWorks.length === 0 ? (
              <>
                <div 
                  className={`${styles.imgsContainer} ${styles.disabled}`} 
                  ref={imgsContainerRef}
                >
                  There are no works to show for the selected filter.
                </div>
                <div className={styles.navContainer}>
                  <MainNav handleMouseDown={handleMouseDown} />
                </div>
                <div
                  className={`${styles.descriptionsContainer} ${styles.disabled}`}
                  ref={targetRef}
                  style={{ 
                      width: `0px`, 
                      display: showDescription ? 'block' : 'none',
                      maxWidth: 'calc((100vw - (100px + 2rem)) * 0.30)',
                    }}
                >
                </div>
              </>
            ) : (
              <>
                <div 
                  className={styles.imgsContainer} 
                  ref={imgsContainerRef}
                >
                  <ArticleImgs 
                    works={selectedWorks} 
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
                      maxWidth: 'calc((100vw - (100px + 2rem)) * 0.30)',
                    }}
                >
                  <ArticleDescriptions 
                    getHeightValue={handleHeight}
                    works={selectedWorks}
                  />
                </div>
              </>
            )}
          </div>
        </main>
      </motion.div>
    </>
  );
}