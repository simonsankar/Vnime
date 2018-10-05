import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser, signupUser, logoutUser } from '../actions/setAuth';

import { Form, Button, Input, Message } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '', error: false },
      password: { value: '', error: false }
    };
  }
  componentDidMount() {
    if (this.props.auth) {
      console.log(this.props.auth);
      if (
        (this.props.auth.loggedIn && this.props.pushable) ||
        this.props.auth.loggedIn
      ) {
        console.log(this.props.history);
        this.props.history.push('/dashboard');
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      console.log(this.props.auth);
      if (this.props.auth.loggedIn && this.props.pushable) {
        console.log(this.props.history);
        this.props.history.push('/dashboard');
      }
    }
  }

  // Handle logging
  handleLogin(e) {
    e.preventDefault();
    console.log('Trying to Login User');
    const { email, password } = this.state;
    if (email.value !== '' && password.value) {
      this.props.loginUser(email.value, password.value);
    } else {
      console.log('Problems logging in');
    }
  }
  // Set fields
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
    const { email, password } = this.state;
    const { auth } = this.props;
    return (
      <Form onSubmit={e => this.handleLogin(e)}>
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

        <Button color="blue" fluid type="submit">
          Login!
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser, signupUser, logoutUser }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
