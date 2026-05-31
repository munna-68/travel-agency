import styles from "./Journal.module.css";

const tabs = ["ALL STORIES", "HIDDEN GEMS", "LOCAL GUIDES", "TRAVEL TIPS"];

export default function Editorial() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/img/editorial-hero-valley.svg"
          alt=""
        />
        <div className={styles.heroCopy}>
          <p className={styles.heroKicker}>VOLUME 04 / EDITORIAL SERIES</p>
          <h1>TRAVEL TALES</h1>
          <p>
            Immersive stories from the edge of the world, curated for those who
            seek the authentic, the hidden, and the sublime.
          </p>
        </div>
      </section>

      <section className={styles.entries}>
        <div className={styles.content}>
          <div className={styles.entryHeader}>
            <div className={styles.sectionLabel}>LATEST ENTRIES</div>
            <nav className={styles.tabs} aria-label="Editorial categories">
              {tabs.map((tab, index) => (
                <a
                  key={tab}
                  href="/editorial"
                  className={index === 0 ? styles.activeTab : undefined}
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.topGrid}>
            <article className={styles.featuredStory}>
              <div className={styles.featuredImageWrap}>
                <span className={styles.tag}>KYOTO, JAPAN</span>
                <img src="/img/editorial-kyoto-story.svg" alt="" />
              </div>
              <div className={styles.storyMeta}>
                NOV 12, 2024 — BY ELENA VANCE
              </div>
              <h2 className={styles.storyTitle}>
                THE SILENCE OF HIGASHIYAMA: FINDING PEACE IN KYOTO&apos;S OLD
                SOUL
              </h2>
              <p className={styles.storyCopy}>
                Beyond the bustling markets and neon lights of central Kyoto
                lies a district frozen in time. Discover the winding stone paths
                and hidden tea houses where silence is the primary language.
              </p>
            </article>

            <article className={styles.sideStory}>
              <img src="/img/editorial-paris-cafe.svg" alt="" />
              <div className={styles.sideKicker}>TRAVEL TIPS</div>
              <h2>7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS</h2>
              <span className={styles.smallRule} />
            </article>
          </div>

          <div className={styles.bottomGrid}>
            <article className={styles.storyCard}>
              <div className={styles.squareImageWrap}>
                <img src="/img/editorial-canadian-rockies.svg" alt="" />
              </div>
              <div className={styles.sideKicker}>ADVENTURE</div>
              <h3>WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES</h3>
            </article>

            <blockquote className={styles.quoteCard}>
              <div className={styles.quoteMark}>99</div>
              <p>“TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER.”</p>
              <footer>THE LOCAL EXPLORER PHILOSOPHY</footer>
            </blockquote>

            <article className={styles.storyCard}>
              <div className={styles.squareImageWrap}>
                <img src="/img/editorial-santorini-domes.svg" alt="" />
              </div>
              <div className={styles.sideKicker}>LOCAL GUIDES</div>
              <h3>BEYOND THE BLUE DOMES: OIA&apos;S SECRET ALLEYWAYS</h3>
            </article>
          </div>

          <div className={styles.moreLinkWrap}>
            <a className={styles.moreLink} href="/journal">
              DISCOVER MORE STORIES →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.subscribe}>
        <div className={styles.content}>
          <div className={styles.subscribeGrid}>
            <div className={styles.subscribeCopy}>
              <h2>JOIN OUR WEEKLY DISPATCH</h2>
              <p>
                No spam, just curated travel inspiration, hidden location drops,
                and editorial tales delivered straight to your inbox every
                Sunday morning.
              </p>
            </div>

            <div className={styles.subscribeFormBlock}>
              <div className={styles.formHead}>
                <label htmlFor="editorial-email">EMAIL ADDRESS</label>
                <button type="button">SUBSCRIBE</button>
              </div>
              <input
                id="editorial-email"
                type="email"
                aria-label="Email address"
              />
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>I AGREE TO THE PRIVACY POLICY AND TERMS OF SERVICE.</span>
              </label>
            </div>
          </div>

          <div className={styles.watermark} aria-hidden="true">
            LOCAL
          </div>
        </div>
      </section>
    </main>
  );
}
