import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Images from './Images';

const Hero = ({
  heading,
  paragraph,
  cta,
  images,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <Images images={images} />
    </section>
  );
};

export default Hero;