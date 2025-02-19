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
          <article 
            className={styles.container} 
            ref={(el) => (targets.current[index] = el)}
          >
            <h2 className={styles.title}>{work.title}</h2>
            <div className={styles.subContainer}>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Date</p>
                <p>{work.year}</p>
              </div>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Category</p>
                {work.keywords.map((keyword, index) => (
                  <React.Fragment key={index}>
                    <p>{keyword}</p>
                    {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                  </React.Fragment>
                ))}
              </div>
              {work.materials &&
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Medium</p>
                  {work.materials.map((material, index) => (
                    <React.Fragment key={index}>
                      <p>{material}</p>
                      {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                    </React.Fragment>
                  ))}
                </div>
              }
              {work.collaborators && 
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Collaboration with</p>
                  {work.collaborators.map((collaborator, index) => (
                    <React.Fragment key={index}>
                      <p>{collaborator}</p>
                      {index !== work.collaborators.length - 1 && <p className={styles.comma}>,</p>}
                    </React.Fragment>
                  ))}
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
          </article>
        </div>
      ))}
    </>
  )
}
