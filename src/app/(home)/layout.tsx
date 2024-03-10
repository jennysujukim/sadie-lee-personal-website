import {ReactNode} from 'react'

type HomeLayoutProps = {
  children: ReactNode
}

export default function layout({ children }: HomeLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
