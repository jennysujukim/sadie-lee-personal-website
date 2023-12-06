import { projects } from '@/_data/projects'
//styles
import styles from './ArticleDescription.module.css'

type ArticleDescriptionProps = {
  projectId: string;
}

export default function ArticleDescription({ projectId }: ArticleDescriptionProps) {

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
                <>
                  <p key={index}>{keyword}</p>
                  <p className={styles.comma}>
                    { index !== project.keywords.length - 1 && `,`}
                  </p>
                </>
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