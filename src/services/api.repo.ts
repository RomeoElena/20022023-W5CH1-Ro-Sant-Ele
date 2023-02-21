import { API_URL_ALL } from "../config";
import { CharacterStructure, CharacterResponse } from "../models/character";

export const getAll = async (): Promise<CharacterStructure[]> => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CharacterResponse = await response.json();

  console.log(data.results);
  // console.log(data.results[0].films.length);
  return data.results.map((item) => {
    return {
      name: item.name,
      height: item.height,
      films: item.films,
      numOfFilms: item.films.length,
    };
  });
};

export const getCharacter = async (clickName: string): Promise<any> => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CharacterResponse = await response.json();
  return data.results.filter((item) => item.name === clickName)[0];
};
