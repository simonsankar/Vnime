import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';

class Genres extends Component {
  render() {
    return (
      <div>
        <Grid>
          <HeaderBar text={'Filter Animes'} />
        </Grid>
      </div>
    );
  }
}

export default Genres;
