import {
  START_DOWNLOAD_MOVIES,
  FINISH_DOWNLOAD_MOVIES,
  ERROR_DOWNLOAD_MOVIES,
} from "../types/index";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case START_DOWNLOAD_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FINISH_DOWNLOAD_MOVIES:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };

    case ERROR_DOWNLOAD_MOVIES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
