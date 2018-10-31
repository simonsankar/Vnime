import React, { Component } from 'react';
import _ from 'lodash';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import GenreButton from './GenreButton';

import { filterOptions } from '../common/filterOptions';

export default class GenresButtonGroup extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  // Breaks genres into rows of 7
  makeGenresChunks(arr) {
    const chunks = _.chunk(arr, 7);
    return chunks;
  }

  render() {
    const { activeIndex } = this.state;
    const genreButtons = this.makeGenresChunks(filterOptions.genreOptions).map(
      (range, index) => {
        return (
          <Button.Group key={index} basic size="mini" widths={7}>
            {range.map((el, index) => (
              <GenreButton key={index + 'btn'} el={el} />
            ))}
          </Button.Group>
        );
      }
    );
    return (
      <Accordion>
        <Accordion.Title
          as={Button}
          basic
          size={'tiny'}
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          Genres
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {genreButtons}
        </Accordion.Content>
      </Accordion>
    );
  }
}
