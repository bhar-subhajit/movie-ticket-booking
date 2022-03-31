import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';
import saga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleare = createSagaMiddleware();

let store = createStore(reducers, applyMiddleware(sagaMiddleare, logger))

sagaMiddleare.run(saga);

export default store;