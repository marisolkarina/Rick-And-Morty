import styles from "./landing.module.css";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <h1>Rick and Morty</h1>
      <p>Explore characters from the multiverse</p>
    </div>
  );
}