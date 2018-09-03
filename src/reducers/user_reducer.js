import { GET_USER } from '../actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      console.log('User reducer:', action);
      return action.payload;
    default:
      return state;
  }
};

export default user;
