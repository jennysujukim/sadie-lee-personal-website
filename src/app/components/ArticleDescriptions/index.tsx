import React from 'react';
// styles
import Image from 'next/image';
import styles from './ArticleDescriptions.module.css'

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

type ArticleDescriptionsProps = {
  width: number | undefined;
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

export default function ArticleDescriptions({ width, works }: ArticleDescriptionsProps) {
  
  return (
    <>
      {works && works.map((work) => (
        <div key={work.id} style={{ width: width, minWidth: 300, maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.5)' }}>
          {/* <ProjectDetails projectId={work.id} /> */}
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
      ))}
    </>
  )
}
