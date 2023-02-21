import { useEffect, useState } from "react";
import { AppContext, AppContextStructure } from "./app.context";
import { getAll, getCharacter } from "../services/api.repo";
import { CharacterStructure } from "../models/character";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);
  const [characterDetail, setCharacterDetail] = useState<CharacterStructure>({
    films: ["void"],
    height: "100",
    name: "Initial Character",
    numOfFilms: 65,
  });
  const [pageNumber, setPageNumber] = useState<string>("1");

  useEffect(() => {
    const loadCharacters = async () => {
      const characters = await getAll();
      console.log(characters);
      setCharacters(characters);
    };
    const getCharacterDetail = async (clickName: string) => {
      const characterDetail = await getCharacter(clickName);
      console.log(characterDetail);
      setCharacterDetail(characterDetail);
    };

    // setCharacterDetail({
    //   name: "filter not working",
    //   height: "filter not working",
    //   films: ["filter not working"],
    //   numOfFilms: 0,
    // });

    loadCharacters();
    getCharacterDetail("C-3PO");
  }, []);

  const context: AppContextStructure = {
    characters,
    characterDetail,
    pageNumber,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
