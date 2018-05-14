import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

class ScheduleItem extends Component {
  render() {
    const { anime } = this.props;
    return (
      <Card className="fade-in" as={Link} to={`/watch/${anime.id}`}>
        <Card.Content
          className="schedule-content"
          style={{
            background: `url(${anime.poster})`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover'
          }}
        >
          <div className="schedule">
            <Card.Header>
              {anime.time === 'RELEASED' ? (
                <em>{anime.time}</em>
              ) : anime.time ? (
                anime.time
              ) : (
                '???'
              )}
            </Card.Header>
            <Card.Meta>EP: {anime.ep}</Card.Meta>
            <Card.Description>{anime.title}</Card.Description>
          </div>
          <Icon className="schedule-overlay" name="play" size="huge" />
        </Card.Content>
      </Card>
    );
  }
}

export default ScheduleItem;
