import { SET_SORT_OPTION, RESET_SORT_OPTION } from '../actions/types';

const sort = (state = null, action) => {
  switch (action.type) {
    case SET_SORT_OPTION:
      console.log('Sort', action);
      return action.payload;
    case RESET_SORT_OPTION:
      return action.payload;
    default:
      return state;
  }
};

export default sort;
