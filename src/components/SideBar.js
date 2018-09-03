import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';

class SideBar extends Component {
  componentDidMount() {}

  render() {
    const activeItem = this.props.location.pathname.replace('/', '');
    return (
      <Menu secondary vertical fixed="left" inverted className="side-bar">
        <Menu.Item>V N I M E</Menu.Item>
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
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(SideBar);
