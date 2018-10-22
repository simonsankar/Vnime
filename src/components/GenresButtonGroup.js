import React, { Component } from "react";
import { Accordion, Button, Icon, Grid } from "semantic-ui-react";

export default class GenresButtonGroup extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion>
        <Accordion.Title
          as={Button}
          basic
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          Genres
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Button.Group basic size="mini" widths={7}>
            <Button>Action</Button>
            <Button>Adventure</Button>
            <Button>Cars</Button>
            <Button>Comedy</Button>
            <Button>Dementia</Button>
            <Button>Demons</Button>
            <Button>Drama</Button>
          </Button.Group>
          <Button.Group basic widths={7} size="mini">
            <Button>Ecchi</Button>
            <Button>Fantasy</Button>
            <Button>Game</Button>
            <Button>Harem</Button>
            <Button>Historical</Button>
            <Button>Horror</Button>
            <Button>Josei</Button>
          </Button.Group>
          <Button.Group basic widths={7} size="mini">
            <Button>Kids</Button>
            <Button>Magic</Button>
            <Button>Martial Arts</Button>
            <Button>Mecha</Button>
            <Button>Military</Button>
            <Button>Music</Button>
            <Button>Mystery</Button>
          </Button.Group>
          <Button.Group basic widths={7} size="mini">
            <Button>Parody</Button>
            <Button>Police</Button>
            <Button>Psychological</Button>
            <Button>Romance</Button>
            <Button>Samurai</Button>
            <Button>School</Button>
            <Button>Sci-Fi</Button>
          </Button.Group>
          <Button.Group basic widths={7} size="mini">
            <Button>Seinen</Button>
            <Button>Shoujo</Button>
            <Button>Shoujo Ai</Button>
            <Button>Shounen</Button>
            <Button>Shounen Ai</Button>
            <Button>Slice of Life</Button>
            <Button>Space</Button>
          </Button.Group>
          <Button.Group basic widths={7} size="mini">
            <Button>Sports</Button>
            <Button>Super Power</Button>
            <Button>Supernatural</Button>
            <Button>Thriller</Button>
            <Button>Vampire</Button>
            <Button>Yaoi</Button>
            <Button>Yuri</Button>
          </Button.Group>
        </Accordion.Content>
      </Accordion>
    );
  }
}
