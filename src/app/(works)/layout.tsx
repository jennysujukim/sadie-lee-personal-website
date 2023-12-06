import { ReactNode } from "react"

type WorksLayoutProps = {
  children: ReactNode
}

export default function WorksLayout({ children }: WorksLayoutProps) {
  return (
    <div className="wrapper"> 
      {children}
    </div>
  )
}