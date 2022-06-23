import axios from "axios";
import { URL_API } from "../utils/constants";
import { 
START_DOWNLOAD_MOVIES,
FINISH_DOWNLOAD_MOVIES,
ERROR_DOWNLOAD_MOVIES,

 } from "../types/index";




// FUNCION PARA TRAER  LAS PELICULAS
export const getMoviesAction = (movieSearch) => {
 
  return async (dispatch) => {
    dispatch(dowloadMovies());

    try {
     if(movieSearch && movieSearch.length >= 3){
       const response = await axios.get(`https://mfwkweb-api.clarovideo.net/services/search/predictive?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=3tafqt1dcpo2uppqm47p139iq5&commontype=full&value=${movieSearch}&filterlist=34429,34263,34450,34451,34469,35707,36018,41283,38045,38064,40156,40351,46177,41574,41756,40344,44596,43021&suggest=1&movies=40&series=40&live_channels=40&events=40&genres=1&talents=40&users=40&unavailables=0`);
        dispatch(dowloadMoviesSuccess(response.data.response.suggest));
      }else{
        const response = await axios.get(URL_API);
        dispatch(dowloadMoviesSuccess(response.data.response.groups));
      }

  
    } catch (error) {
      console.log(error)
      dispatch(dowloadMoviesError());
    }
  }
}




const dowloadMovies = () => ({
  type: START_DOWNLOAD_MOVIES,
  payload: true,
});


const dowloadMoviesSuccess = movies => ({
  type: FINISH_DOWNLOAD_MOVIES,
  payload: movies,
});

const dowloadMoviesError = () => ({
  type: ERROR_DOWNLOAD_MOVIES,
  payload: true,
});