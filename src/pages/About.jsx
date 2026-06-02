import { useTranslation } from "react-i18next";
import NavLink from "../components/NavLink";
import styles from "./About.module.css";

const curators = [
  {
    roleKey: "about.curatorRoles.founder",
    name: "MARCUS THORNE",
    image: "/img/curator-marcus.jpg",
  },
  {
    roleKey: "about.curatorRoles.content",
    name: "ELENA ROSSI",
    image: "/img/curator-elena.jpg",
  },
  {
    roleKey: "about.curatorRoles.expedition",
    name: "SIDDHARTH MEHTA",
    image: "/img/curator-siddharth.jpg",
  },
  {
    roleKey: "about.curatorRoles.ops",
    name: "CHLOE CHEN",
    image: "/img/curator-chloe.jpg",
  },
];

export default function About() {
  const { t } = useTranslation();
  const heroTitleParts = t("about.heroTitle", { returnObjects: true });
  const values = t("about.values", { returnObjects: true });

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            {Array.isArray(heroTitleParts) ? (
              heroTitleParts.map((part, i) => <span key={i}>{part}</span>)
            ) : (
              <span>{heroTitleParts}</span>
            )}
          </h1>

          <p className={styles.heroCopy}>{t("about.heroCopy")}</p>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <img
            className={styles.philosophyImage}
            src="/img/about-philosophy.jpg"
            alt=""
          />

          <div className={styles.philosophyContent}>
            <h2 className={styles.sectionTitle}>{t("about.philosophyTitle")}</h2>
            <p className={styles.body}>{t("about.philosophyBody1")}</p>
            <p className={styles.body}>{t("about.philosophyBody2")}</p>

            <ul className={styles.values}>
              {(Array.isArray(values) ? values : []).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label={t("about.statsAria")}>
        <dl className={styles.statsGrid}>
          <div className={styles.statItem}>
            <dt>12</dt>
            <dd>{t("about.stats.years")}</dd>
          </div>
          <div className={styles.statItem}>
            <dt>45+</dt>
            <dd>{t("about.stats.countries")}</dd>
          </div>
          <div className={styles.statItem}>
            <dt>2.4K</dt>
            <dd>{t("about.stats.memories")}</dd>
          </div>
          <div className={styles.statItem}>
            <dt>100%</dt>
            <dd>{t("about.stats.impact")}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.curators}>
        <div className={styles.curatorsInner}>
          <div className={styles.curatorsHeader}>
            <h2 className={styles.sectionTitle}>{t("about.curatorsTitle")}</h2>
            <p className={styles.curatorsIntro}>{t("about.curatorsIntro")}</p>
          </div>

          <div className={styles.curatorGrid}>
            {curators.map((curator) => (
              <article className={styles.curatorCard} key={curator.name}>
                <img
                  className={styles.curatorImage}
                  src={curator.image}
                  alt=""
                />
                <p className={styles.curatorRole}>{t(curator.roleKey)}</p>
                <h3 className={styles.curatorName}>{curator.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyCard}>
          <img
            className={styles.storyImage}
            src="/img/about-story.jpg"
            alt=""
          />
          <div className={styles.storyOverlay}>
            <h2 className={styles.storyTitle}>{t("about.storyTitle")}</h2>
            <NavLink className={styles.storyButton} to="/tours">
              {t("about.storyAction")}
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
