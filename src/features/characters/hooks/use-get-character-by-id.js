import { useEffect, useState } from "react";
import { getCharacterById } from "../services/get-character-by-id";

export function useGetCharacterById({ characterId }) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacterById(characterId)
      .then(setCharacter)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [characterId]);

  return {
    character,
    loading,
    error,
  };
}
