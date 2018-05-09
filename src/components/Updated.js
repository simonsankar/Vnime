import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUpdatedAnimes, resetAnimes } from '../actions/getAnimes';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';
import AnimeList from './AnimeList';

class Updated extends Component {
  componentDidMount() {
    this.props.getUpdatedAnimes();
  }
  componentWillUnmount() {
    this.props.resetAnimes();
  }
  render() {
    const { animes } = this.props;
    return (
      <div>
        {animes ? (
          <Grid padded="horizontally">
            <HeaderBar text={'Updated Animes'} />
            <Grid.Row>
              <AnimeList animes={animes} />
            </Grid.Row>
          </Grid>
        ) : (
          <Dimmer active>
            <Loader size="massive">Fetching Animes...</Loader>
          </Dimmer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ animes }) => ({ animes });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUpdatedAnimes, resetAnimes }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Updated);
