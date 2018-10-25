import { UPDATE_FILTER_QUERY, RESET_FILTER_QUERY } from "./types";
import Masterani from "../api/masterani";
import { request } from "http";

/*
Incoming Query structure:
    query:{
        order:num,
        type:num,
        status:num,
        genres:[num,num,num],
        page:num
    }
*/
export const updateFilterQuery = query => {
  return {
    type: UPDATE_FILTER_QUERY,
    payload: query
  };
};

export const resetFilterQuery = () => {
  return {
    type: RESET_FILTER_QUERY
  };
};
