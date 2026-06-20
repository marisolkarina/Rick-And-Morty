import styles from "./filter.module.css";

export function Filter({
  status,
  setStatus
}) {
  return (
    <div className={styles.container}>


      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}