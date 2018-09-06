import React from 'react';

import DashboardItem from './DashboardItem';

const DashboardList = ({ removable, animes }) => {
  console.log(removable);
  let arr = Object.values(animes);
  return arr.map((el, index) => {
    return <DashboardItem removable={removable} key={el.info.id} anime={el} />;
  });
};

export default DashboardList;
