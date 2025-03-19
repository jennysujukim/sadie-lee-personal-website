'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import { WorkType } from '@/types/models/Work'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
import detailCta from '@/app/assets/modal-btn-mobile.svg'
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
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrIndex((prevSlide) => (prevSlide - 1 + imageLength) % imageLength)
  }

  const nextSlide = useCallback(() => {
    setCurrIndex((prevSlide) => (prevSlide + 1) % imageLength);
  }, [imageLength]);

  const dots = [];
  for (let i = 0; i < imageLength; i++) {
    dots.push(i)
  }

  const handleRightSideClick = () => nextSlide()

  const handleLeftSideClick = () => prevSlide()

  // ** AUTO SLIDE ** //
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [nextSlide]); 

  return (
    <>
      {project && (
        <div className={styles.wrapper}>
          {project.details &&
            <Link 
              href={`/work/${project.slug.current}`}
              className={styles.detailCta}
            >
              <Image 
                className={styles.cta}
                src={detailCta}
                width={50}
                height={50}
                alt='go to detail page button'
              />
            </Link>
          }
          <div className={styles.carousel}>
            <button 
              className={styles.clickLeftContainer}
              onClick={handleLeftSideClick}
              tabIndex={-1}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <button 
              className={styles.clickRightContainer}
              onClick={handleRightSideClick}
              tabIndex={-1}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {projectImages &&
              <Image 
                className={styles.img} 
                // src={project.images[currIndex]}
                src={currIndex === 0 && isHovered ? projectImages[imageLength - 1] : projectImages[currIndex]}
                alt={`Images of ${project.title}`}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={project.images[currIndex]}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            }
          </div>
          <div className={styles.indicatorsContainer}>
            <button
              onClick={handleLeftSideClick}
              tabIndex={-1}
            >
              <Image 
                src={arrowLeft} 
                width={40}
                height={40}
                alt="left arrow"
              />
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
          </div>
        </div>
      )}
    </>
  )
}