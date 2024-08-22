import React from "react"
import { WorkType } from "@/types/models/Work"
// components
import ImgCarousel from "../ImgCarousel"
// styles
import styles from './ArticleMobile.module.css'

type ArticleMobileProps = {
  works: WorkType[];
}


export default function ArticleMobile({ works }: ArticleMobileProps) {
  return (
    <>
      {works.map((work, index) => (
        <div 
          key={index} 
          id={`${work.slug.current}_mobile`}
        >
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
          <article className={styles.container}>
            <h2>{work.title}</h2>
            <div className={styles.subContainer}>
              {work.keywords.map((keyword, index) => (
                <React.Fragment key={index}>
                  <p className={styles.keywords}>{keyword}</p>
                  {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                </React.Fragment>
              ))}
              <span className={styles.divider}>|</span>
              {work.materials && work.materials.map((material, index) => (
                <React.Fragment key={index}>
                  <p className={styles.keywords}>{material}</p>
                  {index !== work.materials.length - 1 && <p className={styles.comma}>,</p>}
                </React.Fragment>
              ))}
              {work.materials && <span className={styles.divider}>|</span>}
              <p>{work.type}</p>
              <span className={styles.divider}>|</span>
              <p className={styles.year}>{work.year}</p>
            </div>
            <div className={styles.descriptionContainer}>
              {work.descriptions.map((description, index) => (
                <p 
                  key={index}
                  className={styles.description}
                >
                  {description}
                </p>
              ))}
            </div>
          </article>
        </div>
      ))}
    </>
  )
}
