import React from 'react'
import { projects } from '@/_data/projects'
//styles
import styles from './ProjectDetails.module.css'

type ProjectDetailsProps = {
  projectId: string;
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {

  const project = projects.find(project => project.id === projectId)

  return (
    <>
      {project && 
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
            <p className={styles.year}>{project.year}</p>
          </div>
          <div>
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
      }
    </>
  )
}