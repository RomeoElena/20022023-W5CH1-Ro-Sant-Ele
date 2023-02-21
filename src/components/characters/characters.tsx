import { SyntheticEvent, useContext } from "react";
import "./character.css";
import { AppContext } from "../../context/app.context";
import { Link } from "react-router-dom";

export function Characters() {
  const { characters } = useContext(AppContext);
  const { characterDetail } = useContext(AppContext);

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLElement;
    characterDetail.name = element.title;
  };

  return (
    <>
      <h2>Characters and films participation</h2>
      <ul className="characters">
        {characters.map((item) => (
          <li key={item.name} title={item.name}>
            {item.name}
            <div>
              <Link to="/details" title={item.name} onClick={handleClick}>
                {item.numOfFilms}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
