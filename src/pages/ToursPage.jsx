import styles from "./ToursPage.module.css";
import heroImage from "../assets/tours/screen.png";
import CropImage from "../components/CropImage";

const tours = [
  {
    name: "THE ZEN PATHWAY",
    label: "CULTURAL",
    location: "KYOTO, JAPAN",
    duration: "4 DAYS",
    price: "$1,250",
    position: "20% 30%",
  },
  {
    name: "KARST FRONTIER",
    label: "JEEP RIDE",
    location: "GUILIN, CHINA",
    duration: "6 DAYS",
    price: "$2,100",
    position: "44% 40%",
  },
  {
    name: "SUMMIT SERENITY",
    label: "HIKING",
    location: "BANFF, CANADA",
    duration: "5 DAYS",
    price: "$1,850",
    position: "78% 35%",
  },
  {
    name: "AEGEAN FLAVORS",
    label: "GASTRONOMY",
    location: "SANTORINI, GREECE",
    duration: "3 DAYS",
    price: "$980",
    position: "21% 67%",
  },
  {
    name: "COASTAL HIGHWAY",
    label: "JEEP RIDE",
    location: "CALIFORNIA, USA",
    duration: "7 DAYS",
    price: "$2,400",
    position: "56% 67%",
  },
];

export default function ToursPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>SEASON 2024</span>
          <h1>OUR CURATED TOURS</h1>
          <p>
            Beyond the standard routes. We've meticulously designed each journey
            to immerse you in the authentic soul of every destination, guided by
            those who call it home.
          </p>
          <div className={styles.stat}>
            <strong>70+</strong>
            <span>ACTIVE TOURS</span>
          </div>
        </div>
      </section>

      <section className={styles.filters}>
        {[
          "ALL EXPERIENCES",
          "HIKING",
          "CULTURAL",
          "JEEP RIDE",
          "GASTRONOMY",
        ].map((item, index) => (
          <button
            key={item}
            className={index === 0 ? styles.activeFilter : styles.filter}
            type="button"
          >
            {item}
          </button>
        ))}
      </section>

      <section className={styles.grid}>
        {tours.slice(0, 3).map((tour) => (
          <article key={tour.name} className={styles.tourCard}>
            <CropImage
              src={heroImage}
              alt={tour.name}
              position={tour.position}
              ratio="0.92 / 1.1"
            />
            <div className={styles.overlay}>
              <span>{tour.label}</span>
              <strong>{tour.name}</strong>
              <dl>
                <div>
                  <dt>DURATION</dt>
                  <dd>{tour.duration}</dd>
                </div>
                <div>
                  <dt>PRICE</dt>
                  <dd>{tour.price}</dd>
                </div>
              </dl>
              <a href="/journal">EXPLORE TOUR →</a>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.altBlock}>
        <div className={styles.gridBottom}>
          <article className={styles.tourCard}>
            <CropImage
              src={heroImage}
              alt="Santorini alley"
              position="21% 73%"
              ratio="0.92 / 1.08"
            />
            <div className={styles.overlay}>
              <span>{tours[3].label}</span>
              <strong>{tours[3].name}</strong>
              <dl>
                <div>
                  <dt>DURATION</dt>
                  <dd>{tours[3].duration}</dd>
                </div>
                <div>
                  <dt>PRICE</dt>
                  <dd>{tours[3].price}</dd>
                </div>
              </dl>
              <a href="/journal">EXPLORE TOUR →</a>
            </div>
          </article>

          <article className={styles.tourCard}>
            <CropImage
              src={heroImage}
              alt="Golden Gate Bridge"
              position="54% 73%"
              ratio="0.92 / 1.08"
            />
            <div className={styles.overlay}>
              <span>{tours[4].label}</span>
              <strong>{tours[4].name}</strong>
              <dl>
                <div>
                  <dt>DURATION</dt>
                  <dd>{tours[4].duration}</dd>
                </div>
                <div>
                  <dt>PRICE</dt>
                  <dd>{tours[4].price}</dd>
                </div>
              </dl>
              <a href="/journal">EXPLORE TOUR →</a>
            </div>
          </article>

          <article className={styles.customCard}>
            <div className={styles.icon}>◌</div>
            <h2>CRAFT YOUR OWN JOURNEY</h2>
            <p>
              Can't find exactly what you're looking for? Our travel architects
              can design a completely bespoke itinerary tailored to your
              specific interests and pace.
            </p>
            <a href="/about">START CUSTOM INQUIRY →</a>
          </article>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>READY FOR ADVENTURE?</h2>
        <a href="/destinations">REQUEST GROUP QUOTE →</a>
      </section>
    </div>
  );
}
