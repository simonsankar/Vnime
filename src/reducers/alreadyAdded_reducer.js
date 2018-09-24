import { IS_ALREADY_ADDED } from '../actions/types';

const alreadyAdded = (state = null, action) => {
  switch (action.type) {
    case IS_ALREADY_ADDED:
      if (action.payload !== null) {
        console.log('IS already addedd? = TRUE');
        return true;
      } else {
        console.log('IS already addedd? = FALSE');
        return false;
      }
    default:
      return state;
  }
};

export default alreadyAdded;
