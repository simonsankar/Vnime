import { GET_SUGGESTIONS, RESET_SUGGESTIONS } from './types';
import Masterani from '../api/masterani';

export const getSuggestions = term => {
  const request = Masterani.getSuggestions(term);
  return {
    type: GET_SUGGESTIONS,
    payload: request
  };
};
export const resetSuggestions = () => {
  return {
    type: RESET_SUGGESTIONS
  };
};
