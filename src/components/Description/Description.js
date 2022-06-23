import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieDescriptionAction } from "../../actions/movieDescriptionAction";
import "./Description.css";
import DescriptionTalent from "./DescriptionTalent";

const Description = () => {
  const dispatch = useDispatch();
  const [actors, setActors] = useState([]);
  const [director, setDirector] = useState([]);
  const [producer, setProducer] = useState([]);
  const [escritor, setEscritor] = useState([]);

  useEffect(() => {
    const uploadMovie = () => dispatch(movieDescriptionAction());
    uploadMovie();
  }, []);

  // OBTENER LAS PELICULA DESCRIPCION
  const movieDescription = useSelector(
    (state) => state.description.movieDescription.common
  );
  // console.log(movieDescription);

  useEffect(() => {
    if (movieDescription) {
      movieDescription.extendedcommon.roles.role.forEach((actor) => {
        if (actor.talents !== undefined) {
          if (actor.desc === "Actor") setActors(actor.talents);
          if (actor.desc === "Director") setDirector(actor.talents);
          if (actor.desc === "Productor") setProducer(actor.talents);
          if(actor.desc === "Escritor") setEscritor(actor.talents);
        }
          
        
      });
    }
  }, [movieDescription]);


  return (
    movieDescription && (
      <div className="description-container"  style={{ backgroundImage: `url('${movieDescription.image_background}')` }}>
        <div className="dark"/>
        <div className="description-title">
          <h1>{movieDescription.title}</h1>
          <img src={`${movieDescription.image_small}`} alt="" />
        </div>

        <div className="description-content">
          <p className="description">{movieDescription.large_description}</p>
          <p>
            {movieDescription.extendedcommon.media.publishyear}{" "}
            {movieDescription.extendedcommon.media.duration}s
            {movieDescription.extendedcommon.media.language.subbed ? (
              <span className="subtitled">Subtitled</span>
            ) : null}
            {movieDescription.extendedcommon.media.language.dubbed ? (
              <span className="dubbed">Dubbed</span>
            ) : null}
          </p>
           
           <DescriptionTalent talent={actors} title="Actors"/>
           <DescriptionTalent talent={director} title="Director"/>
           {producer || producer.length ? <DescriptionTalent talent={producer} title="Productor"/> : null}
           {escritor || escritor.length ? <DescriptionTalent talent={escritor} title="Escritor"/> : null}

         
        </div>
      </div>
    )
  );
};

export default Description;
