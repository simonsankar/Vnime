import React, { Component } from "react";
import AnimeItem from "./AnimeItem";
import { Grid } from "semantic-ui-react";

class AnimeList extends Component {
  render() {
    const { animes } = this.props;
    return (
      <Grid className="padding-fix height-big fade-in">
        {animes
          ? animes.map((anime, index) => (
              <AnimeItem key={index} anime={anime} />
            ))
          : ""}
      </Grid>
    );
  }
}

export default AnimeList;
