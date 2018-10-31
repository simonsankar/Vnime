import React from 'react';

import { Grid, List, Divider } from 'semantic-ui-react';
import GenreLabel from './GenreLabel';
const Hero = ({ anime, setGenresOption }) => {
  return (
    <div
      className="hero fade-in"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage: `url(${anime.wallpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 10%'
      }}
    >
      <Grid className="hero-content" padded="horizontally">
        <Grid.Column floated="right" mobile={12} tablet={12} computer={12}>
          <h1 className="hero-header">
            {anime.info.title}
            <small className="hero-subheader">
              {anime.synonyms.map(el => `${el.title}   `)}
            </small>
          </h1>
          <List horizontal size="mini">
            {anime.genres.map(el => (
              <GenreLabel el={el} key={el.id} />
            ))}
          </List>
          <Divider hidden />
        </Grid.Column>
      </Grid>
      <div className="hero-overlay" />
    </div>
  );
};

export default Hero;
