import { DESCRIPCION_MOVIE } from "../types";

const initialState = {
  movieDescription: {},
  loading: false,
  error: null,
};
export default function description (state = initialState, action)  {
  switch (action.type) {
    case DESCRIPCION_MOVIE:
      return {
        ...state,
        movieDescription: action.payload,
        loading: false,
        error: null,
      };
    default:
        return state;
  }
};
