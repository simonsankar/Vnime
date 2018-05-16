import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.auth);
    if (!this.props.auth || this.props.auth.loggedIn === false) {
      this.props.history.push('/login');
    }
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.auth);
    if (prevProps.auth !== this.props.auth) {
      if (this.props.auth.loggedIn === false) {
        this.props.history.push('/login');
      }
    }
  }
  render() {
    return <div>Dashboard!</div>;
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, null)(withRouter(Dashboard));
