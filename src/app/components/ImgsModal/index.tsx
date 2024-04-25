"use client"

import Image from 'next/image'
import React from 'react'
// styles
import styles from './ImgsModal.module.css'

type ImgsModal = {
  src: string;
  title: string;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ImgsModal({ src, title, handleClose }: ImgsModal) {

  return (
    <div 
      className={styles.container}
      onClick={() => handleClose(false)}
    >
      <Image 
        src={src}
        alt={title}
        className={styles.image}
        width={2000}
        height={2000}
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  )
}
