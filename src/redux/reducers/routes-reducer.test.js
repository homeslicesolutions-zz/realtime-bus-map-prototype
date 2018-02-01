import reducer from './routes-reducer';
import ActionTypes from '../constants';

describe('Routes reducer', () => {

  it('should return the initial state', () => {
    // ARRANGE => Current state
    const currentState = undefined;

    // ACT => Action
    const resultingState = reducer(currentState, {});

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      allIds: [],
      byId: {},
      totalRoutes: 0
    });
  });

  it('should map fields from payload to correct result', () => {
    // ARRANGE => Current state
    const currentState = undefined;

    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.TRANS_CHANNEL_PULL,
      payload: {
        "entity": [
          {
            "id": "224",
            "vehicle": {
              "vehicle": {
                "id": "224",
                "label": "Blue to Hillsboro"
              },
              "position": {
                "latitude": 45.523, 
                "longitude": -122.651
              }
            }
          }
        ]
      }
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      "allIds": [
        "Blue to Hillsboro"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 1
    });
  });

  it('should add new route to the list if not exist', () => {
    // ARRANGE => Current state
    const currentState = {
      "allIds": [
        "Blue to Hillsboro"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 1
    };

    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.TRANS_CHANNEL_PULL,
      payload: {
        "entity": [
          {
            "id": "400",
            "vehicle": {
              "vehicle": {
                "id": "400",
                "label": "Red to Yellow"
              },
              "position": {
                "latitude": 123,
                "longitude": 543
              }
            }
          }
        ]
      }
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      "allIds": [
        "Blue to Hillsboro",
        "Red to Yellow"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        },
        "Red to Yellow": {
          "allBusIds": [
            "400"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 2
    });
  
  });

  it('should add new bus and increment count if matching existing route', () => {
    // ARRANGE => Current state
    const currentState = {
      "allIds": [
        "Blue to Hillsboro",
        "Red to Yellow"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        },
        "Red to Yellow": {
          "allBusIds": [
            "400"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 2
    };
  
    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.TRANS_CHANNEL_PULL,
      payload: {
        "entity": [
          {
            "id": "123",
            "vehicle": {
              "vehicle": {
                "id": "123",
                "label": "Blue to Hillsboro"
              },
              "position": {
                "latitude": 123,
                "longitude": 543
              }
            }
          }
        ]
      }
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      "allIds": [
        "Blue to Hillsboro",
        "Red to Yellow"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224",
            "123"
          ],
          "totalBuses": 2
        },
        "Red to Yellow": {
          "allBusIds": [
            "400"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 2
    });
  
  });

  it('should not add bus count if bus and route already exist', () => {
    // ARRANGE => Current state
    const currentState = {
      "allIds": [
        "Blue to Hillsboro"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 1
    };

    // ACT => Action
    const resultingState = reducer(currentState, {
      type: ActionTypes.TRANS_CHANNEL_PULL,
      payload: {
        "entity": [
          {
            "id": "224",
            "vehicle": {
              "vehicle": {
                "id": "224",
                "label": "Blue to Hillsboro"
              },
              "position": {
                "latitude": 123,
                "longitude": 543
              }
            }
          }
        ]
      }
    });

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      "allIds": [
        "Blue to Hillsboro"
      ],
      "byId": {
        "Blue to Hillsboro": {
          "allBusIds": [
            "224"
          ],
          "totalBuses": 1
        }
      },
      "totalRoutes": 1
    });
  
  });

})