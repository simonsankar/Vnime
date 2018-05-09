import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid className="home-primary" padded="horizontally">
          <div className="home-header">
            <h1>VNIME</h1>
          </div>
        </Grid>
        <Grid className="home-secondary" padded="horizontally" />
        <LoginForm className="centered-form" />
      </div>
    );
  }
}

export default Home;
