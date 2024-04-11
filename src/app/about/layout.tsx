import { ReactNode } from "react"

type AboutLayoutProps = {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}