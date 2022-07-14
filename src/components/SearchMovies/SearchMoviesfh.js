import React from "react";
import { useForm } from "../../utils/useForm";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
//import { CardMovies } from "../cardMovies/CardMovies";
// se debe instalar npm install query-string
import queryString from "query-string";
import { useMemo } from "react";
import { getFilmsByName } from "../../utils/getFilmsByName";

export const SearchMovies = () => {
  // estado inicialValue de formValue es searchText que esta en el useform lo desetructuro.
  const [formValue, handleInputChange, reset] = useForm({ searchText: "" });
  //destructuring
  const { searchText } = formValue;
  //PARA OBTENER LA NAVEGACION
  const navegate = useNavigate();
  //LOCALIZACION DONDE NOS ENCONTRAMOS
  const location = useLocation();
  console.log(location);
  //constate para buscar despues de instalar el queryString
  //const query = queryString.parse(location.search);
  //console.log(query);
  ///lo dEsestruturo - LO QUERY SON OPCIONALES Y SON STRING
  const { q = "" } = queryString.parse(location.search);
  console.log(q);

  const HandleSearch = (e) => {
    //evita propagacion y full refresh
    e.preventDefault();

    if (searchText.trim().length <= 1) return;
    console.log({ searchText });
    //direcciona a otra pagina la barra de direcciones del navegador

    navegate(`?q=${searchText}`);
  };

  return (
    <>
      <hr style={{ color: " white" }} />
      <h1 className="mx-4" style={{ color: " white" }}>
        Search
      </h1>
      <hr style={{ color: " white" }} />
      <div className="row mx-4">
        <div className="col-5">
          <form onSubmit={HandleSearch}>
            <input
              type="text"
              placeholder="Buscar"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
            ></input>

            <button type="submit" className="btn btn-primary mt-2">
              Buscar... <FaSearch size={25} />
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado de la busqueda</h4>
          <hr />
          <div className="alert alert-primary">Search a films</div>
          <div className="alert alert-danger">
            Ther's no herop whit <b>{q} </b>
          </div>
        </div>
      </div>
    </>
  );
};
