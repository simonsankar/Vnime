import { GET_EPISODE_OPTIONS, RESET_EPISODE_OPTIONS } from './types';
import Masterani from '../api/masterani';

export const getEpisodeOptions = episode => {
  // Episode -> Episode options
  const request = Masterani.getEpisode(episode);
  return {
    type: GET_EPISODE_OPTIONS,
    payload: request
  };
};
export const resetEpisodeOptions = () => {
  return {
    type: RESET_EPISODE_OPTIONS
  };
};
