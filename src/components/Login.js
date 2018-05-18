import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserForm from './UserForm';

class Login extends Component {
  render() {
    return (
      <div className="fade-in page">
        <Grid
          className="page-primary page-clip-forwardslash-top"
          padded="horizontally"
        >
          <div className="page-header">
            <h1>LOGIN</h1>
          </div>
        </Grid>
        <UserForm className="centered-form" />
        <Grid
          className="page-secondary page-clip-forwardslash-bottom"
          padded="horizontally"
        />
      </div>
    );
  }
}

export default Login;
