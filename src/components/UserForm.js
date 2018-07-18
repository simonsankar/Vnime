import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Segment, Message, Button } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true
    };
  }
  toggleForm() {
    const login = this.state.loginForm;
    this.setState({ loginForm: !login });
  }

  render() {
    const { loginForm } = this.state;
    return (
      <div className="fade-in page">
        <Grid
          className="page-primary page-clip-forwardslash-top"
          padded="horizontally"
        >
          <div className="page-header">
            <h1>{loginForm ? 'Login' : 'SignUp'}</h1>
          </div>
        </Grid>
        <Segment className="centered-form" raised>
          {loginForm ? (
            <div className="fade-in">
              <LoginForm />
              <Message size="mini" info>
                <Message.Header>No account?</Message.Header>
                <p>
                  Then you probably might want to{' '}
                  <Button
                    basic
                    color="green"
                    compact
                    onClick={() => this.toggleForm()}
                    size="mini"
                  >
                    Sign Up!
                  </Button>
                </p>
              </Message>
            </div>
          ) : (
            <div className="fade-in">
              <SignUpForm />
              <Message size="mini" info>
                <Message.Header>Got an account already?</Message.Header>
                <p>
                  Then why don't you try to{' '}
                  <Button
                    basic
                    color="blue"
                    compact
                    onClick={() => this.toggleForm()}
                    size="mini"
                  >
                    Login!
                  </Button>
                </p>
              </Message>
            </div>
          )}
        </Segment>
        <Grid
          className="page-secondary page-clip-forwardslash-bottom"
          padded="horizontally"
        />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  null
)(UserForm);
