'use client'
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll({
        smooth: true
      });
    })();
  }, []);
  return children;
};

export default SmoothScroll;