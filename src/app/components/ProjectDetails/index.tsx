import React from 'react'
import { projects } from '@/_data/projects'
//styles
import styles from './ProjectDetails.module.css'

type ProjectDetailsProps = {
  projectId: any;
}

export default async function ProjectDetails({ projectId }: ProjectDetailsProps) {


  return (
    <>
      {/* {project && 
        <article 
          id={project.title}
          className={styles.container}
        >
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.subContainer}>
            <div className={styles.keywords}>
              {project.keywords?.map((keyword, index) => (
                <React.Fragment key={index}>
                  <p>{keyword}</p>
                  <p className={styles.comma}>
                    { index !== project.keywords.length - 1 && `,`}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <span className={styles.divider}>|</span>
            <p>{project.type}</p>
            <span className={styles.divider}>|</span>
            <p className={styles.year}>{project.year}</p>
          </div>
          <div className={styles.descriptionContainer}>
            {project.description?.map((paragraph, index) => (
              <p 
                key={index}
                className={styles.description}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      } */}
      <p>{projectId}</p>
    </>
  )
}