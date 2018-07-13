import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectVideo, resetVideo } from '../actions/selectVideo';
import { Dropdown } from 'semantic-ui-react';

class VideoOptions extends Component {
  componentDidMount() {
    this.props.resetVideo();
    if (this.props.episodeOptions)
      this.props.selectVideo(this.props.episodeOptions[0].value);
    else if (this.props.episodeOptions === false) {
      this.props.selectVideo(false);
    }
  }
  componentDidUpdate(prevProps) {
    // On anime change
    if (this.props.location !== prevProps.location) {
      // Did we have options?
      if (this.props.episodeOptions)
        this.props.selectVideo(this.props.episodeOptions[0].value);
      else if (this.props.episodeOptions === false) {
        this.props.selectVideo(false);
      }
    }
    // On options change
    if (
      this.props.episodeOptions !== prevProps.episodeOptions &&
      this.props.episodeOptions[0]
    ) {
      this.props.selectVideo(this.props.episodeOptions[0].value);
    }
  }
  handleChange(e, data) {
    console.log(data.value);
    this.props.selectVideo(data.value);
  }

  render() {
    const { episodeOptions } = this.props;
    return (
      <div className="inline-block">
        {episodeOptions !== null && episodeOptions !== false ? (
          <Dropdown
            size="small"
            selection
            placeholder="Select Video Host"
            defaultValue={episodeOptions[0].value}
            options={episodeOptions}
            onChange={(e, data) => this.handleChange(e, data)}
          />
        ) : (
          <div>Cannot find links :/</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ episodeOptions }) => ({
  episodeOptions
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectVideo, resetVideo }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VideoOptions)
);
