import { ReactNode } from "react"
import MainNav from "@/app/components/MainNav"


type WorksLayoutProps = {
  children: ReactNode
}

export default function WorksLayout({ children }: WorksLayoutProps) {
  return (
    <>
      <MainNav />
      {children}
    </>
  )
}