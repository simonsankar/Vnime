import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import HeaderBar from "./HeaderBar";
import FilterOptions from "./FilterOptions";

class Genres extends Component {
  render() {
    return (
      <div>
        <Grid padded="horizontally">
          <HeaderBar text={"Filter Animes"} />
          <FilterOptions />
        </Grid>
      </div>
    );
  }
}

export default Genres;
