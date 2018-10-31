import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Loader, Icon, Header } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';
import FilterOptions from './FilterOptions';
import AnimeList from './AnimeList';

class Genres extends Component {
  render() {
    const { filteredAnimes } = this.props;
    return (
      <div>
        <Grid padded="horizontally">
          <HeaderBar text={'Filter Animes'} />
          <FilterOptions />
          {filteredAnimes &&
          filteredAnimes.data !== null &&
          filteredAnimes.data.length > 0 ? (
            <Grid.Row>
              <AnimeList animes={filteredAnimes.data} />
            </Grid.Row>
          ) : !!!filteredAnimes ? (
            <Grid.Row centered verticalAlign="middle">
              <Grid.Column style={{ minHeight: '45vh' }}>
                <Loader active size="large" />
              </Grid.Column>
            </Grid.Row>
          ) : filteredAnimes &&
          filteredAnimes.data !== null &&
          filteredAnimes.data.length === 0 ? (
            <Grid.Row centered verticalAlign="middle">
              <Grid.Column textAlign="center">
                <Icon name="meh" size="massive" />
                <Header>Nothing found...</Header>
              </Grid.Column>
            </Grid.Row>
          ) : (
            ''
          )}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ filteredAnimes }) => ({ filteredAnimes });
export default connect(mapStateToProps)(Genres);
