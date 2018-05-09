import { SELECT_EPISODE, RESET_SELECTED_EPISODE } from '../actions/types';

const selectedEpisode = (state = null, action) => {
  switch (action.type) {
    case SELECT_EPISODE:
      console.log(action.payload);
      return action.payload;
    case RESET_SELECTED_EPISODE:
      return null;
    default:
      return state;
  }
};
export default selectedEpisode;
