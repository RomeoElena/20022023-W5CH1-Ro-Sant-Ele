import { useContext } from "react";
import "./character.css";
import { AppContext } from "../../context/app.context";

export function Characters() {
  const { characters } = useContext(AppContext);

  return (
    <>
      <h2>Characters</h2>
      <ul>
        {characters.map((item) => (
          <li key={item.name} title={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
