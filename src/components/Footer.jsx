import styles from "./Footer.module.css";

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Contact Us",
  "Press Kit",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>LOCAL EXPLORER</div>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link} href="/">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
