import React from 'react';
import './routes-row-icon.css';

const RoutesRowIcon = (props) => {
  const {color} = props;
  return (
    <div 
      className="row__icon" 
      style={{background: color}}>
    </div>      
  )
}

export default RoutesRowIcon;
