import { createContext } from "react";
import { CharacterStructure } from "../models/character";

export type AppContextStructure = {
  characters: CharacterStructure[];
  characterDetail: CharacterStructure;
  pageNumber: string;
};

const initialContext = {} as AppContextStructure;
export const AppContext = createContext(initialContext);
