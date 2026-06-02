import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import styles from "./Footer.module.css";

const linkKeys = [
  "footer.privacy",
  "footer.terms",
  "footer.contact",
  "footer.press",
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>{t("footer.brand")}</div>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {linkKeys.map((key) => (
            <NavLink key={key} to="/">
              {t(key)}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
