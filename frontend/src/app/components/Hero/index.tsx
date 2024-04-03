"use client"

import { useState } from 'react';
import useResponsive from '@/app/utils/useResponsive';
import { BreakpointType } from '@/types/enums/BreakpointType';
// components
import MatterJSBridgeMobile from "../MatterJSBridgeMobile";
import MatterJSBridgeLaptop from "../MatterJSBridgeLaptop";
import ResizeListener from '../ResizeListener';
import Loading from '../Loading';

export default function Hero() {

  const [loading, setLoading] = useState(false);
  const [forceRerender, setForceRerender] = useState(false);

  const isResponsive = useResponsive();

  const handleResize = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setForceRerender(prev => !prev);
  };

  return (
    <div>
      <ResizeListener onResize={handleResize} />
      {loading && <Loading />}
      {!loading && 
        (isResponsive === BreakpointType.Laptop || isResponsive === BreakpointType.Desktop || isResponsive === BreakpointType.DesktopLg ?
          (<MatterJSBridgeLaptop key={forceRerender ? 'forceRerender' : 'normal'} />)
          :
          isResponsive === BreakpointType.Tablet || isResponsive === BreakpointType.TabletLg ?
          (<MatterJSBridgeMobile key={forceRerender ? 'forceRerender' : 'normal'} ratio={0.11} />)
          :
          (<MatterJSBridgeMobile key={forceRerender ? 'forceRerender' : 'normal'} ratio={0.2} />)
        )
      }
    </div>
  )
}