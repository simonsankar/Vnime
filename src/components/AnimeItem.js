import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

const AnimeItem = ({ anime }) => {
  return (
    <Grid.Column mobile={5} tablet={5} computer={3} className="fade-in">
      <Card fluid as={Link} to={anime.url} className="card-no-border">
        <Image rounded src={anime.anime.poster} fluid />
        {anime.episode && (
          <div className="card-episodes">
            <span>EP {anime.episode}</span>
          </div>
        )}
        {anime.extra && (
          <div className="card-extra">
            <span>
              <Icon name="eye" size="small" />
              {anime.extra}
            </span>
          </div>
        )}
        <div className="card-overlay">{anime.anime.title}</div>
        <div className="card-play">
          <Icon name="video play" size="huge" />
        </div>
      </Card>
    </Grid.Column>
  );
};

export default AnimeItem;
