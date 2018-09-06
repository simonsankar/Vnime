import { TO_BE_ADDED } from '../actions/types';

const toBeAdded = (state = null, action) => {
  switch (action.type) {
    case TO_BE_ADDED:
      console.log('To be added', action);
      return action.payload || false;
    default:
      return state;
  }
};

export default toBeAdded;
