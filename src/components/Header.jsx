import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { useCharacter } from "../hooks/useCharacter";

const StyledHeader = styled.header`
  background-color: var(--background-light);
  grid-column: 1/3;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 0 10px 0px rgba(var(--dark-shadow), 0.1);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 70px;
`;

const IconContainer = styled.div`
  justify-self: self-end;
`;

const SearchBarContainer = styled.div`
  justify-self: center;
`;

const H2 = styled.h2`
  font-weight: 500;
`;

const Input = styled.input`
  border: 1px solid var(--border-color);
  width: 300px;
  padding: 12px 20px;
  border-radius: 8px 0 0 8px;
  outline: none;

  &:hover {
    box-shadow: 0 2px 10px -3px rgba(var(--dark-shadow), 0.1);
  }

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;

function Header() {
  const [search, setSearch] = useState("");
  const { characters, dispatch } = useCharacter();

  function handleSearch(e) {
    setSearch(e.target.value);

    const query = e.target.value.toLowerCase().trim();

    if (!query || query === "") {
      return dispatch({ type: "characters/clearSearch" });
    }

    const filterd = characters.filter(
      (character) =>
        character.name.toLowerCase().includes(query) ||
        character.title.toLowerCase().includes(query)
    );
    dispatch({ type: "characters/search", payload: filterd });
  }

  return (
    <StyledHeader>
      <Container className="container">
        <H2>WitcherRest</H2>

        <SearchBarContainer className="searchBar">
          <Input
            type="search"
            placeholder="Search Character"
            name="search"
            className="searchbar"
            value={search}
            onChange={handleSearch}
          />
        </SearchBarContainer>

        <IconContainer className="icons">
          <FaGithub />
        </IconContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
