import { useState, useEffect } from 'react'
import Breakpoints from '@/types/constants/Breakpoints'
import { BreakpointType } from '@/types/enums/BreakpointType'

export default function useResponsive() {

  const [ isResponsive, setIsResponsive ] = useState<BreakpointType>(BreakpointType.Mobile)

  useEffect(() => {
    const handleResponsive = () => {
      if (window.innerWidth >= Breakpoints.desk_lg) {
        setIsResponsive(BreakpointType.DesktopLg)
      } else if (window.innerWidth >= Breakpoints.lap) {
        setIsResponsive(BreakpointType.Laptop)
      } else if (window.innerWidth >= Breakpoints.tab_lg) {
        setIsResponsive(BreakpointType.TabletLg)
      } else if (window.innerWidth >= Breakpoints.tab) {
        setIsResponsive(BreakpointType.Tablet)
      } else {
        setIsResponsive(BreakpointType.Mobile)
      }
    }
    handleResponsive()

    window.addEventListener('resize', handleResponsive)
    return () => window.removeEventListener('resize', handleResponsive)
  }, [])

  return isResponsive
}
