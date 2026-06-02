import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavLink from "../components/NavLink";
import CropImage from "../components/CropImage";
import { findArticle, articles } from "../data/articles";
import styles from "./Detail.module.css";

const ratioMap = {
  wide: "16 / 10",
  tall: "3 / 4",
  square: "1 / 1",
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const data = findArticle(slug);

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

  const related = (data.related || [])
    .map((r) => {
      const full = articles.find((a) => a.slug === r.slug);
      return full ? { ...r, ...full } : null;
    })
    .filter(Boolean);

  return (
    <main className={styles.page} key={`${slug}-${i18n.language}`}>
      <section className={styles.hero}>
        <CropImage
          src={data.image}
          alt={data.title}
          ratio={ratioMap[data.imageRatio] || "16 / 10"}
          position="center center"
        />
        <div className={styles.heroOverlay}>
          <span className={styles.heroTag}>{data.tag}</span>
          <h1 className={styles.heroTitle}>{data.title}</h1>
        </div>
      </section>

      <section className={styles.byline}>
        <div className={styles.content}>
          <span className={styles.bylineText}>
            {data.date} — {t("detail.byline")} {data.author}
          </span>
        </div>
      </section>

      <section className={styles.articleBody}>
        <div className={styles.content}>
          <p className={styles.lede}>{data.excerpt}</p>
          {(data.body || []).map((paragraph, idx) => (
            <p key={idx} className={styles.body}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.content}>
            <div className={styles.sectionHead}>
              <span className={styles.kicker}>{t("detail.keepReading")}</span>
              <span className={styles.divider} aria-hidden="true" />
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <NavLink
                  key={r.slug}
                  to={`/journal/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <CropImage
                    src={r.image}
                    alt={r.title}
                    ratio="4 / 3"
                    position="center center"
                  />
                  <div className={styles.relatedCopy}>
                    <span className={styles.relatedTag}>{r.tag}</span>
                    <h3 className={styles.relatedTitle}>{r.title}</h3>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={styles.content}>
          <NavLink to="/journal" className={styles.backCta}>
            {t("detail.backToList", { section: t("nav.journal") })}
          </NavLink>
        </div>
      </section>
    </main>
  );
}
