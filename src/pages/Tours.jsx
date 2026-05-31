import styles from "./Tours.module.css";

const tours = [
  {
    category: "CULTURAL",
    place: "KYOTO, JAPAN",
    title: "THE ZEN PATHWAY",
    duration: "4 DAYS",
    price: "$1,250",
    image: "/img/tours-zen-pathway.svg",
  },
  {
    category: "JEEP RIDE",
    place: "GUILIN, CHINA",
    title: "KARST FRONTIER",
    duration: "6 DAYS",
    price: "$2,100",
    image: "/img/tours-karst-frontier.svg",
  },
  {
    category: "HIKING",
    place: "BANFF, CANADA",
    title: "SUMMIT SERENITY",
    duration: "5 DAYS",
    price: "$1,850",
    image: "/img/tours-summit-serenity.svg",
  },
  {
    category: "GASTRONOMY",
    place: "SANTORINI, GREECE",
    title: "AEGEAN FLAVORS",
    duration: "3 DAYS",
    price: "$980",
    image: "/img/tours-aegean-flavors.svg",
  },
  {
    category: "JEEP RIDE",
    place: "CALIFORNIA, USA",
    title: "COASTAL HIGHWAY",
    duration: "7 DAYS",
    price: "$2,400",
    image: "/img/tours-coastal-highway.svg",
  },
];

const filters = [
  "ALL EXPERIENCES",
  "HIKING",
  "CULTURAL",
  "JEEP RIDE",
  "GASTRONOMY",
];

export default function Tours() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopyBlock}>
              <div className={styles.kicker}>SEASON 2024</div>
              <h1 className={styles.heroTitle}>
                <span>OUR CURATED</span>
                <span className={styles.outline}>TOURS</span>
              </h1>

              <p className={styles.heroCopy}>
                Beyond the standard routes. We&apos;ve meticulously designed
                each journey to immerse you in the authentic soul of every
                destination, guided by those who call it home.
              </p>
            </div>

            <div className={styles.heroStat}>
              <strong>70+</strong>
              <span>ACTIVE TOURS</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className={styles.content}>
          <div className={styles.filters} aria-label="Tour filters">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${index === 0 ? styles.filterActive : ""}`}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.content}>
          <div className={styles.tourGrid}>
            {tours.slice(0, 3).map((tour) => (
              <article className={styles.tourCard} key={tour.title}>
                <img className={styles.cardImage} src={tour.image} alt="" />
                <span className={styles.cardTag}>{tour.category}</span>
                <div className={styles.cardOverlay}>
                  <div className={styles.cardPlace}>{tour.place}</div>
                  <h2 className={styles.cardTitle}>{tour.title}</h2>
                  <dl className={styles.metaRow}>
                    <div>
                      <dt>DURATION</dt>
                      <dd>{tour.duration}</dd>
                    </div>
                    <div>
                      <dt>PRICE</dt>
                      <dd>{tour.price}</dd>
                    </div>
                  </dl>
                  <a className={styles.cardButton} href="/destinations">
                    EXPLORE TOUR →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.tourGridCompact}>
              {tours.slice(3).map((tour) => (
                <article className={styles.tourCard} key={tour.title}>
                  <img className={styles.cardImage} src={tour.image} alt="" />
                  <span className={styles.cardTag}>{tour.category}</span>
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardPlace}>{tour.place}</div>
                    <h2 className={styles.cardTitle}>{tour.title}</h2>
                    <dl className={styles.metaRow}>
                      <div>
                        <dt>DURATION</dt>
                        <dd>{tour.duration}</dd>
                      </div>
                      <div>
                        <dt>PRICE</dt>
                        <dd>{tour.price}</dd>
                      </div>
                    </dl>
                    <a className={styles.cardButton} href="/destinations">
                      EXPLORE TOUR →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <aside className={styles.customCard}>
              <div className={styles.customIcon} aria-hidden="true">
                <span />
              </div>
              <h2 className={styles.customTitle}>CRAFT YOUR OWN JOURNEY</h2>
              <p className={styles.customCopy}>
                Can&apos;t find exactly what you&apos;re looking for? Our travel
                architects can design a completely bespoke itinerary tailored to
                your specific interests and pace.
              </p>
              <button className={styles.customLink} type="button">
                START CUSTOM INQUIRY →
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.content}>
          <h2>READY FOR ADVENTURE?</h2>
          <button type="button" className={styles.ctaButton}>
            REQUEST GROUP QUOTE →
          </button>
        </div>
      </section>
    </main>
  );
}
