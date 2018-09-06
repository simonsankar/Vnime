import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleToBeAdded } from '../actions/getUser';

import { Header, Button, Icon, Modal, Message } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      modalOpen: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.toBeAdded !== prevProps.toBeAddded) {
      console.log(prevProps.toBeAddded, ' -> ', this.props.toBeAdded);
    }
  }
  // Forms toggle
  toggleForm() {
    const login = this.state.loginForm;
    this.setState({ loginForm: !login });
  }
  // Handle Modal states
  handleOpen = () => {
    console.log('HELLO i wana add this anime');
    this.props.toggleToBeAdded(true);
    this.setState({ modalOpen: true });
  };
  handleClose = () => {
    this.props.toggleToBeAdded(true);
    this.setState({ modalOpen: false });
  };

  render() {
    const { auth } = this.props;
    const { loginForm } = this.state;

    return (
      <Modal
        className="fix fade-in"
        trigger={
          <Button
            circular
            color="grey"
            icon="plus"
            size="mini"
            onClick={this.handleOpen || auth.loggedIn}
          />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        size="tiny"
      >
        <Header
          icon="user outline"
          content="You'll need to login or sign up first!"
        />
        <Modal.Content>
          {loginForm ? (
            <div>
              <LoginForm className="fade-in" pushable={false} />
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
            <div>
              <SignUpForm className="fade-in" pushable={false} />
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
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={this.handleClose} inverted>
            <Icon name="close" /> Nevermind
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ auth, toBeAdded }) => ({ auth, toBeAdded });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleToBeAdded }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
