import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateFilterQuery, resetFilterQuery } from "../actions/setFilterQuery";
import { Grid, Segment, Dropdown, Divider } from "semantic-ui-react";

import GenresButtonGroup from "./GenresButtonGroup";
import { filterOptions } from "../common/filterOptions";

class FilterOptions extends Component {
  state = {
    query: {
      order: "",
      type: "",
      status: "",
      genres: [],
      page: ""
    }
  };

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Grid columns={"equal"}>
              <Grid.Column>
                <Dropdown
                  placeholder="Sort by"
                  fluid
                  selection
                  defaultValue={filterOptions.orderOptions[0].value}
                  options={filterOptions.orderOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Type - All"
                  fluid
                  selection
                  options={filterOptions.typeOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Status - All"
                  fluid
                  selection
                  options={filterOptions.statusOptions}
                />
              </Grid.Column>
            </Grid>
            <Divider />
            <GenresButtonGroup />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

const mapStateToProps = ({ filterQuery }) => ({ filterQuery });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateFilterQuery, resetFilterQuery }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterOptions);
