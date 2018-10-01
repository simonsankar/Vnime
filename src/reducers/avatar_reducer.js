import { GET_USER_AVATAR } from '../actions/types';

const avatar = (state = null, action) => {
  switch (action.type) {
    case GET_USER_AVATAR:
      console.log('avatar reducer:', action);
      return action.payload;
    default:
      return state;
  }
};

export default avatar;
