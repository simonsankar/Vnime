import { GET_EPISODE_OPTIONS, RESET_EPISODE_OPTIONS } from '../actions/types';

const episodeOptions = (state = null, action) => {
  switch (action.type) {
    case GET_EPISODE_OPTIONS:
      if (action.error === true) {
        console.log('Error:', action.error, action.payload.message);
        return null;
      } else {
        console.log('Episode Options:', action.payload);
        return action.payload;
      }
    case RESET_EPISODE_OPTIONS:
      return null;
    default:
      return state;
  }
};
export default episodeOptions;
