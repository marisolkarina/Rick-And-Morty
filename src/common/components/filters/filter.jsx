import styles from "./filter.module.css";

export function Filter({
  name,
  setName,
  status,
  setStatus
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search character..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>{name}</p>

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