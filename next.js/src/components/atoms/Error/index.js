'use client'
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const Error = ({ error }) => (
  <AnimatePresence initial='false' mode='wait'>
    {error && (
      <motion.span
        initial={{ height: 0, marginTop: 0 }}
        animate={{ height: 'auto', marginTop: 4 }}
        exit={{ height: 0, marginTop: 0 }}
        className={styles.error}
        role="alert"
      >
        <Icon />
        <span>{error.message}</span>
      </motion.span>
    )}
  </AnimatePresence>
);

export default Error;

const Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='16'
    fill='none'
    viewBox='0 0 17 16'
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M11.463 2l3.333 3.333v5.333L11.463 14H6.13l-3.334-3.334V5.333L6.13 2h5.333z'
      clipRule='evenodd'
    ></path>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      d='M8.798 5.333v3.334'
    ></path>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8.798 11.333a.667.667 0 100-1.333.667.667 0 000 1.333z'
      clipRule='evenodd'
    ></path>
  </svg>
)