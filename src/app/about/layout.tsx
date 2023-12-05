import { ReactNode } from "react"
import MainNav from "@/app/components/MainNav"

type AboutLayoutProps = {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <MainNav />
      {children}
    </>
  )
}