import { UPDATE_FILTER_QUERY, RESET_FILTER_QUERY } from "../actions/types";

const queryFilter = (state = null, action) => {
  switch (action.type) {
    case UPDATE_FILTER_QUERY:
      if (action.payload) return action.payload;
      else return [];
    case RESET_FILTER_QUERY:
      return null;
  }
};

export default queryFilter;
