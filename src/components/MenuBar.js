import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMaxIcon } from '../actions/toggleMaxIcon';
import { getUser } from '../actions/getUser';

import { TitleBar } from 'react-desktop';
// const ipcRenderer = window.require('electron').ipcRenderer;
const remote = window.require('electron').remote;

class MenuBar extends Component {
  componentDidMount() {
    const isMax = remote.getCurrentWindow().isMaximized();
    this.props.toggleMaxIcon(isMax);
  }
  componentDidUpdate(prevProps) {
    if (this.props.isMax !== remote.getCurrentWindow().isMaximized()) {
      const isMax = remote.getCurrentWindow().isMaximized();
      this.props.toggleMaxIcon(isMax);
    }
    if (prevProps.auth !== this.props.auth && this.props.auth.loggedIn) {
      const { uid } = this.props.auth.response;
      this.props.getUser(uid);
    }
  }

  close = () => remote.getCurrentWindow().close();
  minimize = () => remote.getCurrentWindow().minimize();
  toggleMaximize = () => {
    const isMax = remote.getCurrentWindow().isMaximized();
    this.props.toggleMaxIcon(isMax);

    if (isMax === true) {
      remote.getCurrentWindow().restore();
      this.props.toggleMaxIcon(!isMax);
    } else {
      remote.getCurrentWindow().maximize();
      this.props.toggleMaxIcon(!isMax);
    }
  };

  render() {
    return (
      <TitleBar
        title=" "
        className="menu-bar"
        controls
        isMaximized={this.props.maxIcon}
        theme="dark"
        background="#38597c"
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}

const mapStateToProps = ({ maxIcon }) => ({ maxIcon });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMaxIcon, getUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
