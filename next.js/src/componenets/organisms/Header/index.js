'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import { usePathname } from 'next/navigation';
import { links } from 'src/app/layout';
import Cart from '../cart';

const Header = () => {
  const pathname = usePathname();
  const [navOpened, setNavOpened] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    }
  }, []);

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setNavOpened(false);
    }
  }

  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Przejdź do głównej treści</a>
      <header className={styles.wrapper} aria-expanded={navOpened} aria-controls={cartOpened}>
        <div className="max-width">
          <Link href='/' className={styles.logo} aria-label="Homepage">
            <Logo />
          </Link>
          <nav>
            <ul>
              {links.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    aria-current={pathname === href ? 'page' : false}
                    onClick={() => setNavOpened(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={styles.mobileNavToggle}
            onClick={() => setNavOpened(!navOpened)}
            aria-label={`${navOpened ? 'Hide' : 'Show'} navigation`}
          >
            <span></span>
            <span></span>
          </button>
          <Cart className={styles.cart} setCartOpened={setCartOpened} />
        </div>
        <div
          className={styles.overlay}
          aria-hidden="true"
          onClick={() => { setNavOpened(false); setCartOpened(false) }}
        />
      </header>
    </>
  );
};

export default Header;