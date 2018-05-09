import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getEpisodeOptions,
  resetEpisodeOptions
} from '../actions/getEpisodeOptions';
import { selectEpisode, resetSelectedVideo } from '../actions/selectEpisode';
import _ from 'lodash';

import { Accordion, Icon, Label } from 'semantic-ui-react';
import Episode from './Episode';
class EpisodeRanges extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = index;

    this.setState({ activeIndex: newIndex });
  };
  // Splits episodes array
  makeChunks(arr) {
    const chunks = _.chunk(arr, 50);
    return chunks;
  }
  // Render range titles
  renderAccTitle(episodes) {
    const { activeIndex } = this.state;
    const titles = this.makeChunks(episodes).map((range, index) => {
      return (
        <Accordion.Title
          as={Label}
          className={
            activeIndex === index ? 'label-black-selected' : 'label-black'
          }
          basic
          size="tiny"
          active={activeIndex === index}
          index={index}
          onClick={this.handleClick}
        >
          {`${range[0].info.episode}-${range[range.length - 1].info.episode}`}
        </Accordion.Title>
      );
    });
    return titles;
  }
  // Render episodes in range
  renderAccContent(slug, episodes) {
    const { activeIndex } = this.state;
    const ranges = this.makeChunks(episodes).map((range, index) => {
      return (
        <Accordion.Content className="fade-in" active={activeIndex === index}>
          {range.map((episode, index) => {
            if (index === 0) {
              this.props.resetSelectedVideo();
              this.props.selectEpisode(index, episode);
              const episodeURL = `/${slug}/${episode.info.episode}`;
              this.props.getEpisodeOptions(episodeURL);
            }
            return (
              <Episode
                className="fade-in"
                key={index}
                episode={episode}
                slug={slug}
                index={index}
              />
            );
          })}
        </Accordion.Content>
      );
    });
    return ranges;
  }

  render() {
    const { episodes, slug } = this.props;
    const { activeIndex } = this.state;

    return (
      <Accordion>
        {episodes ? this.renderAccTitle(episodes) : ''}
        {episodes ? this.renderAccContent(slug, episodes) : ''}
      </Accordion>
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

export default connect(null, mapDispatchToProps)(EpisodeRanges);
