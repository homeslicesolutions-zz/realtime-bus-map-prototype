import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import RoutesHeader from './routes-header';
import RoutesRow from './routes-row';
import './routes-table.css';

class RoutesTable extends Component {
  render() {
    const {routesAllIds} = this.props;
    return (
      <div className="routes-table">
        <RoutesHeader 
          routesLabel="Routes"
          busesLabel="Buses on Route" 
        />
        {routesAllIds.map((route, index) => (
          <RoutesRow 
            key={route}
            index={index}
            route={route} 
          />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  routesAllIds: get(state, ['routes', 'allIds'])
});

export default connect(mapStateToProps)(RoutesTable);
