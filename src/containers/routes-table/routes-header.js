import React from 'react';
import './routes-header.css';

const RoutesHeader = (props) => {
  const {routesLabel, busesLabel} = props;
  return (
    <div className="routes-table__header row row--header">
      <div className="row__route">{routesLabel}</div>
      <div className="row__total-buses">{busesLabel}</div>
    </div>
  )
}

export default RoutesHeader;
