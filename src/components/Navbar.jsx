import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onPointerDown = (event) => {
      const target = event.target;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (toggleRef.current && toggleRef.current.contains(target)) return;
      setIsOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((value) => !value);

  const mobileMenu = (
    <div
      id="primary-mobile-menu"
      ref={menuRef}
      className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      aria-hidden={!isOpen}
    >
      <nav className={styles.mobileNav} aria-label={t("common.navigationMenu")}>
        {linkKeys.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={closeMenu}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`
            }
          >
            <span className={styles.mobileLinkIndex}>
              {String(linkKeys.indexOf(link) + 1).padStart(2, "0")}
            </span>
            <span className={styles.mobileLinkLabel}>
              {t(link.labelKey)}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.mobileFooter}>
        <span className={styles.mobileFooterLabel}>
          {t("common.languageLabel")}
        </span>
        <div className={styles.mobileLang}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        data-theme={theme}
        data-menu-open={isOpen ? "true" : "false"}
      >
        <div className={styles.inner}>
          <NavLink
            to="/"
            className={styles.brand}
            aria-label={t("nav.brandHome")}
            onClick={closeMenu}
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
              ref={toggleRef}
              className={styles.menu}
              type="button"
              aria-label={isOpen ? t("common.closeMenu") : t("common.openMenu")}
              aria-expanded={isOpen}
              aria-controls="primary-mobile-menu"
              onClick={toggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {typeof document !== "undefined" &&
        createPortal(mobileMenu, document.body)}
    </>
  );
}
