export const getCharacters = async (page=1) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

  if (!res.ok) {
    throw new Error("Error getting characters");
  }

  return res.json();
};