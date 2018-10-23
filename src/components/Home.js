import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getPopularAndTrendingAnimes,
  resetPopularAndTrendingAnimes
} from "../actions/getPopularAndTrendingAnimes";

import { Grid, Divider, List } from "semantic-ui-react";
import SampleList from "./SampleList";

class Home extends Component {
  componentWillMount() {
    this.props.getPopularAndTrendingAnimes();
  }
  componentWillUnmount() {
    this.props.resetPopularAndTrendingAnimes();
  }

  render() {
    const { sampleAnimes, auth } = this.props;
    return (
      <Grid className="home">
        <Grid.Row className="home-section home-section-primary">
          <Grid.Column>
            <div className="home-section-header">
              <h1>VNIME</h1>
              <p>
                Watch your favourite anime all day, everyday, every week, every
                June.
              </p>
              {auth && auth.loggedIn ? (
                <Link to="/dashboard" className="btn-clear">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login" className="btn-clear">
                  Login | SignUp
                </Link>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="home-section home-section-secondary">
          {sampleAnimes !== null ? (
            <div>
              <SampleList text="Popular Today" animes={sampleAnimes.popular} />
            </div>
          ) : (
            ""
          )}
          <Divider />
          {sampleAnimes !== null ? (
            <div>
              <SampleList
                text="Trending Today"
                animes={sampleAnimes.trending}
              />
            </div>
          ) : (
            ""
          )}
        </Grid.Row>
        <Grid.Row className="footer">
          <Grid.Column width={10}>
            <h3>Vnime</h3>
            <p>Vnime was built with Silk Touch I</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <List>
              <List.Item>
                <List.Icon name="hand peace" />
                <List.Content>Vnime</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>D'Abadie, TT</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:sjsankar10@gmail.com">sjsankar10@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/simonsankar/Vnime">
                    github.com/simonsankar/vnime
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ sampleAnimes, auth }) => ({ sampleAnimes, auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getPopularAndTrendingAnimes, resetPopularAndTrendingAnimes },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
