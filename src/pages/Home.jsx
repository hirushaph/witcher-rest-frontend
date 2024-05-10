import styled from "styled-components";
import Character from "../components/Character";
import { useEffect } from "react";
import { API_BASE_URL } from "../utils/config";
import { useState } from "react";
import Pagination from "../components/Pagination";

const StyledCharacterContainer = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: repeat(4, 140px);
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const charactersPerPage = 8;

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

  const lastPostIndex = currentPage * charactersPerPage;
  const firstPostIndex = lastPostIndex - charactersPerPage;

  const currentCharacters = characters.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <StyledCharacterContainer>
        {loading
          ? "Loading"
          : currentCharacters?.map((character) => (
              <Character key={character.id} character={character} />
            ))}
      </StyledCharacterContainer>

      <Pagination
        charactersPerPage={charactersPerPage}
        setCurrentPage={setCurrentPage}
        totalCharacters={characters.length}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Home;
