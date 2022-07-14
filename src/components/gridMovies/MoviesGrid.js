import React, { useEffect, useState } from "react";
import { Fetch } from "../../utils/Fetch";
import { Spinner2 } from "../../utils/Spinner2";
import { CardMovies } from "../cardMovies/CardMovies";
//import movies from "../Data/movies.json";
import styles from "./MoviesGrid.module.css";

export const MoviesGrid = () => {
  //creo un estado
  const moviesState = useState([]);
  const [movies, setMovies] = moviesState;
  //activa el spiner para cargar las peliculas
  const [isloading, setisLoading] = useState(true);

  //let movies = [];
  //hago la llamda al la API por que no se pueden llamar lo fetch directamente desde el jsx
  useEffect(() => {
    setTimeout(() => {
      //al cargar la api esta en true y miestra el spinner
      setisLoading(true);
      Fetch("/discover/movie").then((data) => {
        setMovies(data.results);
        console.log("JX", data.results);
        // console.log("jj", movies);
        setisLoading(false);
      });
    }, 1500);
  }, []);

  if (isloading) {
    return <Spinner2 />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((pelis) => (
        <CardMovies key={pelis.id} pelis={pelis} />
      ))}
    </ul>
  );
};
