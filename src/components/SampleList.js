import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';
import SampleItem from './SampleItem';

const SampleList = ({ text, animes }) => {
  return (
    <Grid>
      <Grid.Row>
        <h2 className="sample-header">{text}</h2>
      </Grid.Row>
      {animes.map((el, index) => {
        return <SampleItem key={el.url} anime={el} />;
      })}
      <Grid.Column className="sample" computer={2} verticalAlign="top">
        {text === 'Currently Popular' ? (
          <Link to="/popular" className="btn-secondary">
            More →
          </Link>
        ) : (
          <Link to="/trending" className="btn-secondary">
            More →
          </Link>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default SampleList;
