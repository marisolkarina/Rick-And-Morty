import { ButtonPages } from "../../../common/components/button-pages/button-pages";
import { CharacterCard } from "../../../common/components/character-card/character-card";
import { useCharacters } from "../hooks/use-characters";
import styles from "./characters.module.css";

export function CharactersPage() {
    const { characters, loading, error, page, setPage } = useCharacters();

    if (error) return <h1>{error}</h1>;

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            <ButtonPages page={page} setPage={setPage}/>
            <div className={styles.container}>
                {
                    characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))
                }
            </div>
        </>
    );
}