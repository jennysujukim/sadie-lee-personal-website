'use client'

import Image from 'next/image'
import { useState } from 'react'
import useResponsive from '@/app/utils/useResponsive'
import { BreakpointType } from '@/types/enums/BreakpointType'
import { Project } from '@/types/models/Project'
// assets
import arrowRight from '@/app/assets/slide-arrow-right.svg'
import arrowLeft from '@/app/assets/slide-arrow-left.svg'
import dotImg from '@/app/assets/slide-dot.svg'
import selectedDotImg from '@/app/assets/slide-dot-coloured.svg'
import mobileModalBtn from '@/app/assets/modal-btn-mobile.svg'
// components
import ImgsModal from '../ImgsModal'
import VideoContainer from '../VideoContainer'
// styles
import styles from './ImgCarousel.module.css'

// type ImageDataProps = {
//   data: {
//     attributes: {
//       ext: string;
//       url: string;
//       width: number;
//       height: number;
//     }
//   }[]
// }

// type ImgCarouselProps = {
//   works: {
//     id: string;
//     attributes: {
//       title: string;
//       type: string;
//       year: string;
//       keywords: string;
//       description: string;
//       slug: string;
//       images: ImageDataProps;
//     }
//   }[];
//   projectId: string;
// }

type ImgCarouselProps = {
  works: Project[];
  projectId: number;
}

export default function ImgCarousel({ works, projectId }: ImgCarouselProps) {

  const isResponsive = useResponsive();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const project = works?.find(work => work.id === projectId);
  // const imageLength = project?.attributes.images.data.filter(index => index).length ?? 0;
  const imageLength = project?.images.filter(index => index).length ?? 0;

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

  const handleCarouselClick = () => {
    if(isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet) {
      nextSlide()
    } else {
      setIsOpen(true)
    };
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


  // handle Modal feature event
  const handleCloseModal = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      {project && (
        <>
          {isOpen &&
            <ImgsModal 
              src={project.images[currIndex]}
              title={project.title}
              handleClose={setIsOpen}
            />
          }
          <div 
            id={project.slug} 
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
                onClick={handleCloseModal}
              >
                <Image 
                  src={mobileModalBtn}
                  alt="Mobile modal button"
                  className={styles.mobileModalBtnImg}
                />
              </button>
            </div>
            <div 
              className={styles.carousel} 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseUp={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onClick={handleCarouselClick}
            >
              <Image 
                src={project.images[currIndex]}
                alt={`Images of ${project.title}`}
                className={styles.img} 
                width={100}
                height={100}
              />
            </div>
          </div>
        </>
      )}
      {/* {project && (
        <div 
          id={project.attributes.title} 
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
          <div 
            className={styles.carousel} 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={handleCarouselClick}
          >
            eslint-disable-next-line @next/next/no-img-element
            <img 
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.images.data[currIndex].attributes.url}`}
              alt={`Images of ${project.attributes.title}`}
              className={styles.img} 
            />
          </div>
        </div>
      )} */}
    </>
  )
}