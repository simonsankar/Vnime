import { SET_TYPE_OPTION, RESET_TYPE_OPTION } from '../actions/types';

const type = (state = null, action) => {
  switch (action.type) {
    case SET_TYPE_OPTION:
      return action.payload;
    case RESET_TYPE_OPTION:
      return -1;
    default:
      return state;
  }
};

export default type;
