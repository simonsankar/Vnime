import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { toggleMaxIcon } from '../actions/toggleMaxIcon';
import { connect } from 'react-redux';

import { Menu } from 'semantic-ui-react';
// const ipcRenderer = window.require('electron').ipcRenderer;
const remote = window.require('electron').remote;

class MenuBar extends Component {
  componentDidMount() {
    const isMax = remote.getCurrentWindow().isMaximized();
    this.props.toggleMaxIcon(isMax);
  }
  handleTitleBarClick(key) {
    const isMax = remote.getCurrentWindow().isMaximized();
    console.log(key, isMax);
    if (key === 'minimize') remote.getCurrentWindow().minimize();
    else if (key === 'maximize') {
      this.props.toggleMaxIcon(true);
      remote.getCurrentWindow().maximize();
    } else if (key === 'restore') {
      this.props.toggleMaxIcon(false);
      remote.getCurrentWindow().restore();
    } else remote.getCurrentWindow().close();
  }
  render() {
    return (
      <Menu borderless className="draggable menu-bar">
        <Menu.Item icon="user" className="menu-btn" />
        <Menu.Menu position="right">
          <Menu.Item
            className="menu-btn"
            key="minimize"
            icon="window minimize"
            onClick={() => this.handleTitleBarClick('minimize')}
          />

          {this.props.maxIcon ? (
            <Menu.Item
              className="menu-btn "
              key="restore"
              icon="window restore"
              onClick={() => this.handleTitleBarClick('restore')}
            />
          ) : (
            <Menu.Item
              className="menu-btn"
              key="maximize"
              icon="window maximize"
              onClick={() => this.handleTitleBarClick('maximize')}
            />
          )}

          <Menu.Item
            className="menu-btn menu-btn-red"
            key="close"
            icon="x"
            onClick={() => this.handleTitleBarClick('close')}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ maxIcon }) => ({ maxIcon });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMaxIcon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
