import { useTranslation } from "react-i18next";
import { tours } from "../data/tours";
import NavLink from "../components/NavLink";
import styles from "./Tours.module.css";

export default function Tours() {
  const { t } = useTranslation();
  const filters = t("tours.filters", { returnObjects: true });
  const top = tours.slice(0, 3);
  const bottom = tours.slice(3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopyBlock}>
              <div className={styles.kicker}>{t("tours.kicker")}</div>
              <h1 className={styles.heroTitle}>
                {(() => {
                  const parts = t("tours.heroTitle", { returnObjects: true });
                  return Array.isArray(parts) ? (
                    parts.map((p, i) => (
                      <span
                        key={i}
                        className={i === parts.length - 1 ? styles.outline : ""}
                      >
                        {p}
                      </span>
                    ))
                  ) : (
                    <span>{parts}</span>
                  );
                })()}
              </h1>

              <p className={styles.heroCopy}>{t("tours.heroCopy")}</p>
            </div>

            <div className={styles.heroStat}>
              <strong>70+</strong>
              <span>{t("tours.statLabel")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className={styles.content}>
          <div className={styles.filters} aria-label={t("tours.filtersAria")}>
            {(Array.isArray(filters) ? filters : []).map((filter, index) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${
                  index === 0 ? styles.filterActive : ""
                }`}
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
            {top.map((tour) => (
              <NavLink
                to={`/tours/${tour.slug}`}
                className={styles.tourCard}
                key={tour.slug}
              >
                <img className={styles.cardImage} src={tour.image} alt="" />
                <span className={styles.cardTag}>{tour.category}</span>
                <div className={styles.cardOverlay}>
                  <div className={styles.cardPlace}>{tour.place}</div>
                  <h2 className={styles.cardTitle}>{tour.title}</h2>
                  <dl className={styles.metaRow}>
                    <div>
                      <dt>{t("tours.duration")}</dt>
                      <dd>{tour.duration}</dd>
                    </div>
                    <div>
                      <dt>{t("tours.price")}</dt>
                      <dd>{tour.price}</dd>
                    </div>
                  </dl>
                  <span className={styles.cardButton}>
                    {t("tours.exploreTour")}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.tourGridCompact}>
              {bottom.map((tour) => (
                <NavLink
                  to={`/tours/${tour.slug}`}
                  className={styles.tourCard}
                  key={tour.slug}
                >
                  <img className={styles.cardImage} src={tour.image} alt="" />
                  <span className={styles.cardTag}>{tour.category}</span>
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardPlace}>{tour.place}</div>
                    <h2 className={styles.cardTitle}>{tour.title}</h2>
                    <dl className={styles.metaRow}>
                      <div>
                        <dt>{t("tours.duration")}</dt>
                        <dd>{tour.duration}</dd>
                      </div>
                      <div>
                        <dt>{t("tours.price")}</dt>
                        <dd>{tour.price}</dd>
                      </div>
                    </dl>
                    <span className={styles.cardButton}>
                      {t("tours.exploreTour")}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            <aside className={styles.customCard}>
              <div className={styles.customIcon} aria-hidden="true">
                <span />
              </div>
              <h2 className={styles.customTitle}>{t("tours.customTitle")}</h2>
              <p className={styles.customCopy}>{t("tours.customCopy")}</p>
              <button className={styles.customLink} type="button">
                {t("tours.customLink")}
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.content}>
          <h2>{t("tours.ctaTitle")}</h2>
          <button type="button" className={styles.ctaButton}>
            {t("tours.ctaButton")}
          </button>
        </div>
      </section>
    </main>
  );
}
