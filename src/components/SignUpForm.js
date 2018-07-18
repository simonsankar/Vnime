import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser, signupUser, logoutUser } from '../actions/setAuth';
import { createUser } from '../actions/getUser';

import { Form, Button, Input, Message } from 'semantic-ui-react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: { value: '', error: false },
      email: { value: '', error: false },
      password: { value: '', error: false }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      console.log(this.props.auth);
      if (this.props.auth.loggedIn) {
        const { uid } = this.props.auth.response;
        console.log(this.props.history, uid);
        this.props.createUser(uid, this.state.username.value);
        this.props.history.push('/dashboard');
      }
    }
  }

  // Handle SIgnUp
  handleSignUp(e) {
    e.preventDefault();
    console.log('Trying to SignUp User');
    const { username, email, password } = this.state;
    if (username.value !== '' && email.value && password.value) {
      this.props.signupUser(email.value, password.value);
    } else {
      console.log('Problems, cant sign up');
    }
  }

  // Set fields
  setUsername(e) {
    const value = e.target.value;
    if (/^ *$/.test(value)) {
      this.setState({ username: { value: value, error: true } });
    } else this.setState({ username: { value: value, error: false } });
  }
  setEmail(e) {
    const value = e.target.value;
    if (value.length < 3) {
      this.setState({ email: { value: value, error: true } });
    } else this.setState({ email: { value: value, error: false } });
  }
  setPassword(e) {
    const value = e.target.value;
    if (value.length < 6) {
      this.setState({ password: { value: value, error: true } });
    } else this.setState({ password: { value: value, error: false } });
  }

  render() {
    const { username, email, password } = this.state;
    const { auth } = this.props;
    return (
      <Form onSubmit={e => this.handleSignUp(e)}>
        <Form.Field>
          <label>Username</label>
          <Input
            icon="user"
            iconPosition="left"
            type="text"
            placeholder="hashirama10"
            value={username.value}
            error={username.error}
            onChange={e => this.setUsername(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            icon="mail"
            iconPosition="left"
            type="email"
            placeholder="senju4leaf@mail.com"
            value={email.value}
            error={email.error}
            onChange={e => this.setEmail(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            icon="asterisk"
            iconPosition="left"
            type="password"
            value={password.value}
            error={password.error}
            onChange={e => this.setPassword(e)}
          />
        </Form.Field>
        {auth &&
          auth.message && (
            <Message size="mini" negative>
              <p>{auth.message}</p>
            </Message>
          )}

        <Button
          type="button"
          color="green"
          fluid
          onClick={e => this.handleSignUp(e)}
        >
          Sign Up!
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { loginUser, signupUser, logoutUser, createUser },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpForm));
