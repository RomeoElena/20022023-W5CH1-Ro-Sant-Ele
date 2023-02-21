export type ProtoCharacterStructure = {
  name: string;
  height: string;
  films: string[];
};

export type CharacterStructure = {
  name: string;
  height: string;
  films: string[];
  numOfFilms: number;
};

export type CharacterResponse = {
  count: string;
  next: string;
  previous: string;
  results: {
    name: string;
    height: string;
    films: string[];
  }[];
};
