import { Link } from "react-router";
import styles from "./character-card.module.css";
import { useFavorite } from "../../../features/characters/store/use-favorite";

export function CharacterCard({character}) {
    const { id, name, gender, species, origin, location, image, status } = character;

    const { addFavorite, removeFavorite, isFavorite } = useFavorite();

    return(
        <div className={styles.card}>
            <Link
                to={`/character/${id}`}
                className={styles.container}
                style={{ justifySelf: "flex-end" }}
            >
                <img src={image} alt={name} />
                
            </Link>
            <div className={styles.divButton}>
                <h3>{name}</h3>
                {
                    isFavorite(character.id) ? (
                        <button 
                            className={styles.favoriteButton}
                            onClick={() => removeFavorite(character.id)}
                        >
                            💖
                        </button>
                    ) : (
                        <button 
                            className={styles.favoriteButton}
                            onClick={() => addFavorite(character)}
                        >
                            🩶
                        </button>
                    )
                }
                
            </div>
            
            
            <p><span>Gender:</span> {gender}</p>
            <p><span>Status:</span> {status}</p>
            <p><span>Species:</span> {species}</p>
            <p><span>Origin:</span> {origin.name}</p>
            <p><span>Location:</span> {location.name}</p>
        </div>
            
    );
}