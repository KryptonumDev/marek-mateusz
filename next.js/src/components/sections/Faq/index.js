'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import { easing } from '@/global/constants';

const Faq = ({
  data: {
    heading,
    list
  }
}) => {
  const [opened, setOpened] = useState(0);

  const handleClick = (e, i) => {
    e.preventDefault();
    setOpened(i);
  }

  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <div className={styles.list}>
        {list.map(({ question, answer }, i) => (
          <details
            key={i}
            open
            data-opened={opened === i}
          >
            <summary
              onClick={(e) => handleClick(e, i)}
              tabIndex={opened === i ? -1 : 0}
            >
              <Markdown components={{ p: 'span' }}>{question}</Markdown>
              <Indicator />
            </summary>
            <motion.div
              className={styles.answer}
              initial={{ height: i === 0 ? 'auto' : 0, marginBottom: i === 0 ? '24px' : 0 }}
              animate={{ height: opened === i ? 'auto' : 0, marginBottom: opened === i ? '24px' : 0 }}
              exit={{ height: 0, marginBottom: '0' }}
              transition={{
                duration: .8,
                ease: easing
              }}
            >
              <Markdown>{answer}</Markdown>
            </motion.div>
          </details>
        ))}
      </div>
      {/* <SchemaFaq data={list} /> */}
    </section>
  );
};

export default Faq;

const Indicator = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='12'
    height='17'
    fill='none'
    viewBox='0 0 12 17'
  >
    <path
      stroke='#E7CFA2'
      strokeLinecap='square'
      d='M12 10.987c-3.085 0-6 2.67-6 5.896m0 0V.216m0 16.667c0-3.227-2.916-5.896-6-5.896'
    ></path>
  </svg>
)