// components
import MainNav from '@/app/components/MainNav'
import AllArticleDescriptions from '../components/AllArticleDescriptions'
import AllArticleImgslides from '../components/AllArticleImgslides'
// styles
import styles from './worksPage.module.css'


export default function WorksPage() {
  return (
    <main className={styles.main}>
      <div className={styles.imgsContainer}>
        <AllArticleImgslides />
      </div>
      <MainNav />
      <div className={styles.descriptionsContainer}>
        <AllArticleDescriptions />
      </div>
    </main>
  )
}
