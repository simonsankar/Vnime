import {
  GET_POPULAR_AND_TRENDING_ANIMES,
  RESET_POPULAR_AND_TRENDING_ANIMES
} from '../actions/types';

const sampleAnimes = (state = null, action) => {
  switch (action.type) {
    case GET_POPULAR_AND_TRENDING_ANIMES:
      if (action.error) {
        console.log('Error fetching samples:', action.payload);
        return false;
      } else {
        console.log('Sample animes:', action.payload);
        return action.payload;
      }
    case RESET_POPULAR_AND_TRENDING_ANIMES:
      return null;
    default:
      return state;
  }
};

export default sampleAnimes;
