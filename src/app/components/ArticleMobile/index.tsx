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
        <div key={index}>
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
          <div>
            <article 
              id={work.title}
              className={styles.container}
            >
              <h2 className={styles.title}>{work.title}</h2>
              <div className={styles.subContainer}>
                <p 

                  className={styles.keywords}
                >
                  {work.keywords}
                </p>
                <span className={styles.divider}>|</span>
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
        </div>
      ))}
    </>
  )
}
