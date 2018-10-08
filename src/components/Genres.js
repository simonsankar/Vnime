import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';

class Genres extends Component {
  render() {
    return (
      <div>
        <Grid centered verticalAlign="middle">
          <HeaderBar text={'Filter Animes | In development'} />
          <Grid.Column>
            <Icon
              name="cog"
              color="black"
              size="massive"
              className="rotating"
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Genres;
