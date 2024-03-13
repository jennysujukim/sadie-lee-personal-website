'use client'

import Image from 'next/image'
import { projects } from '@/_data/projects'
import { useRef, useState, useEffect } from 'react'
import useResponsive from '@/app/utils/useResponsive'
import Dimensions from '@/types/constants/Dimensions'
import { BreakpointType } from '@/types/enums/BreakpointType'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
import mobileModalBtn from '@/app/assets/modal-btn-mobile.svg'
// components
import ImgsModal from '../ImgsModal'
// styles
import styles from './ImgCarousel.module.css'

type ImgCarouselProps = {
  projectId: string;
  imgContainerWidth?: number;
}

export default function ImgCarousel({ projectId, imgContainerWidth }: ImgCarouselProps) {

  const isResponsive = useResponsive();

  const project = projects.find(project => project.id === projectId);
  const images = project?.images ?? [];
  const imageLength = project?.images.filter(index => index).length ?? 0;

  const [ currIndex, setCurrIndex ] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  const selectedCarousel = carousel.current;
  const imgContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(selectedCarousel && imgContainer.current) {
      if (isResponsive === BreakpointType.Mobile) {
        selectedCarousel.style.transform = `translateX(-${currIndex * imgContainer.current.offsetWidth}px)`
      } else if (isResponsive === BreakpointType.Tablet) {
        selectedCarousel.style.transform = `translateX(-${currIndex * imgContainer.current.offsetWidth}px)`
      } else {
        selectedCarousel.style.transform = `translateX(-${currIndex * Dimensions.carouselImgWidth_Desktop}px)`
      }
    }
  }, [currIndex, selectedCarousel, imgContainer, isResponsive])


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

  const handleCarouselClick = () => {
    if(isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet) {
      nextSlide()
    } else return;
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
  
  // mobile version mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if(isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet){
      setStartX(e.clientX);
    } else return;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if(isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet){
      if(startX === null) return ;

      const currentX = e.clientX;
      const deltaX = currentX - startX;

      if(Math.abs(deltaX) > 50) {
        if(deltaX > 0) {
          prevSlide()
        } else {
          nextSlide()
        }
        setStartX(null)
      }
    } else return;
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if(isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet){
      setStartX(null)
    }
  }  

  const handleModalBtnClick = () => {
    console.log('clicked')
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
              <Image 
                src={arrowLeft} 
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
              className={styles.arrowBtn} 
              onClick={() => nextSlide()}
            >
              <Image 
                src={arrowRight} 
                alt="right arrow"
              />
            </button>
            <button 
              className={styles.mobileModalBtn}
              onClick={handleModalBtnClick}
            >
              <Image 
                src={mobileModalBtn}
                alt="Mobile modal button"
                className={styles.mobileModalBtnImg}
              />
            </button>
          </div>
          <div className={styles.carouselContainer} style={{ width: imgContainerWidth }}>
            <div 
              className={styles.carousel} 
              ref={carousel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseUp={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onClick={handleCarouselClick}
            >
              <Image 
                src={images[currIndex]} 
                alt={`Images of ${project.title}`}
                className={styles.img} 
                style={{ width: imgContainerWidth }}
              />
              {/* {images.map((image, index) => (
                <div 
                  key={index} 
                  className={styles.imgContainer}
                  ref={imgContainer}
                  style={{ width: imgContainerWidth }}
                >
                  <Image 
                    src={image} 
                    alt={`Images of ${project.title}`}
                    className={styles.img} 
                    style={{ width: imgContainerWidth }}
                  />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}