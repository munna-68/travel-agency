import { useTranslation } from "react-i18next";
import NavLink from "../components/NavLink";
import styles from "./Home.module.css";

export default function Home() {
  const { t } = useTranslation();

  const highlights = [
    {
      label: t("home.highlights.destinationsLabel"),
      title: t("home.highlights.destinationsTitle"),
      copy: t("home.highlights.destinationsCopy"),
      href: "/destinations",
      image: "/img/kyoto-autumn-path.svg",
    },
    {
      label: t("home.highlights.toursLabel"),
      title: t("home.highlights.toursTitle"),
      copy: t("home.highlights.toursCopy"),
      href: "/tours",
      image: "/img/about-story.svg",
    },
    {
      label: t("home.highlights.journalLabel"),
      title: t("home.highlights.journalTitle"),
      copy: t("home.highlights.journalCopy"),
      href: "/journal",
      image: "/img/journal-hero-valley.svg",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label={t("home.heroAria")}>
        <div className={styles.heroInner}>
          <div className={styles.heroVisual}>
            <img
              className={styles.heroImage}
              src="/img/hero-landing.svg"
              alt=""
            />
            <div className={styles.heroCTA}>
              <NavLink to="/destinations">{t("home.heroCta")}</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection} aria-label={t("home.highlightsAria")}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <strong>70+</strong>
            <span>{t("home.stats.routesLabel")}</span>
          </div>
          <div className={styles.statItem}>
            <strong>12</strong>
            <span>{t("home.stats.partnersLabel")}</span>
          </div>
          <div className={styles.statItem}>
            <strong>100%</strong>
            <span>{t("home.stats.toneLabel")}</span>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightGrid}>
          {highlights.map((highlight) => (
            <NavLink
              className={styles.highlightCard}
              key={highlight.label}
              to={highlight.href}
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
                <span className={styles.highlightLink}>
                  {t("home.highlights.enter")}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.bandInner}>
          <div>
            <div className={styles.bandKicker}>{t("home.band.kicker")}</div>
            <h2>{t("home.band.title")}</h2>
          </div>

          <NavLink className={styles.bandAction} to="/journal">
            {t("home.band.action")}
          </NavLink>
        </div>
      </section>
    </main>
  );
}
