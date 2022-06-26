import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieDescriptionAction } from "../../actions/movieDescriptionAction";
import DescriptionContent from "./DescriptionContent";
import Talent from "./Talent";
import "./Description.css";

const Description = () => {
  const dispatch = useDispatch();
  const [loadingMovie, setLoadingMovie] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingMovie(false);
    }, 1000);

    const uploadMovie = () => dispatch(movieDescriptionAction());
    uploadMovie();
  }, []);

  // OBTENER LAS PELICULA DESCRIPCION
  const movieDescription = useSelector(
    (state) => state.description.movieDescription.common
  );

  return (
    <>
      {loadingMovie ? (
        <div className="lds-ellipsis Loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        movieDescription && (
          <div
            className="description-container"
            style={{
              backgroundImage: `url('${movieDescription.image_background}')`,
            }}
          >
            <div className="dark" />
            <div className="description-title">
              <h1>{movieDescription.title}</h1>
              <img src={`${movieDescription.image_small}`} alt="" />
            </div>

            <div className="description-content">
              <DescriptionContent movieDescription={movieDescription} />

              {movieDescription.extendedcommon.roles.role.map((talent) => (
                <Talent key={talent.id} talent={talent} />
              ))}

              <div className="gen">
                <p className="description-title-actors generes-title">
                  Generos:
                </p>
                {movieDescription.extendedcommon.genres.genre.map((genre) => (
                  <a href="#" className="description-name-actors generes-desc">
                    {genre.desc}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Description;
