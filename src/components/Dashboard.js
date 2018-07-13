import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../actions/getUser';

import { Grid } from 'semantic-ui-react';

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.auth);
    if (!this.props.auth || this.props.auth.loggedIn === false) {
      this.props.history.push('/login');
    } else if (this.props.auth.loggedIn) {
      const { uid } = this.props.auth.response;
      this.props.createUser(uid, 'DI MARIA');
    }
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.auth);
    if (prevProps.auth !== this.props.auth) {
      if (this.props.auth.loggedIn === false) {
        this.props.history.push('/login');
      }
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <Grid>
        <Grid.Row>
          Dashboard!
          <div>{auth !== null && auth.response.uid}</div>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapStateToDispatch = dispatch =>
  bindActionCreators({ createUser }, dispatch);

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(Dashboard));
