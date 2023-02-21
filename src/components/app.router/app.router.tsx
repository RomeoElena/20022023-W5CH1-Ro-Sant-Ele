import { Route, Routes } from "react-router-dom";
// import { MenuOption } from "../app/App";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../pages/home/home"));
const Characters = lazy(() => import("../../pages/characters/characters"));
const Details = lazy(() => import("../../pages/details/details"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route
          path={menuOptions[1].path}
          element={<Characters></Characters>}
        ></Route>
        <Route path={menuOptions[2].path} element={<Details></Details>}></Route>
        <Route path={"/details"} element={<Details></Details>}></Route>
      </Routes>
    </Suspense>
  );
}
