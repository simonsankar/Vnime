import React from 'react';
import { Grid, List, Image, Card, Header } from 'semantic-ui-react';

const SideContent = props => {
  const { anime } = props;
  return (
    <Grid.Column
      mobile={4}
      tablet={4}
      computer={4}
      className="side-details fade-in"
    >
      <Card fluid>
        <Image src={anime.poster} fluid />
      </Card>
      <Header>{anime.info.title}</Header>
      <p>{anime.info.synopsis}</p>
      <List size="mini" relaxed>
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
            {anime.info.episode_count}
          </List.Content>
        </List.Item>
        <List.Item>
          Duration<List.Content floated="right">
            {anime.info.episode_length}
          </List.Content>
        </List.Item>
        <List.Item>
          Aired<List.Content floated="right">
            {anime.info.started_airing_date}
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
};

export default SideContent;
