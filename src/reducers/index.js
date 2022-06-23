import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import descriptionMovieReducer from "./descriptionMovieReducer";

export default combineReducers({
    movies: moviesReducer,
    description: descriptionMovieReducer,
}); 