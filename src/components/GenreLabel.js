import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setGenresOption,
  resetGenresOption,
  resetPageOption,
  resetSortOption,
  resetStatusOption,
  resetTypeOption
} from '../actions/setFilterQuery';
import { List, Label } from 'semantic-ui-react';

class GenreLabel extends Component {
  handleClick = (e, props) => {
    this.props.resetGenresOption();
    this.props.resetSortOption();
    this.props.resetTypeOption();
    this.props.resetStatusOption();
    this.props.resetPageOption();
    const { el } = this.props;

    let gnr = [];
    gnr.push(el.id);
    this.props.setGenresOption(gnr);
    this.props.history.push('/genres');
  };
  render() {
    const { el } = this.props;
    return (
      <List.Item key={el.id} onClick={this.handleClick}>
        <Label size="tiny" className="label-clear" basic>
          {el.name}
        </Label>
      </List.Item>
    );
  }
}

const mapStateToProps = ({ genres }) => ({ genres });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGenresOption,
      resetGenresOption,
      resetPageOption,
      resetSortOption,
      resetStatusOption,
      resetTypeOption
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GenreLabel));
