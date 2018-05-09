import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
class VideoPlayer extends Component {
  render() {
    const { selectedVideo } = this.props;
    return (
      <Segment style={{ height: '65vh' }}>
        {selectedVideo !== null ? (
          <iframe
            className="fade-in"
            title={selectedVideo}
            allowFullScreen={true}
            sandbox="allow-same-origin allow-scripts"
            scrolling="no"
            width="100%"
            height="100%"
            src={selectedVideo}
            frameBorder="0"
          />
        ) : (
          <Dimmer active inverted>
            <Loader size="huge">Loading Video...</Loader>
          </Dimmer>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = ({ selectedVideo }) => ({ selectedVideo });

export default connect(mapStateToProps, null)(VideoPlayer);
