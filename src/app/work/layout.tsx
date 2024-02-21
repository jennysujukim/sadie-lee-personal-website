import { ReactNode } from "react"

type WorkLayoutProps = {
  children: ReactNode
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return (
    <div className="wrapper"> 
      {children}
    </div>
  )
}