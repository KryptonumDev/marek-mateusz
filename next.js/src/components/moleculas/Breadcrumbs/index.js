import { Fragment } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import SchemaBreadcrumbs from '@/global/Schema/Breadcrumbs';

const Breadcrumbs = ({ data, visible=true }) => {
  return (
    <Fragment>
      <SchemaBreadcrumbs data={data} />
      {visible && (
        <nav className={styles.wrapper}>
          {data.map(({ name, path }, i) => {
            const Item = i !== data.length - 1 ? Link : 'span';
            return (
              <Fragment key={i}>
                <Item
                  {...(i !== data.length-1 && { href: path })}
                >
                  {i === data.length-2 && (
                    <Chevron />
                  )}
                  <span>{name}</span>
                </Item>
                {i !== data.length-1 && (
                  <Chevron />
                )}
              </Fragment>
            )
          })}
        </nav>
      )}
    </Fragment>
  );
};

export default Breadcrumbs;

const Chevron = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='26'
    height='27'
    fill='none'
    viewBox='0 0 26 27'
  >
    <path
      stroke='#7A6A65'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.834 9l4.333 4.5-4.333 4.5'
    ></path>
  </svg>
)