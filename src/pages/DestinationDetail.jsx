import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavLink from "../components/NavLink";
import CropImage from "../components/CropImage";
import { findDestination } from "../data/destinations";
import styles from "./Detail.module.css";

const aspectMap = {
  "16 / 10": "1.62 / 1",
  "3 / 4": "0.88 / 1",
  "1 / 1": "1.1 / 1.15",
};

export default function DestinationDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const data = findDestination(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!data) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h1>{t("detail.notFound")}</h1>
          <NavLink to="/" className={styles.notFoundCta}>
            {t("detail.notFoundCta")}
          </NavLink>
        </div>
      </main>
    );
  }

  const goodToKnow = t("detail.goodToKnowItems", { returnObjects: true });

  return (
    <main className={styles.page} key={`${slug}-${i18n.language}`}>
      <section className={styles.hero}>
        <CropImage
          src={data.image}
          alt={data.title}
          ratio={aspectMap[data.aspect] || "1.6 / 1"}
          position="center center"
        />
        <div className={styles.heroOverlay}>
          <span className={styles.heroTag}>{data.place}</span>
          <h1 className={styles.heroTitle}>{data.title}</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.content}>
          <p className={styles.lede}>{data.intro}</p>
        </div>
      </section>

      <section className={styles.statBar}>
        <div className={styles.content}>
          <dl className={styles.statGrid}>
            <div>
              <dt>{data.duration}</dt>
              <dd>{t("detail.duration")}</dd>
            </div>
            <div>
              <dt>{data.bestTime}</dt>
              <dd>{t("detail.bestTime")}</dd>
            </div>
            <div>
              <dt>{data.groupSize}</dt>
              <dd>{t("detail.groupSize")}</dd>
            </div>
            <div>
              <dt>{data.startingFrom}</dt>
              <dd>{t("detail.startingFrom")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.highlights}>
        <div className={styles.content}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>{t("detail.highlights")}</span>
            <span className={styles.divider} aria-hidden="true" />
          </div>
          <ul className={styles.highlightList}>
            {data.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.split}>
        <div className={styles.content}>
          <div className={styles.splitGrid}>
            <div>
              <span className={styles.kicker}>{t("detail.stay")}</span>
              <h2 className={styles.splitTitle}>{data.title.split(" ")[0]}</h2>
              <p className={styles.body}>{t("detail.stayBody")}</p>
            </div>
            <div className={styles.splitAside}>
              <span className={styles.kicker}>{t("detail.philosophy")}</span>
              <p className={styles.body}>{t("detail.philosophyBody")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.itinerary}>
        <div className={styles.content}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>{t("detail.itinerary")}</span>
            <span className={styles.divider} aria-hidden="true" />
          </div>
          <ol className={styles.itineraryList}>
            {data.itinerary.map((day) => (
              <li key={day.day} className={styles.dayItem}>
                <div className={styles.dayLabel}>{day.day}</div>
                <div>
                  <h3 className={styles.dayTitle}>{day.title}</h3>
                  <p className={styles.body}>{day.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.content}>
          <h2 className={styles.ctaTitle}>{data.title}</h2>
          <p className={styles.ctaBody}>{t("detail.philosophyBody")}</p>
          <div className={styles.ctaActions}>
            <a className={styles.primaryCta} href="/tours">
              {t("detail.viewExpedition")}
            </a>
            <NavLink to="/destinations" className={styles.backCta}>
              {t("detail.backToList", { section: t("nav.destinations") })}
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
