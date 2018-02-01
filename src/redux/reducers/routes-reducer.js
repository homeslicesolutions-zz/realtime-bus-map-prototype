import ActionTypes from '../constants';
import {get} from 'lodash';

// Initial State
const initialState = {
  allIds     : [],
  byId       : {},
  totalRoutes: 0
};

// Reducers
const reducer = {
  [ActionTypes.TRANS_CHANNEL_PULL](state, action) {
    const {allIds, byId} = state;
    const {payload} = action;

    // Parse Data
    const busId      = get(payload, ['entity', 0, 'id']);
    const routeId    = get(payload, ['entity', 0, 'vehicle', 'vehicle', 'label']);

    // If no route indicated, return
    if (!routeId) return {...state};

    // Parse State
    const allBusIds  = get(byId, [routeId, 'allBusIds'], []);

    // New States
    const newAllIds      = !allIds.includes(routeId) ? [...allIds, routeId] : [...allIds];
    const newTotalRoutes = newAllIds.length;
    const newAllBusIds   = !allBusIds.includes(busId) ? [...allBusIds, busId] : [...allBusIds];
    const newTotalBuses  = newAllBusIds.length;
    const newById = {
      ...byId,
      [routeId]: {
        allBusIds : newAllBusIds,
        totalBuses: newTotalBuses
      }
    }

    return {
      allIds     : newAllIds,
      byId       : newById,
      totalRoutes: newTotalRoutes
    };
  }
};

// Export
export default function routesReducer(state = initialState, action) {
  return reducer[action.type] ? reducer[action.type](state, action) : state;
}
