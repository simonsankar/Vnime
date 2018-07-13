import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getScheduledAnimes,
  resetScheduledAnimes
} from '../actions/getScheduledAnimes';

import { Grid } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import ScheduleList from './ScheduleList';
import Loading from './Loading';

class Schedule extends Component {
  componentDidMount() {
    this.props.getScheduledAnimes();
  }
  componentWillUnmount() {
    this.props.resetScheduledAnimes();
  }

  renderScheduleLists(scheduledAnimes) {
    const schedules = scheduledAnimes.map((el, index) => {
      return (
        <ScheduleList
          index={index}
          key={el.day + index}
          weekday={el.day}
          animes={el.animes}
        />
      );
    });
    return schedules;
  }

  render() {
    const { scheduledAnimes } = this.props;
    return (
      <div>
        {scheduledAnimes ? (
          <div>
            <Grid padded="horizontally">
              <HeaderBar text={'Scheduled Animes'} />
            </Grid>
            {this.renderScheduleLists(scheduledAnimes)}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ scheduledAnimes }) => ({ scheduledAnimes });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getScheduledAnimes, resetScheduledAnimes }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
