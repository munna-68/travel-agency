import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar({ theme = 'light' }) {
  const location = useLocation();
  const isEditorial = location.pathname === '/editorial';

  return (
    <header className={styles.header} data-theme={theme} data-editorial={isEditorial || undefined}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} aria-label="Local Explorer home">
          LOCAL
          <br />
          EXPLORER
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.pill} type="button">
            {isEditorial ? 'BOOK NOW' : 'LANGUAGE'}
            {isEditorial ? ' →' : ''}
          </button>
          <button className={styles.menu} type="button" aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
