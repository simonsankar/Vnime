import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSuggestions, resetSuggestions } from '../actions/getSuggestions';
import _ from 'lodash';
import { Search, Image } from 'semantic-ui-react';

const customRender = ({ title, url, img, year, type }) => {
  return (
    <Link to={url} className="fade-in result-wrapper" key={url}>
      <Image className="result-image" src={img} size="mini" floated="left" />
      <strong>{title}</strong>
      {'\n'}
      {type}
      <em>, [{year}]</em>
    </Link>
  );
};

class SearchBar extends Component {
  state = { searchTerm: '' };
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => {
    this.setState({ searchTerm: '' });
    this.props.resetSuggestions();
  };
  // Debouncec func
  getResults = _.debounce(value => {
    this.props.getSuggestions(value);
  }, 450);

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value });

    this.getResults(value);
  };

  handleResultSelect = (e, { url }) => {
    console.log('Selected:', url);
    this.resetComponent();
  };
  render() {
    const { searchTerm } = this.state;
    const { suggestions } = this.props;
    return (
      <Search
        className="searchBar"
        size="mini"
        placeholder="Death Note ...maybe?"
        minCharacters={3}
        loading={searchTerm !== '' && suggestions === null ? true : false}
        results={suggestions}
        value={searchTerm}
        resultRenderer={customRender}
        onSearchChange={this.handleSearchChange}
        onResultSelect={this.handleResultSelect}
      />
    );
  }
}

const mapStateToProps = ({ suggestions }) => ({ suggestions });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSuggestions, resetSuggestions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
