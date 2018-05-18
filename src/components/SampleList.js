import React from 'react';
import SampleItem from './SampleItem';

const SampleList = ({ animes }) => {
  return (
    <div>
      {animes.map((el, index) => {
        <SampleItem key={el.id} anime={el} />;
      })}
    </div>
  );
};

export default SampleList;
