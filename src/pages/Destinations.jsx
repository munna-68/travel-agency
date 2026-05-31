import styles from "./Destinations.module.css";

export default function Destinations() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>WHERE TO NEXT?</h1>
          <p className={styles.heroCopy}>
            Escape the ordinary with our curated selection of global retreats.
            From the mist-covered peaks of Guilin to the serene temples of
            Kyoto, rediscover the art of wandering.
          </p>
        </div>
      </section>

      <section className={styles.featureGridSection}>
        <div className={styles.content}>
          <div className={styles.featureGrid}>
            <article className={`${styles.card} ${styles.cardLarge}`}>
              <img src="/img/kyoto-autumn-path.svg" alt="" />
              <span className={styles.tagLight}>KYOTO, JAPAN</span>
              <div className={styles.overlayBottomLeft}>
                <h2>THE AUTUMN PATH</h2>
                <p>
                  Wander through ancient gateways and witness the seasonal
                  transformation of the imperial city.
                </p>
              </div>
            </article>

            <article className={`${styles.card} ${styles.cardTight}`}>
              <img src="/img/montana-glacier-valley.svg" alt="" />
              <span className={styles.tagDark}>MONTANA, USA</span>
              <h2 className={styles.bottomTitle}>GLACIER VALLEY</h2>
            </article>
          </div>

          <dl className={styles.stats} aria-label="Destination statistics">
            <div>
              <dt>70+</dt>
              <dd>CURATED TOURS</dd>
            </div>
            <div>
              <dt>12</dt>
              <dd>GLOBAL HUBS</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>LOCAL SUPPORT</dd>
            </div>
          </dl>

          <div className={styles.secondaryGrid}>
            <article className={`${styles.card} ${styles.cardSquare}`}>
              <img src="/img/guilin-emerald-curve.svg" alt="" />
              <span className={styles.tagLightTopRight}>GUILIN, CHINA</span>
              <div className={styles.overlayBottomLeft}>
                <h2>THE EMERALD CURVE</h2>
                <a className={styles.viewLink} href="/journal">
                  VIEW EXPEDITION →
                </a>
              </div>
            </article>

            <article className={styles.revealCard}>
              <p className={styles.revealKicker}>EXCLUSIVE REVEAL</p>
              <h2 className={styles.revealTitle}>SANTORINI AFTER DARK</h2>
              <p className={styles.revealCopy}>
                Experience the caldera without the crowds. Our new nighttime
                journal explores the secret life of the Cyclades under the
                moonlight.
              </p>

              <div className={styles.revealFooter}>
                <div className={styles.revealDate}>COMING FALL ’24</div>
                <span className={styles.arrowButton} aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.content}>
          <div className={styles.newsletterGrid}>
            <div className={styles.newsletterCopyBlock}>
              <h2 className={styles.newsletterTitle}>THE WEEKLY JOURNAL</h2>
              <p className={styles.newsletterCopy}>
                Join 50,000+ explorers and receive curated travel stories,
                hidden destination guides, and exclusive early access to new
                tours.
              </p>

              <form className={styles.subscribeForm}>
                <input
                  className={styles.emailInput}
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  aria-label="Email address"
                />
                <button className={styles.subscribeButton} type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <blockquote className={styles.quoteBox}>
              <p>“TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER.”</p>
              <footer>— ANONYMOUS EXPLORER</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
