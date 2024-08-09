import React from 'react';
import { WorkType } from '@/types/models/Work';
// styles
import styles from './ArticleDescriptions.module.css'

type ArticleDescriptionsProps = {
  width: number | undefined;
  works: WorkType[];
}

export default function ArticleDescriptions({ width, works }: ArticleDescriptionsProps) {
  
  return (
    <>
      {works.map((work, index) => (
        <div 
          key={index} 
          style={{ width: width, minWidth: 300, maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.5)' }}
          id={work.slug.current}
        >
          <article className={styles.container}>
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
