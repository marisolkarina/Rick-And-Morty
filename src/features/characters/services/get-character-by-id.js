export const getCharacterById = async (characterId) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
  );

  if (!response.ok) {
    throw new Error(`Error getting the character with id ${characterId}`);
  }

  return response.json();
};
