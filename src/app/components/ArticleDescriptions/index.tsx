"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import { WorkType } from '@/types/models/Work';
// styles
import styles from './ArticleDescriptions.module.css'

type ArticleDescriptionsProps = {
  works: WorkType[];
  getHeightValue: (value: (number | string)[] | undefined) => void;
}

export default function ArticleDescriptions({ works, getHeightValue }: ArticleDescriptionsProps) {

  const targets = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {

    const heights = targets.current.map((target) => (
      target && target.clientHeight !== 0 ? target.clientHeight : "auto"
    ))

    getHeightValue(heights)

  }, [ works, getHeightValue])
  
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
