import { useContext } from "react";
import "./character.css";
import { AppContext } from "../../context/app.context";
import { Link } from "react-router-dom";

export function Characters() {
  const { characters } = useContext(AppContext);

  return (
    <>
      <h2>Characters and films presence</h2>
      <ul className="characters">
        {characters.map((item) => (
          <li key={item.name} title={item.name}>
            {item.name}
            <div>
              <Link to="/details">{item.numOfFlims}</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
