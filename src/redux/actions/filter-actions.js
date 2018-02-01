import ActionTypes from '../constants';

// ACTIONS
const filterRouteToggle = (route) => ({
  type   : ActionTypes.FILTER_ROUTE_TOGGLE,
  payload: route
});

// EXPORT
export {filterRouteToggle};
