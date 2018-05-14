import React, { Component } from 'react';

import { Grid, Card } from 'semantic-ui-react';
import HeaderBarSec from './HeaderBarSec';
import ScheduleItem from './ScheduleItem';

class ScheduleList extends Component {
  render() {
    const { weekday, animes, index } = this.props;
    return (
      <Grid padded="horizontally">
        <HeaderBarSec text={index === 1 ? 'Tommorrow' : weekday} />
        <Grid.Row>
          <Grid.Column>
            <Card.Group>
              {animes &&
                animes.map((anime, index) => {
                  return <ScheduleItem key={anime.id} anime={anime} />;
                })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ScheduleList;
