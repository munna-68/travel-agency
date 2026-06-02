import styles from "./AboutPage.module.css";
import CropImage from "../components/CropImage";
import NavLink from "../components/NavLink";

const heroImage = "/img/screen/about/screen.png";

const curators = [
  { name: "Marcus Thorne", role: "Founder & CEO", position: "18% 58%" },
  { name: "Elena Rossi", role: "Head of Content", position: "38% 57%" },
  { name: "Siddharth Mehta", role: "Lead Expeditionist", position: "56% 59%" },
  { name: "Chloe Chen", role: "Operations Director", position: "81% 59%" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>BEYOND THE MAP</h1>
          <p className={styles.intro}>
            Since 2014, we've been curating journeys that transcend traditional
            tourism. We believe the best stories aren't found in guidebooks, but
            in the quiet corners of the world shared by those who call it home.
          </p>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyGrid}>
          <CropImage
            src={heroImage}
            alt="Temple steps framed by red trees"
            position="18% 29%"
            ratio="1 / 1.12"
            className={styles.philosophyImage}
          />

          <div className={styles.philosophyCopy}>
            <p className={styles.kicker}>OUR PHILOSOPHY</p>
            <h2>
              We don't just sell trips; we foster connections. Local Explorer
              was founded on the radical idea that travel should be a two-way
              exchange of culture, respect, and wonder.
            </h2>
            <p>
              Every destination in our portfolio is vetted by our team
              personally. We spend weeks on the ground, vetting partners,
              tasting menus, and finding the hidden trailheads that aren't
              marked on any digital map.
            </p>
            <ul className={styles.checklist}>
              <li>100% LOCAL GUIDES</li>
              <li>CARBON NEUTRAL FOOTPRINT</li>
              <li>CULTURAL PRESERVATION PROJECTS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>12</strong>
          <span>YEARS EXPLORING</span>
        </div>
        <div>
          <strong>45+</strong>
          <span>COUNTRIES</span>
        </div>
        <div>
          <strong>2.4K</strong>
          <span>MEMORIES MADE</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>LOCAL IMPACT</span>
        </div>
      </section>

      <section className={styles.curatorsSection}>
        <div className={styles.sectionHeader}>
          <h2>THE CURATORS</h2>
          <p>
            A collective of photographers, writers, and explorers united by a
            single obsession: discovery.
          </p>
        </div>

        <div className={styles.curatorsGrid}>
          {curators.map((curator) => (
            <article key={curator.name} className={styles.curatorCard}>
              <CropImage
                src={heroImage}
                alt={curator.name}
                position={curator.position}
                ratio="3 / 4"
              />
              <div className={styles.curatorMeta}>
                <span>{curator.role}</span>
                <strong>{curator.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaImageWrap}>
          <img
            src={heroImage}
            alt="Mountain lake and jagged peaks"
            className={styles.ctaImage}
          />
          <div className={styles.ctaOverlay}>
            <h2>START YOUR STORY</h2>
            <NavLink to="/tours" className={styles.button}>
              EXPLORE TOURS →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
