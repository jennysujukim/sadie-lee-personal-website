import { ReactNode } from "react"
// components
import HeaderNav from "@/app/components/HeaderNav"

type WorkLayoutProps = {
  children: ReactNode
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return (
    <div> 
      <HeaderNav />
      {children}
    </div>
  )
}