import Image from 'next/image'
import Link from 'next/link'
// assets
import profileImg from '@/app/assets/about/profile.jpg'
import starBackground from '@/app/assets/about/cta-background-star.svg'
// components
import MainNav from '@/app/components/MainNav'
// styles
import styles from './aboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={`${styles.navContainer} ${styles.mobile}`}>
        <MainNav />
      </div>
      <div className={styles.wrapper}>
        <section className={styles.profileContainer}>
          <div className={`${styles.emailCtaContainer} ${styles.mobile}`}>
            <div className={styles.emailCta}>
              <Image
                className={styles.emailCtaBackground} 
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.emailCtaLink}
                href="mailto:sadielee.art@gmail.com" 
                target='_blank'
              >
                E-mail
              </Link>
            </div>
            <Link 
              href="mailto:sadielee.art@gmail.com" 
              target='_blank' 
              className={styles.emailSpan}
            >
              sadielee.art<br/>@gmail.com
            </Link>
          </div>
          <div className={`${styles.igCtaContainer} ${styles.mobile}`}>
            <div className={styles.cta}>
              <Image 
                className={styles.igCtaBackground}
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.igCtaLink}
                href="https://www.instagram.com/sadie.designs_/" 
                target='_blank'
              >
                Instagram
              </Link>
            </div>
            <Link 
              href="mailto:sadielee.art@gmail.com" 
              target='_blank' 
              className={styles.igSpan}
            >
              @sadie.designs_
            </Link>
          </div>
          <div className={`${styles.linkedinCtaContainer} ${styles.mobile}`}>
            <div className={styles.linkedinCta}>
              <Image
                className={styles.linkedinCtaBackground} 
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.linkedinCtaLink}
                href="https://www.linkedin.com/in/sadie-lee-8785a220a/" 
                target='_blank'
              >
                Linked-In
              </Link>
            </div>
          </div>
          <Link
            className={`${styles.cvCtaContainer} ${styles.mobile}`} 
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:d0140fae-ad6f-39fe-8b82-410feaf17ecd"
            target='_blank'
          >
            <svg 
              className={styles.cvCtaBackground} 
              width="104" 
              height="101" 
              viewBox="0 0 104 101" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className={styles.cvCtaBackgroundPath}
                d="M50.7408 0.32766C51.5665 0.112798 52.4335 0.112798 53.2592 0.32766L76.7226 6.43332C77.5599 6.65119 78.3263 7.08256 78.9469 7.68528L96.0583 24.3031C96.6967 24.9231 97.1581 25.7023 97.3948 26.5602L103.633 49.1702C103.873 50.0405 103.873 50.9595 103.633 51.8298L97.3948 74.4398C97.1581 75.2977 96.6967 76.0769 96.0583 76.6969L78.9469 93.3147C78.3263 93.9174 77.5599 94.3488 76.7226 94.5667L53.2592 100.672C52.4335 100.887 51.5665 100.887 50.7408 100.672L27.2774 94.5667C26.4401 94.3488 25.6737 93.9174 25.0531 93.3147L7.94168 76.6969C7.30326 76.0769 6.84189 75.2977 6.60519 74.4398L0.366916 51.8298C0.126791 50.9595 0.126792 50.0405 0.366917 49.1702L6.60519 26.5602C6.84189 25.7023 7.30326 24.9231 7.94168 24.3031L25.0531 7.68528C25.6737 7.08256 26.4401 6.65119 27.2774 6.43332L50.7408 0.32766Z" 
              />
            </svg>
            <p className={styles.cvCtaText}>CV</p>
          </Link>
          <Image
            className={styles.profileImg} 
            src={profileImg}
            alt="Image of the author"
          />
        </section>
        <div className={`${styles.navContainer} ${styles.laptop}`}>
          <MainNav />
        </div>
        <section className={styles.textWrapper}>
          <div className={styles.emailCtaContainer}>
            <div className={styles.emailCta}>
              <Image
                className={styles.emailCtaBackground} 
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.emailCtaLink}
                href="mailto:sadielee.art@gmail.com" 
                target='_blank'
              >
                E-mail
              </Link>
            </div>
            <Link 
              href="mailto:sadielee.art@gmail.com" 
              target='_blank' 
              className={styles.emailSpan}
            >
              sadielee.art<br/>@gmail.com
            </Link>
          </div>
          <div className={styles.igCtaContainer}>
            <div className={styles.cta}>
              <Image 
                className={styles.igCtaBackground}
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.igCtaLink}
                href="https://www.instagram.com/sadie.artdesign/" 
                target='_blank'
              >
                Instagram
              </Link>
            </div>
            <Link 
              href="https://www.instagram.com/sadie.artdesign/" 
              target='_blank' 
              className={styles.igSpan}
            >
              @sadie.artdesign
            </Link>
          </div>
          <div className={styles.linkedinCtaContainer}>
            <div className={styles.linkedinCta}>
              <Image
                className={styles.linkedinCtaBackground} 
                src={starBackground}
                alt="star background image"
              />
              <Link 
                className={styles.linkedinCtaLink}
                href="https://www.linkedin.com/in/sadie-lee-8785a220a/" 
                target='_blank'
              >
                Linked-In
              </Link>
            </div>
          </div>
          <Link
            className={styles.cvCtaContainer} 
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:d0140fae-ad6f-39fe-8b82-410feaf17ecd"
            target='_blank'
          >
            <svg 
              className={styles.cvCtaBackground} 
              width="104" 
              height="101" 
              viewBox="0 0 104 101" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className={styles.cvCtaBackgroundPath}
                d="M50.7408 0.32766C51.5665 0.112798 52.4335 0.112798 53.2592 0.32766L76.7226 6.43332C77.5599 6.65119 78.3263 7.08256 78.9469 7.68528L96.0583 24.3031C96.6967 24.9231 97.1581 25.7023 97.3948 26.5602L103.633 49.1702C103.873 50.0405 103.873 50.9595 103.633 51.8298L97.3948 74.4398C97.1581 75.2977 96.6967 76.0769 96.0583 76.6969L78.9469 93.3147C78.3263 93.9174 77.5599 94.3488 76.7226 94.5667L53.2592 100.672C52.4335 100.887 51.5665 100.887 50.7408 100.672L27.2774 94.5667C26.4401 94.3488 25.6737 93.9174 25.0531 93.3147L7.94168 76.6969C7.30326 76.0769 6.84189 75.2977 6.60519 74.4398L0.366916 51.8298C0.126791 50.9595 0.126792 50.0405 0.366917 49.1702L6.60519 26.5602C6.84189 25.7023 7.30326 24.9231 7.94168 24.3031L25.0531 7.68528C25.6737 7.08256 26.4401 6.65119 27.2774 6.43332L50.7408 0.32766Z" 
              />
            </svg>
            <p className={styles.cvCtaText}>CV</p>
          </Link>
          <div className={styles.textContainer}>
            <p>
              I am a versatile graphic designer with a rich, interdisciplinary background in art and design. My journey began with a Bachelor&apos;s degree in Art Education, where I developed a strong foundation in both art theory and practice, honing my artistic sensibilities. Driven by a desire to deepen my expertise, I pursued advanced studies in Interaction Design in the U.S. and later earned a Master&apos;s degree in the UK, focusing on independent and experimental design practices.
            </p>
            <p>
              Throughout my academic and professional journey, I&apos;ve seamlessly integrated theoretical knowledge with hands-on experience. During my gap years, I served as an art teacher and design advisor, further nurturing my artistic intuition and technical skills. This unique blend of creativity, technical proficiency, and innovative thinking empowers me to consistently deliver impactful designs that address diverse creative challenges.
            </p>
            <div>
              <h4 className={styles.subHeading}>Experience</h4>
              <div>
                <p className={styles.listText}>
                  2023 : Ark Publishing House| Atlanta, Georgia, Internal Graphic Designer and Illustrator 
                </p>
                <p className={styles.listText}>
                  2022 : E&D Marketing Firm| Atlanta, Georgia, Graphic Designer
                </p>
              </div>
            </div>
            <div>
              <h4 className={styles.subHeading}>Education</h4>
              <div>
                <p className={styles.listText}>
                  MA, Graphic Media Design, London College of Communication(UAL) - 2023/2024
                </p>
                <p className={styles.listText}>
                  BA, Art Education, Korea National University of Education 
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}
