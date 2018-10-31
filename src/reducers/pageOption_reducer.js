import { SET_PAGE_OPTION, RESET_PAGE_OPTION } from '../actions/types';

const page = (state = null, action) => {
  switch (action.type) {
    case SET_PAGE_OPTION:
      return action.payload;
    case RESET_PAGE_OPTION:
      return action.payload;
    default:
      return state;
  }
};

export default page;
