import React from "react";
import styles from "./screeMovies.module.css";
//import movie from "./movie.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fetch } from "../utils/Fetch";
//import { Spinner } from "../utils/Spinner";
import { Spinner2 } from "../utils/Spinner2";

export const ScreenMovies = () => {
  //Estado para LOADING
  const [loading, setLoading] = useState(true);

  //Uso el parametro para mandarlo al ScreeMovies
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  //este efecto llama la API

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      Fetch("/movie/" + movieId).then((data) => {
        setLoading(false);
        setMovie(data);
      });
    }, 2000);
  }, [movieId]);

  if (loading) {
    return <Spinner2 />;
  }

  if (!movie) {
    // return <Navigate to="/" />;
    return null;
  }

  const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;

  // console.log(imgUrl);
  // //;

  return (
    <div className={styles.detailsContainer} style={{ color: "white" }}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetaills}`}>
        <p className={styles.firstItem}>
          <strong>Title :</strong> {movie.title}
        </p>
        <p>
          <strong>Description :</strong> {movie.overview}
        </p>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    </div>
  );
};
