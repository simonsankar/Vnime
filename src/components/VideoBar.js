import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import VideoOptions from './VideoOptions';
import VideoTitle from './VideoTitle';

const VideoBar = () => {
  return (
    <Segment>
      <Grid verticalAlign="middle">
        <Grid.Row columns={2} divided>
          <Grid.Column mobile={8} tablet={8} computer={5}>
            <VideoOptions />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={8} computer={11}>
            <VideoTitle />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default VideoBar;
