import { SELECT_VIDEO, RESET_VIDEO } from './types';

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};
export const resetVideo = () => {
  return {
    type: RESET_VIDEO
  };
};
