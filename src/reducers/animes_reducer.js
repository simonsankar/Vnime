import {
  GET_UPDATED_ANIMES,
  GET_POPULAR_ANIMES,
  GET_TRENDING_ANIMES,
  GET_FILTERED_ANIMES,
  RESET_ANIMES
} from '../actions/types';

const animes = (state = null, action) => {
  switch (action.type) {
    case GET_UPDATED_ANIMES:
    case GET_POPULAR_ANIMES:
    case GET_TRENDING_ANIMES:
    case GET_FILTERED_ANIMES:
      if (action.error === true) {
        console.log('Error:', action.error);
        return false;
      }
      console.log('No error/ Animes:', action.payload);
      return action.payload;

    case RESET_ANIMES:
      return null;
    default:
      return state;
  }
};
export default animes;
