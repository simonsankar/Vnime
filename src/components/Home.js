import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
class Home extends Component {
  render() {
    return (
      <div className="fade-in page">
        <Grid className="page-primary" padded="horizontally">
          <div className="page-header">
            <h1>VNIME</h1>
          </div>
        </Grid>
        <Grid className="page-secondary" padded="horizontally" />
        <div className="page-content">
          <Button as={Link} to="/login" size="huge">
            LOGIN
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
