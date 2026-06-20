import { useContext } from "react";
import { FavoriteContext } from "../../../context/favorite-provider/favorite-context";

export function useFavorite() {
    const { favoriteCharacters, addFavorite, removeFavorite, isFavorite, addOrRemoveFavorite } = useContext(FavoriteContext);
    return {
        favoriteCharacters, addFavorite, removeFavorite, isFavorite, addOrRemoveFavorite
    }
}