import { useReducer } from "react";
import { createContext } from "react";

export const CharacterContext = createContext(undefined);

const characterReducer = (state, action) => {
  switch (action.type) {
    case "character/open":
      return { ...state, character: action.payload };
    default:
      return state;
  }
};

export function CharacterContextProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, {
    character: null,
  });

  return (
    <CharacterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
}
