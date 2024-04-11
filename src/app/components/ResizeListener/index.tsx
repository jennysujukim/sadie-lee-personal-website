"use client"

import { useEffect } from 'react';

type ResizeListenerProps = {
  onResize: () => void;
};

export default function ResizeListener({ onResize }: ResizeListenerProps) {

  useEffect(() => {
    const handleResize = () => onResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [onResize])

  return null;
}