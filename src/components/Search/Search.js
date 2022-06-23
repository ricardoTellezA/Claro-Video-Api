import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../actions/getMoviesAction";
import "./Search.css";

const Search = () => {
  const [movieName, setMovieName] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieName.length > 0) {
      dispatch(getMoviesAction(movieName));
    }
  }, [movieName]);

  return (
    <div className="search">
      <label>Buscar</label>
      <input onChange={(e) => setMovieName(e.target.value)} type="text" />
    </div>
  );
};

export default Search;
