import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
class LoginForm extends Component {
  render() {
    return (
      <Segment className="centered-form" raised>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="senju4leaf" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" />
          </Form.Field>
          <Button type="submit">Login!</Button>
        </Form>
      </Segment>
    );
  }
}

export default LoginForm;
