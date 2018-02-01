import {createStore} from 'redux';
import reducers from './reducers';

function initializeStore(preloadedState = {}) {
  const reduxDevTools = window && window.devToolsExtension ? window.devToolsExtension() : (f) => f;
  return reduxDevTools(createStore)(reducers, preloadedState);
}

export default initializeStore;
