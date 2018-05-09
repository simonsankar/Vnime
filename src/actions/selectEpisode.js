import { SELECT_EPISODE, RESET_SELECTED_EPISODE } from './types';

export const selectEpisode = (index, episode) => {
  return {
    type: SELECT_EPISODE,
    payload: { index, episode }
  };
};
export const resetSelectedVideo = () => {
  return {
    type: RESET_SELECTED_EPISODE
  };
};
