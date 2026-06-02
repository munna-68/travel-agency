import styles from "./HomePage.module.css";

const heroImage = "/img/screen/home/screen.png";

export default function HomePage() {
  return (
    <section className={styles.page}>
      <div className={styles.stage}>
        <div className={styles.frame}>
          <img
            className={styles.image}
            src={heroImage}
            alt="Mountain landscape at sunrise"
          />
        </div>
      </div>
    </section>
  );
}
