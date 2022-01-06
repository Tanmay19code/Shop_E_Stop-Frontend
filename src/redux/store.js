/* eslint-disable import/no-import-module-exports */
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer.js'


const store = createStore(authReducer, applyMiddleware(thunk));


export default store;
