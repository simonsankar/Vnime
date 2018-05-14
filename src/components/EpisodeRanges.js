import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getEpisodeOptions,
  resetEpisodeOptions
} from '../actions/getEpisodeOptions';
import { selectEpisode, resetSelectedVideo } from '../actions/selectEpisode';
import _ from 'lodash';

import { Accordion, Label } from 'semantic-ui-react';
import Episode from './Episode';

class EpisodeRanges extends Component {
  state = { activeIndex: 0 };

  handleClick(index) {
    this.setState({ activeIndex: index });
  }
  // Splits episodes array
  makeChunks(arr) {
    const chunks = _.chunk(arr, 50);
    return chunks;
  }
  // Render range titles
  renderAccTitle(slug, episodes) {
    const { activeIndex } = this.state;
    const titles = this.makeChunks(episodes).map((range, index) => {
      return (
        <Accordion.Title
          as={Label}
          className={
            activeIndex === index ? 'label-black-selected' : 'label-black'
          }
          slug={slug}
          range={range}
          key={index + slug}
          basic
          size="tiny"
          active={activeIndex === index}
          index={index}
          onClick={() => this.handleClick(index)}
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
      // Autoselect first episode from first range
      if (index === activeIndex) {
        this.props.resetSelectedVideo();
        this.props.selectEpisode(range[0].info.episode, range[0]);
        const episodeURL = `/${slug}/${range[0].info.episode}`;
        this.props.getEpisodeOptions(episodeURL);
      }
      return (
        <Accordion.Content
          key={index + slug + 'c'}
          className="fade-in"
          active={activeIndex === index}
        >
          {range.map((episode, index) => {
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
    return (
      <Accordion>
        {episodes ? this.renderAccTitle(slug, episodes) : ''}
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
