import { GET_SCHEDULED_ANIMES, RESET_SCHEDULED_ANIMES } from '../actions/types';

const scheduledAnimes = (state = null, action) => {
  switch (action.type) {
    case GET_SCHEDULED_ANIMES:
      return action.payload;
    case RESET_SCHEDULED_ANIMES:
      return null;
    default:
      return state;
  }
};

export default scheduledAnimes;
