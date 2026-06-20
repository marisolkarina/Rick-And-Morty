import { useState } from "react";
import { FavoriteContext } from "./favorite-context";

export function FavoriteProvider({ children }) {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    const isFavorite = (characterId) => favoriteCharacters.some(c => c.id === characterId); // boolean

    const addOrRemoveFavorite = (character) => {
        const exists = favoriteCharacters.some(
            item => item.id === character.id
        );

        if (exists) {
            removeFavorite(character.id);
        } else {
            addFavorite(character);
        }
    };

    const addFavorite = (character) => {
        setFavoriteCharacters(
            (prevCharacters) => {
                const exists = prevCharacters.some(c => c.id === character.id); // boolean

                if (exists) { 
                    return prevCharacters;
                }

                return [...prevCharacters, character]; // añadimos el new character
            }
        );
    };

    const removeFavorite = (characterId) => {
        setFavoriteCharacters(
            (prevCharacters) => prevCharacters.filter(c => c.id !== characterId)
        );
    };

    return (
        <FavoriteContext.Provider value={{ favoriteCharacters, addFavorite, removeFavorite, isFavorite, addOrRemoveFavorite }} >
            {children}
        </FavoriteContext.Provider>
    );
}

