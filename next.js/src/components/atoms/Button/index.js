import Element from './Element';
import styles from './styles.module.scss';
import Link from 'next/link';

const Button = ({
  data,
  theme = 'primary',
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
    ...props,
  };
  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
  const As = href ? isExternal ? 'a' : Link : 'button';

  return (
    <Element
      As={As}
      {...href && {
        href,
        ...isExternal && { target: '_blank', rel: 'noopener' }
      }}
      {...commonProps}
      >
        <span>{children}</span>
        <Arrow />
    </Element>
  );
};

export default Button;

const Arrow = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='14'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 18 14'
  >
    <path
      strokeLinecap='square'
      d='M11.27.883c0 3.084 2.67 6 5.897 6m0 0H.5m16.667 0c-3.227 0-5.896 2.915-5.896 6'
    ></path>
  </svg>
)