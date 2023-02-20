import { Route, Routes } from "react-router-dom";
import { Characters } from "../characters/characters";
import { Details } from "../details/details";

export function App() {
  return (
    <div>
      <h1>Personajes Star Wars</h1>
      <Routes>
        <Route path="/" element={<Characters></Characters>}></Route>
        <Route path="/details/:name" element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}
