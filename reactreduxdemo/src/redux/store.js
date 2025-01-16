import {createStore,applyMiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootreducers'
import logger from 'redux-logger'
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(logger))
  );
//const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger)))


export default store 

