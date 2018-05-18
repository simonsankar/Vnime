import { TOGGLE_MAXICON } from '../actions/types';

const maxIcon = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_MAXICON:
      return action.payload;
    default:
      return state;
  }
};

export default maxIcon;
