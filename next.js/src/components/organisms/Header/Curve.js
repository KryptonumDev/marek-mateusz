import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { easing } from '@/global/constants';

const Curve = ({ open }) => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`
  return (
    <svg className={styles.curve} stroke='none'>
      <motion.path
        initial={{
          d: initialPath
        }}
        animate={{
          d: open ? targetPath : initialPath,
          transition: { duration: .8, ease: easing }
        }}
        exit={{
          d: initialPath,
          transition: { duration: 0.8, ease: easing }
        }}
      />
    </svg>
  )
};

export default Curve;