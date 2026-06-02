import { useTranslation } from "react-i18next";
import { destinations } from "../data/destinations";
import NavLink from "../components/NavLink";
import styles from "./Destinations.module.css";

const santorini = {
  place: "SANTORINI, GREECE",
};

export default function Destinations() {
  const { t } = useTranslation();
  const [large, tall, square] = destinations;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t("destinations.heroTitle")}</h1>
          <p className={styles.heroCopy}>{t("destinations.heroCopy")}</p>
        </div>
      </section>

      <section className={styles.featureGridSection}>
        <div className={styles.content}>
          <div className={styles.featureGrid}>
            <NavLink
              to={`/destinations/${large.slug}`}
              className={`${styles.card} ${styles.cardLarge}`}
            >
              <img src={large.image} alt="" />
              <span className={styles.tagLight}>{large.place}</span>
              <div className={styles.overlayBottomLeft}>
                <h2>{large.title}</h2>
                <p>{large.intro}</p>
              </div>
            </NavLink>

            <NavLink
              to={`/destinations/${tall.slug}`}
              className={`${styles.card} ${styles.cardTight}`}
            >
              <img src={tall.image} alt="" />
              <span className={styles.tagDark}>{tall.place}</span>
              <h2 className={styles.bottomTitle}>{tall.title}</h2>
            </NavLink>
          </div>

          <dl className={styles.stats} aria-label={t("destinations.statsAria")}>
            <div>
              <dt>70+</dt>
              <dd>{t("destinations.stats.tours")}</dd>
            </div>
            <div>
              <dt>12</dt>
              <dd>{t("destinations.stats.hubs")}</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>{t("destinations.stats.support")}</dd>
            </div>
          </dl>

          <div className={styles.secondaryGrid}>
            <NavLink
              to={`/destinations/${square.slug}`}
              className={`${styles.card} ${styles.cardSquare}`}
            >
              <img src={square.image} alt="" />
              <span className={styles.tagLightTopRight}>{square.place}</span>
              <div className={styles.overlayBottomLeft}>
                <h2>{square.title}</h2>
                <span className={styles.viewLink}>
                  {t("destinations.viewExpedition")}
                </span>
              </div>
            </NavLink>

            <article className={styles.revealCard}>
              <p className={styles.revealKicker}>
                {t("destinations.revealKicker")}
              </p>
              <h2 className={styles.revealTitle}>
                {santorini.place.split(",")[0]} AFTER DARK
              </h2>
              <p className={styles.revealCopy}>
                {t("destinations.revealCopy")}
              </p>

              <div className={styles.revealFooter}>
                <div className={styles.revealDate}>
                  {t("destinations.revealDate")}
                </div>
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
              <h2 className={styles.newsletterTitle}>
                {t("destinations.newsletterTitle")}
              </h2>
              <p className={styles.newsletterCopy}>
                {t("destinations.newsletterCopy")}
              </p>

              <form
                className={styles.subscribeForm}
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  className={styles.emailInput}
                  type="email"
                  placeholder={t("destinations.emailPlaceholder")}
                  aria-label={t("destinations.emailAria")}
                />
                <button className={styles.subscribeButton} type="submit">
                  {t("destinations.subscribe")}
                </button>
              </form>
            </div>

            <blockquote className={styles.quoteBox}>
              <p>{t("destinations.quote")}</p>
              <footer>{t("destinations.quoteFooter")}</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
