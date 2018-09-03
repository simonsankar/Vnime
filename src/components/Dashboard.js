import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/setAuth';
import { getUser } from '../actions/getUser';

import { Grid, Button, Header } from 'semantic-ui-react';

class Dashboard extends Component {
  componentDidMount() {
    const { auth } = this.props;
    if (!auth || auth.loggedIn === false) {
      this.props.history.push('/login');
    } else if (auth && auth.loggedIn) {
      this.props.getUser(auth.response.uid);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (prevProps.auth !== this.props.auth) {
      if (auth.loggedIn === false) {
        this.props.history.push('/login');
      } else if (auth && auth.loggedIn) {
        this.props.getUser(auth.response.uid);
      }
    }
  }
  render() {
    const { user, logoutUser } = this.props;
    return (
      <Grid>
        <Grid.Row className="header-row-dash">
          <Grid.Column verticalAlign="middle">
            <Header className="header-section-dash">
              Welcome
              <span className="username">{user !== null && user.username}</span>
              <Button
                compact
                size="tiny"
                floated="right"
                onClick={() => logoutUser()}
              >
                Logout
              </Button>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>Dashboard!</Grid.Column>
          <Grid.Column width={4}>Friends</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth, user }) => ({ auth, user });
const mapStateToDispatch = dispatch =>
  bindActionCreators({ getUser, logoutUser }, dispatch);

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(Dashboard));
