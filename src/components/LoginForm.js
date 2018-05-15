import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/setAuth';

import { Segment, Form, Button, Input } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '', error: false },
      password: { value: '', error: false }
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      console.log(this.props.auth);
      if (this.props.auth.loggedIn) {
        return <Redirect to="/dashboard" />;
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
    const { email, password } = this.state;
    if (email.value && password.value) {
      this.props.loginUser(email.value, password.value);
    } else {
      if (!email.value) {
        this.setState({ email: { value: email.value, error: true } });
      }
      if (!password.value) {
        this.setState({ password: { value: password.value, error: true } });
      }
    }
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
    const { email, password } = this.state;
    const { auth } = this.props;
    return (
      <Segment className="centered-form" raised>
        <Form onSubmit={e => this.handleSubmit(e)}>
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
          {auth && <div>{auth.message}</div>}
          <Button type="submit">Login!</Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
