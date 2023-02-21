import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app.context";
// import { getCharacter } from "../../services/api.repo";

export function Details() {
  const { characterDetail } = useContext(AppContext);

  if (characterDetail === undefined) {
    return <>🌀 Loading</>;
  }

  return (
    <>
      <h2>Details of </h2>
      <p>Name: {characterDetail?.name}</p>
      <p>Height: {characterDetail?.height}</p>
      <p>First Film: {characterDetail?.films.join()}</p>
      <p>Number of films: {characterDetail?.numOfFilms}</p>
    </>
  );
}
