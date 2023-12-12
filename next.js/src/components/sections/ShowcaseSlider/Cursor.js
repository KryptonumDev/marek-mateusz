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
      animate={{ scale: cursorScale }}
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
    width='27'
    height='12'
    fill='none'
    viewBox='0 0 27 12'
  >
    <path
      fill='#14281B'
      fillRule='evenodd'
      d='M22.71 1.18v-.5h-1v.5c0 1.681.89 3.306 2.247 4.304h-10.37l-10.372.001c1.358-.998 2.248-2.623 2.248-4.304v-.5h-1v.5c0 2.213-1.932 4.304-4.22 4.304v1c2.288 0 4.22 2.091 4.22 4.304v.5h1v-.5c0-1.681-.89-3.305-2.248-4.304h10.372l10.37-.001c-1.357.999-2.248 2.623-2.248 4.304v.5h1v-.5c0-2.213 1.933-4.304 4.221-4.304v-1c-2.288 0-4.22-2.091-4.22-4.304z'
      clipRule='evenodd'
    ></path>
  </svg>
)