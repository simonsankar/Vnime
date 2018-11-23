import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAnime, resetAnime } from '../actions/getAnime';
import { resetEpisodeOptions } from '../actions/getEpisodeOptions';
import { resetVideo } from '../actions/selectVideo';
import { addAnimeToRecents } from '../actions/getUser';

import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react';
import Hero from './Hero';
import SideContent from './SideContent';
import EpisodeList from './EpisodeList';
import VideoPlayer from './VideoPlayer';
import VideoBar from './VideoBar';

class Watch extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.getAnime(pathname.replace('/watch/', ''));
    let main = document.getElementById('main-content');
    main.scrollTop = 0;
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      let main = document.getElementById('main-content');
      main.scrollTop = 0;
      this.props.resetVideo();
      this.props.resetAnime();
      this.props.resetEpisodeOptions();
      const { pathname } = this.props.location;
      this.props.getAnime(pathname.replace('/watch/', ''));
    }
    // Adding to recently viewed
    const { auth, anime } = this.props;
    if (prevProps.anime === null && anime) {
      if (auth !== null && auth.loggedIn && anime !== null) {
        console.log('Going to add to recents', auth.response.uid, anime);
        this.props.addAnimeToRecents(auth.response.uid, anime);
      }
    }
  }
  componentWillUnmount() {
    this.props.resetVideo();
    this.props.resetAnime();
    this.props.resetEpisodeOptions();
  }

  render() {
    const { anime } = this.props;
    return (
      <div id="topper" className="page-watch">
        {anime !== null && anime !== false ? (
          <div>
            {/* Hero */}
            <Hero anime={anime} />
            {/* Content */}
            <Grid padded="horizontally">
              <SideContent className="fade-in" anime={anime} />
              <Grid.Column mobile={12} tablet={12} computer={12}>
                <Segment.Group>
                  <VideoPlayer />
                  <VideoBar />
                  <EpisodeList
                    slug={anime.info.slug}
                    episodes={anime.episodes}
                  />
                </Segment.Group>
              </Grid.Column>
            </Grid>
          </div>
        ) : anime === false ? (
          <div className="error-page">Error</div>
        ) : (
          <Dimmer active>
            <Loader size="huge" />
          </Dimmer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ anime, auth }) => ({ anime, auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAnime,
      addAnimeToRecents,
      resetAnime,
      resetEpisodeOptions,
      resetVideo
    },
    dispatch
  );
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Watch)
);
