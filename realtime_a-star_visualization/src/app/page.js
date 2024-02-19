import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Realtime A* Visualization</h1>
      <p className={styles.description}>
        This is a realtime A* visualization using React and Next.js.
      </p>
    </main>
  );
}
