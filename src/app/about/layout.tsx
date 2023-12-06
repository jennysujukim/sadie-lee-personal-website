import { ReactNode } from "react"

type AboutLayoutProps = {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}