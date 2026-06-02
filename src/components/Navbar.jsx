import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink
          to="/"
          className={styles.brand}
          aria-label="Local Explorer home"
        >
          LOCAL
          <br />
          EXPLORER
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.pill} type="button">
            LANGUAGE
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
