import axios from "axios";
import { MOVIE_DESCRIPTION_ID } from "../utils/constants";
import { DESCRIPCION_MOVIE } from "../types";

export const movieDescriptionAction = () => {
  var URLactual = window.location;
  let urlAcortada = URLactual.href.split("/");
  let result = urlAcortada[5];

  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${MOVIE_DESCRIPTION_ID}group_id=${result}`
      );
      dispatch(movieDescription(response.data.response.group));
    } catch (error) {
      console.log(error);
    }
  };
};

const movieDescription = (descriptionMovies) => ({
  type: DESCRIPCION_MOVIE,
  payload: descriptionMovies,
});
