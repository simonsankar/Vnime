import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeAnimeFromUser } from '../actions/getUser';

import { Grid, Image, Popup, Button } from 'semantic-ui-react';

class DashboardItem extends Component {
  render() {
    const { auth, removable, anime, removeAnimeFromUser } = this.props;
    return (
      <Grid.Column className="sample" width={3}>
        <Popup
          size="mini"
          trigger={
            <div className="fade-in">
              <Image
                as={Link}
                to={`/watch/${anime.info.id}`}
                className="sample-card"
                bordered
                fluid
                rounded
                src={anime.poster}
              />
              <div className="sample-line" />
              {removable && (
                <Button
                  onClick={() => removeAnimeFromUser(auth.response.uid, anime)}
                  className="removable fade-in"
                  size="mini"
                  color="red"
                  icon="minus"
                  circular
                />
              )}
            </div>
          }
          content={anime.info.title}
          basic
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeAnimeFromUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardItem);
