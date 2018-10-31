import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setGenresOption } from '../actions/setFilterQuery';
import { getFilteredAnimes, resetFilteredAnimes } from '../actions/getAnimes';
import { Button } from 'semantic-ui-react';

class GenreButton extends Component {
  state = { active: false };
  componentDidMount() {
    let found = _.includes(this.props.genres, this.props.el.value);
    if (found) {
      this.setState({ active: true });
    } else this.setState({ active: false });
  }
  componentDidUpdate(prevProps) {
    if (this.props.genres !== prevProps.genres) {
      let found = _.includes(this.props.genres, this.props.el.value);
      if (found) {
        this.setState({ active: true });
      } else this.setState({ active: false });
    }
  }
  handleClick = (e, props) => {
    const toggleActive = !this.state.active;
    this.setState({ active: toggleActive });

    const gnr = this.props.genres;
    if (toggleActive) {
      gnr.push(props.value);
    } else {
      let index = gnr.indexOf(props.value);
      gnr.splice(index, 1);
    }

    this.props.setGenresOption(gnr);
    this.props.resetFilteredAnimes();
    const { sort, type, page, status } = this.props;
    const qry = {
      odr: sort,
      typ: type,
      sts: status,
      pg: page,
      gnr: gnr
    };
    this.props.getFilteredAnimes(qry);
  };
  render() {
    const { el } = this.props;
    const { active } = this.state;
    return (
      <Button
        active={active}
        onClick={this.handleClick}
        value={el.value}
        key={el.value}
      >
        {el.text}
      </Button>
    );
  }
}

const mapStateToProps = ({ sort, status, type, page, genres }) => ({
  sort,
  status,
  type,
  page,
  genres
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setGenresOption, getFilteredAnimes, resetFilteredAnimes },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreButton);
