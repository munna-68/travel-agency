import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavLink from "../components/NavLink";
import styles from "./Home.module.css";

const MOBILE_VIDEO = "/img/video/Mobile(1).mp4";
const DESKTOP_VIDEO = "/img/video/Desktop(1).mp4";

export default function Home() {
  const { t } = useTranslation();
  const [videoSrc, setVideoSrc] = useState(DESKTOP_VIDEO);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    setVideoSrc(isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO);
  }, []);

  const highlights = [
    {
      label: t("home.highlights.destinationsLabel"),
      title: t("home.highlights.destinationsTitle"),
      copy: t("home.highlights.destinationsCopy"),
      href: "/destinations",
      image: "/img/kyoto-autumn-path.jpg",
    },
    {
      label: t("home.highlights.toursLabel"),
      title: t("home.highlights.toursTitle"),
      copy: t("home.highlights.toursCopy"),
      href: "/tours",
      image: "/img/about-story.jpg",
    },
    {
      label: t("home.highlights.journalLabel"),
      title: t("home.highlights.journalTitle"),
      copy: t("home.highlights.journalCopy"),
      href: "/journal",
      image: "/img/journal-hero-valley.jpg",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label={t("home.heroAria")}>
        <div className={styles.heroVisual}>
          <video
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster="/img/hero-landing.svg"
            src={videoSrc}
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>{t("home.heroKicker")}</div>
            <h1>{t("home.heroTitle")}</h1>
            <p>{t("home.heroCopy")}</p>
            <div className={styles.actions}>
              <NavLink className={styles.primaryAction} to="/destinations">
                {t("home.heroPrimaryAction")}
              </NavLink>
              <a
                className={styles.secondaryAction}
                href="https://youtu.be/dQw4w9WgXcQ?si=G73wFuCpKxPANj9O"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.playIcon}>▶</span>{" "}
                {t("home.heroSecondaryAction").replace("▶ ", "")}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>{t("home.heroScroll")}</span>
          <div className={styles.scrollCircle}>↓</div>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      <section
        className={styles.statsSection}
        aria-label={t("home.highlightsAria")}
      >
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
