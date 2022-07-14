import { Fetch } from "../../src/utils/Fetch";
import { useEffect, useState } from "react";
//import { Spinner2 } from "./Spinner2";

export const getFilmsByName = (name = "") => {
  //elimino espacion adelante y atras
  //lo asigno a la  constante name
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  const [movies, setMovies] = useState([]);

  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //al cargar la api esta en true y muestra el spinner
      setisLoading(true);
      // const urlSearch = "/search/movie?=query=" + name;
      Fetch("/search/movie?query=" + name).then((data) => {
        // Fetch("/discover/movie").then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setisLoading(false);
      });
    }, 1500);
  }, []);

  console.log("NNN", movies);
  return movies.filter((film) => film.title.toLocaleLowerCase().includes(name));
};
