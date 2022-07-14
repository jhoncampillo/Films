import "./App.css";
import React from "react";
import style from "./App.module.css";
import { AppRouter } from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1 className={style.appMovies}>Movies</h1>
      </header>
      <main>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
