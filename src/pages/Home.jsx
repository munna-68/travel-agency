import styles from "./Home.module.css";

const highlights = [
  {
    label: "DESTINATIONS",
    title: "Choose the route that matches your pace.",
    copy: "Mountain escapes, coastal slow travel, and city-forward itineraries shaped by local knowledge.",
    href: "/destinations",
    image: "/img/kyoto-autumn-path.svg",
  },
  {
    label: "TOURS",
    title: "Guided experiences with editorial restraint.",
    copy: "Small-group journeys designed around texture, timing, and access instead of generic checklists.",
    href: "/tours",
    image: "/img/about-story.svg",
  },
  {
    label: "JOURNAL",
    title: "Stories from the places that shape the brand.",
    copy: "Notes, field dispatches, and quiet observations from the people and landscapes behind the routes.",
    href: "/journal",
    image: "/img/journal-hero-valley.svg",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Local Explorer landing hero">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>LOCAL EXPLORER / SEASON 2024</div>
            <h1>
              <span>THE MAP STARTS</span>
              <span className={styles.outline}>HERE</span>
            </h1>
            <p>
              Curated travel for people who want the journey to feel authored,
              cinematic, and rooted in place.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="/destinations">
                EXPLORE ROUTES →
              </a>
              <a className={styles.secondaryAction} href="/about">
                OUR APPROACH
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <img
              className={styles.heroImage}
              src="/img/hero-landing.svg"
              alt=""
            />
            <div className={styles.heroCaption}>
              <span>Mountain atmosphere</span>
              <span>Analog pace</span>
            </div>
          </div>
        </div>

        <div className={styles.heroTabs} role="tablist" aria-label="Hero sections">
          <a className={`${styles.heroTab} ${styles.heroTabActive}`} href="/destinations" aria-selected="true">Destinations</a>
          <a className={styles.heroTab} href="/tours">Tours</a>
          <a className={styles.heroTab} href="/journal">Journal</a>
        </div>
      </section>

      <section className={styles.statsSection} aria-label="Agency highlights">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <strong>70+</strong>
            <span>ROUTES CURATED</span>
          </div>
          <div className={styles.statItem}>
            <strong>12</strong>
            <span>LOCAL PARTNERSHIPS</span>
          </div>
          <div className={styles.statItem}>
            <strong>100%</strong>
            <span>EDITORIAL TONE</span>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightGrid}>
          {highlights.map((highlight) => (
            <a
              className={styles.highlightCard}
              key={highlight.label}
              href={highlight.href}
            >
              <img
                className={styles.highlightImage}
                src={highlight.image}
                alt=""
              />
              <div className={styles.highlightOverlay}>
                <span className={styles.highlightLabel}>{highlight.label}</span>
                <h2>{highlight.title}</h2>
                <p>{highlight.copy}</p>
                <span className={styles.highlightLink}>ENTER →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.bandInner}>
          <div>
            <div className={styles.bandKicker}>START HERE</div>
            <h2>Travel that feels edited, not assembled.</h2>
          </div>

          <a className={styles.bandAction} href="/editorial">
            READ THE JOURNAL →
          </a>
        </div>
      </section>
    </main>
  );
}
