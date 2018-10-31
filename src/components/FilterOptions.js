import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFilteredAnimes, resetFilteredAnimes } from '../actions/getAnimes';
import {
  setGenresOption,
  resetGenresOption,
  setSortOption,
  resetSortOption,
  setStatusOption,
  resetStatusOption,
  setTypeOption,
  resetTypeOption,
  setPageOption,
  resetPageOption
} from '../actions/setFilterQuery';
import {
  Grid,
  Segment,
  Dropdown,
  Divider,
  Button,
  Icon
} from 'semantic-ui-react';

import GenresButtonGroup from './GenresButtonGroup';
import { filterOptions } from '../common/filterOptions';

class FilterOptions extends Component {
  componentDidMount() {
    const { sort, type, status, genres, page } = this.props;

    this.props.setSortOption(sort || 'score_desc');
    this.props.setTypeOption(type || -1);
    this.props.setStatusOption(status || -1);
    this.props.setPageOption(page || 1);
    this.props.setGenresOption(genres || []);

    this.props.getFilteredAnimes({
      odr: sort || 'score_desc',
      typ: type || -1,
      sts: status || -1,
      pg: page || 1,
      gnr: genres || []
    });
  }
  componentWillUnmount() {
    this.props.resetFilteredAnimes();
    // this.props.resetSortOption();
    // this.props.resetTypeOption();
    // this.props.resetStatusOption();
    // this.props.resetPageOption();
    // this.props.resetGenresOption();
  }

  handleSortChange = (e, props) => {
    this.props.resetPageOption();
    this.props.resetFilteredAnimes();
    this.props.setSortOption(props.value);
    const { type, status, genres, page } = this.props;
    this.props.getFilteredAnimes({
      odr: props.value,
      typ: type,
      sts: status,
      gnr: genres,
      pg: page
    });
  };
  handleTypeChange = (e, props) => {
    this.props.resetPageOption();
    this.props.resetFilteredAnimes();
    this.props.setTypeOption(props.value);
    const { sort, status, genres, page } = this.props;
    this.props.getFilteredAnimes({
      odr: sort,
      typ: props.value,
      sts: status,
      gnr: genres,
      pg: page
    });
  };
  handleStatusChange = (e, props) => {
    this.props.resetPageOption();
    this.props.resetFilteredAnimes();
    this.props.setStatusOption(props.value);
    const { sort, type, genres, page } = this.props;
    this.props.getFilteredAnimes({
      odr: sort,
      typ: type,
      sts: props.value,
      gnr: genres,
      pg: page
    });
  };

  // Navigation pages
  updatePage(pg) {
    const { sort, type, genres, status } = this.props;
    this.props.getFilteredAnimes({
      odr: sort,
      typ: type,
      sts: status,
      gnr: genres,
      pg: pg
    });
  }
  handleNextClick = e => {
    const pg = this.props.page + 1;
    if (pg <= this.props.filteredAnimes.last_page) {
      this.props.setPageOption(pg);
      this.props.resetFilteredAnimes();
      this.updatePage(pg);
    }
  };
  handlePrevClick = e => {
    const pg = this.props.page - 1;
    if (pg >= 1) {
      this.props.setPageOption(pg);
      this.props.resetFilteredAnimes();
      this.updatePage(pg);
    }
  };

  handleDoubleNext = e => {
    const pg = this.props.page + 5;
    if (pg <= this.props.filteredAnimes.last_page) {
      this.props.setPageOption(pg);
      this.props.resetFilteredAnimes();
      this.updatePage(pg);
    } else if (pg > this.props.filteredAnimes.last_page) {
      this.props.setPageOption(this.props.filteredAnimes.last_page);
      this.props.resetFilteredAnimes();
      this.updatePage(this.props.filteredAnimes.last_page);
    }
  };
  handleDoublePrev = e => {
    const pg = this.props.page - 10;
    if (pg >= 1) {
      this.props.setPageOption(pg);
      this.props.resetFilteredAnimes();
      this.updatePage(pg);
    } else if (pg < 1) {
      this.props.setPageOption(1);
      this.props.resetFilteredAnimes();
      this.updatePage(1);
    }
  };

  render() {
    const { filteredAnimes, sort, type, status, genres, page } = this.props;

    return (
      <Grid.Row>
        <Grid.Column>
          <Segment color="black">
            <Grid columns={'equal'}>
              <Grid.Column>
                <Dropdown
                  onChange={this.handleSortChange}
                  placeholder="Sort by - Highest"
                  selection
                  fluid
                  defaultValue={sort}
                  options={filterOptions.orderOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  onChange={this.handleTypeChange}
                  placeholder="Type - All"
                  selection
                  fluid
                  defaultValue={type}
                  options={filterOptions.typeOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  onChange={this.handleStatusChange}
                  placeholder="Status - All"
                  selection
                  fluid
                  defaultValue={status}
                  options={filterOptions.statusOptions}
                />
              </Grid.Column>
            </Grid>
            <Divider />
            <GenresButtonGroup />
            <Divider />
            <Grid centered>
              <Grid.Column textAlign="center">
                {filteredAnimes && filteredAnimes.last_page > 0 ? (
                  <Button.Group>
                    <Button
                      disabled={page === 1}
                      icon
                      size="mini"
                      onClick={this.handleDoublePrev}
                    >
                      <Icon name="fast backward" />
                    </Button>
                    <Button
                      disabled={page === 1}
                      icon
                      size="mini"
                      onClick={this.handlePrevClick}
                    >
                      <Icon name="chevron left" />
                    </Button>
                    <Button disabled>
                      {this.props.page} of {filteredAnimes.last_page}
                    </Button>
                    <Button
                      disabled={page === filteredAnimes.last_page}
                      icon
                      size="mini"
                      onClick={this.handleNextClick}
                    >
                      <Icon name="chevron right" />
                    </Button>
                    <Button
                      disabled={page === filteredAnimes.last_page}
                      icon
                      size="mini"
                      onClick={this.handleDoubleNext}
                    >
                      <Icon name="fast forward" />
                    </Button>
                  </Button.Group>
                ) : (
                  <p>...</p>
                )}
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

const mapStateToProps = ({
  filteredAnimes,
  sort,
  type,
  status,
  genres,
  page
}) => ({
  filteredAnimes,
  sort,
  type,
  status,
  genres,
  page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFilteredAnimes,
      resetFilteredAnimes,
      setGenresOption,
      resetGenresOption,
      setSortOption,
      resetSortOption,
      setStatusOption,
      resetStatusOption,
      setTypeOption,
      resetTypeOption,
      setPageOption,
      resetPageOption
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterOptions);
