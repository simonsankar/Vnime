import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// Bars
import SideBar from './components/SideBar';
import MenuBar from './components/MenuBar';
// import { TitleBar } from 'electron-react-titlebar';
// import 'electron-react-titlebar/assets/style.css';
// Pages
import Home from './components/Home';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import Genres from './components/Genres';
import Schedule from './components/Schedule';
import Updated from './components/Updated';
import Popular from './components/Popular';
import Trending from './components/Trending';
import Watch from './components/Watch';

class App extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location)
      console.log(this.props.location);
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <SideBar />
        <div className="main-content overflowY">
          <MenuBar className="menu-bar" />
          <div className="lower-content">
            <Switch>
              {location.pathname.includes('index.html') ? (
                <Redirect exact to="/" />
              ) : (
                ''
              )}
              <Route exact path="/" component={Home} />
              <Route path="/login" component={UserForm} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/updated" component={Updated} />
              <Route path="/popular" component={Popular} />
              <Route path="/trending" component={Trending} />
              <Route path="/genres" component={Genres} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/watch/*" component={Watch} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
