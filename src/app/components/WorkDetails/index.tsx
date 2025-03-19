"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/app/utils/useDataContext";
import { WorkType } from "@/types/models/Work";
import { motion } from "framer-motion";
// assets
import prevBtn from "@/app/assets/work-carousel-arrow-left.svg";
import nextBtn from "@/app/assets/work-carousel-arrow-right.svg";
import moveToTop from "@/app/assets/move-to-top.svg";
// styles
import styles from "./WorkDetails.module.css";

type WorkDetailsProps = {
  slug: string;
}

export default function WorkDetails({ slug }: WorkDetailsProps) {

  const router = useRouter();

  const { works } = useDataContext();
  const [ work, setWork ] = useState<WorkType | undefined>();
  const [currentSlides, setCurrentSlides] = useState<number[]>([]);

  // ** Get correct work data ** //
  useEffect(() => {
    const currentWork = works.find((work) => work.slug.current === slug)
    setWork(currentWork)

    if (currentWork) {
      setCurrentSlides(Array(currentWork.detailsImages.length).fill(0));
    } // Initialize slide indexes for each imagesSet

  }, [works, slug])

  if (!work) return null

  // ** Handle next slide ** //
  const nextSlide = (setIndex: number) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === setIndex
          ? (slide + 1) % work.detailsImages[setIndex].images.length
          : slide
      )
    )
  }

  // ** Handle previous slide ** //
  const prevSlide = (setIndex: number) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === setIndex
          ? (slide - 1 + work.detailsImages[setIndex].images.length) %
            work.detailsImages[setIndex].images.length
          : slide
      )
    )
  }
  
  // ** Scroll To Top ** //
  const onClickScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {work &&
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.55, delay: 0.2 }}
        >
          <main className={styles.main}>
            <Image 
              alt="move to top button"
              src={moveToTop}
              width={60}
              height={60}
              className={styles.moveToTop}
              onClick={onClickScroll}
            />
            <div className={styles.wrapper}>
              <button 
                type="button" 
                onClick={() => router.back()}
                className={styles.backButton}
              >
                &lt; Back
              </button>
              <section className={styles.titleSection}>
                <h2>{work.title}</h2>
                <div className={styles.subContainer}>
                  <div className={styles.subTextContainer}>
                    <p className={styles.subTextTitle}>Date</p>
                    <p>{work.year}</p>
                  </div>
                  <div className={styles.subTextContainer}>
                    <p className={styles.subTextTitle}>Category</p>
                    <p>{work.keywords}</p>
                  </div>
                  {work.materials &&
                    <div className={styles.subTextContainer}>
                      <p className={styles.subTextTitle}>Medium</p>
                      <p>{work.materials}</p>
                    </div>
                  }
                  {work.collaborators && 
                    <div className={styles.subTextContainer}>
                      <p className={styles.subTextTitle}>Collaboration with</p>
                      <p>{work.collaborators}</p>
                    </div>
                  }
                </div>
              </section>
              <section className={styles.imagesSection}>
              {work.detailsImages.map((imagesSet, setIndex) => (
                <div 
                  key={setIndex}
                  className={styles.carouselWrapper}
                >
                  {imagesSet.images.length > 1 && (
                    <div className={styles.controls}>
                      <button 
                        className={styles.prevButton}
                        onClick={() => prevSlide(setIndex)}
                      >
                        <Image
                          className={styles.arrowLeft} 
                          src={prevBtn} 
                          alt="Previous" 
                          width={40} 
                          height={40}
                        />
                      </button>
                      <button 
                        className={styles.nextButton}
                        onClick={() => nextSlide(setIndex)}
                      >
                        <Image 
                          className={styles.arrowRight} 
                          src={nextBtn} 
                          alt="Next" 
                          width={40} 
                          height={40}
                        />
                      </button>
                    </div>
                  )}
                  <div 
                    className={styles.carousel}
                    style={{ transform: `translateX(-${currentSlides[setIndex] * 100}%)` }}
                  >
                    {imagesSet.images.map((image, index) => (
                      <div 
                        key={index}
                        className={styles.slide}
                      >
                        <Image 
                          className={styles.slideImg}
                          src={image}
                          alt="project details image"
                          width={500}
                          height={500}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              </section>
            </div>
          </main>
        </motion.div>
      }
    </>
  )
}
