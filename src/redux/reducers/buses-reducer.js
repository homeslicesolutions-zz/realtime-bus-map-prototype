import ActionTypes from '../constants';
import {get} from 'lodash'; 

// Initial State
const initialState = {
  allIds: [],
  byId: {},
  totalBuses: 0,
};

// Reducers
const reducer = {
  [ActionTypes.TRANS_CHANNEL_PULL](state, action) {
    const {allIds, byId} = state;
    const {payload} = action;
    
    // Parse Data
    const id  = get(payload, ['entity', 0, 'id']);
    const bus = get(payload, ['entity', 0, 'vehicle']);

    // Add to Add IDs if they don't exist
    const newAllIds     = !allIds.includes(id) ? [...allIds, id] : [...allIds];
    const newById       = {...byId, [id]: {...bus}};
    const newTotalBuses = newAllIds.length;

    return {
      allIds    : newAllIds,
      byId      : newById,
      totalBuses: newTotalBuses
    };
  }
};

// Export
export default function busesReducer(state = initialState, action) {
  return reducer[action.type] ? reducer[action.type](state, action) : state;
}
