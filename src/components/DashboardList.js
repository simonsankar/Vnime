import React from 'react';
import _ from 'lodash';

import DashboardItem from './DashboardItem';

const DashboardList = ({ removable, animes }) => {
  // Sort by title
  let arr = _.orderBy(
    Object.values(animes), //Object of objects => array of objects
    anime => {
      return anime.info.title;
    },
    'asc'
  );
  return arr.map((el, index) => {
    return <DashboardItem removable={removable} key={el.info.id} anime={el} />;
  });
};

export default DashboardList;
