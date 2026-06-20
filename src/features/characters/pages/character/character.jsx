import { useParams } from "react-router";
import { useGetCharacterById } from "../../hooks/use-get-character-by-id";
import styles from "./character.module.css";
import { useFavorite } from "../../store/use-favorite";

export function CharacterPage() {
  const { id } = useParams();

  const { character, loading, error } = useGetCharacterById({ characterId: id });

  const { addOrRemoveFavorite, isFavorite } = useFavorite();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  const { name, gender, species, origin, location, image, status } = character;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={image}
          alt={name}
        />

        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{name}</h3>
            <button 
                className={styles.favoriteButton}
                onClick={() => addOrRemoveFavorite(character)}
            >
                { isFavorite(character.id) ? "💖" : "🩶" }
            </button>
          </div>

          <div className={styles.details}>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Status:</span> {status}</p>
            <p><span>Species:</span> {species}</p>
            <p><span>Origin:</span> {origin.name}</p>
            <p><span>Location:</span> {location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}