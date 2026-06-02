import { useTranslation } from "react-i18next";
import { articles } from "../data/articles";
import NavLink from "../components/NavLink";
import styles from "./Journal.module.css";

export default function Journal() {
  const { t } = useTranslation();
  const tabs = t("journal.tabs", { returnObjects: true });
  const [featured, side, ...rest] = articles;
  const [story1, story2] = rest;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/img/journal-hero-valley.svg"
          alt=""
        />
        <div className={styles.heroCopy}>
          <p className={styles.heroKicker}>{t("journal.kicker")}</p>
          <h1>{t("journal.title")}</h1>
          <p>{t("journal.heroCopy")}</p>
        </div>
      </section>

      <section className={styles.entries}>
        <div className={styles.content}>
          <div className={styles.entryHeader}>
            <div className={styles.sectionLabel}>{t("journal.entriesLabel")}</div>
            <nav className={styles.tabs} aria-label={t("journal.tabsAria")}>
              {(Array.isArray(tabs) ? tabs : []).map((tab, index) => (
                <NavLink
                  key={tab}
                  to="/journal"
                  className={index === 0 ? styles.activeTab : undefined}
                >
                  {tab}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className={styles.topGrid}>
            <NavLink
              to={`/journal/${featured.slug}`}
              className={styles.featuredStory}
            >
              <div className={styles.featuredImageWrap}>
                <span className={styles.tag}>{featured.tag}</span>
                <img src={featured.image} alt="" />
              </div>
              <div className={styles.storyMeta}>
                {featured.date} — {t("detail.byline")} {featured.author}
              </div>
              <h2 className={styles.storyTitle}>{featured.title}</h2>
              <p className={styles.storyCopy}>{featured.excerpt}</p>
            </NavLink>

            <NavLink
              to={`/journal/${side.slug}`}
              className={styles.sideStory}
            >
              <img src={side.image} alt="" />
              <div className={styles.sideKicker}>{side.tag}</div>
              <h2>{side.title}</h2>
              <span className={styles.smallRule} />
            </NavLink>
          </div>

          <div className={styles.bottomGrid}>
            <NavLink
              to={`/journal/${story1.slug}`}
              className={styles.storyCard}
            >
              <div className={styles.squareImageWrap}>
                <img src={story1.image} alt="" />
              </div>
              <div className={styles.sideKicker}>{story1.tag}</div>
              <h3>{story1.title}</h3>
            </NavLink>

            <blockquote className={styles.quoteCard}>
              <div className={styles.quoteMark}>99</div>
              <p>{t("journal.quote")}</p>
              <footer>{t("journal.quoteFooter")}</footer>
            </blockquote>

            <NavLink
              to={`/journal/${story2.slug}`}
              className={styles.storyCard}
            >
              <div className={styles.squareImageWrap}>
                <img src={story2.image} alt="" />
              </div>
              <div className={styles.sideKicker}>{story2.tag}</div>
              <h3>{story2.title}</h3>
            </NavLink>
          </div>

          <div className={styles.moreLinkWrap}>
            <NavLink className={styles.moreLink} to="/journal">
              {t("journal.moreLink")}
            </NavLink>
          </div>
        </div>
      </section>

      <section className={styles.subscribe}>
        <div className={styles.content}>
          <div className={styles.subscribeGrid}>
            <div className={styles.subscribeCopy}>
              <h2>{t("journal.subscribeTitle")}</h2>
              <p>{t("journal.subscribeCopy")}</p>
            </div>

            <div className={styles.subscribeFormBlock}>
              <div className={styles.formHead}>
                <label htmlFor="journal-email">
                  {t("journal.emailLabel")}
                </label>
                <button type="button">{t("journal.subscribeButton")}</button>
              </div>
              <input id="journal-email" type="email" aria-label={t("journal.emailAria")} />
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>{t("journal.checkbox")}</span>
              </label>
            </div>
          </div>

          <div className={styles.watermark} aria-hidden="true">
            {t("journal.watermark")}
          </div>
        </div>
      </section>
    </main>
  );
}
