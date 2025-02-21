import { WorkType } from "@/types/models/Work"
import Link from "next/link"
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
            <div className={styles.titleWrapper}>
              <div>
                <h2>{work.title}</h2>
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
              </div>
              {work.details &&
                <Link
                className={styles.detailsLink} 
                href={`/work/${work.slug.current}`}
                >
                  See Full Project &gt;
                </Link>
              }
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
