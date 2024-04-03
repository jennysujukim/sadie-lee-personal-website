'use client'
import { useState } from "react"

type DragMoveProps = {
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void
  onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => void
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void
  onDragMove: (e: React.PointerEvent<HTMLDivElement>) => void
  children: React.ReactNode
}

export default function DragMove({ onPointerDown, onPointerUp, onPointerMove, onDragMove, children }: DragMoveProps) {

  const [ isDragging, setIsDragging ] = useState(false)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  return (
    <div
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseMove={handlePointerMove}
    >
      {children}
    </div>
  )
}
