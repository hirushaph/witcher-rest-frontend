import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

export function useCharacter() {
  const character = useContext(CharacterContext);
  if (character === undefined) {
    throw new Error(
      "Character context was used outside the character provider"
    );
  }
  return character;
}
