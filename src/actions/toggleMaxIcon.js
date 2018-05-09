import { TOGGLE_MAXICON } from './types';

export const toggleMaxIcon = isMax => {
  return {
    type: TOGGLE_MAXICON,
    payload: isMax
  };
};
