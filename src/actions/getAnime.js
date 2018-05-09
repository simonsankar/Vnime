import { GET_ANIME, RESET_ANIME } from './types';
import Masterani from '../api/masterani';

export const getAnime = anime => {
  const request = Masterani.getAnime(anime);
  return {
    type: GET_ANIME,
    payload: request
  };
};
export const resetAnime = () => {
  return {
    type: RESET_ANIME
  };
};
