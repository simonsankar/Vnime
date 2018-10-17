import React from "react";
import { Grid, Header } from "semantic-ui-react";

const HeaderBarSec = ({ text }) => {
  return (
    <Grid.Row className="header-row-sec">
      <Grid.Column>
        <Header
          className="header-section header-section-secondary"
          size="small"
        >
          {text}
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HeaderBarSec;
