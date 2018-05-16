import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserForm from './UserForm';

class Login extends Component {
  render() {
    return (
      <div className="fade-in page">
        <Grid className="page-primary" padded="horizontally">
          <div className="page-header">
            <h1>LOGIN</h1>
          </div>
        </Grid>
        <Grid className="page-secondary" padded="horizontally" />
        <UserForm className="centered-form" />
      </div>
    );
  }
}

export default Login;
