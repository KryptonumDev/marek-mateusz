import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Button from '@/components/atoms/Button';

const Callout = ({
  heading,
  paragraph,
  cta
}) => {
  return (
    <section className={`${styles.wrapper} sec-wo-margin`}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
    </section>
  );
};

export default Callout;