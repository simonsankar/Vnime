import {
  SET_SORT_OPTION,
  RESET_SORT_OPTION,
  SET_TYPE_OPTION,
  RESET_TYPE_OPTION,
  SET_STATUS_OPTION,
  RESET_STATUS_OPTION,
  SET_GENRES_OPTION,
  RESET_GENRES_OPTION,
  SET_PAGE_OPTION,
  RESET_PAGE_OPTION
} from './types';

/*
Incoming Query structure:
    query:{
        order:num,
        type:num,
        status:num,
        genres:[num,num,num],
        page:num
    }
*/

// Filter options
export const setSortOption = (sort = 'score_desc') => {
  return {
    type: SET_SORT_OPTION,
    payload: sort
  };
};
export const resetSortOption = () => {
  return {
    type: RESET_SORT_OPTION,
    payload: 'score_desc'
  };
};

export const setTypeOption = (type = -1) => {
  return {
    type: SET_TYPE_OPTION,
    payload: type
  };
};
export const resetTypeOption = () => {
  return {
    type: RESET_TYPE_OPTION,
    payload: -1
  };
};

export const setStatusOption = (status = -1) => {
  return {
    type: SET_STATUS_OPTION,
    payload: status
  };
};
export const resetStatusOption = () => {
  return {
    type: RESET_STATUS_OPTION,
    payload: -1
  };
};

export const setGenresOption = (genres = []) => {
  return {
    type: SET_GENRES_OPTION,
    payload: genres
  };
};
export const resetGenresOption = () => {
  return {
    type: RESET_GENRES_OPTION,
    payload: []
  };
};

export const setPageOption = (page = 1) => {
  return {
    type: SET_PAGE_OPTION,
    payload: page
  };
};
export const resetPageOption = () => {
  return {
    type: RESET_PAGE_OPTION,
    payload: 1
  };
};
