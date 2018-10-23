import { UPDATE_FILTER_QUERY, RESET_FILTER_QUERY } from "../actions/types";

const queryFilter = (state = null, action) => {
  switch (action.type) {
    case UPDATE_FILTER_QUERY:
      if (action.payload) return action.payload;
      else return false;
    case RESET_FILTER_QUERY:
      return null;
    default:
      return state;
  }
};

export default queryFilter;
