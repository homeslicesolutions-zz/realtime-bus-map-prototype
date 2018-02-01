import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {filterRouteToggle} from '../../redux/actions/filter-actions';
import './map-marker.css';

class MapMarker extends Component {
  handleClick = () => {
    const {route, dispatchFilterRouteToggle} = this.props;
    dispatchFilterRouteToggle(route);
  };

  render() {
    const {id, route, colors, routesAllIds, routeToFilter} = this.props;
    const isVisible = !routeToFilter || routeToFilter === route; 

    const routeIndex = routesAllIds.indexOf(route);
    const color = colors[routeIndex];

    return isVisible ? (
      <div className="map-marker" onClick={this.handleClick}>
        
        <div className="map-marker__marker">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 20">
            <path
              fill={color} 
              d="M13.66,2.43a7.81,7.81,0,0,0-11.31,0,8.49,8.49,0,0,0,0,11.72L8,20l5.66-5.86A8.49,8.49,0,0,0,13.66,2.43Z"/>
          </svg>
        </div>
    
        <div className="map-marker__name">
          {id}
        </div>
    
      </div>
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  return {
    route        : get(state, ['buses', 'byId', id, 'vehicle', 'label']),
    routesAllIds : get(state, ['routes', 'allIds']),
    routeToFilter: get(state, ['filter', 'route']),
    colors       : get(state, ['settings', 'colors']),
  }
};

const mapDispatchToProps = {
  dispatchFilterRouteToggle: filterRouteToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
