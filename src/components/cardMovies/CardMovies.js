import React from "react";
import style from "./Movies.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spinner2 } from "../../utils/Spinner2";

export const CardMovies = ({ pelis }) => {
  const {
    title,
    overview,
    popularity,
    adult,
    backdrop_path,
    genre_ids,
    original_language,
    poster_path,
    id,
  } = pelis;

  //className="card my-2 mx-1 col-3 animate__animated animate__fadeInTopLeft"
  const imgUrl = "https://image.tmdb.org/t/p/w300" + pelis.poster_path;
  //console.log(imgUrl);
  return (
    <>
      <li className={style.cardMovies}>
        <Link to={`screenMovies/${id}`}>
          <img
            className={style.movieImage}
            width={250}
            height={395}
            src={imgUrl}
            alt={title}
          ></img>
        </Link>
        <div className="text-center fs-6 " style={{ color: "white" }}>
          <strong>{title}</strong>
          <strong> Visualizaciones :{popularity}</strong>
        </div>
      </li>
    </>
  );
};
