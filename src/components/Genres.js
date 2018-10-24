import React, { Component } from "react";
import { Grid, Dropdown, Segment, Divider, Button } from "semantic-ui-react";

import HeaderBar from "./HeaderBar";
import GenresButtonGroup from "./GenresButtonGroup";

import { filterOptions } from "../common/filterOptions";

class Genres extends Component {
  handleSortChange = (e, { value }) => {
    console.log(value);
  };
  handleTypeChange = (e, props) => {
    console.log(props.defaultValue);
  };
  handleStatusChange = (e, props) => {
    console.log(props);
  };

  render() {
    return (
      <div>
        <Grid padded="horizontally">
          <HeaderBar text={"Filter Animes | In development"} />
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
                      onChange={this.handleSortChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      placeholder="Type - All"
                      fluid
                      selection
                      options={filterOptions.typeOptions}
                      onChange={this.handleTypeChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      placeholder="Status - All"
                      fluid
                      selection
                      options={filterOptions.statusOptions}
                      onChange={this.handleStatusChange}
                    />
                  </Grid.Column>
                </Grid>
                <Divider />
                <GenresButtonGroup />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Genres;
