import { createBrowserRouter } from "react-router";
import { Landing } from "../app/landing/landing";
import { Characters } from "../app/characters/characters";
import { RickMortyLayout } from "../common/layouts/rick-morty-layout";
import { Character } from "../app/characters/character";
import { Favorite } from "../app/favorite/favorite";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RickMortyLayout,
        children: [
            {
                index: true,
                Component: Landing
            },
            {
                path: "characters",
                Component: Characters
            },
            {
                path: "character/:id",
                Component: Character
            },
            {
                path: "favorite-characters",
                Component: Favorite
            }
        ]
    }
])