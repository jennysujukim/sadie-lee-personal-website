'use client'

import Image from 'next/image'
import { projects } from '@/_data/projects'
import { useRef, useState, useEffect } from 'react'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
// styles
import styles from './ImgCarousel.module.css'

type ImgCarouselProps = {
  projectId: string;
}

export default function ImgCarousel({ projectId }: ImgCarouselProps) {

  const project = projects.find(project => project.id === projectId);
  const images = project?.images ?? [];
  const imageLength = project?.images.filter(index => index).length ?? 0;

  const [ currIndex, setCurrIndex ] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  const selectedCarousel = carousel.current;

  useEffect(() => {
    if(selectedCarousel) {
      selectedCarousel.style.transform = `translateX(-${currIndex * 300}px)`
    }
  }, [currIndex, selectedCarousel])

  const prevSlide = () => {
    setCurrIndex((prevSlide) => (prevSlide - 1 + imageLength) % imageLength)
  }

  const nextSlide = () => {
    setCurrIndex((prevSlide) => (prevSlide + 1) % imageLength)
  }

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
          <div className={styles.btnsContainer}>
            <button 
              className={styles.arrowBtn} 
              onClick={() => prevSlide()}
            >
              <Image src={arrowLeft} alt="left arrow" />
            </button>
            <div className={styles.dotsContainer}>
              {dots.map((index) => ( index === currIndex ? 
                (<Image key={index} src={selectedDotImg} alt="" className={styles.dots} />) 
                : 
                (<Image key={index} src={dotImg} alt="" className={styles.dots} />)
              ))}
            </div>
            <button 
              className={styles.arrowBtn} 
              onClick={() => nextSlide()}
            >
              <Image src={arrowRight} alt="right arrow" />
            </button>
          </div>

          <div className={styles.carouselContainer}>
            <div 
              className={`${styles.carousel} only:w-[calc(300px * ${imageLength})`} 
              ref={carousel}
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={styles.imgContainer}
                >
                  <Image src={image} alt={`Images of ${project.title}`} className={styles.img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
