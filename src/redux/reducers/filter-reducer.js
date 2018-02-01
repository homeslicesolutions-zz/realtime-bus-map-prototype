import ActionTypes from '../constants';

// Initial State
const initialState = {
  route: null
};

// Reducers
const reducer = {
  [ActionTypes.FILTER_ROUTE_TOGGLE](state, action) {
    const {route:oldRoute} = state;
    const {payload:newRoute} = action;

    // If current is same then toggle to off
    if (oldRoute === newRoute) {
      return {route: null}
    }

    // else new route
    return {route: newRoute}
  }
};

// Export
export default function filterReducer(state = initialState, action) {
  return reducer[action.type] ? reducer[action.type](state, action) : state;
}
