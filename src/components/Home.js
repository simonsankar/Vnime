import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getPopularAndTrendingAnimes,
  resetPopularAndTrendingAnimes
} from "../actions/getPopularAndTrendingAnimes";

import { Grid, Divider, List, Button } from "semantic-ui-react";
import SampleList from "./SampleList";
import Particles from "react-particles-js";

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
      <Grid className="home" stackable>
        <Grid.Row className="home-section-particles">
          <Particles
            className="fade-in"
            style={{
              backgroundColor: "#38597c",
              width: "100%",
              height: "100%",
              zIndex: "1",
              position: "absolute",
              top: "0",
              bottom: "0"
            }}
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 7
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 7,
                    size_min: 0.3,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 144.30708547789706,
                  color: "#ffffff",
                  opacity: 0.10422178395625899,
                  width: 0
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: false,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 0.27969036631211774
                    }
                  },
                  bubble: {
                    distance: 207.079689136843,
                    size: 2,
                    duration: 2,
                    opacity: 0,
                    speed: 1
                  },
                  repulse: {
                    distance: 30,
                    duration: 2
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
          <Grid.Column className="home-section-header-wrapper">
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
            <h4>Vnime 2018&copy;</h4>
            <p>Vnime was built with Silk Touch I</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>Built using</h4>
            <List>
              <List.Item>
                <List.Icon name="react" />
                <List.Content>ReactJS</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="js" />
                <List.Content>ElectronJS</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="stripe s" />
                <List.Content>SemanticUI</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="database" />
                <List.Content>Firebase</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="play" />
                <List.Content>Masterani.me</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Button icon="vuejs" circular />
            <p>Vnime 2018&copy;</p>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Button icon="location arrow" circular />
            <p>D'Abadie,TT</p>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Button icon="mail" circular />
            <p>Email</p>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Button icon="github" circular />
            <p>Github</p>
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
