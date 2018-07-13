import { GET_ANIME, RESET_ANIME } from '../actions/types';

const anime = (state = null, action) => {
  switch (action.type) {
    case GET_ANIME:
      if (action.error === true) {
        console.log('Anime get Error:', action.error);
        return false;
      } else {
        console.log('No error/ Anime:', action.payload);
        return action.payload;
      }
    case RESET_ANIME:
      return null;
    default:
      return state;
  }
};
export default anime;
