import {
  GET_POPULAR_AND_TRENDING_ANIMES,
  RESET_POPULAR_AND_TRENDING_ANIMES
} from './types';
import Masterani from '../api/masterani';

export const getPopularAndTrendingAnimes = () => {
  const request = Masterani.getPopularAndTrendingAnimes();
  return {
    type: GET_POPULAR_AND_TRENDING_ANIMES,
    payload: request
  };
};
export const resetPopularAndTrendingAnimes = () => {
  return {
    type: RESET_POPULAR_AND_TRENDING_ANIMES
  };
};
