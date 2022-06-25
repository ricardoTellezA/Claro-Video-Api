import React, { useEffect } from "react";
import Search from "../Search/Search";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../actions/getMoviesAction";
import Movies from "../Movies/Movies";
import "./MovieLis.css";

const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // CONSULTAR API
    const uploadMovies = () => dispatch(getMoviesAction());
    uploadMovies();
  }, []);

  // OBTENER LAS PELICULAS
  const movies = useSelector((state) => state.movies.movies);
 
 return (
    <>
      <Search />
      <div className="movies">
        {movies && movies.length === 0 ? (
          <h1>Hubo un error :c</h1>
        ) : (
          movies && movies.length > 1 ? (movies.map((movie) => (
            <div>
              <Movies key={movie.id} movie={movie} />
            </div>
          ))) : (
            <Movies movie={movies[0].common} />
          )
        )}
      </div>
    </>
  );
};

export default MovieList;
