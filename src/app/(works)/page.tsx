// components
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './worksPage.module.css'


export default function WorksPage() {
  return (
    <main className={styles.main}>
      <div className={styles.imgsContainer}>
        <ArticleImgs />
      </div>
      <MainNav />
      <div className={styles.descriptionsContainer}>
        <ArticleDescriptions />
      </div>
    </main>
  )
}
