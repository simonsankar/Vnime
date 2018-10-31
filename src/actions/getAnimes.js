import {
  GET_UPDATED_ANIMES,
  GET_POPULAR_ANIMES,
  GET_TRENDING_ANIMES,
  GET_FILTERED_ANIMES,
  RESET_FILTERED_ANIMES,
  RESET_ANIMES
} from './types';
import Masterani from '../api/masterani';

export const getUpdatedAnimes = () => {
  const request = Masterani.getUpdatedAnimes();
  return {
    type: GET_UPDATED_ANIMES,
    payload: request
  };
};
export const getPopularAnimes = () => {
  const request = Masterani.getPopularAnimes();
  return {
    type: GET_POPULAR_ANIMES,
    payload: request
  };
};
export const getTrendingAnimes = () => {
  const request = Masterani.getTrendingAnimes();
  return {
    type: GET_TRENDING_ANIMES,
    payload: request
  };
};
export const getFilteredAnimes = query => {
  const request = Masterani.getFilteredAnimes(query);
  return {
    type: GET_FILTERED_ANIMES,
    payload: request
  };
};
export const resetFilteredAnimes = () => {
  return { type: RESET_FILTERED_ANIMES };
};

export const resetAnimes = () => {
  return {
    type: RESET_ANIMES
  };
};
