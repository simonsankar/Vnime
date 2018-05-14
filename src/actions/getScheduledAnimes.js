import { GET_SCHEDULED_ANIMES, RESET_SCHEDULED_ANIMES } from './types';
import Masterani from '../api/masterani';

export const getScheduledAnimes = () => {
  const request = Masterani.getScheduledAnimes();
  return {
    type: GET_SCHEDULED_ANIMES,
    payload: request
  };
};
export const resetScheduledAnimes = () => {
  return {
    type: RESET_SCHEDULED_ANIMES
  };
};
