import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addAnimeToUser,
  isAlreadyAdded,
  toggleToBeAdded,
  removeAnimeFromUser
} from '../actions/getUser';

import { Image, Card, Button, Popup, Confirm } from 'semantic-ui-react';
import UserModal from './UserModal';

class AnimePoster extends Component {
  state = { open: false, remove: false };
  // Confirm Adding
  open = () => this.setState({ open: true });
  close = () => {
    this.props.toggleToBeAdded(false);
    this.setState({ open: false });
  };
  onConfirm = () => {
    this.props.addAnimeToUser(this.props.auth.response.uid, this.props.anime);
    this.props.isAlreadyAdded(this.props.auth.response.uid, this.props.anime);
    this.props.toggleToBeAdded(false);
    this.setState({ open: false });
  };
  // Confirm removing
  openRemove = () => this.setState({ remove: true });
  closeRemove = () => this.setState({ remove: false });
  onConfirmRemove = () => {
    this.props.removeAnimeFromUser(
      this.props.auth.response.uid,
      this.props.anime
    );
    this.props.isAlreadyAdded(this.props.auth.response.uid, this.props.anime);
    this.setState({ remove: false });
  };

  componentDidMount() {
    const { auth, anime } = this.props;
    // Check if user is logged on and if anime is already added to their favlist
    if (auth && auth.loggedIn && anime) {
      this.props.isAlreadyAdded(auth.response.uid, anime);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth, anime } = this.props;
    // User just logged on, go check if anime is already added to favlist
    if (prevProps.auth !== auth && auth.loggedIn) {
      this.props.isAlreadyAdded(auth.response.uid, anime);
    }
    if (prevProps.anime !== this.props.anime) {
      this.props.isAlreadyAdded(auth.response.uid, anime);
    }
  }

  render() {
    const { anime, auth, alreadyAdded, toBeAdded } = this.props;

    return (
      <Card fluid>
        <Image src={anime.poster} fluid />
        <div className="fav">
          {auth && auth.loggedIn ? (
            alreadyAdded === false ? (
              <div>
                <Popup
                  trigger={
                    <Button
                      circular
                      color="blue"
                      icon="plus"
                      size="mini"
                      onClick={this.open}
                    />
                  }
                  content="Add to FavList?"
                  position="top left"
                  on="hover"
                  size="mini"
                />
                <Confirm
                  className="confirm-centered"
                  header="Add it?"
                  size="mini"
                  content={`Add ${anime.info.title} to your favlist?`}
                  open={
                    this.state.open ||
                    (auth.loggedIn && toBeAdded && !alreadyAdded)
                  }
                  onCancel={this.close}
                  onConfirm={this.onConfirm}
                />
              </div>
            ) : alreadyAdded === true ? (
              <div>
                <Popup
                  trigger={
                    <Button
                      circular
                      color="red"
                      size="mini"
                      icon="minus"
                      onClick={this.openRemove}
                    />
                  }
                  content="Remove from FavList?"
                  position="top left"
                  on="hover"
                  size="mini"
                />
                <Confirm
                  className="confirm-centered"
                  header="Remove it?"
                  size="mini"
                  content={`Remove ${anime.info.title} from your favlist?`}
                  confirmButton={'Remove'}
                  open={this.state.remove}
                  onCancel={this.closeRemove}
                  onConfirm={this.onConfirmRemove}
                />
                <Confirm
                  className="confirm-centered"
                  header="Already added!"
                  size="mini"
                  content={`${
                    anime.info.title
                  } is already added to your favlist.`}
                  open={
                    this.state.open ||
                    (auth.loggedIn && toBeAdded && alreadyAdded)
                  }
                  onCancel={this.close}
                  onConfirm={this.onConfirm}
                />
              </div>
            ) : (
              ''
            )
          ) : (
            <UserModal />
          )}
        </div>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth, toBeAdded, alreadyAdded }) => ({
  auth,
  toBeAdded,
  alreadyAdded
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addAnimeToUser,
      isAlreadyAdded,
      toggleToBeAdded,
      removeAnimeFromUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimePoster);
