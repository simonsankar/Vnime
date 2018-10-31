import { GET_FILTERED_ANIMES, RESET_FILTERED_ANIMES } from '../actions/types';

const filteredAnimes = (state = null, action) => {
  switch (action.type) {
    case GET_FILTERED_ANIMES:
      if (action.error === true) {
        console.log('Error:', action.error);
        return false;
      }
      console.log('No error/ Filtered Animes:', action.payload);
      return action.payload;

    case RESET_FILTERED_ANIMES:
      return null;
    default:
      return state;
  }
};
export default filteredAnimes;
