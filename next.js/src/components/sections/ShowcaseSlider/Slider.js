'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import Cursor from './Cursor';

const sizes = (i) => (
  i % 4 === 1 || i % 4 === 3
    ? '(max-width: 768px) 363px, 484px'
    : i % 4 === 0
      ? '(max-width: 768px) 130px, 173px'
      : '(max-width: 768px) 284px, 381px'
)

const Slider = ({ list }) => {
  const sliderWrapper = useRef(null);
  const isInView = useInView(sliderWrapper, { once: true });
  const [sliderConstraint, setSliderConstraint] = useState(0);

  useEffect(() => {
    const calculateSliderConstraints = () => {
      const wrapper = sliderWrapper.current;
      const wrapperStyle = getComputedStyle(wrapper);
      const wrapperWidth = wrapper.offsetWidth;
      const gap = parseFloat(wrapperStyle.gap);
      const childrenWidth = Array.from(wrapper.childNodes).reduce((acc, node, index, array) => {
        const nodeWidth = node.clientWidth;
        const nodeGap = index < array.length - 1 ? gap : 0;
        return acc + nodeWidth + nodeGap;
      }, 0);
      const constraint = wrapperWidth - childrenWidth;
      setSliderConstraint(constraint);
    };
    calculateSliderConstraints();
    window.addEventListener("resize", calculateSliderConstraints);
    return () => window.removeEventListener("resize", calculateSliderConstraints);
  }, []);

  const [ cursorScale, setCursorScale ] = useState(0);
  const mouse = {
    y: useSpring(useMotionValue(0), { damping: 80, stiffness: 600 }),
    x: useSpring(useMotionValue(0), { damping: 80, stiffness: 600 }),
  }

  return (
    <>
      <div
        data-visible={isInView}
        className={styles.slider}
        onMouseMove={({ clientX, clientY }) => {
          const x = clientX - 32;
          const y = clientY - 32;
          mouse.x.set(x);
          mouse.y.set(y);
        }}
        onMouseOver={({ clientX, clientY }) => {
          const x = clientX - 32;
          const y = clientY - 32;
          mouse.x.set(x);
          mouse.y.set(y);
          setCursorScale(1)
        }}
        onMouseOut={() => setCursorScale(0)}
        onMouseDown={() => setCursorScale(1.5)}
        onMouseUp={() => setCursorScale(1)}
      >
        <motion.div
          ref={sliderWrapper}
          className={styles['slider-wrapper']}
          drag='x'
          dragConstraints={{
            right: 0,
            left: sliderConstraint
          }}
        >
          {list.map(({ img, year, type, title }, i) => (
            <div
              className={styles.item}
              key={i}
              tabIndex={0}
              style={{ animationDelay: `${i * .15}s` }}
            >
              <div className={styles.img}>
                <Img
                  data={img}
                  sizes={sizes(i)}
                />
              </div>
              <div className={styles.text}>
                <div className={styles.info}>
                  <p>{year}</p>
                  <p>{type}</p>
                </div>
                <p className={styles.title}>{title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Cursor {...mouse} cursorScale={cursorScale} />
    </>
  );
};

export default Slider;