import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const HeaderBarSec = ({ text }) => {
  return (
    <Grid.Row className="header-row-sec">
      <Grid.Column>
        <Header className="header-section-sec" inverted size="medium">
          {text}
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HeaderBarSec;
