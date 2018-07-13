import React from 'react';
import _ from 'lodash';

import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = () => {
  const phrases = [
    'Fetching animes...',
    'Mur mur mur mur murr',
    'Beep boop',
    'Frazzle tazzle',
    'Bloody wombat!',
    'Are you finished with those errands?',
    'Drip drip',
    'Rat-tat-tat-tat',
    'YNWA',
    'D10S',
    'Wee woo',
    'Mee noy noy mee-noy-noy!',
    'Big whoop.'
  ];
  const random = _.random(0, phrases.length - 1, false);

  return (
    <Dimmer active>
      <Loader size="massive">{phrases[random]}</Loader>
    </Dimmer>
  );
};

export default Loading;
