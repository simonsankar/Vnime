import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getPopularAndTrendingAnimes,
  resetPopularAndTrendingAnimes
} from '../actions/getPopularAndTrendingAnimes';

import { Grid, Divider, List } from 'semantic-ui-react';
import SampleList from './SampleList';
import Particles from 'react-particles-js';

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
        <Grid.Row className="home-section-particles">
          <Particles
            className="fade-in"
            style={{
              backgroundColor: '#38597c',
              width: '100%',
              height: '100%',
              zIndex: '1',
              position: 'absolute',
              top: '0',
              bottom: '0'
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
                  value: '#ffffff'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000'
                  },
                  polygon: {
                    nb_sides: 7
                  },
                  image: {
                    src: 'img/github.svg',
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
                  color: '#ffffff',
                  opacity: 0.10422178395625899,
                  width: 0
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: 'none',
                  random: true,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'bubble'
                  },
                  onclick: {
                    enable: false,
                    mode: 'repulse'
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
                    distance: 400,
                    duration: 0.4
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
            ''
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
            ''
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
