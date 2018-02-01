import React, { Component } from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import MapView from '../map-view/map-view';
import RoutesTable from '../routes-table/routes-table';
import transChannelInit from '../../subscriptions/trans-channel';
import {transChannelPull} from '../../redux/actions/subscription-actions';
import './app.css';

class App extends Component {
  componentWillMount() {
    const {dispatchTransChannelPull} = this.props;
    transChannelInit(dispatchTransChannelPull);
  }

  render() {
    const {title} = this.props;
    return (
      <div className="app">

        <div className="app__table">
          <h1 className="app__header">{title}</h1>
          <RoutesTable />
        </div>

        <div className="app__map">
          <MapView />
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: get(state, ['settings', 'title']),
});

const mapDispatchToProps = {
  dispatchTransChannelPull: transChannelPull
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
