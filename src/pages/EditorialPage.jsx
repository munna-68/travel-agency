import styles from "./EditorialPage.module.css";
import heroImage from "../assets/editorial/screen.png";
import CropImage from "../components/CropImage";

export default function EditorialPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Green valley river editorial hero"
          className={styles.heroImage}
        />
        <div className={styles.heroCopy}>
          <p>VOLUME 04 / EDITORIAL SERIES</p>
          <h1>TRAVEL TALES</h1>
          <span>
            Immersive stories from the edge of the world, curated for those who
            seek the authentic, the hidden, and the sublime.
          </span>
        </div>
      </section>

      <section className={styles.tabsRow}>
        <span>LATEST ENTRIES</span>
        <nav>
          {["ALL STORIES", "HIDDEN GEMS", "LOCAL GUIDES", "TRAVEL TIPS"].map(
            (item, index) => (
              <a
                key={item}
                href="/"
                className={index === 0 ? styles.active : ""}
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </section>

      <section className={styles.featureArea}>
        <article className={styles.featureCard}>
          <CropImage
            src={heroImage}
            alt="Kyoto courtyard"
            position="22% 34%"
            ratio="1.95 / 1"
          />
          <div className={styles.meta}>
            <span>KYOTO, JAPAN</span>
            <p>Nov 12, 2024 — By Elena Vance</p>
            <h2>
              THE SILENCE OF GHIASHIYAMA: FINDING PEACE IN KYOTO'S OLD SOUL
            </h2>
            <p>
              Beyond the bustling markets and neon lights of central Kyoto lies
              a district frozen in time. Discover the winding stone paths and
              hidden tea houses where silence is the primary language.
            </p>
          </div>
        </article>

        <article className={styles.sideCard}>
          <CropImage
            src={heroImage}
            alt="Paris cafe terraces"
            position="79% 39%"
            ratio="0.95 / 1"
          />
          <div className={styles.sideMeta}>
            <span>TRAVEL TIPS</span>
            <h3>7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS</h3>
          </div>
        </article>
      </section>

      <section className={styles.moreGrid}>
        <article className={styles.smallCard}>
          <CropImage
            src={heroImage}
            alt="Mountain trek"
            position="19% 66%"
            ratio="1 / 1"
          />
          <span>ADVENTURE</span>
          <h3>WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES</h3>
        </article>

        <article className={styles.quoteCard}>
          <div className={styles.quoteMark}>99</div>
          <blockquote>
            “TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER.”
          </blockquote>
          <strong>THE LOCAL EXPLORER PHILOSOPHY</strong>
        </article>

        <article className={styles.smallCard}>
          <CropImage
            src={heroImage}
            alt="White domes in Greece"
            position="82% 72%"
            ratio="1 / 1"
          />
          <span>LOCAL GUIDES</span>
          <h3>BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYS</h3>
        </article>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.leftCopy}>
          <p>JOIN OUR WEEKLY DISPATCH</p>
          <span>
            No spam, just curated travel inspiration, hidden location drops, and
            editorial tales delivered straight to your inbox every Sunday
            morning.
          </span>
        </div>

        <form className={styles.form}>
          <label>
            EMAIL ADDRESS
            <input type="email" />
          </label>
          <button type="submit">SUBSCRIBE</button>
          <label className={styles.checkRow}>
            <input type="checkbox" /> I AGREE TO THE PRIVACY POLICY AND TERMS OF
            SERVICE.
          </label>
        </form>
      </section>
    </div>
  );
}
