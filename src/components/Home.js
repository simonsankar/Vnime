import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getPopularAndTrendingAnimes,
  resetPopularAndTrendingAnimes
} from '../actions/getPopularAndTrendingAnimes';

import { Grid, Button } from 'semantic-ui-react';

class Home extends Component {
  componentWillMount() {
    this.props.getPopularAndTrendingAnimes();
  }
  componentWillUnmount() {
    this.props.resetPopularAndTrendingAnimes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sampleAnimes !== this.props.sampleAnimes) {
      console.log(this.props.sampleAnimes);
    }
  }

  render() {
    return (
      <div className="fade-in page">
        <Grid
          className="page-primary page-clip-backslash-top"
          padded="horizontally"
        >
          <div className="page-header">
            <h1>VNIME</h1>
          </div>
        </Grid>
        <Grid
          className="page-secondary page-clip-backslash-bottom"
          padded="horizontally"
        />
        <div className="page-content">
          <Button as={Link} to="/login" size="huge">
            LOGIN
          </Button>
          oasidaoisdaoisdnaoisdnaosdnaosdnaosdnaolo Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Officia quaerat voluptates eum deserunt
          odit voluptatum omnis labore beatae voluptatibus dolor repellendus
          placeat quidem similique fuga, aliquam ipsa veritatis molestias?
          Beatae.
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ sampleAnimes }) => ({ sampleAnimes });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getPopularAndTrendingAnimes, resetPopularAndTrendingAnimes },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
