'use client'

import Image from 'next/image'
import { useState } from 'react'
import { WorkType } from '@/types/models/Work'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
// styles
import styles from './ImgCarousel.module.css'

type ImgCarouselProps = {
  works: WorkType[];
  projectId: number;
}

export default function ImgCarousel({ works, projectId }: ImgCarouselProps) {

  const project = works?.find(work => work.id === projectId);
  const projectImages = project && project.images
  const imageLength = project && project.images ? project.images.filter(index => index).length : 0;

  const [ currIndex, setCurrIndex ] = useState<number>(0);

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

  const handleRightSideClick = () => nextSlide()

  const handleLeftSideClick = () => prevSlide()

  return (
    <>
      {project && (
        <div className={styles.wrapper}>
          <div className={styles.carousel}>
            <button 
              className={styles.arrowBtnLeftContainer}
              onClick={handleLeftSideClick}
              tabIndex={-1}
            >
              <Image 
                className={styles.arrowBtnLeft}
                src={arrowLeft} 
                width={40}
                height={40}
                alt="left arrow"
              />
            </button>
            <button 
              className={styles.arrowBtnRightContainer}
              onClick={handleRightSideClick}
              tabIndex={-1}
            >
              <Image 
                className={styles.arrowBtnRight}
                src={arrowRight} 
                width={40}
                height={40}
                alt="right arrow"
              />
            </button>
            {projectImages &&
              <Image 
                className={styles.img} 
                src={project.images[currIndex]}
                alt={`Images of ${project.title}`}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={project.images[currIndex]}
              />
            }
          </div>
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
        </div>
      )}
    </>
  )
}