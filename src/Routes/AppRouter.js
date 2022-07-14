import React from "react";
import { Route, Routes } from "react-router-dom";
import { MoviesGrid } from "../components/gridMovies/MoviesGrid";
import { NavBar } from "../components/iu/NavBar";
import { NotMatch } from "../components/NotMatch/NotMatch";
import { SearchMovies } from "../components/SearchMovies/SearchMovies";
import { AboutMovies } from "../pages/AboutMovies";
import { ScreenMovies } from "../pages/ScreenMovies";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<MoviesGrid />} />
        <Route path="screenMovies/:movieId" element={<ScreenMovies />} />
        <Route path="about" element={<AboutMovies />} />
        <Route path="search" element={<SearchMovies />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
