import styles from './DestinationsPage.module.css';
import heroImage from '../assets/destinations/screen.png';
import CropImage from '../components/CropImage';

export default function DestinationsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>WHERE TO NEXT?</h1>
          <p>
            Escape the ordinary with our curated selection of global retreats. From the mist-covered peaks of Guilin to the serene temples of Kyoto, rediscover the art of wandering.
          </p>
        </div>
      </section>

      <section className={styles.featureGrid}>
        <article className={styles.cardLarge}>
          <CropImage src={heroImage} alt="Autumn temple gate in Kyoto" position="24% 37%" ratio="1.62 / 1" />
          <div className={styles.cardCopy}>
            <span>KYOTO, JAPAN</span>
            <strong>THE AUTUMN PATH</strong>
            <p>Wander through ancient gateways and witness the seasonal transformation of the imperial city.</p>
          </div>
        </article>

        <article className={styles.cardTall}>
          <CropImage src={heroImage} alt="Glacier valley and turquoise lake" position="80% 30%" ratio="0.88 / 1" />
          <div className={styles.cardCopyOverlay}>
            <strong>GLACIER VALLEY</strong>
          </div>
        </article>
      </section>

      <section className={styles.stats}>
        <div><strong>70+</strong><span>CURATED TOURS</span></div>
        <div><strong>12</strong><span>GLOBAL HUBS</span></div>
        <div><strong>24/7</strong><span>LOCAL SUPPORT</span></div>
      </section>

      <section className={styles.secondaryGrid}>
        <article className={styles.cardLarge}>
          <CropImage src={heroImage} alt="River winding through Guilin" position="44% 69%" ratio="1.1 / 1.15" />
          <div className={styles.cardCopy}>
            <span>GUILIN, CHINA</span>
            <strong>THE EMERALD CURVE</strong>
            <p>View expedition →</p>
          </div>
        </article>

        <article className={styles.callout}>
          <span className={styles.calloutKicker}>EXCLUSIVE REVEAL</span>
          <h2>SANTORINI AFTER DARK</h2>
          <p>Experience the caldera without the crowds. Our new nighttime journal explores the secret life of the Cyclades under the moonlight.</p>
          <div className={styles.calloutFooter}>
            <strong>COMING FALL ’24</strong>
            <button type="button" aria-label="Open reveal">↗</button>
          </div>
        </article>
      </section>
    </div>
  );
}
