import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Image, Header } from 'semantic-ui-react';

class RecentlyViewed extends Component {
  makeDate(timestamp) {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let zone = 'am';
    if (hour >= 12) zone = 'pm';
    return `${hour}:${minutes}${zone} - ${day}/${month}/${year}`;
  }
  makeList(recents) {
    return Object.values(recents).map(el => {
      return (
        <List.Item
          className="recent-item"
          as={Link}
          to={`/watch/${el.id}`}
          key={el.id}
        >
          <Image avatar src={el.poster} />
          <List.Content>
            <List.Header>{el.title}</List.Header>
            <List.Description>{this.makeDate(el.date)}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }
  render() {
    const { recents } = this.props;
    return (
      <div>
        <Header className="dashboard-header">Recently Viewed</Header>
        <List>{this.makeList(recents)}</List>
      </div>
    );
  }
}

export default RecentlyViewed;
