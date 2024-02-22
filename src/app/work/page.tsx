// components
import ArticleMobile from '../components/ArticleMobile'
import MainNav from '@/app/components/MainNav'
import ArticleDescriptions from '../components/ArticleDescriptions'
import ArticleImgs from '../components/ArticleImgs'
// styles
import styles from './workPage.module.css'

export default function WorkPage() {

  return (
    <main className={styles.main}>
      <div className={styles.mobileWrapper}>
        <div className={styles.navContainer}>
          <MainNav />
        </div>
        <div className={styles.mobileArticlesContainer}>
          <ArticleMobile />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imgsContainer}>
          <ArticleImgs />
        </div>
        <div className={styles.navContainer}>
          <MainNav />
        </div>
        <div className={styles.descriptionsContainer}>
          <ArticleDescriptions />
        </div>
      </div>
    </main>
  )
}
