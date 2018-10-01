import { combineReducers } from 'redux';
import avatar from './avatar_reducer';
import auth from './auth_reducer';
import animes from './animes_reducer';
import anime from './anime_reducer';
import selectedEpisode from './selectedEpisode_reducer';
import episodeOptions from './episodeOptions_reducer';
import selectedVideo from './selectedVideo_reducer';
import sampleAnimes from './sampleAnimes_reducer';
import scheduledAnimes from './scheduledAnimes_reducer';
import suggestions from './suggestions_reducer';
import alreadyAdded from './alreadyAdded_reducer';
import toBeAdded from './toBeAdded_reducer';
import user from './user_reducer';

import maxIcon from './maxIcon_reducer';

const rootReducer = combineReducers({
  avatar,
  auth,
  animes,
  anime,
  selectedEpisode,
  episodeOptions,
  selectedVideo,
  sampleAnimes,
  scheduledAnimes,
  suggestions,
  alreadyAdded,
  toBeAdded,
  user,

  maxIcon
});

export default rootReducer;
