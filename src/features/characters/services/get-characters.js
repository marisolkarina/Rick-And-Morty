export const getCharacters = async ({
  page = 1,
  name = "",
  status = ""
}) => {

  const params = new URLSearchParams({
    page,
    ...(name && { name }),
    ...(status && { status })
  });

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?${params}`
  );

  if (!res.ok) {
    throw new Error("Characters not found");
  }

  return res.json();
};