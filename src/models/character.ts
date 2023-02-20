export type CharacterStructure = {
  name: string;
  height: string;
  films: string[];
  numOfFlims: number;
};

export type CharacterResponse = {
  results: {
    name: string;
    height: string;
    films: string[];
  };
};
