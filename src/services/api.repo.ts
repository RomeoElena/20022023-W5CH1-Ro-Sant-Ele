import { API_URL_ALL, API_URL_PEOPLE } from "../config";
import { CharacterStructure, CharacterResponse } from "../models/character"; } from "../models/character";

export const getAll = async (): Promise<CharacterStructure[]> => {
  const url = API_URL_ALL + "?fields=name,height,films,numOfFilms";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CharacterResponse[] = await response.json();
  return data.map((item) => {
    return {
      name: item.results.name,
      height: item.results.height,
      films: item.results.films,
      numOfFlims: item.results.films.length,

    };
  });
};


