import { SELECT_VIDEO, RESET_VIDEO } from '../actions/types';

const selectedVideo = (state = null, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
    case RESET_VIDEO:
      return null;
    default:
      return state;
  }
};
export default selectedVideo;
