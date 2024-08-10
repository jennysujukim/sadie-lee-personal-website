"use client"
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { WorkType } from '@/types/models/Work';
// styles
import styles from './ArticleDescriptions.module.css'

type ArticleDescriptionsProps = {
  width: number | undefined;
  works: WorkType[];
  getHeightValue: (value: (number | string)[] | undefined) => void;
}

export default function ArticleDescriptions({ width, works, getHeightValue }: ArticleDescriptionsProps) {

  const [hide, setHide] = useState<boolean>(false);
  const targets = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const heights = targets.current.map((target) => (
      target && target.clientHeight !== 0 ? target.clientHeight : "auto"
    ))
    getHeightValue(heights)

  }, [width, works, getHeightValue])

  useEffect(() => {

    if(width && width < 150){
      setHide(true)
    } else {
      setHide(false)
    }

  }, [width])
  
  return (
    <>
      {works.map((work, index) => (
        <div 
          key={index} 
          style={{ 
            width: width, 
            maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.30)',
            display: hide ? "none": "block",
          }}
          id={work.slug.current}
        >
          <article 
            className={styles.container} 
            ref={(el) => (targets.current[index] = el)}
          >
            <h2 className={styles.title}>{work.title}</h2>
            <div className={styles.subContainer}>
                {work.keywords.map((keyword, index) => (
                  <React.Fragment key={index}>
                    <p className={styles.keywords}>{keyword}</p>
                    {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                  </React.Fragment>
                ))}
              <span className={styles.divider}>|</span>
              <p>{work.type}</p>
              <span className={styles.divider}>|</span>
              <p className={styles.year}>{work.year}</p>
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
          </article>
        </div>
      ))}
    </>
  )
}
