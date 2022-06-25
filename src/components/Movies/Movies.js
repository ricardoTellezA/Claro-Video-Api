import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {


  return (
    <div className="movie-container">
      <Link
        to={`/movieDescription/${movie.title_uri}/${movie.id}`}
        
      >
        <img src={movie.image_small} alt={movie.title} />
      </Link>
    </div>
  );
};

export default Movies;
