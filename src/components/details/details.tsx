import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app.context";
import { getCharacter } from "../../services/api.repo";

export function Details() {
  const { name } = useParams();

  const { characters } = useContext(AppContext);
  const [character, setCharacter] = useState<{ [key: string]: any }>();

  const contextCharacter = characters.find((item) => item.name === "name");

  useEffect(() => {
    const loadCharacter = async () => {
      const character = await getCharacter(name as string);
      console.log(character);
      setCharacter(character);
    };
    loadCharacter();
  }, [name]);

  if (character === undefined) {
    return <>🌀 Loading</>;
  }

  return (
    <>
      <h2>Detalles de {"name"}</h2>
      <p>Nombre: {contextCharacter?.name}</p>
      <p>Altura: {contextCharacter?.height}</p>
      <p>Películas: {contextCharacter?.films}</p>
      <p>N. de películas: {contextCharacter?.films}</p>
    </>
  );
}
