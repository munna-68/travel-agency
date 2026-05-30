import styles from './Footer.module.css';

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Contact Us', 'Press Kit'];

export default function Footer({ variant = 'light' }) {
  return (
    <footer className={styles.footer} data-variant={variant}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>LOCAL EXPLORER</div>
          <p className={styles.copy}>Curating meaningful journeys for the modern wanderer since 2012.</p>
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
