'use client'
import { easing } from '@/global/constants';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Cursor = ({ x, y, cursorScale }) => {
  return (
    <motion.div
      className={styles.cursor}
      style={{
        x,
        y,
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: cursorScale,
        rotate: cursorScale === 1.5 ? '45deg' : 0
      }}
      exit={{ scale: 0 }}
      transition={{
        duration: .5,
        ease: easing,
      }}
      >
      <CursorIcon />
    </motion.div>
  );
};

export default Cursor;

const CursorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='22'
    fill='none'
    viewBox='0 0 21 22'
  >
    <path
      fill='#14281B'
      fillRule='evenodd'
      d='M13.64 1.136l-.353-.354-.707.707.354.354c1.188 1.189 2.966 1.708 4.632 1.454l-6.98 6.98-.353.354L2.9 17.965c.254-1.666-.265-3.444-1.454-4.633l-.353-.354-.707.707.353.354c1.565 1.564 1.677 4.41.06 6.028l.706.707c1.618-1.618 4.463-1.506 6.027.059l.354.354.707-.708-.354-.353c-1.188-1.189-2.966-1.708-4.632-1.454l6.98-6.98.353-.354 7.333-7.334c-.254 1.666.265 3.444 1.454 4.633l.353.354.707-.708-.353-.353c-1.565-1.565-1.677-4.41-.06-6.028l-.706-.707c-1.618 1.618-4.463 1.505-6.027-.06z'
      clipRule='evenodd'
    ></path>
  </svg>
)