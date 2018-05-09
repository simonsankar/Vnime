import React, { Component } from 'react';
import { bindActionCreators } from 'react';
import { connect } from 'react-redux';
import {
  getScheduledAnime,
  resetScheduledAnime
} from '../actions/getScheduledAnimes';
import { Grid } from 'semantic-ui-react';

import HeaderBar from './HeaderBar';

class Schedule extends Component {
  render() {
    return (
      <div>
        <Grid>
          <HeaderBar text={'Scheduled Releases'} />
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ scheduledAnimes }) => ({ scheduledAnimes });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getScheduledAnime, resetScheduledAnime }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
