import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

const linkKeys = [
  { to: "/", labelKey: "nav.home", end: true },
  { to: "/about", labelKey: "nav.about" },
  { to: "/destinations", labelKey: "nav.destinations" },
  { to: "/tours", labelKey: "nav.tours" },
  { to: "/journal", labelKey: "nav.journal" },
];

export default function Navbar({ theme = "light" }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      data-theme={theme}
    >
      <div className={styles.inner}>
        <NavLink
          to="/"
          className={styles.brand}
          aria-label={t("nav.brandHome")}
        >
          EXPLORER.
        </NavLink>

        <nav className={styles.nav} aria-label={t("common.languageLabel")}>
          {linkKeys.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <button
            className={styles.menu}
            type="button"
            aria-label={t("common.openMenu")}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
