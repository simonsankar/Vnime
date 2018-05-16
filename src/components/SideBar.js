import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';

class SideBar extends Component {
  componentDidMount() {}

  render() {
    const activeItem = this.props.location.pathname.replace('/', '');
    const { auth } = this.props;
    return (
      <Menu secondary vertical fixed="left" inverted className="side-bar">
        <Menu.Item
          className="draggable"
          as={Link}
          to="/"
          name="home"
          onClick={this.handleItemClick}
        >
          <Menu.Header>V N I M E</Menu.Header>
        </Menu.Item>
        <Menu.Item className="divider" />

        {/* User Options */}
        {auth !== null &&
          auth.loggedIn && (
            <Menu.Item
              as={Link}
              to="/dashboard"
              name="dashboard"
              icon="user"
              active={activeItem === 'dashboard'}
              onClick={this.handleItemClick}
            />
          )}
        {auth !== null && auth.loggedIn && <Menu.Item className="divider" />}
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          icon="home"
          active={activeItem === ''}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to="/updated"
          name="updated"
          icon="refresh"
          active={activeItem === 'updated'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/popular"
          name="popular"
          icon="fire"
          active={activeItem === 'popular'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/trending"
          name="trending"
          icon="line chart"
          active={activeItem === 'trending'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/genres"
          name="genres"
          icon="filter"
          active={activeItem === 'genres'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/schedule"
          name="schedule"
          icon="checked calendar"
          active={activeItem === 'schedule'}
          onClick={this.handleItemClick}
        />
        <Menu.Item className="divider" />
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default withRouter(connect(mapStateToProps)(SideBar));
