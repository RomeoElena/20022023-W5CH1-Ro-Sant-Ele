import { API_URL_ALL, API_URL_PEOPLE } from "../config";
import { CharacterStructure, CharacterResponse } from "../models/character";

export const getAll = async (): Promise<CharacterStructure[]> => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CharacterResponse[] = await response.json();

  console.log(data.results);
  return data.results.map((item) => {
    return {
      name: item.name,
      height: item.height,
      films: item.films,
      numOfFlims: "7",
    };
  });
};

export const getCharacter = async (name: string): Promise<any> => {
  const url = API_URL_PEOPLE + name;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: CharacterResponse = await response.json();
  return data;
};
