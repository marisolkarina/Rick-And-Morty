import { CharacterCard } from "../../../common/components/character-card/character-card";
import { useFavorite } from "../../characters/store/use-favorite";
import styles from "./favorite.module.css";


export function FavoritePage() {
    const { favoriteCharacters } = useFavorite();

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>My favorite characters</h1>

            {
                favoriteCharacters.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>There're not favorite characters.</p>
                    </div>
                ) : (
                    <div className={styles.container}>
                        {
                            favoriteCharacters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}