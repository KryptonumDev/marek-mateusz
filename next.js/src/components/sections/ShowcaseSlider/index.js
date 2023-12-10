import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Slider from './Slider';

const ShowcaseSlider = ({
  heading,
  paragraph,
  cta,
  list,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <Slider list={list} />
    </section>
  );
};

export default ShowcaseSlider;