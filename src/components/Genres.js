import React, { Component } from "react";
import { Grid, Dropdown, Segment, Divider, Button } from "semantic-ui-react";

import HeaderBar from "./HeaderBar";
import GenresButtonGroup from "./GenresButtonGroup";

class Genres extends Component {
  state = {
    sort: [
      { key: "a-z", value: "something", text: "A-Z" },
      { key: "z-a", value: "something2", text: "Z-A" },
      { key: "highest", value: "something3", text: "Highest" },
      { key: "lowest", value: "something5", text: "Lowest" }
    ],
    type: [
      { key: "tv", value: "tv", text: "TV" },
      { key: "ova", value: "ova", text: "OVA" },
      { key: "ona", value: "ona", text: "ONA" },
      { key: "special", value: "special", text: "Special" }
    ],
    status: [
      { key: "ongoing", value: "ongoing", text: "Ongoing" },
      { key: "completed", value: "completed", text: "Completed" }
    ]
  };

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
                      options={this.state.sort}
                      onChange={this.handleSortChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      defaultValue={this.state.type[0].value}
                      placeholder="Type"
                      fluid
                      selection
                      options={this.state.type}
                      onChange={this.handleTypeChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      placeholder="Status"
                      fluid
                      selection
                      options={this.state.status}
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
