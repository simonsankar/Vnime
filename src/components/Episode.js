import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getEpisodeOptions,
  resetEpisodeOptions
} from "../actions/getEpisodeOptions";
import { selectEpisode, resetSelectedVideo } from "../actions/selectEpisode";
import { Label, Popup } from "semantic-ui-react";

class Episode extends Component {
  handleEpisode(index, episode, slug) {
    this.props.resetSelectedVideo();
    this.props.selectEpisode(episode.info.episode, episode);
    const episodeURL = `/${slug}/${episode.info.episode}`;
    this.props.getEpisodeOptions(episodeURL);
  }
  render() {
    const { episode, slug, index } = this.props;
    return (
      <Popup
        hideOnScroll
        inverted
        basic
        size="mini"
        trigger={
          <Label
            basic
            className={
              this.props.selectedEpisode.index === episode.info.episode
                ? "label-blue-selected"
                : "label-blue"
            }
            onClick={() => this.handleEpisode(index, episode, slug)}
          >
            {episode.info.episode}
          </Label>
        }
        content={episode.info.title}
      />
    );
  }
}
const mapStateToProps = ({ selectedEpisode }) => ({ selectedEpisode });
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episode);

/* <Grid.Column mobile={5} tablet={4} computer={3} verticalAlign="top">
      <Card size="mini">
        <Card.Content>
          <Card.Description>
            {episode.info.title || `#${episode.info.episode}`}
          </Card.Description>
          <Card.Meta>
            <span>EP {episode.info.episode}</span>
          </Card.Meta>
        </Card.Content>
      </Card> 
    </Grid.Column>*/
