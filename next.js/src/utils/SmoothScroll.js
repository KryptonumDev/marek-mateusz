'use client'
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  return children;
};

export default SmoothScroll;