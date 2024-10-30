import Card from "./components/Card/Card";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
