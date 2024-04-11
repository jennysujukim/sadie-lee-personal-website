import { ReactNode } from "react"
// components
import WorkNav from "@/app/components/WorkNav"

type WorkLayoutProps = {
  children: ReactNode
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return (
    <> 
      <WorkNav />
      {children}
    </>
  )
}