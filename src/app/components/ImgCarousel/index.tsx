'use client'

import Image from 'next/image'
import { projects } from '@/_data/projects'
import { useRef, useState, useEffect } from 'react'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
import mobileModalBtn from '@/app/assets/modal-btn-mobile.svg'
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

  const [ startX, setStartX ] = useState<number | null>(null);
  
  // mobile version touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if(startX === null) return ;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    if(Math.abs(deltaX) > 50) {
      if(deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
      setStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setStartX(null)
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
                (
                  <Image 
                    key={index} 
                    src={selectedDotImg} 
                    alt="Selected dot icon" 
                    className={styles.dots} 
                  />
                ) 
                : 
                (
                  <Image 
                    key={index} 
                    src={dotImg} 
                    alt="Dot icon" 
                    className={styles.dots} 
                  />
                )
              ))}
            </div>
            <button 
              className={styles.arrowBtn} 
              onClick={() => nextSlide()}
            >
              <Image 
                src={arrowRight} 
                alt="right arrow"
              />
            </button>
            <button className={styles.mobileModalBtn}>
              <Image 
                src={mobileModalBtn}
                alt="Mobile modal button"
              />
            </button>
          </div>
          <div className={styles.carouselContainer}>
            <div 
              className={styles.carousel} 
              ref={carousel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={nextSlide}
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
