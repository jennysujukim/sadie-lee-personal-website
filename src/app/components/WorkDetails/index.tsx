"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/app/utils/useDataContext";
import { WorkType } from "@/types/models/Work";
// styles
import styles from "./WorkDetails.module.css";

type WorkDetailsProps = {
  slug: string;
}

export default function WorkDetails({ slug }: WorkDetailsProps) {

  const router = useRouter();

  const { works } = useDataContext();
  const [ work, setWork ] = useState<WorkType | undefined>();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const currentWork = works.find((work) => work.slug.current === slug)
    setWork(currentWork)
  }, [works, slug])

  if (!work) return null

  const research = work.details.research

  const researchImgChunks = research.images.reduce<string[][]>((acc: string[][], img: string, index: number) => {
    const chunkIndex = Math.floor(index / 4)
    if (!acc[chunkIndex]) acc[chunkIndex] = []
    acc[chunkIndex].push(img)
    return acc;
  }, [])

  const nextSlide = () => {
    if (currentSlide < researchImgChunks.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <>
      {work &&
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <button type="button" onClick={() => router.back()}>Back</button>
            <section>
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
            <section>
              <h3>Research</h3>
              <div className={styles.carouselWrapper}>
                <div 
                  className={styles.carousel}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {researchImgChunks.map((chunk, index) => (
                    <div key={index} className={styles.slide}>
                      {chunk.map((image, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={image}
                          alt={`image of research ${work.title}`}
                          width={500}
                          height={500}
                          placeholder="blur"
                          blurDataURL={image}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                {researchImgChunks.length > 1 && (
                  <div className={styles.controls}>
                    <button onClick={prevSlide} disabled={currentSlide === 0}>
                      ◀
                    </button>
                    <button onClick={nextSlide} disabled={currentSlide === researchImgChunks.length - 1}>
                      ▶
                    </button>
                  </div>
                )}
              </div>
              <div>
                {work.details.research.description.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
            </section>
          </div>
        </main>
      }
    </>

  )
}
