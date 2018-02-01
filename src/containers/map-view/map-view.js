import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker';

class MapView extends Component {
  render() {
    const {
      center, 
      zoom, 
      busesAllIds,
      busesById
    } = this.props;
    
    return (
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {busesAllIds.map(id => {
          // Injecting these location coords are part of the GoogleMapReact requirements
          const lat = get(busesById, [id, 'position', 'latitude']);
          const lng = get(busesById, [id, 'position', 'longitude']);
          return (
            <MapMarker 
              key={id}
              lat={lat} 
              lng={lng}
              id={id}
            />
          )
        })}
        
      </GoogleMapReact>
    )
  }
}

const mapStateToProps = (state) => ({
  busesById  : get(state, ['buses', 'byId']),
  busesAllIds: get(state, ['buses', 'allIds']),
  center     : get(state, ['settings', 'center']),
  zoom       : get(state, ['settings', 'zoom']),
});

export default connect(mapStateToProps)(MapView);
