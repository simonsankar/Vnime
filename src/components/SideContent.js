import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAnimeToUser } from '../actions/getUser';

import {
  Grid,
  List,
  Image,
  Card,
  Header,
  Button,
  Popup,
  Rating
} from 'semantic-ui-react';

class SideContent extends Component {
  handleAddAnimeToUser() {
    this.props.addAnimeToUser('C8JetjMvlkOTraylU4G85JnxdUc2', this.props.anime);
  }
  render() {
    const { anime } = this.props;
    return (
      <Grid.Column
        mobile={4}
        tablet={4}
        computer={4}
        className="side-details fade-in"
      >
        <Card fluid>
          <Image src={anime.poster} fluid />
          <div className="fav">
            <Popup
              trigger={
                <Button
                  circular
                  color="blue"
                  icon="plus"
                  size="mini"
                  onClick={() => this.handleAddAnimeToUser()}
                />
              }
              content="Add to FavList?"
              position="top left"
              on="hover"
              size="mini"
            />
          </div>
        </Card>
        <Header>{anime.info.title}</Header>
        <p>{anime.info.synopsis}</p>
        <List size="mini" relaxed>
          <List.Item>
            Rating<List.Content floated="right">
              <Rating
                size="mini"
                disabled
                rating={anime.info.score.toFixed(1)}
                maxRating={5}
              />
            </List.Content>
          </List.Item>
          <List.Item>
            Score<List.Content floated="right">
              {anime.info.score.toFixed(1)}/5
            </List.Content>
          </List.Item>

          <List.Item>
            Type<List.Content floated="right">
              {anime.info.type === 0
                ? 'TV'
                : anime.info.type === 1
                  ? 'OVA'
                  : anime.info.type === 2
                    ? 'MOVIE'
                    : anime.info.type === 3
                      ? 'SPECIAL'
                      : 'ONA'}
            </List.Content>
          </List.Item>
          <List.Item>
            Status<List.Content floated="right">
              {anime.info.status === 0
                ? 'COMPLETED'
                : anime.info.status === 1
                  ? 'ONGOING'
                  : 'NOT YET AIRED'}
            </List.Content>
          </List.Item>
          <List.Item>
            Episodes<List.Content floated="right">
              {anime.info.episode_count || '???'}
            </List.Content>
          </List.Item>
          <List.Item>
            Duration<List.Content floated="right">
              {anime.info.episode_length || '???'}
            </List.Content>
          </List.Item>
          <List.Item>
            Aired<List.Content floated="right">
              {anime.info.started_airing_date || '???'}
            </List.Content>
          </List.Item>
          <List.Item>
            Age<List.Content floated="right">
              {anime.info.age_rating}
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAnimeToUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SideContent);
