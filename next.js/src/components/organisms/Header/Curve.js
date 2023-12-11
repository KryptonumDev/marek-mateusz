'use client'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { easing } from '@/global/constants';

const Curve = ({ open }) => {
  const initialPathRef = useRef('');
  const targetPathRef = useRef('');
  useEffect(() => {
    initialPathRef.current = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    targetPathRef.current = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
  }, []);

  return (
    <svg className={styles.curve} stroke='none'>
      <motion.path
        initial={{
          d: initialPathRef.current
        }}
        animate={{
          d: open ? targetPathRef.current : initialPathRef.current,
          transition: { duration: .8, ease: easing }
        }}
        exit={{
          d: initialPathRef.current,
        }}
      />
    </svg>
  )
};

export default Curve;