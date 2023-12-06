import Link from 'next/link'
import { projects } from '@/_data/projects'
import styles from './HeaderNav.module.css'

export default function HeaderNav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {projects.map((project, index) => (
            <li 
              key={project.id}
              className={styles.linkContainer}
            >
              <Link 
                href={`#${project.title}`}
                className={styles.link}
              >
                {project.title}
                <span className={styles.comma}>
                  { index !== projects.length - 1 && `,` }
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
