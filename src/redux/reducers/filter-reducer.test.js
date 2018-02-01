import reducer from './filter-reducer';
import ActionTypes from '../constants';

describe('Routes reducer', () => {

  it('should return the initial state', () => {
    // ARRANGE => Current state
    const currentState = undefined;

    // ACT => Action
    const resultingState = reducer(currentState, {});

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      route: null
    });
  });

  it('should set the filter ID if route is not set', () => {
    // ARRANGE => Current state
    const currentState = undefined;

    // ACT => Action
    const resultingState = reducer(currentState, {
      type   : ActionTypes.FILTER_ROUTE_TOGGLE,
      payload: "Red to Yellow"
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      "route": "Red to Yellow"
    });
  });

  it('should switch to different route if specified a diff', () => {
    // ARRANGE => Current state
    const currentState = {
      route: "Red to yellow"
    };

    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.FILTER_ROUTE_TOGGLE,
      payload: "West to Hillsborough"
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      route: "West to Hillsborough"
    });
  
  });

  it('should toggle off if interacted with current route', () => {
    // ARRANGE => Current state
    const currentState = {
      route: "Here to there"
    };
  
    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.FILTER_ROUTE_TOGGLE,
      payload: "Here to there"
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      route: null
    });
  
  });

})