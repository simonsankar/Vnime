import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Popup } from 'semantic-ui-react';

const SampleItem = ({ anime }) => {
  return (
    <Grid.Column className="sample" computer={2}>
      <Popup
        size="mini"
        trigger={
          <div>
            <Image
              as={Link}
              to={anime.url}
              className="sample-card"
              bordered
              fluid
              rounded
              src={anime.anime.poster}
            />
            <div className="sample-line" />
          </div>
        }
        content={anime.anime.title}
        basic
      />
    </Grid.Column>
  );
};

export default SampleItem;
