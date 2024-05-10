import styled from "styled-components";
import Character from "../components/Character";
import { useEffect } from "react";
import { API_BASE_URL } from "../utils/config";
import { useState } from "react";

const StyledHome = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    setLoading(true);
    async function fetchCharacters() {
      const res = await fetch(`${API_BASE_URL}/characters`);
      const data = await res.json();
      if (!res.ok) return;
      setCharacters(data);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  return (
    <StyledHome>
      {loading
        ? "Loading"
        : characters?.map((character) => (
            <Character key={character.id} character={character} />
          ))}
    </StyledHome>
  );
}

export default Home;
