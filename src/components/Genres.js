import React, { Component } from "react";
import { Grid, Dropdown, Segment, Divider } from "semantic-ui-react";

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
                      fluid={false}
                      placeholder="Sort by"
                      fluid
                      selection
                      options={this.state.sort}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      placeholder="Type"
                      fluid
                      selection
                      options={this.state.type}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown
                      placeholder="Status"
                      fluid
                      selection
                      options={this.state.status}
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
