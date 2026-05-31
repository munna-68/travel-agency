import styles from "./About.module.css";

const curators = [
  {
    role: "FOUNDER & CEO",
    name: "MARCUS THORNE",
    image: "/img/curator-marcus.svg",
  },
  {
    role: "HEAD OF CONTENT",
    name: "ELENA ROSSI",
    image: "/img/curator-elena.svg",
  },
  {
    role: "LEAD EXPEDITIONIST",
    name: "SIDDHARTH MEHTA",
    image: "/img/curator-siddharth.svg",
  },
  {
    role: "OPERATIONS DIRECTOR",
    name: "CHLOE CHEN",
    image: "/img/curator-chloe.svg",
  },
];

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span>BEYOND</span>
            <span>THE MAP</span>
          </h1>

          <p className={styles.heroCopy}>
            Since 2014, we’ve been curating journeys that transcend traditional
            tourism. We believe the best stories aren’t found in guidebooks, but
            in the quiet corners of the world shared by those who call it home.
          </p>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <img
            className={styles.philosophyImage}
            src="/img/about-philosophy.svg"
            alt=""
          />

          <div className={styles.philosophyContent}>
            <h2 className={styles.sectionTitle}>OUR PHILOSOPHY</h2>
            <p className={styles.body}>
              We don’t just sell trips; we foster connections. Local Explorer
              was founded on the radical idea that travel should be a two-way
              exchange of culture, respect, and wonder.
            </p>
            <p className={styles.body}>
              Every destination in our portfolio is vetted by our team
              personally. We spend weeks on the ground, vetting partners,
              tasting menus, and finding the hidden trailheads that aren’t
              marked on any digital map.
            </p>

            <ul className={styles.values}>
              <li>100% LOCAL GUIDES</li>
              <li>CARBON NEUTRAL FOOTPRINT</li>
              <li>CULTURAL PRESERVATION PROJECTS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Local Explorer stats">
        <dl className={styles.statsGrid}>
          <div className={styles.statItem}>
            <dt>12</dt>
            <dd>YEARS EXPLORING</dd>
          </div>
          <div className={styles.statItem}>
            <dt>45+</dt>
            <dd>COUNTRIES</dd>
          </div>
          <div className={styles.statItem}>
            <dt>2.4K</dt>
            <dd>MEMORIES MADE</dd>
          </div>
          <div className={styles.statItem}>
            <dt>100%</dt>
            <dd>LOCAL IMPACT</dd>
          </div>
        </dl>
      </section>

      <section className={styles.curators}>
        <div className={styles.curatorsInner}>
          <div className={styles.curatorsHeader}>
            <h2 className={styles.sectionTitle}>THE CURATORS</h2>
            <p className={styles.curatorsIntro}>
              A collective of photographers, writers, and explorers united by a
              single obsession: discovery.
            </p>
          </div>

          <div className={styles.curatorGrid}>
            {curators.map((curator) => (
              <article className={styles.curatorCard} key={curator.name}>
                <img
                  className={styles.curatorImage}
                  src={curator.image}
                  alt=""
                />
                <p className={styles.curatorRole}>{curator.role}</p>
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
            src="/img/about-story.svg"
            alt=""
          />
          <div className={styles.storyOverlay}>
            <h2 className={styles.storyTitle}>START YOUR STORY</h2>
            <a className={styles.storyButton} href="/tours">
              EXPLORE TOURS →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
