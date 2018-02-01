import {combineReducers} from 'redux';
import busesReducer from './buses-reducer';
import routesReducer from './routes-reducer';
import filterReducer from './filter-reducer';
import settingsMock from './settings-mock';

export default combineReducers({
  filter  : filterReducer,
  buses   : busesReducer,
  routes  : routesReducer,
  settings: settingsMock
});
