"use client"

import { useEffect, useRef, useCallback } from 'react';
import { WorkType } from '@/types/models/Work';
// styles
import styles from './ArticleDescriptions.module.css'

type ArticleDescriptionsProps = {
  works: WorkType[];
  getHeightValue: (value: (number | string)[] | undefined) => void;
}

export default function ArticleDescriptions({ works, getHeightValue }: ArticleDescriptionsProps) {

  const targets = useRef<(HTMLElement | null)[]>([]);
  const prevHeights = useRef<(number | string)[]>([]);

  const updateHeights = useCallback(() => {
    const newHeights = targets.current.map((target) => (
      target && target.clientHeight !== 0 ? target.clientHeight : "auto"
    ))

    if (!arraysAreEqual(newHeights, prevHeights.current)) {
      getHeightValue(newHeights)
      prevHeights.current = newHeights
    }
  }, [getHeightValue]);

  const arraysAreEqual = (arr1: (number | string)[], arr2: (number | string)[]): boolean => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  useEffect(() => {
    updateHeights();
  }, [works.length, updateHeights])
  
  return (
    <>
      {works.map((work, index) => (
        <div 
          key={index} 
          style={{ maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.40)' }}
          id={work.slug.current}
        >
          <div 
            className={styles.container} 
            ref={(el) => (targets.current[index] = el)}
          >
            <div className={styles.subContainer}>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Date</p>
                <p className={styles.subTextDetails}>{work.year}</p>
              </div>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Category</p>
                <p className={styles.subTextDetails}>{work.keywords}</p>
              </div>
              {work.materials &&
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Medium</p>
                  <p className={styles.subTextDetails}>{work.materials}</p>
                </div>
              }
              {work.collaborators && 
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Collaboration with</p>
                  <p className={styles.subTextDetails}>{work.collaborators}</p>
                </div>
              }
            </div>
            <div className={styles.descriptionContainer}>
              {work.descriptions.map((sentence, index) => (
                <p 
                  key={index}
                  className={styles.description}
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
