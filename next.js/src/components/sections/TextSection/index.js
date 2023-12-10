import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Button from '@/components/atoms/Button';

const TextSection = ({
  heading,
  paragraph,
  cta,
  ...props
}) => {
  return (
    <section className={styles.wrapper} {...props}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <div>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        {cta && (
          <Button data={cta} className={styles.cta} />
        )}
      </div>
    </section>
  );
};

export default TextSection;