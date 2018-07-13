import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const HeaderBar = ({ text }) => {
  return (
    <Grid.Row className="header-row">
      <Grid.Column>
        <Header className="header-section header-section-primary" size="huge">
          {text}
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HeaderBar;
