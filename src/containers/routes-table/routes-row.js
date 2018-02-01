import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import RoutesRowIcon from './routes-row-icon';
import {filterRouteToggle} from '../../redux/actions/filter-actions';
import './routes-row.css';

class RoutesRow extends Component {
  handleClick = () => {
    const {route, dispatchFilterRouteToggle} = this.props;
    dispatchFilterRouteToggle(route);
  };

  render() {
    const {routeToFilter, color, route, totalBuses} = this.props;
    const isActive = route === routeToFilter;
    
    return (
      <div className={`routes-table__row row${isActive ? ' row--active' : ''}`} onClick={this.handleClick}>
        <div className="row__route">
          <RoutesRowIcon color={color} />
          {route}
        </div>
        <div className="row__total-buses">
          {totalBuses}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {route, index} = ownProps;
  const colors = get(state, ['settings', 'colors']);
  return {
    route,
    busIds       : get(state, ['routes', 'byId', route, 'allBusIds']),
    totalBuses   : get(state, ['routes', 'byId', route, 'totalBuses']),
    routeToFilter: get(state, ['filter', 'route']),
    color        : colors[index]
  }
};

const mapDispatchToProps = {
  dispatchFilterRouteToggle: filterRouteToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesRow);
