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
        <Menu.Item
          className="draggable"
          as={Link}
          to="/"
          name="home"
          onClick={this.handleItemClick}
        >
          <Menu.Header>V N I M E</Menu.Header>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === ''}
          onClick={this.handleItemClick}
          icon="home"
        />
        <Menu.Item
          as={Link}
          to="/updated"
          name="updated"
          active={activeItem === 'updated'}
          onClick={this.handleItemClick}
          icon="refresh"
        />
        <Menu.Item
          as={Link}
          to="/popular"
          name="popular"
          active={activeItem === 'popular'}
          onClick={this.handleItemClick}
          icon="fire"
        />
        <Menu.Item
          as={Link}
          to="/trending"
          name="trending"
          active={activeItem === 'trending'}
          onClick={this.handleItemClick}
          icon="line chart"
        />
        <Menu.Item
          as={Link}
          to="/genres"
          name="genres"
          active={activeItem === 'genres'}
          onClick={this.handleItemClick}
          icon="filter"
        />
        <Menu.Item
          as={Link}
          to="/schedule"
          name="schedule"
          active={activeItem === 'schedule'}
          onClick={this.handleItemClick}
          icon="checked calendar"
        />
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(SideBar);
