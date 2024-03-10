'use client'

import { useState } from 'react'
import Image from 'next/image'
// assets
import grip from '@/app/assets/grip.svg'
import lineBackground from '@/app/assets/home/home-line-background.svg'
// components
import DragMove from '../components/DragMove'
import Logo from '../components/Logo'
// styles
import styles from './homePage.module.css'

export default function HomePage() {

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {};
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {};
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {};

  return (
    <main className={styles.main}>
      <Image 
        className={styles.lineBackground}
        src={lineBackground}
        alt=""
      />
      <DragMove 
        onDragMove={handleDragMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <Image 
          draggable="false"
          src={grip}
          alt="Grip graphic"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px)`,
          }}
        />
      </DragMove>
      <DragMove        onDragMove={handleDragMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}>
        <Logo 
          isLink={false} 
          style={{ transform: `translate(${translate.x}px, ${translate.y}px)`, }} 
        />
      </DragMove>
    </main>
  )
}
