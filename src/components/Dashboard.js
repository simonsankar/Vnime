import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../actions/getUser';

import { Grid, Header, Radio, Icon, Image } from 'semantic-ui-react';
import DashboardList from './DashboardList';

class Dashboard extends Component {
  state = { checked: false };
  toggleRemove = () => this.setState({ checked: !this.state.checked });

  componentDidMount() {
    const { auth } = this.props;
    if (!auth || auth.loggedIn === false) {
      // this.props.history.push('/login');
      this.props.getUser('C8JetjMvlkOTraylU4G85JnxdUc2');
    } else if (auth && auth.loggedIn) {
      this.props.getUser(auth.response.uid);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (prevProps.auth !== this.props.auth) {
      if (auth.loggedIn === false) {
        // this.props.history.push('/login');
        this.props.getUser('C8JetjMvlkOTraylU4G85JnxdUc2');
      } else if (auth && auth.loggedIn) {
        this.props.getUser(auth.response.uid);
      }
    }
  }
  render() {
    const { checked } = this.state;
    const { user } = this.props;
    return (
      <Grid className="dashboard" divided>
        <Grid.Row className="header-row-dash">
          <Grid.Column verticalAlign="middle">
            <Header className="header-section-dash">
              <Image
                circular
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              />
              <span className="username">{user !== null && user.username}</span>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            {user !== null && user.favlist !== undefined ? (
              <Header size="large">
                <Header.Subheader>
                  <Radio
                    slider
                    label="Edit list"
                    onChange={this.toggleRemove}
                    checked={checked}
                  />
                </Header.Subheader>
              </Header>
            ) : (
              ''
            )}
            {/* Favlist animes */}
            <Grid className="dashboard">
              {user !== null && user.favlist !== undefined ? (
                <DashboardList
                  removable={checked}
                  text="Your series"
                  animes={user.favlist}
                />
              ) : (
                user !== null &&
                user.favlist === undefined && (
                  <div className="favlist-none">
                    <Icon name="folder open outline" />
                    <div>Maybe you should add something...</div>
                  </div>
                )
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
  bindActionCreators({ getUser }, dispatch);

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(Dashboard));
