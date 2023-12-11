import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';

const Hero = ({
  heading,
  paragraph
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
    </section>
  );
};

export default Hero;