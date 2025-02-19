"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/app/utils/useDataContext";
import { WorkType } from "@/types/models/Work";
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
  const [ currentSlide, setCurrentSlide ] = useState({
    research: 0,
    productionProcess: 0,
    outcomeDetail: 0
  })

  useEffect(() => {
    const currentWork = works.find((work) => work.slug.current === slug)
    setWork(currentWork)
  }, [works, slug])

  if (!work) return null

  const { research, productionProcess, outcomeDetail } = work.details;

  const chunkImages = (images: string[]) => images.reduce<string[][]>((acc: string[][], img: string, index: number) => {
    const chunkIndex = Math.floor(index / 4)
    if (!acc[chunkIndex]) acc[chunkIndex] = []
    acc[chunkIndex].push(img)
    return acc;
  }, [])

  const researchImgChunks = chunkImages(research.images);
  const productionProcessImgChunks = chunkImages(productionProcess.images);
  const outcomeDetailImgChunks = chunkImages(outcomeDetail.images);

  const changeSlide = (section: "research" | "productionProcess" | "outcomeDetail", direction: "next" | "prev") => {
    setCurrentSlide((prev) => {
      const newSlide =
        direction === "next"
          ? Math.min(prev[section] + 1, eval(`${section}ImgChunks`).length - 1)
          : Math.max(prev[section] - 1, 0);

      return { ...prev, [section]: newSlide };
    });
  };

  const onClickScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {work &&
        <main className={styles.main}>
          <Image 
            alt="move to top button"
            src={moveToTop}
            width={30}
            height={30}
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
            <section className={`${styles.section} ${styles.titleSection}`}>
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
            {["research", "productionProcess", "outcomeDetail"].map((section) => {
              const sectionTitle = 
                section === "research" ? "Research" :
                section === "productionProcess" ? "Production Process" :
                section === "outcomeDetail" ? "Outcome Detail" : 
                ""

              const sectionDetails = work.details[section as keyof typeof work.details];
              const imgChunks = eval(`${section}ImgChunks`);
              const slideIndex = currentSlide[section as keyof typeof currentSlide];

              return (
                <section 
                  key={section}
                  className={`${styles.section} ${styles[`${section}Section`]}`}
                >
                  <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                  <div className={styles.carouselWrapper}>
                    <div 
                      className={styles.carousel}
                      style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                    >
                      {imgChunks.map((chunk: any, index: number) => (
                        <div key={index} className={styles.slide}>
                          {chunk.map((image: any, imgIndex: number) => (
                            <Image
                              className={styles.slideImg}
                              key={imgIndex}
                              src={image}
                              alt={`image of ${sectionTitle} ${work.title}`}
                              width={500}
                              height={500}
                              placeholder="blur"
                              blurDataURL={image}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    {imgChunks.length > 1 && (
                      <div className={styles.controls}>
                        <button 
                          onClick={() => changeSlide(section as any, "prev")} 
                          disabled={slideIndex === 0}
                        >
                          <Image 
                            className={styles.prevBtn} 
                            alt="previous button" 
                            src={prevBtn} 
                            width={40} 
                            height={40}
                          />
                        </button>
                        <button
                          onClick={() => changeSlide(section as any, "next")}
                          disabled={slideIndex === imgChunks.length - 1}
                        >
                          <Image 
                            className={styles.nextBtn} 
                            alt="next button" 
                            src={nextBtn} 
                            width={40} 
                            height={40}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={`${styles.descriptionContainer} ${styles[`${section}Desc`]}`}>
                    {sectionDetails.description.map((sentence, index) => (
                      <p key={index}>{sentence}</p>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </main>
      }
    </>
  )
}
