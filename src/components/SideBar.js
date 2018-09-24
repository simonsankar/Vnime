import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/setAuth';

import { Menu, Button } from 'semantic-ui-react';
import SearchBar from './SearchBar';

class SideBar extends Component {
  render() {
    const activeItem = this.props.location.pathname.replace('/', '');
    const { auth, logoutUser } = this.props;

    return (
      <Menu secondary vertical fixed="left" inverted className="side-bar">
        <Menu.Item className="menu-item-header">
          <Menu.Header className="menu-header">
            VNIME
            {!auth || auth & !auth.loggedIn ? (
              <Button
                className="btn-auth"
                floated="right"
                color="blue"
                size="mini"
                icon="sign in"
                as={Link}
                to="/login"
              />
            ) : (
              <Button
                className="btn-auth"
                floated="right"
                color="blue"
                size="mini"
                icon="sign out"
                onClick={() => logoutUser()}
              />
            )}
          </Menu.Header>
        </Menu.Item>
        <Menu.Item className="divider" />
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
        <Menu.Item className="divider" />
        <Menu.Item
          as={Link}
          to="/dashboard"
          name="dashboard"
          icon="user"
          active={activeItem === 'dashboard'}
        />
        <Menu.Item className="divider" />

        <Menu.Item
          as={Link}
          to="/"
          name="home"
          icon="home"
          active={activeItem === ''}
        />
        <Menu.Item
          as={Link}
          to="/updated"
          name="updated"
          icon="refresh"
          active={activeItem === 'updated'}
        />
        <Menu.Item
          as={Link}
          to="/popular"
          name="popular"
          icon="fire"
          active={activeItem === 'popular'}
        />
        <Menu.Item
          as={Link}
          to="/trending"
          name="trending"
          icon="line chart"
          active={activeItem === 'trending'}
        />
        <Menu.Item
          as={Link}
          to="/genres"
          name="genres"
          icon="filter"
          active={activeItem === 'genres'}
        />
        <Menu.Item
          as={Link}
          to="/schedule"
          name="schedule"
          icon="checked calendar"
          active={activeItem === 'schedule'}
        />
        <Menu.Item className="divider" />
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutUser }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
