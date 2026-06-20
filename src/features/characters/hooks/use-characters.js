import { useEffect, useState } from "react";
import { getCharacters } from "../services/get-characters";

export function useCharacters() {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getCharacters({
      page,
      name,
      status
    })
      .then((data) => setCharacters(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

  }, [page, name, status]);

  return {
    error,
    loading,
    characters,
    page,
    setPage,
    name,
    setName,
    status,
    setStatus
  };
}
