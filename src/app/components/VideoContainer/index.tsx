import React from 'react'
import Video from 'next-video'

type VideoContainerProps = {
  src: string;
}

export default function VideoContainer({ src }: VideoContainerProps) {
  return (
    <Video src={src}>

    </Video>
  )
}
