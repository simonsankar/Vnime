import { SET_STATUS_OPTION, RESET_STATUS_OPTION } from '../actions/types';

const status = (state = null, action) => {
  switch (action.type) {
    case SET_STATUS_OPTION:
      return action.payload;
    case RESET_STATUS_OPTION:
      return action.payload;
    default:
      return state;
  }
};

export default status;
