import { TOGGLE_MAXICON } from '../actions/types';

const maxIcon = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_MAXICON:
      return action.payload;
    default:
      return 'window maximize';
  }
};

export default maxIcon;
