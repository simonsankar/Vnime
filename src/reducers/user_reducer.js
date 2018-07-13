import { CREATE_USER, GET_USER } from '../actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case CREATE_USER:
    case GET_USER:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export default user;
