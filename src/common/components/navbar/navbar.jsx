import { Link } from "react-router";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <header>
      <nav className={styles.container}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/characters" className={styles.link}>
          Characters
        </Link>
        <Link to="/favorite-characters" className={styles.link}>
          Favorite characters
        </Link>

      </nav>
    </header>
  );
}
