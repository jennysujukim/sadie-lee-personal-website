'use client'

import Image from 'next/image'
import { projects } from '@/_data/projects'
import { useRef, useState, useEffect } from 'react'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import colourDotImg from '@/app/assets/slide-dot-coloured.svg'
// components
import Imgslide from '@/app/components/Imgslide'
// styles
import styles from './ArticleImgslide.module.css'

type ArticleImgslideProps = {
  projectId: string;
}

export default function ArticleImgslide({ projectId }: ArticleImgslideProps) {

  const project = projects.find(project => project.id === projectId);
  const imageLength = project?.images.filter(index => index).length ?? 0;
  const images = project?.images ?? [];
  const [ currSlide, setCurrSlide ] = useState(0);
  const [ activeDot, setActiveDot ] = useState(0);
  const slideFrame = useRef<HTMLDivElement>(null);
  const carousel = slideFrame.current;

  useEffect(() => {
    if(carousel) {
      carousel.style.transform = `translateX(-${currSlide * 300}px)`;
    }
  }, [currSlide, carousel])

  const prevSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide - 1 + imageLength) % imageLength);
    setActiveDot((prevDot) => (prevDot - 1 + imageLength) % imageLength);
  };

  const nextSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide + 1) % imageLength);
    setActiveDot((prevDot) => (prevDot + 1) % imageLength);
  };

  const dots = [];
  for (let i = 0; i < imageLength; i++) {
    dots.push(i)
  }

  return (
    <>
      {project && (
        <div 
          id={project.title} 
          className={styles.wrapper}
        >
          <div className={styles.container}>

            <div className={styles.buttonsContainer}>
              <button className={styles.arrowLeft} onClick={() => prevSlide()}>
                <Image 
                  src={arrowLeft} 
                  alt="" 
                  className={ project.images.filter(index => index).length - 1 === 0 ? `${styles.arrowLeft} ${styles.hide}` : styles.arrowLeft }
                />
              </button>

              <div className={styles.dotsContainer}>
                {dots.map((index) => (
                  <>
                    {index === activeDot ? (
                      <Image key={index} src={colourDotImg} alt="" className={styles.dots} />
                    ) : (
                      <Image key={index} src={dotImg} alt="" className={styles.dots} />
                    )
                    }
                  </>
                ))}
              </div>

              <button className={styles.arrowRight} onClick={() => nextSlide()}>
                <Image src={arrowRight} alt="" />
              </button>
            </div>

            <div className={styles.imgsContainer}>
              <div className={`flex justify-start w-[calc(300px * ${imageLength})`} ref={slideFrame}>
                {images.map((image, index) => (
                  <div key={index} className={styles.imgBg}>
                    <Image src={image} alt="" className={styles.img} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
