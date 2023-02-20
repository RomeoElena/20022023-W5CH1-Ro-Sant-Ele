export type CharacterStructure = {
  name: string;
  height: string;
  films: string[];
  numOfFlims: number;
};

export type CharacterResponse = {
  count: string;
  next: string;
  previous: string;
  results: {
    name: string;
    height: string;
    films: string[];
  };
};
