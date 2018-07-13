import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopularAnimes, resetAnimes } from '../actions/getAnimes';
import { Grid } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';
import AnimeList from './AnimeList';
import Loading from './Loading';

class Popular extends Component {
  componentDidMount() {
    this.props.getPopularAnimes();
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
            <HeaderBar text={'Popular Animes'} />
            <Grid.Row>
              <AnimeList animes={animes} />
            </Grid.Row>
          </Grid>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ animes }) => ({ animes });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPopularAnimes, resetAnimes }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular);
