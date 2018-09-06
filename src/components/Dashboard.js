import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/setAuth';
import { getUser } from '../actions/getUser';

import { Grid, Button, Header, Radio } from 'semantic-ui-react';
import DashboardList from './DashboardList';

class Dashboard extends Component {
  state = { checked: false };
  toggleRemove = () => this.setState({ checked: !this.state.checked });

  componentDidMount() {
    const { auth } = this.props;
    if (!auth || auth.loggedIn === false) {
      this.props.history.push('/login');
      // this.props.getUser('C8JetjMvlkOTraylU4G85JnxdUc2');
    } else if (auth && auth.loggedIn) {
      this.props.getUser(auth.response.uid);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (prevProps.auth !== this.props.auth) {
      if (auth.loggedIn === false) {
        this.props.history.push('/login');
        // this.props.getUser('C8JetjMvlkOTraylU4G85JnxdUc2');
      } else if (auth && auth.loggedIn) {
        this.props.getUser(auth.response.uid);
      }
    }
  }
  render() {
    const { checked } = this.state;
    const { user, logoutUser } = this.props;
    return (
      <Grid className="dashboard" divided>
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
          <Grid.Column width={12}>
            <Header dividing size="large">
              Your series
              <Header.Subheader>
                <Radio
                  slider
                  label="Edit list"
                  onChange={this.toggleRemove}
                  checked={checked}
                />
              </Header.Subheader>
            </Header>

            <Grid className="dashboard">
              {user !== null && user.favlist !== null ? (
                <DashboardList
                  removable={checked}
                  text="Your series"
                  animes={user.favlist}
                />
              ) : (
                'Nothing yet wumpus!'
              )}
            </Grid>
          </Grid.Column>
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
