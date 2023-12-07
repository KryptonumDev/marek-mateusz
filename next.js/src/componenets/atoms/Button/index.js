import styles from './styles.module.scss';
import Link from 'next/link';

const Button = ({
  data,
  theme = 'primary',
  variant = 'primary',
  children,
  href,
  className,
  ...props
}) => {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }

  const commonProps = {
    className: `${styles.wrapper} cta ${className ? className : ''}`,
    "data-theme": theme,
    "data-variant": variant,
    ...props,
  };

  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));

  const Element = href ? isExternal ? 'a' : Link : 'button';

  return (
    <Element
      {...href && {
        href,
        ...isExternal && { target: '_blank', rel: 'noopener' }
      }}
      {...commonProps}
      >
      {children}
    </Element>
  );
};

export default Button;