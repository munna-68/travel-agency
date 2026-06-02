import { useTranslation } from "react-i18next";
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
            <a key={key} href="/">
              {t(key)}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
