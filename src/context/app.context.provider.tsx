import { useEffect, useState } from "react";
import { AppContext, AppContextStructure } from "./app.context";
import { getAll } from "../services/api.repo";
import { CharacterStructure } from "../models/character";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const [characterDetail, setCharacterDetail] = useState<CharacterStructure>({
    films: ["nunca"],
    height: "27",
    name: "loque quieras",
    numOfFlims: 65,
  });
  const [pageNumber, setPageNumber] = useState<string>("1");

  useEffect(() => {
    const loadCharacters = async () => {
      const characters = await getAll();
      console.log(characters);
      setCharacters(characters);
    };

    loadCharacters();
  }, []);

  const context: AppContextStructure = {
    characters,
    characterDetail,
    pageNumber,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
