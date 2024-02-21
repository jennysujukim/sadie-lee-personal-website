import {ReactNode} from 'react'

type HomeLayoutProps = {
  children: ReactNode
}

export default function layout({ children }: HomeLayoutProps) {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}
