import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getEpisodeOptions,
  resetEpisodeOptions
} from '../actions/getEpisodeOptions';
import { selectEpisode, resetSelectedVideo } from '../actions/selectEpisode';
import { Grid, Segment } from 'semantic-ui-react';

import Episode from './Episode';
import EpisodeRanges from './EpisodeRanges';

class EpisodeList extends Component {
  render() {
    const { episodes, slug } = this.props;
    return (
      <Segment>
        <Grid verticalAlign="top" textAlign="left" padded="vertically">
          <Segment basic>
            {episodes.length <= 50 ? (
              episodes.map((episode, index) => {
                if (index === 0) {
                  this.props.resetSelectedVideo();
                  this.props.selectEpisode(index, episode);
                  const episodeURL = `/${slug}/${episode.info.episode}`;
                  this.props.getEpisodeOptions(episodeURL);
                }
                return (
                  <Episode
                    key={index}
                    episode={episode}
                    slug={slug}
                    index={index}
                  />
                );
              })
            ) : episodes.length > 50 ? (
              <EpisodeRanges slug={slug} episodes={episodes} />
            ) : (
              ''
            )}
          </Segment>
        </Grid>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectEpisode,
      resetSelectedVideo,
      getEpisodeOptions,
      resetEpisodeOptions
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(EpisodeList);
