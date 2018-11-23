import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser, getUserAvatar } from '../actions/getUser';

import { Grid, Label, Header, Radio, Icon, Image } from 'semantic-ui-react';
import DashboardList from './DashboardList';
import EditProfileModal from './EditProfileModal';
import RecentlyViewed from './RecentlyViewed';

class Dashboard extends Component {
  state = { checked: false };
  // Toggle remove animes
  toggleRemove = () => this.setState({ checked: !this.state.checked });

  componentDidMount() {
    const { auth } = this.props;
    if (!auth || auth.loggedIn === false) {
      this.props.history.push('/login');
    } else if (auth && auth.loggedIn) {
      this.props.getUser(auth.response.uid);
      this.props.getUserAvatar(auth.response.uid);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (prevProps.auth !== this.props.auth) {
      if (auth.loggedIn === false) {
        this.props.history.push('/login');
      } else if (auth && auth.loggedIn) {
        this.props.getUser(auth.response.uid);
        this.props.getUserAvatar(auth.response.uid);
        console.log(this.props.avatar);
      }
    }
  }

  render() {
    const { checked } = this.state;
    const { user, auth, avatar } = this.props;
    return (
      <Grid className="dashboard" divided>
        <Grid.Row className="header-row-dash">
          <Grid.Column verticalAlign="middle">
            <span className="dashboard-username">
              <Image
                className="dashboard-image"
                bordered
                circular
                src={
                  avatar
                    ? avatar
                    : 'https://community.yellowfinbi.com/public/avatars/default-avatar.svg'
                }
              />
              {user !== null && user.username}
            </span>
            {user !== null && user.username && auth && auth.loggedIn ? (
              <EditProfileModal
                uid={auth.response.uid}
                username={user.username}
              />
            ) : (
              ''
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={11}>
            {user !== null && user.favlist !== undefined ? (
              <Header className="dashboard-header">
                Favlist{' '}
                <Radio
                  className="pullright"
                  slider
                  label="Edit list"
                  onChange={this.toggleRemove}
                  checked={checked}
                />
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
          <Grid.Column width={5}>
            {user !== null && user.recents !== undefined ? (
              <RecentlyViewed recents={user.recents} />
            ) : (
              'No recents'
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth, user, avatar }) => ({ auth, user, avatar });
const mapStateToDispatch = dispatch =>
  bindActionCreators({ getUser, getUserAvatar }, dispatch);

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(Dashboard));
