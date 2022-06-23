import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDescriptionAction } from "../../actions/movieDescriptionAction";
import "./Movies.css";

const Movies = ({ movie }) => {
  const dispatch = useDispatch();


  return (
    <div className="movie-container">
      <Link
        to={`/movieDescription/${movie.id}`}
        
      >
        <img src={movie.image_small} alt={movie.title} />
      </Link>
    </div>
  );
};

export default Movies;
