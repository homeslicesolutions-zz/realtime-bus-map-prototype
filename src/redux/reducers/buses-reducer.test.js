import reducer from './buses-reducer';
import ActionTypes from '../constants';

describe('Buses reducer', () => {

  it('should return the initial state', () => {
    // ARRANGE => Current state
    const currentState = undefined;

    // ACT => Action
    const resultingState = reducer(currentState, {});

    // ASSERT => Compare result to expected state
    expect(resultingState).toEqual({
      allIds: [],
      byId: {},
      totalBuses: 0,
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
      "allIds": ["224"], 
      "byId": 
        { 
          "224": { 
          "position": { 
            "latitude": 45.523, 
            "longitude": -122.651 
          }, 
          "vehicle": { 
            "id": "224", 
            "label": "Blue to Hillsboro"
          } 
        } 
      }, 
      "totalBuses": 1 
    });
  });

  it('should add new bus to the list if not exist', () => {
    // ARRANGE => Current state
    const currentState = {
      "allIds": ["224"], 
      "byId": 
        { 
          "224": { 
          "position": { 
            "latitude": 45.523, 
            "longitude": -122.651 
          }, 
          "vehicle": { 
            "id": "224", 
            "label": "Blue to Hillsboro"
          } 
        } 
      }, 
      "totalBuses": 1 
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
      "allIds": ["224", "400"], 
      "byId": { 
        "224": { 
          "position": { 
            "latitude": 45.523, 
            "longitude": -122.651 
          }, 
          "vehicle": { 
            "id": "224", 
            "label": "Blue to Hillsboro"
          } 
        },
        "400": {
          "vehicle": {
            "id": "400",
            "label": "Blue to Hillsboro"
          },
          "position": {
            "latitude": 123,
            "longitude": 543
          }
        }
      }, 
      "totalBuses": 2
    });
  
  });

  it('should update the last bus if does exist', () => {
    // ARRANGE => Current state
    const currentState = {
      "allIds": ["224"], 
      "byId": 
        { 
          "224": { 
          "position": { 
            "latitude": 45.523, 
            "longitude": -122.651 
          }, 
          "vehicle": { 
            "id": "224", 
            "label": "Blue to Hillsboro"
          } 
        } 
      }, 
      "totalBuses": 1 
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
      "allIds": ["224"], 
      "byId": { 
        "224": { 
          "position": { 
            "latitude": 123,
            "longitude": 543 
          }, 
          "vehicle": { 
            "id": "224", 
            "label": "Blue to Hillsboro"
          } 
        }
      }, 
      "totalBuses": 1
    });
  
  });

})