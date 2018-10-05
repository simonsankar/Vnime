import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateUserDetails,
  updateUserAvatar,
  getUserAvatar
} from '../actions/getUser';

import { Button, Modal, Input, Form } from 'semantic-ui-react';

class EditProfileModal extends Component {
  state = {
    edit: false,
    username: {
      value: this.props.username,
      error: false
    },
    files: null
  };
  // Edit profile
  show = () => this.setState({ edit: true });
  close = () => this.setState({ edit: false });

  // Set username
  setUsername(e) {
    const value = e.target.value;
    if (/^ *$/.test(value)) {
      this.setState({ username: { value: value, error: true } });
    } else this.setState({ username: { value: value, error: false } });
  }

  // Hande image update
  handleImage(files) {
    this.setState({ files: files[0] });
  }

  // Handle update submit
  handleUpdateSubmit(uid, username, files) {
    this.props.updateUserDetails(uid, username.value);
    if (files) this.props.updateUserAvatar(uid, files);
    this.close();
    this.props.history.push('/dashboard');
  }

  render() {
    const { edit, username, files } = this.state;
    const { uid } = this.props;

    return (
      <div className="btn-profile">
        <Button
          onClick={() => this.show()}
          basic
          circular
          color="blue"
          icon="pencil"
          floated="right"
          size="mini"
        />
        <Modal
          className="edit-centered"
          size="tiny"
          open={edit}
          onClose={this.close}
        >
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Username</label>
                <Input
                  type="text"
                  icon="write"
                  iconPosition="left"
                  value={username.value}
                  error={true}
                  onChange={e => this.setUsername(e)}
                  labelPosition="right"
                />
              </Form.Field>
              <Form.Field>
                <label>Avatar</label>
                <Input
                  accept="image/*"
                  type="file"
                  icon="image"
                  iconPosition="left"
                  placeholder="Add image"
                  labelPosition="right"
                  onChange={e => this.handleImage(e.target.files)}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.close()}>Cancel</Button>
            <Button
              onClick={() => this.handleUpdateSubmit(uid, username, files)}
              color="blue"
            >
              Update
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { updateUserDetails, updateUserAvatar, getUserAvatar },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(withRouter(EditProfileModal));
