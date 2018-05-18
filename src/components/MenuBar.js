import React, { Component } from 'react';
import { Link } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMaxIcon } from '../actions/toggleMaxIcon';
import { logoutUser } from '../actions/setAuth';

import { Menu, Dropdown } from 'semantic-ui-react';
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
    const { auth, logoutUser } = this.props;
    return (
      <TitleBar
        title={auth ? auth.response.uid : 'Hi new unregistered user :)'}
        className="menu-bar"
        controls
        isMaximized={this.props.maxIcon}
        theme="dark"
        background="#08568a"
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}

const mapStateToProps = ({ maxIcon, auth }) => ({ maxIcon, auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMaxIcon, logoutUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);

//  <Menu borderless className="draggable menu-bar">
//         <Dropdown item icon="user" className="menu-btn">
//           <Dropdown.Menu>
//             {auth === null || !auth.loggedIn ? (
//               <Dropdown.Item
//                 as={Link}
//                 to="/login"
//                 icon="sign in"
//                 text="Login/SignUp"
//               />
//             ) : null}
//             {auth !== null &&
//               auth.loggedIn && (
//                 <Dropdown.Item
//                   icon="sign out"
//                   text="Logout"
//                   onClick={() => logoutUser()}
//                 />
//               )}
//           </Dropdown.Menu>
//         </Dropdown>
//         {auth !== null &&
//           auth.loggedIn && <Menu.Item>{auth.response.uid}</Menu.Item>}

//         <Menu.Menu position="right">
//           <Menu.Item
//             className="menu-btn"
//             key="minimize"
//             icon="window minimize"
//             onClick={() => this.handleTitleBarClick('minimize')}
//           />

//           {this.props.maxIcon ? (
//             <Menu.Item
//               className="menu-btn "
//               key="restore"
//               icon="window restore"
//               onClick={() => this.handleTitleBarClick('restore')}
//             />
//           ) : (
//             <Menu.Item
//               className="menu-btn"
//               key="maximize"
//               icon="window maximize"
//               onClick={() => this.handleTitleBarClick('maximize')}
//             />
//           )}

//           <Menu.Item
//             className="menu-btn menu-btn-red"
//             key="close"
//             icon="x"
//             onClick={() => this.handleTitleBarClick('close')}
//           />
//         </Menu.Menu>
//       </Menu>
