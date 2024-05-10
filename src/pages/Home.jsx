import styled from "styled-components";
import Character from "../components/Character";
import { useEffect } from "react";
import { API_BASE_URL } from "../utils/config";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useCharacter } from "../hooks/useCharacter";

const StyledCharacterContainer = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: repeat(4, 140px);
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

const Div = styled.div`
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-weight: 600;
`;

const SearchTitle = styled.span``;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;

  const { dispatch, searchResults } = useCharacter();

  useEffect(
    function () {
      setLoading(true);
      async function fetchCharacters() {
        const res = await fetch(`${API_BASE_URL}/characters`);
        const data = await res.json();
        if (!res.ok) return;
        setCharacters(data);
        dispatch({ type: "characters/load", payload: data });
        setLoading(false);
      }

      fetchCharacters();
    },
    [dispatch]
  );

  const lastPostIndex = currentPage * charactersPerPage;
  const firstPostIndex = lastPostIndex - charactersPerPage;

  const currentCharacters = characters.slice(firstPostIndex, lastPostIndex);
  const currentSearchResults = searchResults?.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div>
      {searchResults !== null && (
        <Div>
          <SearchTitle>
            {searchResults.length > 0 ? (
              <>
                <Span>1</Span>
                <span> Characters Found</span>
              </>
            ) : (
              "No Characters Found"
            )}
          </SearchTitle>
        </Div>
      )}
      <StyledCharacterContainer>
        {searchResults === null &&
          (loading
            ? "Loading"
            : currentCharacters?.map((character) => (
                <Character key={character.id} character={character} />
              )))}

        {/* Show Search Results */}

        {searchResults !== null &&
          currentSearchResults.map((character) => (
            <Character key={character.id} character={character} />
          ))}
      </StyledCharacterContainer>

      {/* Pagination */}
      {((searchResults !== null && searchResults.length > 0) ||
        (searchResults === null && characters)) && (
        <Pagination
          charactersPerPage={charactersPerPage}
          setCurrentPage={setCurrentPage}
          totalCharacters={
            searchResults === null ? characters.length : searchResults.length
          }
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Home;
