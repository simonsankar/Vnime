import { SET_GENRES_OPTION, RESET_GENRES_OPTION } from '../actions/types';

const genres = (state = null, action) => {
  switch (action.type) {
    case SET_GENRES_OPTION:
      return action.payload;
    case RESET_GENRES_OPTION:
      return action.payload;
    default:
      return state;
  }
};

export default genres;
