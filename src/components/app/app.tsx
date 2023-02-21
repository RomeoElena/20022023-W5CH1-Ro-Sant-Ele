// import { Route, Routes } from "react-router-dom";
import { AppRouter } from "../app.router/app.router";
// import { Characters } from "../characters/characters";
// import { Details } from "../details/details";
import { Nav } from "../nav/nav";

export type MenuOption = {
  label: string;
  path: string;
};
export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Characters", path: "/characters" },
  { label: "Details", path: "/details" },
];
export function App() {
  return (
    <div>
      <Nav options={menuOptions}></Nav>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </div>
  );
}

// <h1>Personajes Star Wars</h1>
// <Routes>
//   <Route path="/" element={<App></App>}></Route>
//   <Route path="/characters" element={<Characters></Characters>}></Route>
//   <Route path="/details" element={<Details></Details>}></Route>
//   {/* <Route path="/details/:name" element={<Details></Details>}></Route> */}
// </Routes>
