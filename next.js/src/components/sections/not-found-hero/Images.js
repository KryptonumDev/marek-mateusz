'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';

const sizes = (i) => (
  i === 0 || i === 2
    ? '(max-width: 768px) 134px, 174px'
    : i === 1 || i === 3
      ? '(max-width: 768px) 182px, 206px'
      : '(max-width: 768px) 237px, 277px'
)

const options = { damping: 100, stiffness: 500 };

const Images = ({ images }) => {
  const position = {
    x: useSpring(useMotionValue(.5), options),
    y: useSpring(useMotionValue(.5), options),
  }
  const mouse = {
    x: useTransform(position.y, [0, 1], [-25, 25]),
    y: useTransform(position.x, [0, 1], [-25, 25]),
  };
  const handleMouseMove = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth);
    const y = (clientY / innerHeight);
    position.y.set(x);
    position.x.set(y);
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      className={styles.images}
      style={{
        x: mouse.x,
        y: mouse.y,
      }}
    >
      {images.map((img, i) => (
        <Img
          key={i}
          data={img}
          sizes={sizes(i)}
        />
      ))}
    </motion.div>
  );
};

export default Images;