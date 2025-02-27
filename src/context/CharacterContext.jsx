import { useReducer } from "react";
import { createContext } from "react";

export const CharacterContext = createContext(undefined);

const characterReducer = (state, action) => {
  switch (action.type) {
    case "character/open":
      return { ...state, character: action.payload };
    case "characters/loading":
      return { ...state, loading: true };
    case "characters/loaded":
      return { ...state, characters: action.payload, loading: false };
    case "characters/search":
      return { ...state, searchResults: action.payload };
    case "characters/clearSearch":
      return { ...state, searchResults: null };
    default:
      return state;
  }
};

export function CharacterContextProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, {
    character: null,
    characters: null,
    searchResults: null,
    loading: false,
  });

  return (
    <CharacterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
}
