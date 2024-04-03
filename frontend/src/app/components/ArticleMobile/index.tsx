// components
import ImgCarousel from "../ImgCarousel"
// styles
import styles from './ArticleMobile.module.css'

type ImageDataProps = {
  data: {
    attributes: {
      ext: string;
      url: string;
      width: number;
      height: number;
    }
  }[]
}

type ArticleMobileProps = {
  works: {
    id: string;
    attributes: {
      title: string;
      type: string;
      year: string;
      keywords: string;
      description: string;
      slug: string;
      images: ImageDataProps;
    }
  }[];
}

export default function ArticleMobile({ works }: ArticleMobileProps) {
  return (
    <>
      {works && works.map((work, index) => (
        <div key={index}>
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
          <div>
            <article 
              id={work.attributes.title}
              className={styles.container}
            >
              <h2 className={styles.title}>{work.attributes.title}</h2>
              <div className={styles.subContainer}>
                <p className={styles.keywords}>
                  {work.attributes.keywords}
                </p>
                <span className={styles.divider}>|</span>
                <p>{work.attributes.type}</p>
                <span className={styles.divider}>|</span>
                <p className={styles.year}>{work.attributes.year}</p>
              </div>
              <p className={styles.descriptionContainer}>
                {work.attributes.description}
              </p>
            </article>
          </div>
        </div>
      ))}
    </>
  )
}
