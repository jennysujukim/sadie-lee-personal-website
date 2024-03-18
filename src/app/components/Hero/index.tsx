"use client"

import { useState } from 'react';

// components
import MatterJSBridge from "../MatterJSBridge";
import ResizeListener from '../ResizeListener';
import Loading from '../Loading';

export default function Hero() {

  const [loading, setLoading] = useState(false);
  const [forceRerender, setForceRerender] = useState(false);

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
      {!loading && <MatterJSBridge key={forceRerender ? 'forceRerender' : 'normal'} /> }
    </div>
  )
}
